// Landmark data
const landmarks = [
    {
        id: "eiffel",
        name: "艾菲爾鐵塔",
        location: "巴黎, 法國",
        rating: 4.8,
        visitors: "7 百萬人",
        image: "https://media.gettyimages.com/id/1185953092/photo/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-the-rays-of-the-setting.jpg?b=1&s=170667a&w=0&k=20&c=RQMkDSuO8X0Wm_j6WgvcgR3mTucjAiFFgz0XmeUuYjg=",
        region: "europe",
        tabs: {
            scenery: "從塔頂俯瞰巴黎全景，日夜皆美。塔頂可以360度環視巴黎市區，塞納河蜿蜒穿過城市，遠處可見凱旋門、羅浮宮和聖母院等著名建築。夜晚的燈光秀更是巴黎的標誌性景觀。",
            architecture: "建於1889年，由古斯塔夫·艾菲爾設計，為鐵製結構地標。高324米，由18,038個金屬部件組成，重達10,100噸。塔身分為三層，遊客可以乘坐電梯或爬樓梯到達不同層。",
            hours: "每日 09:30 - 23:00（視季節略有調整）\n夏季（6月-9月）開放時間較晚，冬季提前閉館。最後入場時間通常比閉館時間提前1小時。",
            price: "成人約 €18.10，可購買電梯票或樓梯票\n兒童（4-11歲）: €4.60\n青少年（12-24歲）: €9.10\n殘障人士: €4.60\n可在官網預訂以避免排隊"
        },
        details: "艾菲爾鐵塔是法國巴黎的標誌性建築，也是世界上最知名的建築結構之一。它由工程師古斯塔夫·艾菲爾設計，為1889年世界博覽會而建造。鐵塔高324米，在建成時是世界上最高的人造結構，直到1930年克萊斯勒大廈建成。每年有約700萬遊客參觀，是世界上參觀人數最多的收費景點。鐵塔每天晚上都有燈光表演，每小時閃爍5分鐘，成為巴黎夜景的重要組成部分。"
    },
    {
        id: "taipei101",
        name: "台北101",
        location: "台北, 台灣",
        rating: 4.7,
        visitors: "6 百萬人",
        image: "https://images.unsplash.com/photo-1598935898639-81586f7d2129?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        region: "asia",
        tabs: {
            scenery: "從89樓觀景台可360度環視台北市全景，夜景尤其壯觀，每到跨年煙火秀更是世界知名。晴天時可遠眺台北盆地和遠方的山脈，雨後能見度高時甚至可以看到台灣海峽。",
            architecture: "高508米，曾為世界最高建築，以其獨特的節節向上設計和巨大阻尼器聞名，象徵竹子節節高升。大樓設計融合了中國傳統元素和現代科技，能抵抗強烈地震和颱風。",
            hours: "觀景台開放時間：每日 9:00 - 22:00（最後入場時間21:15）\n購物中心：週日至週四 11:00 - 21:30，週五、週六及假日前夕 11:00 - 22:00",
            price: "成人票價：NT$600，學生及65歲以上長者：NT$540，兒童及身障人士優惠票：NT$540\n可購買快速通關票避免排隊，或與其他台北景點組合套票"
        },
        details: "台北101是台灣台北市信義區的地標性摩天大樓，高度達508米，共有101層，由李祖原建築師設計。2004年至2010年間曾是世界第一高樓。大樓內設有世界最大、最重的風阻尼器，可減緩大樓因風力或地震產生的搖晃。每年12月31日的跨年煙火秀是台北最重要的活動之一。大樓低層為高級購物中心，匯集國際精品和美食；高層則為辦公區域，頂層設有室內和戶外觀景台。台北101的設計融合了中國傳統元素和現代科技，被視為台灣經濟繁榮和技術進步的象徵。"
    },
    {
        id: "greatwall",
        name: "萬里長城",
        location: "北京, 中國",
        rating: 4.9,
        visitors: "10 百萬人",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        region: "asia",
        tabs: {
            scenery: "蜿蜒於山脈之上，四季景色各異，尤以秋季最為壯觀。長城沿線可欣賞到北京郊區的山巒疊嶂，春季山花爛漫，秋季層林盡染，冬季白雪皚皚，每個季節都有獨特的美景。",
            architecture: "始建於公元前7世紀，全長超過21,000公里，是世界上最長的城牆。長城由磚石、夯土、木材等材料建造，包括城牆、關隘、烽火台和堡壘等防禦工事，是古代軍事防禦體系的傑出代表。",
            hours: "八達嶺段：4月-10月 7:30-17:30；11月-3月 8:00-17:00\n慕田峪段：4月-10月 7:30-18:00；11月-3月 7:30-17:30\n司馬台段：全年 9:00-17:00",
            price: "八達嶺段：旺季（4月-10月）：40元人民幣；淡季（11月-3月）：35元人民幣\n慕田峪段：45元人民幣\n司馬台段：40元人民幣\n學生、老人和軍人等有相應優惠"
        },
        details: "萬里長城是中國古代的偉大防禦工程，也是世界上最長的軍事防禦設施。它東起山海關，西至嘉峪關，全長超過21,000公里，橫跨中國北部的多個省份。長城始建於春秋戰國時期（公元前7世紀），後經秦、漢、明等朝代不斷修築和擴建。現在遊客主要參觀的是明代修建的部分，其中八達嶺、慕田峪、司馬台和金山嶺等段落保存較為完好且對外開放。長城不僅是中國的國家象徵，也是世界文化遺產，每年吸引數以百萬計的遊客。登上長城，可以感受到「不到長城非好漢」的氣概，也能欣賞到北京郊區壯麗的山川景色。"
    },
    {
        id: "statue",
        name: "自由女神像",
        location: "紐約, 美國",
        rating: 4.7,
        visitors: "4.5 百萬人",
        image: "https://images.unsplash.com/photo-1492217072584-7ff26c10eb75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        region: "northamerica",
        tabs: {
            scenery: "矗立在紐約港口，可欣賞曼哈頓天際線和港口美景。從自由島上可以看到紐約市的天際線全景，包括帝國大廈、世界貿易中心一號樓等地標建築，尤其是日落時分，金色陽光照射在摩天大樓上的景色令人難忘。",
            architecture: "高93米，由法國雕塑家巴托爾迪設計，於1886年落成。女神像由銅片製成，內部有鋼鐵支架，由法國著名工程師艾菲爾設計。女神右手高舉火炬，左手捧著刻有美國獨立日期的石板。",
            hours: "每天 8:30 - 16:00（最後一班船在15:30）\n節假日期間可能會延長開放時間，冬季可能會縮短。參觀需提前預約船票。",
            price: "成人票價：23美元（包括渡輪和島嶼參觀），登頂需另外購票\n兒童（4-12歲）：12美元\n老人（62歲以上）：18美元\n美國國家公園通票持有者可免費乘船"
        },
        details: "自由女神像是美國的國家象徵，全名為「自由照耀世界」，位於紐約港口的自由島上。這座巨大的銅像由法國人民贈送給美國人民，以紀念美國獨立100週年和兩國友誼。雕像由法國雕塑家弗雷德里克·奧古斯特·巴托爾迪設計，內部鋼鐵支架由艾菲爾鐵塔的設計者古斯塔夫·艾菲爾負責。自由女神像於1886年10月28日落成，總高93米（包括基座），是美國歡迎移民的象徵。女神右手高舉火炬，象徵自由之光；左手捧著《獨立宣言》，腳下是打破的枷鎖，象徵擺脫暴政。自由女神像是美國最受歡迎的旅遊景點之一，也是聯合國教科文組織世界遺產。"
    },
    {
        id: "tajmahal",
        name: "泰姬瑪哈陵",
        location: "阿格拉, 印度",
        rating: 4.8,
        visitors: "8 百萬人",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        region: "asia",
        tabs: {
            scenery: "白色大理石在不同時間呈現不同色彩，日出和滿月時最為壯觀。清晨的泰姬瑪哈陵在朝陽照射下呈現淡粉色，正午時分潔白如雪，黃昏時分又變為淡金色。前方的倒影池將建築完美倒映，增添了景觀的魅力。",
            architecture: "由沙賈汗皇帝為紀念愛妻於1632-1653年建造，是莫臥兒建築的傑作。整個建築群由白色大理石建造，鑲嵌有寶石和半寶石。中央的陵墓由一個巨大的圓頂和四個小尖塔組成，四角有四座尖塔，整體對稱和諧。",
            hours: "日出至日落（週五閉館），夜間參觀需另行安排\n具體開放時間：6:00-18:30（4月-9月），7:00-17:30（10月-3月）",
            price: "外國遊客約1100盧比，印度公民約50盧比\n夜間參觀（僅在滿月前後五天）：750盧比\n兒童8歲以下免費"
        },
        details: "泰姬瑪哈陵是印度最著名的古蹟之一，位於北方邦阿格拉市。這座白色大理石陵墓由莫臥兒帝國第五代皇帝沙賈汗為了紀念他摯愛的妻子慕塔茲·瑪哈爾而建造，建造時間從1632年持續到1653年。泰姬瑪哈陵被譽為「愛情的象徵」，也是世界七大奇蹟之一。整個建築群由白色大理石建造，鑲嵌有寶石和半寶石，中央的陵墓由一個巨大的圓頂和四個小尖塔組成，四角有四座尖塔，整體對稱和諧。建築前方有一個長方形的水池，能夠完美地倒映出泰姬瑪哈陵的影像。泰姬瑪哈陵的建築風格融合了波斯、中亞和印度的建築元素，被認為是莫臥兒建築藝術的巔峰之作。1983年，泰姬瑪哈陵被列入聯合國教科文組織世界遺產名錄。"
    },
    {
        id: "colosseum",
        name: "羅馬競技場",
        location: "羅馬, 義大利",
        rating: 4.7,
        visitors: "7.5 百萬人",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        region: "europe",
        tabs: {
            scenery: "古羅馬帝國的象徵，周圍環繞著古羅馬廢墟，歷史氛圍濃厚。競技場位於羅馬市中心，周圍是古羅馬廣場、帕拉蒂尼山等歷史遺跡。夜晚的競技場在燈光照射下格外壯觀，是羅馬夜景的重要組成部分。",
            architecture: "建於公元70-80年，是古羅馬最大的圓形劇場，可容納5萬觀眾。競技場呈橢圓形，外牆由三層拱門組成，每層使用不同的柱式：底層為多立克柱式，中層為愛奧尼克柱式，頂層為科林斯柱式。",
            hours: "8:30 - 19:00（夏季），8:30 - 16:30（冬季）\n最後入場時間比閉館時間提前1小時。每月第一個週日免費開放。",
            price: "成人票價：16歐元，歐盟18-25歲公民半價\n羅馬通票（包括競技場、古羅馬廣場和帕拉蒂尼山）：16歐元，有效期2天\n18歲以下和65歲以上歐盟公民免費"
        },
        details: "羅馬競技場，又稱為科洛西姆(Colosseum)，是位於義大利羅馬市中心的一座橢圓形圓形劇場，也是羅馬帝國時期最具代表性的建築物之一。它始建於公元72年，由羅馬皇帝韋斯帕先開工建設，其子提圖斯在公元80年完成主體工程並舉行了為期100天的慶典。競技場最多可容納約5萬名觀眾，是古羅馬時期舉行角鬥士比賽、野獸狩獵表演、模擬海戰等公共娛樂活動的場所。競技場的建築結構非常先進，包括複雜的地下結構、升降台、排水系統和可伸縮的遮陽篷。雖然經歷了地震和石材被盜用於其他建築，競技場仍保留了原有結構的三分之一左右。1980年，羅馬競技場被列入聯合國教科文組織世界遺產名錄，也被評選為世界新七大奇蹟之一。如今，它是羅馬最重要的旅遊景點，每年吸引數百萬遊客。"
    },
    {
        id: "petra",
        name: "佩特拉古城",
        location: "馬安, 約旦",
        rating: 4.9,
        visitors: "1 百萬人",
        image: "https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        region: "asia",
        tabs: {
            scenery: "玫瑰紅色的岩石城市，尤其在日出和日落時分色彩變化豐富。佩特拉位於狹窄的峽谷之中，遊客需要穿過長約1.2公里的蛇道（Siq）才能到達著名的卡茲尼神殿。岩石的顏色隨著陽光角度變化，從淡粉色到深紅色不等。",
            architecture: "約公元前1世紀由納巴泰人開鑿而成，以精細的岩石雕刻聞名。佩特拉的建築直接從岩石中雕刻出來，而非用石塊堆砌。最著名的建築是卡茲尼神殿（Treasury），其他還有修道院、劇場、皇家墓葬等多種建築。",
            hours: "夏季 6:00 - 18:00，冬季 6:00 - 16:00\n夜間參觀：每週一、三、四晚上8:30-10:30（僅限卡茲尼神殿區域）",
            price: "一日票：50約旦第納爾，多日票有折扣\n二日票：55約旦第納爾\n三日票：60約旦第納爾\n約旦通票（Jordan Pass）包含佩特拉入場券和簽證費用"
        },
        details: "佩特拉古城是約旦最著名的考古遺址，位於約旦西南部的山谷中。這座「玫瑰紅色的城市」由納巴泰人約在公元前1世紀建造，是當時重要的商業中心。佩特拉最獨特的特點是其建築直接從粉紅色砂岩峭壁上雕刻而成，而非用石塊堆砌。遊客需要穿過一條長約1.2公里、兩側懸崖高達80米的狹窄峽谷（Siq）才能到達城市。最著名的建築是卡茲尼神殿（Treasury），其精美的立面高達43米，在陽光照射下呈現出迷人的玫瑰色。除此之外，佩特拉還有800多座紀念碑和建築，包括修道院、劇場、皇家墓葬、羅馬式建築等。佩特拉曾在公元7世紀後被遺忘，直到1812年被瑞士探險家約翰·路德維希·布克哈特重新發現。1985年，佩特拉被列入聯合國教科文組織世界遺產名錄，2007年被評選為世界新七大奇蹟之一。"
    }
];

