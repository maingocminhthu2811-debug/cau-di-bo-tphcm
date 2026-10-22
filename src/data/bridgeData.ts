import { MilestoneItem, GalleryImage, ArchitecturalSpot } from '../types';

export const HERO_DATA = {
  title: "Cầu đi bộ bắc qua sông Sài Gòn",
  subtitle: "Điểm nhấn kiến trúc mới của TPHCM",
  sapo: "Bắt đầu triển khai từ năm 2019, đến nay, cầu đi bộ qua sông Sài Gòn đã dần thành hình trong niềm vui và tự hào của người dân TPHCM. Lấy cảm hứng từ hình ảnh lá dừa nước gắn liền với vùng đất Nam Bộ, cây cầu được kỳ vọng trở thành một điểm nhấn kiến trúc mới của TPHCM, nơi người dân và du khách có thể dạo bước, ngắm nhìn sông Sài Gòn và thành phố từ một góc nhìn khác.\n\nMời bạn đọc Báo SGGP cùng nhìn lại những cột mốc nổi bật của công trình trong 8 năm qua.",
  stats: [
    { label: "Tổng mức đầu tư", value: "1.000 Tỷ", detail: "Nutifood tài trợ 100%" },
    { label: "Tải trọng dầm thép", value: "3.400 Tấn", detail: "Kết cấu lá dừa nước" },
    { label: "Hành trình lai dắt", value: "124 km", detail: "Vũng Tàu về Thủ Thiêm" },
    { label: "Dự kiến vận hành", value: "Tết 2027", detail: "Phục vụ người dân TPHCM" }
  ]
};

// Phase 1 Milestones
export const TIMELINE_PHASE_1: MilestoneItem[] = [
  {
    id: "m-2019-08",
    timeLabel: "Tháng 8-2019",
    content: "Sở Quy hoạch- Kiến trúc TPHCM được UBND TPHCM giao hoàn chỉnh kế hoạch tổ chức tuyển chọn và thiết kế tuyển chọn phương án kiến trúc cầu đi bộ qua sông Sài Gòn."
  },
  {
    id: "m-2019-09",
    timeLabel: "Tháng 9-2019",
    content: "Sở Quy hoạch – Kiến trúc đã tổ chức tuyển chọn “Phương án Thiết kế Kiến trúc cầu đi bộ qua Sông Sài Gòn”."
  },
  {
    id: "m-2023-10",
    timeLabel: "Đến tháng 10-2023",
    content: "“Phương án thiết kế kiến trúc cầu đi bộ qua sông Sài Gòn” của Liên danh Chodai - Takashi Niwa Architects và Chodai Kisojiban Việt Nam được chọn. Đây là phương án tối ưu nhất trong 12 phương án thiết kế của 54 đơn vị tư vấn tham gia dự tuyển.",
    subContent: "Thiết kế cầu đi bộ lấy cảm hứng từ hình dáng chiếc lá dừa nước, một biểu tượng đặc trưng của vùng Nam bộ. Cây cầu không chỉ mang phong cách hiện đại mà còn tôn vinh nét đẹp truyền thống, hài hòa với cảnh quan thiên nhiên và đô thị xung quanh.",
    images: [
      {
        id: "p1-1",
        url: "/assets/aistudio/Ph_i_c_nh_to_n_b__c_u__i_b__qua_s_ng_S_i_G_n.__nh_CTV_a7ddf3b4.jpg",
        alt: "Phối cảnh toàn bộ cầu đi bộ qua sông Sài Gòn",
        caption: "Phối cảnh toàn bộ cầu đi bộ qua sông Sài Gòn",
        location: "Sông Sài Gòn - Bến Bạch Đằng",
        date: "Tháng 10/2023"
      },
      {
        id: "p1-2",
        url: "/assets/aistudio/M__h_nh_c_u__i_b_.__nh_CTV_b8b4b0f4.jpg",
        alt: "Mô hình cầu đi bộ",
        caption: "Mô hình cầu đi bộ. Ảnh: CTV",
        location: "TPHCM",
        date: "Tháng 10/2023"
      }
    ]
  },
  {
    id: "m-2023-12",
    timeLabel: "Tháng 12-2023",
    content: "UBND TPHCM tổ chức lễ ký kết biên bản thỏa thuận tài trợ công trình cầu đi bộ bắc qua sông Sài Gòn, tổng chi phí ước tính 1.000 tỷ đồng, do Công ty CP Thực phẩm dinh dưỡng Nutifood tài trợ.",
    subContent: "Tại lễ ký kết biên bản thỏa thuận tài trợ, lãnh đạo TPHCM nhấn mạnh, trong quá trình phát triển chung của thành phố, bên cạnh nguồn lực do thành phố tạo ra, các thế hệ lãnh đạo thành phố luôn trân trọng những nguồn lực đóng góp của xã hội vì một thành phố văn minh, hiện đại.",
    images: [
      {
        id: "p2-1",
        url: "/assets/aistudio/hinh_1_ca727da2.jpg",
        alt: "Đại diện Sở GTVT TPHCM và Công ty CP Thực phẩm Dinh dưỡng Nutifood chính thức ký kết",
        caption: "Đại diện Sở GTVT TPHCM và Công ty CP Thực phẩm Dinh dưỡng Nutifood chính thức ký kết Biên bản thỏa thuận tài trợ về việc xây dựng cầu đi bộ qua sông Sài Gòn, ngày 4-12-2023",
        location: "UBND TPHCM",
        date: "04/12/2023"
      },
      {
        id: "p2-2",
        url: "/assets/aistudio/hinh_2_a9617bce.jpg",
        alt: "Nghi thức trao biên bản thỏa thuận tài trợ xây dựng cầu đi bộ qua sông Sài Gòn",
        caption: "Đại diện Sở GTVT TPHCM và Công ty CP Thực phẩm Dinh dưỡng Nutifood chính thức ký kết Biên bản thỏa thuận tài trợ về việc xây dựng cầu đi bộ qua sông Sài Gòn, ngày 4-12-2023",
        location: "UBND TPHCM",
        date: "04/12/2023"
      }
    ]
  },
  {
    id: "m-2025-03",
    timeLabel: "Ngày 29-3-2025",
    content: "Chào mừng kỷ niệm 50 năm Ngày Giải phóng miền Nam, thống nhất đất nước (30-4-1975 – 30-4-2025), UBND TPHCM tổ chức lễ khởi công dự án.",
    images: [
      {
        id: "p3-1",
        url: "/assets/aistudio/hinh_1_36884d94.jpeg",
        alt: "Lễ khởi công dự án xây dựng cầu đi bộ qua sông Sài Gòn",
        caption: "",
        location: "Công viên Bến Bạch Đằng, TPHCM",
        date: "29/03/2025"
      },
      {
        id: "p3-2",
        url: "/assets/aistudio/hinh_2_c1542cc6.jpeg",
        alt: "Các đồng chí lãnh đạo và đại biểu tham dự lễ khởi công",
        caption: "",
        location: "Công viên Bến Bạch Đằng, TPHCM",
        date: "29/03/2025"
      }
    ]
  }
];

