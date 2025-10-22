// Multi-language support
const translations = {
    en: {
        welcome_message: "Hello! I'm Travel Sense AI assistant, at your service.",
        online_status: "Online",
        npc_text: "Close",
        chat_title: "Travel Sense AI Assistant",
        input_placeholder: "Activate",
        weather_title: "Weather",
        current_weather: "Current Weather",
        forecast: "Forecast",
        travel_title: "Travel Assistant",
        flight_search: "Flight Search",
        landmark: "Explore Landmarks",
        settings_title: "Settings",
        generate_image: "Designers",
        clear_memory: "Delete all history for this website",
        currency_title: "Currency Exchange",
        currency_converter: "Currency Converter",
        har_title: "Have a rest",
        worldr_search: "Hotels around the world / Worldwide hotels",
        worldeat_search: "Delicious food from around the world / World cuisines",
        itinerary_converter: "Itinerary"
        
    },
    zh: {
        welcome_message: "你好！我是Travel Sense AI助手，隨時為您服務。",
        online_status: "在線",
        npc_text: "關閉",
        chat_title: "Travel Sense AI 助手",
        input_placeholder: "啟用助理",
        weather_title: "天氣查詢",
        current_weather: "當前天氣",
        forecast: "天氣預報",
        travel_title: "旅行助手",
        flight_search: "查詢航班",
        landmark: "探索地標",
        settings_title: "系統設置",
        generate_image: "製作人員名單",
        clear_memory: "刪除所有本網站歷史紀錄",
        currency_title: "貨幣兌換",
        currency_converter: "匯率計算器",
        har_title: "休息小憩",
        worldr_search: "全世界的酒店",
        worldeat_search: "全世界的美食",
        itinerary_converter: "行程表"
    },
    ja: {
        welcome_message: "こんにちは！Travel Sense AIアシスタントです。いつでもご利用ください。",
        online_status: "オンライン",
        memory_library: "メモリライブラリ",
        npc_text: "閉じる",
        chat_title: "Travel Sense AI アシスタント",
        input_placeholder: "起動",
        weather_title: "天気",
        current_weather: "現在の天気",
        forecast: "予報",
        travel_title: "旅行アシスタント",
        flight_search: "フライト検索",
        landmark: "ランドマークを探索",
        settings_title: "設定",
        generate_image: "スタッフ一覧 / クレジット",
        clear_memory: "このサイトのすべての履歴を削除",
        currency_title: "通貨両替",
        currency_converter: "通貨コンバーター",
        har_title: "ちょっと休憩",
        worldr_search: "世界中のホテル",
        worldeat_search: "世界中の美味しい料理 / 世界のグルメ",
        itinerary_converter: "スケジュール"
    },
    fr: {
        welcome_message: "Bonjour ! Je suis l'assistant Travel Sense AI, à votre service.",
        online_status: "Fermer",
        npc_text: "Mémoires",
        chat_title: "Assistant Travel Sense AI",
        input_placeholder: "Activer",
        weather_title: "Météo",
        current_weather: "Météo actuelle",
        forecast: "Prévisions",
        travel_title: "Assistant de voyage",
        flight_search: "Recherche de vol",
        landmark: "Explorer les monuments",
        settings_title: "Paramètres",
        generate_image: "Générique",
        clear_memory: "Supprimer tout l'historique de ce site",
        currency_title: "Change de devises",
        currency_converter: "Convertisseur de devises",
        har_title: "Faire une petite pause",
        worldr_search: "Hôtels du monde entier",
        worldeat_search: "Délices du monde entier / Cuisine du monde",
        itinerary_converter: "Itinéraire"
    },
    de: {
        welcome_message: "Hallo! Ich bin der Travel Sense AI-Assistent, zu Ihren Diensten.",
        online_status: "Online",
        npc_text: "Schließen",
        chat_title: "Travel Sense AI Assistent",
        input_placeholder: "Aktivieren",
        weather_title: "Wetter",
        current_weather: "Aktuelles Wetter",
        forecast: "Wettervorhersage",
        travel_title: "Reiseassistent",
        flight_search: "Flugsuche",
        landmark: "Sehenswürdigkeiten erkunden",
        settings_title: "Einstellungen",
        generate_image: "Abspann",
        clear_memory: "Alle Verlaufseinträge dieser Website löschen",
        currency_title: "Währungsumrechnung",
        currency_converter: "Währungsrechner",
        har_title: "Eine kleine Pause machen",
        worldr_search: "Hotels auf der ganzen Welt",
        worldeat_search: "Köstlichkeiten aus aller Welt / Weltweite Küche",
        itinerary_converter: "Reiseplan"
    },
    ko: {
        welcome_message: "안녕하세요! 저는 Travel Sense AI 어시스턴트입니다.",
        online_status: "온라인",
        npc_text: "닫기",
        chat_title: "Travel Sense AI 어시스턴트",
        input_placeholder: "활성화",
        weather_title: "날씨",
        current_weather: "현재 날씨",
        forecast: "일기 예보",
        travel_title: "여행 도우미",
        flight_search: "항공편 검색",
        landmark: "명소 탐방",
        settings_title: "설정",
        generate_image: "제작진 명단",
        clear_memory: "이 사이트의 모든 기록 삭제",
        currency_title: "환율 변환",
        currency_converter: "환율 계산기",
        har_title: "잠시 휴식",
        worldr_search: "전 세계의 호텔",
        worldeat_search: "전 세계의 맛있는 음식 / 세계 음식",
        itinerary_converter: "여행 일정표"
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

// Try to detect user's preferred language from browser settings
function detectUserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0]; // Get the primary language code (e.g., 'en' from 'en-US')

    // Check if we support this language
    if (translations[langCode]) {
        return langCode;
    }

    // Default to English if we don't support the detected language
    return 'en';
}

