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
        что теперь будем делать с пистолетом?

    moth
        ну, оставим конечно
        может пригодиться
        если честно.. не хочу его вот прям щас возвращать, хех
        вроде НИОКР он не сильно нужен, им нечасто приходится что-то убивать..
        верну его позже
    
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

//Ep1
env.localization.page['fbx'].dialogues["ep1feed"] = generateDialogueObject(` 
start
    moth
        привет, ты как раз вовремя - погляди что к нам пришло
            SHOWIF::[["TEMP!!sat", false]]
        погляди что к нам пришло
            SHOWIF::[["TEMP!!sat"]]

    sourceless
        В РУКАХ МОЛИ ПЛАСТИКОВЫЙ КОНТЕЙНЕР ДОВЕРХУ ЗАПОЛНЕННЫЙ КОРОТКИМИ МЕДНЫМИ ТРУБКАМИ
        МОЛЬ СТАВИТ ЕГО НА СТОЛ, А ФРАКТАЛЬНУЮ ЦИСТУ УБИРАЕТ, ЧТОБЫ ОСВОБОДИТЬ МЕСТО
            EXEC::content.classList.add('showcopper')

    moth
        Хмм.. Она вроде как мертва, потому думаю никто не обидится, если я..
    
    sourceless
        ФРАКТАЛЬНАЯ ЦИСТА ПЕРЕМЕЩЕНА В БЛИЖАЙШИЙ КОНТЕЙНЕР ДЛЯ ОПАСНЫХ ОТХОДОВ
    
    moth
        так, с этим вроде разобрались. ну что, готов покормить корруцисту?
            SHOWIF::[["ep0_epilogue", "started"]]

        и!
            SHOWIF::[["ep0_epilogue", "done"]]

    sourceless
        МОЛЬ КАРТИННО ДОСТАЕТ ИЗ ЧЕХЛА ЦИЛИНДРИЧЕСКИЙ ПИСТОЛЕТ И КЛАДЁТ ЕГО ОКОЛО ДЕНДРИТНОЙ ЦИСТЫ
            SHOWIF::[["ep0_epilogue", "done"]]
            EXEC::content.classList.add('showgun')
    
    moth
        мой запрос на пушку поднял в отделе кучу шума, кто бы мог подумать
            SHOWIF::[["ep0_epilogue", "done"]]
        к счастью, после того как я объяснил что этой пушкой собираюсь убивать корруцистозный контейнер, мне выдали кое-что получше огнестрела
            SHOWIF::[["ep0_epilogue", "done"]]
        это пистолет для забоя скота, который наши светлые умы модифицировали для устранения цистозной техники
            SHOWIF::[["ep0_epilogue", "done"]]
        он ничем не стреляет - просто разгоняет до высоких скоростей небольшой шип. работает на электромагнитах кажись.
            SHOWIF::[["ep0_epilogue", "done"]]
        у тебя не без причины мог возникнуть вопрос: "накой хрен нам и то и то?"
            SHOWIF::[["ep0_epilogue", "done"]]
        ответ прост - я забыл отменить заказ на медь.<br>когда понял - ящик уже доставили
            SHOWIF::[["ep0_epilogue", "done"]]
        в целом я думаю это неплохо, ведь теперь у нас есть выбор: мы либо используем медь, либо убиваем контейнер и находим применение 'обработанным металлам' из запасов акизет
            SHOWIF::[["ep0_epilogue", "done"]]
        мне кажется что с медью работать как-то безопаснее. она, в конце концов, не может дать сдачи
            SHOWIF::[["ep0_epilogue", "done"]]
        специалист тут, впрочем, именно ты, потому делай как знаешь
            SHOWIF::[["ep0_epilogue", "done"]]

    RESPONSES::self
        хорошо<+>END
        
END::change('ep1_showmaterials', check('ep0_epilogue') == 'done' ? 'both' : 'copper')
`)

