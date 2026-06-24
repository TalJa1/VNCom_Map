/* Bilingual (EN / VI) content + a tiny i18n context.
 * All copy comes from the project brief ("Nội dung website Bản đồ nông sản Việt").
 * Use the `useLang()` hook for the active language + setter, and `useT()` for
 * the translated dictionary of the current language. */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Lang = 'en' | 'vi'

export interface Dict {
  langName: string
  nav: {
    intro: string
    story: string
    map: string
    stories: string
    shop: string
    handbook: string
    connect: string
  }
  brand: { name: string; tagline: string }
  hero: {
    eyebrow: string
    title: string[] // rendered line by line
    sub: string
    cta: string
    scroll: string
    badges: { icon: string; label: string }[]
  }
  bigStory: {
    eyebrow: string
    title: string
    paragraphs: string[]
    cta: string
    pull: string
  }
  map: {
    eyebrow: string
    title: string
    sub: string
    hint: string
    region: string
    legendDelicacies: string
    readStory: string
    quickTitle: string
  }
  stories: {
    eyebrow: string
    title: string
    sub: string
    soon: string
    readStory: string
    delicacy: string
    counter: (n: number) => string
  }
  shop: {
    eyebrow: string
    title: string
    sub: string
    cart: string
    viewCart: string
  }
  handbook: {
    eyebrow: string
    title: string
    paragraphs: string[]
    cta: string
    pages: string
    skills: { icon: string; label: string }[]
  }
  footer: {
    eyebrow: string
    title: string
    sub: string
    social: string
    email: string
    phone: string
    rights: string
  }
}

