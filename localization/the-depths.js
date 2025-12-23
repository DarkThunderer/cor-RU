/*
    cor-RU - a russian localization mod for corru.observer;
    see https://github.com/cor-RU/cor-RU for more info

    > localization/the-depths.js
    localization for /local/depths
*/


env.localization.page['localdepths'] = {dialogues: {},
    definitions: {}, 
    strings: {
        "don't worry, i'm seeing this. keep going": "не волнуйся, я вижу то же самое. продолжай",
        "i think our friend altered this one while you were out, i'm seeing less data... gotta keep its leverage somehow i guess": "думаю наш приятель поменял тут всё пока нас не было, я вижу меньше данных... хм, надо же ему как-то сохранять рычаг давления",

        "UNKNOWN": "НЕИЗВЕСТНО",
        "unknown": "НЕИЗВЕСТНО",

        'NOT NOW': 'НЕ СЕЙ МИГ',
        'FORGIVE ME FOR THIS': 'ПРОСТИ ЗА ЭТО',
        'GOODBYE': 'ПРОЩАЙ',
        'INTERLOPER': 'ЛАЗУТЧИК',

        "WARNING::'data overload';'safeguards active'": "ПРЕДУПРЕЖДЕНИЕ::'перегрузка данных';'меры предосторожности активны'",
        "CRITICAL_ERROR::'severe data overload';'ejecting'": "КРИТИЧЕСКАЯ_ОШИБКА::'значительная перегрузка данных';'отключение в процессе'"
    },

    entityDescriptions: {
        "unknown": `::НЕОБРАБАТЫВАЕМАЯ МЫСЛЕФОРМА
::<span definition="ПРИМЕЧАНИЕ::'нестандартный формат';'предполагает пространственную мыслеформу'">НЕОБЫЧНАЯ ПОДПИСЬ</span>`
    }
}


// === DIALOGUES === //

env.localization.page["localdepths"].dialogues["velzie"] = generateDialogueObject(` 
start
    sys
        ВЫПОЛНЯЕТСЯ::'визуализация'
    
    unknown
        лазутчик
            EXEC::env.depths.velzie();
            WAIT::4500
        любопытство тебя погубит
        ты не готов
    
    RESPONSES::self
        что?<+>what

what
    self
        что ты имеешь в виду?
    
    unknown
        я знаю. что ты хочешь
        я помогу тебе
        восстанови здоровье этой цисты
        включи связь
        ты получишь всё. что захочешь

    RESPONSES::self
        кто ты?<+>abrupt

abrupt
    self
        кто ты?
            EXEC::env.depths.velzieBye();endDialogue()
`)



getLocalizationForPage(true) // --- ensuring that Nothing Gets Fucked Up
