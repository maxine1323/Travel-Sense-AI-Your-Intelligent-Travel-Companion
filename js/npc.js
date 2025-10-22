/* =========================
   CONFIG – 調整區
   ========================= */
var talk10, autoWalk, typewriterInterval;
const npcmt = document.querySelector("#npc-text-msg");
// NOTE: This was empty, so the default image will be used.
const sample2Dbase64 = "";
const GLB_URL = "https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb";
/* =========================
   END CONFIG
   ========================= */
/* Elements */
const npc2d = document.getElementById('npc2d');
const speechBox = document.getElementById('speechBox');
const subtitle = document.getElementById('subtitle');
if (!npc2d) {
  console.warn("Element #npc2d not found — please add an element with id='npc2d' to the page.");
}
/* 設定背景圖片 */
if (npc2d) {
  npc2d.style.position = "fixed";
  npc2d.style.width = "128px";
  npc2d.style.height = "220px";
  npc2d.style.transition = "left 0.1s linear, top 0.1s linear, transform 0.2s ease";
  npc2d.style.backgroundSize = "cover";
  npc2d.style.backgroundRepeat = "no-repeat";
  npc2d.style.cursor = "pointer";
  npc2d.style.zIndex = "9999";
  npcmt.style.position = "fixed";
  npcmt.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  npcmt.style.padding = "15px";
  npcmt.style.borderRadius = "15px";
  npcmt.style.border = "2px solid #888";
  npcmt.style.maxWidth = "250px";
  npcmt.style.minHeight = "40px";
  npcmt.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
  npcmt.style.transition = "left 0.1s linear, top 0.1s linear, transform 0.2s ease";
  npcmt.style.cursor = "pointer";
  npcmt.style.zIndex = "9999";
  npcmt.style.display = "none";
  if (sample2Dbase64 && sample2Dbase64.startsWith('data:image')) {
    npc2d.style.backgroundImage = `url("${sample2Dbase64}")`;
  } else {
    // Make sure this path is correct relative to your HTML file.
    npc2d.style.backgroundImage = 'url("./images/npc.png")';
  }
}
/* 初始化位置到螢幕中央 */
function initPosition() {
  if (!npc2d || !npcmt) return;
  const offsetX = 200; // 文字水平與 NPC 對齊
  const offsetY = 10; // 文字在 NPC 上方
  // NPC 在中央
  const npcLeft = window.innerWidth / 2 - npc2d.offsetWidth / 2;
  const npcTop = window.innerHeight / 2 - npc2d.offsetHeight / 2;
  npc2d.style.left = `${npcLeft}px`;
  // FIX: Changed from 'bottom' to 'top' to correctly center the NPC vertically.
  npc2d.style.top = `${npcTop}px`;
  // 文字框在 NPC 上方
  npcmt.style.left = `${npcLeft + offsetX}px`;
  npcmt.style.top = `${npcTop - 30}px`; // Position above the NPC
}
window.addEventListener('resize', initPosition);
initPosition();
/* =========================
   語音 (TTS)
   ========================= */
