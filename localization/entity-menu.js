/*
    cor-RU - a russian localization mod for corru.observer;
    see https://github.com/cor-RU/cor-RU for more info

    > localization/entity-menu.js
    almost all the fun stuff like entity names and descriptions is kept here!
    this is both for the entity menu and for easy storage of everything
*/


getLocalizationForPage(true); // --- we call it so often because we really REALLY need to make sure that all the definitions are READY for this part. if we dont do this sometimes it just crumbles for no reason. shrug

cor_ru.entity_menu = {
    // --- rrly proud of this shit i feel so smart
    // do it not like you would in env.localization
    /*
    "original entity name": {
        name: `localized name`,
        desc: `localized exm description`
    },
    you can reference it in other parts of the code later so that all stays consistent
    do not forget about <br>'s!!!!!!!!!!!!!!!!!!!!!! place <br>'s !!!!!!!!!!!!!!!!!!!!*/


    // === localhost
    "funfriend": {
        name: `развледруг`,
        desc: `::ОТЗЫВЧИВАЯ МЫСЛЕФОРМА<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'управление системой';'ассистент'`
    },

    // === their city
    "glimmering spires mark their cities": {
        name: `блистающие шпили венчают их города`,
        desc: `::ВЫСКАЗЫВАЮЩАЯ МЫСЛЕФОРМА<br>::СОДЕРЖАНИЕ::'<br><span>блистающие шпили венчают их города</span><br><span>сотканные из мёртвого стекла и металла</span><br><span>такие высокие!!! выше, чем высочайшие из <span class="code">вейльков</span>!</span><br><span>и все же стоят в молчании...</span><br><span>однажды они задышат</span><br><span>и наши потерянные близнецы разделят с нами знание</span>'`
    },
    "these grand icons of their control": {
        name: `величественные символы их власти`,
        desc: `::ВЫСКАЗЫВАЮЩАЯ МЫСЛЕФОРМА<br>::СОДЕРЖАНИЕ::'<br><span>величественные символы их власти</span><br><span>пусть они и не наши</span><br><span>я чувствую гордость</span><br><span>за то что светлые близнецы покорили свою <span class="code">поверхность</span>!</span>'`
    },
    "they watch": {
        name: `они смотрят`,
        desc: `::ПРОСТРАНСТВЕННАЯ МЫСЛЕФОРМА<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'вспоминание'<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'низкое разделение'">::ОБНАРУЖЕНА БЕССВЯЗНОСТЬ</span><br>::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'в вечном скептицизме'</span>`
    },

    // === city surface
    "cashier": {
        name: `кассир`,
        desc: `::ОТЗЫВЧИВАЯ МЫСЛЕФОРМА<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'вспоминание'<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'деградировавший визуальный профиль'">::ОБНАРУЖЕНА БЕССВЯЗНОСТЬ</span>`,
    },
    "envoy": {
        name: `посол`,
        desc: `::ОТЗЫВЧИВАЯ МЫСЛЕФОРМА<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'вспоминание'<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'деградировавший визуальный профиль'">::ОБНАРУЖЕНА БЕССВЯЗНОСТЬ</span>`
    },
    "menu": {
        name: `меню`,
        desc: `::ОТЗЫВЧИВАЯ МЫСЛЕФОРМА<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'вспоминание';'повторяющаяся обстановка'`
    },
    "cloaked streetwalker": {
        name: `прохожий в накидке`,
        desc: `::ОТЗЫВЧИВАЯ МЫСЛЕФОРМА<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'вспоминание'<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'деградировавший визуальный профиль'">::ОБНАРУЖЕНА БЕССВЯЗНОСТЬ</span>`
    },
    "the room high up": {
        name: `комната высоко наверху`,
        desc: `::ЭМПИРИЧЕСКАЯ МЫСЛЕФОРМА<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'противоречивые источники памяти'">::ОБНАРУЖЕНА БЕССВЯЗНОСТЬ</span>`
    },

    // === the void
    "our dull vessel": {
        name: `наше судно серое`,
        desc: `::ПРОСТРАНСТВЕННАЯ МЫСЛЕФОРМА<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'вспоминание';'повторяющаяся локация';'изменение состояния мыслеформ'<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'некоторые элементы обладают предельно низкой связностью'">::ОБНАРУЖЕНА БЕССВЯЗНОСТЬ</span>`
    },
    "gate::the dull contrivance": {
        name: `врата::открытие серое`,
        desc: `::СОЕДИНИТЕЛЬНАЯ МЫСЛЕФОРМА<br>::ТОЧКА НАЗНАЧЕНИЯ::ОШИБКА::'необрабатываемая сущность'::НЕВИЗУАЛИЗИРУЕМА<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'пункт назначения превышает порог бессвязности';'рекомендуется починка'">::ЗАПРЕДЕЛЬНАЯ БЕССВЯЗНОСТЬ</span>`
    },

    // === our dull vessel
    "pilot cyst": {
        name: `пилотная циста`,
        desc: `::ОТЗЫВЧИВАЯ МЫСЛЕФОРМА<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'вспоминание'<br><span style="color: var(--obesk-color)" definition="ПРЕДУПРЕЖДЕНИЕ::'большая часть сущности необрабатываема';'может быть неточной'">::ОБНАРУЖЕНА БЕССВЯЗНОСТЬ</span><br>::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'великий разум моего судна'</span>`
    },
    "glazika": {
        name: `глазика`,
        desc: `::ОТЗЫВЧИВАЯ МЫСЛЕФОРМА<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'вспоминание'`
    },
    "container": {
        name: `контейнер`,
        desc: `::НЕОТЗЫВЧИВАЯ МЫСЛЕФОРМА<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'повторяющаяся обстановка'<br>::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'обработанные металлы, легкодоступные'</span>`
    },

    // === their waters
    "gate::the depths": {
        name: `врата::глубины`,
        desc: `::СОЕДИНИТЕЛЬНАЯ МЫСЛЕФОРМА<br>::ПУНКТ НАЗНАЧЕНИЯ::'низкоразмерное мыслепространство';'внутреннее'<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'частичное нарушение связности'">::ОБНАРУЖЕНА БЕССВЯЗНОСТЬ</span><br>::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'что ты здесь забыл'</span>`
    },
    "their vessel": {
        name: `их судно`,
        desc: `::ПРОСТРАНСТВЕННАЯ МЫСЛЕФОРМА<br>::НИЗКОРАЗМЕРНАЯ<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'вспоминание'<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'множество сущностей с низкой связностью'">::ОБНАРУЖЕНА БЕССВЯЗНОСТЬ</span><br>::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'мёртвые суда окружили наш <span class="code">шпиль</span>';'близнецы быстро нас нашли'</span>`
    },
    "stilted shore": {
        name: `неестественный берег`,
        desc: `::НЕОТЗЫВЧИВАЯ МЫСЛЕФОРМА<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'вспоминание';'символическое место'<br>::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'сцена нашего ${processDefinitionsInString("θтрёхглазого")} представления'</span>`
    },
    "the embassy": {
        name: `посольство`,
        desc: `::ПРОСТРАНСТВЕННАЯ МЫСЛЕФОРМА<br>ОШИБКА::'необрабатываемая сущность'::НЕВИЗУАЛИЗИРУЕМА<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'пункт назначения превышает порог бессвязности';'рекомендуется починка'">::ЗАПРЕДЕЛЬНАЯ БЕССВЯЗНОСТЬ</span>`
    },

    // === their vessel
    "the funny little room": {
        name: `забавная маленькая комната`,
        desc: `::ЭМПИРИЧЕСКАЯ МЫСЛЕФОРМА`
    },
}

cor_ru.getEntityMenuNames = function() { // to adapt the lil definition-like names in entmenu whilist avoiding strings bleeding in 
    let names = []
    for (let i = 0; i < Object.keys(cor_ru.entity_menu).length; i++) { 
        names.push(["ENTITY::'"+Object.keys(cor_ru.entity_menu)[i]+"'", "СУЩНОСТЬ::'"+cor_ru.entity_menu[Object.keys(cor_ru.entity_menu)[i]].name+"'"])
    }
    names = Object.fromEntries(names)
    return Object.assign(env.localization['strings'], names)
}

cor_ru.getEntityMenuNames();

getLocalizationForPage(true);
