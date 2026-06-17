// Marketplace listings. A curated subset of province nông sản, listed with
// price, unit, producer and an emoji stand-in for product imagery.

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
  { id: 'p10', name: 'Nho Ninh Thuận', provinceKey: 'vn-nt', price: 60000, unit: 'kg', emoji: '🍇', producer: 'Trang trại Ba Mọi', tags: ['Trái cây', 'VietGAP'], certified: true },
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
]

export const formatVND = (n: number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n)
