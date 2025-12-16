/*
    cor-RU - a russian localization mod for corru.observer;
    see https://github.com/cor-RU/cor-RU for more info

    > localization/basement.js
    localization for /
    (---yes just /
    ---thats the starting page)
*/


env.localization.page['fbx'] = {dialogues: {},
    definitions: {}, 
    strings: {
        "about this job": "об этой работе",

        "DENDRITIC CYST": "ДЕНДРИТНАЯ ЦИСТА",
        "touch": "коснуться",
        "lift": "поднять",
        "the notes I got say that there were apparently a ton of these on the ship": "в отчете указано, что таких на корабле была целая куча",
        "all sorts of sizes too": "причём самых разных размеров",
        "but most were too heavy to retrieve... so we just got this small one": "большинство - слишком тяжелые, чтобы их можно было поднять. Эта - одна из тех, что поменьше.",
        "the dendritic cyst has a rigid outer shell. it's unlikely that there's any way to connect to it": "у дендритной цисты жёсткая внешняя оболочка. не похоже, что к ней можно подключиться",
        "the dendritic cyst is surprisingly heavy. turning it in your hands produces a cascade of metallic clinking noises from within. when you set it back down, its tendrils find a new orientation to support itself on the table": "дендритная циста на удивление тяжела. при поворотах слышно как внутри что-то звенит. едва ты опускаешь цисту на стол, ее отростки сдвигаются, чтобы равномерно перераспределить вес цисты по поверхности",

        "FRACTALLINE CYST": "ФРАКТАЛЬНАЯ ЦИСТА", 
        "nobody knows what this one is.. pretty sure it's dead though": "из наших никто не знает что это такое. Думаю оно уже сдохло.",
        "the fractalline cyst's outer shell is slimy and has some yield. if you squeezed it enough, it would probably turn to sludge... best to just leave this one alone": "оболочка фрактальной цисты склизская и упругая. сожмешь чуть сильнее - наверняка лопнет.. лучше не испытывать судьбу",

        "CYST": "ЦИСТА", 
        "so this is the mystery piece": "а вот и гвоздь программы",
        "it's in bizarrely good condition considering it was at the bottom of the ocean for however long it's been since, y'know": "в поразительно хорошем состоянии, учитывая как долго ей довелось проваляться на дне океана",
        "no clue what it is aside from some similar internal structure to network cysts we've found before": "понятия не имею для чего она нужна - ясно лишь что внутренняя структура походит на таковую у сетевых цист",
        "the cyst has a solid outer shell. a few circular points near the top are less firm than the rest. in your experience, these are usually connection points. you can definitely scan this point more thoroughly.": "оболочка цисты довольно твердая. в нескольких местах сверху цисты оболочка чуть тоньше. как подсказывает твой опыт, через такие точки легче всего установить соединение. стоит чуть внимательнее их изучить.",
        "depth scan": "подробное сканирование",
        "ANALYSIS::'valid nerve point';'connection enabled'": "АНАЛИЗ::'действующая нервная точка';'доступно подключение'",
        "::CORRUCYSTIC ENTITY": "`::КОРРУЦИСТОЗНАЯ СУЩНОСТЬ",
        "::NO FUNCTION SIGNATURE": "::БЕЗ ПОДПИСИ ФУНКЦИИ",
        "::CONNECTIVE MEMBRANE EXPOSED": "::ОБНАЖЁННАЯ СОЕДИНИТЕЛЬНАЯ МЕМБРАНА",

        "CYSTIC COLUMN": "ЦИСТОЗНАЯ КОЛОННА", 

        "CONNECTION POINT": "ТОЧКА ПОДКЛЮЧЕНИЯ",

        "attempt connection": "попытаться подключиться",
        "CONNECTION_POINT_LOCATED": "ОБНАРУЖЕНА_ТОЧКА_ПОДКЛЮЧЕНИЯ",
        "__COMMENCING__": "__ЗАПУСК_ПРОЦЕДУРЫ__",   
        
        "plastic box": "пластиковый ящик",
        "use to feed column": "покормить колонну",
        "empty plastic box": "пустой пластиковый ящик",

        "pistol": "пистолет",
        "kill dendritic cyst and feed column": "убить дендритную цисту и покормить колонну",

        "hey buddy": "эй дружище",
        "welcome back": "рад тебя видеть",
        "you ready to feed this thing?": "ну что, накормим эту штуку?",
        "haven't heard back on the request yet": "со мной ещё не связались по поводу запроса",
        "so, still killing time here": "так что пока делаем что хочется"
    },
    entityDescriptions: {
        "dendritic cyst": `::КОРРУЦИСТОЗНАЯ СУЩНОСТЬ
::ПОДПИСЬ ФУНКЦИИ: КОНТЕЙНЕР
::НЕТ ОБНАЖЁННОЙ СОЕДИНИТЕЛЬНОЙ ТКАНИ`,
        "fractalline cyst": `::КОРРУЦИСТОЗНАЯ СУЩНОСТЬ
::ПОВРЕЖДЁННАЯ ПОДПИСЬ ФУНКЦИИ
::НЕТ ОБНАЖЁННОЙ СОЕДИНИТЕЛЬНОЙ ТКАНИ`,
        "cystic column": `::КОРРУЦИСТОЗНАЯ СУЩНОСТЬ
::ПОДПИСЬ ФУНКЦИИ: ОБСЛУЖИВАНИЕ КОРРУЦИСТЫ
::НЕТ ОБНАЖЁННОЙ СОЕДИНИТЕЛЬНОЙ ТКАНИ`,
        "cyst": `::КОРРУЦИСТОЗНАЯ СУЩНОСТЬ
::НЕТ ПОДПИСИ ФУНКЦИИ
::ОБНАЖЁННАЯ СОЕДИНИТЕЛЬНАЯ МЕМБРАНА`,
        "connection point": `::КОМПОНЕНТ КОРРУЦИСТОЗНОЙ СУЩНОСТИ
::ДЕЙСТВИТЕЛЬНАЯ ТОЧКА СОЕДИНЕНИЯ`,
        "plastic box": `::СИНТЕТИЧЕСКИЙ КОНТЕЙНЕР
::СОДЕРЖИТ ИНЕРТНЫЙ МЕТАЛЛ`,
        "empty plastic box": `::СИНТЕТИЧЕСКИЙ КОНТЕЙНЕР
::ПУСТОЙ`,
        "pistol": `::ПНЕВМАТИЧЕСКИЙ ПИСТОЛЕТ С ВЫДВИГАЮЩИМСЯ УДАРНЫМ СТЕРЖНЕМ
::МОДЕЛЬ 2052 Г.Е.Т.
::ОБНАРУЖЕНЫ НЕЗАКОННЫЕ МОДИФИКАЦИИ`,
    }
}

