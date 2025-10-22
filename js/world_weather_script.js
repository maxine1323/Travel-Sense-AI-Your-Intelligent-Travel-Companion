// Multi-language support
const translations = {
    en: {
        pageTitle: "Global Weather",
        backButton: "leave",
        subtitle: "Check real-time weather information around the world",
        searchCity: "Search City Weather:",
        searchPlaceholder: "Enter city or country name",
        searchButton: "Search",
        popularCities: "Quick Weather Check for Popular Cities:",
        tokyo: "Tokyo",
        seoul: "Seoul",
        bangkok: "Bangkok",
        paris: "Paris",
        newYork: "New York",
        london: "London",
        sydney: "Sydney",
        singapore: "Singapore",
        loading: "Loading...",
        selectToView: "Please enter a city name or select a popular city to view weather information",
        errorMessage: "Unable to find weather information for this city. Please check spelling or try another city",
        demoNotice: "This is demo weather information, not actual meteorological data",
        humidity: "Humidity",
        wind: "Wind",
        pressure: "Pressure",
        forecast: "Weather Forecast",
        localTime: "Local Time"
    },
    zh: {
        pageTitle: "全球天氣查詢",
        backButton: "返回",
        subtitle: "查看世界各地即時天氣資訊",
        searchCity: "查詢城市天氣：",
        searchPlaceholder: "輸入城市或國家名",
        searchButton: "查詢",
        popularCities: "熱門城市快速查天氣：",
        tokyo: "東京",
        seoul: "首爾",
        bangkok: "曼谷",
        paris: "巴黎",
        newYork: "紐約",
        london: "倫敦",
        sydney: "雪梨",
        singapore: "新加坡",
        loading: "載入中...",
        selectToView: "請輸入城市名稱或選擇熱門城市以查看天氣資訊",
        errorMessage: "無法找到該城市的天氣資訊，請確認拼寫或嘗試其他城市",
        demoNotice: "此為示範用天氣資訊，非實際氣象資料",
        humidity: "濕度",
        wind: "風速",
        pressure: "氣壓",
        forecast: "未來天氣預報",
        localTime: "當地時間"
    },
    ja: {
        pageTitle: "世界の天気",
        backButton: "離開",
        subtitle: "世界中のリアルタイム天気情報をチェック",
        searchCity: "都市の天気を検索：",
        searchPlaceholder: "都市名や国名を入力",
        searchButton: "検索",
        popularCities: "人気都市の天気をすばやく確認：",
        tokyo: "東京",
        seoul: "ソウル",
        bangkok: "バンコク",
        paris: "パリ",
        newYork: "ニューヨーク",
        london: "ロンドン",
        sydney: "シドニー",
        singapore: "シンガポール",
        loading: "読み込み中...",
        selectToView: "都市名を入力するか、人気の都市を選択して天気情報を表示してください",
        errorMessage: "この都市の天気情報が見つかりません。スペルを確認するか、別の都市を試してください",
        demoNotice: "これはデモ用の天気情報であり、実際の気象データではありません",
        humidity: "湿度",
        wind: "風速",
        pressure: "気圧",
        forecast: "天気予報",
        localTime: "現地時間"
    },
    fr: {
        pageTitle: "Météo Mondiale",
        backButton: "quitter",
        subtitle: "Consultez les informations météo en temps réel du monde entier",
        searchCity: "Rechercher la météo d'une ville :",
        searchPlaceholder: "Entrez le nom d'une ville ou d'un pays",
        searchButton: "Rechercher",
        popularCities: "Vérification rapide de la météo des villes populaires :",
        tokyo: "Tokyo",
        seoul: "Séoul",
        bangkok: "Bangkok",
        paris: "Paris",
        newYork: "New York",
        london: "Londres",
        sydney: "Sydney",
        singapore: "Singapour",
        loading: "Chargement...",
        selectToView: "Veuillez entrer un nom de ville ou sélectionner une ville populaire pour voir les informations météo",
        errorMessage: "Impossible de trouver les informations météo pour cette ville. Veuillez vérifier l'orthographe ou essayer une autre ville",
        demoNotice: "Ceci est une démo d'informations météo, pas des données météorologiques réelles",
        humidity: "Humidité",
        wind: "Vent",
        pressure: "Pression",
        forecast: "Prévisions météo",
        localTime: "Heure locale"
    },
    de: {
        pageTitle: "Weltweiter Wetterbericht",
        backButton: "verlassen",
        subtitle: "Prüfen Sie Echtzeitwetterinformationen weltweit",
        searchCity: "Stadtweatersuche:",
        searchPlaceholder: "Stadt- oder Ländernamen eingeben",
        searchButton: "Suchen",
        popularCities: "Schnelle Wetterprüfung für beliebte Städte:",
        tokyo: "Tokio",
        seoul: "Seoul",
        bangkok: "Bangkok",
        paris: "Paris",
        newYork: "New York",
        london: "London",
        sydney: "Sydney",
        singapore: "Singapur",
        loading: "Wird geladen...",
        selectToView: "Bitte geben Sie einen Stadtnamen ein oder wählen Sie eine beliebte Stadt aus, um Wetterinformationen anzuzeigen",
        errorMessage: "Wetterinformationen für diese Stadt können nicht gefunden werden. Bitte überprüfen Sie die Schreibweise oder versuchen Sie es mit einer anderen Stadt",
        demoNotice: "Dies sind Demo-Wetterinformationen, keine tatsächlichen meteorologischen Daten",
        humidity: "Luftfeuchtigkeit",
        wind: "Wind",
        pressure: "Luftdruck",
        forecast: "Wettervorhersage",
        localTime: "Ortszeit"
    },
    ko: {
        pageTitle: "전 세계 날씨 보고서",
        backButton: "떠나다",
        subtitle: "전 세계 실시간 날씨 정보를 확인하세요",
        searchCity: "도시 날씨 검색:",
        searchPlaceholder: "도시 또는 국가 이름 입력",
        searchButton: "검색",
        popularCities: "인기 도시의 빠른 날씨 확인:",
        tokyo: "도쿄",
        seoul: "서울",
        bangkok: "방콕",
        paris: "파리",
        newYork: "뉴욕",
        london: "런던",
        sydney: "시드니",
        singapore: "싱가포르",
        loading: "로딩 중...",
        selectToView: "도시 이름을 입력하거나 인기 도시를 선택하여 날씨 정보를 확인하세요",
        errorMessage: "해당 도시의 날씨 정보를 찾을 수 없습니다. 철자를 확인하거나 다른 도시를 시도해 보세요.",
        demoNotice: "이것은 데모 날씨 정보이며 실제 기상 데이터가 아닙니다",
        humidity: "습도",
        wind: "바람",
        pressure: "기압",
        forecast: "일기 예보",
        localTime: "현지 시간"
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
        console.error(`Language '${lang}' is not supported. Falling back to Chinese.`);
        lang = 'zh';
    }

    currentLang = lang;

    // Store the language preference
    localStorage.setItem('preferredLanguage', lang);

    // Update page title
    document.title = "Saturday - " + translations[lang].pageTitle;
    document.querySelector('h1').textContent = translations[lang].pageTitle;
    document.querySelector('.text-indigo-200.mt-2').textContent = translations[lang].subtitle;

    // Update header elements
    document.querySelector('.back-btn span').textContent = translations[lang].backButton;

    // Update search elements
    document.querySelector('label[for="weatherSearch"]').textContent = translations[lang].searchCity;
    document.getElementById('weatherSearch').placeholder = translations[lang].searchPlaceholder;
    document.getElementById('searchBtn').textContent = translations[lang].searchButton;

    // Update popular cities section
    document.querySelector('h4.text-lg.font-medium').textContent = translations[lang].popularCities;

    // Update popular city buttons
    document.querySelector('[data-city="Tokyo"]').textContent = translations[lang].tokyo;
    document.querySelector('[data-city="Seoul"]').textContent = translations[lang].seoul;
    document.querySelector('[data-city="Bangkok"]').textContent = translations[lang].bangkok;
    document.querySelector('[data-city="Paris"]').textContent = translations[lang].paris;
    document.querySelector('[data-city="New York"]').textContent = translations[lang].newYork;
    document.querySelector('[data-city="London"]').textContent = translations[lang].london;
    document.querySelector('[data-city="Sydney"]').textContent = translations[lang].sydney;
    document.querySelector('[data-city="Singapore"]').textContent = translations[lang].singapore;

    // Update loading text
    document.querySelector('#loadingIndicator p').textContent = translations[lang].loading;

    // Update placeholder text
    document.querySelector('#noSelection p').textContent = translations[lang].selectToView;

    // Update error message
    document.querySelector('#errorMessage p').textContent = translations[lang].errorMessage;

    // Update weather information labels
    const humidityLabel = document.querySelector('#weatherInfo .text-gray-500:nth-of-type(1)');
    const windLabel = document.querySelector('#weatherInfo .text-gray-500:nth-of-type(2)');
    const pressureLabel = document.querySelector('#weatherInfo .text-gray-500:nth-of-type(3)');
    if (humidityLabel) humidityLabel.textContent = translations[lang].humidity;
    if (windLabel) windLabel.textContent = translations[lang].wind;
    if (pressureLabel) pressureLabel.textContent = translations[lang].pressure;

    // Update forecast title
    document.querySelector('#weatherInfo h3').textContent = translations[lang].forecast;

    // Update demo notice
    document.querySelector('.mt-4.text-center.text-sm p').textContent = translations[lang].demoNotice;

    // Update language button text
    document.getElementById('current-lang').textContent = languageNames[lang] || lang;

    // Update checkmarks in language menu
    document.querySelectorAll('.lang-option i').forEach(icon => {
        icon.style.visibility = 'hidden';
    });

    const selectedLangOption = document.querySelector(`.lang-option[data-lang="${lang}"] i`);
    if (selectedLangOption) {
        selectedLangOption.style.visibility = 'visible';
    }
}

