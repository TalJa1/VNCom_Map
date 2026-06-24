// ─────────────────────────────────────────────────────────────────────────
// LOCAL INSPIRATIONAL STORIES · Ninh Thuận farming households (12 people)
// ─────────────────────────────────────────────────────────────────────────
// These are the PEOPLE behind the delicacies — one card per farming household.
// (The fruits / delicacies themselves live in `products.ts`.)
//
// To show real photos, drop image URLs (or /public paths) into each farmer's
// `images` array. Each card supports MULTIPLE images (swipeable). While
// `images` is empty, the emoji placeholder is shown.
//
// `productId` links a farmer to their signature delicacy in `products.ts`, so
// clicking that delicacy on the map jumps to this farmer's story card.

export interface Farmer {
  id: string
  /** Farmer's name. */
  name: string
  /** Household / cooperative they belong to. */
  household: string
  /** Village / commune in Ninh Thuận. */
  village: string
  /** Placeholder glyph shown until real photos are added. */
  emoji: string
  /**
   * Farmer photo URLs — add as many as you like (the card is swipeable).
   * e.g. ['/images/farmers/kiet-1.jpg', 'https://.../kiet-2.jpg']
   */
  images: string[]
  /** Short tags shown on the card. */
  tags: string[]
  /** A short pull-quote from the farmer. */
  quote: string
  /** Their signature delicacy — links to a product id in products.ts. */
  productId: string
}

export const FARMERS: Farmer[] = [
  { id: 'f1',  name: 'Ông Nguyễn Văn Mọi',  household: 'Trang trại Ba Mọi',        village: 'Phước Thuận',  emoji: '🧑‍🌾', images: [], tags: ['Nho', 'VietGAP'],        quote: 'Mỗi chùm nho là mấy mùa nắng gió tôi gửi vào đó.',       productId: 'p10'  },
  { id: 'f2',  name: 'Bà Trần Thị Hải',     household: 'Nông trại Ninh Hải',       village: 'Ninh Hải',     emoji: '👩‍🌾', images: [], tags: ['Táo xanh'],               quote: 'Táo Ninh Thuận giòn ngọt vì đất này khô mà thương.',     productId: 'p10b' },
  { id: 'f3',  name: 'Ông Lê Văn Thanh',    household: 'HTX Thanh long Ninh Thuận', village: 'Phan Rang',    emoji: '🧑‍🌾', images: [], tags: ['Thanh long'],             quote: 'Cây thanh long chịu hạn giỏi, như người dân quê tôi vậy.', productId: 'p10c' },
  { id: 'f4',  name: 'Bà Phạm Thị Na',      household: 'Nông hộ Ninh Sơn',         village: 'Ninh Sơn',     emoji: '👩‍🌾', images: [], tags: ['Mãng cầu'],               quote: 'Mãng cầu chín cây mới đúng vị, tôi không hái non bao giờ.', productId: 'p10d' },
  { id: 'f5',  name: 'Ông Đặng Văn Hoà',    household: 'Nông hộ Lâm Sơn',          village: 'Lâm Sơn',      emoji: '🧑‍🌾', images: [], tags: ['Chuối'],                  quote: 'Buồng chuối nào cũng là công cả nhà chăm bón.',          productId: 'p10e' },
  { id: 'f6',  name: 'Bà Võ Thị Xoài',      household: 'Nông hộ Ninh Phước',       village: 'Ninh Phước',   emoji: '👩‍🌾', images: [], tags: ['Xoài'],                   quote: 'Xoài quê tôi nắng nhiều nên ngọt đậm hơn nơi khác.',     productId: 'p10f' },
  { id: 'f7',  name: 'Ông Mai Văn Trôm',    household: 'Nông hộ Bác Ái',           village: 'Bác Ái',       emoji: '🧑‍🌾', images: [], tags: ['Mủ trôm', 'Đặc sản'],       quote: 'Mủ trôm là lộc rừng, phải lấy đúng cách mới bền cây.',    productId: 'p10g' },
  { id: 'f8',  name: 'Ông Hồ Văn Ươi',      household: 'Nông hộ Phước Bình',       village: 'Phước Bình',   emoji: '🧑‍🌾', images: [], tags: ['Đười ươi', 'Dược liệu'],     quote: 'Hạt đười ươi bay theo gió, tôi đi nhặt từ tờ mờ sáng.',   productId: 'p10h' },
  { id: 'f9',  name: 'Bà Nguyễn Thị Xay',   household: 'Nông hộ Phước Đại',        village: 'Phước Đại',    emoji: '👩‍🌾', images: [], tags: ['Trái xay', 'Đặc sản'],       quote: 'Trái xay rừng hiếm dần, tôi giữ giống cho con cháu.',     productId: 'p10i' },
  { id: 'f10', name: 'Ông Trương Văn Đá',   household: 'Nông hộ Ma Nới',           village: 'Ma Nới',       emoji: '🧑‍🌾', images: [], tags: ['Trái da đá'],              quote: 'Da đá lạ miệng mà thương, ai ăn một lần là nhớ.',         productId: 'p10j' },
  { id: 'f11', name: 'Bà Lê Thị Tỏi',       household: 'Nông hộ Phan Rang',        village: 'Phan Rang',    emoji: '👩‍🌾', images: [], tags: ['Tỏi', 'OCOP'],              quote: 'Tỏi Phan Rang củ nhỏ mà cay nồng, thơm để cả năm.',      productId: 'p10k' },
  { id: 'f12', name: 'Ông Bùi Văn Măng',    household: 'HTX Măng tây Ninh Thuận',  village: 'An Hải',       emoji: '🧑‍🌾', images: [], tags: ['Măng tây', 'OCOP'],         quote: 'Măng tây phải cắt lúc sớm tinh mơ mới non mềm.',         productId: 'p10l' },
]

/** Find the farmer whose signature delicacy matches a product id. */
export function farmerByProductId(productId: string): Farmer | undefined {
  return FARMERS.find((f) => f.productId === productId)
}