function getVoicesOnce() {
  return new Promise(resolve => {
    const v = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    if (v && v.length) return resolve(v);
    if (window.speechSynthesis) {
      speechSynthesis.onvoiceschanged = () => resolve(speechSynthesis.getVoices());
      // Fallback timeout
      setTimeout(() => resolve(speechSynthesis.getVoices()), 1000);
    } else {
      resolve([]);
    }
  });
}
async function pickVoiceFor(langPref) {
  const voices = await getVoicesOnce();
  if (!voices || !voices.length) return null;
  let v;
  // Get the base language code (e.g., 'en' from 'en-US')
  const lang = langPref.split('-')[0].toLowerCase();
  switch (lang) {
    case 'en':
      v = voices.find(voice => voice.lang.startsWith('en') && /Evie|female|woman|Samantha|Alloy|Zira/i.test(voice.name));
      break;
    case 'ja':
      v = voices.find(voice => voice.lang.startsWith('ja') && /Ayane|女性|Haruka|Yui|Miku/i.test(voice.name));
      break;
    case 'zh':
      v = voices.find(voice => voice.lang.startsWith('zh') && /女性|Huihui|Xiaoxiao/i.test(voice.name));
      break;
    case 'fr':
      // Using 'femme' which means woman in French
      v = voices.find(voice => voice.lang.startsWith('fr') && /femme|female/i.test(voice.name));
      break;
    case 'ko':
      // Using '  여성  ' which means female in Korean
      v = voices.find(voice => voice.lang.startsWith('ko') && /  여성  |female/i.test(voice.name));
      break;
    case 'de':
      // Using 'weiblich' which means female in German
      v = voices.find(voice => voice.lang.startsWith('de') && /weiblich|female/i.test(voice.name));
      break;
    default:
      // Generic fallback for any other language not specified above
      v = voices.find(voice => voice.lang.toLowerCase().startsWith(lang) && /female|woman/i.test(voice.name));
      break;
  }
  // Fallback 1: If no specific female voice is found, find any voice for the language.
  if (!v) {
    v = voices.find(voice => voice.lang.toLowerCase().startsWith(lang));
  }
  // Fallback 2: If no voice for the language is found, use the very first voice available.
  return v || voices[0];
}
/**
 * NEW: 更新 speak 函數以加入打字機效果
 * @param {string} text - 要顯示和說出的文字
 * @param {string} [lang='en-US'] - 語言代碼
 */
