export interface Farmer {
  id: string
  name: string
  household: string
  village: string
  emoji: string
  images: string[]
  tags: string[]
  quote: string
  productId: string
  storyEn: string
  storyVi: string
}

export const FARMERS: Farmer[] = [
  {
    id: 'f1',
    name: 'Chị Trang',
    household: 'Chang Chang Farm',
    village: 'Ninh Thuận',
    emoji: '👩‍🌾',
    images: [],
    tags: ['Nho', 'Táo', '35 năm truyền thống'],
    quote: 'Mỗi địa phương đều có một hương vị riêng. Điều quan trọng là làm sao để người tiêu dùng được biết đến và trải nghiệm đúng hương vị chính gốc của vùng đất đó.',
    productId: 'p10',
    storyEn: `For Ms. Trang of Chang Chang Farm, grapes and apples are more than local crops — they are part of a family story that has continued for generations. Her family has grown grapes and apples in Ninh Thuận for more than 35 years. When she took over and developed the farm, she chose not only to preserve traditional farming experience, but also to improve cultivation methods, production processes, and the way the farm reaches customers.

Today, Chang Chang Farm produces around 40 tons of fruit each year. Behind that number is a long process of care, adaptation, and resilience. Like many farmers, Ms. Trang has faced difficult seasons when fruit prices dropped sharply, sometimes to only 2,000–3,000 VND per kilogram. In those times, some products had to be sold as feed for goats and cows. Instead of giving up, the farm explored ways to process and preserve its produce, reducing its dependence on fresh fruit prices during each harvest season.

The reason her family continues to grow grapes and apples is simple: these crops belong to the land. Ninh Thuận's climate and soil give the fruits their crisp texture, natural sweetness, and distinctive taste. By understanding the land, the weather, and the characteristics of each crop, farmers can bring out the best quality while building a stable livelihood for their families and contributing to the local economy.

Chang Chang Farm has also adopted new farming technologies, including automatic irrigation, automated fertilization and moisture monitoring systems. The farm grows grapes on substrates to reduce flooding risks and uses greenhouses to protect crops from rain and fog. Every improvement is made with one goal in mind: maintaining consistent quality.

Facing competition from cheaper imported fruits, especially from China, Chang Chang Farm focuses on freshness, clear origin, quality inspection, and products without preservatives. What Ms. Trang hopes is that each local fruit can carry the story of its land, so that visitors and consumers can taste the most authentic flavors of Ninh Thuận.`,
    storyVi: `Với chị Trang, nho và táo không chỉ là hai loại nông sản đặc trưng của Ninh Thuận, mà còn là một phần trong câu chuyện gia đình kéo dài qua nhiều thế hệ. Gia đình chị đã gắn bó với nghề trồng nho, trồng táo từ thời ông bà, đến nay đã hơn 35 năm. Khi tiếp nối công việc này, chị không chỉ giữ lại kinh nghiệm truyền thống mà còn từng bước cải tiến quy trình trồng trọt, sản xuất và cách tiếp cận khách hàng.

Mỗi năm, vườn của Chang Chang Farm cho sản lượng khoảng 40 tấn. Đây là kết quả của quá trình chăm sóc bền bỉ, nhưng cũng là áp lực lớn vì nông sản luôn chịu ảnh hưởng bởi thời tiết, thị trường và giá cả. Có những mùa vụ, giá nông sản xuống rất thấp, thậm chí chỉ còn 2.000–3.000 đồng/kg và phải bán làm thức ăn cho dê, bò. Thay vì bỏ cuộc, nông trại tìm cách chế biến, bảo quản sản phẩm tốt hơn để giảm phụ thuộc vào giá tươi từng mùa.

Lý do gia đình chị vẫn bám trụ với nho và táo là vì đây là những loại cây phù hợp với thổ nhưỡng Ninh Thuận, tạo nên hương vị giòn, ngọt và khác biệt so với nhiều vùng khác. Khi hiểu rõ đặc điểm đất đai, khí hậu và giống cây, người nông dân có thể khai thác tốt hơn giá trị của sản phẩm, vừa tạo thu nhập ổn định cho gia đình, vừa đóng góp vào kinh tế địa phương.

Chang Chang Farm hiện đang áp dụng nhiều cải tiến trong canh tác như hệ thống tưới tự động, bón phân và kiểm tra độ ẩm tự động, theo dõi tình trạng cây trồng qua hệ thống công nghệ. Nông trại cũng trồng nho trên giá thể để hạn chế ngập lụt, đồng thời sử dụng nhà kính để tránh mưa và sương mù, hướng đến mục tiêu ổn định chất lượng sản phẩm.

Giữa áp lực cạnh tranh với trái cây nhập khẩu giá rẻ, Chang Chang Farm chọn giữ lợi thế bằng sự tươi ngon, nguồn gốc rõ ràng, có kiểm định và không dùng chất bảo quản. Điều chị mong muốn là mỗi vùng đất có thể kể được câu chuyện riêng của nông sản mình, để du khách và người tiêu dùng được trải nghiệm đúng hương vị chính gốc của địa phương.`,
  },
  {
    id: 'f2',
    name: 'Anh Hoàng',
    household: 'Nông hộ Anh Hoàng',
    village: 'Ninh Thuận',
    emoji: '🧑‍🌾',
    images: [],
    tags: ['Nho', '20+ năm kinh nghiệm'],
    quote: 'Điều tôi mong muốn là sản phẩm được kể bằng câu chuyện về sự uy tín, quy trình trồng chuyên nghiệp và chất lượng ổn định để du khách, khách hàng trong và ngoài nước thêm tin tưởng.',
    productId: 'p10',
    storyEn: `For Mr. Hoàng, grapes are not only a source of income — they are part of his childhood. Growing up in a farming family, he was introduced to grape cultivation at an early age through his parents' work. Over the years, what began as a familiar family activity became a lifelong commitment. Today, he has spent more than 20 years growing grapes in Ninh Thuận.

His decision to continue with grape farming comes from both economic value and emotional attachment. Compared with several other crops, grapes can bring better revenue, and they are also one of the signature agricultural products of Ninh Thuận. For Mr. Hoàng, developing grape farming is not only about supporting his family's livelihood, but also about helping more local and international visitors recognize the value of Ninh Thuận's agricultural identity.

Like many farmers, he has faced difficult periods when prices fluctuated and the market became less stable. However, he chose to stay with the profession because of his love for the work and his long-term vision. Over time, that persistence helped him build a trusted brand that customers appreciate and return to.

One of his current challenges is reaching foreign visitors. Although the farm's products are stable in quality and professionally cultivated, telling the product story to international customers is still not easy. This is why he sees value in tools such as agricultural maps, QR codes, websites, and digital media platforms.

In farming, Mr. Hoàng is among the local farmers who actively apply technology. His vineyard uses smart irrigation and greenhouse cultivation to better control growing conditions, improve product quality, and strengthen customer trust.

When competing with cheaper imported fruits, particularly from China, Mr. Hoàng has faced pressure in both pricing and appearance. Instead of competing only on price, he focuses on improving the farming process, maintaining consistent quality, and building credibility. Through the agricultural map, he hopes consumers can understand the professionalism behind his cultivation process, the stability of his products, and why Ninh Thuận grapes deserve their trust.`,
    storyVi: `Với anh Hoàng, cây nho không chỉ là một loại cây trồng mang lại thu nhập, mà còn là một phần ký ức tuổi thơ. Sinh ra trong gia đình có ba mẹ làm nông, anh được tiếp xúc với vườn nho từ nhỏ và dần gắn bó với nghề đến nay đã hơn 20 năm. Từ những ngày theo gia đình ra vườn, quan sát cách chăm cây, thu hoạch và bán sản phẩm, cây nho đã trở thành một phần quen thuộc trong cuộc sống của anh.

Lý do anh Hoàng tiếp tục chọn cây nho thay vì chuyển sang cây trồng khác đến từ cả yếu tố kinh tế lẫn tình cảm. So với một số loại cây khác, nho mang lại doanh số tốt hơn và cũng là một trong những nông sản đặc thù của tỉnh Ninh Thuận. Với anh, phát triển cây nho không chỉ là phát triển sinh kế cho gia đình, mà còn là cách góp phần đưa hình ảnh nông sản địa phương đến gần hơn với du khách trong và ngoài nước.

Trong quá trình làm nghề, không phải lúc nào thị trường cũng thuận lợi. Có những thời điểm giá cả biến động, đầu ra gặp khó khăn, nhưng anh Hoàng vẫn chọn bám trụ vì tinh thần yêu nghề và mong muốn xây dựng giá trị lâu dài. Theo thời gian, sự kiên trì ấy giúp anh tạo dựng được thương hiệu riêng, được khách hàng yêu thích và tin tưởng.

Hiện nay, một trong những khó khăn lớn nhất của anh là việc tiếp cận nhóm du khách nước ngoài. Dù sản phẩm có chất lượng tốt và quy trình canh tác ổn định, việc truyền tải câu chuyện sản phẩm đến khách quốc tế vẫn còn nhiều hạn chế. Đây cũng là lý do anh quan tâm đến các công cụ hỗ trợ quảng bá như website, bản đồ nông sản, mã QR và các nền tảng truyền thông số.

Trong canh tác, anh Hoàng là một trong những nông hộ đi đầu trong việc ứng dụng công nghệ. Vườn nho được áp dụng hệ thống tưới thông minh và mô hình nuôi trồng trong nhà kính, giúp kiểm soát tốt hơn điều kiện sản xuất, nâng cao chất lượng sản phẩm và tạo dựng sự tin cậy với khách hàng.

Trước sự cạnh tranh của trái cây nhập khẩu, đặc biệt là trái cây Trung Quốc giá rẻ, anh Hoàng từng gặp áp lực về giá thành và mẫu mã. Nhưng thay vì chạy theo giá rẻ, anh chọn cải tiến quy trình, ổn định chất lượng và xây dựng uy tín. Điều anh mong muốn khi sản phẩm được đưa lên bản đồ nông sản là người tiêu dùng có thể hiểu rõ hơn về sự chuyên nghiệp trong quy trình trồng, chất lượng ổn định và lý do vì sao nho Ninh Thuận xứng đáng được tin tưởng.`,
  },
  {
    id: 'f3',
    name: 'Anh Mân',
    household: 'Nông hộ Anh Mân',
    village: 'Ninh Thuận',
    emoji: '🧑‍🌾',
    images: [],
    tags: ['Chanh dây', 'Thí điểm', '33 tuổi'],
    quote: 'Tôi mong mô hình chanh dây có thể được nhân rộng trước, từ đó tăng độ nhận diện cho sản phẩm và mở ra hướng phát triển mới cho nông nghiệp địa phương.',
    productId: 'p10m',
    storyEn: `For Mr. Mân, passion fruit represents a new direction in his family's farming journey. At the age of 33, he began experimenting with this crop with the hope of finding a more promising farming model — one that meets market demand and may open up new opportunities for local agriculture.

Unlike farmers who have worked with the same traditional crop for decades, Mr. Mân's passion fruit garden is still in its early stage. He has been growing the crop for about one year, and because it is still a pilot model, the current yield is only a few dozen kilograms. Although the production is still small, it is an important first step for him to observe how the crop adapts, evaluate cultivation efficiency, and prepare for possible expansion in the future.

He chose passion fruit because it is a relatively new crop with high harvest potential and growing market demand. For him, trying a new crop is not only about income. It is also a way to continue his family's farming tradition with a more innovative mindset. He hopes to contribute to improving the value of local agriculture, moving beyond small-scale production toward a more stable model with stronger market access and brand potential.

At the moment, his biggest challenge is that the model has not yet been expanded, which limits customer reach. Investment costs for farming equipment and the uncertainty of market output are also major concerns, especially for a project still in the testing phase. With limited production, building sales channels and product recognition remains a long-term task.

In cultivation, Mr. Mân has already applied several techniques, including mist irrigation, flood irrigation, and the use of organic microbial fertilizer to reduce disease risks for the plants. While this is not yet a fully high-tech farming model, these steps show his willingness to improve farming practices and adopt better methods.

What Mr. Mân hopes for first is to expand the passion fruit model and increase product recognition. His story is not only about a new crop, but also about experimentation, learning, and the search for a more sustainable future for local agriculture.`,
    storyVi: `Với anh Mân, chanh dây là một hướng đi mới trong hành trình làm nông của gia đình. Ở tuổi 33, anh bắt đầu thử nghiệm loại cây này với mong muốn tìm kiếm một mô hình canh tác có tiềm năng hơn, phù hợp với nhu cầu thị trường và có thể mở ra hướng phát triển mới cho nông nghiệp địa phương.

Khác với những hộ đã gắn bó hàng chục năm với một loại cây trồng truyền thống, vườn chanh dây của anh Mân mới được triển khai khoảng một năm. Vì đang trong giai đoạn trồng thí điểm, sản lượng hiện tại chỉ đạt vài chục kg. Tuy chưa phải là con số lớn, đây vẫn là bước khởi đầu quan trọng để anh quan sát khả năng thích nghi của cây, đánh giá hiệu quả canh tác và chuẩn bị cho việc nhân rộng trong tương lai.

Lý do anh chọn chanh dây là vì đây là giống cây trồng mới, có khả năng cho thu hoạch tốt và đang được thị trường ưa chuộng. Với anh, việc thử sức với một loại cây mới không chỉ là câu chuyện kinh tế, mà còn là cách nối tiếp truyền thống làm nông của gia đình bằng một tinh thần đổi mới hơn. Anh mong muốn góp phần phát triển giá trị nông nghiệp địa phương, không chỉ dừng lại ở sản xuất nhỏ lẻ mà từng bước hướng đến mô hình ổn định, có đầu ra và có khả năng tạo dựng thương hiệu.

Khó khăn lớn nhất hiện nay của anh là mô hình chưa được nhân rộng nên khả năng tiếp cận khách hàng còn hạn chế. Bên cạnh đó, chi phí đầu tư cho trang thiết bị trồng trọt và câu chuyện đảm bảo đầu ra cũng là những áp lực đáng kể đối với một mô hình đang ở giai đoạn thử nghiệm.

Trong quá trình canh tác, anh Mân đã bước đầu áp dụng một số kỹ thuật như tưới phun sương, tưới tràn và sử dụng phân hữu cơ vi sinh nhằm hạn chế mầm bệnh cho cây. Dù chưa phải là mô hình công nghệ cao hoàn chỉnh, đây là những cải tiến quan trọng giúp cây trồng được chăm sóc tốt hơn.

Điều anh Mân mong muốn trước mắt là mô hình chanh dây có thể được nhân rộng, từ đó tăng độ nhận diện cho sản phẩm và tạo nền tảng để tiếp cận khách hàng tốt hơn. Với anh, câu chuyện của vườn chanh dây không chỉ là câu chuyện về một giống cây mới, mà còn là hành trình thử nghiệm, học hỏi và tìm kiếm cơ hội để nông nghiệp địa phương phát triển theo hướng bền vững hơn.`,
  },
  {
    id: 'f4',
    name: 'Cô Như',
    household: 'Hộ trồng táo',
    village: 'Ninh Thuận',
    emoji: '👩‍🌾',
    images: [],
    tags: ['Táo', '5 năm kinh nghiệm'],
    quote: 'Tôi mong sản phẩm táo của gia đình có thể tiếp cận tốt hơn với các sàn thương mại điện tử, từ đó mở rộng đầu ra và tăng doanh số cho nông sản địa phương.',
    productId: 'p10b',
    storyEn: `For Ms. Như, apple farming is a practical and meaningful choice that fits both the natural conditions and farming life in Ninh Thuận. Over the past five years, she has gradually built a stable cultivation model, with apples becoming an important source of income for the family.

She chose to continue growing apples because this crop is one of the distinctive agricultural products of the region. It is well suited to Ninh Thuận's climate and soil, and it provides a relatively stable yield of around 19–20 tons per year. For a farming household, this level of stability is an important reason to stay with the crop.

Like many farmers, Ms. Như has experienced periods when market prices were low and income was affected. Still, she continues to maintain the apple garden because the work allows a certain level of flexibility. This gives the family time to take on other work when needed, helping them balance and stabilize their overall income.

The biggest challenge for her today is price competition. With many different sources of fruit on the market, especially lower-priced products, local produce often faces pressure in terms of sales and revenue. This is not only the challenge of one household, but also a common issue for many farmers seeking stable market access.

In cultivation, Ms. Như's family has not yet adopted many modern technologies. However, they use organic fertilizer to help reduce plant disease risks and support a safer, more sustainable way of caring for the apple garden. Although the farm has not been able to invest heavily in advanced techniques, she remains interested in methods that can improve crop quality and reduce production risks.

Looking ahead, Ms. Như hopes that her family's apples can reach more e-commerce platforms and online customers. With the right support, local apple farms can increase product recognition, expand market access, and improve sales, helping farmers feel more secure in continuing their work.`,
    storyVi: `Với cô Như, cây táo là một lựa chọn phù hợp với điều kiện tự nhiên và đời sống sản xuất tại Ninh Thuận. Trong 5 năm gắn bó với nghề, cô đã từng bước xây dựng mô hình canh tác ổn định, lấy cây táo làm nguồn thu nhập chính cho gia đình.

Lý do cô Như chọn gắn bó với cây táo là vì đây là một trong những giống cây trồng đặc thù của địa phương, phù hợp với khí hậu và thổ nhưỡng Ninh Thuận. Cây táo không chỉ mang lại sản lượng tương đối ổn định, trung bình khoảng 19–20 tấn mỗi năm, mà còn tạo nguồn thu nhập đều đặn cho gia đình.

Trong quá trình sản xuất, không phải lúc nào giá nông sản cũng thuận lợi. Có những thời điểm giá bán xuống thấp, thu nhập bị ảnh hưởng bởi sự cạnh tranh trên thị trường. Tuy vậy, cô Như vẫn tiếp tục duy trì vườn táo vì công việc này có tính linh động, giúp gia đình có thể sắp xếp thời gian để làm thêm những công việc khác.

Khó khăn lớn nhất hiện nay của cô là áp lực cạnh tranh về giá thành. Khi thị trường có nhiều nguồn trái cây khác nhau, đặc biệt là các loại trái cây giá rẻ, nông sản địa phương dễ bị ảnh hưởng về doanh số.

Trong canh tác, hộ của cô Như hiện chưa áp dụng nhiều công nghệ hiện đại. Tuy nhiên, gia đình đã sử dụng phân bón hữu cơ nhằm hạn chế mầm bệnh cho cây, hướng đến việc chăm sóc vườn táo theo cách an toàn và bền vững hơn.

Điều cô mong muốn trong tương lai là sản phẩm táo của gia đình có thể tiếp cận tốt hơn với các sàn thương mại điện tử và kênh bán hàng trực tuyến. Với sự hỗ trợ phù hợp, những vườn táo địa phương như cô có thể tăng độ nhận diện, mở rộng đầu ra và cải thiện doanh số.`,
  },
  {
    id: 'f5',
    name: 'Chú Tín',
    household: 'Nông hộ Chú Tín',
    village: 'Ninh Thuận',
    emoji: '🧑‍🌾',
    images: [],
    tags: ['Táo', '56 tuổi', '3 năm kinh nghiệm'],
    quote: 'Tôi mong người tiêu dùng biết đến vườn táo xanh, sạch, ngọt, được chăm sóc kỹ càng và có thể tiếp cận được nhiều khách hàng hơn.',
    productId: 'p10b',
    storyEn: `For Mr. Tín, apple farming is a new direction after many years of working in agriculture. In the past, his family grew melons, but over time, melons were no longer as suitable for their farming conditions and economic goals. He then decided to shift to apples — a perennial crop that offers a more stable direction for farming in Ninh Thuận.

Mr. Tín has been growing apples for three years. His garden currently produces under three tons per year, with two harvest seasons annually. Compared with long-established farms, his production scale is still modest. However, it reflects a process of learning, adapting, and gradually becoming familiar with a new crop.

He chose apples because he wanted to find a more sustainable path in agriculture. For farmers, changing crops is never an easy decision. It requires investment, new knowledge, and time before the trees can produce stable yields. Still, Mr. Tín chose to try because he believes apples may bring better opportunities for his family in the future.

Through his farming experience, he understands that agriculture always comes with price fluctuations. There are seasons when prices are good, and there are seasons when they fall. When prices are low, farmers still have to continue caring for their gardens because that is part of the profession. For him, staying with the work means accepting difficulties and continuing with commitment.

His biggest challenge today is limited customer access. Most of his apples are still sold within Ninh Thuận, and the farm has not yet reached many tourists or customers outside the province. Although the early stage was difficult, he feels that things have gradually improved, and his family continues to maintain the apple garden.

In cultivation, Mr. Tín has not yet applied many modern technologies, but he focuses on careful and clean farming practices. His family uses manure, clean fertilizer, and a reasonable watering schedule of about once a week. These methods help keep the apple garden stable and suitable for the family's current conditions.

Through the agricultural map, Mr. Tín hopes more people can learn about his apple garden — green, clean, sweet, and carefully tended. He believes that if the story of the farm is told more clearly, local apples will have more chances to reach new customers.`,
    storyVi: `Với chú Tín, cây táo là một hướng chuyển đổi mới sau nhiều năm làm nông. Trước đây, gia đình chú từng trồng dưa, nhưng theo thời gian, cây dưa không còn phù hợp với điều kiện sản xuất và hiệu quả kinh tế như trước. Vì vậy, chú quyết định chuyển sang cây táo — một loại cây lâu năm, phù hợp hơn với định hướng canh tác ổn định tại Ninh Thuận.

Tính đến nay, chú Tín đã gắn bó với nghề trồng táo được 3 năm. Mỗi năm, vườn của chú cho sản lượng khoảng dưới 3 tấn, với 2 vụ canh tác. So với những hộ trồng lâu năm, quy mô sản xuất của chú chưa lớn, nhưng đây là kết quả của quá trình từng bước làm quen, học hỏi và thích nghi với một loại cây trồng mới.

Lý do chú chọn cây táo là vì mong muốn tìm một hướng đi bền vững hơn trong sản xuất nông nghiệp. Với người nông dân, thay đổi cây trồng không phải là quyết định dễ dàng, bởi nó đòi hỏi vốn đầu tư, kinh nghiệm chăm sóc và thời gian để cây cho năng suất ổn định.

Trong quá trình làm nghề, chú Tín hiểu rõ rằng nông nghiệp luôn có lúc được giá, lúc mất giá. Khi giá xuống, người nông dân vẫn phải chấp nhận và tiếp tục chăm sóc vườn, bởi đó là đặc thù của nghề. Với chú, bám trụ không chỉ là vì thu nhập, mà còn là tinh thần chấp nhận khó khăn và tiếp tục làm việc với những gì mình đã chọn.

Khó khăn lớn nhất của chú hiện nay là khả năng tiếp cận khách hàng còn hạn chế. Sản phẩm táo của gia đình chủ yếu vẫn được bán trong phạm vi Ninh Thuận, chưa tiếp cận được nhiều với du khách hoặc các nhóm khách hàng ngoài địa phương.

Trong canh tác, chú Tín chưa áp dụng nhiều công nghệ hiện đại, nhưng chú chú trọng cách chăm sóc theo hướng sạch và kỹ càng. Gia đình sử dụng phân chuồng, phân sạch và tưới nước hợp lý khoảng một lần mỗi tuần.

Điều chú mong muốn khi sản phẩm được giới thiệu trên bản đồ nông sản là người tiêu dùng có thể biết đến vườn táo xanh, sạch, ngọt và được chăm sóc kỹ càng. Với chú, nếu câu chuyện của vườn được kể rõ hơn, sản phẩm táo địa phương sẽ có thêm cơ hội tiếp cận nhiều khách hàng mới.`,
  },
  {
    id: 'f6',
    name: 'Cô Xéo',
    household: 'Nông hộ Cô Xéo',
    village: 'Ninh Thuận',
    emoji: '👩‍🌾',
    images: [],
    tags: ['Măng tây xanh', '8 năm kinh nghiệm', 'Tuần hoàn'],
    quote: 'Tôi muốn mọi người biết đến măng tây xanh được trồng theo mô hình tuần hoàn, sạch và an toàn. Tôi làm bằng cái tâm để mang đến thực phẩm tốt cho sức khỏe và tạo công ăn việc làm ổn định cho những người lao động có hoàn cảnh khó khăn.',
    productId: 'p10l',
    storyEn: `For Ms. Xéo, green asparagus is much more than a crop — it is what she lovingly calls her "happy plant." Since the end of 2018, when she began growing asparagus on the sandy soil of Ninh Thuận, she discovered that this crop was well suited to the local environment while providing a stable source of income and daily work for her family.

After nearly eight years, asparagus has become an essential part of her life. Every day, one small plot of land produces around 15–20 kilograms of fresh asparagus, equivalent to approximately 450–500 kilograms each month. To Ms. Xéo, the true value of asparagus is not only its productivity but also the opportunity it creates: regular work, stable income, and employment for local people facing economic hardship.

She continues growing asparagus because it thrives in Ninh Thuận's sandy soil and offers reliable economic returns. That is why she proudly calls it her "happy plant" — a crop that not only supports her family but also helps create livelihoods for others.

Like many farmers, Ms. Xéo has experienced market fluctuations. Fortunately, asparagus prices usually recover after only a short period. The greater challenge comes from nature itself. Extreme heat, floods, plant diseases, and transportation difficulties can significantly reduce yields and make it harder to bring fresh produce to market.

Over the years, she has gradually adopted more sustainable farming practices. Her farm has moved from traditional flood irrigation to a water-saving circular irrigation system. She also uses livestock manure, organic microbial fertilizer, and vermiculture to produce natural fertilizer, helping improve soil quality and reduce plant diseases.

Through the Vietnam Agricultural Map, Ms. Xéo hopes more people will discover her clean, sustainably grown asparagus. More importantly, she hopes people will understand that every bundle of asparagus is grown with care, responsibility, and a genuine desire to provide healthy food while creating stable jobs for local workers.`,
    storyVi: `Đối với cô Xéo, măng tây xanh không đơn thuần là một loại cây trồng mang lại thu nhập mà còn là "cây hạnh phúc". Từ cuối năm 2018, khi bắt đầu chuyển sang trồng măng tây trên vùng đất cát Ninh Thuận, cô nhận ra đây là loại cây phù hợp với điều kiện tự nhiên địa phương, đồng thời mang đến nguồn thu nhập ổn định và tạo công việc thường xuyên cho cả gia đình.

Đến nay, cô đã gắn bó với cây măng tây gần tám năm. Mỗi ngày, một sào đất có thể cho thu hoạch từ 15–20 kg măng, tương đương khoảng 450–500 kg mỗi tháng. Với cô, giá trị lớn nhất của cây măng tây không chỉ nằm ở năng suất mà còn ở việc mỗi ngày đều có việc để làm, có thu nhập để chăm lo cuộc sống và tạo thêm việc làm cho những lao động có hoàn cảnh khó khăn trong khu vực.

Lý do cô tiếp tục gắn bó với cây măng tây cũng rất giản dị. Đây là loại cây phù hợp với vùng đất cát của Ninh Thuận, cho hiệu quả kinh tế cao và giúp gia đình có nguồn thu đều đặn. Vì vậy, cô luôn gọi măng tây là "cây hạnh phúc" – một loại cây không chỉ nuôi sống gia đình mà còn mang lại niềm vui khi có thể tạo sinh kế cho nhiều người khác.

Trong quá trình sản xuất, giá măng tây đôi lúc cũng giảm, nhưng theo cô, những giai đoạn này thường không kéo dài. Điều khiến cô lo lắng hơn là những yếu tố bất lợi từ thiên nhiên như nắng nóng kéo dài, mưa lũ, dịch bệnh trên cây trồng hay điều kiện giao thông khó khăn.

Những năm gần đây, cô Xéo từng bước thay đổi phương pháp canh tác để hướng tới mô hình nông nghiệp bền vững hơn. Từ cách tưới tràn truyền thống, cô chuyển sang hệ thống tưới tiết kiệm theo mô hình tuần hoàn. Gia đình cũng sử dụng phân chuồng, phân hữu cơ vi sinh và nuôi trùn quế để tạo nguồn phân bón tự nhiên.

Điều cô Xéo mong muốn nhất khi sản phẩm của mình xuất hiện trên Bản đồ Nông sản Việt là người tiêu dùng biết đến những bó măng tây xanh được trồng theo mô hình tuần hoàn, sạch và an toàn. Với cô, làm nông không chỉ là tạo ra một sản phẩm chất lượng mà còn là làm bằng cái tâm, để người sử dụng có thực phẩm tốt cho sức khỏe, đồng thời giúp nhiều lao động địa phương có việc làm và thu nhập ổn định.`,
  },
  {
    id: 'f7',
    name: 'Chú Kiều Văn Toản',
    household: 'Nông hộ Kiều Văn Toản',
    village: 'Ninh Thuận',
    emoji: '🧑‍🌾',
    images: [],
    tags: ['Đậu phộng', '56 tuổi', 'Hữu cơ'],
    quote: 'Tôi muốn mọi người biết rằng đậu phộng của gia đình được trồng theo mô hình sạch, dùng phân hữu cơ, thuốc sinh học và không dùng chất độc hại, để không ảnh hưởng đến sức khỏe con người.',
    productId: 'p10n',
    storyEn: `For Mr. Kiều Văn Toản, peanuts are not only a crop for sale, but also part of his family's circular farming practice. He has been growing peanuts for about two to three years and sees the crop as highly beneficial for farmers, especially in the nutrient-poor soil conditions of Ninh Thuận.

Each year, depending on the cultivated area, his family grows around one to two small plots of peanuts, producing approximately 1–1.1 tons. Although the scale is not large, peanuts provide more than one source of value. The seeds can be sold to the market, while the plant stems after harvest can be used as animal feed or green manure for the farm, especially for the family's asparagus garden.

Mr. Toản continues growing peanuts because the crop helps farmers earn income while improving the soil for future seasons. According to him, peanut stems can be used to cover the ground, making the soil softer, looser, and healthier. In an area where the soil lacks nutrients, reusing agricultural by-products as organic fertilizer is both practical and sustainable.

However, the biggest challenge is market access. His peanuts are mainly sold in small quantities to local customers in Ninh Thuận. If production increases, selling becomes more difficult because there is no stable output channel. Local peanuts also face competition from imported products, which often come in larger quantities and at lower prices.

In cultivation, Mr. Toản focuses on improving soil quality through natural methods. Since the land is relatively poor in nutrients, his family uses manure as a base fertilizer and adds other organic materials to help the plants grow better. To him, successful farming begins with caring for the soil before caring for the crop.

Through the Vietnam Agricultural Map, he hopes consumers will understand that his peanuts are grown in a clean and responsible way, using organic fertilizer and biological methods instead of harmful chemicals. For him, the value of a crop lies not only in the product itself, but also in the way it is grown — with care for the land and for human health.`,
    storyVi: `Với chú Kiều Văn Toản, cây đậu phộng không chỉ là một loại nông sản để bán, mà còn là một phần trong cách làm nông tuần hoàn của gia đình. Gắn bó với cây đậu phộng khoảng 2–3 năm nay, chú xem đây là loại cây mang lại nhiều lợi ích thiết thực cho người nông dân, đặc biệt trong điều kiện đất đai còn bạc màu tại Ninh Thuận.

Mỗi năm, tùy theo diện tích canh tác, gia đình chú trồng khoảng 1–2 sào đậu phộng, đạt sản lượng khoảng 1–1,1 tấn. Quy mô chưa quá lớn, nhưng cây đậu phộng lại có giá trị kép: hạt đậu có thể bán ra thị trường, còn thân cây sau thu hoạch được tận dụng làm thức ăn cho gia súc hoặc làm phân xanh để bón lại cho vườn, đặc biệt là vườn măng tây của gia đình.

Lý do chú Toản tiếp tục gắn bó với cây đậu phộng là vì loại cây này giúp người nông dân không chỉ có thêm thu nhập mà còn cải tạo đất cho những mùa vụ sau. Theo chú, thân cây đậu phộng có thể phủ đất, giúp đất tơi xốp và tốt hơn.

Dù vậy, cây đậu phộng cũng không tránh khỏi những khó khăn về đầu ra. Chú cho biết sản phẩm chủ yếu được bán lẻ cho bà con trong khu vực Ninh Thuận. Nếu làm với số lượng lớn thì khó tiêu thụ vì chưa có đầu ra ổn định. Bên cạnh đó, đậu phộng địa phương cũng chịu áp lực cạnh tranh với hàng nhập khẩu.

Trong canh tác, chú Toản chú trọng cải thiện chất lượng đất bằng các phương pháp tự nhiên. Vì đất tại khu vực còn bạc màu, gia đình chú sử dụng phân chuồng bón lót và bổ sung các loại phân hữu cơ để giúp cây đạt hiệu quả tốt hơn. Với chú, muốn cây phát triển tốt thì người nông dân phải đầu tư kỹ thuật và chăm đất trước khi chăm cây.

Điều chú mong muốn khi đậu phộng của mình được đưa lên Bản đồ Nông sản Việt là người tiêu dùng hiểu rằng đây là sản phẩm được làm theo mô hình sạch, sử dụng phân hữu cơ, thuốc sinh học và không dùng chất độc hại. Với chú, giá trị của nông sản không chỉ nằm ở hạt đậu, mà còn ở cách người nông dân làm ra nó một cách an toàn, có trách nhiệm với đất đai và sức khỏe con người.`,
  },
  {
    id: 'f8',
    name: 'Anh Tứ',
    household: 'Nông hộ Anh Tứ',
    village: 'Ninh Thuận',
    emoji: '🧑‍🌾',
    images: [],
    tags: ['Dừa', '35 tuổi', '5-6 năm kinh nghiệm'],
    quote: 'Tôi muốn mọi người biết đến dừa Ninh Thuận là loại nông sản tươi mát, sạch sẽ, được chăm sóc theo quy trình nông sản sạch.',
    productId: 'p10o',
    storyEn: `For Mr. Tứ, the coconut garden is not only a source of income but also a family legacy. His parents were the ones who first planted the coconut trees, and he later took over the garden to continue caring for it. Over the past five to six years, he has gradually maintained and developed the family's coconut farm in Ninh Thuận.

Each year, his garden produces around 15,000–20,000 coconuts. However, the yield is not fixed. It depends greatly on the weather, the dry and rainy seasons, and the amount of water available each year. In the dry climate of Ninh Thuận, water plays an essential role in determining both the productivity and quality of the coconuts.

Mr. Tứ continues growing coconuts because the crop is well suited to the local land and requires less intensive care than many other crops. Once the trees are established, they can be maintained for many years with proper care. For him, switching to another crop would not be easy, as it would require time, investment, and the willingness to face new risks.

Like many farmers, he has also experienced unstable market prices. This is one of the biggest challenges for his family. When the market changes, farmers often have to lower prices to sell their products. Facing competition from cheaper imported fruits, local coconuts also come under pricing pressure.

Still, Mr. Tứ chooses to stay with coconut farming because the garden represents years of family effort. Each tree carries time, investment, and care. Changing to another crop would mean starting almost from the beginning.

In cultivation, his family uses a water-saving irrigation system to make better use of limited water resources. They also apply organic fertilizer to support healthier trees and cleaner farming practices. These methods are practical for local conditions and help maintain the quality of the coconut garden.

Through the Vietnam Agricultural Map, Mr. Tứ hopes more people will know Ninh Thuận coconuts as fresh, clean, and grown through responsible farming practices. He believes that if the story of the coconut garden is told more clearly, local products will have more chances to reach customers beyond the province.`,
    storyVi: `Với anh Tứ, vườn dừa không chỉ là một nguồn thu nhập mà còn là phần tiếp nối từ gia đình. Ba mẹ anh là người trồng dừa trước, sau đó để lại vườn cho anh chăm sóc và duy trì. Tính đến nay, anh đã gắn bó với cây dừa khoảng 5–6 năm, từng bước tiếp quản công việc quen thuộc của gia đình trên vùng đất Ninh Thuận.

Mỗi năm, vườn dừa của anh cho sản lượng khoảng 15.000–20.000 trái. Tuy nhiên, con số này không cố định mà phụ thuộc nhiều vào thời tiết, mùa nắng, mùa mưa và lượng nước từng năm. Với đặc thù khí hậu khô hạn của Ninh Thuận, nguồn nước là một trong những yếu tố quan trọng quyết định năng suất và chất lượng trái dừa.

Anh Tứ chọn tiếp tục gắn bó với cây dừa vì đây là loại cây phù hợp với đất đai địa phương và không đòi hỏi quá nhiều công chăm sóc như một số cây trồng khác. Khi cây đã bén rễ và phát triển ổn định, người nông dân có thể duy trì vườn lâu dài nếu biết chăm sóc đúng cách.

Trong quá trình làm nghề, giá dừa cũng có lúc lên xuống thất thường. Đây là một trong những khó khăn lớn nhất mà gia đình anh đang đối mặt. Khi thị trường biến động, người nông dân thường phải điều chỉnh giá bán để tiêu thụ được sản phẩm. Đặc biệt, trước sự cạnh tranh của trái cây nhập khẩu giá rẻ, dừa địa phương cũng chịu áp lực về giá.

Dù vậy, anh Tứ vẫn chọn bám trụ với cây dừa vì đây là vườn cây lâu năm của gia đình. Đằng sau mỗi cây dừa là thời gian chăm sóc, vốn đầu tư và công sức tích lũy qua nhiều năm.

Trong canh tác, gia đình anh đã áp dụng hệ thống tưới tiết kiệm để sử dụng nước hiệu quả hơn, đồng thời dùng phân hữu cơ để bón cho cây. Đây là những phương pháp phù hợp với điều kiện sản xuất tại địa phương.

Điều anh mong muốn khi sản phẩm được đưa lên Bản đồ Nông sản Việt là người tiêu dùng biết đến dừa Ninh Thuận như một loại nông sản tươi mát, sạch sẽ và được chăm sóc theo quy trình nông sản sạch.`,
  },
  {
    id: 'f9',
    name: 'Chị Trâm',
    household: 'Nông hộ Chị Trâm',
    village: 'Ninh Thuận',
    emoji: '👩‍🌾',
    images: [],
    tags: ['Nho Mẫu Đơn', 'Nho sữa Hàn Quốc', '30 tuổi'],
    quote: 'Tôi muốn nhiều khách hàng biết đến nho sạch, được chăm bón kỹ càng bởi những người trẻ và thấy rằng ở Ninh Thuận vẫn có thể trồng được những giống nho đặc biệt.',
    productId: 'p10',
    storyEn: `For Ms. Trâm, the vineyard represents a connection between the experience of the older generation and the new approach of young farmers. Her family began growing Shine Muscat grapes and Korean milk grapes in 2020. At first, the vineyard was managed by her mother. Later, when her mother became ill, Ms. Trâm and her husband took over and continued developing the farm with a more modern approach, focusing not only on product quality but also on how to reach customers.

On an area of about 1.8 sào, her vineyard produces around 600–800 kilograms of grapes each year. The yield is not large, but it reflects the effort required to cultivate these delicate grape varieties. Shine Muscat is especially difficult to grow in hot weather, which makes Ms. Trâm even more determined to continue. She wants to show that Ninh Thuận can grow these special grape varieties if the right cultivation methods are applied.

Her decision to maintain the vineyard is not only about income. It also comes from a desire to create a distinctive product for the local area. To her, every clean, carefully grown bunch of grapes is a way to show the innovation of Ninh Thuận agriculture — a place where young farmers are willing to experiment and develop new varieties.

Like many farmers, Ms. Trâm faces unstable market prices. Prices may rise and fall, but once the crop has been planted, farmers must continue caring for it. Her biggest challenge today is the imbalance between supply and promotion. Sometimes the farm has plenty of grapes, but customers do not yet know about them. At other times, when customers and tourists become interested, the farm has little or no fruit left to sell.

To improve cultivation quality, her farm uses greenhouses, an automatic irrigation system, organic fertilizer, and manure. These practices help protect the vines from harsh weather and support a cleaner, more stable production process.

A distinctive part of Ms. Trâm's story is the role of young farmers in digital transformation. In the past, her mother, being older, did not know how to use platforms such as Facebook, Zalo, or TikTok to promote the products. After taking over, Ms. Trâm began using Facebook and TikTok more actively to introduce the vineyard, helping more customers discover the grapes.

Through the Vietnam Agricultural Map, she hopes more customers will know her grapes as clean, carefully grown products cultivated by young farmers. For her, the story of the vineyard is not only about a special fruit, but also about continuity, innovation, and the belief that local agriculture can grow in a more modern way.`,
    storyVi: `Với chị Trâm, vườn nho là sự tiếp nối giữa kinh nghiệm của thế hệ trước và cách làm mới của người trẻ. Gia đình chị bắt đầu trồng nho Mẫu Đơn và nho sữa Hàn Quốc từ năm 2020, đến nay đã hơn 6 năm. Ban đầu, vườn do mẹ chị chăm sóc. Sau này, khi mẹ bệnh, vợ chồng chị tiếp quản và tiếp tục phát triển vườn theo hướng hiện đại, chú trọng cả chất lượng sản phẩm lẫn cách tiếp cận khách hàng.

Trên diện tích khoảng 1,8 sào, vườn nho của chị Trâm cho sản lượng khoảng 600–800 kg mỗi năm. Đây không phải là sản lượng quá lớn, nhưng lại là kết quả của một mô hình canh tác đòi hỏi nhiều công chăm sóc, đặc biệt vì nho Mẫu Đơn là giống nho khó trồng trong điều kiện thời tiết nắng nóng.

Lý do chị chọn duy trì vườn nho không chỉ nằm ở giá trị kinh tế, mà còn ở mong muốn tạo ra một sản phẩm khác biệt cho địa phương. Với chị, mỗi chùm nho sạch, được chăm bón kỹ càng là một cách để người tiêu dùng nhìn thấy sự đổi mới của nông nghiệp Ninh Thuận — nơi không chỉ có những giống cây quen thuộc, mà còn có những người trẻ dám thử nghiệm và phát triển các giống nho mới.

Trong quá trình làm nghề, chị Trâm cũng đối mặt với nhiều khó khăn. Giá nông sản có lúc lên, lúc xuống, nhưng khi đã chọn trồng thì người nông dân phải tiếp tục bám trụ và chăm sóc vườn. Khó khăn lớn nhất hiện nay của chị là nguồn cung chưa đồng đều và cách quảng bá sản phẩm chưa thật sự ổn định.

Để nâng cao chất lượng canh tác, vườn của chị Trâm đã áp dụng nhà kính, hệ thống tưới nước tự động, phân bón hữu cơ và phân chuồng. Những phương pháp này giúp cây nho được chăm sóc kỹ hơn, hạn chế tác động của thời tiết và hướng đến quy trình sản xuất sạch, ổn định hơn.

Một điểm khác biệt trong câu chuyện của chị Trâm là vai trò của người trẻ trong chuyển đổi số nông nghiệp. Khi vợ chồng chị tiếp quản, chị bắt đầu sử dụng Facebook và TikTok nhiều hơn để giới thiệu vườn nho, nhờ đó khách hàng biết đến sản phẩm nhiều hơn.

Nếu được giới thiệu trên Bản đồ Nông sản Việt, chị mong nhiều khách hàng biết đến nho của gia đình như một sản phẩm sạch, được chăm bón cẩn thận bởi những người trẻ. Với chị, câu chuyện của vườn nho không chỉ là câu chuyện về một loại trái cây đặc biệt, mà còn là câu chuyện về sự tiếp nối, đổi mới và niềm tin rằng nông nghiệp địa phương vẫn có thể phát triển theo cách hiện đại hơn.`,
  },
]

export function farmerByProductId(productId: string): Farmer | undefined {
  return FARMERS.find((f) => f.productId === productId)
}
