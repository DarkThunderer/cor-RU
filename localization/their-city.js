/*
    cor-RU - a russian localization mod for corru.observer;
    see https://github.com/cor-RU/cor-RU for more info

    > localization/their-city.js
    localization for /local/city
*/


env.localization.page['localcity'] = {dialogues: {},
    definitions: {}, 
    strings: {
        "this is prettyyyy busted... but at least it's something": "как все запущено.. ну, хоть что-то",

        "glimmering spires mark their cities": cor_ru.entity_menu["glimmering spires mark their cities"].name,
        "these grand icons of their control": cor_ru.entity_menu["these grand icons of their control"].name,
        "they watch": cor_ru.entity_menu["they watch"].name,
    },
    entityDescriptions: {
        "glimmering spires mark their cities": cor_ru.entity_menu["glimmering spires mark their cities"].desc,
        "these grand icons of their control": cor_ru.entity_menu["these grand icons of their control"].desc,
        "they watch": cor_ru.entity_menu["they watch"].desc,
    }
}


// === DIALOGUES === //

env.localization.page['localcity'].dialogues.mthresp = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        что это за город<+>where
        неважно<+>CHANGE::++moth
            FAKEEND::(назад)
`)
env.localization.page['localcity'].dialogues["mth++localcity"] = generateDialogueObject(`
start
    self
        у меня есть вопрос об этой мыслеформе города
    moth
        м?

    RESPOBJ::mthresp

where
    self
        о каком городе может быть это воспоминание?
    
    moth
        честн говоря не думаю, что это какой-то конкретный город
        тут все вперемешку.. словно это идеи городов, а не их конкретное отображение
            SHOWIF::[['hub__funfriend-kickoutq', false]]
        раз эта циста голодает, может быть воспоминания акизетеше о наших городах сбились вместе чтобы выжить
            SHOWIF::[['hub__funfriend-kickoutq']]
        мы наблюдали такое поведение на физическом уровне в голодающих корруцистозных устройствах,
            SHOWIF::[['hub__funfriend-kickoutq']]
        так что могу поспорить что оно распространяется и на психический
            SHOWIF::[['hub__funfriend-kickoutq']]

    RESPOBJ::mthresp
`)


getLocalizationForPage(true) // --- ensuring that Nothing Gets Fucked Up


// === TRANSLATING DA BEECH === //

cor_ru.processSpecificTranslation(document.querySelectorAll(".loose-thought"), "text")

document.querySelectorAll('#content .loose-thought .title').forEach(e=>{e.remove()})

document.querySelectorAll('#content .loose-thought').forEach(e=>{e.insertAdjacentHTML('beforeend', `<div class="title">${e.getAttribute('text')}</div>`)})

new Lettering('#content .loose-thought .title').letters()

document.querySelectorAll("#content .loose-thought .title > span").forEach((e, i) => e.style.animationDelay = `${-1 * (i * 0.25)}s`)
