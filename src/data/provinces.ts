// Province metadata keyed by Highcharts hc-key (matches src/data/vn-raw.json).
// Each province has a clean Vietnamese name, a region (drives the map colors,
// mirroring the reference image), and its signature nông sản (đặc sản).

export interface Region {
  id: string
  name: string
  color: string
}

export const REGIONS: Record<string, Region> = {
  tayBac: { id: 'tayBac', name: 'Tây Bắc Bộ', color: '#F2546B' },
  dongBac: { id: 'dongBac', name: 'Đông Bắc Bộ', color: '#1E8A4C' },
  dbsh: { id: 'dbsh', name: 'Đồng bằng sông Hồng', color: '#E8588F' },
  bacTrungBo: { id: 'bacTrungBo', name: 'Bắc Trung Bộ', color: '#E6C229' },
  namTrungBo: { id: 'namTrungBo', name: 'Duyên hải Nam Trung Bộ', color: '#1B8A8F' },
  tayNguyen: { id: 'tayNguyen', name: 'Tây Nguyên', color: '#B0314F' },
  dongNamBo: { id: 'dongNamBo', name: 'Đông Nam Bộ', color: '#3FA9F5' },
  tayNamBo: { id: 'tayNamBo', name: 'Đồng bằng sông Cửu Long', color: '#16566E' },
}

export interface Province {
  key: string // hc-key
  name: string
  region: string // REGIONS id
  nongsan: string[]
}