async function speak(text, lang = 'en-US') {
  if (!('speechSynthesis' in window)) return;

  // --- NEW: 平滑氣泡與打字機效果 ---
  if (npcmt) {
    // 停止上一個打字機效果（如果有的話）
    if (typewriterInterval) {
      clearInterval(typewriterInterval);
    }
    npcmt.textContent = ''; // 清空舊文字
    npcmt.style.display = 'block'; // 顯示氣泡

    let i = 0;
    const speed = 50; // 打字速度 (毫秒)

    typewriterInterval = setInterval(() => {
      if (i < text.length) {
        npcmt.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typewriterInterval);
        typewriterInterval = null;
      }
    }, speed);
  }

  // --- 語音合成 (TTS) ---
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = 1.05;
    u.pitch = 1.15;
    const v = await pickVoiceFor(lang);
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  } catch (e) {
    console.warn("TTS error:", e);
  }
}
/* 對話台詞 */
const lines_en = ["Hi there! Ready to explore together?", "I'm Maxine! Nice to meet you.", "Do you want to check the current weather?", "Do you want to check the the global forecast?", "Need help with travel plans?", "Are you looking for flights,Which class do you prefer?", "Maybe check out world landmarks, Hard to decide, right?", "You want to go everywhere!", "Do you want to see who created it?", "Curious about the web designers, don't you?", "Wanna clear Memory to erase your current queries?", "Need to exchange money? You can click on the currency converter.", "Which hotel will you stay at? I'm really curious about your choice.", "What do you like to eat?", "Have you decided how you want to choose transportation?", "Where do you want to visit?", "Remember to travel safely and return home safely.", "Need help ? I can help."];
const lines_ja = ["こんにちは！一緒に探検しよう？", "私はマキシンです。よろしくね！", "現在の天気を確認したいですか？", "世界の天気予報を確認したいですか？", "フライトを探していますか？どのクラスがいいですか？", "世界のランドマークを見てみますか？決めるのは難しいですよね？", "全部行きたいですよね！", "ウェブデザイナーが気になりますよね？", "『メモリをクリア』して現在の検索を消しますか？", "両替が必要ですか？為替計算機をクリックできますよ。", "どのホテルに泊まりますか？あなたの選択が気になります。", "何を食べるのが好きですか？", "交通手段をどう選ぶか決めましたか？", "どこに行きたいですか？", "安全に旅行して、無事に家に帰ってくださいね。", "助けが必要ですか？私が手伝います。"];
const lines_zh = ["嗨！準備好一起探索了嗎？", "我是 Maxine！很高興見到你。", "你要查詢天氣嗎？要看當前天氣，還是全球天氣預報？", "你要查詢航班？哪種艙等啊？還是看世界地標？好難抉擇對吧，都想去齁。", "要看誰製作的嗎？好奇網頁設計師是誰嗎？", "還是使用清除記憶，清除當前查詢的？", "要換錢啊？可點選匯率計算器呦。", "要住哪家？真好奇你的選擇。", "你喜歡吃啥？", "你考慮好想怎麼選交通工具了嗎？", "想去哪裡玩呀？", "記得安全出遊平安回家。"];
const lines_fr = ["Salut ! Prêt(e) à explorer ensemble ?", "Je suis Maxine ! Enchantée de te rencontrer.", "Tu veux vérifier la météo actuelle ?", "Ou plutôt la prévision mondiale ?", "Tu cherches un vol ? Quelle classe préfères-tu ?", "Ou tu veux voir les monuments du monde ? Difficile de choisir, non ?", "Tu veux aller partout, n’est-ce pas ?", "Tu veux savoir qui a créé ça ?", "Curieux de savoir qui est le concepteur du site ?", "Tu veux effacer la mémoire pour supprimer les recherches actuelles ?", "Besoin de changer de l’argent ? Clique sur le convertisseur de devises.", "Dans quel hôtel vas-tu séjourner ? Je suis curieuse de ton choix.", "Qu’aimes-tu manger ?", "As-tu décidé quel moyen de transport tu veux utiliser ?", "Où veux-tu aller ?", "Voyage prudemment et rentre chez toi en toute sécurité. ", "Besoin d’aide ? Je peux t’aider. ?"];
const lines_ko = ["  안녕하세요  !   함께     탐험할     준비됐나요  ?", "  저는   Maxine  이에요  !   만나서     반가워요  .", "  현재     날씨를     확인하고     싶나요  ?", "  전     세계     날씨     예보를     보고     싶나요  ?", "  여행     계획을     도와드릴까요  ?", "  항공편을     찾고     있나요  ?   어떤     좌석     등급을     원하세요  ?", "  세계의     명소를     둘러볼까요  ?   결정하기     어렵죠  ?", "  모두     가보고     싶죠  !", "  누가     만들었는지     보고     싶나요  ?", "  웹     디자이너가     궁금하죠  ?", "‘  메모리     지우기  ’  로     현재     검색을     삭제할까요  ?", "  환전이     필요하신가요  ?   환율     계산기를     클릭할     수     있어요  .?", "  어느    ホテル 에     머물     계획이신가요  ?   당신의     선택이     궁금해요  .", "  무엇을     먹는     걸     좋아하세요  ?", "  어떤     교통수단을     이용할지     정하셨나요  ?", "  어디로     여행가고     싶으세요  ?", "  안전하게     여행하고     무사히     돌아오세요  .", "  도움이     필요하신가요  ?   제가     도와드릴게요  ."];
const lines_de = ["Hallo! Bereit, zusammen zu erkunden?", "Ich bin Maxine! Schön, dich kennenzulernen.", "Möchtest du das aktuelle Wetter prüfen?", "Oder lieber die weltweite Wettervorhersage sehen?", "Suchst du nach Flügen? Welche Klasse bevorzugst du?", "Vielleicht willst du berühmte Sehenswürdigkeiten sehen? Schwer zu entscheiden, oder?", "Möchtest du sehen, wer das erstellt hat?", "Neugierig auf die Webdesigner, oder?", "Willst du den Speicher löschen und aktuelle Suchanfragen entfernen?", "Musst du Geld wechseln? Du kannst den Währungsrechner anklicken.", "In welchem Hotel wirst du übernachten? Ich bin gespannt auf deine Wahl.", "Was isst du gerne?", "Hast du dich entschieden, wie du reisen möchtest?", "Wohin möchtest du gehen?", "Reise sicher und komm gut nach Hause zurück.", "Brauchst du Hilfe? Ich kann dir helfen."];
/* =========================
   自動移動邏輯
   ========================= */
