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
        url: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1600&auto=format&fit=crop",
        alt: "Phương án thiết kế cầu đi bộ lá dừa nước phối cảnh hoàng hôn",
        caption: "Phối cảnh 3D thiết kế cầu đi bộ lấy cảm hứng từ chiếc lá dừa nước Nam Bộ độc đáo.",
        location: "Sông Sài Gòn - Bến Bạch Đằng",
        date: "Tháng 10/2023"
      },
      {
        id: "p1-2",
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
        alt: "Mô hình kiến trúc chi tiết vòm thép cầu đi bộ ban đêm",
        caption: "Mô hình chiếu sáng nghệ thuật lung linh kết nối Bến Bạch Đằng và Khu đô thị mới Thủ Thiêm.",
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
        url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
        alt: "Lễ ký kết biên bản thỏa thuận tài trợ công trình cầu đi bộ 1000 tỷ",
        caption: "Toàn cảnh Lễ ký kết biên bản thỏa thuận tài trợ công trình giữa UBND TPHCM và Nutifood.",
        location: "Trung tâm Hội nghị UBND TPHCM",
        date: "Tháng 12/2023"
      },
      {
        id: "p2-2",
        url: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1600&auto=format&fit=crop",
        alt: "Lãnh đạo TPHCM và đại diện nhà tài trợ trao biên bản hợp tác",
        caption: "Lãnh đạo TPHCM biểu dương nguồn lực xã hội hóa vì sự phát triển văn minh, hiện đại của thành phố.",
        location: "TPHCM",
        date: "Tháng 12/2023"
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
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
        alt: "Lễ khởi công công trình cầu đi bộ vượt sông Sài Gòn",
        caption: "Không khí trang trọng tại lễ khởi công dự án hướng tới mốc mốc 50 năm Giải phóng miền Nam.",
        location: "Công viên Bến Bạch Đằng, Quận 1",
        date: "29/03/2025"
      },
      {
        id: "p3-2",
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1600&auto=format&fit=crop",
        alt: "Thiết bị máy móc chuẩn bị thi công móng cọc cầu đi bộ",
        caption: "Các dàn máy khoan cọc nhồi công suất lớn sẵn sàng thi công móng cầu trên sông Sài Gòn.",
        location: "Sông Sài Gòn",
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
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
        alt: "Đưa kết cấu thép cầu lên sà lan tại nhà máy đóng tàu Đại Dũng",
        caption: "Kỹ sư và công nhân tập trung cao độ đưa vòm thép 1.400T lên sà lan."
      },
      {
        id: "c1-img-2",
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
        alt: "Công tác chuẩn bị hạ thủy vòm thép cầu đi bộ",
        caption: "Công nhân kiểm tra các khớp nối đai thép trước giờ giội thủy."
      },
      {
        id: "c1-img-3",
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
        alt: "Thử tải đặc biệt hệ khung thép 3.400 tấn",
        caption: "Thử tải kiên cố kiểm tra độ biến dạng và khả năng chịu lực của kết cấu cầu chính 1.400T và khung đỡ 2.000T."
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
        url: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop",
        alt: "Đoàn tàu kéo lai dắt vòm thép qua cầu Bình Khánh",
        caption: "Đoàn lai dắt 4 tàu di chuyển qua khu vực trụ cầu Bình Khánh."
      },
      {
        id: "c2-img-2",
        url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
        alt: "Tàu kéo chính và tàu hỗ trợ áp mạn trên sông Soài Ráp",
        caption: "Hai tàu hỗ trợ áp mạn điều tiết tốc độ trên hành trình 124km."
      },
      {
        id: "c2-img-3",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
        alt: "Vòm thép lá dừa di chuyển giữa sông Sài Gòn",
        caption: "Khối thép khổng lồ tiến về khu vực Bến Bạch Đằng - Thủ Thiêm."
      },
      {
        id: "c2-img-4",
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop",
        alt: "Toàn cảnh sông Sài Gòn đón nhịp cầu thép",
        caption: "Quang cảnh giao thông đường thủy trên tuyến sông phía Nam TPHCM."
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
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
        alt: "Hợp long dầm thép chính cầu đi bộ xuyên đêm",
        caption: "Khoảnh khắc vòm thép lá dừa nước được đưa chính xác vào vị trí trụ cầu Bến Bạch Đằng - Thủ Thiêm giữa đêm muộn."
      },
      {
        id: "c3-img-2",
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
        alt: "Giai đoạn hoàn thiện lan can và chiếu sáng",
        caption: "Thi công hoàn thiện mặt cầu và hệ thống chiếu sáng nghệ thuật."
      },
      {
        id: "c3-img-3",
        url: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop",
        alt: "Không gian sinh hoạt cộng đồng bờ sông",
        caption: "Mặt cầu sẵn sàng mở ra không gian đi bộ ngắm cảnh sông Sài Gòn."
      },
      {
        id: "c3-img-4",
        url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
        alt: "Cảnh quan Bến Bạch Đằng và Thủ Thiêm",
        caption: "Nối liền trái tim tự hào của người dân TPHCM trước Tết 2027."
      },
      {
        id: "c3-img-5",
        url: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=1200&auto=format&fit=crop",
        alt: "Cận cảnh nhịp vòm thép lá dừa nước hoàn thành",
        caption: "Kiệt tác kiến trúc thép vòm lá dừa nước rực rỡ soi bóng trên sông Sài Gòn."
      }
    ]
  }
];

export const PHASE_2_GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "p2-img-1",
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
    alt: "Đưa kết cấu thép cầu lên sà lan tại nhà máy đóng tàu Đại Dũng",
    caption: "Kỹ sư và công nhân tập trung cao độ đưa vòm thép 1.400T lên hệ khung nâng 2.000T.",
    location: "KCN Đông Xuyên, TPHCM",
    date: "Đêm 15-10-2026",
    photographer: "SGGP Photo / AURA Visual"
  },
  {
    id: "p2-img-2",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
    alt: "Thử tải đặc biệt hệ khung thép 3400 tấn trước khi hạ thủy",
    caption: "Thử tải kiên cố kiểm tra độ biến dạng và khả năng chịu lực của kết cấu cầu chính.",
    location: "Cảng Đông Xuyên",
    date: "15-10-2026",
    photographer: "Đại Dũng Shipyard"
  },
  {
    id: "p2-img-3",
    url: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1600&auto=format&fit=crop",
    alt: "Đoàn tàu kéo lai dắt vòm thép qua cầu Bình Khánh trên hành trình 124km",
    caption: "Đoàn lai dắt gồm 4 tàu chuyên dụng di chuyển giữa luồng hàng hải sông Sài Gòn.",
    location: "Sông Soài Ráp - Cầu Bình Khánh",
    date: "4h00 ngày 18-10-2026",
    photographer: "Ban Quản lý Dự án"
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
  url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop",
  alt: "Toàn cảnh cầu đi bộ bắc qua sông Sài Gòn hoàn thiện rực rỡ đón Tết 2027",
  caption: "Biểu tượng kiến trúc mới của TPHCM – Cầu đi bộ lá dừa nước lung linh soi bóng sông Sài Gòn.",
  location: "Bến Bạch Đằng - Khu đô thị mới Thủ Thiêm, TPHCM",
  date: "Dự kiến đưa vào vận hành trước Tết Nguyên đán 2027",
  photographer: "SGGP Special Edition / AURA Visual Studio"
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