// Multi-language support
const translations = {
    en: {
        pageTitle: "Explore Landmarks",
        backButton: "leave",
        searchTitle: "Search Landmarks Around the World",
        searchPlaceholder: "Enter landmark name, city, or country...",
        allRegions: "All Regions",
        asia: "Asia",
        europe: "Europe",
        northAmerica: "North America",
        southAmerica: "South America",
        africa: "Africa",
        oceania: "Oceania",
        searchButton: "Search",
        popularSearches: "Popular Searches:",
        popularLandmarks: "Popular Landmarks",
        mostPopular: "Most Popular",
        newest: "Newest",
        highestRated: "Highest Rated",
        loadMore: "Load More Landmarks",
        loading: "Loading...",
        noResults: "No landmarks found matching your criteria. Try different search terms.",
        scenery: "Scenery",
        architecture: "Architecture",
        hours: "Opening Hours",
        price: "Price",
        addToTrip: "Add to Trip",
        viewDetails: "View Details",
        detailedIntro: "Detailed Introduction",
        sceneryFeatures: "Scenery Features",
        architecturalFeatures: "Architectural Features",
        openingHours: "Opening Hours",
        priceInfo: "Price Information",
        close: "Close",
        annualVisitors: "Annual Visitors:",
        directFlight: "Direct Flight",
        connectingFlight: "Connecting Flight"
    },
    zh: {
        pageTitle: "探索地標",
        backButton: "返回",
        searchTitle: "搜尋世界各地地標",
        searchPlaceholder: "輸入地標名稱、城市或國家...",
        allRegions: "所有地區",
        asia: "亞洲",
        europe: "歐洲",
        northAmerica: "北美洲",
        southAmerica: "南美洲",
        africa: "非洲",
        oceania: "大洋洲",
        searchButton: "搜尋",
        popularSearches: "熱門搜尋：",
        popularLandmarks: "熱門地標",
        mostPopular: "最熱門",
        newest: "最新添加",
        highestRated: "評分最高",
        loadMore: "載入更多地標",
        loading: "載入中...",
        noResults: "沒有找到符合條件的地標。請嘗試其他搜尋條件。",
        scenery: "風景",
        architecture: "建築物",
        hours: "開放時間",
        price: "價格",
        addToTrip: "加入行程",
        viewDetails: "查看詳情",
        detailedIntro: "詳細介紹",
        sceneryFeatures: "風景特色",
        architecturalFeatures: "建築特色",
        openingHours: "開放時間",
        priceInfo: "票價資訊",
        close: "關閉",
        annualVisitors: "每年訪客：",
        directFlight: "直飛航班",
        connectingFlight: "轉機航班"
    },
    ja: {
        pageTitle: "ランドマーク探索",
        backButton: "離開",
        searchTitle: "世界各地のランドマークを検索",
        searchPlaceholder: "ランドマーク名、都市、または国を入力...",
        allRegions: "すべての地域",
        asia: "アジア",
        europe: "ヨーロッパ",
        northAmerica: "北米",
        southAmerica: "南米",
        africa: "アフリカ",
        oceania: "オセアニア",
        searchButton: "検索",
        popularSearches: "人気の検索：",
        popularLandmarks: "人気のランドマーク",
        mostPopular: "最も人気",
        newest: "最新追加",
        highestRated: "評価最高",
        loadMore: "もっと読み込む",
        loading: "読み込み中...",
        noResults: "条件に一致するランドマークが見つかりませんでした。別の検索条件をお試しください。",
        scenery: "風景",
        architecture: "建築物",
        hours: "営業時間",
        price: "価格",
        addToTrip: "旅程に追加",
        viewDetails: "詳細を見る",
        detailedIntro: "詳細紹介",
        sceneryFeatures: "風景の特徴",
        architecturalFeatures: "建築の特徴",
        openingHours: "営業時間",
        priceInfo: "料金情報",
        close: "閉じる",
        annualVisitors: "年間訪問者：",
        directFlight: "直行便",
        connectingFlight: "乗継便"
    },
    fr: {
        pageTitle: "Explorer les Monuments",
        backButton: "quitter",
        searchTitle: "Rechercher des Monuments du Monde Entier",
        searchPlaceholder: "Entrez le nom du monument, la ville ou le pays...",
        allRegions: "Toutes les Régions",
        asia: "Asie",
        europe: "Europe",
        northAmerica: "Amérique du Nord",
        southAmerica: "Amérique du Sud",
        africa: "Afrique",
        oceania: "Océanie",
        searchButton: "Rechercher",
        popularSearches: "Recherches populaires :",
        popularLandmarks: "Monuments Populaires",
        mostPopular: "Plus Populaires",
        newest: "Plus Récents",
        highestRated: "Mieux Notés",
        loadMore: "Charger Plus",
        loading: "Chargement...",
        noResults: "Aucun monument ne correspond à vos critères. Essayez d'autres termes de recherche.",
        scenery: "Paysage",
        architecture: "Architecture",
        hours: "Heures d'Ouverture",
        price: "Prix",
        addToTrip: "Ajouter à l'Itinéraire",
        viewDetails: "Voir les Détails",
        detailedIntro: "Introduction Détaillée",
        sceneryFeatures: "Caractéristiques du Paysage",
        architecturalFeatures: "Caractéristiques Architecturales",
        openingHours: "Heures d'Ouverture",
        priceInfo: "Informations sur les Prix",
        close: "Fermer",
        annualVisitors: "Visiteurs annuels :",
        directFlight: "Vol direct",
        connectingFlight: "Vol avec escale"
    },
    de: {
        pageTitle: "Sehenswürdigkeiten Erkunden",
        backButton: "verlassen",
        searchTitle: "Sehenswürdigkeiten Weltweit Suchen",
        searchPlaceholder: "Namen der Sehenswürdigkeit, Stadt oder Land eingeben...",
        allRegions: "Alle Regionen",
        asia: "Asien",
        europe: "Europa",
        northAmerica: "Nordamerika",
        southAmerica: "Südamerika",
        africa: "Afrika",
        oceania: "Ozeanien",
        searchButton: "Suchen",
        popularSearches: "Beliebte Suchen:",
        popularLandmarks: "Beliebte Sehenswürdigkeiten",
        mostPopular: "Beliebteste",
        newest: "Neueste",
        highestRated: "Bestbewertete",
        loadMore: "Mehr Laden",
        loading: "Wird geladen...",
        noResults: "Keine Sehenswürdigkeiten entsprechen Ihren Kriterien. Versuchen Sie andere Suchbegriffe.",
        scenery: "Landschaft",
        architecture: "Architektur",
        hours: "Öffnungszeiten",
        price: "Preis",
        addToTrip: "Zur Reise Hinzufügen",
        viewDetails: "Details Anzeigen",
        detailedIntro: "Detaillierte Einführung",
        sceneryFeatures: "Landschaftsmerkmale",
        architecturalFeatures: "Architektonische Merkmale",
        openingHours: "Öffnungszeiten",
        priceInfo: "Preisinformationen",
        close: "Schließen",
        annualVisitors: "Jährliche Besucher:",
        directFlight: "Direktflug",
        connectingFlight: "Verbindungsflug"
    },
    ko: {
        pageTitle: "관광지 탐험",
        backButton: "떠나다",
        searchTitle: "전 세계 관광지 검색",
        searchPlaceholder: "관광지, 도시 또는 국가 이름 입력...",
        allRegions: "모든 지역",
        asia: "아시아",
        europe: "유럽",
        northAmerica: "북아메리카",
        southAmerica: "남아메리카",
        africa: "아프리카",
        oceania: "오세아니아",
        searchButton: "검색",
        popularSearches: "인기 검색:",
        popularLandmarks: "인기 관광지",
        mostPopular: "가장 인기 있는",
        newest: "최신",
        highestRated: "평점 최고",
        loadMore: "더 보기",
        loading: "로딩 중...",
        noResults: "조건에 맞는 관광지가 없습니다. 다른 검색어를 시도해 보세요.",
        scenery: "풍경",
        architecture: "건축물",
        hours: "영업 시간",
        price: "가격",
        addToTrip: "여행에 추가",
        viewDetails: "상세 보기",
        detailedIntro: "상세 소개",
        sceneryFeatures: "풍경 특징",
        architecturalFeatures: "건축 특징",
        openingHours: "영업 시간",
        priceInfo: "가격 정보",
        close: "닫기",
        annualVisitors: "연간 방문객:",
        directFlight: "직항",
        connectingFlight: "경유"
    }

};

