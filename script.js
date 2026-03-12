// 多语言配置
const translations = {
    zh: {
        title: "🧀 奶酪大盗工具",
        players: "玩家人数",
        mode: "骰子模式",
        mode_fair: "公平",
        mode_random: "随机",
        mode_desc_fair: "确保 1-6 均匀分布，不会出现连续重复",
        mode_desc_random: "完全独立随机，可能出现连续相同数字",
        start: "开始游戏",
        restart: "🔄 重新开始",
        player: "玩家",
        tap_card: "点击翻牌",
        your_role: "你的身份",
        dice_value: "骰子点数",
        tap_hide: "点击隐藏并下一位",
        finish: "✅ 完成游戏",
        confirm_restart: "⚠️ 确认重启？",
        confirm_msg: "当前游戏进度将会丢失，确定要重新开始吗？",
        cancel: "取消",
        confirm: "确认",
        lock_warning: "⚠️ 卡牌已锁定，请等待倒计时结束",
        all_complete: "所有玩家已完成",
        start_discussion: "请开始游戏讨论",
        progress: "进度",
        game_ended: "结束",
        // 身份翻译
        role_thief: "奶酪大盗",
        role_civilian: "普通人"
    },
    en: {
        title: "🧀 Cheese Thief Tool",
        players: "Number of Players",
        mode: "Dice Mode",
        mode_fair: "Fair",
        mode_random: "Random",
        mode_desc_fair: "Ensures 1-6 are evenly distributed, no consecutive repeats",
        mode_desc_random: "Completely independent random, consecutive repeats possible",
        start: "Start Game",
        restart: "🔄 Restart",
        player: "Player",
        tap_card: "Tap to Reveal",
        your_role: "Your Role",
        dice_value: "Dice Value",
        tap_hide: "Tap to Hide & Next",
        finish: "✅ Finish Game",
        confirm_restart: "⚠️ Confirm Restart?",
        confirm_msg: "Current game progress will be lost. Are you sure?",
        cancel: "Cancel",
        confirm: "Confirm",
        lock_warning: "⚠️ Cards Locked, Please Wait for Countdown",
        all_complete: "All Players Completed",
        start_discussion: "Start Game Discussion",
        progress: "Progress",
        game_ended: "Ended",
        // 身份翻译
        role_thief: "Cheese Thief",
        role_civilian: "Civilian"
    },
    ru: {
        title: "🧀 Сырный Вор",
        players: "Количество игроков",
        mode: "Режим кубика",
        mode_fair: "Справедливо",
        mode_random: "Случайно",
        mode_desc_fair: "Гарантирует равномерное распределение 1-6, без повторений",
        mode_desc_random: "Полностью независимый случайный, возможны повторения",
        start: "Начать игру",
        restart: "🔄 Перезапустить",
        player: "Игрок",
        tap_card: "Нажмите чтобы открыть",
        your_role: "Ваша роль",
        dice_value: "Значение кубика",
        tap_hide: "Нажмите чтобы скрыть и далее",
        finish: "✅ Завершить игру",
        confirm_restart: "⚠️ Подтвердить перезапуск?",
        confirm_msg: "Текущий прогресс будет потерян. Вы уверены?",
        cancel: "Отмена",
        confirm: "Подтвердить",
        lock_warning: "⚠️ Карты заблокированы, дождитесь окончания таймера",
        all_complete: "Все игроки завершили",
        start_discussion: "Начните обсуждение игры",
        progress: "Прогресс",
        game_ended: "Завершено",
        // 身份翻译
        role_thief: "Сырный Вор",
        role_civilian: "Гражданин"
    },
    kk: {
        title: "🧀 Ірімшік ұры құралдары",
        players: "Ойыншылар саны",
        mode: "Құмар ойын режимі",
        mode_fair: "Әділ",
        mode_random: "Кездейсоқ",
        mode_desc_fair: "1-6 тең таратылады, қайталанбастық сақталады",
        mode_desc_random: "Түпкілікті кездейсоқ, тізбекті сандар мүмкін",
        start: "Ойынды бастау",
        restart: "🔄 Қайта бастау",
        player: "Ойыншы",
        tap_card: "Ашу үшін түрту",
        your_role: "Сіздің рөліңіз",
        dice_value: "Құмар ойын мәні",
        tap_hide: "Жабыу және келесіге",
        finish: "✅ Ойынды аяқтау",
        confirm_restart: "⚠️ Қайта бастауға сенімдісіз бе?",
        confirm_msg: "Ағымдағы прогресс жоғалады. Сіз сенімдісіз бе?",
        cancel: "Болдырмау",
        confirm: "Растау",
        lock_warning: "⚠️ Карталар бұғатталған, таймер аяқталуын күтіңіз",
        all_complete: "Барлық ойыншылар аяқтады",
        start_discussion: "Ойын талқылауын бастаңыз",
        progress: "Прогресс",
        game_ended: "Аяқталды",
        // 身份翻译
        role_thief: "Ұрлықшы",
        role_civilian: "Қарапайым"
    }
}