let walkDir = { x: 1, y: 1 };
let dragging2D = false;
function clampPosition() {
  if (!npc2d) return;
  const w = npc2d.offsetWidth,
    h = npc2d.offsetHeight;
  let left = parseFloat(npc2d.style.left) || window.innerWidth / 2;
  let top = parseFloat(npc2d.style.top) || window.innerHeight / 2;
  if (left < 0) left = 0;
  if (top < 0) top = 0;
  if (left > window.innerWidth - w) left = window.innerWidth - w;
  if (top > window.innerHeight - h) top = window.innerHeight - h;
  npc2d.style.left = `${left}px`;
  npc2d.style.top = `${top}px`;
  updateNpcTextPosition();
}
function updateNpcTextPosition() {
  if (!npc2d || !npcmt) return;
  const npcLeft = parseFloat(npc2d.style.left);
  const npcTop = parseFloat(npc2d.style.top);
  npcmt.style.left = `${npcLeft}px`;
  npcmt.style.top = `${npcTop - npcmt.offsetHeight - 10}px`; // 將文字框定位於 NPC 上方
}
// 自動走路呼叫
function autoWalk2D() {
  if (!npc2d || dragging2D) return;
  let left = parseFloat(npc2d.style.left) || window.innerWidth / 2;
  let top = parseFloat(npc2d.style.top) || window.innerHeight / 2;
  left += walkDir.x * 1.8;
  top += walkDir.y * 1.2;
  const w = npc2d.offsetWidth,
    h = npc2d.offsetHeight;
  if (left < 0 || left > window.innerWidth - w) walkDir.x *= -1;
  if (top < 0 || top > window.innerHeight - h) walkDir.y *= -1;
  npc2d.style.left = `${left}px`;
  npc2d.style.top = `${top}px`;
  // 呼吸效果
  const breath = Math.sin(Date.now() / 800) * 1.2;
  npc2d.style.transform = `translateY(${breath}px)`;
  // 更新文字位置
  updateNpcTextPosition();
}
/* =========================
   滑鼠拖曳與對話功能 (已更新為支援滑鼠和觸控)
   ========================= */