env.localization.page['fbx'].dialogues["ep1feed_container"] = generateDialogueObject(` 
start
    sourceless
        ТЫ БЕРЁШЬ УБОЙНЫЙ ПИСТОЛЕТ И НАВОДИШЬСЯ НА ГОЛУЮ СТЕНУ, ПОДАЛЬШЕ ОТ МОЛИ И ОБОРУДОВАНИЯ
        ПРИ НАЖАТИИ НА СПУСКОВОЙ КРЮЧОК ИЗ ДУЛА ПИСТОЛЕТА С ГРОМКИМ ШИПЕНИЕМ ВЫХОДИТ ЗАОСТРЁННЫЙ СТЕРЖЕНЬ 
        ЧЕРЕЗ ПАРУ МГНОВЕНИЙ ОН ВТЯГИВАЕТСЯ НАЗАД В ПИСТОЛЕТ
        УСТРОЙСТВО ВНУТРИ НАЧИНАЕТ ЖУЖЖАТЬ, ПО-ВИДИМОМУ ПЕРЕЗАРЯЖАЯ ОРУДИЕ

    self
        Ладно
        Настало время убивать

    moth
        из уст вооружённого человека эта фраза звучит гораздо страшнее, хах

    RESPONSES::self
        отодвинуть главную цисту<+>move
            EXEC::env.spikeMoveLoopPaused = true;body.classList.add('prepgrab');document.querySelector('.cursor').id = "cursor-upper-left"
    
move
    sourceless
        ТЫ ПЕРЕМЕЩАЕШЬ МЫСЛЕКОЛ И ХВАТАЕШЬ ЦИСТУ С ПОМОЩЬЮ ВСПОМОГАТЕЛЬНЫХ ПРИВОДОВ
            EXEC::body.classList.add('cystgrab')
        СТЕКЛО ЦИСТЫ ЧУТЬ ПРОГИБАЕТСЯ, УЛУЧШАЯ СЦЕПЛЕНИЕ С МЫСЛЕКОЛОМ
        ТЫ ТЯНЕШЬ ЦИСТУ ВВЕРХ, СОПРОТИВЛЯЯСЬ ЛЁГКОМУ МАГНИТНОМУ ПРИТЯЖЕНИЮ КОЛОННЫ
            EXEC::body.classList.add('cystlift', 'containerseq')
        
    moth
        круто. главное не сжимай слишком сильно

    RESPONSES::self
        взять контейнер<+>grab

grab
    sourceless
        ТЫ ТЯНЕШЬСЯ К КОРРУЦИСТОЗНОМУ КОНТЕЙНЕРУ И ПОДНИМАЕШЬ ЕГО СО СТОЛА, УДЕРЖИВАЯ ОСНОВАНИЕМ ВВЕРХ
            WAIT::1000
            EXEC::body.classList.add('containerfade');setTimeout(()=>body.classList.add('containercenter'), 400)
        ДЕНДРИТНЫЕ ОТРОСТКИ КОНТЕЙНЕРА ЛЕНИВО ШЕВЕЛЯТСЯ ТУДА-СЮДА
    
    moth
        развледруг сказал что если ударить по основанию, то контейнер мгновенно умрёт
        а если промажешь, то он.. как же он тогда выразился?..
        'жестоко отреагирует на травмы'
        ну, вряд-ли он настолько уж опасный - в конце концов этот контейнер один из мелких, да и спецовка у тебя амортизирующая
        но.. чисто на всякий случай 
        если захочешь от себя эту хрень отбросить - бросай подальше от аппаратуры

    RESPONSES::self
        убить контейнер<+>kill

kill
    sourceless
        ТЫ РАЗДВИГАЕШЬ ПИСТОЛЕТОМ ОПОРНЫЕ ОТРОСТКИ ЦИСТЫ
            EXEC::body.classList.add('containeraim')
        НЕСКОЛЬКО ОТРОСТКОВ ЦЕПЛЯЕТСЯ К КОРПУСУ ПУШКИ, ПЫТАЯСЬ К НЕЙ ПОДКЛЮЧИТЬСЯ. СПУСТЯ ПАРУ МГНОВЕНИЙ ОТРОСТКИ ОТСОЕДИНЯЮТСЯ
        ДУЛО УСТРОЙСТВА УПИРАЕТСЯ В СТЕКЛЯННУЮ СТЕНКУ ЦИСТЫ. ТЫ СПУСКАЕШЬ КУРОК
        ВНЕЗАПНЫЙ ТОЛЧОК. ПО КОМНАТЕ ПРОНОСИТСЯ ЗВУК ТРЕСНУВШЕГО СТЕКЛА, И ОТРОСТКИ КОНТЕЙНЕРА НАЧИНАЮТ БЕСПОРЯДОЧНО БИТЬ ПО ВСЕМУ ВОКРУГ
            WAIT::2000
            EXEC::env.intro.glass.rate(1.25);env.intro.glass.play();flash(true);setTimeout(()=>body.classList.add('containershot'), 200);setTimeout(()=>flash(false), 400)
        ЧЕРЕЗ СЕКУНДУ ОНИ ОСЕДАЮТ И НАЧИНАЮТ ПЛАВИТЬСЯ
            EXEC::body.classList.remove('containershot')
        ТЫ БРОСАЕШЬ КОНТЕЙНЕР В ПОЛОСТЬ КОЛОННЫ, ПОКА ТОТ НЕ РАСПЛАВИЛСЯ ЦЕЛИКОМ
            EXEC::body.classList.add('containerdrop');body.classList.remove('containerfade')
        НА ДНЕ КОЛОННЫ МОЖНО ЗАМЕТИТЬ КАКОЙ-ТО ЗОЛОТОЙ МЕТАЛЛ, КОТОРЫЙ ВСКОРЕ СКРЫВАЕТСЯ ПОД ОСТАНКАМИ РАСПЛАВИВШЕГОСЯ КОНТЕЙНЕРА
            EXEC::body.classList.remove('containeraim')
        ТЫ ОПУСКАЕШЬ ЦИСТУ НАЗАД И КЛАДЁШЬ ПИСТОЛЕТ НА СТОЛ
            EXEC::body.classList.remove('cystlift', 'containercenter')
    
    moth
        ё
        ловко ты его - если бы контейнер расплескался, мы бы замаялись это всё чистить
        не говоря даже о том, что эта жижа скорее всего опасна
            EXEC::body.classList.remove('cystgrab');document.querySelector('.cursor').style.transform = "translate(0, 50vh)"
        в целом неплохо всё прошло - я боялся что будет хуже
        давай тогда переподключаться, чтоль?
        
    RESPONSES::self
        ладно<+>END

END::env.spikeMoveLoopPaused = false;body.classList.remove('prepgrab', 'containerseq');change('ep1_fed', 'container')
`)