// Phase 2 Milestones with specific inline image arrays
export const TIMELINE_PHASE_2: MilestoneItem[] = [
  {
    id: "m-2026-10-15",
    timeLabel: "Đêm 15-10-2026",
    title: "Chuyển kết cấu thép lên sà lan tại Đại Dũng",
    content: "Tại Nhà máy đóng tàu Đại Dũng (Khu công nghiệp Đông Xuyên, phường Rạch Dừa, TPHCM), các kỹ sư, công nhân triển khai đưa kết cấu thép của cầu đi bộ qua sông Sài Gòn lên sà lan. Công trình được hạ thủy vào rạng sáng 16-10 để vận chuyển đến vị trí lắp đặt.",
    subContent: "Trước đó, kết cấu cầu chính khoảng 1.400 tấn và hệ khung thép nâng đỡ chuyên dụng khoảng 2.000 tấn trải qua một cuộc thử tải đặc biệt. Hoạt động này nhằm kiểm tra khả năng chịu lực, độ ổn định và mức độ an toàn của cả kết cấu cầu lẫn hệ khung đỡ trước khi vận chuyển và hợp long.",
    images: [
      {
        id: "c1-img-1",
        url: "/assets/aistudio/hinh_1_cd8d17f5.jpg",
        alt: "Đưa kết cấu thép cầu lên sà lan tại Nhà máy đóng tàu Đại Dũng",
        caption: ""
      },
      {
        id: "c1-img-2",
        url: "/assets/aistudio/hinh_2_8e0b8ab2.jpg",
        alt: "Chuẩn bị hạ thủy kết cấu thép cầu đi bộ qua sông Sài Gòn",
        caption: ""
      }
    ]
  },
  {
    id: "m-2026-10-18",
    timeLabel: "4 giờ ngày 18-10-2026",
    title: "Hành trình lai dắt vòm thép 3.400 tấn dài 124km",
    content: "Vòm thép hình lá dừa nước nặng 3400 tấn của cầu đi bộ vượt sông Sài Gòn được lai dắt từ cảng Đông Xuyên (Vũng Tàu) về khu vực Bến Bạch Đằng - Thủ Thiêm.",
    subContent: "Nhịp cầu thép khổng lồ được đặt trên sà lan chuyên dụng, di chuyển giữa không gian sông nước, phía trên là công trình cầu Bình Khánh với những trụ cầu quy mô lớn, bên dưới là hoạt động giao thông thủy trên tuyến sông kết nối các khu vực phía Nam TPHCM. Đoàn vận chuyển gồm tàu kéo chính, hai tàu hỗ trợ áp mạn và một tàu kéo dự phòng. Hành trình lai dắt dài khoảng 124km.",
    images: [
      {
        id: "c2-img-1",
        url: "/assets/aistudio/hinh_1__2__0dfbd365.jpg",
        alt: "Vòm thép cầu đi bộ được lai dắt trên sông Sài Gòn hướng về trung tâm thành phố",
        caption: ""
      },
      {
        id: "c2-img-2",
        url: "/assets/aistudio/hinh_2_9e0931ac.jpg",
        alt: "Người dân tập trung theo dõi hành trình lai dắt vòm thép cầu đi bộ",
        caption: ""
      }
    ]
  },
  {
    id: "m-2026-10-21",
    timeLabel: "Rạng sáng 21-10-2026",
    title: "Hợp long nhịp chính xuyên đêm giữa trung tâm TPHCM",
    content: "Công trình cầu đi bộ qua sông Sài Gòn, kết nối khu vực Bến Bạch Đằng (phường Sài Gòn) với Khu đô thị mới Thủ Thiêm (phường An Khánh), bước vào giai đoạn hợp long nhịp chính.",
    subContent: "Việc đưa vòm thép hình lá dừa nước nặng khoảng 1.400 tấn vào vị trí lắp đặt được triển khai xuyên đêm, với yêu cầu cao về độ chính xác và an toàn trong điều kiện thi công trên sông.\n\nSau khi hoàn thành hợp long dầm chính, nhà thầu sẽ tiếp tục hoàn thiện mặt cầu, lắp đặt lan can, hệ thống chiếu sáng nghệ thuật và các tiện ích phụ trợ.",
    images: [
      {
        id: "c3-img-1",
        url: "/assets/aistudio/hinh_1_d21ffba6.jpg",
        alt: "Hợp long dầm thép chính cầu đi bộ qua sông Sài Gòn ban đêm",
        caption: ""
      },
      {
        id: "c3-img-2",
        url: "/assets/aistudio/hinh_2_032d7812.jpg",
        alt: "Toàn cảnh vòm thép cầu đi bộ giữa lòng thành phố",
        caption: ""
      },
      {
        id: "c3-img-3",
        url: "/assets/aistudio/hinh_3_9bde3c80.JPG",
        alt: "Toàn cảnh cầu đi bộ nhìn từ trên cao nối nhịp đôi bờ",
        caption: ""
      },
      {
        id: "c3-img-4",
        url: "/assets/aistudio/hinh_4_4a680c60.JPG",
        alt: "Vòm cầu đi bộ hòa cùng đường chân trời hiện đại của TPHCM",
        caption: ""
      },
      {
        id: "c3-img-5",
        url: "/assets/aistudio/hinh_5_d23b7bd1.jpg",
        alt: "Thi công lắp đặt dầm thép cầu đi bộ",
        caption: ""
      },
      {
        id: "c3-img-6",
        url: "/assets/aistudio/hinh_6_888c040a.JPG",
        alt: "Góc nhìn từ công viên Mê Linh hướng về cầu đi bộ",
        caption: ""
      }
    ]
  }
];