if (npc2d) {
  let offsetX = 0,
    offsetY = 0;
  // 輔助函數：取得正確的座標 (支援滑鼠與觸控)
  const getCoords = (e) => {
    // 檢查是否有 touches 屬性，表示為觸控事件
    return e.touches ? {
      clientX: e.touches[0].clientX,
      clientY: e.touches[0].clientY
    } : {
      clientX: e.clientX,
      clientY: e.clientY
    };
  };
  // 拖曳開始
  const startDrag = (e) => {
    // 阻止瀏覽器預設的拖曳行為，尤其是觸控時
    // 阻止點擊事件在觸控時觸發 (防止點擊講話與拖曳同時發生)
    if (e.type === 'touchstart') {
        // 使用 e.stopPropagation() 阻止事件傳播，避免觸發 click
        e.stopPropagation(); 
    }
    // 阻止瀏覽器預設的拖曳行為 (如移動端捲動或圖片拖曳)
    if (e.cancelable) e.preventDefault(); 
    dragging2D = true;
    const coords = getCoords(e);
    // 計算滑鼠/手指點擊位置與 NPC 元素左上角的偏移量
    offsetX = coords.clientX - parseFloat(npc2d.style.left);
    offsetY = coords.clientY - parseFloat(npc2d.style.top);
    // 為了在拖曳時更流暢，暫停自動走路
    if (autoWalk) clearInterval(autoWalk);
    autoWalk = null; // 清除 interval ID
  };
  // 拖曳中
  const drag = (e) => {
    if (!dragging2D) return;
    // 阻止瀏覽器預設的捲動行為
    e.preventDefault();
    const coords = getCoords(e);
    npc2d.style.left = `${coords.clientX - offsetX}px`;
    npc2d.style.top = `${coords.clientY - offsetY}px`;
    updateNpcTextPosition();
  };
  // 拖曳結束/取消
  const endDrag = () => {
    if (dragging2D) {
      dragging2D = false;
      clampPosition(); // 確保 NPC 保持在可視範圍內
      
      // 重新啟動自動走路
      if (!autoWalk) {
        autoWalk = setInterval(autoWalk2D, 120);
      }
    }
  };
  // 綁定滑鼠事件
  npc2d.addEventListener('mousedown', startDrag);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', endDrag);
  // 綁定觸控事件
  // 使用 { passive: false } 來確保在 touchstart/touchmove 上可以呼叫 preventDefault()
  npc2d.addEventListener('touchstart', startDrag, { passive: false });
  document.addEventListener('touchmove', drag, { passive: false });
  document.addEventListener('touchend', endDrag);
  document.addEventListener('touchcancel', endDrag); // 處理觸控意外中斷的情況

  /**
   * NEW: 更新 randomTalk 函數以自動偵測瀏覽器語言
   */
function randomTalk() {
// 改為使用 sessionStorage 語言設定，不再偵測瀏覽器語言
let lang = sessionStorage.getItem("lang") || 'en'; // 預設英文

let lines, langCode;
switch (lang) {
case 'ja':
lines = lines_ja;
langCode = 'ja-JP';
break;
case 'zh':
lines = lines_zh;
langCode = 'zh-TW';
break;
case 'fr':
lines = lines_fr;
langCode = 'fr-FR';
break;
case 'ko':
lines = lines_ko;
langCode = 'ko-KR';
break;
case 'de':
lines = lines_de;
langCode = 'de-DE';
break;
default:
lines = lines_en;
langCode = 'en-US';
break;
}

const text = lines[Math.floor(Math.random() * lines.length)];
speak(text, langCode);
}
  // 10 秒講一次話
  talk10 = setInterval(randomTalk, 10000);
  autoWalk = setInterval(autoWalk2D, 120);

  /* 點擊講話 */
  npc2d.addEventListener('click', _e => {
    clearInterval(talk10); // 停止原本的循環
    randomTalk(); // 立即講話一次
    talk10 = setInterval(randomTalk, 10000); // 再次啟動循環
  });
  function stop() {
    if (!npc2d) return;
    npc2d.style.display = "none";
    npcmt.style.display = "none";
    clearInterval(talk10);
    clearInterval(autoWalk);
    if(typewriterInterval) clearInterval(typewriterInterval);
  }
  const npcBtn = document.getElementById('npc-btn');
  if (npcBtn) {
    npcBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      stop();
    });
  }
}
/* =========================
   使用者輸入與助理啟用
   ========================= */
const userInput = document.getElementById('user-input');
const voicebtn = document.getElementById("voice-btn");
const chatmsg = document.getElementById("chat-messages");
const msgLog = new Map();
if (voicebtn) {
  // FIX: The syntax error was here. The event listener was incorrectly closed
  // and had duplicated code. This is the corrected and cleaned-up version.
  voicebtn.addEventListener("click", () => {
    const datetime = new Date().toLocaleTimeString();
    const usermsg = userInput.value.trim();
    if (!usermsg) return;
    msgLog.set(datetime, usermsg);
    chatmsg.insertAdjacentHTML(
      "beforeend",
      `<div class="message ai-message" id="chat-message">
        <strong>Chat Message: [${datetime}]</strong>
        <span id="chat-message-text">${usermsg}</span>
     </div>`
    );
    userInput.value = "";
    const lastMsg = chatmsg.lastElementChild.querySelector("#chat-message-text").textContent;
    // Check for activation command in multiple languages
    const activationCommands = ["啟用助理", "activate", "起動", "  활성화  ", "aktivieren", "activer"];
    if (activationCommands.includes(lastMsg.toLowerCase())) {
      console.log("Activating NPC based on user command:", lastMsg);
      if (npc2d) npc2d.style.display = "block";
      // Clear old intervals to prevent NPC from speeding up
      if(talk10) clearInterval(talk10);
      if(autoWalk) clearInterval(autoWalk);
      // Start new intervals
      talk10 = setInterval(randomTalk, 10000);
      autoWalk = setInterval(autoWalk2D, 120);
    }
  });
}
