/*
    cor-RU - a russian localization mod for corru.observer;
    see https://github.com/cor-RU/cor-RU for more info

    > localization/their-vessel.js
    localization for /local/ocean/ship
    (---such an empty page haha)
*/


env.localization.page['localship'] = {dialogues: {},
    definitions: {
    }, 
    strings: {
        "this is really that first contact ship, damn. did you know they turned it into a museum?": "ну ничего себе, эт реально тот самый корабль который установил первый контакт. ты знал что из него музей сделали?",
        "so the \"low cohesion\" here probably refers to that... other place, being connected": "так видимо \"низкая связность\" здесь подразумевает то... другое место",
        "that's weird, does this area seem bigger now?": "странно, тебе это место не кажется больше прежнего?",
        "figures we finally get a compatible corrucyst with some real data, and it has something destroying it": "ну разумеется, едва мы получаем совместимую корруцисту с реальными данными - её непонятно что начинает ломать изнутри"
    }, 
    entityDescriptions: {
        "the funny little room": cor_ru.entity_menu["the funny little room"].desc,
        "clemens romanus": cor_ru.entity_menu["clemens romanus"].desc,
    }
}



getLocalizationForPage(true) // --- ensuring that Nothing Gets Fucked Up