// 语言配置（带国旗）
const langConfig = {
    zh: { flag: '🇨🇳', name: '中文' },
    en: { flag: '🇬🇧', name: 'English' },
    ru: { flag: '🇷🇺', name: 'Русский' },
    kk: { flag: '🇰🇿', name: 'Қазақша' }
}

let currentLang = 'en'
let roles = []
let dice = []
let currentPlayer = 0
let isCardOpen = false
let isGameEnd = false
let isLocked = false
let lockTimer = null
let lockDuration = 3 // 锁定秒数（改为 3 秒）

// 获取翻译后的身份文本
function getRoleText(role) {
    const t = translations[currentLang];
    if (role === 'thief' || role === 'Ұрлықшы' || role === 'Ірімшік ұры') {
        // internal role stored as 'thief'; other strings shouldn't appear but just in case
        return t.role_thief;
    } else {
        return t.role_civilian;
    }
}

// 设置语言
function setLanguage(lang) {
    if (!langConfig[lang]) return;
    currentLang = lang;
    // 更新 html lang 属性
    document.documentElement.lang = (lang === 'zh' ? 'zh-CN' : lang);
    // 更新选择框显示
    const select = document.getElementById('langSelect');
    if (select) select.value = lang;

    applyTranslations();
    updateModeDesc();

    // 如果开发面板已打开，刷新内容
    const panel = document.getElementById('devPanel');
    if (panel && panel.style.display === 'block') {
        buildDevPanel();
    }

    // 如果游戏中且卡牌已经翻开，保持卡牌内容不变 (只是翻译角色)
    if (!document.getElementById('game').classList.contains('hidden') && isCardOpen) {
        document.getElementById("roleDisplay").innerText = getRoleText(roles[currentPlayer]);
    }
}

// 监听下拉菜单变化
window.addEventListener('DOMContentLoaded', () => {
    const sel = document.getElementById('langSelect');
    if (sel) {
        sel.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
        // initialize selection to default lang
        sel.value = currentLang;
    }
});

// 应用翻译
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n')
        if (translations[currentLang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'SELECT') {
                el.placeholder = translations[currentLang][key]
            } else {
                el.innerText = translations[currentLang][key]
            }
        }
    })
    
    // 特殊处理：只有在没有翻开卡牌的情况下更新 UI，否则保持当前内容
    if (!document.getElementById('game').classList.contains('hidden') && !isCardOpen) {
        updateUI()
    }
}

// 更新模式说明
function updateModeDesc() {
    const mode = document.getElementById("mode").value;
    const desc = document.getElementById("modeDesc");
    if (mode === "fair") {
        desc.innerText = translations[currentLang].mode_desc_fair;
    } else {
        desc.innerText = translations[currentLang].mode_desc_random;
    }
}

// 洗牌算法
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

// 纯随机
function rollTrue() {
    return Math.floor(Math.random() * 6) + 1
}

// 公平分发算法
function generateFairDice(playerCount) {
    let pool = []
    
    let fullSets = Math.floor(playerCount / 6)
    let remainder = playerCount % 6
    
    for (let i = 0; i < fullSets; i++) {
        pool.push(1, 2, 3, 4, 5, 6)
    }
    
    for (let i = 1; i <= remainder; i++) {
        pool.push(i)
    }
    
    shuffle(pool)
    
    for (let i = 1; i < pool.length; i++) {
        if (pool[i] === pool[i-1]) {
            let swapIndex = -1
            for (let j = i + 1; j < pool.length; j++) {
                if (pool[j] !== pool[i] && pool[j] !== pool[i-1]) {
                    swapIndex = j
                    break
                }
            }
            if (swapIndex === -1) {
                for (let j = 0; j < i - 1; j++) {
                    if (pool[j] !== pool[i]) {
                        swapIndex = j
                        break
                    }
                }
            }
            
            if (swapIndex !== -1) {
                let temp = pool[i]
                pool[i] = pool[swapIndex]
                pool[swapIndex] = temp
            }
        }
    }
    
    return pool
}

// 锁定卡牌
function lockCards() {
    isLocked = true
    document.getElementById('cardContainer').classList.add('locked')
    document.getElementById('countdownDisplay').classList.add('active')
    document.getElementById('lockWarning').classList.add('active')
    
    let timeLeft = lockDuration
    document.getElementById('countdownTimer').innerText = timeLeft
    
    lockTimer = setInterval(() => {
        timeLeft--
        document.getElementById('countdownTimer').innerText = timeLeft
        
        if (timeLeft <= 0) {
            unlockCards()
        }
    }, 1000)
}

// 解锁卡牌
function unlockCards() {
    clearInterval(lockTimer)
    lockTimer = null
    isLocked = false
    document.getElementById('cardContainer').classList.remove('locked')
    document.getElementById('countdownDisplay').classList.remove('active')
    document.getElementById('lockWarning').classList.remove('active')
}