// Language display names
const languageNames = {
    'en': 'English',
    'zh': '中文',
    'ja': '日本語',
    'fr': 'Français',
    'de': 'Deutsch',
    'ko': '한국어'
};

// Get stored language preference or default to Chinese
let currentLang = localStorage.getItem('preferredLanguage') || 'zh';

// Update UI text based on selected language
function setLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language '${lang}' is not supported. Falling back to English.`);
        lang = 'en';
    }

    currentLang = lang;

    // Set page title
    document.title = "Saturday - " + translations[lang].pageTitle;

    // Update header elements
    document.querySelector('.back-btn span').textContent = translations[lang].backButton;
    document.querySelector('h1').textContent = translations[lang].pageTitle;

    // Update search section
    document.getElementById('search-title').textContent = translations[lang].searchTitle;
    document.getElementById('search-input').placeholder = translations[lang].searchPlaceholder;

    // Update region filter options
    const regionFilter = document.getElementById('region-filter');
    regionFilter.options[0].textContent = translations[lang].allRegions;
    regionFilter.options[1].textContent = translations[lang].asia;
    regionFilter.options[2].textContent = translations[lang].europe;
    regionFilter.options[3].textContent = translations[lang].northAmerica;
    regionFilter.options[4].textContent = translations[lang].southAmerica;
    regionFilter.options[5].textContent = translations[lang].africa;
    regionFilter.options[6].textContent = translations[lang].oceania;

    // Update search button and popular searches
    document.getElementById('search-button').textContent = translations[lang].searchButton;
    document.getElementById('popular-searches').textContent = translations[lang].popularSearches;

    // Update results title and filter buttons
    document.getElementById('results-title').textContent = translations[lang].popularLandmarks;
    document.getElementById('most-popular').textContent = translations[lang].mostPopular;
    document.getElementById('newest').textContent = translations[lang].newest;
    document.getElementById('highest-rated').textContent = translations[lang].highestRated;

    // Update load more button
    document.getElementById('load-more').textContent = translations[lang].loadMore;

    // Update language selector
    document.getElementById('current-lang').textContent = languageNames[lang] || lang;

    // Update language menu checkmarks
    document.querySelectorAll('.lang-option i').forEach(icon => {
        icon.style.visibility = 'hidden';
    });

    const selectedLangOption = document.querySelector(`.lang-option[data-lang="${lang}"] i`);
    if (selectedLangOption) {
        selectedLangOption.style.visibility = 'visible';
    }

    // Update all landmark cards with new language
    updateLandmarkCards();
}

// Update landmark cards with current language
function updateLandmarkCards() {
    document.querySelectorAll('.landmark-card').forEach(card => {
        const landmarkId = card.dataset.id;

        // Update tab buttons
        const sceneryTab = card.querySelector(`.tab-${landmarkId}.scenery`);
        const architectureTab = card.querySelector(`.tab-${landmarkId}.architecture`);
        const hoursTab = card.querySelector(`.tab-${landmarkId}.hours`);
        const priceTab = card.querySelector(`.tab-${landmarkId}.price`);

        if (sceneryTab) sceneryTab.textContent = translations[currentLang].scenery;
        if (architectureTab) architectureTab.textContent = translations[currentLang].architecture;
        if (hoursTab) hoursTab.textContent = translations[currentLang].hours;
        if (priceTab) priceTab.textContent = translations[currentLang].price;

        // Update buttons
        const addToTripBtn = card.querySelector('.add-to-trip span');
        const viewDetailsBtn = card.querySelector('.view-details');

        if (addToTripBtn) addToTripBtn.textContent = translations[currentLang].addToTrip;
        if (viewDetailsBtn) viewDetailsBtn.textContent = translations[currentLang].viewDetails;
    });
}

// Generate landmark card
function createLandmarkCard(landmark) {
    const card = document.createElement('div');
    card.className = 'landmark-card border rounded-lg shadow p-4 bg-white';
    card.dataset.region = landmark.region;
    card.dataset.id = landmark.id;

    // Translate annual visitors text
    const visitorsText = translations[currentLang].annualVisitors || "Annual visitors:";

    card.innerHTML = `
        <div class="image-container mb-2">
            <img src="${landmark.image}" alt="${landmark.name}" class="rounded-lg">
        </div>
        <h3 class="text-xl font-bold">${landmark.name}</h3>
        <p class="text-gray-600">${landmark.location}</p>
        <p class="text-yellow-500">⭐ ${landmark.rating} (${visitorsText} ${landmark.visitors})</p>

        <!-- Tab Buttons -->
        <div class="mt-3 flex gap-2">
            <button onclick="showTab('${landmark.id}', 'scenery')" class="tab-${landmark.id} scenery text-blue-600 underline">${translations[currentLang].scenery}</button>
            <button onclick="showTab('${landmark.id}', 'architecture')" class="tab-${landmark.id} architecture">${translations[currentLang].architecture}</button>
            <button onclick="showTab('${landmark.id}', 'hours')" class="tab-${landmark.id} hours">${translations[currentLang].hours}</button>
            <button onclick="showTab('${landmark.id}', 'price')" class="tab-${landmark.id} price">${translations[currentLang].price}</button>
        </div>

        <!-- Tab Content -->
        <div id="tab-${landmark.id}-scenery" class="mt-2">${landmark.tabs.scenery}</div>
        <div id="tab-${landmark.id}-architecture" class="mt-2 hidden">${landmark.tabs.architecture}</div>
        <div id="tab-${landmark.id}-hours" class="mt-2 hidden">${landmark.tabs.hours}</div>
        <div id="tab-${landmark.id}-price" class="mt-2 hidden">${landmark.tabs.price}</div>

        <!-- Action Buttons -->
        <div class="mt-3 flex gap-2">
            <button class="add-to-trip bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition duration-300 flex items-center justify-center">
                <span>${translations[currentLang].addToTrip}</span>
                <svg class="checkmark ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="display: none;">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </button>
            <button class="view-details bg-gray-200 hover:bg-gray-300 text-black px-3 py-1 rounded transition duration-300">${translations[currentLang].viewDetails}</button>
        </div>
    `;

    return card;
}

// Show tab content
function showTab(cardId, tab) {
    const tabs = ["scenery", "architecture", "hours", "price"];
    tabs.forEach(t => {
        document.getElementById(`tab-${cardId}-${t}`).classList.add("hidden");
        document.querySelector(`.tab-${cardId}.${t}`).classList.remove("underline", "text-blue-600");
    });
    document.getElementById(`tab-${cardId}-${tab}`).classList.remove("hidden");
    document.querySelector(`.tab-${cardId}.${tab}`).classList.add("underline", "text-blue-600");
}

// Show landmark details in modal
function showDetails(landmark) {
    const modal = document.getElementById('detail-modal');
    const modalContent = document.getElementById('modal-content');

    // Translate modal texts
    const detailedIntro = translations[currentLang].detailedIntro;
    const sceneryFeatures = translations[currentLang].sceneryFeatures;
    const architecturalFeatures = translations[currentLang].architecturalFeatures;
    const openingHours = translations[currentLang].openingHours;
    const priceInfo = translations[currentLang].priceInfo;
    const addToTrip = translations[currentLang].addToTrip;
    const close = translations[currentLang].close;
    const visitorsText = translations[currentLang].annualVisitors;

    modalContent.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">${landmark.name}</h2>
        <div class="image-container mb-4 h-64">
            <img src="${landmark.image}" alt="${landmark.name}" class="w-full h-full object-cover rounded-lg">
        </div>
        <p class="text-gray-600 mb-2">${landmark.location}</p>
        <p class="text-yellow-500 mb-4">⭐ ${landmark.rating} (${visitorsText} ${landmark.visitors})</p>
        <div class="mb-4">
            <h3 class="text-xl font-semibold mb-2">${detailedIntro}</h3>
            <p>${landmark.details}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h3 class="font-semibold">${sceneryFeatures}</h3>
                <p>${landmark.tabs.scenery}</p>
            </div>
            <div>
                <h3 class="font-semibold">${architecturalFeatures}</h3>
                <p>${landmark.tabs.architecture}</p>
            </div>
            <div>
                <h3 class="font-semibold">${openingHours}</h3>
                <p>${landmark.tabs.hours}</p>
            </div>
            <div>
                <h3 class="font-semibold">${priceInfo}</h3>
                <p>${landmark.tabs.price}</p>
            </div>
        </div>
        <div class="mt-6 flex justify-end">
            <button class="add-to-trip-modal bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition duration-300 flex items-center">
                <span>${addToTrip}</span>
                <svg class="checkmark-modal ml-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="display: none;">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </button>
            <button class="close-modal ml-2 bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded transition duration-300">${close}</button>
        </div>
    `;

    modal.style.display = "block";

    // Bind event to add to trip button in modal
    const addToTripModalBtn = modalContent.querySelector('.add-to-trip-modal');
    const checkmarkModal = modalContent.querySelector('.checkmark-modal');

    addToTripModalBtn.addEventListener('click', function () {
        this.classList.add('added-to-trip');
        checkmarkModal.style.display = 'inline-block';

        // Sync the update to the card button
        const landmarkId = landmark.id;
        const cardBtn = document.querySelector(`.landmark-card[data-id="${landmarkId}"] .add-to-trip`);
        const cardCheckmark = cardBtn.querySelector('.checkmark');
        cardBtn.classList.add('added-to-trip');
        cardCheckmark.style.display = 'inline-block';
    });

    // Bind close button
    const closeModalBtn = modalContent.querySelector('.close-modal');
    closeModalBtn.addEventListener('click', function () {
        modal.style.display = "none";
    });
}

