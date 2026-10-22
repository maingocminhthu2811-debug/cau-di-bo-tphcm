import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, Compass, Sparkles, Eye, Maximize2 } from 'lucide-react';

interface Interactive3DViewerProps {
  onOpenFullscreen?: () => void;
}

export const Interactive3DViewer: React.FC<Interactive3DViewerProps> = ({ onOpenFullscreen }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isWireframe, setIsWireframe] = useState<boolean>(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe8f5eb); // Fresh light green studio background
    scene.fog = new THREE.FogExp2(0xe8f5eb, 0.012);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 18, 55);
    camera.lookAt(0, 2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lights - Warm Gold Sunlight & Emerald Soft Ambient
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xf59e0b, 1.5); // Sunburst Gold
    sunLight.position.set(30, 50, 20);
    scene.add(sunLight);

    const emeraldSpot = new THREE.PointLight(0x059669, 2.5, 70);
    emeraldSpot.position.set(-15, 10, 10);
    scene.add(emeraldSpot);

    const goldSpot = new THREE.PointLight(0xeab308, 2.5, 70);
    goldSpot.position.set(15, 10, -10);
    scene.add(goldSpot);

    // Saigon River Water Surface (Shimmering Emerald Water)
    const riverGeo = new THREE.PlaneGeometry(160, 120, 64, 64);
    const riverMat = new THREE.MeshStandardMaterial({
      color: 0x047857, // Deep emerald river water
      roughness: 0.15,
      metalness: 0.7,
      wireframe: isWireframe
    });
    const river = new THREE.Mesh(riverGeo, riverMat);
    river.rotation.x = -Math.PI / 2;
    river.position.y = -2;
    scene.add(river);

    // Bridge Group
    const bridgeGroup = new THREE.Group();

    // Pedestrian Deck (Sleek Dark Emerald Steel)
    const deckGeo = new THREE.BoxGeometry(42, 0.6, 6);
    const deckMat = new THREE.MeshStandardMaterial({
      color: 0x064e3b, // Dark green
      metalness: 0.6,
      roughness: 0.3,
      wireframe: isWireframe
    });
    const deck = new THREE.Mesh(deckGeo, deckMat);
    bridgeGroup.add(deck);

    // Water Coconut Leaf Arch (Gold & Emerald Steel Arc)
    const curvePoints: THREE.Vector3[] = [];
    const segments = 60;
    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * 2 - 1;
      const x = t * 20;
      const y = Math.sin((i / segments) * Math.PI) * 11 + Math.cos(t * Math.PI * 2) * 0.8;
      const z = Math.sin((i / segments) * Math.PI * 2) * 1.8;
      curvePoints.push(new THREE.Vector3(x, y, z));
    }

    const archCurve = new THREE.CatmullRomCurve3(curvePoints);
    const archGeo = new THREE.TubeGeometry(archCurve, 80, 0.7, 12, false);
    const archMat = new THREE.MeshStandardMaterial({
      color: 0xd97706, // Warm gold
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0xca8a04,
      emissiveIntensity: 0.5,
      wireframe: isWireframe
    });
    const mainArch = new THREE.Mesh(archGeo, archMat);
    bridgeGroup.add(mainArch);

    // Secondary Rib Cables (Emerald Stay Cables)
    const ribGroup = new THREE.Group();
    for (let i = 1; i < segments; i += 3) {
      const point = curvePoints[i];
      const stayGeo = new THREE.CylinderGeometry(0.08, 0.08, point.y, 8);
      const stayMat = new THREE.MeshBasicMaterial({
        color: 0x15803d,
        wireframe: isWireframe
      });
      const cable = new THREE.Mesh(stayGeo, stayMat);
      cable.position.set(point.x, point.y / 2, point.z * 0.5);
      ribGroup.add(cable);
    }
    bridgeGroup.add(ribGroup);

    // Pier Columns
    const pierMat = new THREE.MeshStandardMaterial({ color: 0x065f46, roughness: 0.5 });
    const pierLeft = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.5, 8, 16), pierMat);
    pierLeft.position.set(-18, -4, 0);
    const pierRight = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.5, 8, 16), pierMat);
    pierRight.position.set(18, -4, 0);
    bridgeGroup.add(pierLeft);
    bridgeGroup.add(pierRight);

    scene.add(bridgeGroup);

    // Particles (Golden Sun & Emerald Mist Sparkles)
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 80;
      positions[i + 1] = Math.random() * 20 - 2;
      positions[i + 2] = (Math.random() - 0.5) * 60;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.3,
      color: 0xeab308,
      transparent: true,
      opacity: 0.75
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Drag Interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      bridgeGroup.rotation.y += deltaX * 0.005;
      bridgeGroup.rotation.x += deltaY * 0.003;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime();

      // Gentle floating river wave movement
      const posAttr = riverGeo.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        const u = posAttr.getX(i);
        const v = posAttr.getY(i);
        const z = Math.sin(u * 0.2 + time * 1.5) * 0.25 + Math.cos(v * 0.2 + time * 1.2) * 0.2;
        posAttr.setZ(i, z);
      }
      posAttr.needsUpdate = true;

      if (!isDragging) {
        bridgeGroup.rotation.y += 0.002;
      }

      archMat.emissiveIntensity = 0.4 + Math.sin(time * 2.5) * 0.2;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      domElem.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(domElem)) {
        container.removeChild(domElem);
      }
    };
  }, [isWireframe]);

  return (
    <div className="relative w-full h-[420px] md:h-[540px] rounded-3xl overflow-hidden border border-emerald-300 bg-emerald-50/90 shadow-xl group">
      {/* 3D Canvas Mount Point */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Controls Overlay */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-2 bg-emerald-950 text-amber-300 border border-emerald-800 rounded-full px-3.5 py-1.5 shadow-md text-xs font-mono font-bold pointer-events-auto">
          <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span>3D ARCHITECTURAL STUDIO</span>
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse ml-1" />
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setIsWireframe(!isWireframe)}
            className={`p-2 rounded-full border text-xs font-semibold transition-all shadow-sm ${
              isWireframe
                ? 'bg-amber-400 text-amber-950 border-amber-500 font-bold'
                : 'bg-white text-emerald-950 border-emerald-300 hover:bg-emerald-100'
            }`}
            title="Bật/Tắt chế độ khung dây thép (Wireframe)"
          >
            <Layers className="w-4 h-4" />
          </button>

          {onOpenFullscreen && (
            <button
              onClick={onOpenFullscreen}
              className="p-2 rounded-full bg-white text-emerald-950 border border-emerald-300 hover:bg-emerald-100 transition-all shadow-sm"
              title="Xem toàn màn hình"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Info Badge Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none z-10">
        <div className="bg-emerald-950/95 border border-emerald-800 text-slate-100 rounded-2xl px-4 py-2.5 backdrop-blur-md shadow-lg pointer-events-auto max-w-sm">
          <p className="font-bold text-amber-300 text-xs mb-0.5 flex items-center gap-1.5 font-display">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Mô Phỏng Vòm Thép 3D Lá Dừa Nước
          </p>
          <p className="text-slate-300 text-[11px] leading-relaxed font-sans">
            Kéo chuột để xoay mô hình vòm thép 3.400T trên sông Sài Gòn.
          </p>
        </div>

        <div className="pointer-events-auto">
          <button
            onClick={() => {}}
            className="px-3.5 py-1.5 rounded-full bg-emerald-900 border border-amber-400/60 text-amber-300 text-xs font-mono font-bold hover:bg-emerald-800 transition-all shadow"
          >
            <Eye className="w-3.5 h-3.5 inline mr-1" />
            Lá Dừa Nước
          </button>
        </div>
      </div>
    </div>
  );
};
