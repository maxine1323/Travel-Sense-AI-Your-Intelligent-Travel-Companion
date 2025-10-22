// Global variables
let currentLanguage = 'zh';
let allRestaurants = [];
let filteredRestaurants = [];
let displayedRestaurants = [];
let currentPage = 0;
let itemsPerPage = 12;
let activeTag = null;
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let visited = JSON.parse(localStorage.getItem('visited') || '[]');
let booked = JSON.parse(localStorage.getItem('booked') || '[]');
// Translation data
const translations = {
    en: {
        title: "Restaurant",
        Collection: "Collection",
        searchPlaceholder: "Search by name, city, cuisine, price",
        continent: "Continent",
        city: "City",
        type: "Type",
        priceRange: "Price Range",
        allContinents: "All Continents",
        allCities: "All Cities",
        allTypes: "All Types",
        allPrices: "All Prices",
        fineDining: "Fine Dining",
        localCuisine: "Local Cuisine",
        streetFood: "Street Food",
        familyRestaurant: "Family Restaurant",
        budget: "Budget",
        midRange: "Mid-range",
        upscale: "Upscale",
        sortBy: "Sort by:",
        highestRating: "Highest Rating",
        priceLowHigh: "Price: Low to High",
        priceHighLow: "Price: High to Low",
        popularity: "Popularity",
        nameAZ: "Name A-Z",
        showPerPage: "Show per page:",
        popularTags: "Popular Tags:",
        casual: "Casual",
        family: "Family",
        vegetarian: "Vegetarian",
        dessert: "Dessert",
        search: "Search",
        resetFilters: "Reset All Filters",
        loadMore: "Load More",
        noRestaurants: "No restaurants found",
        tryDifferent: "Try different search criteria",
        resetSearch: "Reset Search",
        description: "Description",
        facilities: "Facilities",
        signatureDish: "Signature Dish",
        signatureDishes: "Signature Dishes",
        chefsSpecial: "Chef's Special",
        localMarketFavorites: "Local Market Favorites",
        addToFavorites: "Add to Favorites",
        removeFromFavorites: "Remove from Favorites",
        viewMenu: "View Menu",
        bookNow: "Book a Table",
        orderNow: "Order Now",
        bookingInProgress: "Booking...",
        tableBooked: "Table Booked!",
        orderConfirmed: "Order Confirmed!",
        markVisited: "Mark as Visited",
        removeVisited: "Remove Visited",
        similarRestaurants: "Similar Restaurants",
        favorites: "Favorites",
        visited: "Visited",
        booked: "Booked",
        totalRestaurants: "Total Restaurants",
        totalCities: "Total Cities",
        avgRating: "Average Rating",
        avgPrice: "Average Price",
        restaurantsByContinent: "Restaurants by Continent",
        restaurantsByType: "Restaurants by Type",
        rating: "Rating",
        price: "Price",
        cuisine: "Cuisine",
        hours: "Hours",
        phone: "Phone",
        website: "Website",
        wifi: "WiFi",
        parking: "Parking",
        aircon: "Air Conditioning",
        outdoor: "Outdoor Seating",
        kidsFriendly: "Kids Friendly",
        delivery: "Delivery",
        takeaway: "Takeaway",
        reservations: "Reservations",
        liveMusic: "Live Music",
        petFriendly: "Pet Friendly",
        addedToFavorites: "Added to favorites!",
        removedFromFavorites: "Removed from favorites!",
        bookingConfirmed: "Booking confirmed!",
        markedAsVisited: "Marked as visited!",
        removedFromVisited: "Removed from visited!",
        business: "Business",
        luxury: "Luxury",
        romantic: "Romantic",
        secretSpot: "Secret Spot",
        localFood: "Local Food",
        priceComparison: "Price Comparison",
        current: "Current",
        averagePrice: "Average Price",
        pricePosition: "Price Position",
        aboveAverage: "Above Average",
        belowAverage: "Below Average",
        restaurantDetails: "Restaurant Details",
        visitStatus: "Visit Status",
        iHaveBeenHere: "I have been here!",
        share: "Share",
        shareRestaurant: "Share Restaurant",
        copyLink: "Copy Link",
        footerDescription: "Discover amazing restaurants around the world. From fine dining to street food, explore culinary experiences across 6 continents and 200+ cities.",
        popularCities: "Popular Cities",
        quickLinks: "Quick Links",
        foodGuide: "Food Guide",
        faq: "FAQ",
        contactUs: "Contact Us",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        support: "Support",
        copyright: "© 2024 Global Restaurant Finder. All rights reserved.",
        madeWith: "Made with",
        forFoodLovers: "for food lovers worldwide",
        tokyo: "Tokyo",
        paris: "Paris",
        newyork: "New York",
        london: "London",
        bangkok: "Bangkok",
        sydney: "Sydney",
        rome: "Rome",
        seoul: "Seoul",
        mumbai: "Mumbai",
        beijing: "Beijing",
        barcelona: "Barcelona",
        singapore: "Singapore",
        hongkong: "Hong Kong",
        taipei: "Taipei",
        lima: "Lima",
        copenhagen: "Copenhagen",
        stockholm: "Stockholm",
        mexicocity: "Mexico City",
        saopaulo: "São Paulo",
        capetown: "Cape Town",
        nijmegen: "Nijmegen",
        shanghai: "Shanghai",
        japaneseDessert: "Japanese Dessert",
        removeFromCollection: "Remove from Collection",
        viewDetails: "View Details",
        markAsVisit: "Mark as Visit",
        booked_status: "Booked",
        visited_status: "Visited",
        bookingCancelled: "Booking cancelled!",
        // Restaurant Descriptions
        sukiyabashiJiroDesc: "World-renowned sushi restaurant run by Jiro Ono, featuring the finest omakase experience.",
        narisawaDesc: "Innovative Japanese cuisine that celebrates nature and sustainability.",
        ippudoRamenDesc: "Famous ramen chain known for its rich tonkotsu broth and perfectly cooked noodles.",
        lambroisieDesc: "Three Michelin-starred restaurant offering classic French haute cuisine in an elegant setting.",
        larpegeDesc: "Alain Passard's vegetable-focused three Michelin-starred restaurant.",
        lasDuFallafelDesc: "Famous falafel shop in the Marais district, beloved by locals and tourists alike.",
        elevenMadisonParkDesc: "Plant-based fine dining restaurant offering an innovative tasting menu.",
        katzsDelicatessenDesc: "Historic Jewish deli famous for its pastrami sandwiches since 1888.",
        sketchDesc: "Artistic restaurant with unique pink room and innovative French cuisine.",
        gagganDesc: "Progressive Indian cuisine with molecular gastronomy techniques.",
        jayFaiDesc: "Michelin-starred street food stall famous for crab omelets and drunken noodles.",
        piazzaDuomoDesc: "Three Michelin-starred restaurant showcasing modern Italian cuisine.",
        pizzaDaMicheleDesc: "Historic pizzeria serving authentic Neapolitan pizza since 1870.",
        minglesDesc: "Modern Korean cuisine with international influences and artistic presentation.",
        myeongdongKyojaDesc: "Famous for handmade noodles and dumplings, a Seoul institution since 1966.",
        pierreHermeDesc: "World-famous patisserie known for innovative macarons and exquisite pastries.",
        dominiqueAnselDesc: "Famous bakery that created the Cronut, offering innovative pastries and desserts.",
        deNieuweWinkelDesc: "Michelin-starred vegetarian restaurant focusing on local and seasonal ingredients.",
        dinTaiFungDesc: "World-renowned dumpling restaurant famous for xiaolongbao (soup dumplings).",
        centralDesc: "World's best restaurant showcasing Peru's biodiversity through innovative cuisine.",
        kneadDesc: "A popular bakery in Shanghai known for its healthy, vegetarian-friendly bakes and brunch.",
        kyotosChoiceDesc: "Authentic Japanese-style vegan sweets and tea house in the heart of Taipei.",
        piazzaDuomoAlbaDesc: "Three-Michelin-starred restaurant where chef Enrico Crippa creates art with vegetables from his own garden.",
        vrijmoedDesc: "Acclaimed for its deep understanding of vegetable flavors and innovative pairings.",
        elCellerDesc: "Though not exclusively vegetarian, its treatment of vegetables reaches world-class levels.",
        boragoDesc: "Offers a wild and creative vegetarian experience exploring Chile's endemic plants.",
        realeDesc: "Chef Niko Romito explores the deep flavors of vegetables with a minimalist approach.",
        kingsJoyDesc: "A three-Michelin-starred vegetarian restaurant combining imperial court cuisine with modern cooking.",
        ricardCamarenaDesc: "Draws inspiration from its own garden to create intensely flavorful dishes.",
        geraniumDesc: "A former world's best restaurant, its vegetarian menu shows unparalleled precision and creativity.",
        laDistillerieDesc: "Known for its sustainable philosophy and innovative zero-waste vegetarian cuisine.",
        cedricGroletDesc: "World-famous for his hyper-realistic 'sculpted fruit' pastries.",
        iginioMassariDesc: "The temple of Italian pastry by master Iginio Massari.",
        sadaharuAokiDesc: "Perfectly blends Japanese elements (matcha, yuzu) with French patisserie.",
        demelDesc: "A historic imperial bakery in Vienna, famous for Sachertorte.",
        nihonbashiNagatoDesc: "Specializes in wagashi, showcasing the ultimate craftsmanship of traditional Japanese sweets.",
        hofConditoreiDesc: "A representative of traditional German confectionery.",
        turrisDesc: "Though famous for its bread, its high-quality pastries and puff pastries are also highly acclaimed.",
        buboDesc: "Once awarded 'World's Best Chocolate Cake', its modern design and rich flavors make it a must-visit in Barcelona.",
        mandarinCakeShopDesc: "Offers exquisite French pastries and the classic 1963 Mandarin Cheesecake, representing Hong Kong's top-tier desserts.",
        kovaDesc: "Started a trend in London with its Japanese mille crêpes and matcha drinks, known for a fresh and delicate style."
    },
    zh: {
        title: "餐廳",
        Collection: "收藏",
        searchPlaceholder: "依名稱、城市、料理、價格",
        orderNow: "立即點餐",
        bookingInProgress: "訂位中...",
        tableBooked: "訂位成功！",
        orderConfirmed: "點餐確認！",
        continent: "大洲",
        city: "城市",
        type: "類型",
        priceRange: "價格範圍",
        allContinents: "所有大洲",
        allCities: "所有城市",
        allTypes: "所有類型",
        allPrices: "所有價格",
        fineDining: "高級餐廳",
        localCuisine: "在地料理",
        streetFood: "街頭小吃",
        familyRestaurant: "家庭餐廳",
        budget: "經濟實惠",
        midRange: "中等價位",
        upscale: "高檔消費",
        sortBy: "排序依據:",
        highestRating: "評分最高",
        priceLowHigh: "價格：低到高",
        priceHighLow: "價格：高到低",
        popularity: "人氣",
        nameAZ: "名稱 A-Z",
        showPerPage: "每頁顯示:",
        popularTags: "熱門標籤:",
        casual: "休閒",
        family: "家庭",
        vegetarian: "素食",
        dessert: "甜點",
        search: "搜尋",
        resetFilters: "重置所有篩選",
        loadMore: "載入更多",
        noRestaurants: "找不到餐廳",
        tryDifferent: "請嘗試不同的搜尋條件",
        resetSearch: "重置搜尋",
        description: "描述",
        facilities: "設施",
        signatureDish: "招牌菜",
        signatureDishes: "招牌料理",
        chefsSpecial: "主廚推薦",
        localMarketFavorites: "在地市場特色",
        addToFavorites: "加入收藏",
        removeFromFavorites: "移除收藏",
        viewMenu: "查看菜單",
        bookNow: "立即預訂",
        markVisited: "標記已造訪",
        removeVisited: "移除造訪",
        similarRestaurants: "類似餐廳",
        favorites: "收藏",
        visited: "已造訪",
        booked: "已預訂",
        totalRestaurants: "餐廳總數",
        totalCities: "城市數量",
        avgRating: "平均評分",
        avgPrice: "平均價格",
        restaurantsByContinent: "各大洲餐廳分布",
        restaurantsByType: "各類型餐廳分布",
        rating: "評分",
        price: "價格",
        cuisine: "料理",
        hours: "營業時間",
        phone: "電話",
        website: "網站",
        wifi: "WiFi",
        parking: "停車場",
        aircon: "冷氣",
        outdoor: "戶外座位",
        kidsFriendly: "親子友善",
        delivery: "外送",
        takeaway: "外帶",
        reservations: "訂位",
        liveMusic: "現場音樂",
        petFriendly: "寵物友善",
        addedToFavorites: "已加入收藏！",
        removedFromFavorites: "已移除收藏！",
        bookingConfirmed: "預訂確認！",
        markedAsVisited: "已標記為造訪！",
        removedFromVisited: "已移除造訪記錄！",
        business: "商用",
        luxury: "豪華",
        romantic: "浪漫",
        secretSpot: "隱藏美食",
        localFood: "當地美食",
        priceComparison: "價格比較",
        current: "目前選擇",
        averagePrice: "平均價格",
        pricePosition: "價格定位",
        aboveAverage: "高於平均",
        belowAverage: "低於平均",
        restaurantDetails: "餐廳詳情",
        visitStatus: "造訪狀態",
        iHaveBeenHere: "我去過這裡！",
        share: "分享",
        shareRestaurant: "分享餐廳",
        copyLink: "複製連結",
        footerDescription: "探索世界各地的精彩餐廳。從高級餐廳到街頭小吃，體驗橫跨6大洲200多個城市的美食之旅。",
        popularCities: "熱門城市",
        quickLinks: "快速連結",
        foodGuide: "美食指南",
        faq: "常見問題",
        contactUs: "聯絡我們",
        privacyPolicy: "隱私政策",
        termsOfService: "服務條款",
        support: "客戶支援",
        copyright: "© 2024 全球餐廳搜尋器。版權所有。",
        madeWith: "用",
        forFoodLovers: "為全世界的美食愛好者製作",
        tokyo: "東京",
        paris: "巴黎",
        newyork: "紐約",
        london: "倫敦",
        bangkok: "曼谷",
        sydney: "雪梨",
        rome: "羅馬",
        seoul: "首爾",
        mumbai: "孟買",
        beijing: "北京",
        barcelona: "巴塞隆納",
        singapore: "新加坡",
        hongkong: "香港",
        taipei: "台北",
        lima: "利馬",
        copenhagen: "哥本哈根",
        stockholm: "斯德哥爾摩",
        mexicocity: "墨西哥城",
        saopaulo: "聖保羅",
        capetown: "開普敦",
        nijmegen: "奈梅亨",
        shanghai: "上海",
        japaneseDessert: "日式甜點",
        removeFromCollection: "從收藏中移除",
        viewDetails: "查看詳情",
        markAsVisit: "標記造訪",
        booked_status: "已預訂",
        visited_status: "已造訪",
        bookingCancelled: "預定已取消！",
        // 餐廳描述
        sukiyabashiJiroDesc: "由小野二郎經營的世界知名壽司餐廳，提供最頂級的廚師發辦體驗。",
        narisawaDesc: "慶祝自然與永續性的創新日本料理。",
        ippudoRamenDesc: "以其濃郁的豚骨湯頭和完美烹煮的麵條而聞名的拉麵連鎖店。",
        lambroisieDesc: "米其林三星餐廳，在優雅的環境中提供經典的法式高級料理。",
        larpegeDesc: "由Alain Passard主理，以蔬菜為主題的米其林三星餐廳。",
        lasDuFallafelDesc: "位於瑪萊區的著名沙拉三明治店，深受當地人和遊客的喜愛。",
        elevenMadisonParkDesc: "提供創新 tasting menu 的植物性高級餐廳。",
        katzsDelicatessenDesc: "自1888年以來以其煙燻牛肉三明治而聞名的歷史悠久的猶太熟食店。",
        sketchDesc: "具有獨特粉紅色房間和創新法式料理的藝術餐廳。",
        gagganDesc: "採用分子料理技術的先進印度料理。",
        jayFaiDesc: "米其林星級街頭小吃攤，以蟹肉煎蛋和醉貓麵聞名。",
        piazzaDuomoDesc: "展示現代義大利料理的米其林三星餐廳。",
        pizzaDaMicheleDesc: "自1870年以來供應正宗那不勒斯披薩的歷史悠久的披薩店。",
        minglesDesc: "融合國際影響和藝術呈現的現代韓國料理。",
        myeongdongKyojaDesc: "以手工麵條和餃子聞名，自1966年以來一直是首爾的代表性店家。",
        pierreHermeDesc: "世界著名的法式糕點店，以創新的馬卡龍和精緻的糕點聞名。",
        dominiqueAnselDesc: "創造了可頌甜甜圈的著名麵包店，提供創新的糕點和甜點。",
        deNieuweWinkelDesc: "專注於當地和時令食材的米其林星級素食餐廳。",
        dinTaiFungDesc: "以小籠包聞名於世的全球知名餃子餐廳。",
        centralDesc: "透過創新料理展現秘魯生物多樣性的世界頂級餐廳。",
        kneadDesc: "上海一家受歡迎的麵包店，以其健康、素食友好的烘焙食品和早午餐而聞名。",
        kyotosChoiceDesc: "位於台北市中心的正宗日式純素甜點和茶館。",
        piazzaDuomoAlbaDesc: "米其林三星餐廳，主廚 Enrico Crippa 以其精緻的菜園和充滿藝術感的蔬食料理著稱。",
        vrijmoedDesc: "以其對蔬菜風味的深刻理解和創新搭配而備受讚譽。",
        elCellerDesc: "雖然不是純素食餐廳，但其對蔬菜的處理和獨立蔬食菜單達到了世界頂尖水準。",
        boragoDesc: "以探索智利本土的獨特植物和食材聞名，提供充滿野性與創意的蔬食體驗。",
        realeDesc: "米其林三星，主廚 Niko Romito 以極簡主義手法探索蔬菜的深層風味。",
        kingsJoyDesc: "結合宮廷素齋與現代烹飪的米其林三星素食餐廳，環境與菜色皆充滿禪意。",
        ricardCamarenaDesc: "以其自家菜園的時令蔬菜為靈感，創造出風味強烈且充滿驚喜的料理。",
        geraniumDesc: "曾獲選世界第一餐廳，其蔬食菜單同樣展現了無與倫比的精準與創意。",
        laDistillerieDesc: "以其可持續理念和創新的無浪費蔬食料理聞名。",
        cedricGroletDesc: "以其驚為天人的「水果雕塑」甜點聞名世界，將甜點外觀與風味的模擬提升到藝術層次。",
        iginioMassariDesc: "義大利甜點教父 Iginio Massari 的店，是體驗頂級義大利傳統與現代甜點的殿堂。",
        sadaharuAokiDesc: "青木定治將日式元素（如抹茶、柚子）與法式甜點完美結合，風格清新獨特。",
        demelDesc: "擁有數百年歷史的皇家御用甜點店，沙河蛋糕 (Sachertorte) 和皇帝鬆餅是必嚐的經典。",
        nihonbashiNagatoDesc: "專精於和菓子，展現了日本傳統甜點的極致工藝與季節之美。",
        hofConditoreiDesc: "德國傳統糕點的代表。",
        turrisDesc: "雖然以麵包聞名，但其高品質的糕點和酥皮點心也備受推崇。",
        buboDesc: "曾獲「世界最佳巧克力蛋糕」獎，其現代風格的設計和濃郁風味是巴塞隆納的必訪之地。",
        mandarinCakeShopDesc: "提供精緻的法式糕點和經典的 1963 文華起司蛋糕，是香港頂級甜點的代表。",
        kovaDesc: "以日式千層蛋糕和抹茶飲品在倫敦掀起風潮，風格清新細膩。"
    },
    ja: {
        title: "世界レストラン",
        Collection: "マイコレクション",
        searchPlaceholder: "名前、都市、料理、価格",
        continent: "大陸",
        city: "都市",
        type: "タイプ",
        priceRange: "価格帯",
        allContinents: "すべての大陸",
        allCities: "すべての都市",
        allTypes: "すべてのタイプ",
        allPrices: "すべての価格",
        fineDining: "高級レストラン",
        localCuisine: "郷土料理",
        streetFood: "ストリートフード",
        familyRestaurant: "ファミリーレストラン",
        budget: "リーズナブル",
        midRange: "中価格帯",
        upscale: "高級",
        sortBy: "並び順:",
        highestRating: "評価の高い順",
        priceLowHigh: "価格：安い順",
        priceHighLow: "価格：高い順",
        popularity: "人気順",
        nameAZ: "名前順",
        showPerPage: "表示件数:",
        popularTags: "人気タグ:",
        casual: "カジュアル",
        family: "ファミリー",
        vegetarian: "ベジタリアン",
        dessert: "デザート",
        search: "検索",
        resetFilters: "フィルターをリセット",
        loadMore: "もっと見る",
        noRestaurants: "レストランが見つかりません",
        tryDifferent: "別の検索条件をお試しください",
        resetSearch: "検索をリセット",
        description: "説明",
        facilities: "設備",
        signatureDish: "看板料理",
        signatureDishes: "看板料理",
        addToFavorites: "お気に入りに追加",
        removeFromFavorites: "お気に入りから削除",
        bookNow: "予約する",
        tableBooked: "予約完了！",
        markVisited: "訪問済みにする",
        removeVisited: "訪問済みを削除",
        similarRestaurants: "類似レストラン",
        favorites: "お気に入り",
        visited: "訪問済み",
        booked: "予約済み",
        rating: "評価",
        price: "価格",
        cuisine: "料理",
        hours: "営業時間",
        phone: "電話",
        website: "ウェブサイト",
        wifi: "WiFi",
        parking: "駐車場",
        aircon: "エアコン",
        outdoor: "屋外席",
        kidsFriendly: "子供向け",
        delivery: "配達",
        takeaway: "テイクアウト",
        reservations: "予約",
        liveMusic: "ライブ音楽",
        petFriendly: "ペット可",
        addedToFavorites: "お気に入りに追加しました！",
        removedFromFavorites: "お気に入りから削除しました！",
        bookingConfirmed: "予約が確定しました！",
        markedAsVisited: "訪問済みにしました！",
        removedFromVisited: "訪問済みを削除しました！",
        share: "シェア",
        shareRestaurant: "レストランをシェア",
        copyLink: "リンクをコピー",
        tokyo: "東京",
        paris: "パリ",
        newyork: "ニューヨーク",
        london: "ロンドン",
        bangkok: "バンコク",
        sydney: "シドニー",
        rome: "ローマ",
        seoul: "ソウル",
        mumbai: "ムンバイ",
        beijing: "北京",
        barcelona: "バルセロナ",
        singapore: "シンガポール",
        hongkong: "香港",
        taipei: "台北",
        lima: "リマ",
        copenhagen: "コペンハーゲン",
        stockholm: "ストックホルム",
        mexicocity: "メキシコシティ",
        saopaulo: "サンパウロ",
        capetown: "ケープタウン",
        nijmegen: "ナイメーヘン",
        shanghai: "上海",
        japaneseDessert: "和菓子",
        removeFromCollection: "コレクションから削除",
        viewDetails: "詳細を見る",
        markAsVisit: "訪問済みにする",
        booked_status: "予約済み",
        visited_status: "訪問済み",
        bookingCancelled: "予約がキャンセルされました！",
        // レストランの説明
        sukiyabashiJiroDesc: "小野二郎が経営する世界的に有名な寿司レストランで、最高のおまかせ体験ができます。",
        narisawaDesc: "自然と持続可能性を祝う革新的な日本料理。",
        ippudoRamenDesc: "濃厚なとんこつスープと完璧に調理された麺で知られる有名なラーメンチェーン。",
        lambroisieDesc: "エレガントな雰囲気の中でクラシックなフランスの高級料理を提供するミシュラン3つ星レストラン。",
        larpegeDesc: "アラン・パッサールによる野菜中心のミシュラン3つ星レストラン。",
        lasDuFallafelDesc: "マレ地区にある有名なファラフェル店で、地元の人々や観光客に愛されています。",
        elevenMadisonParkDesc: "革新的なテイスティングメニューを提供する植物ベースの高級レストラン。",
        katzsDelicatessenDesc: "1888年以来、パストラミサンドイッチで有名な歴史的なユダヤのデリカテッセン。",
        sketchDesc: "ユニークなピンクの部屋と革新的なフランス料理が特徴の芸術的なレストラン。",
        gagganDesc: "分子ガストロノミー技術を用いた先進的なインド料理。",
        jayFaiDesc: "カニのオムレツと酔っぱらい麺で有名なミシュラン星付きの屋台。",
        piazzaDuomoDesc: "現代的なイタリア料理を披露するミシュラン3つ星レストラン。",
        pizzaDaMicheleDesc: "1870年以来、本格的なナポリピッツァを提供している歴史的なピッツェリア。",
        minglesDesc: "国際的な影響と芸術的なプレゼンテーションを取り入れたモダンな韓国料理。",
        myeongdongKyojaDesc: "1966年以来ソウルの名物である手打ち麺と餃子で有名。",
        pierreHermeDesc: "革新的なマカロンと絶妙なペストリーで知られる世界的に有名なパティスリー。",
        dominiqueAnselDesc: "クロナッツを発明した有名なベーカリーで、革新的なペストリーとデザートを提供しています。",
        deNieuweWinkelDesc: "地元の旬の食材に焦点を当てたミシュラン星付きのベジタリアンレストラン。",
        dinTaiFungDesc: "小籠包で世界的に有名な餃子レストラン。",
        centralDesc: "革新的な料理を通じてペルーの生物多様性を紹介する世界最高のレストラン。",
        kneadDesc: "健康的ベジタリアン向けパンやブランチで知られる上海で人気のベーカリー。",
        kyotosChoiceDesc: "台北の中心部にある本格的な和風ビーガンスイーツと茶屋。",
        piazzaDuomoAlbaDesc: "シェフ、エンリコ・クリッパが自身の庭園の野菜で芸術を創造する三つ星レストラン。",
        vrijmoedDesc: "野菜の風味に対する深い理解と革新的な組み合わせで評価されています。",
        elCellerDesc: "ベジタリアン専門ではありませんが、その野菜の扱いは世界クラスのレベルに達しています。",
        boragoDesc: "チリ固有の植物を探求し、ワイルドで創造的なベジタリアン体験を提供します。",
        realeDesc: "シェフのニコ・ロミートがミニマリストのアプローチで野菜の深い風味を探求します。",
        kingsJoyDesc: "宮廷料理と現代的な調理法を組み合わせた三つ星のベジタリアンレストラン。",
        ricardCamarenaDesc: "自身の庭園からインスピレーションを得て、強烈な風味の料理を生み出します。",
        geraniumDesc: "元世界最高のレストランで、そのベジタリアンメニューは比類のない精度と創造性を示しています。",
        laDistillerieDesc: "持続可能な哲学と革新的なゼロウェイストのベジタリアン料理で知られています。",
        cedricGroletDesc: "超リアルな「彫刻フルーツ」ペストリーで世界的に有名です。",
        iginioMassariDesc: "マスター、イジーニオ・マッサーリによるイタリア菓子の殿堂。",
        sadaharuAokiDesc: "日本の要素（抹茶、ゆず）とフランスのパティスリーを完璧に融合させています。",
        demelDesc: "ザッハトルテで有名なウィーンの歴史的な皇室御用達のベーカリー。",
        nihonbashiNagatoDesc: "和菓子を専門とし、伝統的な日本の菓子の究極の職人技を紹介しています。",
        hofConditoreiDesc: "伝統的なドイツ菓子の代表です。",
        turrisDesc: "パンで有名ですが、高品質のペストリーやパフペストリーも高く評価されています。",
        buboDesc: "かつて「世界最高のチョコレートケーキ」を受賞した、そのモダンなデザインと豊かな風味はバルセロナで必見です。",
        mandarinCakeShopDesc: "絶妙なフレンチペストリーとクラシックな1963年のマンダリンチーズケーキを提供し、香港のトップクラスのデザートを代表しています。",
        kovaDesc: "日本のミルクレープと抹茶ドリンクでロンドンでトレンドを巻き起こし、フレッシュで繊細なスタイルで知られています。"
    },
    fr: {
        title: "Restaurants Monde",
        Collection: "Ma Collection",
        searchPlaceholder: "Rechercher par nom, ville, cuisine, prix",
        continent: "Continent",
        city: "Ville",
        type: "Type",
        priceRange: "Gamme de Prix",
        allContinents: "Tous les Continents",
        allCities: "Toutes les Villes",
        allTypes: "Tous les Types",
        allPrices: "Tous les Prix",
        fineDining: "Haute Gastronomie",
        localCuisine: "Cuisine Locale",
        streetFood: "Cuisine de Rue",
        familyRestaurant: "Restaurant Familial",
        budget: "Économique",
        midRange: "Gamme Moyenne",
        upscale: "Haut de Gamme",
        sortBy: "Trier par:",
        highestRating: "Note la Plus Élevée",
        priceLowHigh: "Prix: Bas à Élevé",
        priceHighLow: "Prix: Élevé à Bas",
        popularity: "Popularité",
        nameAZ: "Nom A-Z",
        showPerPage: "Afficher par page:",
        popularTags: "Tags Populaires:",
        casual: "Décontracté",
        family: "Famille",
        vegetarian: "Végétarien",
        dessert: "Dessert",
        search: "Rechercher",
        resetFilters: "Réinitialiser les Filtres",
        loadMore: "Charger Plus",
        noRestaurants: "Aucun restaurant trouvé",
        tryDifferent: "Essayez différents critères de recherche",
        resetSearch: "Réinitialiser la Recherche",
        description: "Description",
        facilities: "Installations",
        signatureDish: "Plat Signature",
        signatureDishes: "Plats Signature",
        addToFavorites: "Ajouter aux Favoris",
        removeFromFavorites: "Retirer des Favoris",
        bookNow: "Réserver",
        tableBooked: "Table Réservée!",
        markVisited: "Marquer comme Visité",
        removeVisited: "Retirer Visité",
        similarRestaurants: "Restaurants Similaires",
        favorites: "Favoris",
        visited: "Visités",
        booked: "Réservés",
        rating: "Note",
        price: "Prix",
        cuisine: "Cuisine",
        hours: "Heures",
        phone: "Téléphone",
        website: "Site Web",
        wifi: "WiFi",
        parking: "Parking",
        aircon: "Climatisation",
        outdoor: "Terrasse",
        kidsFriendly: "Adapté aux Enfants",
        delivery: "Livraison",
        takeaway: "À Emporter",
        reservations: "Réservations",
        liveMusic: "Musique Live",
        petFriendly: "Animaux Acceptés",
        addedToFavorites: "Ajouté aux favoris!",
        removedFromFavorites: "Retiré des favoris!",
        bookingConfirmed: "Réservation confirmée!",
        markedAsVisited: "Marqué como visité!",
        removedFromVisited: "Retiré des visités!",
        share: "Partager",
        shareRestaurant: "Partager le Restaurant",
        copyLink: "Copier le Lien",
        tokyo: "Tokyo",
        paris: "Paris",
        newyork: "New York",
        london: "Londres",
        bangkok: "Bangkok",
        sydney: "Sydney",
        rome: "Rome",
        seoul: "Séoul",
        mumbai: "Mumbai",
        beijing: "Pékin",
        barcelona: "Barcelone",
        singapore: "Singapour",
        hongkong: "Hong Kong",
        taipei: "Taipei",
        lima: "Lima",
        copenhagen: "Copenhague",
        stockholm: "Stockholm",
        mexicocity: "Mexico",
        saopaulo: "São Paulo",
        capetown: "Le Cap",
        nijmegen: "Nimègue",
        shanghai: "Shanghai",
        japaneseDessert: "Dessert Japonais",
        removeFromCollection: "Retirer de la Collection",
        viewDetails: "Voir les Détails",
        markAsVisit: "Marquer comme Visité",
        booked_status: "Réservé",
        visited_status: "Visité",
        bookingCancelled: "Réservation annulée!",
        // Descriptions des restaurants
        sukiyabashiJiroDesc: "Restaurant de sushis de renommée mondiale dirigé par Jiro Ono, offrant la meilleure expérience omakase.",
        narisawaDesc: "Cuisine japonaise innovante qui célèbre la nature et la durabilité.",
        ippudoRamenDesc: "Célèbre chaîne de ramen connue pour son riche bouillon tonkotsu et ses nouilles parfaitement cuites.",
        lambroisieDesc: "Restaurant trois étoiles Michelin proposant une cuisine française classique dans un cadre élégant.",
        larpegeDesc: "Restaurant trois étoiles Michelin d'Alain Passard axé sur les légumes.",
        lasDuFallafelDesc: "Célèbre boutique de falafels dans le quartier du Marais, appréciée des habitants et des touristes.",
        elevenMadisonParkDesc: "Restaurant gastronomique à base de plantes proposant un menu de dégustation innovant.",
        katzsDelicatessenDesc: "Épicerie fine juive historique célèbre pour ses sandwichs au pastrami depuis 1888.",
        sketchDesc: "Restaurant artistique avec une salle rose unique et une cuisine française innovante.",
        gagganDesc: "Cuisine indienne progressive avec des techniques de gastronomie moléculaire.",
        jayFaiDesc: "Stand de street food étoilé Michelin célèbre pour ses omelettes au crabe et ses nouilles ivres.",
        piazzaDuomoDesc: "Restaurant trois étoiles Michelin présentant une cuisine italienne moderne.",
        pizzaDaMicheleDesc: "Pizzeria historique servant d'authentiques pizzas napolitaines depuis 1870.",
        minglesDesc: "Cuisine coréenne moderne avec des influences internationales et une présentation artistique.",
        myeongdongKyojaDesc: "Célèbre pour ses nouilles et ses raviolis faits à la main, une institution à Séoul depuis 1966.",
        pierreHermeDesc: "Pâtisserie de renommée mondiale connue pour ses macarons innovants et ses pâtisseries exquises.",
        dominiqueAnselDesc: "Célèbre boulangerie qui a créé le Cronut, proposant des pâtisseries et des desserts innovants.",
        deNieuweWinkelDesc: "Restaurant végétarien étoilé Michelin axé sur les ingrédients locaux et de saison.",
        dinTaiFungDesc: "Restaurant de raviolis de renommée mondiale célèbre pour ses xiaolongbao (raviolis à la soupe).",
        centralDesc: "Le meilleur restaurant du monde mettant en valeur la biodiversité du Pérou à travers une cuisine innovante.",
        kneadDesc: "Une boulangerie populaire à Shanghai connue pour ses pâtisseries saines et végétariennes et son brunch.",
        kyotosChoiceDesc: "Authentiques douceurs végétaliennes de style japonais et salon de thé au cœur de Taipei.",
        piazzaDuomoAlbaDesc: "Restaurant trois étoiles Michelin où le chef Enrico Crippa crée de l'art avec les légumes de son propre jardin.",
        vrijmoedDesc: "Reconnu pour sa profonde compréhension des saveurs des légumes et ses associations innovantes.",
        elCellerDesc: "Bien que non exclusivement végétarien, son traitement des légumes atteint des niveaux de classe mondiale.",
        boragoDesc: "Offre une expérience végétarienne sauvage et créative en explorant les plantes endémiques du Chili.",
        realeDesc: "Le chef Niko Romito explore les saveurs profondes des légumes avec une approche minimaliste.",
        kingsJoyDesc: "Un restaurant végétarien trois étoiles Michelin combinant la cuisine de la cour impériale avec la cuisine moderne.",
        ricardCamarenaDesc: "S'inspire de son propre jardin pour créer des plats aux saveurs intenses.",
        geraniumDesc: "Ancien meilleur restaurant du monde, son menu végétarien fait preuve d'une précision et d'une créativité inégalées.",
        laDistillerieDesc: "Connu pour sa philosophie durable et sa cuisine végétarienne innovante zéro déchet.",
        cedricGroletDesc: "Mondialement célèbre pour ses pâtisseries hyperréalistes en forme de fruits sculptés.",
        iginioMassariDesc: "Le temple de la pâtisserie italienne par le maître Iginio Massari.",
        sadaharuAokiDesc: "Mélange perfectly les éléments japonais (matcha, yuzu) avec la pâtisserie française.",
        demelDesc: "Une boulangerie impériale historique à Vienne, célèbre pour sa Sachertorte.",
        nihonbashiNagatoDesc: "Spécialisé dans les wagashi, mettant en valeur le savoir-faire ultime des douceurs traditionnelles japonaises.",
        hofConditoreiDesc: "Un représentant de la confiserie traditionnelle allemande.",
        turrisDesc: "Bien que célèbre pour son pain, ses pâtisseries de haute qualité et ses feuilletés sont également très appréciés.",
        buboDesc: "Une fois récompensé du 'Meilleur Gâteau au Chocolat du Monde', son design moderne et ses saveurs riches en font un incontournable à Barcelone.",
        mandarinCakeShopDesc: "Propose des pâtisseries françaises exquises et le classique cheesecake Mandarin de 1963, représentant les desserts haut de gamme de Hong Kong.",
        kovaDesc: "A lancé une tendance à Londres avec ses mille crêpes japonais et ses boissons au matcha, connu pour un style frais et délicat."
    },
    de: {
        title: "Restaurants Welt",
        Collection: "Meine Sammlung",
        searchPlaceholder: "Nach Name, Stadt, Küche, Preis",
        continent: "Kontinent",
        city: "Stadt",
        type: "Typ",
        priceRange: "Preisbereich",
        allContinents: "Alle Kontinente",
        allCities: "Alle Städte",
        allTypes: "Alle Typen",
        allPrices: "Alle Preise",
        fineDining: "Gehobene Küche",
        localCuisine: "Lokale Küche",
        streetFood: "Straßenessen",
        familyRestaurant: "Familienrestaurant",
        budget: "Günstig",
        midRange: "Mittlere Preisklasse",
        upscale: "Gehoben",
        sortBy: "Sortieren nach:",
        highestRating: "Höchste Bewertung",
        priceLowHigh: "Preis: Niedrig bis Hoch",
        priceHighLow: "Preis: Hoch bis Niedrig",
        popularity: "Beliebtheit",
        nameAZ: "Name A-Z",
        showPerPage: "Pro Seite anzeigen:",
        popularTags: "Beliebte Tags:",
        casual: "Zwanglos",
        family: "Familie",
        vegetarian: "Vegetarisch",
        dessert: "Dessert",
        search: "Suchen",
        resetFilters: "Filter Zurücksetzen",
        loadMore: "Mehr Laden",
        noRestaurants: "Keine Restaurants gefunden",
        tryDifferent: "Versuchen Sie andere Suchkriterien",
        resetSearch: "Suche Zurücksetzen",
        description: "Beschreibung",
        facilities: "Ausstattung",
        signatureDish: "Signature-Gericht",
        signatureDishes: "Signature-Gerichte",
        addToFavorites: "Zu Favoriten Hinzufügen",
        removeFromFavorites: "Aus Favoriten Entfernen",
        bookNow: "Buchen",
        tableBooked: "Tisch Gebucht!",
        markVisited: "Als Besucht Markieren",
        removeVisited: "Besucht Entfernen",
        similarRestaurants: "Ähnliche Restaurants",
        favorites: "Favoriten",
        visited: "Besucht",
        booked: "Gebucht",
        rating: "Bewertung",
        price: "Preis",
        cuisine: "Küche",
        hours: "Öffnungszeiten",
        phone: "Telefon",
        website: "Website",
        wifi: "WLAN",
        parking: "Parkplatz",
        aircon: "Klimaanlage",
        outdoor: "Außenbereich",
        kidsFriendly: "Kinderfreundlich",
        delivery: "Lieferung",
        takeaway: "Zum Mitnehmen",
        reservations: "Reservierungen",
        liveMusic: "Live-Musik",
        petFriendly: "Haustierfreundlich",
        addedToFavorites: "Zu Favoriten hinzugefügt!",
        removedFromFavorites: "Aus Favoriten entfernt!",
        bookingConfirmed: "Buchung bestätigt!",
        markedAsVisited: "Als besucht markiert!",
        removedFromVisited: "Aus Besucht entfernt!",
        share: "Teilen",
        shareRestaurant: "Restaurant Teilen",
        copyLink: "Link Kopieren",
        tokyo: "Tokio",
        paris: "Paris",
        newyork: "New York",
        london: "London",
        bangkok: "Bangkok",
        sydney: "Sydney",
        rome: "Rom",
        seoul: "Seoul",
        mumbai: "Mumbai",
        beijing: "Peking",
        barcelona: "Barcelona",
        singapore: "Singapur",
        hongkong: "Hongkong",
        taipei: "Taipeh",
        lima: "Lima",
        copenhagen: "Kopenhagen",
        stockholm: "Stockholm",
        mexicocity: "Mexiko-Stadt",
        saopaulo: "São Paulo",
        capetown: "Kapstadt",
        nijmegen: "Nijmegen",
        shanghai: "Shanghai",
        japaneseDessert: "Japanisches Dessert",
        removeFromCollection: "Aus Sammlung Entfernen",
        viewDetails: "Details Anzeigen",
        markAsVisit: "Als Besucht Markieren",
        booked_status: "Gebucht",
        visited_status: "Besucht",
        bookingCancelled: "Buchung storniert!",
        // Restaurantbeschreibungen
        sukiyabashiJiroDesc: "Weltberühmtes Sushi-Restaurant unter der Leitung von Jiro Ono, das das beste Omakase-Erlebnis bietet.",
        narisawaDesc: "Innovative japanische Küche, die Natur und Nachhaltigkeit feiert.",
        ippudoRamenDesc: "Berühmte Ramen-Kette, bekannt für ihre reichhaltige Tonkotsu-Brühe und perfekt gekochte Nudeln.",
        lambroisieDesc: "Drei-Sterne-Michelin-Restaurant, das klassische französische Haute Cuisine in einem eleganten Ambiente bietet.",
        larpegeDesc: "Alain Passards auf Gemüse ausgerichtetes Drei-Sterne-Michelin-Restaurant.",
        lasDuFallafelDesc: "Berühmter Falafel-Laden im Marais-Viertel, der bei Einheimischen und Touristen gleichermaßen beliebt ist.",
        elevenMadisonParkDesc: "Pflanzenbasiertes Fine-Dining-Restaurant, das ein innovatives Degustationsmenü anbietet.",
        katzsDelicatessenDesc: "Historisches jüdisches Delikatessengeschäft, berühmt für seine Pastrami-Sandwiches seit 1888.",
        sketchDesc: "Künstlerisches Restaurant mit einzigartigem rosa Raum und innovativer französischer Küche.",
        gagganDesc: "Progressive indische Küche mit molekulargastronomischen Techniken.",
        jayFaiDesc: "Mit einem Michelin-Stern ausgezeichneter Street-Food-Stand, berühmt für Krabbenomeletts und betrunkene Nudeln.",
        piazzaDuomoDesc: "Drei-Sterne-Michelin-Restaurant, das moderne italienische Küche präsentiert.",
        pizzaDaMicheleDesc: "Historische Pizzeria, die seit 1870 authentische neapolitanische Pizza serviert.",
        minglesDesc: "Moderne koreanische Küche mit internationalen Einflüssen und künstlerischer Präsentation.",
        myeongdongKyojaDesc: "Berühmt für handgemachte Nudeln und Teigtaschen, eine Institution in Seoul seit 1966.",
        pierreHermeDesc: "Weltberühmte Pâtisserie, bekannt für innovative Macarons und exquisites Gebäck.",
        dominiqueAnselDesc: "Berühmte Bäckerei, die den Cronut erfunden hat und innovative Backwaren und Desserts anbietet.",
        deNieuweWinkelDesc: "Mit einem Michelin-Stern ausgezeichnetes vegetarisches Restaurant, das sich auf lokale und saisonale Zutaten konzentriert.",
        dinTaiFungDesc: "Weltberühmtes Teigtaschenrestaurant, berühmt für Xiaolongbao (Suppenknödel).",
        centralDesc: "Das beste Restaurant der Welt, das die biologische Vielfalt Perus durch innovative Küche zur Geltung bringt.",
        kneadDesc: "Eine beliebte Bäckerei in Shanghai, die für ihre gesunden, vegetarischen Backwaren und Brunch bekannt ist.",
        kyotosChoiceDesc: "Authentische vegane Süßigkeiten im japanischen Stil und Teehaus im Herzen von Taipeh.",
        piazzaDuomoAlbaDesc: "Drei-Sterne-Michelin-Restaurant, in dem Küchenchef Enrico Crippa mit Gemüse aus seinem eigenen Garten Kunst kreiert.",
        vrijmoedDesc: "Gepriesen für sein tiefes Verständnis von Gemüsearomen und innovative Kombinationen.",
        elCellerDesc: "Obwohl nicht ausschließlich vegetarisch, erreicht die Behandlung von Gemüse Weltklasse-Niveau.",
        boragoDesc: "Bietet ein wildes und kreatives vegetarisches Erlebnis bei der Erkundung der endemischen Pflanzen Chiles.",
        realeDesc: "Küchenchef Niko Romito erforscht die tiefen Aromen von Gemüse mit einem minimalistischen Ansatz.",
        kingsJoyDesc: "Ein Drei-Sterne-Michelin-Vegetarierrestaurant, das kaiserliche Hofküche mit moderner Küche kombiniert.",
        ricardCamarenaDesc: "Lässt sich von seinem eigenen Garten inspirieren, um intensiv schmeckende Gerichte zu kreieren.",
        geraniumDesc: "Ein ehemaliges weltbestes Restaurant, dessen vegetarisches Menü beispiellose Präzision und Kreativität zeigt.",
        laDistillerieDesc: "Bekannt für seine nachhaltige Philosophie und innovative Zero-Waste-Vegetarierküche.",
        cedricGroletDesc: "Weltberühmt für seine hyperrealistischen 'geschnitzten Frucht'-Gebäcke.",
        iginioMassariDesc: "Der Tempel der italienischen Konditorei von Meister Iginio Massari.",
        sadaharuAokiDesc: "Vermengt perfekt japanische Elemente (Matcha, Yuzu) mit französischer Pâtisserie.",
        demelDesc: "Eine historische kaiserliche Bäckerei in Wien, berühmt für die Sachertorte.",
        nihonbashiNagatoDesc: "Spezialisiert auf Wagashi und zeigt die ultimative Handwerkskunst traditioneller japanischer Süßigkeiten.",
        hofConditoreiDesc: "Ein Vertreter der traditionellen deutschen Konditorei.",
        turrisDesc: "Obwohl für sein Brot berühmt, sind auch seine hochwertigen Backwaren und Blätterteiggebäcke sehr geschätzt.",
        buboDesc: "Einst als 'Weltbester Schokoladenkuchen' ausgezeichnet, machen sein modernes Design und seine reichen Aromen ihn zu einem Muss in Barcelona.",
        mandarinCakeShopDesc: "Bietet exquisite französische Backwaren und den klassischen Mandarin-Käsekuchen von 1963, der die Spitzen-Desserts Hongkongs repräsentiert.",
        kovaDesc: "Hat in London mit seinen japanischen Mille Crêpes und Matcha-Getränken einen Trend ausgelöst und ist für seinen frischen und delikaten Stil bekannt."
    },
    ko: {
        title: "세계 음식점",
        Collection: "내 컬렉션",
        searchPlaceholder: "이름, 도시, 요리, 가격",
        continent: "대륙",
        city: "도시",
        type: "유형",
        priceRange: "가격대",
        allContinents: "모든 대륙",
        allCities: "모든 도시",
        allTypes: "모든 유형",
        allPrices: "모든 가격대",
        fineDining: "고급 레스토랑",
        localCuisine: "현지 요리",
        streetFood: "스트리트 푸드",
        familyRestaurant: "가족 레스토랑",
        budget: "저예산",
        midRange: "중간 가격대",
        upscale: "고급",
        sortBy: "정렬 기준:",
        highestRating: "평점 높은 순",
        priceLowHigh: "가격: 낮은 순",
        priceHighLow: "가격: 높은 순",
        popularity: "인기 순",
        nameAZ: "이름 A-Z",
        showPerPage: "페이지당 표시:",
        popularTags: "인기 태그:",
        casual: "캐주얼",
        family: "가족",
        vegetarian: "채식",
        dessert: "디저트",
        search: "검색",
        resetFilters: "필터 초기화",
        loadMore: "더 보기",
        noRestaurants: "레스토랑을 찾을 수 없습니다",
        tryDifferent: "다른 검색 조건을 시도해보세요",
        resetSearch: "검색 초기화",
        description: "설명",
        facilities: "시설",
        signatureDish: "대표 요리",
        signatureDishes: "대표 요리들",
        chefsSpecial: "셰프 추천",
        localMarketFavorites: "현지 시장 인기 메뉴",
        addToFavorites: "즐겨찾기 추가",
        removeFromFavorites: "즐겨찾기 제거",
        viewMenu: "메뉴 보기",
        bookNow: "예약하기",
        orderNow: "주문하기",
        bookingInProgress: "예약 중...",
        tableBooked: "예약 완료!",
        orderConfirmed: "주문 확인!",
        markVisited: "방문 표시",
        removeVisited: "방문 표시 제거",
        similarRestaurants: "유사 레스토랑",
        favorites: "즐겨찾기",
        visited: "방문함",
        booked: "예약됨",
        totalRestaurants: "총 레스토랑 수",
        totalCities: "총 도시 수",
        avgRating: "평균 평점",
        avgPrice: "평균 가격",
        restaurantsByContinent: "대륙별 레스토랑",
        restaurantsByType: "유형별 레스토랑",
        rating: "평점",
        price: "가격",
        cuisine: "요리",
        hours: "영업시간",
        phone: "전화",
        website: "웹사이트",
        wifi: "와이파이",
        parking: "주차",
        aircon: "에어컨",
        outdoor: "야외 좌석",
        kidsFriendly: "어린이 친화",
        delivery: "배달",
        takeaway: "포장",
        reservations: "예약",
        liveMusic: "라이브 음악",
        petFriendly: "반려동물 출입 가능",
        addedToFavorites: "즐겨찾기에 추가되었습니다!",
        removedFromFavorites: "즐겨찾기에서 제거되었습니다!",
        bookingConfirmed: "예약이 확인되었습니다!",
        markedAsVisited: "방문 표시되었습니다!",
        removedFromVisited: "방문 표시가 제거되었습니다!",
        business: "비즈니스",
        luxury: "럭셔리",
        romantic: "로맨틱",
        secretSpot: "비밀 장소",
        localFood: "현지 음식",
        priceComparison: "가격 비교",
        current: "현재",
        averagePrice: "평균 가격",
        pricePosition: "가격 위치",
        aboveAverage: "평균 이상",
        belowAverage: "평균 이하",
        restaurantDetails: "레스토랑 정보",
        visitStatus: "방문 상태",
        iHaveBeenHere: "방문함!",
        share: "공유",
        shareRestaurant: "레스토랑 공유",
        copyLink: "링크 복사",
        footerDescription: "전 세계의 놀라운 레스토랑을 발견하세요. 고급 레스토랑부터 스트리트 푸드까지, 6개 대륙 200개 이상의 도시에서 다양한 미식 경험을 탐험할 수 있습니다.",
        popularCities: "인기 도시",
        quickLinks: "빠른 링크",
        foodGuide: "푸드 가이드",
        faq: "자주 묻는 질문",
        contactUs: "문의하기",
        privacyPolicy: "개인정보 보호정책",
        termsOfService: "서비스 약관",
        support: "지원",
        copyright: "© 2024 글로벌 레스토랑 찾기. 모든 권리 보유.",
        madeWith: "만든이",
        forFoodLovers: "전 세계 음식 애호가를 위해",
        tokyo: "도쿄",
        paris: "파리",
        newyork: "뉴욕",
        london: "런던",
        bangkok: "방콕",
        sydney: "시드니",
        rome: "로마",
        seoul: "서울",
        mumbai: "뭄바이",
        beijing: "베이징",
        barcelona: "바르셀로나",
        singapore: "싱가포르",
        hongkong: "홍콩",
        taipei: "타이베이",
        lima: "리마",
        copenhagen: "코펜하겐",
        stockholm: "스톡홀름",
        mexicocity: "멕시코시티",
        saopaulo: "상파울루",
        capetown: "케이프타운",
        nijmegen: "나이메헌",
        shanghai: "상하이",
        japaneseDessert: "일본 디저트",
        removeFromCollection: "컬렉션에서 제거",
        viewDetails: "세부 정보 보기",
        markAsVisit: "방문 표시",
        booked_status: "예약됨",
        visited_status: "방문함",
        bookingCancelled: "예약이 취소되었습니다!",
        // Restaurant Descriptions
        sukiyabashiJiroDesc: "세계적으로 유명한 스시 레스토랑으로, 오노 지로가 운영하며 최고의 오마카세 경험을 제공합니다.",
        narisawaDesc: "자연과 지속 가능성을 기념하는 혁신적인 일본 요리.",
        ippudoRamenDesc: "진한 돈코츠 육수와 완벽하게 조리된 면으로 유명한 라멘 체인.",
        lambroisieDesc: "고전 프랑스 고급 요리를 우아하게 제공하는 미쉐린 3스타 레스토랑.",
        larpegeDesc: "알랭 파사르의 채소 중심 미쉐린 3스타 레스토랑.",
        lasDuFallafelDesc: "마레 지구의 유명한 팔라펠 가게, 현지인과 관광객 모두에게 사랑받음.",
        elevenMadisonParkDesc: "혁신적인 테이스팅 메뉴를 제공하는 식물 기반 고급 레스토랑.",
        katzsDelicatessenDesc: "1888년부터 파스트라미 샌드위치로 유명한 역사적인 유대인 델리.",
        sketchDesc: "독특한 분홍색 방과 혁신적인 프랑스 요리를 제공하는 예술적인 레스토랑.",
        gagganDesc: "분자 요리 기술을 활용한 혁신적인 인도 요리.",
        jayFaiDesc: "게 오믈렛과 드렁큰 누들로 유명한 미쉐린 스타 스트리트 푸드.",
        piazzaDuomoDesc: "현대 이탈리아 요리를 선보이는 미쉐린 3스타 레스토랑.",
        pizzaDaMicheleDesc: "1870년부터 정통 나폴리 피자를 제공하는 역사적인 피자집.",
        minglesDesc: "국제적 영향을 받은 현대 한국 요리와 예술적 프레젠테이션.",
        myeongdongKyojaDesc: "1966년부터 수제 면과 만두로 유명한 서울 명동 교자.",
        pierreHermeDesc: "혁신적인 마카롱과 정교한 페이스트리로 세계적으로 유명한 제과점.",
        dominiqueAnselDesc: "크로넛을 창조한 유명 베이커리, 혁신적인 페이스트리 제공.",
        deNieuweWinkelDesc: "현지 제철 재료 중심의 미쉐린 스타 채식 레스토랑.",
        dinTaiFungDesc: "샤오롱바오로 유명한 세계적인 만두 레스토랑.",
        centralDesc: "페루의 생물다양성을 혁신적인 요리로 보여주는 세계 최고의 레스토랑.",
        kneadDesc: "상하이에서 건강하고 채식 친화적인 빵과 브런치로 인기 있는 베이커리.",
        kyotosChoiceDesc: "타이베이 중심부에서 일본식 비건 디저트와 찻집 제공.",
        piazzaDuomoAlbaDesc: "셰프 엔리코 크리파가 자신의 정원 채소로 요리 예술을 선보이는 미쉐린 3스타 레스토랑.",
        vrijmoedDesc: "채소 풍미와 혁신적인 페어링으로 유명.",
        elCellerDesc: "채식 전문은 아니지만, 채소 요리 수준이 세계적 수준.",
        boragoDesc: "칠레 토종 식물을 탐험하는 창의적 채식 경험 제공.",
        realeDesc: "셰프 니코 로미토가 채소의 깊은 맛을 미니멀리즘으로 탐구.",
        kingsJoyDesc: "황실 요리와 현대 요리를 결합한 미쉐린 3스타 채식 레스토랑.",
        ricardCamarenaDesc: "자신의 정원에서 영감을 받아 풍미 가득한 요리를 창조.",
        geraniumDesc: "세계 최고의 레스토랑 출신, 채식 메뉴의 정밀함과 창의성 뛰어남.",
        laDistillerieDesc: "지속 가능성과 혁신적인 제로웨이스트 채식 요리로 유명.",
        cedricGroletDesc: "정교한 '조각 과일' 페이스트리로 세계적으로 유명.",
        iginioMassariDesc: "마스터 이지노 마사리가 만든 이탈리아 제과의 성지.",
        sadaharuAokiDesc: "일본 요소(말차, 유자)를 프랑스 제과와 완벽하게 결합.",
        demelDesc: "비엔나의 역사적인 황실 제과점, 사허토르테로 유명.",
        nihonbashiNagatoDesc: "일본 전통 과자의 궁극적 장인정신을 보여주는 와가시 전문점.",
        hofConditoreiDesc: "전통 독일 과자를 대표하는 곳.",
        turrisDesc: "빵으로 유명하지만 고급 페이스트리와 퍼프 페이스트리도 호평.",
        buboDesc: "한때 '세계 최고의 초콜릿 케이크' 수상, 현대적 디자인과 풍부한 맛의 바르셀로나 필수 방문지.",
        mandarinCakeShopDesc: "프랑스 페이스트리와 1963년 클래식 만다린 치즈케이크 제공, 홍콩 최고 디저트.",
        kovaDesc: "런던에서 일본식 밀크레프와 말차 음료로 트렌드 시작, 신선하고 섬세한 스타일로 유명."
    }

};
// Restaurant image mapping with real restaurant photos
const restaurantImages = {
    // Tokyo Japanese Restaurants
    "Sukiyabashi Jiro": "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop&q=80",
    "Narisawa": "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop&q=80",
    "Ippudo Ramen": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop&q=80",

    // Paris French Restaurants
    "L'Ambroisie": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&q=80",
    "L'Arpège": "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop&q=80",
    "L'As du Fallafel": "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&q=80",

    // New York American Restaurants
    "Eleven Madison Park": "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop&q=80",
    "Katz's Delicatessen": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&q=80",

    // London Restaurants
    "Sketch": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&q=80",
    "KOVA Patisserie": "https://images.unsplash.com/photo-1563805042-76648ac89e17?w=400&h=300&fit=crop&q=80",

    // Bangkok Thai Restaurants
    "Gaggan": "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop&q=80",
    "Jay Fai": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop&q=80",

    // Rome Italian Restaurants
    "Piazza Duomo": "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&q=80",
    "L'Antica Pizzeria da Michele": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop&q=80",

    // Seoul Korean Restaurants
    "Mingles": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop&q=80",
    "Myeongdong Kyoja": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop&q=80",

    // Dessert Places
    "Pierre Hermé": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&q=80",
    "Dominique Ansel Bakery": "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop&q=80",
    "Turris": "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=400&h=300&fit=crop&q=80",
    "Bubo Barcelona": "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop&q=80",
    "The Mandarin Cake Shop": "https://images.unsplash.com/photo-1562440102-37424bae392a?w=400&h=300&fit=crop&q=80",

    // Vegetarian Restaurants
    "De Nieuwe Winkel": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&q=80",

    // Chinese Restaurants
    "Din Tai Fung": "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=400&h=300&fit=crop&q=80",

    // Peruvian Restaurants
    "Central": "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop&q=80",
    "Knead": "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=400&h=300&fit=crop&q=80",
    "Kyoto's Choice": "https://images.unsplash.com/photo-1548883346-d8c341142cce?w=400&h=300&fit=crop&q=80",
    "Piazza Duomo": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&q=80",
    "Vrijmoed": "https://images.unsplash.com/photo-1505253716362-afb542c93026?w=400&h=300&fit=crop&q=80",
    "El Celler de Can Roca": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&q=80",
    "Boragó": "https://images.unsplash.com/photo-1484723050474-70db248a33aa?w=400&h=300&fit=crop&q=80",
    "Reale": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop&q=80",
    "King's Joy": "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=300&fit=crop&q=80",
    "Ricard Camarena Restaurant": "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=300&fit=crop&q=80",
    "Geranium": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop&q=80",
    "La Distillerie": "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=400&h=300&fit=crop&q=80",
    "Cédric Grolet": "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop&q=80",
    "Iginio Massari Alta Pasticceria": "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&h=300&fit=crop&q=80",
    "Sadaharu AOKI": "https://images.unsplash.com/photo-1582790374128-87a34651d654?w=400&h=300&fit=crop&q=80",
    "Demel": "https://images.unsplash.com/photo-1571114436979-d115dc5f2125?w=400&h=300&fit=crop&q=80",
    "Nihonbashi Nagato": "https://images.unsplash.com/photo-1534182410098-13d489b437dc?w=400&h=300&fit=crop&q=80",
    "Hof Conditorei Benno Sajbel": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b18?w=400&h=300&fit=crop&q=80",

    // Default fallback images by cuisine type
    "japanese": "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop&q=80",
    "french": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&q=80",
    "italian": "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&q=80",
    "thai": "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop&q=80",
    "chinese": "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=400&h=300&fit=crop&q=80",
    "korean": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop&q=80",
    "american": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&q=80",
    "middle eastern": "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&q=80",
    "peruvian": "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop&q=80",
    "vegetarian": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&q=80",
    "dessert": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&q=80",
    "japanese dessert": "https://images.unsplash.com/photo-1548883346-d8c341142cce?w=400&h=300&fit=crop&q=80",
    "default": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&q=80"
};
// Function to get restaurant image
function getRestaurantImage(restaurant) {
    // First try exact name match
    if (restaurantImages[restaurant.name]) {
        return restaurantImages[restaurant.name];
    }

    // Then try cuisine type
    const cuisineType = restaurant.cuisine.toLowerCase();
    if (restaurantImages[cuisineType]) {
        return restaurantImages[cuisineType];
    }

    // Finally use default
    return restaurantImages.default;
}
// Global data with comprehensive world cities
const globalData = {
    cities: {
        // Major cities with restaurant data
        tokyo: { continent: 'asia', country: 'Japan', currency: 'JPY' },
        paris: { continent: 'europe', country: 'France', currency: 'EUR' },
        newyork: { continent: 'north-america', country: 'USA', currency: 'USD' },
        london: { continent: 'europe', country: 'UK', currency: 'GBP' },
        bangkok: { continent: 'asia', country: 'Thailand', currency: 'THB' },
        sydney: { continent: 'oceania', country: 'Australia', currency: 'AUD' },
        rome: { continent: 'europe', country: 'Italy', currency: 'EUR' },
        seoul: { continent: 'asia', country: 'South Korea', currency: 'KRW' },
        mumbai: { continent: 'asia', country: 'India', currency: 'INR' },
        beijing: { continent: 'asia', country: 'China', currency: 'CNY' },
        barcelona: { continent: 'europe', country: 'Spain', currency: 'EUR' },
        singapore: { continent: 'asia', country: 'Singapore', currency: 'SGD' },
        hongkong: { continent: 'asia', country: 'Hong Kong', currency: 'HKD' },
        taipei: { continent: 'asia', country: 'Taiwan', currency: 'TWD' },
        lima: { continent: 'south-america', country: 'Peru', currency: 'PEN' },
        copenhagen: { continent: 'europe', country: 'Denmark', currency: 'DKK' },
        stockholm: { continent: 'europe', country: 'Sweden', currency: 'SEK' },
        mexicocity: { continent: 'north-america', country: 'Mexico', currency: 'MXN' },
        saopaulo: { continent: 'south-america', country: 'Brazil', currency: 'BRL' },
        capetown: { continent: 'africa', country: 'South Africa', currency: 'ZAR' },
        nijmegen: { continent: 'europe', country: 'Netherlands', currency: 'EUR' },
        shanghai: { continent: 'asia', country: 'China', currency: 'CNY' },
        alba: { continent: 'europe', country: 'Italy', currency: 'EUR' },
        ghent: { continent: 'europe', country: 'Belgium', currency: 'EUR' },
        girona: { continent: 'europe', country: 'Spain', currency: 'EUR' },
        santiago: { continent: 'south-america', country: 'Chile', currency: 'CLP' },
        casteldisangro: { continent: 'europe', country: 'Italy', currency: 'EUR' },
        valencia: { continent: 'europe', country: 'Spain', currency: 'EUR' },
        bourglinster: { continent: 'europe', country: 'Luxembourg', currency: 'EUR' },
        brescia: { continent: 'europe', country: 'Italy', currency: 'EUR' },
        vienna: { continent: 'europe', country: 'Austria', currency: 'EUR' },
        munich: { continent: 'europe', country: 'Germany', currency: 'EUR' }
    }
};
// Sample restaurant data with real images
const sampleRestaurants = [
    // Tokyo Restaurants
    {
        id: 1,
        name: "Sukiyabashi Jiro",
        city: "tokyo",
        cuisine: "Japanese",
        type: "fine-dining",
        tags: ["fine-dining"],
        priceRange: "upscale",
        rating: 4.9,
        price: 300,
        emoji: "   🍣   ",
        description_key: "sukiyabashiJiroDesc",
        facilities: ["reservations", "aircon"],
        signatureDishes: ["Omakase Sushi Course", "Tuna Sashimi", "Sea Urchin"],
        hours: "11:30 AM - 2:00 PM",
        phone: "+81-3-3535-3600",
        website: "sukiyabashijiro.com"
    },
    {
        id: 2,
        name: "Narisawa",
        city: "tokyo",
        cuisine: "Japanese",
        type: "fine-dining",
        tags: ["fine-dining"],
        priceRange: "upscale",
        rating: 4.8,
        price: 280,
        emoji: "   🌿   ",
        description_key: "narisawaDesc",
        facilities: ["reservations", "aircon", "wifi"],
        signatureDishes: ["Satoyama Scenery", "Bread of the Forest", "Soil Soup"],
        hours: "6:00 PM - 10:00 PM",
        phone: "+81-3-5785-0799",
        website: "narisawa-yoshihiro.com"
    },
    {
        id: 3,
        name: "Ippudo Ramen",
        city: "tokyo",
        cuisine: "Japanese",
        type: "casual",
        tags: ["casual"],
        priceRange: "budget",
        rating: 4.5,
        price: 15,
        emoji: "   🍜   ",
        description_key: "ippudoRamenDesc",
        facilities: ["takeaway", "wifi"],
        signatureDishes: ["Shiromaru Moto-aji", "Akamaru Shinaji", "Karaka-men"],
        hours: "11:00 AM - 11:00 PM",
        phone: "+81-3-5766-0634",
        website: "ippudo.com"
    },
    // Paris Restaurants
    {
        id: 4,
        name: "L'Ambroisie",
        city: "paris",
        cuisine: "French",
        type: "fine-dining",
        tags: ["fine-dining"],
        priceRange: "upscale",
        rating: 4.9,
        price: 350,
        emoji: "   🍷   ",
        description_key: "lambroisieDesc",
        facilities: ["reservations", "aircon", "wifi"],
        signatureDishes: ["Escalope de John Dory", "Fricassée de Homard", "Tarte Fine Sablée"],
        hours: "12:00 PM - 1:30 PM, 8:00 PM - 9:30 PM",
        phone: "+33-1-42-78-51-45",
        website: "ambroisie-placevosges.com"
    },
    {
        id: 5,
        name: "L'Arpège",
        city: "paris",
        cuisine: "French",
        type: "fine-dining",
        tags: ["fine-dining", "vegetarian"],
        priceRange: "upscale",
        rating: 4.8,
        price: 320,
        emoji: "   🥕   ",
        description_key: "larpegeDesc",
        facilities: ["reservations", "aircon", "wifi", "vegetarian"],
        signatureDishes: ["Hot-Cold Egg", "Vegetable Tart", "Beetroot Macarons"],
        hours: "12:00 PM - 2:00 PM, 8:00 PM - 10:00 PM",
        phone: "+33-1-47-05-09-06",
        website: "alain-passard.com"
    },
    {
        id: 6,
        name: "L'As du Fallafel",
        city: "paris",
        cuisine: "Middle Eastern",
        type: "street",
        tags: ["street", "vegetarian"],
        priceRange: "budget",
        rating: 4.3,
        price: 8,
        emoji: "   🥙   ",
        description_key: "lasDuFallafelDesc",
        facilities: ["takeaway"],
        signatureDishes: ["Falafel Sandwich", "Hummus Plate", "Shawarma"],
        hours: "12:00 PM - 12:00 AM",
        phone: "+33-1-48-87-63-60",
        website: "lasdufallafel.fr"
    },
    // New York Restaurants
    {
        id: 7,
        name: "Eleven Madison Park",
        city: "newyork",
        cuisine: "American",
        type: "fine-dining",
        tags: ["fine-dining", "vegetarian"],
        priceRange: "upscale",
        rating: 4.7,
        price: 295,
        emoji: "   🌱   ",
        description_key: "elevenMadisonParkDesc",
        facilities: ["reservations", "aircon", "wifi", "vegetarian"],
        signatureDishes: ["Beet Wellington", "Carrot Tartare", "Chocolate Soil"],
        hours: "5:30 PM - 9:30 PM",
        phone: "+1-212-889-0905",
        website: "elevenmadisonpark.com"
    },
    {
        id: 8,
        name: "Katz's Delicatessen",
        city: "newyork",
        cuisine: "American",
        type: "casual",
        tags: ["casual", "family"],
        priceRange: "mid-range",
        rating: 4.4,
        price: 25,
        emoji: "   🥪   ",
        description_key: "katzsDelicatessenDesc",
        facilities: ["takeaway", "delivery"],
        signatureDishes: ["Pastrami on Rye", "Corned Beef Sandwich", "Matzo Ball Soup"],
        hours: "8:00 AM - 10:45 PM",
        phone: "+1-212-254-2246",
        website: "katzsdelicatessen.com"
    },
    // London Restaurants
    {
        id: 9,
        name: "Sketch",
        city: "london",
        cuisine: "French",
        type: "fine-dining",
        tags: ["fine-dining"],
        priceRange: "upscale",
        rating: 4.6,
        price: 180,
        emoji: "   🎨   ",
        description_key: "sketchDesc",
        facilities: ["reservations", "aircon", "wifi"],
        signatureDishes: ["Langoustine", "Pigeon", "Chocolate Soufflé"],
        hours: "12:00 PM - 2:00 PM, 6:30 PM - 9:30 PM",
        phone: "+44-20-7659-4500",
        website: "sketch.london"
    },
    // Bangkok Restaurants
    {
        id: 10,
        name: "Gaggan",
        city: "bangkok",
        cuisine: "Thai",
        type: "fine-dining",
        tags: ["fine-dining"],
        priceRange: "upscale",
        rating: 4.8,
        price: 200,
        emoji: "   🌶️   ",
        description_key: "gagganDesc",
        facilities: ["reservations", "aircon", "wifi"],
        signatureDishes: ["Yogurt Explosion", "Charcoal", "Lick It Up"],
        hours: "6:00 PM - 12:00 AM",
        phone: "+66-2-652-1700",
        website: "gaggananand.com"
    },
    {
        id: 11,
        name: "Jay Fai",
        city: "bangkok",
        cuisine: "Thai",
        type: "street",
        tags: ["street"],
        priceRange: "budget",
        rating: 4.5,
        price: 12,
        emoji: "   🔥   ",
        description_key: "jayFaiDesc",
        facilities: ["takeaway"],
        signatureDishes: ["Crab Omelet", "Drunken Noodles", "Tom Yum Soup"],
        hours: "2:00 PM - 2:00 AM",
        phone: "+66-2-223-9384",
        website: "jayfai.com"
    },
    // Rome Restaurants
    {
        id: 12,
        name: "Piazza Duomo",
        city: "rome",
        cuisine: "Italian",
        type: "fine-dining",
        tags: ["fine-dining"],
        priceRange: "upscale",
        rating: 4.9,
        price: 250,
        emoji: "   🍝   ",
        description_key: "piazzaDuomoDesc",
        facilities: ["reservations", "aircon", "wifi"],
        signatureDishes: ["Agnolotti del Plin", "Vitello Tonnato", "Hazelnut Soufflé"],
        hours: "7:30 PM - 10:00 PM",
        phone: "+39-0172-366167",
        website: "piazzaduomo.it"
    },
    {
        id: 13,
        name: "L'Antica Pizzeria da Michele",
        city: "rome",
        cuisine: "Italian",
        type: "casual",
        tags: ["casual", "family"],
        priceRange: "budget",
        rating: 4.3,
        price: 12,
        emoji: "   🍕   ",
        description_key: "pizzaDaMicheleDesc",
        facilities: ["takeaway"],
        signatureDishes: ["Margherita Pizza", "Marinara Pizza", "Calzone"],
        hours: "11:00 AM - 12:00 AM",
        phone: "+39-081-553-9204",
        website: "damichele.net"
    },
    // Seoul Restaurants
    {
        id: 14,
        name: "Mingles",
        city: "seoul",
        cuisine: "Korean",
        type: "fine-dining",
        tags: ["fine-dining"],
        priceRange: "upscale",
        rating: 4.7,
        price: 150,
        emoji: "   🥢   ",
        description_key: "minglesDesc",
        facilities: ["reservations", "aircon", "wifi"],
        signatureDishes: ["Jang Trio", "Korean Beef", "Makgeolli Panna Cotta"],
        hours: "6:00 PM - 10:00 PM",
        phone: "+82-2-515-7306",
        website: "restaurant-mingles.com"
    },
    {
        id: 15,
        name: "Myeongdong Kyoja",
        city: "seoul",
        cuisine: "Korean",
        type: "casual",
        tags: ["casual", "family"],
        priceRange: "budget",
        rating: 4.4,
        price: 8,
        emoji: "   🍲   ",
        description_key: "myeongdongKyojaDesc",
        facilities: ["takeaway"],
        signatureDishes: ["Kalguksu", "Mandu", "Bibim Naengmyeon"],
        hours: "10:30 AM - 9:30 PM",
        phone: "+82-2-776-5348",
        website: "mdkj.co.kr"
    },
    // Dessert Places
    {
        id: 16,
        name: "Pierre Hermé",
        city: "paris",
        cuisine: "French",
        type: "dessert",
        tags: ["dessert"],
        priceRange: "mid-range",
        rating: 4.8,
        price: 25,
        emoji: "   🧁   ",
        description_key: "pierreHermeDesc",
        facilities: ["takeaway", "wifi"],
        signatureDishes: ["Ispahan Macaron", "Croissant Ispahan", "Tarte au Citron"],
        hours: "10:00 AM - 7:00 PM",
        phone: "+33-1-43-54-47-77",
        website: "pierreherme.com"
    },
    {
        id: 17,
        name: "Dominique Ansel Bakery",
        city: "newyork",
        cuisine: "French",
        type: "dessert",
        tags: ["dessert"],
        priceRange: "mid-range",
        rating: 4.6,
        price: 15,
        emoji: "   🥐   ",
        description_key: "dominiqueAnselDesc",
        facilities: ["takeaway", "wifi"],
        signatureDishes: ["Cronut", "Cookie Shot", "DKA (Dominique's Kouign Amann)"],
        hours: "8:00 AM - 7:00 PM",
        phone: "+1-212-219-2773",
        website: "dominiqueansel.com"
    },
    // Vegetarian Restaurants
    {
        id: 18,
        name: "De Nieuwe Winkel",
        city: "nijmegen",
        cuisine: "Vegetarian",
        type: "fine-dining",
        tags: ["fine-dining", "vegetarian"],
        priceRange: "upscale",
        rating: 4.7,
        price: 120,
        emoji: "   🌱   ",
        description_key: "deNieuweWinkelDesc",
        facilities: ["reservations", "aircon", "wifi", "vegetarian"],
        signatureDishes: ["Beetroot Variations", "Carrot Textures", "Apple Dessert"],
        hours: "6:00 PM - 10:00 PM",
        phone: "+31-24-322-0777",
        website: "denieuwewinkel.nu"
    },
    // Additional restaurants for variety
    {
        id: 19,
        name: "Din Tai Fung",
        city: "taipei",
        cuisine: "Chinese",
        type: "casual",
        tags: ["casual", "family"],
        priceRange: "mid-range",
        rating: 4.5,
        price: 20,
        emoji: "   🥟   ",
        description_key: "dinTaiFungDesc",
        facilities: ["takeaway", "delivery", "wifi"],
        signatureDishes: ["Xiaolongbao", "Pork & Shrimp Shumai", "Beef Noodle Soup"],
        hours: "11:00 AM - 9:30 PM",
        phone: "+886-2-2321-8928",
        website: "dintaifung.com.tw"
    },
    {
        id: 20,
        name: "Central",
        city: "lima",
        cuisine: "Peruvian",
        type: "fine-dining",
        tags: ["fine-dining"],
        priceRange: "upscale",
        rating: 4.9,
        price: 180,
        emoji: "   🌽   ",
        description_key: "centralDesc",
        facilities: ["reservations", "aircon", "wifi"],
        signatureDishes: ["Amazonian River Prawns", "Central Andes Corn", "Desert Coast Scallops"],
        hours: "12:45 PM - 2:00 PM, 7:45 PM - 10:00 PM",
        phone: "+51-1-242-8515",
        website: "centralrestaurante.com.pe"
    },
    // New Vegetarian Dessert Restaurants
    {
        id: 21,
        name: "Knead",
        city: "shanghai",
        cuisine: "Dessert",
        type: "dessert",
        tags: ["dessert", "vegetarian"],
        priceRange: "mid-range",
        rating: 4.6,
        price: 18,
        emoji: " 🍰 ",
        description_key: "kneadDesc",
        facilities: ["takeaway", "wifi", "vegetarian"],
        signatureDishes: ["Vegan Chocolate Cake", "Avocado Toast", "Matcha Latte"],
        hours: "9:00 AM - 8:00 PM",
        phone: "+86 21 6289 5988",
        website: "knead.com.cn"
    },
    {
        id: 22,
        name: "Kyoto's Choice",
        city: "taipei",
        cuisine: "Japanese Dessert",
        type: "dessert",
        tags: ["dessert", "vegetarian"],
        priceRange: "mid-range",
        rating: 4.7,
        price: 22,
        emoji: " 🍡 ",
        description_key: "kyotosChoiceDesc",
        facilities: ["takeaway", "aircon", "vegetarian"],
        signatureDishes: ["Matcha Parfait", "Warabimochi", "Vegan Dorayaki"],
        hours: "11:00 AM - 9:00 PM",
        phone: "+886 2 2778 8899",
        website: "kyotoschoice.tw"
    },
    // Vegetarian Restaurants from list
    {
        id: 23,
        name: "Piazza Duomo",
        city: "alba",
        cuisine: "Italian",
        type: "fine-dining",
        tags: ["fine-dining", "vegetarian"],
        priceRange: "upscale",
        rating: 4.9,
        price: 260,
        emoji: " 🇮🇹 ",
        description_key: "piazzaDuomoAlbaDesc",
        facilities: ["reservations", "aircon", "wifi"],
        signatureDishes: ["21, 31, 41 Salad", "Eggplant and Red Fruits", "Hazelnut dessert"],
        hours: "12:30 PM - 2:00 PM, 7:30 PM - 9:30 PM",
        phone: "+39 0173 366167",
        website: "piazzaduomoalba.it"
    },
    {
        id: 24,
        name: "Vrijmoed",
        city: "ghent",
        cuisine: "Belgian",
        type: "fine-dining",
        tags: ["fine-dining", "vegetarian"],
        priceRange: "upscale",
        rating: 4.8,
        price: 220,
        emoji: " 🇧🇪 ",
        description_key: "vrijmoedDesc",
        facilities: ["reservations", "aircon"],
        signatureDishes: ["Textures of Celeriac", "Tomato and Kombu", "White Asparagus"],
        hours: "12:00 PM - 1:30 PM, 7:00 PM - 9:00 PM",
        phone: "+32 9 279 99 77",
        website: "vrijmoed.be"
    },
    {
        id: 25,
        name: "El Celler de Can Roca",
        city: "girona",
        cuisine: "Spanish",
        type: "fine-dining",
        tags: ["fine-dining", "vegetarian"],
        priceRange: "upscale",
        rating: 5.0,
        price: 380,
        emoji: " 🇪🇸 ",
        description_key: "elCellerDesc",
        facilities: ["reservations", "aircon", "wifi"],
        signatureDishes: ["Vegetable Stock", "Green Colourology", "Orange Colourology"],
        hours: "1:00 PM - 3:00 PM, 8:00 PM - 10:00 PM",
        phone: "+34 972 22 21 57",
        website: "cellercanroca.com"
    },
    {
        id: 26,
        name: "Boragó",
        city: "santiago",
        cuisine: "Chilean",
        type: "fine-dining",
        tags: ["fine-dining", "vegetarian"],
        priceRange: "upscale",
        rating: 4.9,
        price: 270,
        emoji: " 🇨🇱 ",
        description_key: "boragoDesc",
        facilities: ["reservations", "aircon"],
        signatureDishes: ["Endemic Plants Tasting", "Rockweeds Broth", "Glacier Flowers"],
        hours: "6:00 PM - 11:00 PM",
        phone: "+56 2 2953 8893",
        website: "borago.cl"
    },
    {
        id: 27,
        name: "Reale",
        city: "casteldisangro",
        cuisine: "Italian",
        type: "fine-dining",
        tags: ["fine-dining", "vegetarian"],
        priceRange: "upscale",
        rating: 4.9,
        price: 300,
        emoji: " 🍝 ",
        description_key: "realeDesc",
        facilities: ["reservations", "aircon", "wifi"],
        signatureDishes: ["Absolute of Onion", "Essence of Vegetables", "Bread and Tomato"],
        hours: "1:00 PM - 2:30 PM, 8:00 PM - 9:30 PM",
        phone: "+39 0864 69382",
        website: "nikoromito.com"
    },
    {
        id: 28,
        name: "King's Joy",
        city: "beijing",
        cuisine: "Chinese",
        type: "fine-dining",
        tags: ["fine-dining", "vegetarian"],
        priceRange: "upscale",
        rating: 4.8,
        price: 250,
        emoji: " 🇨🇳 ",
        description_key: "kingsJoyDesc",
        facilities: ["reservations", "aircon", "wifi"],
        signatureDishes: ["Sweet and Sour Monkey Head Mushrooms", "Tofu Skin Rolls", "Assorted Fungus Soup"],
        hours: "11:30 AM - 10:00 PM",
        phone: "+86 10 8404 9191",
        website: "kingsjoy.com.cn"
    },
    {
        id: 29,
        name: "Ricard Camarena Restaurant",
        city: "valencia",
        cuisine: "Spanish",
        type: "fine-dining",
        tags: ["fine-dining", "vegetarian"],
        priceRange: "upscale",
        rating: 4.8,
        price: 240,
        emoji: " 🍊 ",
        description_key: "ricardCamarenaDesc",
        facilities: ["reservations", "aircon", "wifi"],
        signatureDishes: ["Roasted Eggplant with Eel", "Tomato and Penja Pepper", "Artichoke Hearts"],
        hours: "1:30 PM - 3:15 PM, 8:30 PM - 10:00 PM",
        phone: "+34 963 35 54 18",
        website: "ricardcamarena.com"
    },
    {
        id: 30,
        name: "Geranium",
        city: "copenhagen",
        cuisine: "Danish",
        type: "fine-dining",
        tags: ["fine-dining", "vegetarian"],
        priceRange: "upscale",
        rating: 5.0,
        price: 400,
        emoji: " 🇩🇰 ",
        description_key: "geraniumDesc",
        facilities: ["reservations", "aircon", "wifi"],
        signatureDishes: ["Jerusalem Artichoke Leaves", "Biodynamic Onions", "Marbled Hake"],
        hours: "6:30 PM - 9:00 PM",
        phone: "+45 69 96 00 20",
        website: "geranium.dk"
    },
    {
        id: 31,
        name: "La Distillerie",
        city: "bourglinster",
        cuisine: "French",
        type: "fine-dining",
        tags: ["fine-dining", "vegetarian"],
        priceRange: "upscale",
        rating: 4.8,
        price: 230,
        emoji: " 🇱🇺 ",
        description_key: "laDistillerieDesc",
        facilities: ["reservations", "aircon", "wifi"],
        signatureDishes: ["Garden Vegetable Symphony", "Root Vegetable Tart", "Fermented Potato"],
        hours: "12:00 PM - 1:30 PM, 7:00 PM - 9:00 PM",
        phone: "+352 78 78 78 1",
        website: "bourglinster.lu"
    },
    // Dessert Shops from list
    {
        id: 32,
        name: "Cédric Grolet",
        city: "paris",
        cuisine: "French",
        type: "dessert",
        tags: ["dessert"],
        priceRange: "upscale",
        rating: 4.9,
        price: 30,
        emoji: " 🍓 ",
        description_key: "cedricGroletDesc",
        facilities: ["takeaway"],
        signatureDishes: ["Le Citron", "La Noisette", "La Fraise"],
        hours: "10:00 AM - 6:00 PM",
        phone: "+33 1 42 60 58 19",
        website: "cedric-grolet.com"
    },
    {
        id: 33,
        name: "Iginio Massari Alta Pasticceria",
        city: "brescia",
        cuisine: "Italian",
        type: "dessert",
        tags: ["dessert"],
        priceRange: "upscale",
        rating: 4.9,
        price: 28,
        emoji: " 🍰 ",
        description_key: "iginioMassariDesc",
        facilities: ["takeaway", "aircon"],
        signatureDishes: ["Panettone", "Torta Setteveli", "Maritozzo"],
        hours: "7:30 AM - 8:00 PM",
        phone: "+39 030 375 0687",
        website: "iginiomassari.it"
    },
    {
        id: 34,
        name: "Sadaharu AOKI",
        city: "tokyo",
        cuisine: "Japanese Dessert",
        type: "dessert",
        tags: ["dessert"],
        priceRange: "mid-range",
        rating: 4.7,
        price: 20,
        emoji: " 🍵 ",
        description_key: "sadaharuAokiDesc",
        facilities: ["takeaway", "wifi"],
        signatureDishes: ["Bamboo", "Matcha Croissant", "Yuzu Tarte"],
        hours: "11:00 AM - 8:00 PM",
        phone: "+81 3-5220-3388",
        website: "sadaharuaoki.jp"
    },
    {
        id: 35,
        name: "Demel",
        city: "vienna",
        cuisine: "Austrian",
        type: "dessert",
        tags: ["dessert", "family"],
        priceRange: "mid-range",
        rating: 4.6,
        price: 18,
        emoji: " 🎂 ",
        description_key: "demelDesc",
        facilities: ["takeaway", "aircon"],
        signatureDishes: ["Sachertorte", "Apfelstrudel", "Kaiserschmarrn"],
        hours: "10:00 AM - 7:00 PM",
        phone: "+43 1 53517170",
        website: "demel.com"
    },
    {
        id: 36,
        name: "Nihonbashi Nagato",
        city: "tokyo",
        cuisine: "Japanese Dessert",
        type: "dessert",
        tags: ["dessert"],
        priceRange: "mid-range",
        rating: 4.7,
        price: 25,
        emoji: " 🌸 ",
        description_key: "nihonbashiNagatoDesc",
        facilities: ["takeaway"],
        signatureDishes: ["Seasonal Wagashi", "Kurimochi", "Yokan"],
        hours: "10:00 AM - 6:00 PM",
        phone: "+81 3-3271-8662",
        website: "nihonbashi-nagato.com"
    },
    {
        id: 37,
        name: "Hof Conditorei Benno Sajbel",
        city: "munich",
        cuisine: "German",
        type: "dessert",
        tags: ["dessert"],
        priceRange: "mid-range",
        rating: 4.6,
        price: 15,
        emoji: " 🥨 ",
        description_key: "hofConditoreiDesc",
        facilities: ["takeaway", "outdoor"],
        signatureDishes: ["Prinzregententorte", "Baumkuchen", "Black Forest Cake"],
        hours: "9:00 AM - 6:00 PM",
        phone: "+49 89 225642",
        website: "hofconditorei.de"
    },
    {
        id: 38,
        name: "Turris",
        city: "barcelona",
        cuisine: "Spanish",
        type: "dessert",
        tags: ["dessert"],
        priceRange: "mid-range",
        rating: 4.5,
        price: 15,
        emoji: "🥐",
        description_key: "turrisDesc",
        facilities: ["takeaway"],
        signatureDishes: ["Ensaimada", "Croissant de Almendra", "Coca de Vidre"],
        hours: "8:00 AM - 9:00 PM",
        phone: "+34 932 18 37 99",
        website: "turris.es"
    },
    {
        id: 39,
        name: "Bubo Barcelona",
        city: "barcelona",
        cuisine: "Spanish",
        type: "dessert",
        tags: ["dessert"],
        priceRange: "upscale",
        rating: 4.7,
        price: 25,
        emoji: "🍫",
        description_key: "buboDesc",
        facilities: ["takeaway", "aircon"],
        signatureDishes: ["Xabina Chocolate Cake", "Macarons", "Chocolate sculptures"],
        hours: "10:00 AM - 9:00 PM",
        phone: "+34 932 68 72 20",
        website: "bubo.es"
    },
    {
        id: 40,
        name: "The Mandarin Cake Shop",
        city: "hongkong",
        cuisine: "French",
        type: "dessert",
        tags: ["dessert", "luxury"],
        priceRange: "upscale",
        rating: 4.8,
        price: 35,
        emoji: "🍰",
        description_key: "mandarinCakeShopDesc",
        facilities: ["takeaway", "aircon"],
        signatureDishes: ["1963 Mandarin Cheesecake", "Rose Petal Jam", "Chocolate Pralines"],
        hours: "10:00 AM - 8:00 PM",
        phone: "+852 2825 4008",
        website: "mandarinoriental.com/hong-kong"
    },
    {
        id: 41,
        name: "KOVA Patisserie",
        city: "london",
        cuisine: "Japanese Dessert",
        type: "dessert",
        tags: ["dessert"],
        priceRange: "mid-range",
        rating: 4.6,
        price: 20,
        emoji: "🍵",
        description_key: "kovaDesc",
        facilities: ["takeaway", "wifi"],
        signatureDishes: ["Mille Crepe Cake", "Matcha Lava Cake", "Bubble Tea"],
        hours: "12:00 PM - 9:00 PM",
        phone: "+44 20 7494 9832",
        website: "kovapatisserie.com"
    }
];
// Initialize the application
function initializeApp() {
    allRestaurants = [...sampleRestaurants];
    filteredRestaurants = [...allRestaurants];

    populateCityFilter();
    displayRestaurants();
    updateCollectionCount();
    setupEventListeners();
    updateLanguage();
}
// Populate city filter dropdown
function populateCityFilter() {
    const cityFilter = document.getElementById('cityFilter');
    const currentValue = cityFilter.value; // Preserve current selection

    // Clear existing options except the first one (All Cities)
    while (cityFilter.children.length > 1) {
        cityFilter.removeChild(cityFilter.lastChild);
    }

    const cities = [...new Set(allRestaurants.map(r => r.city))].sort();

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        const translatedCity = translations[currentLanguage][city] || city.charAt(0).toUpperCase() + city.slice(1);
        option.textContent = translatedCity;
        cityFilter.appendChild(option);
    });

    // Restore previous selection
    cityFilter.value = currentValue;
}
// Display restaurants
function displayRestaurants(reset = false) {
    if (reset) {
        currentPage = 0;
        displayedRestaurants = [];
    }

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const restaurantsToShow = filteredRestaurants.slice(startIndex, endIndex);

    if (reset) {
        displayedRestaurants = [...restaurantsToShow];
    } else {
        displayedRestaurants = [...displayedRestaurants, ...restaurantsToShow];
    }

    renderRestaurantCards(reset);
    updateLoadMoreButton();
    updateNoResultsMessage();
}
// Render restaurant cards
function renderRestaurantCards(reset = false) {
    const grid = document.getElementById('restaurantGrid');

    if (reset) {
        grid.innerHTML = '';
    }

    const startIndex = reset ? 0 : grid.children.length;

    for (let i = startIndex; i < displayedRestaurants.length; i++) {
        const restaurant = displayedRestaurants[i];
        const card = createRestaurantCard(restaurant);
        grid.appendChild(card);

        // Add entrance animation
        setTimeout(() => {
            card.classList.add('card-enter');
        }, i * 50);
    }
}
// Create restaurant card
function createRestaurantCard(restaurant) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-md overflow-hidden card-hover cursor-pointer opacity-0';

    const isFavorited = favorites.includes(restaurant.id);
    const isVisited = visited.includes(restaurant.id);
    const isBooked = booked.includes(restaurant.id);

    const imageUrl = getRestaurantImage(restaurant);
    const cuisineKey = restaurant.cuisine.toLowerCase().replace(' ', '');

    card.innerHTML = `
                <div class="relative">
                     <div class="w-full h-48 bg-gray-200 flex items-center justify-center text-6xl relative overflow-hidden cursor-pointer image-loading" 
                         onclick="openRestaurantModal(${restaurant.id})">
                        <img src="${imageUrl}" alt="${restaurant.name}" class="restaurant-image opacity-0" 
                             onload="this.parentElement.classList.remove('image-loading'); this.classList.remove('opacity-0'); this.nextElementSibling.style.display='none';" 
                             onerror="this.parentElement.classList.remove('image-loading'); this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div class="restaurant-emoji text-6xl">${restaurant.emoji}</div>
                    </div>
                    <button class="favorite-btn absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center ${isFavorited ? 'favorited' : ''}" 
                            onclick="toggleFavorite(event, ${restaurant.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                    ${isVisited ? `<div class="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold"><i class="fas fa-check mr-1"></i>${translations[currentLanguage].visited_status}</div>` : ''}
                    ${isBooked ? `<div class="absolute bottom-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold"><i class="fas fa-calendar mr-1"></i>${translations[currentLanguage].booked_status}</div>` : ''}
                </div>
                <div class="p-4">
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">${restaurant.name}</h3>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm text-gray-600">${translations[currentLanguage][cuisineKey] || restaurant.cuisine} • ${translations[currentLanguage][restaurant.city] || restaurant.city}</span>
                        <div class="flex items-center">
                            <i class="fas fa-star text-yellow-400 mr-1"></i>
                            <span class="text-sm font-medium">${restaurant.rating}</span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-lg font-bold text-indigo-600">$${restaurant.price}</span>
                        <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">${translations[currentLanguage][restaurant.type] || restaurant.type}</span>
                    </div>
                    <p class="text-sm text-gray-600 mb-3 line-clamp-2">${translations[currentLanguage][restaurant.description_key]}</p>
                    <div class="flex space-x-3">
                        <button class="book-table-btn flex-1 bg-black text-white py-3 px-6 rounded-lg hover:bg-black transition-all duration-200 text-sm font-medium relative overflow-hidden ${isBooked ? 'clicked' : ''}" 
                                onclick="bookRestaurant(event, ${restaurant.id})">
                            <span class="book-btn-text">${isBooked ? translations[currentLanguage].booked_status : translations[currentLanguage].bookNow}</span>
                            <i class="fas fa-check book-btn-check absolute inset-0 flex items-center justify-center transition-all duration-200" style="opacity: 0;"></i>
                        </button>
                        <button class="visit-btn bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors text-sm font-medium ${isVisited ? 'bg-yellow-500' : ''}" 
                                onclick="toggleVisited(event, ${restaurant.id})" style="min-width: 120px; display: flex; align-items: center; justify-content: center;">
                            <span class="visit-btn-text">${isVisited ? translations[currentLanguage].visited_status : translations[currentLanguage].markAsVisit}</span>
                            <i class="fas fa-check visit-btn-icon hidden"></i>
                        </button>
                    </div>
                </div>
            `;

    return card;
}
// Toggle favorite
function toggleFavorite(event, restaurantId) {
    event.stopPropagation();

    const button = event.currentTarget;
    const isFavorited = favorites.includes(restaurantId);

    if (isFavorited) {
        favorites = favorites.filter(id => id !== restaurantId);
        button.classList.remove('favorited');
        showNotification(translations[currentLanguage].removedFromFavorites, 'success');
    } else {
        favorites.push(restaurantId);
        button.classList.add('favorited');
        button.classList.add('heart-beat');
        showNotification(translations[currentLanguage].addedToFavorites, 'success');

        setTimeout(() => {
            button.classList.remove('heart-beat');
        }, 1300);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateCollectionCount();
}
// Toggle visited
function toggleVisited(event, restaurantId) {
    event.stopPropagation();

    const button = event.currentTarget;
    const isVisited = visited.includes(restaurantId);

    // Add bounce animation
    button.classList.add('bounce-animation');

    if (isVisited) {
        visited = visited.filter(id => id !== restaurantId);
        button.classList.remove('bg-yellow-500');
        button.classList.add('bg-gray-600');
        showNotification(translations[currentLanguage].removedFromVisited, 'success');
    } else {
        visited.push(restaurantId);
        button.classList.remove('bg-gray-600');
        button.classList.add('bg-yellow-500');
        showNotification(translations[currentLanguage].markedAsVisited, 'success');
    }

    localStorage.setItem('visited', JSON.stringify(visited));
    updateCollectionCount();

    // Remove animation after completion
    setTimeout(() => {
        button.classList.remove('bounce-animation');
    }, 1000);

    // Refresh display to show visited status
    setTimeout(() => {
        displayRestaurants(true);
    }, 500);
}
// Book restaurant
function bookRestaurant(event, restaurantId) {
    event.stopPropagation();

    const button = event.currentTarget;
    const textSpan = button.querySelector('.book-btn-text');
    const isCurrentlyBooked = booked.includes(restaurantId);

    button.classList.add('bounce-animation');

    if (isCurrentlyBooked) {
        booked = booked.filter(id => id !== restaurantId);
        button.classList.remove('clicked');
        textSpan.textContent = translations[currentLanguage].bookNow;
        showNotification(translations[currentLanguage].bookingCancelled, 'success');
    } else {
        textSpan.innerHTML = `<i class="fas fa-spinner fa-spin"></i>`;
        button.disabled = true;

        setTimeout(() => {
            booked.push(restaurantId);
            localStorage.setItem('booked', JSON.stringify(booked));
            updateCollectionCount();
            button.classList.add('clicked');
            textSpan.textContent = translations[currentLanguage].booked_status;
            button.disabled = false;
            showNotification(translations[currentLanguage].bookingConfirmed, 'success');
            setTimeout(() => displayRestaurants(true), 500);
        }, 1500);
    }



    setTimeout(() => {
        button.classList.remove('bounce-animation');
    }, 600);
}
// Open restaurant modal
function openRestaurantModal(restaurantId) {
    const restaurant = allRestaurants.find(r => r.id === restaurantId);
    if (!restaurant) return;

    const modal = document.getElementById('restaurantModal');
    const imageUrl = getRestaurantImage(restaurant);

    // Set modal content
    document.getElementById('modalTitle').textContent = restaurant.name;
    document.getElementById('modalDescription').textContent = translations[currentLanguage][restaurant.description_key] || restaurant.description_key;

    // Set restaurant image
    const modalImage = document.getElementById('modalRestaurantImage');
    const modalEmoji = document.getElementById('modalImageEmoji');

    modalImage.src = imageUrl;
    modalImage.style.display = 'block';
    modalEmoji.style.display = 'none';
    modalEmoji.textContent = restaurant.emoji;

    // Handle image load error
    modalImage.onerror = function () {
        this.style.display = 'none';
        modalEmoji.style.display = 'block';
    };

    const cuisineKey = restaurant.cuisine.toLowerCase().replace(' ', '');
    // Set details
    const detailsContainer = document.getElementById('modalDetails');
    detailsContainer.innerHTML = `
                <div class="flex items-center justify-between">
                    <span class="font-semibold text-gray-700" data-translate="rating">評分:</span>
                    <div class="flex items-center">
                        <i class="fas fa-star text-yellow-400 mr-1"></i>
                        <span class="font-bold">${restaurant.rating}</span>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <span class="font-semibold text-gray-700" data-translate="price">價格:</span>
                    <span class="font-bold text-indigo-600">$${restaurant.price}</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="font-semibold text-gray-700" data-translate="cuisine">料理:</span>
                    <span class="font-medium">${translations[currentLanguage][cuisineKey] || restaurant.cuisine}</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="font-semibold text-gray-700" data-translate="hours">營業時間:</span>
                    <span class="font-medium">${restaurant.hours}</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="font-semibold text-gray-700" data-translate="phone">電話:</span>
                    <span class="font-medium">${restaurant.phone}</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="font-semibold text-gray-700" data-translate="website">網站:</span>
                    <a href="https://${restaurant.website}" target="_blank" class="font-medium text-indigo-600 hover:text-indigo-800">${restaurant.website}</a>
                </div>
            `;

    // Set facilities
    const facilitiesContainer = document.getElementById('modalFacilities');
    facilitiesContainer.innerHTML = restaurant.facilities.map(facility => `
                <div class="flex items-center text-sm text-gray-600">
                    <i class="fas fa-check text-green-500 mr-2"></i>
                    <span data-translate="${facility}">${translations[currentLanguage][facility] || facility}</span>
                </div>
            `).join('');

    // Set signature dishes
    const dishesContainer = document.getElementById('modalSignatureDishes');
    dishesContainer.innerHTML = restaurant.signatureDishes.map(dish => `
                <div class="bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <div class="flex items-center">
                        <i class="fas fa-utensils text-orange-600 mr-2"></i>
                        <span class="font-medium text-gray-800">${dish}</span>
                    </div>
                </div>
            `).join('');

    // Set visited button
    const visitedBtn = document.getElementById('modalVisitedBtn');
    const isVisited = visited.includes(restaurantId);

    visitedBtn.innerHTML = isVisited ?
        '<i class="fas fa-times mr-2"></i><span data-translate="removeVisited">移除造訪</span>' :
        '<i class="fas fa-check mr-2"></i><span data-translate="markVisited">標記已造訪</span>';

    // Set favorite button
    const favoriteBtn = document.getElementById('modalFavoriteBtn');
    const isFavorited = favorites.includes(restaurantId);

    favoriteBtn.innerHTML = isFavorited ?
        '<i class="fas fa-heart mr-2"></i><span data-translate="removeFromFavorites">移除收藏</span>' :
        '<i class="fas fa-heart mr-2"></i><span data-translate="addToFavorites">加入收藏</span>';

    // Show modal
    modal.classList.remove('hidden');
    modal.querySelector('.bg-white').classList.add('modal-scale');

    // Store current restaurant ID for modal actions
    modal.dataset.restaurantId = restaurantId;

    // Set up modal button events
    setupModalEvents(restaurant);

    updateLanguage();
}
// Setup modal events
function setupModalEvents(restaurant) {
    // Book button
    document.getElementById('modalBookBtn').onclick = function () {
        // Add pulse and bounce animations
        this.classList.add('pulse-animation', 'bounce-animation');

        // Simulate booking process
        const originalContent = this.innerHTML;
        this.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i><span data-translate="bookingInProgress">${translations[currentLanguage].bookingInProgress}</span>`;
        this.disabled = true;

        setTimeout(() => {
            if (!booked.includes(restaurant.id)) {
                booked.push(restaurant.id);
                localStorage.setItem('booked', JSON.stringify(booked));
                updateCollectionCount();

                this.innerHTML = `<i class="fas fa-check mr-2"></i><span data-translate="tableBooked">${translations[currentLanguage].tableBooked}</span>`;
                this.classList.add('btn-success');
                showNotification(translations[currentLanguage].bookingConfirmed, 'success');

                // Reset after delay
                setTimeout(() => {
                    this.innerHTML = `<i class="fas fa-calendar-plus mr-2"></i><span data-translate="bookNow">${translations[currentLanguage].bookNow}</span>`;
                    this.disabled = false;
                    this.classList.remove('btn-success', 'pulse-animation', 'bounce-animation');
                }, 2000);
            } else {
                this.innerHTML = originalContent;
                this.disabled = false;
                this.classList.remove('pulse-animation', 'bounce-animation');
                showNotification('Already booked!', 'info');
            }
        }, 1500);
    };

    // Visited button
    document.getElementById('modalVisitedBtn').onclick = function () {
        // Add bounce animation
        this.classList.add('bounce-animation');

        const isVisited = visited.includes(restaurant.id);

        if (isVisited) {
            visited = visited.filter(id => id !== restaurant.id);
            this.innerHTML = `<i class="fas fa-check mr-2"></i><span data-translate="markVisited">${translations[currentLanguage].markVisited}</span>`;
            showNotification(translations[currentLanguage].removedFromVisited, 'success');
        } else {
            visited.push(restaurant.id);
            this.innerHTML = `<i class="fas fa-times mr-2"></i><span data-translate="removeVisited">${translations[currentLanguage].removeVisited}</span>`;
            showNotification(translations[currentLanguage].markedAsVisited, 'success');
        }

        localStorage.setItem('visited', JSON.stringify(visited));
        updateCollectionCount();

        // Remove animation after completion
        setTimeout(() => {
            this.classList.remove('bounce-animation');
        }, 1000);
    };

    // Favorite button
    document.getElementById('modalFavoriteBtn').onclick = function () {
        // Add heart beat animation
        this.classList.add('heart-beat');

        const isFavorited = favorites.includes(restaurant.id);

        if (isFavorited) {
            favorites = favorites.filter(id => id !== restaurant.id);
            this.innerHTML = `<i class="fas fa-heart mr-2"></i><span data-translate="addToFavorites">${translations[currentLanguage].addToFavorites}</span>`;
            showNotification(translations[currentLanguage].removedFromFavorites, 'success');
        } else {
            favorites.push(restaurant.id);
            this.innerHTML = `<i class="fas fa-heart mr-2"></i><span data-translate="removeFromFavorites">${translations[currentLanguage].removeFromFavorites}</span>`;
            showNotification(translations[currentLanguage].addedToFavorites, 'success');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateCollectionCount();

        // Remove animation after completion
        setTimeout(() => {
            this.classList.remove('heart-beat');
        }, 1300);
    };

    // Share button
    document.getElementById('modalShareBtn').onclick = function () {
        const shareModal = document.getElementById('shareModal');
        shareModal.classList.toggle('hidden');
    };

    // Generate price comparison
    generatePriceComparison(restaurant);

    // Generate similar restaurants
    generateSimilarRestaurants(restaurant);

    // Setup share buttons
    setupShareButtons(restaurant);
}
// Generate price comparison
function generatePriceComparison(restaurant) {
    const sameCuisineRestaurants = allRestaurants.filter(r =>
        r.cuisine === restaurant.cuisine && r.id !== restaurant.id
    );

    if (sameCuisineRestaurants.length === 0) {
        document.getElementById('priceComparisonSection').style.display = 'none';
        return;
    }
    document.getElementById('priceComparisonSection').style.display = 'block';

    const avgPrice = sameCuisineRestaurants.reduce((sum, r) => sum + r.price, 0) / sameCuisineRestaurants.length;
    const isAboveAverage = restaurant.price > avgPrice;

    const content = document.getElementById('priceComparisonContent');
    content.innerHTML = `
                <div class="space-y-3">
                    <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span class="font-semibold text-gray-700" data-translate="current">目前選擇:</span>
                        <span class="font-bold text-blue-600">$${restaurant.price}</span>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span class="font-semibold text-gray-700" data-translate="averagePrice">平均價格 (${restaurant.cuisine}):</span>
                        <span class="font-bold text-gray-600">$${Math.round(avgPrice)}</span>
                    </div>
                    <div class="flex items-center justify-between p-3 ${isAboveAverage ? 'bg-red-50' : 'bg-green-50'} rounded-lg">
                        <span class="font-semibold text-gray-700" data-translate="pricePosition">價格定位:</span>
                        <span class="font-bold ${isAboveAverage ? 'text-red-600' : 'text-green-600'}" data-translate="${isAboveAverage ? 'aboveAverage' : 'belowAverage'}">
                            ${isAboveAverage ? translations[currentLanguage].aboveAverage : translations[currentLanguage].belowAverage}
                        </span>
                    </div>
                </div>
            `;
}
// Generate similar restaurants
function generateSimilarRestaurants(restaurant) {
    const similar = allRestaurants.filter(r =>
        r.id !== restaurant.id &&
        (r.cuisine === restaurant.cuisine || r.city === restaurant.city || r.type === restaurant.type)
    ).slice(0, 3);

    const container = document.getElementById('similarRestaurants');
    container.innerHTML = similar.map(r => {
        const imageUrl = getRestaurantImage(r);
        return `
                    <div class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors" 
                         onclick="openRestaurantModal(${r.id})">
                        <div class="w-12 h-12 bg-gradient-to-br from-orange-200 to-red-200 rounded-lg flex items-center justify-center text-xl mr-3 overflow-hidden">
                            <img src="${imageUrl}" alt="${r.name}" class="w-full h-full object-cover rounded-lg hidden" 
                                 onload="this.style.display='block'; this.nextElementSibling.style.display='none';" 
                                 onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <div class="text-xl">${r.emoji}</div>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-semibold text-gray-900">${r.name}</h4>
                            <p class="text-sm text-gray-600">${r.cuisine} • $${r.price}</p>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-star text-yellow-400 mr-1"></i>
                            <span class="text-sm font-medium">${r.rating}</span>
                        </div>
                    </div>
                `;
    }).join('');
}
// Setup share buttons
function setupShareButtons(restaurant) {
    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.onclick = function () {
            const platform = this.dataset.platform;
            const url = 'https://en.wikipedia.org/wiki/Food';
            const text = `看看這家餐廳 ${restaurant.name} - 位於 ${translations[currentLanguage][restaurant.city]} 的 ${restaurant.cuisine} 餐廳!`;

            switch (platform) {
                case 'facebook':
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
                    showNotification('正在打開 Facebook 分享...', 'info');
                    break;
                case 'instagram':
                    showNotification('Instagram 分享：請複製連結並在您的限時動態中分享！', 'info');
                    break;
                case 'line':
                    window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`);
                    showNotification('正在打開 Line 分享...', 'info');
                    break;
                case 'copy':
                    navigator.clipboard.writeText(url).then(() => {
                        showNotification('連結已複製到剪貼簿！', 'success');
                    }).catch(() => {
                        // Fallback for browsers that don't support clipboard API
                        const textArea = document.createElement('textarea');
                        textArea.value = url;
                        document.body.appendChild(textArea);
                        textArea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textArea);
                        showNotification('連結已複製到剪貼簿！', 'success');
                    });
                    break;
            }
        };
    });
}
// Update collection count
function updateCollectionCount() {
    const totalCount = new Set([...favorites, ...visited, ...booked]).size;
    document.getElementById('collectionCount').textContent = totalCount;
}
// Show notification
function showNotification(message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    const notification = document.createElement('div');

    const bgColor = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500',
        warning: 'bg-yellow-500'
    }[type] || 'bg-blue-500';

    notification.className = `${bgColor} text-white px-6 py-3 rounded-lg shadow-lg notification`;
    notification.innerHTML = `
                <div class="flex items-center">
                    <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'times' : 'info'} mr-2"></i>
                    <span>${message}</span>
                </div>
            `;

    container.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}