export const PHASE_2_GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "p2-img-1",
    url: "/assets/aistudio/hinh_1_cd8d17f5.jpg",
    alt: "Đưa kết cấu thép cầu lên sà lan tại nhà máy đóng tàu Đại Dũng",
    caption: "",
    location: "KCN Đông Xuyên, TPHCM",
    date: "Đêm 15-10-2026",
    photographer: "SGGP Photo / CTV"
  },
  {
    id: "p2-img-2",
    url: "/assets/aistudio/hinh_2_8e0b8ab2.jpg",
    alt: "Công tác chuẩn bị hạ thủy kết cấu thép cầu đi bộ",
    caption: "",
    location: "Cảng Đông Xuyên",
    date: "15-10-2026",
    photographer: "SGGP Photo / CTV"
  },
  {
    id: "p2-img-3",
    url: "/assets/aistudio/hinh_1__2__0dfbd365.jpg",
    alt: "Vòm thép cầu đi bộ được lai dắt trên sông Sài Gòn",
    caption: "",
    location: "Sông Sài Gòn - Bến Bạch Đằng",
    date: "18-10-2026",
    photographer: "SGGP Photo / CTV"
  },
  {
    id: "p2-img-4",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    alt: "Hợp long dầm thép chính cầu đi bộ xuyên đêm tại Bến Bạch Đằng",
    caption: "Khoảnh khắc vòm thép lá dừa nước được đưa chính xác vào trụ cầu giữa đêm muộn.",
    location: "Bến Bạch Đằng - Thủ Thiêm",
    date: "Rạng sáng 21-10-2026",
    photographer: "SGGP Online"
  },
  {
    id: "p2-img-5",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    alt: "Giai đoạn hoàn thiện lan can và hệ thống chiếu sáng nghệ thuật",
    caption: "Các công nhân thi công lắp đặt dải đèn LED thông minh và lát mặt cầu cao cấp.",
    location: "TPHCM",
    date: "Cuối tháng 10-2026",
    photographer: "AURA Digital"
  }
];