const en: Dict = {
  langName: 'English',
  nav: {
    intro: 'Intro',
    story: 'The Story',
    map: 'Farm Map',
    stories: 'Stories',
    shop: 'Shop',
    handbook: 'Handbook',
    connect: 'Connect',
  },
  brand: { name: 'Viet-Farm', tagline: 'Youth Digital Agriculture Initiative' },
  hero: {
    eyebrow: 'Youth Digital Agriculture Initiative',
    title: ['Rooted in the Land,', 'Told by the Web'],
    sub: "Every local delicacy in Vietnam carries a lifelong journey of a farmer. The Youth Digital Agriculture Initiative welcomes you to explore the country's richest agricultural heritage through an interactive digital map. Scan, discover, and connect with the hands that feed the land.",
    cta: 'Explore the Map Now',
    scroll: 'Scroll to discover',
    badges: [
      { icon: '🗺️', label: 'Interactive Map' },
      { icon: '🌾', label: 'Authentic Stories' },
      { icon: '📘', label: 'Digital Handbook' },
    ],
  },
  bigStory: {
    eyebrow: 'The Big Story',
    title: 'The Untold Heroes Behind the Flavors',
    paragraphs: [
      "Behind Vietnam's world-famous delicacies are small-scale farmers who work tirelessly under the sun, nurturing the soil with generations of wisdom. They harvest perfection, yet their voices often go unheard, and their stories remain untold to the global world.",
      'This gap became a calling for Le Gia Duc Kiet, a 16-year-old student. During a life-changing trip to the sun-and-wind kingdom of Ninh Thuan, Kiet witnessed the immense hardships of local farmers — creators of incredible delicacies who struggled to reach the modern market due to the digital divide. Driven by a bold vision to make a difference, he refused to let youth limit his impact.',
      'To turn sympathy into action, Kiet founded the Youth Digital Agriculture Initiative. We travel directly to the heart of Ninh Thuan’s rural lands, gathering authentic footprints, smiles, and production journeys. By transforming raw fields into digital narratives, we empower local farmers to tell their own stories in their own words, directly to you.',
    ],
    cta: 'Meet Our Farmers',
    pull: 'We don’t just tell their stories — we give them the digital keys to their own future.',
  },
  map: {
    eyebrow: 'The Digital Map',
    title: 'Trace the Origin: Interactive Farm Map',
    sub: "Nature’s finest gifts are mapped right here. Click on the highlighted spots of Ninh Thuan on our digital map to instantly unlock its signature local delicacies. From the sun-drenched vineyards to the pristine agricultural treasures crafted by local hands, your journey into this breathtaking land of sun and wind starts with a single click.",
    hint: 'Click a glowing spot to reveal a delicacy and read its story.',
    region: 'Ninh Thuận · land of sun & wind',
    legendDelicacies: 'signature delicacies',
    readStory: 'Read story',
    quickTitle: 'Signature delicacy',
  },
  stories: {
    eyebrow: 'Local Inspirational Stories',
    title: 'Faces Behind Every Harvest',
    sub: 'Designed in the spirit of an awards showcase, these cards hold the journeys of 12 farming households. The full stories are being gathered during our field survey in Ninh Thuận.',
    soon: 'Story coming soon',
    readStory: 'Read story',
    delicacy: 'Signature delicacy',
    counter: (n) => `${n} of 12 households`,
  },
  shop: {
    eyebrow: 'Farm-to-Table Marketplace',
    title: 'Buy Straight from the Farmers',
    sub: 'Every purchase goes directly to the household that grew it. Browse the harvest, add to your basket, and check out — supporting Vietnam’s farmers with a single tap.',
    cart: 'Basket',
    viewCart: 'View basket',
  },
  handbook: {
    eyebrow: 'Social Impact',
    title: 'Beyond the Map: Empowering Local Communities',
    paragraphs: [
      'Sustainability is at the core of our footprints. To ensure that technology remains a permanent tool for development, the Youth Digital Agriculture Initiative has created and directly delivered a 10-page "Digital Transformation Handbook" to 100% of participating farming households.',
      "This pocket-sized guide translates complex technology into simple, everyday agricultural language. It equips farmers with essential micro-skills: from mastering product photography with their smartphones, writing authentic narratives, utilizing Zalo for customer care, to managing the custom QR Code system integrated with this map. We don’t just tell their stories, we give them the digital keys to build their own future.",
    ],
    cta: 'Preview the Digital Handbook',
    pages: '10-page pocket guide · delivered to 100% of households',
    skills: [
      { icon: '📷', label: 'Smartphone product photography' },
      { icon: '✍️', label: 'Authentic storytelling' },
      { icon: '💬', label: 'Customer care with Zalo' },
      { icon: '🔳', label: 'Managing the QR Code system' },
    ],
  },
  footer: {
    eyebrow: 'Footer & Connect',
    title: 'Grow With Us. Sustain the Heritage.',
    sub: "Whether you are a traveler looking to discover, a student wishing to contribute, or an organization aiming to create impact — your connection matters to our journey. Let’s grow the digital bridge for Vietnam’s agriculture together.",
    social: 'Social media',
    email: 'Email',
    phone: 'Phone',
    rights: 'Youth Digital Agriculture Initiative — a youth-led project for Vietnam’s farmers.',
  },
}

