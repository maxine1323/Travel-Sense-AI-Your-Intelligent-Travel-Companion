<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Travel Sense AI – 您的智慧旅行夥伴 - 航班搜尋</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body {
            background-color: #f0f4f8;
            font-family: 'Inter', 'Noto Sans TC', sans-serif;
        }
        .header {
            background-color: white;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .lang-selector {
            position: relative;
        }
        .lang-menu {
            display: none;
            position: absolute;
            right: 0;
            top: 100%;
            margin-top: 0.5rem;
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            overflow: hidden;
            z-index: 10;
            width: 150px;
        }
        .lang-menu.show {
            display: block;
        }
        .lang-option {
            padding: 0.75rem 1rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 0.9rem;
        }
        .lang-option:hover {
            background-color: #f3f4f6;
        }
        .lang-option .fa-check {
            visibility: hidden;
        }
        .lang-option.selected .fa-check {
            visibility: visible;
            color: #3b82f6;
        }
        .back-btn {
            color: #4b5563;
            transition: color 0.2s;
        }
        .back-btn:hover {
            color: #1d4ed8;
        }
        /* Custom flight card animation */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .flight-card {
            animation: fadeIn 0.5s ease-out forwards;
        }
    </style>
</head>
<body>
    <!-- Header with navigation -->
    <div class="header">
        <a href="./index.html" class="back-btn flex items-center">
            <i class="fas fa-arrow-left mr-2"></i>
            <span>Back</span>
        </a>        <h1 class="text-xl font-bold" data-translate="flight_search_title">航班搜尋</h1>
        <!-- Language selector -->
        <div class="lang-selector">
            <button class="lang-btn flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition" id="lang-toggle">
                <i class="fas fa-globe text-gray-600"></i>
                <span id="current-lang" class="font-medium text-gray-700">中文</span>
                <i class="fas fa-chevron-down text-xs text-gray-500"></i>
            </button>
            <div class="lang-menu" id="lang-menu">
                <!-- Language options will be dynamically inserted here -->
            </div>
        </div>
    </div>

    <div class="container mx-auto px-4 py-8 max-w-4xl">
        <!-- Search Form -->
        <div class="p-6 bg-white rounded-xl shadow-lg mb-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1" data-translate="from_label">出發地</label>
                    <input id="from" type="text" data-translate-placeholder="from_placeholder" placeholder="輸入機場名稱或代碼"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        list="airport-list" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1" data-translate="to_label">目的地</label>
                    <input id="to" type="text" data-translate-placeholder="to_placeholder" placeholder="輸入機場名稱或代碼"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        list="airport-list" />
                </div>
                <datalist id="airport-list"></datalist>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1" data-translate="date_label">出發日期</label>
                    <input id="date" type="date"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                </div>
            </div>
            <button id="search-btn"
                class="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <i class="fas fa-search h-5 w-5 mr-2"></i>
                <span data-translate="search_btn">查詢航班</span>
            </button>
        </div>

        <!-- Popular Routes Suggestions -->
        <div class="p-6 bg-white rounded-xl shadow-lg mb-6">
            <h3 class="text-lg font-semibold mb-4" data-translate="popular_routes_title">熱門航線</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button onclick="setRoute('TPE', 'HND')" class="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-400 transition text-center">
                    <div class="font-medium">台北 → 東京</div>
                    <div class="text-sm text-gray-500">TPE - HND</div>
                </button>
                <button onclick="setRoute('TPE', 'ICN')" class="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-400 transition text-center">
                    <div class="font-medium">台北 → 首爾</div>
                    <div class="text-sm text-gray-500">TPE - ICN</div>
                </button>
                <button onclick="setRoute('TPE', 'BKK')" class="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-400 transition text-center">
                    <div class="font-medium">台北 → 曼谷</div>
                    <div class="text-sm text-gray-500">TPE - BKK</div>
                </button>
                <button onclick="setRoute('TPE', 'SIN')" class="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-400 transition text-center">
                    <div class="font-medium">台北 → 新加坡</div>
                    <div class="text-sm text-gray-500">TPE - SIN</div>
                </button>
            </div>
        </div>
        
        <!-- Loading Indicator -->
        <div id="loading" class="hidden p-10 text-center">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
            <p class="mt-3 text-gray-600" data-translate="loading_text">正在搜尋最佳航班...</p>
        </div>

        <!-- Results -->
        <div id="result" class="hidden">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-semibold" data-translate="results_title">航班比較結果</h3>
                <div class="flex space-x-2">
                    <button id="sort-price" class="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <i class="fas fa-dollar-sign mr-1"></i>
                        <span data-translate="sort_price">價格排序</span>
                    </button>
                    <button id="sort-time" class="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <i class="fas fa-clock mr-1"></i>
                        <span data-translate="sort_time">時間排序</span>
                    </button>
                </div>
            </div>
            <div id="flights-container" class="space-y-4"></div>
            <div class="mt-6 text-xs text-gray-500 text-center">
                <p data-translate="disclaimer1">* 價格可能會因時間變動而有所不同</p>
                <p data-translate="disclaimer2">* 建議在購買前確認航空公司官網的最新資訊</p>
            </div>
        </div>

        <!-- No Results -->
        <div id="no-results" class="hidden p-10 text-center bg-white rounded-xl shadow-lg">
            <i class="fas fa-plane-slash fa-3x mx-auto text-gray-400"></i>
            <p class="mt-4 text-gray-600 font-semibold" data-translate="no_results_text">沒有找到符合條件的航班</p>
            <p class="text-gray-500 text-sm mt-1" data-translate="no_results_suggestion">請嘗試不同的日期或目的地</p>
        </div>
    </div>

    <script>
        // --- UPDATED AIRPORT DATA ---
        const airports = [
          { code: "LHR", zh: "倫敦希斯洛機場", en: "London Heathrow Airport", ja: "ロンドン・ヒースロー空港", fr: "Aéroport de Londres-Heathrow", de: "Flughafen London Heathrow", ko: "런던 히드로 공항" },
          { code: "LGW", zh: "倫敦蓋特威克機場", en: "London Gatwick Airport", ja: "ロンドン・ガトウィック空港", fr: "Aéroport de Londres-Gatwick", de: "Flughafen London Gatwick", ko: "런던 개트윅 공항" },
          { code: "CDG", zh: "巴黎戴高樂機場", en: "Paris Charles de Gaulle Airport", ja: "パリ＝シャルル・ド・ゴール空港", fr: "Aéroport Paris-Charles-de-Gaulle", de: "Flughafen Paris-Charles-de-Gaulle", ko: "파리 샤를드골 공항" },
          { code: "ORY", zh: "巴黎奧利機場", en: "Paris Orly Airport", ja: "パリ＝オルリー空港", fr: "Aéroport de Paris-Orly", de: "Flughafen Paris-Orly", ko: "파리 오를리 공항" },
          { code: "FRA", zh: "法蘭克福國際機場", en: "Frankfurt Airport", ja: "フランクフルト空港", fr: "Aéroport de Francfort", de: "Flughafen Frankfurt", ko: "프랑크푸르트 공항" },
          { code: "MUC", zh: "慕尼黑國際機場", en: "Munich Airport", ja: "ミュンヘン空港", fr: "Aéroport de Munich", de: "Flughafen München", ko: "뮌헨 공항" },
          { code: "ZRH", zh: "蘇黎世機場", en: "Zurich Airport", ja: "チューリッヒ空港", fr: "Aéroport de Zurich", de: "Flughafen Zürich", ko: "취리히 공항" },
          { code: "VIE", zh: "維也納國際機場", en: "Vienna International Airport", ja: "ウィーン国際空港", fr: "Aéroport international de Vienne", de: "Flughafen Wien-Schwechat", ko: "빈 국제공항" },
          { code: "AMS", zh: "阿姆斯特丹史基浦機場", en: "Amsterdam Schiphol Airport", ja: "アムステルダム・スキポール空港", fr: "Aéroport d'Amsterdam-Schiphol", de: "Flughafen Amsterdam Schiphol", ko: "암스테르담 스키폴 공항" },
          { code: "BRU", zh: "布魯塞爾國際機場", en: "Brussels Airport", ja: "ブリュッセル空港", fr: "Aéroport de Bruxelles", de: "Flughafen Brüssel", ko: "브뤼셀 공항" },
          { code: "MAD", zh: "馬德里巴拉哈斯機場", en: "Madrid Barajas Airport", ja: "マドリード・バラハス空港", fr: "Aéroport de Madrid-Barajas", de: "Flughafen Madrid-Barajas", ko: "마드리드 바라하스 공항" },
          { code: "BCN", zh: "巴塞隆納機場", en: "Barcelona El Prat Airport", ja: "バルセロナ＝エル・プラット空港", fr: "Aéroport de Barcelone-El Prat", de: "Flughafen Barcelona-El Prat", ko: "바르셀로나 엘프라트 공항" },
          { code: "FCO", zh: "羅馬費烏米奇諾機場", en: "Rome Fiumicino Airport", ja: "ローマ・フィウミチーノ空港", fr: "Aéroport de Rome-Fiumicino", de: "Flughafen Rom-Fiumicino", ko: "로마 피우미치노 공항" },
          { code: "MXP", zh: "米蘭馬爾彭薩機場", en: "Milan Malpensa Airport", ja: "ミラノ・マルペンサ空港", fr: "Aéroport de Milan-Malpensa", de: "Flughafen Mailand-Malpensa", ko: "밀라노 말펜사 공항" },
          { code: "ATH", zh: "雅典國際機場", en: "Athens International Airport", ja: "アテネ国際空港", fr: "Aéroport international d'Athènes", de: "Flughafen Athen", ko: "아테네 국제공항" },
          { code: "CPH", zh: "哥本哈根機場", en: "Copenhagen Airport", ja: "コペンハーゲン空港", fr: "Aéroport de Copenhague", de: "Flughafen Kopenhagen", ko: "코펜하겐 공항" },
          { code: "ARN", zh: "斯德哥爾摩阿蘭達機場", en: "Stockholm Arlanda Airport", ja: "ストックホルム・アーランダ空港", fr: "Aéroport de Stockholm-Arlanda", de: "Flughafen Stockholm-Arlanda", ko: "스톡홀름 알란다 공항" },
          { code: "OSL", zh: "奧斯陸加勒穆恩機場", en: "Oslo Gardermoen Airport", ja: "オスロ・ガーデモエン空港", fr: "Aéroport d'Oslo-Gardermoen", de: "Flughafen Oslo-Gardermoen", ko: "오슬로 가르데르모엔 공항" },
          { code: "HEL", zh: "赫爾辛基凡塔機場", en: "Helsinki-Vantaa Airport", ja: "ヘルシンキ＝ヴァンター空港", fr: "Aéroport d'Helsinki-Vantaa", de: "Flughafen Helsinki-Vantaa", ko: "헬싱키 반타 공항" },
          { code: "DUB", zh: "都柏林機場", en: "Dublin Airport", ja: "ダブリン空港", fr: "Aéroport de Dublin", de: "Flughafen Dublin", ko: "더블린 공항" },
          { code: "WAW", zh: "華沙蕭邦機場", en: "Warsaw Chopin Airport", ja: "ワルシャワ・ショパン空港", fr: "Aéroport de Varsovie-Chopin", de: "Flughafen Warschau Chopin", ko: "바르샤바 쇼팽 공항" },
          { code: "PRG", zh: "布拉格瓦茨拉夫·哈維爾機場", en: "Prague Václav Havel Airport", ja: "プラハ・ヴァーツラフ・ハヴェル空港", fr: "Aéroport Václav Havel de Prague", de: "Flughafen Prag Václav Havel", ko: "프라하 바츨라프 하벨 공항" },
          { code: "LIS", zh: "里斯本波爾特拉機場", en: "Lisbon Portela Airport", ja: "リスボン・ポルテラ空港", fr: "Aéroport de Lisbonne-Portela", de: "Flughafen Lissabon-Portela", ko: "리스본 포르텔라 공항" },
          { code: "IST", zh: "伊斯坦堡機場", en: "Istanbul Airport", ja: "イスタンブール空港", fr: "Aéroport d'Istanbul", de: "Flughafen Istanbul", ko: "이스탄불 공항" },
          { code: "SAW", zh: "伊斯坦堡薩比哈·格克琴機場", en: "Istanbul Sabiha Gökçen Airport", ja: "イスタンブール・サビハ・ギョクチェン空港", fr: "Aéroport Sabiha Gökçen d'Istanbul", de: "Flughafen Istanbul-Sabiha Gökçen", ko: "이스탄불 사비하 괵첸 공항" },
          { code: "JFK", zh: "紐約約翰·甘迺迪國際機場", en: "John F. Kennedy International Airport", ja: "ジョン・F・ケネディ国際空港", fr: "Aéroport international John-F.-Kennedy", de: "Flughafen John F. Kennedy", ko: "존 F. 케네디 국제공항" },
          { code: "EWR", zh: "紐華克自由國際機場", en: "Newark Liberty International Airport", ja: "ニューアーク・リバティー国際空港", fr: "Aéroport international Newark Liberty", de: "Flughafen Newark Liberty", ko: "뉴어크 리버티 국제공항" },
          { code: "LGA", zh: "紐約拉瓜迪亞機場", en: "LaGuardia Airport", ja: "ラガーディア空港", fr: "Aéroport de LaGuardia", de: "Flughafen LaGuardia", ko: "라과디아 공항" },
          { code: "LAX", zh: "洛杉磯國際機場", en: "Los Angeles International Airport", ja: "ロサンゼルス国際空港", fr: "Aéroport international de Los Angeles", de: "Flughafen Los Angeles", ko: "로스앤젤레스 국제공항" },
          { code: "SFO", zh: "舊金山國際機場", en: "San Francisco International Airport", ja: "サンフランシスコ国際空港", fr: "Aéroport international de San Francisco", de: "Flughafen San Francisco", ko: "샌프란시스코 국제공항" },
          { code: "SEA", zh: "西雅圖塔科馬國際機場", en: "Seattle–Tacoma International Airport", ja: "シアトル・タコマ国際空港", fr: "Aéroport international de Seattle-Tacoma", de: "Flughafen Seattle-Tacoma", ko: "시애틀 터코마 국제공항" },
          { code: "ORD", zh: "芝加哥奧黑爾國際機場", en: "Chicago O'Hare International Airport", ja: "シカゴ・オヘア国際空港", fr: "Aéroport international O'Hare de Chicago", de: "Flughafen Chicago O’Hare", ko: "시카고 오헤어 국제공항" },
          { code: "ATL", zh: "亞特蘭大哈茲菲爾德-傑克森國際機場", en: "Hartsfield–Jackson Atlanta International Airport", ja: "ハーツフィールド・ジャクソン・アトランタ国際空港", fr: "Aéroport international Hartsfield-Jackson d'Atlanta", de: "Flughafen Atlanta Hartsfield–Jackson", ko: "하츠필드 잭슨 애틀랜타 국제공항" },
          { code: "DFW", zh: "達拉斯沃斯堡國際機場", en: "Dallas/Fort Worth International Airport", ja: "ダラス・フォートワース国際空港", fr: "Aéroport international de Dallas-Fort Worth", de: "Flughafen Dallas/Fort Worth", ko: "댈러스 - 포트워스 국제공항" },
          { code: "IAH", zh: "休士頓喬治·布希洲際機場", en: "George Bush Intercontinental Airport", ja: "ジョージ・ブッシュ・インターコンチネンタル空港", fr: "Aéroport intercontinental George Bush", de: "Flughafen George Bush Intercontinental", ko: "조지 부시 인터콘티넨털 공항" },
          { code: "MIA", zh: "邁阿密國際機場", en: "Miami International Airport", ja: "マイアミ国際空港", fr: "Aéroport international de Miami", de: "Flughafen Miami", ko: "마이애미 국제공항" },
          { code: "BOS", zh: "波士頓洛根國際機場", en: "Boston Logan International Airport", ja: "ボストン・ローガン国際空港", fr: "Aéroport international Logan de Boston", de: "Flughafen Boston Logan", ko: "보스턴 로건 국제공항" },
          { code: "YYZ", zh: "多倫多皮爾森國際機場", en: "Toronto Pearson International Airport", ja: "トロント・ピアソン国際空港", fr: "Aéroport international Pearson de Toronto", de: "Flughafen Toronto Pearson", ko: "토론토 피어슨 국제공항" },
          { code: "YVR", zh: "溫哥華國際機場", en: "Vancouver International Airport", ja: "バンクーバー国際空港", fr: "Aéroport international de Vancouver", de: "Flughafen Vancouver", ko: "밴쿠버 국제공항" },
          { code: "YUL", zh: "蒙特婁皮埃爾·艾略特·杜魯多國際機場", en: "Montréal–Pierre Elliott Trudeau International Airport", ja: "モントリオール・ピエール・エリオット・トルドー国際空港", fr: "Aéroport international Pierre-Elliott-Trudeau de Montréal", de: "Flughafen Montréal–Trudeau", ko: "몬트리올 트뤼도 국제공항" },
          { code: "CUN", zh: "坎昆國際機場", en: "Cancún International Airport", ja: "カンクン国際空港", fr: "Aéroport international de Cancún", de: "Flughafen Cancún", ko: "칸쿤 국제공항" },
          { code: "MEX", zh: "墨西哥城國際機場", en: "Mexico City International Airport", ja: "メキシコシティ国際空港", fr: "Aéroport international de Mexico", de: "Flughafen Mexiko-Stadt", ko: "멕시코시티 국제공항" },
          { code: "SJO", zh: "聖荷西胡安·聖瑪麗亞國際機場", en: "Juan Santamaría International Airport", ja: "フアン・サンタマリア国際空港", fr: "Aéroport international Juan Santamaría", de: "Flughafen Juan Santamaría", ko: "후안 산타마리아 국제공항" },
          { code: "PTY", zh: "巴拿馬托庫門國際機場", en: "Tocumen International Airport", ja: "トクメン国際空港", fr: "Aéroport international de Tocumen", de: "Flughafen Tocumen", ko: "토쿠멘 국제공항" },
          { code: "GRU", zh: "聖保羅瓜魯柳斯國際機場", en: "São Paulo–Guarulhos International Airport", ja: "サンパウロ・グアルーリョス国際空港", fr: "Aéroport international de São Paulo-Guarulhos", de: "Flughafen São Paulo-Guarulhos", ko: "상파울루 과룰류스 국제공항" },
          { code: "GIG", zh: "里約熱内盧加利昂國際機場", en: "Rio de Janeiro–Galeão International Airport", ja: "リオデジャネイロ・ガレオン国際空港", fr: "Aéroport international de Rio de Janeiro-Galeão", de: "Flughafen Rio de Janeiro-Galeão", ko: "리우데자네이루 갈레앙 국제공항" },
          { code: "BSB", zh: "巴西利亞國際機場", en: "Brasília International Airport", ja: "ブラジリア国際空港", fr: "Aéroport international de Brasilia", de: "Flughafen Brasília", ko: "브라질리아 국제공항" },
          { code: "EZE", zh: "布宜諾斯艾利斯埃塞薩國際機場", en: "Buenos Aires Ezeiza International Airport", ja: "ブエノスアイレス・エセイサ国際空港", fr: "Aéroport international Ezeiza de Buenos Aires", de: "Flughafen Buenos Aires Ezeiza", ko: "부에노스아이레스 에세이사 국제공항" },
          { code: "AEP", zh: "布宜諾斯艾利斯喬治·紐伯瑞機場", en: "Aeroparque Jorge Newbery", ja: "ホルヘ・ニューベリー空港", fr: "Aéroport Jorge Newbery", de: "Flughafen Jorge Newbery", ko: "호르헤 누에베리 공항" },
          { code: "SCL", zh: "聖地牙哥阿圖羅·梅里諾·貝尼特斯國際機場", en: "Santiago Arturo Merino Benítez International Airport", ja: "サンティアゴ・アルトゥーロ・メリノ・ベニテス国際空港", fr: "Aéroport international Arturo Merino Benítez de Santiago", de: "Flughafen Santiago de Chile", ko: "산티아고 아르투로 메리노 베니테스 국제공항" },
          { code: "LIM", zh: "利馬豪爾赫·查韋斯國際機場", en: "Jorge Chávez International Airport", ja: "ホルヘ・チャベス国際空港", fr: "Aéroport international Jorge Chávez", de: "Flughafen Jorge Chávez", ko: "호르헤 차베스 국제공항" },
          { code: "BOG", zh: "波哥大埃爾多拉多國際機場", en: "El Dorado International Airport", ja: "エルドラド国際空港", fr: "Aéroport international El Dorado", de: "Flughafen El Dorado", ko: "엘도라도 국제공항" },
          { code: "UIO", zh: "基多馬里斯卡·蘇克雷國際機場", en: "Mariscal Sucre International Airport", ja: "マリスカル・スクレ国際空港", fr: "Aéroport international Mariscal Sucre", de: "Flughafen Mariscal Sucre", ko: "마리스칼 수크레 국제공항" },
          { code: "GYE", zh: "瓜亞基爾何塞·華金·德·奧爾梅多國際機場", en: "José Joaquín de Olmedo International Airport", ja: "ホセ・ホアキン・デ・オルメド国際空港", fr: "Aéroport international José Joaquín de Olmedo", de: "Flughafen José Joaquín de Olmedo", ko: "호세 호아킨 데 올메도 국제공항" },
          { code: "MVD", zh: "蒙特維多卡拉斯科國際機場", en: "Carrasco International Airport", ja: "カラスコ国際空港", fr: "Aéroport international de Carrasco", de: "Flughafen Carrasco", ko: "카라스코 국제공항" },
          { code: "ASU", zh: "亞松森西爾維奧·佩蒂羅西國際機場", en: "Silvio Pettirossi International Airport", ja: "シルビオ・ペティロッシ国際空港", fr: "Aéroport international Silvio Pettirossi", de: "Flughafen Silvio Pettirossi", ko: "실비오 페티로시 국제공항" },
          { code: "LPB", zh: "拉巴斯埃爾阿爾托國際機場", en: "El Alto International Airport", ja: "エル・アルト国際空港", fr: "Aéroport international El Alto", de: "Flughafen El Alto", ko: "엘알토 국제공항" },
          { code: "CUZ", zh: "庫斯科亞歷杭德羅·貝拉斯科·阿斯特特國際機場", en: "Alejandro Velasco Astete International Airport", ja: "アレハンドロ・ベラスコ・アステテ国際空港", fr: "Aéroport international Alejandro Velasco Astete", de: "Flughafen Alejandro Velasco Astete", ko: "알레한드로 벨라스코 아스테테 국제공항" },
          { code: "COR", zh: "科爾多瓦安布羅西奧·塔拉維亞國際機場", en: "Ambrosio L.V. Taravella International Airport", ja: "アンブロシオ・L・V・タラベラ国際空港", fr: "Aéroport international Ambrosio L.V. Taravella", de: "Flughafen Ambrosio L.V. Taravella", ko: "암브로시오 타라벨라 국제공항" },
          { code: "CAI", zh: "開羅國際機場", en: "Cairo International Airport", ja: "カイロ国際空港", fr: "Aéroport international du Caire", de: "Flughafen Kairo", ko: "카이로 국제공항" },
          { code: "JNB", zh: "約翰尼斯堡奧利弗·坦博國際機場", en: "O. R. Tambo International Airport", ja: "O・R・タンボ国際空港", fr: "Aéroport international O. R. Tambo", de: "Flughafen O. R. Tambo", ko: "O. R. 탐보 국제공항" },
          { code: "CPT", zh: "開普敦國際機場", en: "Cape Town International Airport", ja: "ケープタウン国際空港", fr: "Aéroport international du Cap", de: "Flughafen Kapstadt", ko: "케이프타운 국제공항" },
          { code: "NBO", zh: "奈洛比喬莫·肯雅塔國際機場", en: "Jomo Kenyatta International Airport", ja: "ジョモ・ケニヤッタ国際空港", fr: "Aéroport international Jomo Kenyatta", de: "Flughafen Jomo Kenyatta", ko: "조모 케냐타 국제공항" },
          { code: "ADD", zh: "亞的斯亞貝巴博萊國際機場", en: "Addis Ababa Bole International Airport", ja: "アディスアベバ・ボレ国際空港", fr: "Aéroport international de Bole", de: "Flughafen Addis Abeba Bole", ko: "아디스아바바 볼레 국제공항" },
          { code: "LOS", zh: "拉各斯穆爾塔拉·穆罕默德國際機場", en: "Murtala Muhammed International Airport", ja: "ムルタラ・ムハンマド国際空港", fr: "Aéroport international Murtala Muhammed", de: "Flughafen Murtala Muhammed", ko: "무르탈라 무함마드 국제공항" },
          { code: "CMN", zh: "卡薩布蘭卡穆罕默德五世國際機場", en: "Mohammed V International Airport", ja: "ムハンマド5世国際空港", fr: "Aéroport international Mohammed V", de: "Flughafen Mohammed V", ko: "모하메드 5세 국제공항" },
          { code: "TUN", zh: "突尼斯迦太基國際機場", en: "Tunis–Carthage International Airport", ja: "チュニス・カルタゴ国際空港", fr: "Aéroport international de Tunis-Carthage", de: "Flughafen Tunis–Karthago", ko: "튀니스 카르타고 국제공항" },
          { code: "ACC", zh: "阿克拉科托卡國際機場", en: "Kotoka International Airport", ja: "コトカ国際空港", fr: "Aéroport international de Kotoka", de: "Flughafen Kotoka", ko: "코토카 국제공항" },
          { code: "ABJ", zh: "阿比讓費利克斯·烏弗埃-博瓦尼國際機場", en: "Félix Houphouët-Boigny International Airport", ja: "フェリックス・ウフエ＝ボワニ国際空港", fr: "Aéroport international Félix Houphouët-Boigny", de: "Flughafen Félix Houphouët-Boigny", ko: "펠릭스 우푸에부아니 국제공항" },
          { code: "DSS", zh: "達喀爾布萊斯·迪亞涅國際機場", en: "Blaise Diagne International Airport", ja: "ブレーズ・ジャーニュ国際空港", fr: "Aéroport international Blaise Diagne", de: "Flughafen Blaise Diagne", ko: "블레즈 디아뉴 국제공항" },
          { code: "HRE", zh: "哈拉雷羅伯特·穆加貝國際機場", en: "Robert Gabriel Mugabe International Airport", ja: "ロバート・ガブリエル・ムガベ国際空港", fr: "Aéroport international Robert Gabriel Mugabe", de: "Flughafen Robert Gabriel Mugabe", ko: "로버트 가브리엘 무가베 국제공항" },
          { code: "DAR", zh: "達累斯薩拉姆朱利葉斯·尼雷爾國際機場", en: "Julius Nyerere International Airport", ja: "ジュリウス・ニエレレ国際空港", fr: "Aéroport international Julius Nyerere", de: "Flughafen Julius Nyerere", ko: "줄리어스 니에레레 국제공항" },
          { code: "EBB", zh: "恩德培國際機場", en: "Entebbe International Airport", ja: "エンテベ国際空港", fr: "Aéroport international d'Entebbe", de: "Flughafen Entebbe", ko: "엔테베 국제공항" },
          { code: "SEZ", zh: "塞席爾國際機場", en: "Seychelles International Airport", ja: "セーシェル国際空港", fr: "Aéroport international des Seychelles", de: "Flughafen Seychellen", ko: "세이셸 국제공항" },
          { code: "MRU", zh: "模里西斯西沃薩古爾·拉姆古蘭國際機場", en: "Sir Seewoosagur Ramgoolam International Airport", ja: "サー・シウサガル・ラングーラム国際空港", fr: "Aéroport international Sir Seewoosagur Ramgoolam", de: "Flughafen Sir Seewoosagur Ramgoolam", ko: "시우사구르 람굴람 국제공항" },
          { code: "PEK", zh: "北京首都國際機場", en: "Beijing Capital International Airport", ja: "北京首都国際空港", fr: "Aéroport international de Pékin-Capitale", de: "Flughafen Peking Hauptstadt", ko: "베이징 수도 국제공항" },
          { code: "PKX", zh: "北京大興國際機場", en: "Beijing Daxing International Airport", ja: "北京大興国際空港", fr: "Aéroport international de Pékin-Daxing", de: "Flughafen Peking Daxing", ko: "베이징 다싱 국제공항" },
          { code: "HKG", zh: "香港國際機場", en: "Hong Kong International Airport", ja: "香港国際空港", fr: "Aéroport international de Hong Kong", de: "Flughafen Hongkong", ko: "홍콩 국제공항" },
          { code: "TPE", zh: "台北桃園國際機場", en: "Taipei Taoyuan International Airport", ja: "台北桃園国際空港", fr: "Aéroport international de Taipei Taoyuan", de: "Flughafen Taipeh Taoyuan", ko: "타이베이 타오위안 국제공항" },
          { code: "TSA", zh: "台北松山機場", en: "Taipei Songshan Airport", ja: "台北松山空港", fr: "Aéroport de Taipei Songshan", de: "Flughafen Taipeh Songshan", ko: "타이베이 송산 공항" },
          { code: "KHH", zh: "高雄國際機場", en: "Kaohsiung International Airport", ja: "高雄国際空港", fr: "Aéroport international de Kaohsiung", de: "Flughafen Kaohsiung", ko: "가오슝 국제공항" },
          { code: "NRT", zh: "東京成田國際機場", en: "Tokyo Narita International Airport", ja: "成田国際空港", fr: "Aéroport international de Tokyo Narita", de: "Flughafen Tokio Narita", ko: "도쿄 나리타 국제공항" },
          { code: "HND", zh: "東京羽田國際機場", en: "Tokyo Haneda Airport", ja: "東京羽田空港", fr: "Aéroport de Tokyo Haneda", de: "Flughafen Tokio Haneda", ko: "도쿄 하네다 공항" },
          { code: "ICN", zh: "首爾仁川國際機場", en: "Seoul Incheon International Airport", ja: "ソウル仁川国際空港", fr: "Aéroport international de Séoul Incheon", de: "Flughafen Seoul Incheon", ko: "서울 인천 국제공항" },
          { code: "GMP", zh: "首爾金浦國際機場", en: "Seoul Gimpo International Airport", ja: "ソウル金浦国際空港", fr: "Aéroport international de Gimpo", de: "Flughafen Gimpo", ko: "서울 김포 국제공항" },
          { code: "PVG", zh: "上海浦東國際機場", en: "Shanghai Pudong International Airport", ja: "上海浦東国際空港", fr: "Aéroport international de Shanghai Pudong", de: "Flughafen Shanghai Pudong", ko: "상하이 푸둥 국제공항" },
          { code: "SHA", zh: "上海虹橋國際機場", en: "Shanghai Hongqiao International Airport", ja: "上海虹橋国際空港", fr: "Aéroport international de Shanghai Hongqiao", de: "Flughafen Shanghai Hongqiao", ko: "상하이 홍차오 국제공항" },
          { code: "CAN", zh: "廣州白雲國際機場", en: "Guangzhou Baiyun International Airport", ja: "広州白雲国際空港", fr: "Aéroport international de Canton Baiyun", de: "Flughafen Guangzhou Baiyun", ko: "광저우 바이윈 국제공항" },
          { code: "SZX", zh: "深圳寶安國際機場", en: "Shenzhen Bao'an International Airport", ja: "深圳宝安国際空港", fr: "Aéroport international de Shenzhen Bao'an", de: "Flughafen Shenzhen Bao'an", ko: "선전 바오안 국제공항" },
          { code: "BKK", zh: "曼谷素萬那普國際機場", en: "Bangkok Suvarnabhumi Airport", ja: "バンコクスワンナプーム空港", fr: "Aéroport de Bangkok Suvarnabhumi", de: "Flughafen Bangkok Suvarnabhumi", ko: "방콕 수완나품 공항" },
          { code: "DMK", zh: "曼谷廊曼國際機場", en: "Don Mueang International Airport", ja: "ドンムアン国際空港", fr: "Aéroport international Don Mueang", de: "Flughafen Don Mueang", ko: "돈므앙 국제공항" },
          { code: "SIN", zh: "新加坡樟宜國際機場", en: "Singapore Changi Airport", ja: "シンガポールチャンギ空港", fr: "Aéroport de Singapour Changi", de: "Flughafen Singapur Changi", ko: "싱가포르 창이공항" },
          { code: "DEL", zh: "德里英迪拉·甘地國際機場", en: "Indira Gandhi International Airport", ja: "インディラ・ガンディー国際空港", fr: "Aéroport international Indira Gandhi", de: "Flughafen Indira Gandhi", ko: "인디라 간디 국제공항" },
          { code: "BOM", zh: "孟買查特拉帕提·希瓦吉國際機場", en: "Chhatrapati Shivaji Maharaj International Airport", ja: "チャトラパティ・シヴァージー・マハーラージ国際空港", fr: "Aéroport international Chhatrapati Shivaji", de: "Flughafen Chhatrapati Shivaji Maharaj", ko: "차트라파티 시바지 마하라지 국제공항" },
          { code: "KUL", zh: "吉隆坡國際機場", en: "Kuala Lumpur International Airport", ja: "クアラルンプール国際空港", fr: "Aéroport international de Kuala Lumpur", de: "Flughafen Kuala Lumpur", ko: "쿠알라룸푸르 국제공항" },
          { code: "CGK", zh: "雅加達蘇加諾–哈達國際機場", en: "Soekarno–Hatta International Airport", ja: "スカルノ・ハッタ国際空港", fr: "Aéroport international Soekarno-Hatta", de: "Flughafen Soekarno-Hatta", ko: "수카르노 하타 국제공항" },
          { code: "MNL", zh: "馬尼拉尼諾·阿基諾國際機場", en: "Ninoy Aquino International Airport", ja: "ニノイ・アキノ国際空港", fr: "Aéroport international Ninoy Aquino", de: "Flughafen Ninoy Aquino", ko: "니노이 아키노 국제공항" },
          { code: "HAN", zh: "河內內排國際機場", en: "Noi Bai International Airport", ja: "ノイバイ国際空港", fr: "Aéroport international de Noi Bai", de: "Flughafen Noi Bai", ko: "노이바이 국제공항" },
          { code: "SGN", zh: "胡志明新山一國際機場", en: "Tan Son Nhat International Airport", ja: "タンソンニャット国際空港", fr: "Aéroport international Tan Son Nhat", de: "Flughafen Tan Son Nhat", ko: "떤선녓 국제공항" },
          { code: "DPS", zh: "峇里伍拉·萊國際機場", en: "Ngurah Rai International Airport (Bali)", ja: "ングラ・ライ国際空港", fr: "Aéroport international Ngurah Rai", de: "Flughafen Ngurah Rai", ko: "응우라라이 국제공항" },
          { code: "DOH", zh: "杜哈哈馬德國際機場", en: "Hamad International Airport", ja: "ハマド国際空港", fr: "Aéroport international Hamad", de: "Flughafen Hamad", ko: "하마드 국제공항" },
          { code: "DXB", zh: "杜拜國際機場", en: "Dubai International Airport", ja: "ドバイ国際空港", fr: "Aéroport international de Dubaï", de: "Flughafen Dubai", ko: "두바이 국제공항" },
          { code: "AUH", zh: "阿布達比國際機場", en: "Abu Dhabi International Airport", ja: "アブダビ国際空港", fr: "Aéroport international d'Abou Dabi", de: "Flughafen Abu Dhabi", ko: "아부다비 국제공항" },
          { code: "RUH", zh: "利雅得哈立德國王國際機場", en: "King Khalid International Airport", ja: "キング・ハーリド国際空港", fr: "Aéroport international King Khalid", de: "Flughafen König Khalid", ko: "킹 칼리드 국제공항" },
          { code: "AMM", zh: "安曼阿麗亞王后國際機場", en: "Queen Alia International Airport", ja: "クィーンアリア国際空港", fr: "Aéroport international Queen Alia", de: "Flughafen Queen Alia", ko: "퀸 알리아 국제공항" },
          { code: "SYD", zh: "雪梨機場", en: "Sydney Airport", ja: "シドニー空港", fr: "Aéroport de Sydney", de: "Flughafen Sydney", ko: "시드니 공항" }
        ];

        const translations = {
            en: {
                flight_search_title: "Flight Search",
                back_to_main: "leave",
                from_label: "From",
                to_label: "To",
                date_label: "Departure Date",
                from_placeholder: "Enter airport name or code",
                to_placeholder: "Enter airport name or code",
                search_btn: "Search Flights",
                popular_routes_title: "Popular Routes",
                loading_text: "Searching for the best flights...",
                results_title: "Flight Comparison Results",
                sort_price: "Sort by Price",
                sort_time: "Sort by Time",
                no_results_text: "No flights found for your criteria",
                no_results_suggestion: "Please try a different date or destination",
                disclaimer1: "* Prices may vary based on availability.",
                disclaimer2: "* Please confirm the latest information on the airline's official website before purchasing.",
                language_name: "English"
            },
            zh: {
                flight_search_title: "航班搜尋",
                back_to_main: "返回",
                from_label: "出發地",
                to_label: "目的地",
                date_label: "出發日期",
                from_placeholder: "輸入機場名稱或代碼",
                to_placeholder: "輸入機場名稱或代碼",
                search_btn: "查詢航班",
                popular_routes_title: "熱門航線",
                loading_text: "正在搜尋最佳航班...",
                results_title: "航班比較結果",
                sort_price: "價格排序",
                sort_time: "時間排序",
                no_results_text: "沒有找到符合條件的航班",
                no_results_suggestion: "請嘗試不同的日期或目的地",
                disclaimer1: "* 價格可能會因時間變動而有所不同",
                disclaimer2: "* 建議在購買前確認航空公司官網的最新資訊",
                language_name: "中文"
            },
            ja: {
                flight_search_title: "フライト検索",
                back_to_main: "離開",
                from_label: "出発地",
                to_label: "目的地",
                date_label: "出発日",
                from_placeholder: "空港名またはコードを入力",
                to_placeholder: "空港名またはコードを入力",
                search_btn: "フライトを検索",
                popular_routes_title: "人気の路線",
                loading_text: "最適なフライトを検索中...",
                results_title: "フライト比較結果",
                sort_price: "価格順",
                sort_time: "時間順",
                no_results_text: "条件に合うフライトが見つかりませんでした",
                no_results_suggestion: "別の日付または目的地をお試しください",
                disclaimer1: "* 価格は空席状況により変動する場合があります。",
                disclaimer2: "* ご購入前に、航空会社の公式サイトで最新情報をご確認ください。",
                language_name: "日本語"
            },
             fr: {
                flight_search_title: "Recherche de vols",
                back_to_main: "quitter",
                from_label: "De",
                to_label: "À",
                date_label: "Date de départ",
                from_placeholder: "Entrez le nom ou le code de l'aéroport",
                to_placeholder: "Entrez le nom ou le code de l'aéroport",
                search_btn: "Rechercher des vols",
                popular_routes_title: "Itinéraires populaires",
                loading_text: "Recherche des meilleurs vols...",
                results_title: "Résultats de la comparaison de vols",
                sort_price: "Trier par prix",
                sort_time: "Trier par heure",
                no_results_text: "Aucun vol trouvé pour vos critères",
                no_results_suggestion: "Veuillez essayer une autre date ou destination",
                disclaimer1: "* Les prix peuvent varier en fonction de la disponibilité.",
                disclaimer2: "* Veuillez confirmer les dernières informations sur le site officiel de la compagnie aérienne avant d'acheter.",
                language_name: "Français"
            },
            de: {
                flight_search_title: "Flugsuche",
                back_to_main: "verlassen",
                from_label: "Von",
                to_label: "Nach",
                date_label: "Abflugdatum",
                from_placeholder: "Flughafenname oder -code eingeben",
                to_placeholder: "Flughafenname oder -code eingeben",
                search_btn: "Flüge suchen",
                popular_routes_title: "Beliebte Routen",
                loading_text: "Suche nach den besten Flügen...",
                results_title: "Flugvergleichsergebnisse",
                sort_price: "Nach Preis sortieren",
                sort_time: "Nach Zeit sortieren",
                no_results_text: "Keine Flüge für Ihre Kriterien gefunden",
                no_results_suggestion: "Bitte versuchen Sie ein anderes Datum oder Ziel",
                disclaimer1: "* Die Preise können je nach Verfügbarkeit variieren.",
                disclaimer2: "* Bitte bestätigen Sie die neuesten Informationen vor dem Kauf auf der offiziellen Website der Fluggesellschaft.",
                language_name: "Deutsch"
            },
            ko: {
                flight_search_title: "항공편 검색",
                back_to_main: "떠나다",
                from_label: "출발지",
                to_label: "도착지",
                date_label: "출발일",
                from_placeholder: "공항 이름 또는 코드 입력",
                to_placeholder: "공항 이름 또는 코드 입력",
                search_btn: "항공편 검색",
                popular_routes_title: "인기 노선",
                loading_text: "최적의 항공편을 검색 중...",
                results_title: "항공편 비교 결과",
                sort_price: "가격순 정렬",
                sort_time: "시간순 정렬",
                no_results_text: "조건에 맞는 항공편을 찾을 수 없습니다",
                no_results_suggestion: "다른 날짜나 목적지를 시도해 보세요",
                disclaimer1: "* 가격은 이용 가능 여부에 따라 달라질 수 있습니다.",
                disclaimer2: "* 구매하기 전에 항공사 공식 웹사이트에서 최신 정보를 확인하세요.",
                language_name: "한국어"
            }
        };
        
        // --- SCRIPT LOGIC ---
        let currentLang = 'zh';
        let currentFlights = [];
        let priceSortAsc = true;
        let timeSortAsc = true;

        const langToggle = document.getElementById('lang-toggle');
        const langMenu = document.getElementById('lang-menu');
        const airportDatalist = document.getElementById('airport-list');
        const searchBtn = document.getElementById('search-btn');
        const loadingDiv = document.getElementById('loading');
        const resultDiv = document.getElementById('result');
        const noResultsDiv = document.getElementById('no-results');
        const flightsContainer = document.getElementById('flights-container');
        const fromInput = document.getElementById('from');
        const toInput = document.getElementById('to');
        const dateInput = document.getElementById('date');

        function populateDatalist() {
            airportDatalist.innerHTML = '';
            airports.forEach(airport => {
                const option = document.createElement('option');
                option.value = `${airport[currentLang]} (${airport.code})`;
                airportDatalist.appendChild(option);
            });
        }
        
        function updateUIText() {
            const translation = translations[currentLang];
            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.getAttribute('data-translate');
                if (translation[key]) {
                    el.textContent = translation[key];
                }
            });

            document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
                const key = el.getAttribute('data-translate-placeholder');
                if (translation[key]) {
                    el.placeholder = translation[key];
                }
            });
            document.getElementById('current-lang').textContent = translation.language_name;
        }

        function setupLangMenu() {
            langMenu.innerHTML = '';
            Object.keys(translations).forEach(langCode => {
                const option = document.createElement('div');
                option.className = 'lang-option';
                if(langCode === currentLang) option.classList.add('selected');
                option.dataset.lang = langCode;
                option.innerHTML = `<i class="fas fa-check"></i> ${translations[langCode].language_name}`;
                option.addEventListener('click', () => {
                    currentLang = langCode;
                    updateUIText();
                    populateDatalist();
                    setupLangMenu(); // Re-render menu to update selection state
                    langMenu.classList.remove('show');
                });
                langMenu.appendChild(option);
            });
        }
        
        function searchFlights() {
            const fromValue = fromInput.value;
            const toValue = toInput.value;
            const dateValue = dateInput.value;

            if (!fromValue || !toValue || !dateValue) {
                alert(currentLang === 'zh' ? '請填寫所有欄位' : 'Please fill in all fields');
                return;
            }

            loadingDiv.style.display = 'block';
            resultDiv.style.display = 'none';
            noResultsDiv.style.display = 'none';

            setTimeout(() => {
                loadingDiv.style.display = 'none';
                
                // Simulate API call - generate mock data
                const fromCode = getCodeFromInput(fromValue);
                const toCode = getCodeFromInput(toValue);
                
                if (Math.random() > 0.1 && fromCode && toCode) { // 90% chance of finding flights
                    currentFlights = generateMockFlights(fromCode, toCode);
                    displayFlights(currentFlights);
                    resultDiv.style.display = 'block';
                } else {
                    noResultsDiv.style.display = 'block';
                }
            }, 1500);
        }

        function getCodeFromInput(inputValue) {
            if (!inputValue) return null;
            const match = inputValue.match(/\(([^)]+)\)$/);
            if (match) return match[1];
            
            const airport = airports.find(a => Object.values(a).some(val => typeof val === 'string' && val.toLowerCase().includes(inputValue.toLowerCase())));
            return airport ? airport.code : null;
        }

        function generateMockFlights(from, to) {
            const flights = [];
            const count = Math.floor(Math.random() * 5) + 3; // 3 to 7 flights
            const airlines = ["China Airlines", "EVA Air", "Starlux Airlines", "Japan Airlines", "Korean Air"];
            const fromAirport = airports.find(a => a.code === from);
            const toAirport = airports.find(a => a.code === to);

            for (let i = 0; i < count; i++) {
                const departureHour = Math.floor(Math.random() * 14) + 6; // 06:00 - 19:00
                const departureMinute = Math.random() > 0.5 ? 30 : 0;
                const durationHours = Math.floor(Math.random() * 3) + 2; // 2-4 hours duration
                const durationMinutes = Math.floor(Math.random() * 6) * 10;
                
                const departureTime = new Date(`1970-01-01T${String(departureHour).padStart(2, '0')}:${String(departureMinute).padStart(2, '0')}:00`);
                const arrivalTime = new Date(departureTime.getTime() + (durationHours * 60 + durationMinutes) * 60000);

                flights.push({
                    airline: airlines[Math.floor(Math.random() * airlines.length)],
                    from: fromAirport.code,
                    fromCity: fromAirport[currentLang].split(" ")[0],
                    to: toAirport.code,
                    toCity: toAirport[currentLang].split(" ")[0],
                    departure: `${String(departureHour).padStart(2, '0')}:${String(departureMinute).padStart(2, '0')}`,
                    arrival: `${String(arrivalTime.getUTCHours()).padStart(2, '0')}:${String(arrivalTime.getUTCMinutes()).padStart(2, '0')}`,
                    duration: `${durationHours}h ${durationMinutes}m`,
                    price: Math.floor(Math.random() * 15000) + 5000,
                    stops: Math.random() > 0.8 ? 1 : 0
                });
            }
            return flights;
        }

        function displayFlights(flights) {
            flightsContainer.innerHTML = '';
            flights.forEach(flight => {
                const flightCard = document.createElement('div');
                flightCard.className = 'flight-card bg-white p-4 rounded-lg shadow-md border flex flex-col md:flex-row items-center justify-between gap-4';
                
                flightCard.innerHTML = `
                    <div class="flex items-center gap-4 w-full md:w-1/4">
                        <i class="fas fa-plane-departure text-2xl text-blue-500"></i>
                        <div>
                            <div class="font-bold text-lg">${flight.airline}</div>
                            <div class="text-sm text-gray-500">${flight.stops === 0 ? (currentLang === 'zh' ? '直飛' : 'Direct') : `1 ${currentLang === 'zh' ? '站' : 'Stop'}`}</div>
                        </div>
                    </div>
                    <div class="flex items-center justify-between w-full md:w-1/2">
                        <div class="text-center">
                            <div class="text-xl font-semibold">${flight.departure}</div>
                            <div class="text-sm text-gray-600">${flight.from}</div>
                        </div>
                        <div class="text-center text-gray-500 flex-grow">
                            <div class="text-xs">${flight.duration}</div>
                            <div class="w-full h-px bg-gray-300 relative my-1">
                                <i class="fas fa-circle text-blue-500 text-xs absolute -left-1 -top-1"></i>
                                <i class="fas fa-circle text-blue-500 text-xs absolute -right-1 -top-1"></i>
                            </div>
                            <div class="text-xs">${flight.fromCity} → ${flight.toCity}</div>
                        </div>
                        <div class="text-center">
                            <div class="text-xl font-semibold">${flight.arrival}</div>
                            <div class="text-sm text-gray-600">${flight.to}</div>
                        </div>
                    </div>
                    <div class="text-center w-full mt-4 md:mt-0 md:w-1/4 md:text-right">
                         <div class="text-2xl font-bold text-red-500">NT$ ${flight.price.toLocaleString()}</div>
                         <button class="mt-2 w-full md:w-auto bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition text-sm font-semibold">${currentLang === 'zh' ? '選擇' : 'Select'}</button>
                    </div>
                `;
                flightsContainer.appendChild(flightCard);
            });
        }
        
        window.setRoute = (fromCode, toCode) => {
            const fromAirport = airports.find(a => a.code === fromCode);
            const toAirport = airports.find(a => a.code === toCode);
            if (fromAirport && toAirport) {
                fromInput.value = `${fromAirport[currentLang]} (${fromCode})`;
                toInput.value = `${toAirport[currentLang]} (${toCode})`;
            }
        }

        // Event Listeners
        document.addEventListener('DOMContentLoaded', () => {
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const dd = String(today.getDate()).padStart(2, '0');
            dateInput.value = `${yyyy}-${mm}-${dd}`;
            dateInput.min = `${yyyy}-${mm}-${dd}`;

            updateUIText();
            populateDatalist();
            setupLangMenu();
        });

        langToggle.addEventListener('click', () => {
            langMenu.classList.toggle('show');
        });

        document.addEventListener('click', (e) => {
            if (!langToggle.contains(e.target) && !langMenu.contains(e.target)) {
                langMenu.classList.remove('show');
            }
        });
        
        searchBtn.addEventListener('click', searchFlights);

        document.getElementById('sort-price').addEventListener('click', () => {
            currentFlights.sort((a, b) => priceSortAsc ? a.price - b.price : b.price - a.price);
            priceSortAsc = !priceSortAsc;
            displayFlights(currentFlights);
        });

        document.getElementById('sort-time').addEventListener('click', () => {
            currentFlights.sort((a, b) => {
                const timeA = a.departure.replace(':', '');
                const timeB = b.departure.replace(':', '');
                return timeSortAsc ? timeA - timeB : timeB - timeA;
            });
            timeSortAsc = !timeSortAsc;
            displayFlights(currentFlights);
        });
    </script>
</body>
</html>