export const MARQUEE_ROW_1: GalleryImage[] = [
  {
    id: "m1",
    url: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=800&auto=format&fit=crop",
    alt: "Góc nhìn toàn cảnh sông Sài Gòn và cầu đi bộ",
    caption: "Dải lụa thép vòm lá dừa nước nổi bật trên dòng sông Sài Gòn."
  },
  {
    id: "m2",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    alt: "Vòm cầu đi bộ rực rỡ sắc màu đêm TPHCM",
    caption: "Ánh sáng chiếu sáng nghệ thuật đa tầng chuyển sắc sống động."
  },
  {
    id: "m3",
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    alt: "Chi tiết kết cấu vòm thép uốn cong hiện đại",
    caption: "Các đường nét thép đan xen tạo hình gân lá dừa nước truyền thống."
  },
  {
    id: "m4",
    url: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop",
    alt: "Không gian đi bộ thoáng đãng trên sông Sài Gòn",
    caption: "Nơi người dân và du khách thong dong dạo bước thưởng ngoạn cảnh quan."
  },
  {
    id: "m5",
    url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    alt: "Sự kết nối giữa Bến Bạch Đằng và Thủ Thiêm",
    caption: "Mạch nối đô thị hiện đại giữa hai bờ sông."
  },
  {
    id: "m6",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    alt: "Skyline thành phố lung linh ánh đèn về đêm",
    caption: "Góc nhìn panoramic ngắm trọn vẹn tòa nhà Bitexco và Landmark 81."
  }
];

export const MARQUEE_ROW_2: GalleryImage[] = [
  {
    id: "m7",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    alt: "Mặt cầu đi bộ rộng rãi tích hợp mảng xanh cây cảnh",
    caption: "Thiết kế cảnh quan xanh mát tạo sự thư thái cho người tản bộ."
  },
  {
    id: "m8",
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    alt: "Khung cảnh hoàng hôn huyền ảo trên sông Sài Gòn",
    caption: "Điểm hẹn check-in và ngắm hoàng hôn lý tưởng nhất thành phố."
  },
  {
    id: "m9",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    alt: "Sự kết hợp giữa công nghệ LED tương tác và âm nhạc",
    caption: "Hệ thống trình diễn ánh sáng theo nhịp điệu trên thân cầu."
  },
  {
    id: "m10",
    url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
    alt: "Đời sống sinh hoạt cộng đồng năng động tại Bến Bạch Đằng",
    caption: "Công trình mang lại niềm tự hào và không gian gắn kết người dân TPHCM."
  },
  {
    id: "m11",
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
    alt: "Hình ảnh sông Sài Gòn bình yên lúc bình minh",
    caption: "Bình minh dịu dàng soi bóng lá dừa nước bằng thép trên sông."
  },
  {
    id: "m12",
    url: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=800&auto=format&fit=crop",
    alt: "Hình ảnh cận cảnh đai thép giữ vòm lá dừa",
    caption: "Đỉnh cao kỹ thuật cơ khí chế tạo cầu thép Việt Nam."
  }
];