// Event listeners for language selection
document.addEventListener('DOMContentLoaded', function () {
    // Initialize with stored language
    setLanguage(currentLang);

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

    // Original weather functionality
    const weatherSearch = document.getElementById('weatherSearch');
    const searchBtn = document.getElementById('searchBtn');
    const weatherInfo = document.getElementById('weatherInfo');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const noSelection = document.getElementById('noSelection');
    const errorMessage = document.getElementById('errorMessage');
    const cityName = document.getElementById('cityName');
    const weatherDesc = document.getElementById('weatherDesc');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');
    const pressure = document.getElementById('pressure');
    const weatherIcon = document.getElementById('weatherIcon');
    const forecast = document.getElementById('forecast');
    const localTime = document.getElementById('localTime');
    const popularCityBtns = document.querySelectorAll('.popular-city-btn');

    // 天氣圖標映射
    const weatherIconMap = {
        'sunny': '☀️',
        'partly_cloudy': '🌤️',
        'cloudy': '☁️',
        'overcast': '🌥️',
        'rain': '🌧️',
        'thunderstorm': '⛈️',
        'snow': '❄️',
        'fog': '🌫️',
        'clear': '🌙'
    };

    // 模擬天氣資料庫
    const weatherDatabase = {
        'tokyo': {
            name: '東京',
            country: '日本',
            temp: '22°C',
            desc: '晴時多雲',
            humidity: '65%',
            wind: '3 m/s',
            pressure: '1013 hPa',
            icon: 'partly_cloudy',
            timezone: 9,
            forecast: [
                { day: '明天', temp: '23°C', icon: 'sunny' },
                { day: '後天', temp: '24°C', icon: 'sunny' },
                { day: '週三', temp: '22°C', icon: 'partly_cloudy' },
                { day: '週四', temp: '21°C', icon: 'cloudy' },
                { day: '週五', temp: '20°C', icon: 'rain' }
            ]
        },
        'seoul': {
            name: '首爾',
            country: '韓國',
            temp: '18°C',
            desc: '多雲',
            humidity: '70%',
            wind: '4 m/s',
            pressure: '1010 hPa',
            icon: 'cloudy',
            timezone: 9,
            forecast: [
                { day: '明天', temp: '19°C', icon: 'partly_cloudy' },
                { day: '後天', temp: '20°C', icon: 'sunny' },
                { day: '週三', temp: '18°C', icon: 'cloudy' },
                { day: '週四', temp: '17°C', icon: 'rain' },
                { day: '週五', temp: '16°C', icon: 'rain' }
            ]
        },
        'bangkok': {
            name: '曼谷',
            country: '泰國',
            temp: '32°C',
            desc: '晴天',
            humidity: '75%',
            wind: '2 m/s',
            pressure: '1008 hPa',
            icon: 'sunny',
            timezone: 7,
            forecast: [
                { day: '明天', temp: '33°C', icon: 'sunny' },
                { day: '後天', temp: '32°C', icon: 'partly_cloudy' },
                { day: '週三', temp: '31°C', icon: 'thunderstorm' },
                { day: '週四', temp: '30°C', icon: 'rain' },
                { day: '週五', temp: '31°C', icon: 'partly_cloudy' }
            ]
        },
        'paris': {
            name: '巴黎',
            country: '法國',
            temp: '15°C',
            desc: '多雲',
            humidity: '80%',
            wind: '5 m/s',
            pressure: '1012 hPa',
            icon: 'cloudy',
            timezone: 2,
            forecast: [
                { day: '明天', temp: '16°C', icon: 'partly_cloudy' },
                { day: '後天', temp: '17°C', icon: 'sunny' },
                { day: '週三', temp: '15°C', icon: 'rain' },
                { day: '週四', temp: '14°C', icon: 'rain' },
                { day: '週五', temp: '16°C', icon: 'partly_cloudy' }
            ]
        },
        'new york': {
            name: '紐約',
            country: '美國',
            temp: '17°C',
            desc: '晴時多雲',
            humidity: '60%',
            wind: '6 m/s',
            pressure: '1015 hPa',
            icon: 'partly_cloudy',
            timezone: -4,
            forecast: [
                { day: '明天', temp: '18°C', icon: 'sunny' },
                { day: '後天', temp: '20°C', icon: 'sunny' },
                { day: '週三', temp: '19°C', icon: 'partly_cloudy' },
                { day: '週四', temp: '16°C', icon: 'rain' },
                { day: '週五', temp: '15°C', icon: 'cloudy' }
            ]
        },
        'london': {
            name: '倫敦',
            country: '英國',
            temp: '14°C',
            desc: '陰天',
            humidity: '85%',
            wind: '7 m/s',
            pressure: '1009 hPa',
            icon: 'overcast',
            timezone: 1,
            forecast: [
                { day: '明天', temp: '15°C', icon: 'cloudy' },
                { day: '後天', temp: '16°C', icon: 'partly_cloudy' },
                { day: '週三', temp: '14°C', icon: 'rain' },
                { day: '週四', temp: '13°C', icon: 'rain' },
                { day: '週五', temp: '15°C', icon: 'cloudy' }
            ]
        },
        'sydney': {
            name: '雪梨',
            country: '澳洲',
            temp: '24°C',
            desc: '晴天',
            humidity: '55%',
            wind: '5 m/s',
            pressure: '1016 hPa',
            icon: 'sunny',
            timezone: 10,
            forecast: [
                { day: '明天', temp: '25°C', icon: 'sunny' },
                { day: '後天', temp: '26°C', icon: 'sunny' },
                { day: '週三', temp: '23°C', icon: 'partly_cloudy' },
                { day: '週四', temp: '21°C', icon: 'cloudy' },
                { day: '週五', temp: '22°C', icon: 'partly_cloudy' }
            ]
        },
        'singapore': {
            name: '新加坡',
            country: '新加坡',
            temp: '30°C',
            desc: '多雲',
            humidity: '85%',
            wind: '3 m/s',
            pressure: '1010 hPa',
            icon: 'cloudy',
            timezone: 8,
            forecast: [
                { day: '明天', temp: '31°C', icon: 'partly_cloudy' },
                { day: '後天', temp: '30°C', icon: 'thunderstorm' },
                { day: '週三', temp: '29°C', icon: 'rain' },
                { day: '週四', temp: '30°C', icon: 'cloudy' },
                { day: '週五', temp: '31°C', icon: 'partly_cloudy' }
            ]
        }
    };

    // 添加更多城市的模擬資料
    const additionalCities = [
        { key: 'taipei', name: '台北', country: '台灣', baseTemp: 26 },
        { key: 'hong kong', name: '香港', country: '中國', baseTemp: 28 },
        { key: 'beijing', name: '北京', country: '中國', baseTemp: 20 },
        { key: 'shanghai', name: '上海', country: '中國', baseTemp: 22 },
        { key: 'dubai', name: '杜拜', country: '阿拉伯聯合大公國', baseTemp: 35 },
        { key: 'rome', name: '羅馬', country: '義大利', baseTemp: 21 },
        { key: 'berlin', name: '柏林', country: '德國', baseTemp: 16 },
        { key: 'moscow', name: '莫斯科', country: '俄羅斯', baseTemp: 8 },
        { key: 'cairo', name: '開羅', country: '埃及', baseTemp: 30 },
        { key: 'rio de janeiro', name: '里約熱內盧', country: '巴西', baseTemp: 27 }
    ];

    const weatherIcons = ['sunny', 'partly_cloudy', 'cloudy', 'overcast', 'rain', 'thunderstorm'];
    const descriptions = ['晴天', '晴時多雲', '多雲', '陰天', '雨天', '雷陣雨'];

    additionalCities.forEach(city => {
        const randomIconIndex = Math.floor(Math.random() * weatherIcons.length);
        const randomHumidity = Math.floor(Math.random() * 30) + 60;
        const randomWind = Math.floor(Math.random() * 5) + 1;
        const randomPressure = Math.floor(Math.random() * 10) + 1010;

        weatherDatabase[city.key] = {
            name: city.name,
            country: city.country,
            temp: `${city.baseTemp}°C`,
            desc: descriptions[randomIconIndex],
            humidity: `${randomHumidity}%`,
            wind: `${randomWind} m/s`,
            pressure: `${randomPressure} hPa`,
            icon: weatherIcons[randomIconIndex],
            timezone: Math.floor(Math.random() * 24) - 12,
            forecast: []
        };

        // 生成五天預報
        for (let i = 0; i < 5; i++) {
            const forecastTemp = city.baseTemp + Math.floor(Math.random() * 6) - 3;
            const forecastIconIndex = Math.floor(Math.random() * weatherIcons.length);
            const days = ['明天', '後天', '週三', '週四', '週五'];

            weatherDatabase[city.key].forecast.push({
                day: days[i],
                temp: `${forecastTemp}°C`,
                icon: weatherIcons[forecastIconIndex]
            });
        }
    });

    // 搜尋天氣函數
    function searchWeather(city) {
        if (!city) {
            alert(translations[currentLang].enterCityAlert || "請輸入城市名稱！");
            return;
        }

        // 顯示載入中
        noSelection.classList.add('hidden');
        weatherInfo.classList.add('hidden');
        errorMessage.classList.add('hidden');
        loadingIndicator.classList.remove('hidden');

        // 模擬API請求延遲
        setTimeout(() => {
            loadingIndicator.classList.add('hidden');

            // 查找城市資料（不區分大小寫）
            const cityKey = city.toLowerCase();
            const data = weatherDatabase[cityKey];

            if (data) {
                // 顯示天氣資訊
                cityName.textContent = `${data.name}, ${data.country}`;
                weatherDesc.textContent = data.desc;
                temperature.textContent = data.temp;
                humidity.textContent = data.humidity;
                wind.textContent = data.wind;
                pressure.textContent = data.pressure;

                // 設置天氣圖標
                weatherIcon.innerHTML = `<span class="text-6xl">${weatherIconMap[data.icon] || '☀️'}</span>`;

                // 顯示當地時間
                const now = new Date();
                const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
                const localNow = new Date(utc + (3600000 * data.timezone));
                const localTimeLabel = translations[currentLang].localTime || "當地時間";
                localTime.textContent = `${localTimeLabel}: ${localNow.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' })}`;

                // 清空並填充預報
                forecast.innerHTML = '';
                data.forecast.forEach(day => {
                    const dayElement = document.createElement('div');
                    dayElement.className = 'bg-white rounded-lg p-3 text-center shadow-sm';
                    dayElement.innerHTML = `
                        <div class="font-medium text-gray-700">${day.day}</div>
                        <div class="text-2xl my-2">${weatherIconMap[day.icon] || '☀️'}</div>
                        <div class="font-bold text-indigo-600">${day.temp}</div>
                    `;
                    forecast.appendChild(dayElement);
                });

                weatherInfo.classList.remove('hidden');
            } else {
                // 顯示錯誤訊息
                errorMessage.classList.remove('hidden');
            }
        }, 1000);
    }

    // 搜尋按鈕點擊事件
    searchBtn.addEventListener('click', function () {
        const city = weatherSearch.value.trim();
        searchWeather(city);
    });

    // 輸入框按Enter鍵事件
    weatherSearch.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const city = weatherSearch.value.trim();
            searchWeather(city);
        }
    });

    // 熱門城市按鈕
    popularCityBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const city = this.getAttribute('data-city');
            searchWeather(city);
        });
    });

    // 頁面初始狀態
    noSelection.classList.remove('hidden');
    weatherInfo.classList.add('hidden');
    errorMessage.classList.add('hidden');
    loadingIndicator.classList.add('hidden');
});