// === DIALOGUES === //
    // see everystuff.js for depthrecovery dialogue

    
// == MOTH == //

env.localization.page["fbx"].dialogues.mthhubresp = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        где нашли эти цисты?<+>where
        что делать с этим пистолетом<+>gun
            SHOWIF::[["ep1_showmaterials", "both"], ["ep1_fed", true]]
        неважно<+>CHANGE::++moth
            FAKEEND::(назад)
`)
env.localization.page['fbx'].dialogues["mth++fbx"] = generateDialogueObject(`
start
    self
        у меня есть вопрос

    moth
        ага?
    
    RESPOBJ::mthhubresp

gun
    self
        так что, мы просто оставим этот пистолет?

    moth
        о, ну
        знаешь, он может пригодиться
        если честно мне просто не хотелось его ну вот прям щас возвращать лол
        вроде НИОКР он не сильно нужен, им нечасто приходится что-то убивать
        я верну попозже
    
    RESPOBJ::mthhubresp

where
    self
        откуда это всё достали?
    
    moth
        с какого-то крушения на дне океана недалеко от новой зеландии
        и под "недалеко" я имею в виду, типа, километров так за тыщу от юго-восточного берега
        просто нашли эти цисты в такой жопе мира что..
        ну, новая зеландия по сути является ближайшей к обломкам точкой, название которой знает кто-то кроме картографов.
        наши считают что обломки отплыли достаточно далеко от места, куда изначально упали
        по их оценкам, провалялось на дне всё это лет 20-30, если не больше

    RESPOBJ::mthhubresp
`)


env.localization.page['fbx'].dialogues["index"] = generateDialogueObject(`
start 
    moth
        эй, дружище, добро пожаловать 
        честно говоря, я думал ты не клюнешь на такую мелкую рыбеху
        в конце концов, слишком уж много сейчас в море находят обломков
        ладно, пока я все тут подготавливаю - можешь посмотреть с чем мы имеем дело
        
    sourceless
        декодирующие машины включаются, бросая свет на паутину проводов.
            EXEC::document.querySelectorAll('.backwall').forEach(e=>e.classList.add('active'))
        
    RESPONSES::self
        что это<+>whatis
        сесть<+>sit
            SHOWIF::["PAGE!!intrositting", false]
            EXEC::change('PAGE!!intrositting', true)

whatis
    self
        что это?
    moth
        находка с обесковских обломков под новой зеландией
        в отчете указано, что большая часть расплавилась - странно это, честно говоря...
        наибольшего внимания заслуживает элемент посередине
        все что связано с пьедесталами обычно очень важно. странно, что этот экземпляр без метки.
        алекс отсканировал внутреннюю структуру: говорит, мол, похоже на сетевой узел
        не знаю даже, примет ли он мыслекол
        тебе в любом случае заплатят, так что.. дерзай.
        
    RESPONSES::self
        сесть<+>sit
            SHOWIF::["PAGE!!intrositting", false]
            EXEC::change('PAGE!!intrositting', true)
        активировать мыслекол<+>END
            SHOWIF::"PAGE!!intrositting"
        
sit
    sourceless
        стальной стул громко скрежещет о бетон, когда ты садишься.
            EXEC::env.introSit()
            WAIT::3500

    sourceless
        стул холодный и неудобный. свет от твоей спецовки отражается в жемчужных глубинах цисты
        
    moth
        что делать сам знаешь. даю разрешение на активацию мыслекола

    RESPONSES::self
        что это<+>whatis
            SHOWONCE::
        активировать мыслекол<+>END
        
END::env.enableSpikeCursor();MUI('deprohibit')
`)



getLocalizationForPage(true) // --- ensuring that Nothing Gets Fucked Up