// Filter landmarks based on search and region filter
function filterLandmarks() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const regionValue = document.getElementById('region-filter').value;
    const landmarksContainer = document.getElementById('landmarks-container');

    const filteredLandmarks = landmarks.filter(landmark => {
        const nameMatch = landmark.name.toLowerCase().includes(searchTerm) ||
            landmark.location.toLowerCase().includes(searchTerm);
        const regionMatch = regionValue === '' || landmark.region === regionValue;
        return nameMatch && regionMatch;
    });

    landmarksContainer.innerHTML = '';

    if (filteredLandmarks.length === 0) {
        landmarksContainer.innerHTML = `<p class="col-span-3 text-center py-8 text-gray-500">${translations[currentLang].noResults}</p>`;
    } else {
        filteredLandmarks.forEach(landmark => {
            const card = createLandmarkCard(landmark);
            landmarksContainer.appendChild(card);
        });
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    // Set language
    setLanguage(currentLang);

    // Display initial landmarks
    const landmarksContainer = document.getElementById('landmarks-container');
    landmarks.forEach(landmark => {
        const card = createLandmarkCard(landmark);
        landmarksContainer.appendChild(card);
    });

    // Bind search functionality
    document.getElementById('search-button').addEventListener('click', filterLandmarks);
    document.getElementById('search-input').addEventListener('keyup', function (e) {
        if (e.key === 'Enter') filterLandmarks();
    });
    document.getElementById('region-filter').addEventListener('change', filterLandmarks);

    // Bind popular search tags
    document.querySelectorAll('.search-tag').forEach(tag => {
        tag.addEventListener('click', function () {
            document.getElementById('search-input').value = this.textContent;
            filterLandmarks();
        });
    });

    // Bind load more button
    document.getElementById('load-more').addEventListener('click', function () {
        this.innerHTML = `<span class="animate-spin mr-2">⟳</span> ${translations[currentLang].loading}`;

        // Simulate loading delay
        setTimeout(() => {
            this.innerHTML = translations[currentLang].loadMore;
            this.disabled = true;
            this.classList.add('opacity-50', 'cursor-not-allowed');
        }, 1000);
    });

    // Bind card event delegation
    landmarksContainer.addEventListener('click', function (e) {
        // Add to trip button
        if (e.target.closest('.add-to-trip')) {
            const addBtn = e.target.closest('.add-to-trip');
            const checkmark = addBtn.querySelector('.checkmark');
            addBtn.classList.add('added-to-trip');
            checkmark.style.display = 'inline-block';
        }

        // View details button
        if (e.target.closest('.view-details')) {
            const card = e.target.closest('.landmark-card');
            const landmarkId = card.dataset.id;
            const landmark = landmarks.find(l => l.id === landmarkId);
            showDetails(landmark);
        }
    });

    // Modal close functionality
    const modal = document.getElementById('detail-modal');
    const closeButton = document.querySelector('.close-button');

    closeButton.addEventListener('click', function () {
        modal.style.display = "none";
    });

    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event from bubbling up
            const langMenu = document.getElementById('lang-menu');
            if (langMenu) {
                langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    }

    // Language selection
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (event) => {
            const lang = event.currentTarget.dataset.lang;
            if (lang) {
                setLanguage(lang);
                const langMenu = document.getElementById('lang-menu');
                if (langMenu) {
                    langMenu.style.display = 'none';
                }
            }
        });
    });

    // Close language menu when clicking elsewhere
    document.addEventListener('click', (event) => {
        const langMenu = document.getElementById('lang-menu');
        const langToggle = document.getElementById('lang-toggle');

        if (langMenu && langToggle &&
            langMenu.style.display === 'block' &&
            !langMenu.contains(event.target) &&
            !langToggle.contains(event.target)) {
            langMenu.style.display = 'none';
        }
    });
});

// Make showTab available globally
window.showTab = showTab;
