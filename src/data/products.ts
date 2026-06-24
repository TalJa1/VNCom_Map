// Marketplace listings. A curated subset of province nông sản, listed with
// price, unit, producer and an emoji stand-in for product imagery.
//
// To show real product photos, add image URLs (or /public paths) to a
// product's `images` array — each product supports MULTIPLE images, shown as a
// swipeable gallery on its card. While `images` is empty/omitted, the `emoji`
// placeholder is shown.

export interface Product {
  id: string
  name: string
  provinceKey: string
  price: number // VND
  unit: string
  emoji: string
  producer: string
  tags: string[]
  certified?: boolean
  /** Product photo URLs — add as many as you like (swipeable gallery). */
  images?: string[]
}

export const PRODUCTS: Product[] = [
  { id: 'p1', name: 'Vải thiều Lục Ngạn', provinceKey: 'vn-bg', price: 35000, unit: 'kg', emoji: '🍒', producer: 'HTX Lục Ngạn', tags: ['Trái cây', 'OCOP'], certified: true },
  { id: 'p2', name: 'Cam Cao Phong', provinceKey: 'vn-ho', price: 30000, unit: 'kg', emoji: '🍊', producer: 'Nông hộ Cao Phong', tags: ['Trái cây', 'VietGAP'], certified: true },
  { id: 'p3', name: 'Chè Tân Cương', provinceKey: 'vn-ty', price: 250000, unit: '500g', emoji: '🍵', producer: 'HTX Trà Tân Cương', tags: ['Đồ uống', 'OCOP'], certified: true },
  { id: 'p4', name: 'Xoài tròn Yên Châu', provinceKey: 'vn-311', price: 28000, unit: 'kg', emoji: '🥭', producer: 'HTX Yên Châu', tags: ['Trái cây'] },
  { id: 'p5', name: 'Mật ong bạc hà', provinceKey: 'vn-hg', price: 350000, unit: 'lít', emoji: '🍯', producer: 'Nông hộ Đồng Văn', tags: ['Mật ong', 'OCOP'], certified: true },
  { id: 'p6', name: 'Gạo ST25', provinceKey: 'vn-st', price: 38000, unit: 'kg', emoji: '🌾', producer: 'HTX Hồ Quang', tags: ['Gạo'], certified: true },
  { id: 'p7', name: 'Cà phê Buôn Ma Thuột', provinceKey: 'vn-723', price: 180000, unit: '500g', emoji: '☕', producer: 'HTX Cà phê Đắk Lắk', tags: ['Đồ uống', 'OCOP'], certified: true },
  { id: 'p8', name: 'Sầu riêng Cai Lậy', provinceKey: 'vn-tg', price: 75000, unit: 'kg', emoji: '🥥', producer: 'Nhà vườn Cai Lậy', tags: ['Trái cây'] },
  { id: 'p9', name: 'Dừa xiêm Bến Tre', provinceKey: 'vn-br', price: 15000, unit: 'quả', emoji: '🥥', producer: 'HTX Dừa Bến Tre', tags: ['Trái cây'] },
  { id: 'p10', name: 'Nho Ninh Thuận', provinceKey: 'vn-nt', price: 60000, unit: 'kg', emoji: '🍇', producer: 'Trang trại Ba Mọi', tags: ['Trái cây', 'VietGAP'], certified: true, images: [] },
  { id: 'p10b', name: 'Táo xanh Ninh Thuận', provinceKey: 'vn-nt', price: 45000, unit: 'kg', emoji: '🍏', producer: 'Nông trại Ninh Hải', tags: ['Trái cây'], images: [] },
  { id: 'p10c', name: 'Thanh long Ninh Thuận', provinceKey: 'vn-nt', price: 32000, unit: 'kg', emoji: '🐉', producer: 'HTX Thanh long Ninh Thuận', tags: ['Trái cây'], images: [] },
  { id: 'p10d', name: 'Mãng cầu ta', provinceKey: 'vn-nt', price: 40000, unit: 'kg', emoji: '🟢', producer: 'Nông hộ Ninh Thuận', tags: ['Trái cây'], images: [] },
  { id: 'p10e', name: 'Chuối Ninh Thuận', provinceKey: 'vn-nt', price: 15000, unit: 'kg', emoji: '🍌', producer: 'Nông hộ Ninh Thuận', tags: ['Trái cây'], images: [] },
  { id: 'p10f', name: 'Xoài Ninh Thuận', provinceKey: 'vn-nt', price: 35000, unit: 'kg', emoji: '🥭', producer: 'Nông hộ Ninh Thuận', tags: ['Trái cây'], images: [] },
  { id: 'p10g', name: 'Mủ trôm', provinceKey: 'vn-nt', price: 200000, unit: 'kg', emoji: '🌿', producer: 'Nông hộ Ninh Thuận', tags: ['Đặc sản'], images: [] },
  { id: 'p10h', name: 'Hạt đười ươi bay', provinceKey: 'vn-nt', price: 300000, unit: 'kg', emoji: '🌰', producer: 'Nông hộ Ninh Thuận', tags: ['Dược liệu'], images: [] },
  { id: 'p10i', name: 'Trái xay nhung rừng', provinceKey: 'vn-nt', price: 150000, unit: 'kg', emoji: '🍈', producer: 'Nông hộ Ninh Thuận', tags: ['Trái cây', 'Đặc sản'], images: [] },
  { id: 'p10j', name: 'Trái da đá', provinceKey: 'vn-nt', price: 50000, unit: 'kg', emoji: '🍐', producer: 'Nông hộ Ninh Thuận', tags: ['Trái cây'], images: [] },
  { id: 'p10k', name: 'Tỏi Phan Rang', provinceKey: 'vn-nt', price: 80000, unit: 'kg', emoji: '🧄', producer: 'Nông hộ Phan Rang', tags: ['Gia vị', 'OCOP'], certified: true, images: [] },
  { id: 'p10l', name: 'Măng tây xanh Ninh Thuận', provinceKey: 'vn-nt', price: 120000, unit: 'kg', emoji: '🌱', producer: 'HTX Măng tây Ninh Thuận', tags: ['Rau củ', 'OCOP'], certified: true, images: [] },
  { id: 'p11', name: 'Thanh long ruột đỏ', provinceKey: 'vn-bu', price: 32000, unit: 'kg', emoji: '🐉', producer: 'HTX Thanh long', tags: ['Trái cây', 'GlobalGAP'], certified: true },
  { id: 'p12', name: 'Rau Đà Lạt', provinceKey: 'vn-ld', price: 25000, unit: 'kg', emoji: '🥬', producer: 'HTX Rau Đà Lạt', tags: ['Rau củ', 'VietGAP'], certified: true },
  { id: 'p13', name: 'Tỏi Lý Sơn', provinceKey: 'vn-qg', price: 120000, unit: 'kg', emoji: '🧄', producer: 'Nông hộ Lý Sơn', tags: ['Gia vị', 'OCOP'], certified: true },
  { id: 'p14', name: 'Nước mắm Phú Quốc', provinceKey: 'vn-kg', price: 90000, unit: '500ml', emoji: '🐟', producer: 'Nhà thùng Phú Quốc', tags: ['Gia vị', 'OCOP'], certified: true },
  { id: 'p15', name: 'Bưởi da xanh', provinceKey: 'vn-br', price: 40000, unit: 'kg', emoji: '🍈', producer: 'HTX Bưởi da xanh', tags: ['Trái cây'] },
  { id: 'p16', name: 'Hạt điều Bình Phước', provinceKey: 'vn-bp', price: 220000, unit: 'kg', emoji: '🥜', producer: 'HTX Điều Bình Phước', tags: ['Hạt', 'OCOP'], certified: true },
  { id: 'p17', name: 'Nhãn lồng Hưng Yên', provinceKey: 'vn-317', price: 45000, unit: 'kg', emoji: '🟤', producer: 'HTX Nhãn lồng', tags: ['Trái cây', 'VietGAP'], certified: true },
  { id: 'p18', name: 'Xoài cát Hòa Lộc', provinceKey: 'vn-tg', price: 65000, unit: 'kg', emoji: '🥭', producer: 'HTX Hòa Lộc', tags: ['Trái cây'], certified: true },
  { id: 'p19', name: 'Cam Vinh', provinceKey: 'vn-na', price: 35000, unit: 'kg', emoji: '🍊', producer: 'Nông trại Cam Vinh', tags: ['Trái cây'] },
  { id: 'p20', name: 'Sen sấy Đồng Tháp', provinceKey: 'vn-dt', price: 95000, unit: '500g', emoji: '🪷', producer: 'HTX Sen Đồng Tháp', tags: ['Đặc sản', 'OCOP'], certified: true },
  { id: 'p21', name: 'Hồ tiêu Chư Sê', provinceKey: 'vn-724', price: 160000, unit: 'kg', emoji: '⚫', producer: 'HTX Hồ tiêu', tags: ['Gia vị'] },
  { id: 'p22', name: 'Na Chi Lăng', provinceKey: 'vn-ls', price: 50000, unit: 'kg', emoji: '🟢', producer: 'HTX Na Chi Lăng', tags: ['Trái cây', 'OCOP'], certified: true },

  // ---- More fruits & nông sản across provinces (for the marketplace) ----
  { id: 'p23', name: 'Dâu tây Đà Lạt', provinceKey: 'vn-ld', price: 120000, unit: 'kg', emoji: '🍓', producer: 'Nông trại Cầu Đất', tags: ['Trái cây', 'VietGAP'], certified: true, images: [] },
  { id: 'p24', name: 'Bơ sáp Đắk Lắk', provinceKey: 'vn-723', price: 55000, unit: 'kg', emoji: '🥑', producer: 'HTX Bơ Đắk Lắk', tags: ['Trái cây'], images: [] },
  { id: 'p25', name: 'Sầu riêng Ri6 Long Khánh', provinceKey: 'vn-331', price: 85000, unit: 'kg', emoji: '🥥', producer: 'Nhà vườn Long Khánh', tags: ['Trái cây'], images: [] },
  { id: 'p26', name: 'Chôm chôm Long Khánh', provinceKey: 'vn-331', price: 30000, unit: 'kg', emoji: '🔴', producer: 'Nhà vườn Long Khánh', tags: ['Trái cây'], images: [] },
  { id: 'p27', name: 'Mận hậu Mộc Châu', provinceKey: 'vn-311', price: 40000, unit: 'kg', emoji: '🟣', producer: 'HTX Mộc Châu', tags: ['Trái cây'], images: [] },
  { id: 'p28', name: 'Mận Tam hoa Bắc Hà', provinceKey: 'vn-lo', price: 38000, unit: 'kg', emoji: '🟣', producer: 'Nông hộ Bắc Hà', tags: ['Trái cây'], images: [] },
  { id: 'p29', name: 'Dâu Hạ Châu', provinceKey: 'vn-333', price: 45000, unit: 'kg', emoji: '🟡', producer: 'HTX Phong Điền', tags: ['Trái cây'], images: [] },
  { id: 'p30', name: 'Vú sữa Lò Rèn', provinceKey: 'vn-tg', price: 50000, unit: 'kg', emoji: '🟣', producer: 'HTX Vĩnh Kim', tags: ['Trái cây', 'VietGAP'], certified: true, images: [] },
  { id: 'p31', name: 'Măng cụt Lái Thiêu', provinceKey: 'vn-bi', price: 70000, unit: 'kg', emoji: '🟣', producer: 'Nhà vườn Lái Thiêu', tags: ['Trái cây'], images: [] },
  { id: 'p32', name: 'Quýt hồng Lai Vung', provinceKey: 'vn-dt', price: 45000, unit: 'kg', emoji: '🍊', producer: 'HTX Lai Vung', tags: ['Trái cây', 'OCOP'], certified: true, images: [] },
  { id: 'p33', name: 'Bưởi Năm Roi', provinceKey: 'vn-vl', price: 35000, unit: 'kg', emoji: '🍈', producer: 'HTX Bình Minh', tags: ['Trái cây'], images: [] },
  { id: 'p34', name: 'Xoài cát Chu An Giang', provinceKey: 'vn-ag', price: 40000, unit: 'kg', emoji: '🥭', producer: 'HTX Chợ Mới', tags: ['Trái cây'], images: [] },
  { id: 'p35', name: 'Cam sành Hàm Yên', provinceKey: 'vn-tq', price: 28000, unit: 'kg', emoji: '🍊', producer: 'HTX Hàm Yên', tags: ['Trái cây', 'VietGAP'], certified: true, images: [] },
  { id: 'p36', name: 'Hồng không hạt Bắc Kạn', provinceKey: 'vn-307', price: 55000, unit: 'kg', emoji: '🟠', producer: 'HTX Quang Thuận', tags: ['Trái cây', 'OCOP'], certified: true, images: [] },
  { id: 'p37', name: 'Cam Cao Phong loại 1', provinceKey: 'vn-ho', price: 35000, unit: 'kg', emoji: '🍊', producer: 'Nông hộ Cao Phong', tags: ['Trái cây', 'VietGAP'], certified: true, images: [] },
  { id: 'p38', name: 'Su su Sa Pa', provinceKey: 'vn-lo', price: 18000, unit: 'kg', emoji: '🥬', producer: 'Nông hộ Sa Pa', tags: ['Rau củ'], images: [] },
  { id: 'p39', name: 'Khóm Cầu Đúc', provinceKey: 'vn-337', price: 22000, unit: 'quả', emoji: '🍍', producer: 'HTX Cầu Đúc', tags: ['Trái cây', 'OCOP'], certified: true, images: [] },
  { id: 'p40', name: 'Dừa sáp Cầu Kè', provinceKey: 'vn-tv', price: 120000, unit: 'quả', emoji: '🥥', producer: 'HTX Cầu Kè', tags: ['Trái cây', 'Đặc sản'], certified: true, images: [] },
]

export const formatVND = (n: number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n)