const vi: Dict = {
  langName: 'Tiếng Việt',
  nav: {
    intro: 'Giới thiệu',
    story: 'Câu chuyện',
    map: 'Bản đồ',
    stories: 'Nhân vật',
    shop: 'Gian hàng',
    handbook: 'Cẩm nang',
    connect: 'Kết nối',
  },
  brand: { name: 'Viet-Farm', tagline: 'Sáng kiến Nông nghiệp số Trẻ' },
  hero: {
    eyebrow: 'Sáng kiến Nông nghiệp số Trẻ',
    title: ['Sâu rễ từ lòng đất,', 'kể chuyện bằng trang web'],
    sub: 'Mỗi đặc sản địa phương tại Việt Nam đều mang theo hành trình cả đời của một người nông dân. Sáng kiến Nông nghiệp số Trẻ chào đón bạn khám phá di sản nông nghiệp phong phú nhất của đất nước thông qua bản đồ số tương tác. Quét mã, khám phá và kết nối với những đôi bàn tay đã nuôi dưỡng mảnh đất này.',
    cta: 'Khám phá bản đồ ngay',
    scroll: 'Cuộn để khám phá',
    badges: [
      { icon: '🗺️', label: 'Bản đồ tương tác' },
      { icon: '🌾', label: 'Câu chuyện chân thực' },
      { icon: '📘', label: 'Cẩm nang số' },
    ],
  },
  bigStory: {
    eyebrow: 'Lời giới thiệu bối cảnh',
    title: 'Những người hùng thầm lặng sau từng hương vị',
    paragraphs: [
      'Đằng sau những đặc sản nổi tiếng thế giới của Việt Nam là những hộ nông dân nhỏ lẻ làm việc không mệt mỏi dưới ánh mặt trời, nuôi dưỡng đất đai bằng trí tuệ được truyền qua nhiều thế hệ. Họ thu hoạch sự hoàn hảo, nhưng tiếng nói của họ thường không được lắng nghe, và câu chuyện của họ vẫn chưa được thế giới biết đến.',
      'Khoảng cách ấy đã trở thành tiếng gọi thôi thúc Lê Gia Đức Kiệt, một học sinh 16 tuổi. Trong một chuyến đi đến vương quốc đầy nắng và gió Ninh Thuận, Kiệt tận mắt chứng kiến những khó khăn chồng chất của bà con nông dân — những người làm ra các đặc sản tuyệt vời nhưng lại chật vật tiếp cận thị trường hiện đại vì rào cản công nghệ. Nuôi dưỡng một tầm nhìn lớn để tạo nên sự thay đổi, cậu bạn quyết không để số tuổi giới hạn sức tác động của mình.',
      'Để biến sự thấu cảm thành hành động thực tế, Kiệt đã sáng lập nên Sáng kiến Nông nghiệp số Trẻ. Chúng tôi đi đến tận trái tim của những vùng nông thôn Ninh Thuận, thu thập những dấu chân, nụ cười và hành trình sản xuất chân thực nhất. Bằng cách biến những đồng ruộng thô sơ thành những câu chuyện kỹ thuật số, chúng tôi trao cho người nông dân quyền tự kể câu chuyện của chính mình bằng chính ngôn từ của họ, trực tiếp đến bạn.',
    ],
    cta: 'Gặp gỡ nông dân của chúng tôi',
    pull: 'Chúng tôi không chỉ kể câu chuyện của họ — chúng tôi trao chiếc chìa khóa số để họ tự xây tương lai.',
  },
  map: {
    eyebrow: 'Bản đồ tương tác',
    title: 'Giao thoa nguồn cội: Bản đồ nông sản tương tác',
    sub: 'Những món quà tuyệt vời nhất của tự nhiên được định vị ngay tại đây. Hãy bấm vào các điểm sáng được thắp sáng của tỉnh Ninh Thuận trên bản đồ số của chúng tôi để mở khóa ngay các đặc sản đặc trưng của vùng đất này. Từ những vườn nho ngập nắng đến những báu vật nông nghiệp nguyên bản được tạo nên bởi bàn tay của người dân địa phương, hành trình chạm vào vùng đất của nắng và gió của bạn bắt đầu chỉ với một cú nhấp chuột.',
    hint: 'Bấm vào một điểm sáng để hiện đặc sản và đọc câu chuyện.',
    region: 'Ninh Thuận · vùng đất của nắng và gió',
    legendDelicacies: 'đặc sản đặc trưng',
    readStory: 'Đọc câu chuyện',
    quickTitle: 'Đặc sản đặc trưng',
  },
  stories: {
    eyebrow: 'Câu chuyện nhân vật',
    title: 'Gương mặt sau mỗi mùa gặt',
    sub: 'Lấy cảm hứng từ format của một lễ trao giải, những tấm thẻ này lưu giữ hành trình của 12 hộ nông dân. Các câu chuyện đầy đủ đang được thu thập trong chuyến khảo sát thực địa tại Ninh Thuận.',
    soon: 'Câu chuyện sắp ra mắt',
    readStory: 'Đọc câu chuyện',
    delicacy: 'Đặc sản tiêu biểu',
    counter: (n) => `${n} trong 12 hộ`,
  },
  shop: {
    eyebrow: 'Gian hàng nông sản',
    title: 'Mua trực tiếp từ nhà nông',
    sub: 'Mỗi đơn hàng đến thẳng tay hộ nông dân đã làm ra sản phẩm. Hãy dạo gian hàng, thêm vào giỏ và thanh toán — đồng hành cùng người nông dân Việt chỉ với một chạm.',
    cart: 'Giỏ hàng',
    viewCart: 'Xem giỏ hàng',
  },
  handbook: {
    eyebrow: 'Tác động xã hội',
    title: 'Phía sau bản đồ: Trao quyền cho cộng đồng địa phương',
    paragraphs: [
      'Tính bền vững là cốt lõi trong mỗi dấu chân của chúng tôi. Để đảm bảo công nghệ trở thành một công cụ phát triển lâu dài, Sáng kiến Nông nghiệp số Trẻ đã biên soạn và tận tay trao tặng "Bộ cẩm nang Chuyển đổi số" dày 10 trang tới 100% hộ nông dân tham gia dự án.',
      'Cuốn hướng dẫn bỏ túi này biến những công nghệ phức tạp thành ngôn ngữ đồng ruộng đời thường, trang bị cho bà con những kỹ năng nhỏ nhưng thiết yếu: từ cách làm chủ góc chụp ảnh bằng điện thoại, viết lời giới thiệu chân thật, ứng dụng Zalo để chăm sóc khách, cho đến việc tự quản lý hệ thống mã QR liên kết với chính bản đồ này. Chúng tôi không chỉ kể câu chuyện của họ, chúng tôi trao cho họ chiếc chìa khóa số để tự xây dựng tương lai của chính mình.',
    ],
    cta: 'Xem trước bộ cẩm nang số',
    pages: 'Cẩm nang bỏ túi 10 trang · trao tận tay 100% hộ nông dân',
    skills: [
      { icon: '📷', label: 'Chụp ảnh sản phẩm bằng điện thoại' },
      { icon: '✍️', label: 'Viết lời giới thiệu chân thật' },
      { icon: '💬', label: 'Chăm sóc khách hàng qua Zalo' },
      { icon: '🔳', label: 'Quản lý hệ thống mã QR' },
    ],
  },
  footer: {
    eyebrow: 'Chân trang tổng hợp',
    title: 'Cùng phát triển. Giữ gìn di sản.',
    sub: 'Dù bạn là một du khách muốn khám phá, một học sinh muốn đóng góp, hay một tổ chức mong muốn tạo ra tác động — sự kết nối của bạn đều có ý nghĩa to lớn đối với hành trình của chúng tôi. Hãy cùng nhau phát triển cây cầu số cho nông nghiệp Việt Nam.',
    social: 'Mạng xã hội',
    email: 'Email',
    phone: 'Số điện thoại',
    rights: 'Sáng kiến Nông nghiệp số Trẻ — dự án do người trẻ dẫn dắt vì người nông dân Việt Nam.',
  },
}

const DICTS: Record<Lang, Dict> = { en, vi }

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: Dict
}

const LanguageContext = createContext<LangCtx | null>(null)

const STORAGE_KEY = 'vf-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'en' || saved === 'vi') return saved
    }
    return 'en'
  })

  const setLang = useCallback((l: Lang) => setLangState(l), [])
  const toggle = useCallback(
    () => setLangState((p) => (p === 'en' ? 'vi' : 'en')),
    [],
  )

  useEffect(() => {
    if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<LangCtx>(
    () => ({ lang, setLang, toggle, t: DICTS[lang] }),
    [lang, setLang, toggle],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang(): LangCtx {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}

export const useT = (): Dict => useLang().t
