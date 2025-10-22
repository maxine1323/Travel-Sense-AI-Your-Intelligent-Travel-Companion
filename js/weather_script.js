// Multi-language support
const translations = {
    en: {
        pageTitle: "Taiwan Weather",
        backButton: "leave",
        subtitle: "Select a city to view real-time weather information",
        selectCity: "Select City:",
        pleaseSelect: "Please select a city",
        loading: "Loading...",
        selectToView: "Please select a city to view weather information",
        demoNotice: "This is demo weather information, not actual meteorological data",
        humidity: "Humidity",
        wind: "Wind",
        forecast: "Weather Forecast",
        tomorrow: "Tomorrow",
        dayAfter: "Day After",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        sunny: "Sunny",
        mostlySunny: "Mostly Sunny",
        partlyCloudy: "Partly Cloudy",
        cloudy: "Cloudy",
        lightRain: "Light Rain",
        thunderstorms: "Thunderstorms",
        mostlyCloudy: "Mostly Cloudy"
    },
    zh: {
        pageTitle: "台灣天氣查詢",
        backButton: "返回",
        subtitle: "選擇縣市查看即時天氣資訊",
        selectCity: "選擇縣市：",
        pleaseSelect: "請選擇縣市",
        loading: "載入中...",
        selectToView: "請選擇縣市以查看天氣資訊",
        demoNotice: "此為示範用天氣資訊，非實際氣象資料",
        humidity: "濕度",
        wind: "風速",
        forecast: "未來天氣預報",
        tomorrow: "明天",
        dayAfter: "後天",
        wednesday: "週三",
        thursday: "週四",
        friday: "週五",
        sunny: "晴天",
        mostlySunny: "晴時多雲",
        partlyCloudy: "多雲",
        cloudy: "陰天",
        lightRain: "短暫雨",
        thunderstorms: "雷陣雨",
        mostlyCloudy: "多雲時晴"
    },
    ja: {
        pageTitle: "台湾の天気",
        backButton: "離開",
        subtitle: "都市を選択してリアルタイムの天気情報を表示",
        selectCity: "都市を選択：",
        pleaseSelect: "都市を選択してください",
        loading: "読み込み中...",
        selectToView: "天気情報を表示するには都市を選択してください",
        demoNotice: "これはデモ用の天気情報であり、実際の気象データではありません",
        humidity: "湿度",
        wind: "風速",
        forecast: "天気予報",
        tomorrow: "明日",
        dayAfter: "明後日",
        wednesday: "水曜日",
        thursday: "木曜日",
        friday: "金曜日",
        sunny: "晴れ",
        mostlySunny: "晴れ時々曇り",
        partlyCloudy: "曇り",
        cloudy: "曇天",
        lightRain: "小雨",
        thunderstorms: "雷雨",
        mostlyCloudy: "曇り時々晴れ"
    },
    fr: {
        pageTitle: "Météo de Taiwan",
        backButton: "quitter",
        subtitle: "Sélectionnez une ville pour voir les informations météo en temps réel",
        selectCity: "Sélectionner une ville :",
        pleaseSelect: "Veuillez sélectionner une ville",
        loading: "Chargement...",
        selectToView: "Veuillez sélectionner une ville pour voir les informations météo",
        demoNotice: "Ceci est une démo, pas des données météorologiques réelles",
        humidity: "Humidité",
        wind: "Vent",
        forecast: "Prévisions météo",
        tomorrow: "Demain",
        dayAfter: "Après-demain",
        wednesday: "Mercredi",
        thursday: "Jeudi",
        friday: "Vendredi",
        sunny: "Ensoleillé",
        mostlySunny: "Plutôt ensoleillé",
        partlyCloudy: "Partiellement nuageux",
        cloudy: "Nuageux",
        lightRain: "Pluie légère",
        thunderstorms: "Orages",
        mostlyCloudy: "Plutôt nuageux"
    },
    de: {
        pageTitle: "Taiwan Wetter",
        backButton: "verlassen",
        subtitle: "Wählen Sie eine Stadt, um Echtzeit-Wetterinformationen anzuzeigen",
        selectCity: "Stadt auswählen:",
        pleaseSelect: "Bitte wählen Sie eine Stadt",
        loading: "Wird geladen...",
        selectToView: "Bitte wählen Sie eine Stadt, um Wetterinformationen zu sehen",
        demoNotice: "Dies ist eine Demo-Wetterinformation, keine tatsächlichen meteorologischen Daten",
        humidity: "Luftfeuchtigkeit",
        wind: "Wind",
        forecast: "Wettervorhersage",
        tomorrow: "Morgen",
        dayAfter: "Übermorgen",
        wednesday: "Mittwoch",
        thursday: "Donnerstag",
        friday: "Freitag",
        sunny: "Sonnig",
        mostlySunny: "Überwiegend sonnig",
        partlyCloudy: "Teilweise bewölkt",
        cloudy: "Bewölkt",
        lightRain: "Leichter Regen",
        thunderstorms: "Gewitter",
        mostlyCloudy: "Überwiegend bewölkt"
    },
    ko: {
        pageTitle: "대만 날씨",
        backButton: "떠나다",
        subtitle: "도시를 선택하여 실시간 날씨 정보를 확인하세요",
        selectCity: "도시 선택:",
        pleaseSelect: "도시를 선택해주세요",
        loading: "로딩 중...",
        selectToView: "날씨 정보를 보려면 도시를 선택하세요",
        demoNotice: "이것은 데모 날씨 정보이며 실제 기상 데이터가 아닙니다",
        humidity: "습도",
        wind: "바람",
        forecast: "일기 예보",
        tomorrow: "내일",
        dayAfter: "모레",
        wednesday: "수요일",
        thursday: "목요일",
        friday: "금요일",
        sunny: "맑음",
        mostlySunny: "대체로 맑음",
        partlyCloudy: "부분적으로 흐림",
        cloudy: "흐림",
        lightRain: "가벼운 비",
        thunderstorms: "뇌우",
        mostlyCloudy: "대체로 흐림"
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
    document.querySelector('.text-blue-800.mt-2').textContent = translations[lang].subtitle;

    // Update header elements
    document.querySelector('.back-btn span').textContent = translations[lang].backButton;

    // Update form elements
    document.querySelector('label[for="citySelect"]').textContent = translations[lang].selectCity;

    // Update city select option
    const citySelect = document.getElementById('citySelect');
    citySelect.options[0].textContent = translations[lang].pleaseSelect;

    // Update loading and no selection messages
    document.querySelector('#loadingIndicator p').textContent = translations[lang].loading;
    document.querySelector('#noSelection p').textContent = translations[lang].selectToView;

    // Update forecast title
    document.querySelector('h3.text-lg').textContent = translations[lang].forecast;

    // Update humidity and wind labels
    const humidityLabel = document.querySelector('#weatherInfo .text-center .text-gray-500:first-child');
    const windLabel = document.querySelector('#weatherInfo .text-center .text-gray-500:last-child');
    if (humidityLabel) humidityLabel.textContent = translations[lang].humidity;
    if (windLabel) windLabel.textContent = translations[lang].wind;

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

// Get the original weather data
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

    // Original weather data and functionality stays the same
    const citySelect = document.getElementById('citySelect');
    const weatherInfo = document.getElementById('weatherInfo');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const noSelection = document.getElementById('noSelection');
    const cityName = document.getElementById('cityName');
    const weatherDesc = document.getElementById('weatherDesc');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');
    const weatherIcon = document.getElementById('weatherIcon');
    const forecast = document.getElementById('forecast');

    // 天氣資料 (模擬資料) - Keeping the original static data
    const weatherData = {
        'taipei': {
            name: '台北市',
            temp: '28°C',
            desc: '晴時多雲',
            humidity: '75%',
            wind: '3 m/s',
            icon: '☀️',
            forecast: [
                { day: '明天', temp: '27°C', icon: '🌤️' },
                { day: '後天', temp: '29°C', icon: '☀️' },
                { day: '週三', temp: '30°C', icon: '☀️' },
                { day: '週四', temp: '26°C', icon: '🌧️' },
                { day: '週五', temp: '25°C', icon: '🌦️' }
            ]
        },
        'newtaipei': {
            name: '新北市',
            temp: '27°C',
            desc: '多雲',
            humidity: '80%',
            wind: '4 m/s',
            icon: '🌤️',
            forecast: [
                { day: '明天', temp: '26°C', icon: '🌥️' },
                { day: '後天', temp: '28°C', icon: '🌤️' },
                { day: '週三', temp: '29°C', icon: '☀️' },
                { day: '週四', temp: '25°C', icon: '🌧️' },
                { day: '週五', temp: '24°C', icon: '🌧️' }
            ]
        },
        'taoyuan': {
            name: '桃園市',
            temp: '29°C',
            desc: '晴天',
            humidity: '70%',
            wind: '2 m/s',
            icon: '☀️',
            forecast: [
                { day: '明天', temp: '28°C', icon: '☀️' },
                { day: '後天', temp: '30°C', icon: '☀️' },
                { day: '週三', temp: '31°C', icon: '☀️' },
                { day: '週四', temp: '27°C', icon: '🌤️' },
                { day: '週五', temp: '26°C', icon: '🌥️' }
            ]
        },
        'taichung': {
            name: '台中市',
            temp: '30°C',
            desc: '晴天',
            humidity: '65%',
            wind: '2 m/s',
            icon: '☀️',
            forecast: [
                { day: '明天', temp: '29°C', icon: '☀️' },
                { day: '後天', temp: '31°C', icon: '☀️' },
                { day: '週三', temp: '32°C', icon: '☀️' },
                { day: '週四', temp: '30°C', icon: '🌤️' },
                { day: '週五', temp: '28°C', icon: '🌥️' }
            ]
        },
        'tainan': {
            name: '台南市',
            temp: '31°C',
            desc: '晴天',
            humidity: '60%',
            wind: '3 m/s',
            icon: '☀️',
            forecast: [
                { day: '明天', temp: '30°C', icon: '☀️' },
                { day: '後天', temp: '32°C', icon: '☀️' },
                { day: '週三', temp: '33°C', icon: '☀️' },
                { day: '週四', temp: '31°C', icon: '🌤️' },
                { day: '週五', temp: '29°C', icon: '🌦️' }
            ]
        },
        'kaohsiung': {
            name: '高雄市',
            temp: '32°C',
            desc: '晴天',
            humidity: '55%',
            wind: '4 m/s',
            icon: '☀️',
            forecast: [
                { day: '明天', temp: '31°C', icon: '☀️' },
                { day: '後天', temp: '33°C', icon: '☀️' },
                { day: '週三', temp: '34°C', icon: '☀️' },
                { day: '週四', temp: '32°C', icon: '🌤️' },
                { day: '週五', temp: '30°C', icon: '🌦️' }
            ]
        },
        'hsinchu-city': {
            name: '新竹市',
            temp: '26°C',
            desc: '多雲',
            humidity: '75%',
            wind: '5 m/s',
            icon: '🌥️',
            forecast: [
                { day: '明天', temp: '25°C', icon: '🌥️' },
                { day: '後天', temp: '27°C', icon: '🌤️' },
                { day: '週三', temp: '28°C', icon: '☀️' },
                { day: '週四', temp: '26°C', icon: '🌦️' },
                { day: '週五', temp: '24°C', icon: '🌧️' }
            ]
        }
    };

    // 為其他縣市添加模擬資料
    const otherCities = ['hsinchu', 'miaoli', 'changhua', 'nantou', 'yunlin', 'chiayi-city', 'chiayi', 'pingtung', 'yilan', 'hualien', 'taitung', 'penghu', 'kinmen', 'lienchiang'];
    const weatherIcons = ['☀️', '🌤️', '⛅', '🌥️', '☁️', '🌦️', '🌧️'];
    const descriptions = ['晴天', '晴時多雲', '多雲', '陰天', '短暫雨', '雷陣雨', '多雲時晴'];

    otherCities.forEach(city => {
        const randomTemp = Math.floor(Math.random() * 10) + 23;
        const randomHumidity = Math.floor(Math.random() * 30) + 60;
        const randomWind = Math.floor(Math.random() * 5) + 1;
        const randomIconIndex = Math.floor(Math.random() * weatherIcons.length);

        const cityNameMap = {
            'hsinchu': '新竹縣',
            'miaoli': '苗栗縣',
            'changhua': '彰化縣',
            'nantou': '南投縣',
            'yunlin': '雲林縣',
            'chiayi-city': '嘉義市',
            'chiayi': '嘉義縣',
            'pingtung': '屏東縣',
            'yilan': '宜蘭縣',
            'hualien': '花蓮縣',
            'taitung': '台東縣',
            'penghu': '澎湖縣',
            'kinmen': '金門縣',
            'lienchiang': '連江縣'
        };

        weatherData[city] = {
            name: cityNameMap[city],
            temp: `${randomTemp}°C`,
            desc: descriptions[randomIconIndex],
            humidity: `${randomHumidity}%`,
            wind: `${randomWind} m/s`,
            icon: weatherIcons[randomIconIndex],
            forecast: []
        };

        // 生成五天預報
        for (let i = 0; i < 5; i++) {
            const forecastTemp = randomTemp + Math.floor(Math.random() * 6) - 3;
            const forecastIconIndex = Math.floor(Math.random() * weatherIcons.length);
            const days = ['明天', '後天', '週三', '週四', '週五'];

            weatherData[city].forecast.push({
                day: days[i],
                temp: `${forecastTemp}°C`,
                icon: weatherIcons[forecastIconIndex]
            });
        }
    });

    citySelect.addEventListener('change', function () {
        const selectedCity = this.value;

        if (selectedCity) {
            // 顯示載入中
            noSelection.classList.add('hidden');
            weatherInfo.classList.add('hidden');
            loadingIndicator.classList.remove('hidden');

            // 模擬載入時間
            setTimeout(() => {
                loadingIndicator.classList.add('hidden');

                // 顯示天氣資訊
                const data = weatherData[selectedCity];

                if (data) {
                    cityName.textContent = data.name;
                    weatherDesc.textContent = data.desc;
                    temperature.textContent = data.temp;
                    humidity.textContent = data.humidity;
                    wind.textContent = data.wind;
                    weatherIcon.innerHTML = `<span class="text-5xl">${data.icon}</span>`;

                    // 清空並填充預報
                    forecast.innerHTML = '';
                    data.forecast.forEach(day => {
                        const dayElement = document.createElement('div');
                        dayElement.className = 'bg-white rounded-lg p-3 text-center shadow-sm';
                        dayElement.innerHTML = `
                            <div class="font-medium text-gray-700">${day.day}</div>
                            <div class="text-2xl my-1">${day.icon}</div>
                            <div class="font-bold text-blue-600">${day.temp}</div>
                        `;
                        forecast.appendChild(dayElement);
                    });

                    weatherInfo.classList.remove('hidden');
                }
            }, 800);
        } else {
            weatherInfo.classList.add('hidden');
            loadingIndicator.classList.add('hidden');
            noSelection.classList.remove('hidden');
        }
    });
});