function startGame() {
    const playersInput = document.getElementById("players")
    let n = parseInt(playersInput.value)
    let mode = document.getElementById("mode").value

    if (n < 6 || n > 8) {
        const alerts = {
            zh: "玩家人数必须在 6 到 8 之间",
            en: "Number of players must be between 6 and 8",
            ru: "Количество игроков должно быть от 6 до 8"
        };
        alert(alerts[currentLang]);
        return;
    }

    // 使用内部标识存储身份，至少一个 thief
    roles = ["thief"];
    for (let i = 1; i < n; i++) {
        roles.push("civilian");
    }
    shuffle(roles)

    dice = []
    if (mode === "fair") {
        dice = generateFairDice(n)
    } else {
        for (let i = 0; i < n; i++) {
            dice.push(rollTrue())
        }
    }

    currentPlayer = 0
    isCardOpen = false
    isGameEnd = false
    isLocked = false

    document.getElementById("setup").classList.add("hidden")
    document.getElementById("game").classList.remove("hidden")
    document.getElementById("resetBtn").classList.add("hidden")
    
    const card = document.getElementById("card")
    card.classList.remove("flipped")
    
    updateUI()
}

function updateUI() {
    const t = translations[currentLang]
    document.getElementById("playerText").innerText = `${t.player} ${currentPlayer + 1}`
    document.getElementById("progressText").innerText = `${t.progress}: ${currentPlayer + 1} / ${roles.length}`
    
    const card = document.getElementById("card")
    setTimeout(() => {
        document.getElementById("roleDisplay").innerText = "?"
        document.getElementById("diceDisplay").innerText = "?"
    }, 200)
}

function toggleCard() {
    if (isGameEnd || isLocked) return

    const card = document.getElementById("card")

    if (!isCardOpen) {
        // 显示翻译后的身份
        document.getElementById("roleDisplay").innerText = getRoleText(roles[currentPlayer])
        document.getElementById("diceDisplay").innerText = dice[currentPlayer]
        card.classList.add("flipped")
        isCardOpen = true
    } else {
        // 关闭卡牌后启动锁定
        card.classList.remove("flipped")
        isCardOpen = false
        
        // 启动倒计时锁定（3 秒）
        lockCards()
        
        currentPlayer++

        if (currentPlayer >= roles.length) {
            isGameEnd = true
            const t = translations[currentLang]
            document.getElementById("playerText").innerText = t.all_complete
            document.getElementById("progressText").innerText = t.start_discussion
            document.getElementById("resetBtn").classList.remove("hidden")
            document.getElementById("countdownDisplay").classList.remove('active')
            document.getElementById("lockWarning").classList.remove('active')
            
            setTimeout(() => {
                 document.getElementById("roleDisplay").innerText = t.game_ended
                 document.getElementById("diceDisplay").innerText = "🎉"
            }, 600)
            return
        }

        setTimeout(() => {
            updateUI()
        }, 300)
    }
}

// 重启相关
function showRestartModal() {
    document.getElementById('restartModal').classList.add('active')
}

function hideRestartModal() {
    document.getElementById('restartModal').classList.remove('active')
}

function confirmRestart() {
    hideRestartModal()
    resetGame()
}

function resetGame() {
    // 清除锁定计时器
    if (lockTimer) {
        clearInterval(lockTimer)
        lockTimer = null
    }
    
    unlockCards()
    
    document.getElementById("game").classList.add("hidden")
    document.getElementById("setup").classList.remove("hidden")
}

// developer panel toggle
function buildDevPanel() {
    const panel = document.getElementById('devPanel');
    if (!panel) return;
    // headers according to language
    const t = translations[currentLang];
    const headers = [
        (currentLang === 'zh' ? '顺序' : currentLang === 'en' ? 'Order' : currentLang === 'ru' ? 'Порядок' : 'Тапсырма'),
        (currentLang === 'zh' ? '点数' : currentLang === 'en' ? 'Points' : currentLang === 'ru' ? 'Бросок' : 'Нүкте'),
        (currentLang === 'zh' ? '身份' : currentLang === 'en' ? 'Role' : currentLang === 'ru' ? 'Роль' : 'Рөлі')
    ];
    let html = '<table><tr><th>'+headers[0]+'</th><th>'+headers[1]+'</th><th>'+headers[2]+'</th></tr>';
    for (let i = 0; i < roles.length; i++) {
        html += '<tr><td>'+(i+1)+'</td><td>'+dice[i]+'</td><td>'+getRoleText(roles[i])+'</td></tr>';
    }
    html += '</table>';
    panel.innerHTML = html;
}

function toggleDev() {
    const panel = document.getElementById('devPanel');
    if (!panel) return;
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
    } else {
        buildDevPanel();
        panel.style.display = 'block';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('devToggle');
    if (btn) btn.addEventListener('click', toggleDev);
});

// 初始化
applyTranslations()
updateModeDesc()