// Update language
function updateLanguage() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
}
// Filter restaurants
function filterRestaurants() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const continent = document.getElementById('continentFilter').value;
    const city = document.getElementById('cityFilter').value;
    const type = document.getElementById('typeFilter').value;
    const priceRange = document.getElementById('priceFilter').value;

    filteredRestaurants = allRestaurants.filter(restaurant => {
        const restaurantCityData = globalData.cities[restaurant.city];
        const matchesSearch = !searchTerm ||
            restaurant.name.toLowerCase().includes(searchTerm) ||
            restaurant.cuisine.toLowerCase().includes(searchTerm) ||
            restaurant.city.toLowerCase().includes(searchTerm) ||
            (translations[currentLanguage][restaurant.description_key] && translations[currentLanguage][restaurant.description_key].toLowerCase().includes(searchTerm));
        const matchesContinent = !continent || (restaurantCityData && restaurantCityData.continent === continent);

        const matchesCity = !city || restaurant.city === city;
        const matchesType = !type || restaurant.type === type;
        const matchesPriceRange = !priceRange || restaurant.priceRange === priceRange;
        const matchesTag = !activeTag || (restaurant.tags && restaurant.tags.includes(activeTag));

        return matchesSearch && matchesContinent && matchesCity && matchesType && matchesPriceRange && matchesTag;
    });

    sortRestaurants();
    displayRestaurants(true);
}
// Sort restaurants
function sortRestaurants() {
    const sortBy = document.getElementById('sortBy').value;

    filteredRestaurants.sort((a, b) => {
        switch (sortBy) {
            case 'rating':
                return b.rating - a.rating;
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'name':
                return a.name.localeCompare(b.name);
            case 'popularity':
                return b.rating - a.rating; // Using rating as popularity proxy
            default:
                return 0;
        }
    });
}
// Update load more button
function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const loadMoreContainer = document.getElementById('loadMoreContainer');

    if (displayedRestaurants.length >= filteredRestaurants.length) {
        loadMoreContainer.style.display = 'none';
    } else {
        loadMoreContainer.style.display = 'block';
    }
}
// Update no results message
function updateNoResultsMessage() {
    const noResults = document.getElementById('noResults');
    const restaurantGrid = document.getElementById('restaurantGrid');

    if (filteredRestaurants.length === 0) {
        noResults.classList.remove('hidden');
        restaurantGrid.style.display = 'none';
    } else {
        noResults.classList.add('hidden');
        restaurantGrid.style.display = 'grid';
    }
}
// Open collection modal
function openCollectionModal() {
    const modal = document.getElementById('collectionModal');
    modal.classList.remove('hidden');

    // Show favorites tab by default
    showCollectionTab('favorites');
}
// Show collection tab
function showCollectionTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.collection-tab').forEach(tab => {
        if (tab.dataset.tab === tabName) {
            tab.classList.add('bg-indigo-600', 'text-white');
            tab.classList.remove('bg-gray-200', 'text-gray-700');
        } else {
            tab.classList.remove('bg-indigo-600', 'text-white');
            tab.classList.add('bg-gray-200', 'text-gray-700');
        }
    });

    // Show content
    const content = document.getElementById('collectionContent');
    const emptyMessage = document.getElementById('emptyCollection');
    let items = [];

    switch (tabName) {
        case 'favorites':
            items = favorites.map(id => allRestaurants.find(r => r.id === id)).filter(Boolean);
            break;
        case 'visited':
            items = visited.map(id => allRestaurants.find(r => r.id === id)).filter(Boolean);
            break;
        case 'booked':
            items = booked.map(id => allRestaurants.find(r => r.id === id)).filter(Boolean);
            break;
    }

    if (items.length === 0) {
        content.style.display = 'none';
        emptyMessage.classList.remove('hidden');
    } else {
        content.style.display = 'grid';
        emptyMessage.classList.add('hidden');

        content.innerHTML = items.map(restaurant => {
            const imageUrl = getRestaurantImage(restaurant);
            return `
                        <div class="bg-white rounded-lg shadow-md overflow-hidden collection-card">
                            <button class="delete-btn" onclick="removeFromCollection(${restaurant.id}, '${tabName}')" title="${translations[currentLanguage].removeFromCollection}">
                                <i class="fas fa-times"></i>
                            </button>
                            <div class="relative">
                                <div class="w-full h-32 bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center text-4xl relative overflow-hidden">
                                    <img src="${imageUrl}" alt="${restaurant.name}" class="restaurant-image hidden" 
                                         onload="this.style.display='block'; this.nextElementSibling.style.display='none';" 
                                         onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                                    <div class="restaurant-emoji text-4xl">${restaurant.emoji}</div>
                                </div>
                            </div>
                            <div class="p-3">
                                <h4 class="font-semibold text-gray-900 mb-1">${restaurant.name}</h4>
                                <p class="text-sm text-gray-600">${restaurant.cuisine} • ${translations[currentLanguage][restaurant.city] || restaurant.city}</p>
                                <div class="flex items-center justify-between">
                                    <span class="text-sm font-bold text-indigo-600">$${restaurant.price}</span>
                                    <div class="flex items-center">
                                        <i class="fas fa-star text-yellow-400 mr-1"></i>
                                        <span class="text-sm">${restaurant.rating}</span>
                                    </div>
                                </div>
                                <button class="w-full mt-2 bg-indigo-600 text-white py-1 px-3 rounded text-sm hover:bg-indigo-700 transition-colors" 
                                        onclick="openRestaurantModal(${restaurant.id})">
                                    <span data-translate="viewDetails">${translations[currentLanguage].viewDetails}</span>
                                </button>
                            </div>
                        </div>
                    `;
        }).join('');
    }
}
// Remove from collection
function removeFromCollection(restaurantId, collectionType) {
    let collection;
    let storageKey;
    let message;

    switch (collectionType) {
        case 'favorites':
            collection = favorites;
            storageKey = 'favorites';
            favorites = favorites.filter(id => id !== restaurantId);
            message = translations[currentLanguage].removedFromFavorites || 'Removed from favorites!';
            break;
        case 'visited':
            collection = visited;
            storageKey = 'visited';
            visited = visited.filter(id => id !== restaurantId);
            message = translations[currentLanguage].removedFromVisited || 'Removed from visited!';
            break;
        case 'booked':
            collection = booked;
            storageKey = 'booked';
            booked = booked.filter(id => id !== restaurantId);
            message = 'Removed from booked!';
            break;
        default:
            return;
    }

    localStorage.setItem(storageKey, JSON.stringify(eval(collectionType)));
    updateCollectionCount();
    showCollectionTab(collectionType); // Refresh the current tab
    displayRestaurants(true); // Refresh main display to update favorite buttons
    showNotification(message, 'success');
}
// Setup event listeners
function setupEventListeners() {
    // Search and filter events
    document.getElementById('searchInput').addEventListener('input', filterRestaurants);
    document.getElementById('continentFilter').addEventListener('change', filterRestaurants);
    document.getElementById('cityFilter').addEventListener('change', filterRestaurants);
    document.getElementById('typeFilter').addEventListener('change', filterRestaurants);
    document.getElementById('priceFilter').addEventListener('change', filterRestaurants);
    document.getElementById('sortBy').addEventListener('change', () => {
        sortRestaurants();
        displayRestaurants(true);
    });

    document.getElementById('itemsPerPage').addEventListener('change', (e) => {
        itemsPerPage = parseInt(e.target.value);
        displayRestaurants(true);
    });

    // Button events
    document.getElementById('searchBtn').addEventListener('click', filterRestaurants);
    document.getElementById('resetFilters').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('continentFilter').value = '';
        document.getElementById('cityFilter').value = '';
        document.getElementById('typeFilter').value = '';
        document.getElementById('priceFilter').value = '';
        document.getElementById('sortBy').value = 'rating';
        activeTag = null;
        document.querySelectorAll('.food-tag').forEach(btn => {
            btn.classList.remove('bg-indigo-600', 'text-white');
            btn.classList.add('bg-gray-200', 'text-gray-700');
        });
        filterRestaurants();
    });

    document.getElementById('loadMoreBtn').addEventListener('click', () => {
        currentPage++;
        displayRestaurants();
    });

    document.querySelectorAll('.food-tag').forEach(button => {
        button.addEventListener('click', () => {
            const tagValue = button.dataset.tag;
            if (activeTag === tagValue) {
                // If the clicked tag is already active, deactivate it
                activeTag = null;
                button.classList.remove('bg-indigo-600', 'text-white');
                button.classList.add('bg-gray-200', 'text-gray-700');
            } else {
                // Deactivate all tags first
                document.querySelectorAll('.food-tag').forEach(btn => {
                    btn.classList.remove('bg-indigo-600', 'text-white');
                    btn.classList.add('bg-gray-200', 'text-gray-700');
                });

                // Activate the new tag
                activeTag = tagValue;
                button.classList.add('bg-indigo-600', 'text-white');
                button.classList.remove('bg-gray-200', 'text-gray-700');
            }
            filterRestaurants();
        });
    });
    // Modal events
    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('restaurantModal').classList.add('hidden');
    });

    document.getElementById('myCollectionBtn').addEventListener('click', openCollectionModal);
    document.getElementById('closeCollectionModal').addEventListener('click', () => {
        document.getElementById('collectionModal').classList.add('hidden');
    });

    // Collection tab events
    document.querySelectorAll('.collection-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            showCollectionTab(tab.dataset.tab);
        });
    });

    // Language change event
    document.getElementById('languageSelect').addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        updateLanguage();
        populateCityFilter(); // Refresh city filter with new language
        displayRestaurants(true); // Refresh to update all text

        // Update collection modal if it's open
        const collectionModal = document.getElementById('collectionModal');
        if (!collectionModal.classList.contains('hidden')) {
            const activeTab = document.querySelector('.collection-tab.bg-indigo-600');
            if (activeTab) {
                showCollectionTab(activeTab.dataset.tab);
            }
        }
    });
}
// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);