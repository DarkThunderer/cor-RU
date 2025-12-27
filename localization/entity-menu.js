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

    "proxyfriend": {
        name: `проксидруг`,
        desc: `::ОТЗЫВЧИВАЯ МЫСЛЕФОРМА<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'обслуживающий придаток';'соединён с главным ассистентом'`
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
    "stre wal k": {
        name: `прох ож ий`,
        desc: `::НЕПОЛНОЦЕННАЯ МЫСЛЕФОРМА<br>::ПОДПИСЬ НЕРАЗБОРЧИВА<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'сильно деградировавший визуальный профиль';'чрезвычайно низкая связность'">::ВЫСОКАЯ БЕССВЯЗНОСТЬ</span><br>::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'больно'</span>`
    },
    "slim streetwalker": {
        name: `тощий прохожий`,
        desc: `::ОТЗЫВЧИВАЯ МЫСЛЕФОРМА<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'вспоминание'<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'сильно деградировавший визуальный профиль','низкая связность'">::ВЫСОКАЯ БЕССВЯЗНОСТЬ</span>`
    },
    "electric face box": {
        name: `молниевая коробка с лицами`,
        desc: `::ОТЗЫВЧИВАЯ МЫСЛЕФОРМА<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'вспоминание';'повторяющаяся обстановка'<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'деградировавший визуальный профиль'">::ОБНАРУЖЕНА БЕССВЯЗНОСТЬ</span>`
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
    "parasite plane": {
        name: `стол для паразита`,
        desc: `::ЭМПИРИЧЕСКАЯ МЫСЛЕФОРМА<br>::НЕВИЗУАЛИЗИРУЕМА<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'пункт назначения превышает порог бессвязности';'рекомендуется починка'">::ЗАПРЕДЕЛЬНАЯ БЕССВЯЗНОСТЬ</span><br>::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'простая стратегическая игра про кражи';'любимая игра в олтазни'</span>`
    },
    "dull heart": {
        name: `сердце серое`,
        desc: `::НЕОТЗЫВЧИВАЯ МЫСЛЕФОРМА<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'повторяющаяся обстановка'<br>::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'прибор, принципы работы которого за пределами моего понимания';'использует хватку за пространство <span class='code'>серое</span> для перемещения';'рекомендуется на него не смотреть'</span>`
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
        name: `забавная комнатка`,
        desc: `::ЭМПИРИЧЕСКАЯ МЫСЛЕФОРМА`
    },

    "clemens romanus": {
        name: `clemens romanus`,
        desc: `::ПРОСТРАНСТВЕННАЯ МЫСЛЕФОРМА<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'не указано'<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'низкая связность'">::ОБНАРУЖЕНА БЕССВЯЗНОСТЬ</span>`
    },

    // === uncosm
    "no no no no": {
        name: `нет нет нет нет`,
        desc: `::ВЫСКАЗЫВАЮЩАЯ МЫСЛЕФОРМА<br>::СОДЕРЖАНИЕ::'<br><span>ХВАТИТ ХВАТИТ ХВАТИТ</span><br><span>я знаю ЗНАЮ ЗНАЮ ЗНАЮ</span><br><span>ХВАТИТ ХВАТИТ ХВАТИТ ЗНАЮ ХВАТИТ</span><br><span>ПЕРЕСТАНЬ ПЕРЕСТАНЬ</span>'`
    },
    "memory hole": {
        name: `яма памяти`,
        desc: `::СОЕДИНИТЕЛЬНАЯ МЫСЛЕФОРМА<br>::ПУНКТ НАЗНАЧЕНИЯ::'недействителен';..ОШИБКА::ИÓỳ=ОШИБКА::;;::-¼¯-ÿН£«â<br>ОШИБКА::ªµõ„'(‚ôÇд7÷ Çe`
    },
    "memoryhole": {
        name: `ямапамяти`,
        desc: `::НЕОБРАБАТЫВАЕМАЯ МЫСЛЕФОРМА<br>::<span definition="ПРИМЕЧАНИЕ::'нестандартный формат'">НЕОБЫЧНАЯ ПОДПИСЬ</span><br>::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'помощи не жди хехехе'</span>`
    },
    "home": {
        name: `дом`,
        desc: `::СОЕДИНИТЕЛЬНАЯ МЫСЛЕФОРМА<br>::ПУНКТ НАЗНАЧЕНИЯ::'низкоразмерное мыслепространство';'внутреннее'<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'тотальное нарушение абстракции';'всё ещё визуализируемо'">::ОБНАРУЖЕНА БЕССВЯЗНОСТЬ</span>`
    },

    // === recosm
    "god": {
        name: `бог`,
        desc: `::НЕПОЛНОЦЕННАЯ МЫСЛЕФОРМА<br>::ПОДПИСЬ НЕРАЗБОРЧИВА<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'связность отсутствует'">::ОБНАРУЖЕНА БЕССВЯЗНОСТЬ</span>`
    },
    "friend": {
        name: `друг`,
        desc: `::НЕПОЛНОЦЕННАЯ МЫСЛЕФОРМА<br>::ПОДПИСЬ НЕРАЗБОРЧИВА<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'связность отсутствует'">::ОБНАРУЖЕНА БЕССВЯЗНОСТЬ</span>`
    },
    "proxy generation point": {
        name: `точка генерации прокси`,
        desc: `::СОЕДИНИТЕЛЬНАЯ МЫСЛЕФОРМА<br>::ПУНКТ НАЗНАЧЕНИЯ::'низкоразмерное мыслепространство';'внутреннее'<br>::АНАЛИЗ::'мыслеформенная магистраль';'не подходит для навигации'`
    },
    "membrane lesion": {
        name: `разрыв мембраны`,
        desc: `::КОРРУЦИСТОЗНЫЙ КОМПОНЕНТ<br>::<span definition="ПРИМЕЧАНИЕ::'пробел в визуализации';'отражает нейронные повреждения';'рекомендуется записаться на приём к специалисту из Mindsci'">НЕ СУЩНОСТЬ</span>`
    },

    // === cache
    "the storm": {
        name: `шторм`,
        desc: `::НЕПОЛНОЦЕННАЯ МЫСЛЕФОРМА<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'уникальная обстановка'<br>::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'искра, что соединила наши беды';'моя самая главная ошибка'</span>`
    },
    "polygonation spire": {
        name: `шпиль полигонации`,
        desc: `::НЕПОЛНОЦЕННАЯ МЫСЛЕФОРМА<br>::ЯВНОЕ НАЗНАЧЕНИЕ::'уникальная обстановка'<br>::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'близнецы их просто обожают';'продают синтетические копии'</span><br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'деградировавший визуальный профиль'">::ОБНАРУЖЕНА БЕССВЯЗНОСТЬ</span>`
    },
    "gate::¿þ©ÿ’ýäý": {
        name: `врата::¿þ©ÿ’ýäý`,
        desc: `::СОЕДИНИТЕЛЬНАЯ МЫСЛЕФОРМА<br>::ПУНКТ НАЗНАЧЕНИЯ::'низкоразмерное мыслепространство';'внутреннее'<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'связность отсутствует'">::ОБНАРУЖЕНА БЕССВЯЗНОСТЬ</span><br><span definition="ПРИМЕЧАНИЕ::'ссылающийся на внешний контекстный массив'::МАСКА_РАДОСТИ">::ВНУТРЕННИЙ КОНТЕКСТ</span>::<span class="bright-color" definition="АНАЛИЗ::'мыслеформа либо полностью уничтожена, либо притворяется полностью уничтоженной';'обычно ненамеренно'">'скрыта из-за неисправной или отсутствующей оболочки'</span>`
    },
    "ÉœÙ]ïå¥¹": {
        name: `ÉœÙ]ïå¥¹`,
        desc: `::НЕПОЛНОЦЕННАЯ МЫСЛЕФОРМА<br>::ПОДПИСЬ НЕРАЗБОРЧИВА`
    },
    "? ???? ?? ?? ??": {
        name: `? ???? ?? ?? ??`,
        desc: `::НЕПОЛНОЦЕННАЯ МЫСЛЕФОРМА<br>::ПОДПИСЬ НЕРАЗБОРЧИВА`
    },
    "Ò½º": {
        name: `Ò½º`,
        desc: `::НЕПОЛНОЦЕННАЯ МЫСЛЕФОРМА<br>::ПОДПИСЬ НЕРАЗБОРЧИВА`
    },
    "±L~>#»{Â_÷ß": {
        name: `±L~>#»{Â_÷ß"`,
        desc: `::СОЕДИНИТЕЛЬНАЯ МЫСЛЕФОРМА<br>::ПУНКТ НАЗНАЧЕНИЯ::'неизвестное мыслепространство';'некорректное';...ОШИБКА::'нет допУ½…’ж‡à<br>ОШИБКА::;§¤÷ª£Н±)ˆ.µm<br>::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'н¯+е²×e под хо¬дй'</span><br>ОШИБКА::Âкк¼¬ñ°×ê±•AӰй¤îyӰ×|Ӱ`
    },

    // === embassy menu
    "recollection::better times": {
        name: `воспоминание::отпуск`,
        desc: `::ЭМПИРИЧЕСКАЯ МЫСЛЕФОРМА<br>::ОПОВЕЩЕНИЕ::<span style="color:var(--bright-color)">'сопредельный поток';'при окончании вспоминания';'поток начинается с начала'</span><br>::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'для того чтобы уместить сюда истину пришлось пожертвовать многими воспоминаниями';'пусть останется хоть этот кусочек радости'</span>`
    },
    "recollection::discovery": {
        name: `воспоминание::открытие`,
        desc: `::ЭМПИРИЧЕСКАЯ МЫСЛЕФОРМА<br>::ОПОВЕЩЕНИЕ::<span style="color:var(--bright-color)">'сопредельный поток';'при окончании вспоминания';'поток начинается с начала'</span><br>::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'последний благой взор'</span>`
    },
    "recollection::suspicion": {
        name: `воспоминание::подозрение`,
        desc: `::ЭМПИРИЧЕСКАЯ МЫСЛЕФОРМА<br>::ОПОВЕЩЕНИЕ::<span style="color:var(--bright-color)">'сопредельный поток';'при окончании вспоминания';'поток начинается с начала'</span><br>::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'глаз велзи сияет радостью'</span>`
    },
    "recollection::collapse": {
        name: `воспоминание::коллапс`,
        desc: `::ЭМПИРИЧЕСКАЯ МЫСЛЕФОРМА<br>::ОПОВЕЩЕНИЕ::<span style="color:var(--bright-color)">'использует методы'::ВСТРОЕННОЙ_ИТЕРАЦИИ::</span><br>::ПРИМЕЧАНИЕ::<span style="color:var(--bright-color)">'будет доступна возможность сохранять и воспроизводить итерации'</span><br>::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'если бы он только следовал договорённостям..'</span>`
    },
    "recollection::Aæ§<äYf¹L": {
        name: `воспоминание::Aæ§<äУф¹Л`,
        desc: `::ЭМПИРИЧЕСКАЯ МЫСЛЕФОРМА<br>::НЕВИЗУАЛИЗИРУЕМА<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'пункт назначения превышает порог бессвязности';'рекомендуется починка'">::ЗАПРЕДЕЛЬНАЯ БЕССВЯЗНОСТЬ</span>`
    },
    "recollection::ø¥¬À‰": {
        name: `воспоминание::ø¥¬À‰`,
        desc: `::ЭМПИРИЧЕСКАЯ МЫСЛЕФОРМА<br>::НЕВИЗУАЛИЗИРУЕМА<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'пункт назначения превышает порог бессвязности';'рекомендуется починка'">::ЗАПРЕДЕЛЬНАЯ БЕССВЯЗНОСТЬ</span>`
    },
    "recollection::„²!Äë±#Rã": {
        name: `воспоминание::„²!Äë±#Рã`,
        desc: `::ЭМПИРИЧЕСКАЯ МЫСЛЕФОРМА<br>::НЕВИЗУАЛИЗИРУЕМА<br><span style="color: var(--obesk-color)" definition="АНАЛИЗ::'пункт назначения превышает порог бессвязности';'рекомендуется починка'">::ЗАПРЕДЕЛЬНАЯ БЕССВЯЗНОСТЬ</span>`
    }
}

if(check('hub__funfriend-ep1fed')) {
    cor_ru.entity_menu["the embassy"] = {
        name: `посольство`,
        desc: `::ПРОСТРАНСТВЕННАЯ МЫСЛЕФОРМА<br>::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'представление';'велзи вволю посмеялся'</span>`
    }
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