// Get stored language preference or detect from browser
let currentLang = localStorage.getItem('preferredLanguage') || detectUserLanguage();

// Update UI text based on selected language
function setLanguage(lang) {
    // Validate the language code
    if (!translations[lang]) {
        console.error(`Language '${lang}' is not supported. Falling back to English.`);
        lang = 'en';
    }

    currentLang = lang;

    // Store the language preference
    localStorage.setItem('preferredLanguage', lang);

    // Helper function to safely update text content
    function updateTextContent(id, key) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[lang][key] || translations['en'][key] || key;
        }
    }

    // Update all text elements
    updateTextContent('status-text', 'online_status');
    updateTextContent('npc-text', 'npc_text');
    updateTextContent('chat-title', 'chat_title');
    updateTextContent('weather-title', 'weather_title');
    updateTextContent('current-weather-text', 'current_weather');
    updateTextContent('forecast-text', 'forecast');
    updateTextContent('travel-title', 'travel_title');
    updateTextContent('har-title', 'har_title');
    updateTextContent('worldr-search-text','worldr_search');
    updateTextContent('worldeat-text','worldeat_search');
    updateTextContent('flight-search-text', 'flight_search');
    updateTextContent('itinerary-converter-text', 'itinerary_converter');
    updateTextContent('landmark-text', 'landmark');
    updateTextContent('settings-title', 'settings_title');
    updateTextContent('generate-image-text', 'generate_image');
    updateTextContent('clear-memory-text', 'clear_memory');
    updateTextContent('currency-title', 'currency_title');
    updateTextContent('currency-converter-text', 'currency_converter');

    // Update placeholder text
    const userInput = document.getElementById('user-input');
    if (userInput) {
        userInput.placeholder = translations[lang]['input_placeholder'] || translations['en']['input_placeholder'];
    }

    // Update welcome message
    const welcomeMessage = document.querySelector('.welcome-message');
    if (welcomeMessage) {
        welcomeMessage.textContent = translations[lang]['welcome_message'] || translations['en']['welcome_message'];
    }

    // Update language button text
    const currentLangElement = document.getElementById('current-lang');
    if (currentLangElement) {
        currentLangElement.textContent = languageNames[lang] || lang;
    }

    // Update checkmarks in language menu
    document.querySelectorAll('.lang-option i').forEach(icon => {
        icon.style.visibility = 'hidden';
    });

    const selectedLangOption = document.querySelector(`.lang-option[data-lang="${lang}"] i`);
    if (selectedLangOption) {
        selectedLangOption.style.visibility = 'visible';
    }
}

// Set up event listeners
document.addEventListener('DOMContentLoaded', () => {
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
                sessionStorage.setItem("lang",lang);
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

    // clear memory button
    const clearMemoryBtn = document.getElementById('clear-memory');
    clearMemoryBtn.addEventListener('click', () => {

        const keepCookies = ["abuse_interstitial"];
        document.cookie.split(";").forEach(function (cookie) {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            if (!keepCookies.includes(name.trim())) {
                // Clear the cookie by setting its expiration date to the past
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
            }
        });
        // 重新載入畫面
        location.reload();
    });

    // Easter egg image functionality
    setupEasterEggs();

    // Initialize with stored/detected language
    setLanguage(currentLang);
});

// Function to set up Easter egg image popups
function setupEasterEggs() {
    // Get the modal element
    const modal = document.getElementById('full-image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close-modal');

    // Saturday logo Easter egg
    const saturdayLogo = document.querySelector('.logo');
    if (saturdayLogo) {
        saturdayLogo.addEventListener('click', () => {
            modalImg.src = './images/egg_1.png';
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }

    // // Memory button Easter egg
    // const memoryBtn = document.getElementById('memory-btn');
    // if (memoryBtn) {
    //     // Replace the existing memory panel functionality
    //     memoryBtn.removeEventListener('click', () => {
    //         const memoryPanel = document.getElementById('memory-panel');
    //         if (memoryPanel) memoryPanel.classList.toggle('open');
    //     });

    //     // Add new Easter egg functionality
    //     memoryBtn.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         e.stopPropagation();
    //         modalImg.src = './images/egg_2.png';
    //         modal.style.display = 'block';
    //         document.body.style.overflow = 'hidden'; // Prevent scrolling
    //     });
    // }

    // Generate Image button Easter egg
    const generateImageBtn = document.getElementById('generate-image');
    if (generateImageBtn) {
        generateImageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modalImg.src = './images/designers.png';
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }

    // Close the modal when clicking the close button
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
    }

    // Close the modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });

    // Close the modal when pressing the Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });
}
