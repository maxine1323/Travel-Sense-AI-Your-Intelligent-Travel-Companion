// Multi-language support
const translations = {
    en: {
        pageTitle: "Currency Calculator",
        backButton: "Leave",
        expensesTitle: "Expense Details",
        flightCost: "Flight Cost (Original Currency)",
        hotelCost: "Hotel Cost (Original Currency)",
        transportCost: "Transport Cost (Original Currency)",
        foodCost: "Food Cost (Original Currency)",
        entertainmentCost: "Entertainment Cost (Original Currency)",
        otherCost: "Other Expenses (Original Currency)",
        currencySettings: "Currency Settings",
        currencySelect: "Select Currency",
        exchangeRate: "Exchange Rate (1 Original = How Many TWD)",
        calculateButton: "Calculate Total Amount",
        clearButton: "Clear All",
        totalResult: "Total Amount (TWD)",
        usd: "US Dollar (USD)",
        jpy: "Japanese Yen (JPY)",
        eur: "Euro (EUR)",
        gbp: "British Pound (GBP)",
        aud: "Australian Dollar (AUD)",
        krw: "Korean Won (KRW)",
        cny: "Chinese Yuan (CNY)",
        hkd: "Hong Kong Dollar (HKD)",
        twd: "Taiwan Dollar (TWD)",
        custom: "Custom Exchange Rate"
    },
    zh: {
        pageTitle: "匯率計算器",
        backButton: "返回",
        expensesTitle: "💰 費用明細",
        flightCost: "✈️ 機票費用 (原幣)",
        hotelCost: "🏨 住宿費用 (原幣)",
        transportCost: "🚆 交通費用 (原幣)",
        foodCost: "🍱 餐飲支出 (原幣)",
        entertainmentCost: "🎉 娛樂支出 (原幣)",
        otherCost: "💼 其他支出 (原幣)",
        currencySettings: "💱 匯率設定",
        currencySelect: "幣別選擇",
        exchangeRate: "匯率 (1原幣 = 幾台幣)",
        calculateButton: "計算總金額",
        clearButton: "清除所有內容",
        totalResult: "總金額 (台幣)",
        usd: "美元 (USD)",
        jpy: "日圓 (JPY)",
        eur: "歐元 (EUR)",
        gbp: "英鎊 (GBP)",
        aud: "澳幣 (AUD)",
        krw: "韓元 (KRW)",
        cny: "人民幣 (CNY)",
        hkd: "港幣 (HKD)",
        twd: "台幣 (TWD)",
        custom: "自訂匯率"
    },
    ja: {
        pageTitle: "通貨計算機",
        backButton: "離開",
        expensesTitle: "💰 費用詳細",
        flightCost: "✈️ 航空券費用 (元の通貨)",
        hotelCost: "🏨 宿泊費 (元の通貨)",
        transportCost: "🚆 交通費 (元の通貨)",
        foodCost: "🍱 食費 (元の通貨)",
        entertainmentCost: "🎉 娯楽費 (元の通貨)",
        otherCost: "💼 その他の費用 (元の通貨)",
        currencySettings: "💱 為替レート設定",
        currencySelect: "通貨を選択",
        exchangeRate: "為替レート (元の通貨1 = 台湾ドル何)",
        calculateButton: "合計金額を計算",
        clearButton: "すべて消去",
        totalResult: "合計金額 (台湾ドル)",
        usd: "米ドル (USD)",
        jpy: "日本円 (JPY)",
        eur: "ユーロ (EUR)",
        gbp: "英国ポンド (GBP)",
        aud: "豪ドル (AUD)",
        krw: "韓国ウォン (KRW)",
        cny: "中国元 (CNY)",
        hkd: "香港ドル (HKD)",
        twd: "台湾ドル (TWD)",
        custom: "カスタムレート"
    },
    fr: {
        pageTitle: "Calculateur de Devises",
        backButton: "quitter",
        expensesTitle: "💰 Détails des Dépenses",
        flightCost: "✈️ Coût du Vol (Devise Originale)",
        hotelCost: "🏨 Coût de l'Hébergement (Devise Originale)",
        transportCost: "🚆 Coût du Transport (Devise Originale)",
        foodCost: "🍱 Dépenses Alimentaires (Devise Originale)",
        entertainmentCost: "🎉 Dépenses de Divertissement (Devise Originale)",
        otherCost: "💼 Autres Dépenses (Devise Originale)",
        currencySettings: "💱 Paramètres de Devise",
        currencySelect: "Sélection de Devise",
        exchangeRate: "Taux de Change (1 Original = Combien de TWD)",
        calculateButton: "Calculer le Montant Total",
        clearButton: "Tout Effacer",
        totalResult: "Montant Total (TWD)",
        usd: "Dollar Américain (USD)",
        jpy: "Yen Japonais (JPY)",
        eur: "Euro (EUR)",
        gbp: "Livre Sterling (GBP)",
        aud: "Dollar Australien (AUD)",
        krw: "Won Coréen (KRW)",
        cny: "Yuan Chinois (CNY)",
        hkd: "Dollar de Hong Kong (HKD)",
        twd: "Dollar Taïwanais (TWD)",
        custom: "Taux Personnalisé"
    },
    de: {
        pageTitle: "Währungsrechner",
        backButton: "verlassen",
        expensesTitle: "💰 Ausgabendetails",
        flightCost: "✈️ Flugkosten (Originalwährung)",
        hotelCost: "🏨 Hotelkosten (Originalwährung)",
        transportCost: "🚆 Transportkosten (Originalwährung)",
        foodCost: "🍱 Verpflegungskosten (Originalwährung)",
        entertainmentCost: "🎉 Unterhaltungskosten (Originalwährung)",
        otherCost: "💼 Sonstige Ausgaben (Originalwährung)",
        currencySettings: "💱 Währungseinstellungen",
        currencySelect: "Währung wählen",
        exchangeRate: "Wechselkurs (1 Original = Wieviel TWD)",
        calculateButton: "Gesamtbetrag berechnen",
        clearButton: "Alles löschen",
        totalResult: "Gesamtbetrag (TWD)",
        usd: "US-Dollar (USD)",
        jpy: "Japanischer Yen (JPY)",
        eur: "Euro (EUR)",
        gbp: "Britisches Pfund (GBP)",
        aud: "Australischer Dollar (AUD)",
        krw: "Koreanischer Won (KRW)",
        cny: "Chinesischer Yuan (CNY)",
        hkd: "Hongkong-Dollar (HKD)",
        twd: "Taiwan-Dollar (TWD)",
        custom: "Benutzerdefinierter Kurs"
    },
    ko: {
        pageTitle: "환율 계산기",
        backButton: "떠나다",
        expensesTitle: "💰 지출 내역",
        flightCost: "✈️ 항공비 (원화 기준)",
        hotelCost: "🏨 호텔비 (원화 기준)",
        transportCost: "🚆 교통비 (원화 기준)",
        foodCost: "🍱 식비 (원화 기준)",
        entertainmentCost: "🎉 오락비 (원화 기준)",
        otherCost: "💼 기타 지출 (원화 기준)",
        currencySettings: "💱 통화 설정",
        currencySelect: "통화 선택",
        exchangeRate: "환율 (1 원화 = 얼마 TWD)",
        calculateButton: "총액 계산",
        clearButton: "전체 삭제",
        totalResult: "총액 (TWD)",
        usd: "미국 달러 (USD)",
        jpy: "일본 엔 (JPY)",
        eur: "유로 (EUR)",
        gbp: "영국 파운드 (GBP)",
        aud: "호주 달러 (AUD)",
        krw: "대한민국 원 (KRW)",
        cny: "중국 위안 (CNY)",
        hkd: "홍콩 달러 (HKD)",
        twd: "대만 달러 (TWD)",
        custom: "사용자 지정 환율"
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

// Set current language from localStorage or default to Chinese
let currentLang = localStorage.getItem('preferredLanguage') || 'zh';

// Update UI text based on selected language
function setLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language '${lang}' is not supported. Falling back to English.`);
        lang = 'en';
    }

    document.title = "Saturday - " + translations[lang].pageTitle;
    document.querySelector('.back-btn span').textContent = translations[lang].backButton;
    document.querySelector('h1').textContent = translations[lang].pageTitle;

    // Update expense details section
    document.getElementById('expenses-title').textContent = translations[lang].expensesTitle;
    document.getElementById('flight-label').textContent = translations[lang].flightCost;
    document.getElementById('hotel-label').textContent = translations[lang].hotelCost;
    document.getElementById('transport-label').textContent = translations[lang].transportCost;
    document.getElementById('food-label').textContent = translations[lang].foodCost;
    document.getElementById('entertainment-label').textContent = translations[lang].entertainmentCost;
    document.getElementById('other-label').textContent = translations[lang].otherCost;

    // Update currency settings section
    document.getElementById('currency-title').textContent = translations[lang].currencySettings;
    document.getElementById('currency-label').textContent = translations[lang].currencySelect;
    document.getElementById('exchange-label').textContent = translations[lang].exchangeRate;

    // Update buttons
    document.getElementById('calculate-button').textContent = translations[lang].calculateButton;
    document.getElementById('clear-button').textContent = translations[lang].clearButton;

    // Update result section
    document.getElementById('result-title').textContent = translations[lang].totalResult;

    // Update currency options
    document.getElementById('usd-option').textContent = translations[lang].usd;
    document.getElementById('jpy-option').textContent = translations[lang].jpy;
    document.getElementById('eur-option').textContent = translations[lang].eur;
    document.getElementById('gbp-option').textContent = translations[lang].gbp;
    document.getElementById('aud-option').textContent = translations[lang].aud;
    document.getElementById('krw-option').textContent = translations[lang].krw;
    document.getElementById('cny-option').textContent = translations[lang].cny;
    document.getElementById('hkd-option').textContent = translations[lang].hkd;
    document.getElementById('twd-option').textContent = translations[lang].twd;
    document.getElementById('custom-option').textContent = translations[lang].custom;

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

// Calculate total amount
function calculateTotal() {
    // 1. Read all amount fields
    const flightCost = parseFloat(document.getElementById('flightCost').value) || 0;
    const hotelCost = parseFloat(document.getElementById('hotelCost').value) || 0;
    const transportCost = parseFloat(document.getElementById('transportCost').value) || 0;
    const foodCost = parseFloat(document.getElementById('foodCost').value) || 0;
    const entertainmentCost = parseFloat(document.getElementById('entertainmentCost').value) || 0;
    const otherCost = parseFloat(document.getElementById('otherCost').value) || 0;

    const totalOriginalCurrency = flightCost + hotelCost + transportCost + foodCost + entertainmentCost + otherCost;

    // 2. Handle exchange rate and currency
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value) || 1;
    const currency = document.getElementById('currencySelect').value;
    const totalTWD = totalOriginalCurrency * exchangeRate;

    // 3. Display calculation results
    document.getElementById('totalAmount').innerText = totalTWD.toLocaleString();
    document.getElementById('exchangeRateDisplay').innerText = exchangeRate;
    document.getElementById('currencyDisplay').innerText = 1;

    document.getElementById('currencySymbol').innerText = currency || '?';

    // 4. Show result area
    document.getElementById('totalResult').classList.remove('hidden');
}

// Clear all calculator fields
function clearCalculator() {
    // Clear input values
    const fields = ['flightCost', 'hotelCost', 'transportCost', 'foodCost', 'entertainmentCost', 'otherCost'];
    fields.forEach(id => document.getElementById(id).value = '');

    // Reset results
    document.getElementById('totalAmount').innerText = '0';
    document.getElementById('exchangeRateDisplay').innerText = '1';
    document.getElementById('currencyDisplay').innerText = 'TWD';
    document.getElementById('currencySymbol').innerText = 'NT$';

    // Hide result section
    document.getElementById('totalResult').classList.add('hidden');
    document.getElementById('exchangeRate').value = '1';
}

// Initialize language and set up event listeners
document.addEventListener('DOMContentLoaded', () => {
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
});
