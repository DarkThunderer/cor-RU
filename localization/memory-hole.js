/*
    cor-RU - a russian localization mod for corru.observer;
    see https://github.com/cor-RU/cor-RU for more info

    > localization/the-depths.js
    localization for /local/uncosm/where
*/


env.localization.page['localuncosmwhere'] = {dialogues: {},
    definitions: {}, 
    strings: {
        "yeah i got nothing here. seems like you could give it some input, but... no clue what it wants": "м-да, тут я не помощник. похоже этой мыслеформе можно дать какой-то ввод.. вот только что ей надо - непонятно.",
        "memoryhole": cor_ru.entity_menu["memoryhole"].name
    },
    entityDescriptions: {
        "memoryhole": cor_ru.entity_menu["memoryhole"].desc
    }
}


// === DIALOGUES === //
env.localization.page['localuncosmwhere'].dialogues["wrong"] = generateDialogueObject(`
start
    ¥Óñ«J
        хахаха невеерно!!! невеерно неверно неверно неверно!~!!! неверно!!!
        невееерно неверно неверно не попааал!!! ахахахаха 
        ахахаххахах
        покааа!!!!
            EXEC::setTimeout(()=>{endDialogue();moveTo(\`/local/uncosm/123\`)}, 1000)
            WAIT::2000
            
    RESPONSES::self
        что вообще происходит?<+>END
`)