env.localization.page['fbx'].dialogues["ep1feed_copper"] = generateDialogueObject(` 
start
    self
        ну-с, приступим
            SHOWIF::[["ep0_epilogue", "started"]]
        давай лучше медью        
            SHOWIF::[["ep0_epilogue", "done"]]

    sourceless
        ТЫ ПОДОДВИГАЕШЬ ПЛАСТИКОВЫЙ КОНТЕЙНЕР И СНИМАЕШЬ С НЕГО КРЫШКУ
        МЕДНЫЕ ТРУБКИ ВНУТРИ БЛЕСТЯТ ПОД НАПРАВЛЕННЫМ СВЕТОМ ПОДВАЛА

    moth
        так!
        развледруг сказал что нам надо скормить медь колонне, а та займётся всем остальным
        вопрос как это сделать. может просто насыпать в углубление? оно вроде достаточно большое, чтобы всё влезло

    RESPONSES::self
        отодвинуть главную цисту<+>move
            EXEC::env.spikeMoveLoopPaused = true;body.classList.add('prepgrab');document.querySelector('.cursor').id = "cursor-upper-left"
    
move
    sourceless
        ТЫ ПЕРЕМЕЩАЕШЬ МЫСЛЕКОЛ И ХВАТАЕШЬ ЦИСТУ С ПОМОЩЬЮ ВСПОМОГАТЕЛЬНЫХ ПРИВОДОВ
            EXEC::body.classList.add('cystgrab')
        СТЕКЛО ЦИСТЫ ЧУТЬ ПРОГИБАЕТСЯ, УЛУЧШАЯ СЦЕПЛЕНИЕ С МЫСЛЕКОЛОМ
        ТЫ ТЯНЕШЬ ЦИСТУ ВВЕРХ, СОПРОТИВЛЯЯСЬ ЛЁГКОМУ МАГНИТНОМУ ПРИТЯЖЕНИЮ КОЛОННЫ
            EXEC::body.classList.add('cystlift')
        
    moth
        круто. главное не сжимай слишком сильно

    RESPONSES::self
        засыпать медь<+>dump
            EXEC::body.classList.add('pourcopper')

dump
    sourceless
        ТЫ НАКЛОНЯЕШЬ КОНТЕЙНЕР И МАЛЕНЬКИМИ ПОРЦИЯМИ ССЫПАЕШЬ ИЗ НЕГО МЕДЬ
        ЕДВА ГРОМКО ЗВЕНЯЩИЕ ТРУБКИ ЗАПОЛНЯЮТ КОЛОННУ ЦЕЛИКОМ, ИЗ ЕЁ ОСНОВАНИЯ НАЧИНАЕТ ВЫХОДИТЬ ПОХОЖАЯ НА РТУТЬ БЛЕСТЯЩАЯ ЖИДКОСТЬ
        ОНА ПОЛНОСТЬЮ ПОКРЫВАЕТ ПОВЕРХНОСТЬ ТРУБОК, БЕЗ ПЕРЕРЫВА КРУЖИТСЯ И ВЬЁТСЯ ВОКРУГ НИХ СЛОВНО ЖИВАЯ
        МОЛЬ НАЖИМАЕТ НА ПАРУ КНОПОК И ВЕНТИЛЯТОРЫ В ПОМЕЩЕНИИ ПРИБАВЛЯЮТ ПАРУ ДЕЦИБЕЛ В ГРОМКОСТИ
            EXEC::body.classList.add('pourcopper')
        
    moth
        на всякий

    sourceless
        ТЫ ОТОДВИГАЕШЬ ПУСТОЙ КОНТЕЙНЕР
            EXEC::body.classList.add('emptycopper');body.classList.remove('pourcopper', 'cystlift')

    RESPONSES::self
        и всё?<+>done

done
    self
        И всё?
            EXEC::body.classList.remove('cystgrab');document.querySelector('.cursor').style.transform = "translate(0, 50vh)"
    
    moth
        ты так спрашиваешь, будто бы я знаю ответ
        ну, чё-то там заработало
        но думаю лучше подключиться и спросить у развледруга

    RESPONSES::self
        ладно<+>END

END::env.spikeMoveLoopPaused = false;body.classList.remove('prepgrab');;change('ep1_fed', 'copper')
`)



getLocalizationForPage(true) // --- ensuring that Nothing Gets Fucked Up