export const PROVINCES: Record<string, Province> = {
  // ---- Tây Bắc Bộ ----
  'vn-li': { key: 'vn-li', name: 'Lai Châu', region: 'tayBac', nongsan: ['Chè cổ thụ', 'Mắc ca', 'Sâm Lai Châu'] },
  'vn-db': { key: 'vn-db', name: 'Điện Biên', region: 'tayBac', nongsan: ['Gạo Điện Biên', 'Cà phê Mường Ảng', 'Mật ong rừng'] },
  'vn-311': { key: 'vn-311', name: 'Sơn La', region: 'tayBac', nongsan: ['Xoài tròn Yên Châu', 'Mận hậu', 'Cà phê Sơn La', 'Sữa Mộc Châu'] },
  'vn-ho': { key: 'vn-ho', name: 'Hòa Bình', region: 'tayBac', nongsan: ['Cam Cao Phong', 'Bưởi đỏ Tân Lạc', 'Mía tím'] },
  'vn-lo': { key: 'vn-lo', name: 'Lào Cai', region: 'tayBac', nongsan: ['Mận Tam hoa Bắc Hà', 'Su su Sa Pa', 'Cá hồi Sa Pa'] },
  'vn-yb': { key: 'vn-yb', name: 'Yên Bái', region: 'tayBac', nongsan: ['Cam sành Lục Yên', 'Chè Suối Giàng', 'Quế Văn Yên'] },

  // ---- Đông Bắc Bộ ----
  'vn-hg': { key: 'vn-hg', name: 'Hà Giang', region: 'dongBac', nongsan: ['Cam sành Hà Giang', 'Mật ong bạc hà', 'Chè Shan tuyết'] },
  'vn-cb': { key: 'vn-cb', name: 'Cao Bằng', region: 'dongBac', nongsan: ['Hạt dẻ Trùng Khánh', 'Miến dong', 'Thạch đen'] },
  'vn-307': { key: 'vn-307', name: 'Bắc Kạn', region: 'dongBac', nongsan: ['Hồng không hạt', 'Miến dong Na Rì', 'Quýt Bắc Kạn'] },
  'vn-ls': { key: 'vn-ls', name: 'Lạng Sơn', region: 'dongBac', nongsan: ['Na Chi Lăng', 'Hồi Lạng Sơn', 'Quýt Bắc Sơn'] },
  'vn-tq': { key: 'vn-tq', name: 'Tuyên Quang', region: 'dongBac', nongsan: ['Cam sành Hàm Yên', 'Bưởi Soi Hà', 'Chè Shan tuyết'] },
  'vn-ty': { key: 'vn-ty', name: 'Thái Nguyên', region: 'dongBac', nongsan: ['Chè Tân Cương', 'Gạo nếp Vải', 'Na La Hiên'] },
  'vn-pt': { key: 'vn-pt', name: 'Phú Thọ', region: 'dongBac', nongsan: ['Bưởi Đoan Hùng', 'Chè Phú Thọ', 'Hồng Hạc Trì'] },
  'vn-bg': { key: 'vn-bg', name: 'Bắc Giang', region: 'dongBac', nongsan: ['Vải thiều Lục Ngạn', 'Cam Lục Ngạn', 'Na dai'] },
  'vn-qn': { key: 'vn-qn', name: 'Quảng Ninh', region: 'dongBac', nongsan: ['Chả mực Hạ Long', 'Sá sùng', 'Trà hoa vàng', 'Nếp cái hoa vàng'] },

  // ---- Đồng bằng sông Hồng ----
  'vn-318': { key: 'vn-318', name: 'Hà Nội', region: 'dbsh', nongsan: ['Cốm làng Vòng', 'Bưởi Diễn', 'Cam Canh', 'Rau an toàn'] },
  'vn-vc': { key: 'vn-vc', name: 'Vĩnh Phúc', region: 'dbsh', nongsan: ['Su su Tam Đảo', 'Thanh long ruột đỏ', 'Cá thính'] },
  'vn-3623': { key: 'vn-3623', name: 'Hải Phòng', region: 'dbsh', nongsan: ['Nước mắm Cát Hải', 'Thuốc lào Tiên Lãng', 'Na bở'] },
  'vn-hd': { key: 'vn-hd', name: 'Hải Dương', region: 'dbsh', nongsan: ['Vải thiều Thanh Hà', 'Bánh đậu xanh', 'Cà rốt Đức Chính'] },
  'vn-317': { key: 'vn-317', name: 'Hưng Yên', region: 'dbsh', nongsan: ['Nhãn lồng Hưng Yên', 'Chuối tiêu hồng', 'Nghệ Chí Tân'] },
  'vn-bn': { key: 'vn-bn', name: 'Bắc Ninh', region: 'dbsh', nongsan: ['Nếp cái hoa vàng', 'Cà rốt Gia Bình', 'Tỏi An Thịnh'] },
  'vn-hm': { key: 'vn-hm', name: 'Hà Nam', region: 'dbsh', nongsan: ['Chuối ngự Đại Hoàng', 'Cá kho Vũ Đại', 'Hồng không hạt'] },
  'vn-nd': { key: 'vn-nd', name: 'Nam Định', region: 'dbsh', nongsan: ['Gạo tám Hải Hậu', 'Ngao Giao Thủy', 'Nước mắm Sa Châu'] },
  'vn-tb': { key: 'vn-tb', name: 'Thái Bình', region: 'dbsh', nongsan: ['Gạo Thái Bình', 'Ngao Tiền Hải', 'Bánh cáy Làng Nguyễn'] },
  'vn-nb': { key: 'vn-nb', name: 'Ninh Bình', region: 'dbsh', nongsan: ['Dứa Đồng Giao', 'Dê núi', 'Cơm cháy', 'Cá rô Tổng Trường'] },

  // ---- Bắc Trung Bộ ----
  'vn-th': { key: 'vn-th', name: 'Thanh Hóa', region: 'bacTrungBo', nongsan: ['Mía Lam Sơn', 'Nước mắm Ba Làng', 'Bưởi Luận Văn'] },
  'vn-na': { key: 'vn-na', name: 'Nghệ An', region: 'bacTrungBo', nongsan: ['Cam Vinh', 'Lạc sen', 'Nước mắm Vạn Phần', 'Chè Gay'] },
  'vn-328': { key: 'vn-328', name: 'Hà Tĩnh', region: 'bacTrungBo', nongsan: ['Bưởi Phúc Trạch', 'Cam Khe Mây', 'Nhung hươu Hương Sơn'] },
  'vn-qb': { key: 'vn-qb', name: 'Quảng Bình', region: 'bacTrungBo', nongsan: ['Khoai deo', 'Nước mắm Bảo Ninh', 'Tiêu Quảng Bình'] },
  'vn-qt': { key: 'vn-qt', name: 'Quảng Trị', region: 'bacTrungBo', nongsan: ['Cà phê Khe Sanh', 'Hồ tiêu Quảng Trị', 'Gạo hữu cơ Triệu Phong'] },
  'vn-tt': { key: 'vn-tt', name: 'Thừa Thiên Huế', region: 'bacTrungBo', nongsan: ['Thanh trà Huế', 'Sen Huế', 'Mè xửng', 'Tôm chua'] },

  // ---- Duyên hải Nam Trung Bộ ----
  'vn-da': { key: 'vn-da', name: 'Đà Nẵng', region: 'namTrungBo', nongsan: ['Nước mắm Nam Ô', 'Chả bò', 'Hải sản Thọ Quang'] },
  'vn-300': { key: 'vn-300', name: 'Quảng Nam', region: 'namTrungBo', nongsan: ['Quế Trà My', 'Sâm Ngọc Linh', 'Yến sào Hội An'] },
  'vn-qg': { key: 'vn-qg', name: 'Quảng Ngãi', region: 'namTrungBo', nongsan: ['Tỏi Lý Sơn', 'Hành Lý Sơn', 'Đường phèn', 'Quế Trà Bồng'] },
  'vn-bd': { key: 'vn-bd', name: 'Bình Định', region: 'namTrungBo', nongsan: ['Nem chợ Huyện', 'Bánh tráng nước dừa', 'Rượu Bàu Đá'] },
  'vn-py': { key: 'vn-py', name: 'Phú Yên', region: 'namTrungBo', nongsan: ['Cá ngừ đại dương', 'Muối Tuyết Diêm', 'Sò huyết Ô Loan'] },
  'vn-kh': { key: 'vn-kh', name: 'Khánh Hòa', region: 'namTrungBo', nongsan: ['Yến sào Khánh Hòa', 'Xoài Cam Lâm', 'Tỏi Ninh Hòa', 'Nước mắm Nha Trang'] },
  'vn-nt': { key: 'vn-nt', name: 'Ninh Thuận', region: 'namTrungBo', nongsan: ['Nho Ninh Thuận', 'Táo xanh Ninh Thuận', 'Thanh long', 'Mãng cầu ta', 'Chuối', 'Xoài', 'Mủ trôm', 'Hạt đười ươi bay', 'Trái xay nhung rừng', 'Trái da đá', 'Tỏi Phan Rang', 'Măng tây xanh'] },
  'vn-bu': { key: 'vn-bu', name: 'Bình Thuận', region: 'namTrungBo', nongsan: ['Thanh long Bình Thuận', 'Nước mắm Phan Thiết', 'Mực một nắng'] },

  // ---- Tây Nguyên ----
  'vn-299': { key: 'vn-299', name: 'Kon Tum', region: 'tayNguyen', nongsan: ['Sâm Ngọc Linh', 'Cà phê Đăk Hà', 'Sâm dây Tu Mơ Rông'] },
  'vn-724': { key: 'vn-724', name: 'Gia Lai', region: 'tayNguyen', nongsan: ['Cà phê Gia Lai', 'Hồ tiêu Chư Sê', 'Mật ong', 'Bò một nắng'] },
  'vn-723': { key: 'vn-723', name: 'Đắk Lắk', region: 'tayNguyen', nongsan: ['Cà phê Buôn Ma Thuột', 'Bơ sáp', 'Sầu riêng', 'Ca cao'] },
  'vn-6365': { key: 'vn-6365', name: 'Đắk Nông', region: 'tayNguyen', nongsan: ['Hồ tiêu Đắk Nông', 'Cà phê', 'Khoai lang Tuy Đức'] },
  'vn-ld': { key: 'vn-ld', name: 'Lâm Đồng', region: 'tayNguyen', nongsan: ['Rau Đà Lạt', 'Hoa Đà Lạt', 'Cà phê Cầu Đất', 'Atisô', 'Dâu tây'] },

  // ---- Đông Nam Bộ ----
  'vn-bp': { key: 'vn-bp', name: 'Bình Phước', region: 'dongNamBo', nongsan: ['Hạt điều Bình Phước', 'Hồ tiêu Lộc Ninh', 'Sầu riêng'] },
  'vn-tn': { key: 'vn-tn', name: 'Tây Ninh', region: 'dongNamBo', nongsan: ['Bánh tráng phơi sương', 'Muối tôm', 'Mãng cầu Bà Đen'] },
  'vn-bi': { key: 'vn-bi', name: 'Bình Dương', region: 'dongNamBo', nongsan: ['Bưởi Bạch Đằng', 'Măng cụt Lái Thiêu', 'Sầu riêng'] },
  'vn-331': { key: 'vn-331', name: 'Đồng Nai', region: 'dongNamBo', nongsan: ['Bưởi Tân Triều', 'Sầu riêng Long Khánh', 'Chôm chôm', 'Ca cao'] },
  'vn-hc': { key: 'vn-hc', name: 'TP. Hồ Chí Minh', region: 'dongNamBo', nongsan: ['Rau VietGAP Củ Chi', 'Bò sữa', 'Lan cắt cành', 'Cá cảnh'] },
  'vn-bv': { key: 'vn-bv', name: 'Bà Rịa - Vũng Tàu', region: 'dongNamBo', nongsan: ['Hải sản Vũng Tàu', 'Nhãn xuồng cơm vàng', 'Hồ tiêu', 'Muối'] },

  // ---- Đồng bằng sông Cửu Long ----
  'vn-la': { key: 'vn-la', name: 'Long An', region: 'tayNamBo', nongsan: ['Gạo Nàng thơm Chợ Đào', 'Thanh long Châu Thành', 'Chanh không hạt'] },
  'vn-tg': { key: 'vn-tg', name: 'Tiền Giang', region: 'tayNamBo', nongsan: ['Vú sữa Lò Rèn', 'Xoài cát Hòa Lộc', 'Sầu riêng Cai Lậy', 'Khóm Tân Phước'] },
  'vn-br': { key: 'vn-br', name: 'Bến Tre', region: 'tayNamBo', nongsan: ['Dừa Bến Tre', 'Kẹo dừa', 'Bưởi da xanh', 'Sầu riêng Cái Mơn'] },
  'vn-tv': { key: 'vn-tv', name: 'Trà Vinh', region: 'tayNamBo', nongsan: ['Dừa sáp Cầu Kè', 'Quýt đường', 'Tôm khô', 'Lúa hữu cơ'] },
  'vn-vl': { key: 'vn-vl', name: 'Vĩnh Long', region: 'tayNamBo', nongsan: ['Bưởi Năm Roi', 'Cam sành Tam Bình', 'Khoai lang Bình Tân'] },
  'vn-dt': { key: 'vn-dt', name: 'Đồng Tháp', region: 'tayNamBo', nongsan: ['Xoài Cao Lãnh', 'Sen Đồng Tháp', 'Quýt hồng Lai Vung', 'Cá tra'] },
  'vn-ag': { key: 'vn-ag', name: 'An Giang', region: 'tayNamBo', nongsan: ['Gạo Jasmine', 'Cá tra', 'Đường thốt nốt', 'Xoài cát Chu'] },
  'vn-kg': { key: 'vn-kg', name: 'Kiên Giang', region: 'tayNamBo', nongsan: ['Nước mắm Phú Quốc', 'Hồ tiêu Phú Quốc', 'Lúa - tôm', 'Khô cá'] },
  'vn-333': { key: 'vn-333', name: 'Cần Thơ', region: 'tayNamBo', nongsan: ['Dâu Hạ Châu', 'Gạo thơm', 'Trái cây Phong Điền'] },
  'vn-337': { key: 'vn-337', name: 'Hậu Giang', region: 'tayNamBo', nongsan: ['Khóm Cầu Đúc', 'Bưởi Năm Roi Phú Hữu', 'Cá thát lát'] },
  'vn-st': { key: 'vn-st', name: 'Sóc Trăng', region: 'tayNamBo', nongsan: ['Gạo ST25', 'Hành tím Vĩnh Châu', 'Bưởi Năm Roi', 'Tôm sú'] },
  'vn-bl': { key: 'vn-bl', name: 'Bạc Liêu', region: 'tayNamBo', nongsan: ['Muối Bạc Liêu', 'Tôm sú', 'Nhãn Bạc Liêu'] },
  'vn-cm': { key: 'vn-cm', name: 'Cà Mau', region: 'tayNamBo', nongsan: ['Tôm sinh thái', 'Cua Năm Căn', 'Cá khô', 'Mật ong U Minh'] },
}

export function getProvince(key: string): Province | undefined {
  return PROVINCES[key]
}