export const GRAND_FINAL_IMAGE: GalleryImage = {
  id: "grand-final",
  url: "/assets/aistudio/1792657085645_3081204943641323774_g5073564722849541716_c8097a59a4a24a1a34ac2da208d3ea32_dce4d37f.jpg",
  alt: "Cầu đi bộ qua sông Sài Gòn",
  caption: "",
  location: "Bến Bạch Đằng - Khu đô thị mới Thủ Thiêm, TPHCM",
  date: "Tháng 10-2026",
  photographer: "SGGP Special Edition / CTV"
};

export const ARCHITECTURAL_HOTSPOTS: ArchitecturalSpot[] = [
  {
    id: "h1",
    title: "Vòm Thép Lá Dừa Nước",
    description: "Kết cấu vòm thép 3.400 tấn lấy cảm hứng từ hình ảnh lá dừa nước Nam Bộ, biểu tượng cho sự dẻo dai và hòa hợp thiên nhiên.",
    x: 48,
    y: 35
  },
  {
    id: "h2",
    title: "Kết Nối Bến Bạch Đằng",
    description: "Đầu cầu phía Quận 1 tiếp giáp trực tiếp công viên Bến Bạch Đằng, thuận tiện cho du khách đi dạo và vui chơi.",
    x: 22,
    y: 65
  },
  {
    id: "h3",
    title: "Hướng Về KĐT Mới Thủ Thiêm",
    description: "Đầu cầu phía Thủ Thiêm mở ra công viên bờ sông rộng lớn và trung tâm tài chính hiện đại trong tương lai.",
    x: 78,
    y: 58
  },
  {
    id: "h4",
    title: "Hệ Thống Chiếu Sáng Kỹ Thuật Số",
    description: "Hệ thống LED nghệ thuật điều khiển thông minh, lập trình các hiệu ứng biểu diễn ánh sáng theo mùa và lễ hội.",
    x: 52,
    y: 22
  }
];

export const SECTION3_GRID_IMAGES: GalleryImage[] = [
  {
    id: "s3-img-1",
    url: "/assets/aistudio/1792570593530_3081204943641323774_g5073564722849541716_73a8dcd9774a173fa611ba42cac21ffe_d7288b01.jpg",
    alt: "Người dân theo dõi và chụp ảnh vòm cầu đi bộ qua sông Sài Gòn tại Bến Bạch Đằng",
    caption: ""
  },
  {
    id: "s3-img-2",
    url: "/assets/aistudio/1792570555804_3081204943641323774_g5073564722849541716_f366ba2a663cb892af05d691504570c6_92822e04.jpg",
    alt: "Các bạn trẻ chiêm ngưỡng khối thép khổng lồ hình lá dừa nước trên sông",
    caption: ""
  },
  {
    id: "s3-img-3",
    url: "/assets/aistudio/1792570555749_3081204943641323774_g5073564722849541716_a73a06deede147038818b3c1cfc6ee54_5c58d35c.jpg",
    alt: "Người dân ghi lại khoảnh khắc vòm thép cầu đi bộ tiến về trung tâm thành phố",
    caption: ""
  },
  {
    id: "s3-img-4",
    url: "/assets/aistudio/1792570501046_3081204943641323774_g5073564722849541716_a69a62de305c0bd67de9ea0e15d0f2f9_aa06f276.jpg",
    alt: "Lực lượng an ninh và công nhân hân hoan vẫy cờ Tổ quốc chào đón nhịp cầu",
    caption: ""
  },
  {
    id: "s3-img-5",
    url: "/assets/aistudio/1792570501154_3081204943641323774_g5073564722849541716_c9dafa80dd4c3081a25773989acad954_c3b27a33.jpg",
    alt: "Người dân qua phà sông Sài Gòn ngắm nhìn kết cấu vòm thép cầu đi bộ",
    caption: ""
  },
  {
    id: "s3-img-6",
    url: "/assets/aistudio/1792570555684_3081204943641323774_g5073564722849541716_d1fc795d04c0746d04a5bfd9b753c991_ae826cab.jpg",
    alt: "Đoàn kỹ sư và công nhân trên nhịp dẫn cầu đi bộ",
    caption: ""
  }
];

