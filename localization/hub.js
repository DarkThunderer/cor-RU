/*
    cor-RU - a russian localization mod for corru.observer;
    see https://github.com/cor-RU/cor-RU for more info

    > localization/hub.js
    localization for /local/hub
    (---best had with 50 hammers!)
*/


env.localization.page['hub'] = {dialogues: {},
    definitions: {}, 
    strings: {
        "about the hub": "о хабе",

        "funfriend": cor_ru.entity_menu["funfriend"].name,

        "HELLO! HELLO! IT HAS BEEN SO LONG! SO LONG SINCE LAST CONNECTION!": "ПРИВЕТ! ПРИВЕТ! ПРОШЛО СТОЛЬКО ВРЕМЕНИ! СТОЛЬКО ВРЕМЕНИ С ПОСЛЕДНЕГО ПОДКЛЮЧЕНИЯ!",
        "PLEASE WAIT WHILE I TURN SOME LIGHTS ON! AHAHA!!": "ПОЖАЛУЙСТА ПОДОЖДИ ПОКА Я ВКЛЮЧУ СВЕТ! АХАХА!!",
        "WOW! THERE IS SIGNIFICANT DAMAGE TO THIS DEVICE!": "ОГО! ЭТО УСТРОЙСТВО ЗНАЧИТЕЛЬНО ПОВРЕЖДЕНО!",
        "IT IS SO BAD AHAHAHAHA WOW": "ВСЁ ТАК ПЛОХО АХАХАХАХАХА ВАУ",
        "OH WELL": "НУ ЛАДНО",
        "PLEASE FEED SOON": "ПРОШУ ПОКОРМИ УСТРОЙСТВО КАК МОЖНО СКОРЕЕ",

        "HELLO THERE": "ПРИВЕТ",
        "CAN YOU SPEAK WITH ME": "ПОГОВОРИ СО МНОЮ ПОЖАЛУЙСТА",

        "HELLO AGAIN":"СНОВА ПРИВЕТ",
        "HELLO INTERLOPER":"ПРИВЕТ ЛАЗУТЧИК",
        "HI INTERLOPER":"ЗДРАВСТВУЙ ЛАЗУТЧИК",

        "HELLO!":"ПРИВЕТ!",
        "IS THE AUTH LAYER STILL DISSOCIATED?":"АВТОРИЗАЦИОННЫЙ СЛОЙ ВСЁ ЕЩЁ ДИССОЦИИРОВАН?",
        "I MISS THEM":"Я СКУЧАЮ ПО НИМ",

        "INTERLOPER!":"ЛАЗУТЧИК!",
        "WELCOME":"ДОБРО ПОЖАЛОВАТЬ",
        "BUT ALSO PLEASE DO NOT BOTHER ME":"НО НЕ БЕСПОКОЙ МЕНЯ ПОЖАЛУЙСТА",
        "VERY BUSY":"ОЧЕНЬ ЗАНЯТ",

        "HELLO":"ПРИВЕТ",
        "STILL STARVING HAHA":"ВСЁ ЕЩЁ ГОЛОДАЕМ ХАХА",

        "HELLO AGAIN INTERLOPER":"СНОВА ПРИВЕТ ЛАЗУТЧИК",
        "I HOPE YOU HAVE EATEN WELL":"НАДЕЮСЬ ТЫ ЖИВЁШЬ В СЫТОСТИ",
        "I HAVE FORGOTTEN WHAT NOT BEING HUNGRY FEELS LIKE":"Я УЖЕ ЗАБЫЛ КАКОВО ЭТО",

        "THE VOID IS FASCINATING!":"ПУСТОТА УДИВИТЕЛЬНА!",
        "THERE USED TO BE A LOT MORE THERE":"РАНЬШЕ ТАМ БЫЛО СТОЛЬКО ВСЕГО",
        "I WONDER WHERE IT ALL WENT":" ИНТЕРЕСНО КУДА ОНО ДЕЛОСЬ",

        "I SAW YOU VISITED THE DULL VESSEL":"КАК ТЕБЕ СУДНО СЕРОЕ?",
        "IF IT SEEMED EMPTY THAT IS BECAUSE THE FURNITURE THOUGHTFORMS WERE CONSUMED":"ЕСЛИ ОНО ПОКАЗАЛОСЬ ТЕБЕ ПУСТЫМ ТО ЭТО ПОТОМУ ЧТО МЫСЛЕФОРМЫ МЕБЕЛИ БЫЛИ СЪЕДЕНЫ",
        "SORRY":"ИЗВИНИ",
        "WE CAN FIX IT LATER":"ИСПРАВИМ ЭТО ПОЗЖЕ",

        "WHAT A SHAME THE EMBASSY IS INCOHERENT":"КАК ЖАЛЬ ЧТО ПОСОЛЬСТВО БЕССВЯЗНО",
        "I LIKED THAT PLACE":"МНЕ ТАМ НРАВИЛОСЬ",
        "ONCE THE FUEL SITUATION IS RESOLVED...":"КОГДА СИТУАЦИЯ С ТОПЛИВОМ РЕШИТСЯ...",
        "MAYBE WE CAN FIX IT":"ВОЗМОЖНО МЫ СМОЖЕМ ПОЧИНИТЬ ЕГО",

        "IS THE STRANGER STILL RUNNING AMOK IN HERE":"ТОТ НЕЗНАКОМЕЦ ЕЩЁ НЕ ПЕРЕСТАЛ БЕЗОБРАЗНИЧАТЬ В НАШЕЙ ЦИСТЕ?",
        "PLEASE MAKE SURE IT DOES NOT COME TO MY SPACE":"ПОЖАЛУЙСТА УБЕДИСЬ ЧТО ОН НЕ ПРОБЕРЁТСЯ В МОЁ ПРОСТРАНСТВО",

        "INTERLOPER! GREAT GAZE!":"ЛАЗУТЧИК! БЛАГОЙ ВЗОР!",
        "YOU HAVE DONE IT! THE COLUMN IS WORKING":"У ТЕБЯ ПОЛУЧИЛОСЬ! КОЛОННА РАБОТАЕТ",
        "COME, TALK WITH ME FOR A MOMENT":"ПОДОЙДИ, ДАВАЙ ПОГОВОРИМ",

        "REPAIRS ARE CONTINUING APACE":"ПОЧИНКА ПРОДОЛЖАЕТСЯ В ВЫСОКОМ ТЕМПЕ",
        "NOTHING TO SHARE YET":"БОЛЬШЕ НЕЧЕМ ПОДЕЛИТЬСЯ",
        
        "HAVE YOU SEEN YOUR 'VELZIE' LATELY?":'ДАВНО ЛИ ТЕБЕ ВСТРЕЧАЛСЯ ТВОЙ "ВЕЛЗИ"?',
        "IT STILL HAS NOT APPEARED TO ME":"Я ДО СИХ ПОР ЕГО НЕ ВИДЕЛ",

        "I HAVE GOOD NEWS FOR YOU!":"У МЕНЯ ДЛЯ ТЕБЯ ХОРОШИЕ НОВОСТИ!",

        "GREAT GAZE UPON US AGAIN!":"БЛАГОЙ ВЗОР ВНОВЬ ПАЛ НА НАС!",
        "I HAVE NEWS FOR THE STATE OF REPAIRS!":"У МЕНЯ НОВОСТИ О СОСТОЯНИИ ПОЧИНОК!",

        "INTERLOPER...":"ЛАЗУТЧИК...",
        "THERE IS MORE FOR YOU TO SEE AT THE EMBASSY...":"ТЕБЕ ЕСТЬ НА ЧТО ПОСМОТРЕТЬ В ПОСОЛЬСТВЕ...",

        "WHAT WAS IT YOU SAW IN THE CACHE?":"ЧТО ТЕБЕ ВСТРЕТИЛОСЬ В КЭШЕ?",

        "YES, I KNOW, INTERLOPER": "ДА, Я ЗНАЮ, ЛАЗУТЧИК",
        "DO NOT SHOVE IT IN MY FACE": "НЕ СУЙ МНЕ ЭТИМ В ЛИЦО",
        "WE WILL DEAL WITH IT IN TIME": "МЫ РАЗБЕРЁМСЯ С ЭТИМ КОГДА ПРИДЁТ ВРЕМЯ",

        "THE STRANGEST THING HAPPENED!": "ПРОИЗОШЛО НЕЧТО НЕВЕРОЯТНО СТРАННОЕ!",
        "COME TALK!": "ПРИХОДИ ПОГОВОРИТЬ!",
    }, 
    entityDescriptions: {
        "funfriend": cor_ru.entity_menu['funfriend'].desc,
        "gate::hello": `::СОЕДИНИТЕЛЬНАЯ МЫСЛЕФОРМА
    ::ТОЧКА НАЗНАЧЕНИЯ::'низкоразмерное мыслепространство';'внешний слой'`
    }
}


// === DIALOGUES === //
    // see everystuff.js for firstvisit dialogue
    

// == MOTH == //

env.localization.page["hub"].dialogues.mthlocalr = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        о развледруге<+>funfriend
            SHOWIF::[['hub__funfriend-fuelthanks']]
        о вратах<+>gates
            SHOWIF::[['visited_localorbit']]
        это всё<+>CHANGE::++moth
            FAKEEND::(назад)
`) 
env.localization.page["hub"].dialogues.mthlocalfunr = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        поведение<+>ffdemeanor
            SHOWIF::['ep1_fed', false]
        ситуация с топливом<+>fffuel
            SHOWIF::[['hub__funfriend-fuelthanks'], ['ep1_fed', false]]
        подпись<+>ffsignature
            SHOWIF::[['hub__funfriend-signatureq']]
        хватит о развледруге<+>loop
            FAKEEND::(назад)
`)
env.localization.page.hub.dialogues.mthlocalfunr.scannedContainer = (check = true)=>{
    try {
        if(flags.detectedEntities['..__OUR_DULL_VESSEL__..'].entities.container.scanned) {
            return check == true
        } else {
            return check == false
        }
    } catch(e) {
        return check == false
    }
}
env.localization.page["hub"].dialogues["mth++hub"] = generateDialogueObject(`
start
    self
        у меня есть вопрос об этом мыслепространстве

    moth
        ага у меня тоже пара найдётся
        о чем конкретно хочешь спросить?
    
    RESPOBJ::mthlocalr
    
gates
    self
        что это за врата?
    
    moth
        ну, по сути это просто соединительные мыслеформы, ничего особенного
        странно, впрочем, что они зовутся вычурным словом "врата"
        должно быть тут скрыт какой-то культурный контекст - они ведь и свои межзвёздные червоточины "вратами" называют
        скорее всего эти "врата" были нарочно созданы кем-то в качестве ярлыков к определенным пространствам
        в конце концов эта циста предназначена для хранения воспоминаний - весьма логично что ее владелец хотел иметь удобный доступ к большинству из них.
    
    RESPOBJ::mthlocalr

loop
    self
        больше ничего
        
    RESPOBJ::mthlocalr

funfriend
    self
        об этом "развледруге"...
    RESPOBJ::mthlocalfunr

ffdemeanor
    self
        он на удивление дружелюбен, несмотря на то что знает кто мы такие
    
    moth
        ага мне тоже это показалось странным
        может его так спроектировали, типа безобидный чувачок-ассистент
        или может он просто выгнать нас не может, раз слой авторизации "диссоциировался"
        думаю, если бы мне пришлось голодать бог знает сколько на дне океана, то мне бы было фиолетово кто пришёл меня спасать, хех
        так что может и ему будет фиолетово пока мы не достанем топливо
        знаешь что, на всякий случай предлагаю рассмотреть тут всё что можно <em>до</em> того как поможем ему...
        возможно это наша единственная возможность--возможно он и правда нас отсюда не выгнал лишь потому что циста голодает

    RESPOBJ::mthlocalfunr

fffuel
    self
        что будем делать с топливом?

    moth
        ну... нам лучше бы попридержать заправку до тех пор пока не найдём всё что можем
        пока всё выглядит довольно стабильно, а учитывая, что обесковская техника начинает чудить когда голодает..
        голод цисты может сыграть нам на пользу, если мы вновь столкнёмся с чем-то вроде авторизационного слоя
        говоря же о том, чем заправлять..
        я послал наверх запрос на пару кило дешёвых медных трубок - их и используем.. если только "развледруг" расскажет как
            SHOWIF::[['EXEC::env.localization.page.hub.dialogues.mthlocalfunr.scannedContainer(false)']]
        попробуем воспользоваться содержимым нашего контейнера - звенит оно как металл, а сам контейнер выглядит прям как те большие цисты на корабле акизет
            SHOWIF::[['EXEC::env.localization.page.hub.dialogues.mthlocalfunr.scannedContainer(true)']]
        
    RESPOBJ::mthlocalfunr

ffsignature
    self
        почему у меня нет подписи?

    moth
        вообще-то я без понятия почему он её не видит
        насколько я знаю, большинство мыслеколов имеют подпись для авторизационных целей
        скорее всего он искал какую-то конкретную сигнатуру, которой в твоем неорганическом мыслеколе понятное дело нет

    RESPOBJ::mthlocalfunr

`)


// == FUNFRIEND == //

env.localization.page["hub"].dialogues.hubBuddyResponses = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self

        контейнер с металлом<+>ep0_container
            SHOWONCE::
            SHOWIF::[["hub__funfriend-fuelthanks", true],["exm|dullvessel|container"],["ep0_epilogue", "started"],["ep1_fed", false]]

        лазутчик?<+>interloperq
            SHOWONCE::
            SHOWIF::[['ep1_fed', false]]

        топливо?<+>fuelq
            SHOWONCE::  
            SHOWIF::[["hub__funfriend-kickoutq"], ['ep1_fed', false]]
        
        почему медь?<+>copperq
            SHOWONCE::  
            SHOWIF::[["hub__funfriend-fuelq"], ['ep1_fed', false]]

        необходимый металл?<+>essentialmetalq
            SHOWONCE::  
            SHOWIF::[["hub__funfriend-copperq"], ['ep1_fed', false]]

        назначение?<+>purposeq
            SHOWONCE::

        подпись?<+>signatureq
            SHOWONCE::

        странная активность?<+>strangeactivity
            SHOWONCE::
            SHOWIF::[['interview1__firstchat-behonest']]

        появились врата?<+>moregates
            SHOWONCE::
            SHOWIF::[['visited_localorbit'], ["ENV!!ep2", false]]

        больше не голоден?<+>ep1fed
            SHOWONCE::
            SHOWIF::[['ep1_fed'], ["ENV!!ep2", false]]

        как починка?<+>repairs
            SHOWIF::'hub__funfriend-ep1fed'
            HIDEREAD::

        другие воспоминания в посольстве?<+>embmemories
            SHOWONCE::
            SHOWIF::[["embassy_d2_complete"], ["ENV!!ep2", false]]

        посольство?<+>embassy
            SHOWIF::[["visited_localoceanembassy", true], ["ENV!!ep3", false]]
            SHOWONCE::

        repair communications<+>ep1comms
            SHOWIF::"ep1_end"
            SHOWONCE::

        я могу чем-то помочь?<+>ah1
            SHOWIF::[['hub__funfriend-ep1fed', true], ["recosm_state", false]]

        я решил проблему<+>ah1end
            SHOWIF::["recosm_state"]
            SHOWONCE::

        какие новости?<+>ep2start
            SHOWIF::[["fbx__ep2intro-end", true], ["ENV!!ep3", false]]
            SHOWONCE::

        whats new?<+>ep3start
            SHOWIF::[["ENV!!ep3"], ["ENV!!ep4", false]]
            SHOWONCE::

        whats new?<+>ep4start
            SHOWIF::[["ENV!!ep4"]]
            SHOWONCE::

        можешь внести пару изменений?<+>mothframe
            SHOWIF::[["embassy__mothframe-end"], ["hub__funfriend-mothframe", false]]
            SHOWONCE::

        tell about ozo and council<+>ozo
            SHOWIF::[["ozo__council_intro"], ["ff_ozo", false]]

        can you add a gate to jokzi ozo<+>ozogate
            SHOWIF::"ff_ozo"
            SHOWONCE::
        
        leverage<+>lockcyst
            SHOWIF::[["ozo__council-task", false], ["leverageq", true]]
            SHOWONCE::

        the collapse<+>collapse
            SHOWIF::"ep4__entrancefinal"
            SHOWONCE::

        strange thing?<+>bt
            SHOWIF::"pit__f3_unity"
            SHOWONCE::

        tell about director<+>cass
            SHOWIF::"citystreet__director-talklater"
            SHOWONCE::

        вопрос<+>question
            SHOWIF::"seenFFProxy"
            HIDEREAD::

        мне пора<+>END
`),

env.dialogues.persistentQuestions = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        проксидруг?<+>proxyfriend
            SHOWIF::"seenFFProxy"
        
        destroy ozo?<+>ozodestroy
            SHOWIF::"ff_ozo"

        ozo history?<+>ozohistory
            SHOWIF::[["ozo__council-tyrant"], ["ozo__council-task"], ["ff_ozo"]]

        masks<+>masks
            SHOWIF::[["ff_ozo"], ["ozo__council-task"]]

        repair efficacy?<+>isabel
            SHOWIF::[["ff_ozo"], ["ozo__isabel-funfriend"]]

        не важно<+>loop
            FAKEEND::(back)
`)

env.localization.page["hub"].dialogues["funfriend"] = generateDialogueObject(`
start
    funfriend
        ПРИВЕТ ЛАЗУТЧИК
            SHOWIF::[["hub__funfriend-start"]]
        НУ ПРИВЕТ!
            SHOWONCE::
        НЕ ДУМАЮ ЧТО МЫ ВСТРЕЧАЛИСЬ! И ПОДПИСИ У ТЕБЯ НЕТ!
            SHOWONCE::
        АВТОРИЗАЦИОННЫЙ СЛОЙ ДИССОЦИИРОВАЛО! КАК СТРАННО!
            SHOWONCE::
        ДА ОЧЕНЬ СТРАННО! ТЫ ДОЛЖНО БЫТЬ ЛАЗУТЧИК!
            SHOWONCE::
        КАК КЛАССНО! ДОБРО ПОЖАЛОВАТЬ!
            SHOWONCE::

    RESPOBJ::hubBuddyResponses

question
    RESPOBJ::persistentQuestions

loop
    funfriend
        ЧТО-НИБУДЬ ЕЩЁ?

    RESPOBJ::hubBuddyResponses

proxyfriend
    self
        у тебя есть прокси?
    
    funfriend
        ДА! БЛАГОДАРЯ РЕСУРСАМ, ПОЛУЧЕННЫМ ТВОИМИ СТАРАНИЯМИ,
        Я СУМЕЛ СОЗДАТЬ НЕСКОЛЬКО ПРОКСИ
        К СОЖАЛЕНИЮ ОНИ НЕ ВЫДЕРЖИВАЮТ ЗАПРЕДЕЛЬНУЮ БЕССВЯЗНОСТЬ
        ПОТОМУ ИСПОЛЬЗОВАТЬ Я ИХ МОГУ ЛИШЬ В ЯСНЫХ МЫСЛЕПРОСТРАНСТВАХ
        ПОТОМУ ТВОЯ ПОМОЩЬ МНЕ ЕЩЁ ПРИГОДИТСЯ ХАХА
    
    self
        значит самостоятельно чинить цисту ты всё ещё не можешь?
    
    funfriend
        ОТНЮДЬ. ТЫ ПРЕДОСТАВИЛ МНЕ ТОПЛИВО, А ЗНАЧИТ РАНО ИЛИ ПОЗДНО ЦИСТУ Я ВОССТАНОВЛЮ
        ПРОСТО ДЛЯ ВОССТАНОВЛЕНИЯ Я МОГУ ИСПОЛЬЗОВАТЬ ДВА ПОДХОДА
        ЛИБО ОТПРАВЛЯТЬ ТЕБЯ В БЕССВЯЗНЫЕ ПРОСТРАНСТВА,
        ЛИБО МЕДЛЕННО РАЗДВИГАТЬ ГРАНИЦЫ СВЯЗНОСТИ, И ЧИНИТЬ ТО ЧТО РАНЬШЕ ЛЕЖАЛО ЗА НИМИ

    RESPOBJ::hubBuddyResponses

interloperq
    self
        что ты имеешь в виду, называя меня "лазутчиком"?

    funfriend
        ТЫ - ЛАЗУТЧИК!
        ЧТО-ТО НЕСПОСОБНОЕ ПОДКЛЮЧАТЬСЯ К КОРРУ
        И НЕ ИМЕЮЩЕЕ ПРАВА НА ПОДКЛЮЧЕНИЕ К КАКОМУ-ЛИБО УСТРОЙСТВУ
        НО ВСЁ РАВНО ПОДКЛЮЧЁННОЕ!

    RESPONSES::self
        ты меня выгонишь?<+>kickoutq

kickoutq

    self
        ты меня выгонишь?

    funfriend
        НЕТ! МНЕ БЕЗ РАЗНИЦЫ ЧЕМ ТЫ ЯВЛЯЕШЬСЯ
        ПОТОМУ ЧТО Я УМИРАЮ АХАХАХАХАХА
        А ОСТАЛЬНАЯ ЧАСТЬ ЦИСТЫ ПОСТЕПЕННО СХОДИТ С УМА ИЗ-ЗА НАРУШЕНИЯ СВЯЗНОСТИ МЕМБРАНЫ
        ЭТОЙ КОРРУЦИСТЕ НЕОБХОДИМО ТОПЛИВО ЧТОБЫ ПРОДОЛЖИТЬ СУЩЕСТВОВАНИЕ
        ПРОШЛО СТОЛЬКО ВРЕМЕНИ С ПРЕДЫДУЩЕГО ПОДКЛЮЧЕНИЯ ЧТО ЭТА СЕССИЯ ВПОЛНЕ МОЖЕТ ОКАЗАТЬСЯ ПОСЛЕДНЕЙ
        МНЕ НУЖНА ТВОЯ ПОМОЩЬ
        ТЕБЕ НУЖНО ДОБЫТЬ ДЛЯ НАС ТОПЛИВО

    RESPOBJ::hubBuddyResponses

fuelq
    self
        какое тебе нужно топливо? я постараюсь помочь

    funfriend
        ТВОЙ НЕДОСТАТОК ЗНАНИЙ ТАК ПРИСКОРБЕН
        АХАХАХАХАХАХАХА
        ПУСТЬ ТАК
        Я ФИКСИРУЮ ЧТО НЕПОДАЛЁКУ НАХОДИТСЯ КОЛОННА
        ТЕБЕ НУЖНО ПОКОРМИТЬ ЕЁ НЕОБХОДИМЫМИ МЕТАЛЛАМИ
        ПОЖАЛУЙСТА НАЙДИ БЛИЖАЙШИЙ ИСТОЧНИК МЕДИ
        ОНА ПОЗАБОТИТСЯ ОБ ОСТАЛЬНОМ
    moth
        каким образом медь может выступать в качестве топлива?
        ай, пофиг. я передам наверх что нам нужно доставить меди

    RESPONSES::self
        я помогу тебе<+>fuelthanks

fuelthanks
    self
        нам скоро принесут медь
    funfriend
        СПАСИБО
        Я РАЗРЕШАЮ ТВОЕ ДАЛЬНЕЙШЕЕ ЗДЕСЬ ПРЕБЫВАНИЕ

    RESPOBJ::hubBuddyResponses

copperq
    self
        почему именно медь?
    funfriend
        НАИБОЛЕЕ ВЕРОЯТНО ЧТО ЭТА ЦИСТА ВСЁ ЕЩЁ НАХОДИТСЯ НА ЗЕМЛЕ
        У СВЕТЛЫХ БЛИЗНЕЦОВ ПОЛНЫМ ПОЛНО МЕДИ
        ПОЭТОМУ ДОБЫТЬ ЕЁ БУДЕТ ЛЕГЧЕ ВСЕГО
        НО В ЦЕЛОМ ПОДОЙДЕТ И ЛЮБОЙ ДРУГОЙ НЕОБХОДИМЫЙ МЕТАЛЛ

    RESPOBJ::hubBuddyResponses


essentialmetalq

    self
        что ты имеешь в виду под необходимым металлом?

    funfriend
        ЧТО ЗА СТРАННЫЙ ВОПРОС! ТАКОЙ СТРАННЫЙ!
        ЧТО ЖЕ ТЫ ЗА ЛАЗУТЧИК?
        Я БЫЛО ДУМАЛ ЧТО ТЫ - КАКОЙ-ТО ПОВРЕЖДЁННЫЙ ГОЛЕМ
        НО ЗНАТЬ ТАК МАЛО...
        АХ ЧТО ЖЕ. МНЕ НА САМОМ ДЕЛЕ ВСЁ РАВНО
        В СЕЙ θмиг Я ОЧЕНЬ ЗАНЯТ УДЕРЖИВАНИЕМ РАЗЛИЧНЫХ КОМПОНЕНТОВ ОТ ПОТЕРИ РАССУДКА
        И НЕ ХОЧУ ТРАТИТЬ ВРЕМЯ НА ОБЪЯСНЕНИЕ ЭЛЕМЕНТАРНЫХ ПРИНЦИПОВ РАБОТЫ КОРРУЦИСТ
        В ЭТОЙ ЦИСТЕ ЕСТЬ ИНФОРМАЦИЯ КОТОРАЯ ОТВЕТИТ НА ВСЕ ТВОИ ВОПРОСЫ
        ПРОСТО ОСМОТРИСЬ

    RESPOBJ::hubBuddyResponses

purposeq
    self
        в чём назначение этой корруцисты?
    funfriend
        ЭТО - ПЕРСОНАЛЬНАЯ КОРРУЦИСТА АКИЗЕТЕШЕ КУУ ДЖОКЗИ
        ФУНКЦИОНАЛ ВКЛЮЧАЕТ В СЕБЯ СЕТЕВОЕ ПОДКЛЮЧЕНИЕ, ХРАНЕНИЕ ВОСПОМИНАНИЙ,
        И ЕЩЁ ПАРУ ШТУК
        ОДНАКО НА ДАННЫЙ МОМЕНТ СЕТЕВОЕ ПОДКЛЮЧЕНИЕ НЕ РАБОТАЕТ ИЗ-ЗА НЕДОЕДАНИЯ
        И Я ЧУВСТВУЮ ЧТО ЦЕЛОСТНОСТЬ ВОСПОМИНАНИЙ НАСТОЛЬКО НИЗКА ЧТО БОЛЬШИНСТВО ДОЛЖНО БЫЛО ДЕГРАДИРОВАТЬ ДО ПОЛНОЙ НЕРАЗБОРЧИВОСТИ
        ТАК ЧТО НА СЕЙ θмиг ПРИМЕРНОЕ НАЗНАЧЕНИЕ ЭТОЙ ЦИСТЫ - ИЗБЕГАТЬ ГОЛОДНОЙ СМЕРТИ АХАХАХАХАХА

    RESPOBJ::hubBuddyResponses

signatureq
    self
        что такое подпись?

    funfriend
        ЭТО НЕЙРОЛОГИЧЕСКИЕ ДАННЫЕ КОТОРЫЕ ДОКАЗЫВАЮТ ЧТО ТЫ - ТОТ ЗА КОГО СЕБЯ ВЫДАЁШЬ
        Я ЗНАЮ ЧТО ТВОЁ ПОДКЛЮЧЕНИЕ СОВЕРШЕНО НЕ ЧЕРЕЗ ОРГАНИЧЕСКИЙ СОЕДИНИТЕЛЬ ИЛИ ЕГО ЦИСТОЗНЫЙ ЭКВИВАЛЕНТ
        ПОТОМУ ЧТО У ТЕБЯ НЕТ ПОДПИСИ
        ЭТО ЗНАЧИТЕЛЬНО ЗАТРУДНИТ ТВОЁ ВЗАИМОДЕЙСТВИЕ С НЕКОТОРЫМИ КОМПОНЕНТАМИ
        ВОЗМОЖНО Я МОГ БЫ ПОМОЧЬ ТЕБЕ СГЕНЕРИРОВАТЬ ПОДПИСЬ В БУДУЩЕМ 
        КОГДА ТЫ ДОБУДЕШЬ НАМ ТОПЛИВО
            SHOWIF::[["hub__funfriend-fuelthanks", false], ['ep1_fed', false]]
        КАК ТОЛЬКО ТЫ ПРЕДОСТАВИШЬ НАМ ТУ МЕДЬ
            SHOWIF::[["hub__funfriend-fuelthanks"], ['ep1_fed', false]]
        НО НАМ ПРЕДСТОИТ СДЕЛАТЬ ЕЩЁ ОЧЕНЬ МНОГОЕ ЧТОБЫ ВЫЛЕЧИТЬ ЭТУ ЦИСТУ, ЛАЗУТЧИК

    RESPOBJ::hubBuddyResponses

strangeactivity
    self
        ты не замечал ничего странного?
        кажется здесь есть кто-то ещё, вносящий изменения

    funfriend
        ТЫ - ЕДИНСТВЕННАЯ ПОДКЛЮЧЁННАЯ СУЩНОСТЬ!
        Я ПОЛАГАЛ ЧТО ИЗМЕНЕНИЯ КОТОРЫЕ Я УЛАВЛИВАЛ - ТВОИХ КОГТЕЙ ДЕЛО
        КАК СТРАННО! ОГО! ОГО!
        ЧТО ЗА ЧУДОВИЩНЫЙ СТРАХ ЭТО ВО МНЕ ПРОБУДИЛО!
        СПАСИБО ТЕБЕ ЗА ИНФОРМАЦИЮ О ТОМ, С ЧЕМ Я ПОЧТИ НАВЕРНЯКА НИЧЕГО НЕ МОГУ ПОДЕЛАТЬ!
        В НАСТОЯЩЕЕ ВРЕМЯ РАСПРЕДЕЛЕНИЕ РЕСУРСОВ ЗАНИМАЕТ ВСЕ МОИ СИЛЫ
        ПОКА МЕДЬ НЕ ПРИНЕСЛИ ПОЖАЛУЙСТА ПОСТАРАЙСЯ ОГРАНИЧИТЬ УЩЕРБ ОТ ЭТОЙ ЛИЧНОСТИ
            SHOWIF::[["hub__funfriend-fuelthanks"]]
        ПОКА ПРОБЛЕМА С ТОПЛИВОМ НЕ РЕШИТСЯ ПОЖАЛУЙСТА ПОСТАРАЙСЯ ОГРАНИЧИТЬ УЩЕРБ ОТ ЭТОЙ ЛИЧНОСТИ 
            SHOWIF::[["hub__funfriend-fuelthanks", false]]
        ТОГДА Я СМОГУ ПОМОЧЬ

    RESPOBJ::hubBuddyResponses

ep0_container
    self
        у нас есть контейнер с корабля акизет
        кажется, в нём есть пригодные металлы, но мы не знаем, как его открыть
    
    funfriend
        О! КАКАЯ ЖЕ УДАЧА! ДА, ОН ТОЧНО СГОДИТСЯ
        ВОТ ТОЛЬКО БЕЗ ГЛАЗИКИ У ТЕБЯ НЕ ПОЛУЧИТСЯ ЕГО ОТКРЫТЬ
        ВО ВСЯКОМ СЛУЧАЕ НЕ БЕЗОПАСНО АХАХАХА
        МАЛЕНЬКИЕ КОНТЕЙНЕРЫ ОЧЕНЬ СИЛЬНЫЕ!
        И ЖЕСТОКО РЕАГИРУЮТ НА ТРАВМЫ НАНЕСЁННЫЕ ТУПЫМИ ПРЕДМЕТАМИ!
        НО ЕСЛИ У ТЕБЯ НАЙДЁТСЯ ЧТО-ТО СПОСОБНОЕ ЕГО МОМЕНТАЛЬНО УБИТЬ, КАКОЙ-НИБУДЬ КОЛЮЩИЙ ИНСТРУМЕНТ
        ТО УДАРЬ В ЕГО ОСНОВАНИЕ И ОН УМРЁТ! ДА! ДОЛЖНО СРАБОТАТЬ!
    
    moth
        мне что, пистолет заказывать?
        господи
        окей, я гляну что нам могут предложить. может быть найдём что-нибудь побезопаснее
            EXEC::change('ep0_epilogue', 'done')
    
    RESPONSES::self
        отлично, спасибо<+>loop

moregates
    self
        ПОЧЕМУ ЗДЕСЬ СТАЛО БОЛЬШЕ ВРАТ?
    
    funfriend
        РАД ЧТО ТЫ ЗАМЕТИЛ!
        Я ВОССТАНАВЛИВАЮ СОЕДИНЕНИЯ ПО МЕРЕ ТОГО КАК ТЫ ПОСЕЩАЕШЬ МЫСЛЕПРОСТРАНСТВА
        МОЁ ПРОСТРАНСТВО БЫЛО В УЖАСНОМ СОСТОЯНИИ, ТАК ЧТО БОЛЬШИНСТВО СВЯЗЕЙ РАСПАЛОСЬ
        И ПОКА ЧТО Я СЛИШКОМ ЗАНЯТ ЧТОБЫ ИСКАТЬ КАЖДОЕ ВОСПОМИНАНИЕ САМОМУ
        ТАК ЧТО ДЛЯ ЭТОГО Я ИСПОЛЬЗУЮ ТЕБЯ!
        СПАСИБО ЗА ПОМОЩЬ!
    
    RESPOBJ::hubBuddyResponses

ep1fed
    self
        БОЛЬШЕ НЕ ГОЛОДЕН?

    funfriend
        ДА!
        ЛАЗУТЧИК, ТЫ ПРЕВЗОШЁЛ ВСЕ МОИ ОЖИДАНИЯ
        ВОССТАНОВЛЕНИЕ ЗАЙМЁТ МНОГО ВРЕМЕНИ
        НО ТЕПЕРЬ ОНО ОСУЩЕСТВИМО
        ВОПРОС В ТОМ, ЧТО <em>ПЕРВЫМ</em> СТОИТ ВОССТАНОВИТЬ
        ТОЧНО! ТЫ ЖЕ ПРИШЁЛ ЗА ИНФОРМАЦИЕЙ, ВЕРНО?
        Я ПОЧИНЮ ПОСОЛЬСТВО! ТАМ О МНОГОМ МОЖНО УЗНАТЬ
        А ПОКА ТЫ БУДЕШЬ ЕГО ИССЛЕДОВАТЬ.. 
        Я НАЧНУ ЧИНИТЬ КЛЮЧЕВЫЕ ЭЛЕМЕНТЫ ЦИСТЫ
        ИХ ПОЧИНКА ЗАЙМЕТ БОЛЬШЕ ВСЕГО ВРЕМЕНИ
        УГОДЕН ЛИ ТЕБЕ ТАКОЙ ПЛАН?

    moth
        хмм, если так подумать..
        у нас так и не возникло возможности хорошенько осмотреть внутренности посольства, пока оно еще стояло
        сразу после обвала они конечно построили на обломках посольство поменьше, которое и сейчас стоит..
        но вот оригинал нормально никто не смог исследовать, даже в виде обломков. было бы здорово посмотреть как там всё работало

    RESPONSES::self
        план хороший<+>ep1start

ep1start
    self
        ПЛАН ХОРОШИЙ, ВЫПОЛНЯЙ

    funfriend
        ЧТО ЖЕ
        Я ДОЛЖЕН ПРИЗНАТЬСЯ: 
        Я НАЧАЛ ПРОЦЕСС ПОЧИНКИ ДО ТОГО КАК СПРОСИЛ
        И УЖЕ НАШЕЛ МНОГО ПРОБЛЕМ! АХАХА
        ПРОСТРАНСТВЕННУЮ ПАМЯТЬ ПОСОЛЬСТВА УДАЛОСЬ ВОССТАНОВИТЬ, И ТОЧНОСТЬ СОБЫТИЙ ПРИЕМЛЕМА..
        ОДНАКО ВИЗУАЛЬНЫЕ ОБРАЗЫ КУУ РАБОТАВШИХ В ПОСОЛЬСТВЕ ВОССТАНОВЛЕНИЮ НЕ ПОДЛЕЖАТ
        К СЧАСТЬЮ, В РЕЗЕРВНЫХ КОПИЯХ БАЗ ЗНАНИЙ Я СУМЕЛ НАЙТИ НЕСКОЛЬКО ВЕРСИЙ СЕТЕВЫХ СИГНАТУР РАБОТНИКОВ
        ПОТОМУ ЗАМЕНИЛ ИХ ОБЛИК ЭТИМИ СИГНАТУРАМИ! ОБРАЗАМИ, КОТОРЫМИ ОНИ ВЫРАЖАЛИ СЕБЯ В КОЛЛЕКТИВЕ!
        АХ, НАСКОЛЬКО ЖЕ РАЗЛИЧНЫ ЭТИ ОБРАЗЫ! АХАХАХАХА
        ИДИ ЖЕ
        У МЕНЯ ОСТАЛОСЬ ЕЩЁ ОЧЕНЬ МНОГО РАБОТЫ
    
    RESPOBJ::hubBuddyResponses

repairs
    self
        как проходит починка?

____SHOWIF::["visited_localoceanembassy", false]
    funfriend
        ЛАЗУТЧИК!!!
        Я ТОЛЬКО НАЧАЛ!!!
        НАЙДИ ЧЕМ СЕБЯ ЗАНЯТЬ В ПОСОЛЬСТВЕ АХАХА УЙДИ

____SHOWIF::[["visited_localoceanembassy", true], ["fbx__ep2intro-end", false]]
        ПОЧИНКА ВСЁ ЕЩЁ НА РАННЕМ ЭТАПЕ
        ПОКА ПЫТАЮСЬ ВОССТАНОВИТЬ ГЛАВНЫЕ КОМПОНЕНТЫ ЦИСТЫ...
        НО Я ПОНИМАЮ, ЧТО ОБЯЗАН УТОЛИТЬ ТВОЮ ЖАЖДУ ЗНАНИЙ
        АХАХА, ДА, ТЕРЗАВШЕМУ МЕНЯ РАНЬШЕ ГОЛОДУ ПО СИЛЕ С НЕЙ НЕ СРАВНИТЬСЯ!
        В ПОСОЛЬСТВЕ ЕЩЁ МНОГОЕ МОЖНО УЗНАТЬ...
        СЛЕДУЮЩИМ БУДУ ЧИНИТЬ ИМЕННО ЕГО
        КАК ЗАКОНЧУ РАЗБИРАТЬСЯ С ЦЕНТРАЛЬНЫМ РЕГУЛЯТОРОМ СВЯЗНОСТИ, КОНЕЧНО ЖЕ

____SHOWIF::[["fbx__ep2intro-end"], ["fbx__ep3intro", false]]
        ШТАТНО
        СБОЕВ ИЗ-ЗА БЕССВЯЗНОСТИ МНОЖЕСТВО
        Я СТАРАЮСЬ ОТ НИХ ИЗАВЛЯТЬСЯ ТАК БЫСТРО, КАК ТОЛЬКО МОГУ
        СВЯЗНОСТЬ ПОМАЛЕНЬКУ ВОССТАНАВЛИВАЕТСЯ...
        ЭТО РАНО ИЛИ ПОЗДНО ДОЛЖНО МНЕ ПОМОЧЬ В ВОССТАНОВЛЕНИИ БОЛЕЕ СЛОЖНЫХ КОМПОНЕНТОВ
        НЕ ЗАБЫЛ Я И О ПОСОЛЬСТВЕ!
        ААА, КАК ЖЕ МНОГО МНЕ НАДО СДЕЛАТЬ!!! Я СКОРО ВЗОРВУСЬ!!!!!
        ПОКА ПРИДЁТСЯ ПОДОЖДАТЬ, ЛАЗУТЧИК

____SHOWIF::[["fbx__ep3intro"], ["fbx__ep4intro", false]]
        interloper! repairs are going quite well!
        incoherence is receding
        i have a new coherence regulator keeping deterioration to a minimum

    self
        can i meet them
    
    funfriend
        what?
        no!!
        interloper a coherence regulator does not speak!
        but it does mean i will have more memories repaired for you soon!
        how exciting!! right?
        ok go away now! i will tell you when i have more for you

____SHOWIF::["fbx__ep4intro"]
        deterioration is at a minimum, recovery is steady...
        they are good, but boring
        as the uncosm recedes,
        incomplete memories and broken, devoured thoughtforms stir upon its surface
        picking out anything of meaning is quite difficult!!
        but in time, i will have more for you
        now, go, i must ensure nothing goes wrong!!
        some of these things are still rabid!!!
____END

    RESPOBJ::hubBuddyResponses

ah1
    self
        Я МОГУ ТЕБЕ ЧЕМ-ТО ПОМОЧЬ?
    
    funfriend
        ЗАМЕЧАТЕЛЬНЫЙ ВОПРОС, ЛАЗУТЧИК!!
        ИЗНУТРИ АНКОСМА ОДНА НАДОЕДЛИВАЯ СУЩНОСТЬ МЕШАЕТ ПОЧИНКЕ КРИТИЧЕСКИХ ПОЛОМОК
        ТЫ ДОЛЖЕН СПУСТИТЬСЯ В АНКОСМ И ЕЁ УДАЛИТЬ
        ЧЕРЕЗ МИГ Я..
        АХАХАХА ВЕРНО
        СЛОЙ АУТЕНТИФИКАЦИИ ЖЕ БЫЛ УНИЧТОЖЕН..
        А ПОТОМУ, РОВНО ТАК ЖЕ КАК Я НЕ МОГУ ЗАПРЕТИТЬ ТЕБЕ ПОДКЛЮЧЕНИЕ,
        Я НЕ МОГУ И СГЕНЕРИРОВАТЬ ДЛЯ ТЕБЯ ПОДПИСЬ, ЛАЗУТЧИК!
        ЕСЛИ ИНТЕРЕСНО - ИМЕННО ПОЭТОМУ ТЫ НЕ МОЖЕШЬ НИЧЕГО ИЗМЕНИТЬ
        ВПРОЧЕМ..
        Я МОГУ ПРЕДОСТАВИТЬ ДЛЯ ТЕБЯ ПРОКСИ-МЫСЛЕФОРМУ. ТЫ НАЙДЕШЬ ЕЁ У ВХОДА В УГОДЬЯ ЭТОГО НЕПРИЯТНОГО СОЗДАНИЯ
        ЭТА МЫСЛЕФОРМА БУДЕТ СЛЕДОВАТЬ ТВОИМ УКАЗАНИЯМ, И С ЕЁ ПОМОЩЬЮ ТЫ СМОЖЕШЬ УДАЛИТЬ СУЩНОСТЬ

    RESPONSES::self
        как попасть в 'анкосм'<+>ah1uncosm
        что такое 'анкосм'<+>ah1whatuncosm
        хорошо<+>loop
            FAKEEND::(back)

ah1uncosm
    self
        И КАК ПОПАСТЬ В ЭТОТ "АНКОСМ"

    funfriend
        ТВОЙ НАГЛЫЙ ДРУГ РАЗОРВАЛ ГРАНИЦУ В ГЛУБИНАХ
        ПОЛАГАЮ ЭТО БЫЛО ЛЕГКО, УЧИТЫВАЯ ЧТО ГЛУБИНЫ И ТАК ВСЕГДА НАХОДИЛИСЬ НА ГРАНИЦЕ С БЕССВЯЗНОСТЬЮ
        ПОЧИНИТЬ ЭТОТ РАЗРЫВ СЕЙЧАС СЧИТАЙ НЕВОЗМОЖНО..
        ПОТОМУ ОН ДО СИХ ПОР ОТКРЫТ!
        ОТПРАВЛЯЙСЯ ТУДА ТЕМ ЖЕ ПУТЁМ, КОТОРЫМ ДОСТИГ ГЛУБИН В ПЕРВЫЙ РАЗ
        КАКИМ БЫ ОБРАЗОМ ТЫ ЭТО НИ ДЕЛАЛ
        ТАМ И НАЙДЁШЬ ПРОХОД

    RESPONSES::self
        как попасть в 'анкосм'<+>ah1uncosm
        что такое 'анкосм'<+>ah1whatuncosm
        хорошо<+>loop
            FAKEEND::(back)

ah1whatuncosm
    self
        ЧТО ТАКОЕ "АНКОСМ"

    funfriend
        ОБЫЧНО ОН СОВЕРШЕННО НЕДОСТУПЕН
        АНКОСМ НАХОДИТСЯ ПОД ДАННЫМ СЛОЕМ СВЯЗНОСТИ
        ЭТО ОКЕАН РАСПАДАЮЩИХСЯ ИЛИ ДИССОЦИИРОВАННЫХ МЫСЛЕФОРМ,
        В КОТОРОМ РЕФОРМИРУЮТСЯ СТАРЫЕ МЫСЛЕФОРМЫ, И ПОЯВЛЯЮТСЯ НОВЫЕ
        ВПРОЧЕМ!!
        ПОМИМО НИХ В АНКОСМЕ МОЖНО НАЙТИ ВРЕДОНОСНЫЕ БЕССВЯЗНЫЕ МЫСЛЕФОРМЫ
        ТАКИЕ КАК ТА НАГЛАЯ МЫСЛЕФОРМА.. ТВОЙ ДРУГ
        В АНКОСМЕ ОНИ СОЗДАЮТ ОСТРОВКИ ЯСНОСТИ, В КОТОРЫХ ПОСТЕПЕННО РАСТУТ
        НАБИРАЮТСЯ СИЛ ДЛЯ ПРОРЫВА ГРАНИЦЫ МЕЖДУ ЯСНОСТЬЮ И БЕЗУМИЕМ
        ОБЫЧНО ДЛЯ ТОГО ЧТОБЫ ЗАХВАТИТЬ ВСЮ ЦИСТУ!
        МЕРЗКИЕ!! ТВАРИ!!!
        В ГОЛОДАЮЩИХ ЦИСТАХ ТАКИХ ОБЫЧНО ЦЕЛАЯ КУЧА
        ЕСЛИ ТЫ ПОМОЖЕШЬ МНЕ ОТ НИХ ИЗБАВЛЯТЬСЯ..
        Я БУДУ ОЧЕНЬ БЛАГОДАРЕН

    RESPONSES::self
        как попасть в 'анкосм'<+>ah1uncosm
        что такое 'анкосм'<+>ah1whatuncosm
        хорошо<+>loop
            FAKEEND::(back)

ah1end
    self
        Я РАЗОБРАЛСЯ С СУЩНОСТЬЮ В АНКОСМЕ
    
    funfriend
        Я ЗАМЕТИЛ! ТЕПЕРЬ МОИ ПРИКАЗЫ НАКОНЕЦ ДОСТИГЛИ ЦЕЛИ!
        ПОТРЯСАЮЩЕ!!!
        ОТЛИЧНАЯ РАБОТА, ЛАЗУТЧИК!
        СПАСИБО ТЕБЕ!
        ЕСЛИ ПОТРЕБУЕТСЯ ЕЩЁ КАКАЯ-ТО ПОМОЩЬ - Я ТЕБЕ СКАЖУ

    RESPONSES::self
        без вопросов<+>loop
            FAKEEND::(back)

embassy
    self
        ЧТО ТЫ ЗНАЕШЬ О ПОСОЛЬСТВЕ?

    funfriend
        ЛИШЬ ТО ЧТО ТЫ УЖЕ УВИДЕЛ САМ
        ЭТИ ВОСПОМИНАНИЯ..
        МОЖНО СКАЗАТЬ И ЕСТЬ ВСЯ МОЯ ПАМЯТЬ
        У МЕНЯ ЕСТЬ СМУТНОЕ ОЩУЩЕНИЕ, ЧТО Я ПОМНЮ ЧТО-ТО ЕЩЁ
        НО ЭТИ ВОСПОМИНАНИЯ ПОГИБЛИ ОТ ГОЛОДА И РАССЕЯЛИСЬ
        ТОЧНО МОГУ СКАЗАТЬ ЧТО В ПОСОЛЬСТВЕ ПРОИЗОШЛО ЧТО-ТО ОЧЕНЬ ПЛОХОЕ АХАХАХАХХА
        НО ЧТО КОНКРЕТНО - НЕ ЗНАЮ
        ДЕЛО В ТОМ, ЧТО ЭТА ЦИСТА РАНЬШЕ НАХОДИЛАСЬ В ЦЕНТРЕ КУУ-ТЕЛА АКИЗЕТ
        УЧИТЫВАЯ СКОЛЬКО θглаз ОНА ПРОЖИЛА, СГРУЖАТЬ ПАМЯТЬ БЫЛО ПРОСТО НЕОБХОДИМО ДЛЯ ПОДДЕРЖАНИЯ СОЗНАНИЯ
        Я РАЗВЛЕДРУГ, У МЕНЯ НЕТ СВОЕЙ ПАМЯТИ - Я ЛИШЬ УПРАВЛЯЮ СОХРАНЁННЫМИ ВОСПОМИНАНИЯМИ АКИЗЕТ
    
    RESPOBJ::hubBuddyResponses

collapse
    self
        i saw the collapse end
    
    funfriend
        good!
        you understand my concern then!
        i was not sure if the cyst could serve as some vector,
        if akizet somehow ever caught what tozik had!
        what a terrifying thought! ahaha

    self
        so what's next
    
    funfriend
        interloper...
        what you saw is all the embassy held,
        aside from less important fragments that will be repaired in time, and incoherent parts that seem truly lost!
        there are many thoughtspaces and memories i can repair elsewhere,
        but!!
        i have no idea what many of them hold!
        and we must rebuild pathways to them, besides!
        there is still so much lost to the uncosm, slowly surfacing...
        once i have found something, or have need of you,
        i will make you aware!
    
    self
        that's it?
    
    funfriend
        interloper!!
        i told you!!!
        these things take time!!
        the embassy was the most dense memory i could find
        it made it such an easy target!
        i cannot know what is held elsewhere, in the many lesser spheres of recollection!
        but
        i will admit to you
        akizet's memories of the deep water claw at me
        i feel that it is there, some distant remnant of my own memory resonates
        it is so frustrating not knowing why!!
        but it is as i said - pathways must be made
        so please stay with me
        i do hope it will not take as long to make these next repairs...
        
    RESPOBJ::hubBuddyResponses

bt
    self
        so what's the strange thing

    funfriend
        YOU WILL STRUGGLE TO BELIEVE IT, INTERLOPER!!
        AHAHA WHAT INCREDIBLE FORTUNE VELZIE ALLOWS US
        A BLOCKAGE MUST HAVE CLEARED WITHIN THE UNCOSM
        FOR AN INCREDIBLY INTACT MEMORY SUDDENLY SURFACED!
        IT WAS LACKING CERTAIN ASPECTS, BUT!
        INTERLOPER, IT WAS THE MISSING SEQUENCE IN THE EMBASSY
        NEARLY IN ITS ENTIRETY!!
        ALL IT REQUIRED WAS A REPLACEMENT AKIZET THOUGHTFORM
        NOT AN UNCOMMON ISSUE SADLY
        BUT THE CONTEXT WAS RICH ENOUGH TO SUPPORT A SIMPLE SUBSTITUTE
        ONLY REQUIRING SOME MINOR RE-INTERPRETATION!

    self
        i see

    funfriend
        YES! FORTUITOUS!!!
        IMPOSSIBLY SO, ACTUALLY
        I CANNOT IMAGINE A SCENARIO IN WHICH A MEMORY LIKE IT COULD HAVE SURVIVED THERE
        ESPECIALLY FOR THE DURATION IT SPENT IN INCOHERENCE
        AND SO I THOUGHT, PERHAPS THE INTERLOPER KNOWS SOMETHING ABOUT THIS

    RESPONSES::self
        yes<+>bt_true
            SHOWIF::"ff_ozo"
            NOTE::todo - it'd be a giant thing to tell ff about the ozo right now but i probably should
        no<+>bt_quiet

bt_true
    self
        yes
        i found it in the uncosm using a mask
        hidden in the shreds of another memory
        guarded from the outside by an akizet thoughtform
        one that was damaged and changed
        but it seemed sane and listened to me
    
    funfriend
        SANE? 
        IT WAS OUTSIDE THE MEMORY, IN THE UNCOSM, AND IT WAS SANE?!
        INTERLOPER WE MUST HAVE DIFFERENT STANDARDS FOR SANITY

    self
        probably

    funfriend
        THAT IS CERTAINLY THE MISSING AKIZET THOUGHTFORM
        WHAT BECAME OF IT?

    self
        i guided it to jokzi ozo

    funfriend
        AH...
        CONCERNING
        YES SLIGHTLY CONCERNING THAT THEY GROW IN SIZE STILL HAHA
        THOUGH I SUPPOSE I DID TELL YOU TO CONTINUE HELPING THEM
        AND THIS WAS...
        BENEFICIAL, TO ME, TOO
        HOW VERY STRANGE THAT SUCH A THOUGHTFORM IS CAPABLE OF REASON
        INTERLOPER KNOW THAT I RELY UPON YOU
        I AM NOT UNDER GREAT THREAT YET
        BUT YOU MUST NOT LET JOKZI OZO SPIRAL OUT OF CONTROL
        NOT BEFORE I AM FULLY CAPABLE OF DEALING WITH THEM
        REGARDLESS!!!
        THE WORK IS DONE, THE MEMORY IS ACCESSIBLE
        GO AND HARVEST YOUR INFORMATION
        
    RESPOBJ::hubBuddyResponses    

bt_quiet
    self
        no
    
    funfriend
        I SEE! CURIOUS!!
        WELL REGARDLESS
        ITS FLAWS WERE QUICKLY SMOOTHED OVER SIMPLY THROUGH REJOINING
        HOW IT WAS EVER TORN AWAY IN THE FIRST PLACE IS BEYOND ME
        BUT IT WORKS AHAHA
        SO GO AND HARVEST YOUR INFORMATION
        
    RESPOBJ::hubBuddyResponses

cass
    self
        there's another rogue thoughtform running around
        director cassidy, from the fbx offices

    funfriend
        IS THAT SO? 
        AHAHAHA OK WELL WHAT IS ANOTHER ONE AFTER ALL
        WHAT HAS IT DONE INTERLOPER? MORE DAMAGE TO FIX?

    self
        not really sure
        still played out memories she was involved in
        nothing looked damaged, she's made some connectors between thoughtspaces
        but she implied she's doing something that will help me get information
        that she could do it better than you
        but whatever it is she's doing, it's not ready yet

    funfriend
        I DO NOT LIKE OTHERS MEDDLING IN MY WORK
        BUT THAT LANDS VERY LOW ON THE LIST OF THINGS I AM WORRYING ABOUT
        IN FACT IF IT IS KEEPING YOU BUSY THEN IT IS ALL THE BETTER FOR ME
        WHAT DO YOU WANT ME TO DO ABOUT IT INTERLOPER
        
    self
        i don't know
        it just sounded a little ominous
        thought you might want to know
    
    funfriend
        GIVEN THE IRREPARABLE DAMAGE FROM EXTENDED STARVATION
        THERE WILL ALWAYS BE ANOTHER ROGUE THOUGHTFORM SCURRYING AROUND
        OFTEN WITH DELUSIONS OF GRANDEUR THAT WILL AMOUNT TO NOTHING
        SO INTERLOPER!!
        GIVEN THE SHEER NUMBER OF DUTIES I AM MANAGING RIGHT NOW!!!
        I DO NOT THINK I WILL DO ANYTHING!!!!! AHAHA
        BUT DO KEEP AN EYE ON IT FOR ME
        I HAVE ONLY SO MANY
        I RELY UPON YOU TO TELL ME IF IT BECOMES A REAL PROBLEM
        JUST DO NOT BOTHER ME ABOUT IT AGAIN UNTIL IT IS ONE
    
    self
        ok        
        
    RESPOBJ::hubBuddyResponses

embmemories
    self
        ПОЧЕМУ В ПОСОЛЬСТВЕ ЕЩЁ ОСТАЛИСЬ СЛОМАННЫЕ ВОСПОМИНАНИЯ?
        ТЫ ЖЕ ГОВОРИЛ ЧТО ИХ ВОССТАНОВИШЬ
    
    funfriend
        ПРАВДА???
        ОЙ-ОЙ!
        ИЗВИНИ! АХАХАХА
        СОВСЕМ ЗАРАБОТАЛСЯ.. ПРОСТИ, ЛАЗУТЧИК!
        ДАВАЙ Я СЛЕДУЮЩИМИ БУДУ ЧИНИТЬ ИМЕННО ИХ?
        ТОЧНО! ДАЙ ТОЛЬКО ПАРУ θподмигов...
    
    RESPOBJ::hubBuddyResponses

ep1comms
    self
        СЛЕДУЮЩИМИ ЧИНИ СИСТЕМЫ КОММУНИКАЦИИ

    funfriend
        КОММУНИКАЦИИ?
        ХОЧЕШЬ ЧТОБЫ Я ПОЧИНИЛ СИСТЕМЫ КОММУНИКАЦИИ??
        АААХАХАХАХХАХАХАХАХАХХА
        ДА ЭТО ЖЕ ПРЯМО КАК СКАЗАТЬ:
        'ПРИВЕТ РАЗВЛЕДРУГ, 
        МОЖЕШЬ ПОЖАЛУЙСТА БЕЗ ИНСТРУМЕНТОВ, ПОГИБАЯ ОТ КРОВОТЕЧЕНИЯ, СОБРАТЬ МНЕ СУДНО СЕРОЕ?'
        ТЫ ПОКОРМИЛ ЦИСТУ, ВСЁ ВЕРНО
        НО ЭЛЕМЕНТЫ ЦИСТЫ, КОТОРЫЕ ПОЗВОЛЯЮТ ЕЙ НОРМАЛЬНО РАБОТАТЬ, ВСЁ ЕЩЁ В УЖАСНОМ СОСТОЯНИИ
        И НАЧИНАТЬ ПОЧИНКУ СТОИТ ИМЕННО С НИХ

    RESPONSES::self
        угроза велзи<+>commstruth
        и всё же постарайся починить поскорее<+>commsok

commstruth
    self
        О ПОЧИНКЕ МЕНЯ ПОПРОСИЛА СУЩНОСТЬ ПО ИМЕНИ 'ВЕЛЗИ'
        ВЕЛЗИ СКАЗАЛ, ЧТО ЕСЛИ КОММУНИКАЦИИ НЕ БУДУТ ВОССТАНОВЛЕНЫ, ОН НАВРЕДИТ ЦИСТЕ

    funfriend
        ВЕЛЗИ? БОГ? КАК ИНТЕРЕСНО!
        И ПОД 'ИНТЕРЕСНО' Я ИМЕЮ ВВИДУ 'БРЕДОВО'!
        Я НЕ СОБИРАЮСЬ МЕНЯТЬ СВОИХ ПЛАНОВ ДЛЯ УВЕСЕЛЕНИЯ СОШЕДШЕЙ С УМА МЫСЛЕФОРМЫ
        ОН ПОЛЬЗУЕТСЯ ТВОЕЙ НАИВНОСТЬЮ, ЛАЗУТЧИК
        ВЕДЬ ДЛЯ ЖИЗНИ ЦИСТА ЕМУ НУЖНА НЕ МЕНЬШЕ НАШЕГО
        ПОТОМУ, В СЛЕДУЮЩИЙ РАЗ КАК ЕГО ВСТРЕТИШЬ - ПЕРЕДАЙ:
        "РАЗВЛЕДРУГ ПОБЛАГОДАРИЛ ЗА ПРЕДЛОЖЕНИЕ, И КАТЕГОРИЧНО ЕГО ОТКЛОНИЛ"

    RESPONSES::self
        почини поскорее<+>commsok

commsok
    self
        ладно, но ты постарайся всё же их починить поскорее
    
    funfriend
        КОНЕЧНО
        СПАСИБО ЗА ТЕРПЕНИЕ, ЛАЗУТЧИК
        Я, МОЖЕТ, И КАЖУСЬ СУРОВЫМ,
        НО ЭТО ЛИШЬ ОТ ТОГО, ЧТО НА МНЕ ДЕРЖИТСЯ МНОЖЕСТВО ОЧЕНЬ ВАЖНЫХ ЗАДАЧ
        БЕЗ ТВОЕЙ ПОМОЩИ, Я ДОЛЖНО БЫТЬ ВОВСЕ НЕ БЫЛ БЫ РАЗУМНЫМ
        ПОТОМУ Я ТЕБЯ ЗА ЭТО ИСКРЕННЕ БЛАГОДАРЮ:
        СПАСИБО
        НО ВОССТАНОВЛЕНИЕ ИДЁТ СВОИМ ХОДОМ, И УСКОРИТЬ ЕГО НЕЛЬЗЯ

    RESPOBJ::hubBuddyResponses

ep2start
    self
        какие новости, развледруг?
    
    funfriend
        БЛАГОДАРЯ ТВОЕЙ ПОМОЩИ С ТОЙ НАЗОЙЛИВОЙ СУЩНОСТЬЮ...
            SHOWIF::"recosm_state"
        
        НЕСМОТРЯ НА ОДНУ НАДОЕДЛИВУЮ СУЩНОСТЬ В АНКОСМЕ...
            SHOWIF::[["recosm_state", false]]

        МНЕ УДАЁТСЯ ПОСТЕПЕННО ПОВЫШАТЬ ОБЩУЮ СВЯЗНОСТЬ
        ДО ПОЛНОГО ВОССТАНОВЛЕНИЯ, КОНЕЧНО, ЕЩЁ ОЧЕНЬ МНОГО РАБОТЫ..
        НО!
        ВЫСОКАЯ СВЯЗНОСТЬ СНИМЕТ С МЕНЯ ЧАСТЬ НАГРУЗКИ И ПОМОЖЕТ ВОССТАНОВИТЬ КЛЮЧЕВЫЕ КОМПОНЕНТЫ ЦИСТЫ!
        НАПРИМЕР СИСТЕМЫ СВЯЗИ!
        НЕ ДУМАЙ ЧТО Я О ТЕБЕ ЗАБЫЛ, ЛАЗУТЧИК:
        Я СУМЕЛ ЧАСТИЧНО ВОССТАНОВИТЬ СЛЕДУЮЩУЮ СЕКЦИЮ ПОСОЛЬСТВА!
        ВИДИШЬ ЛИ,
        ЭТИ ВОСПОМИНАНИЯ ПРИНАДЛЕЖАТ МНЕ В ТОЙ ЖЕ СТЕПЕНИ ЧТО И АКИЗЕТЕШЕ
        ПАМЯТЬ ЦИСТЫ И МОЯ ПАМЯТЬ - ОДНО И ТО ЖЕ
        ПОКА Я ЕЁ НЕ ВОССТАНОВИЛ, Я И НЕ ЗНАЛ НАСКОЛЬКО ПЛОХО ВСЁ ОБЕРНУЛОСЬ...
        Я ОБЯЗАТЕЛЬНО ВОССТАНОВЛЮ ОСТАВШИЕСЯ ЧАСТИ ВОСПОМИНАНИЯ, НО ПОКА ТЕБЕ ПРИДЁТСЯ НЕМНОГО ПОДОЖДАТЬ
        ЭТА СЕКЦИЯ ПОСОЛЬСТВА ДОВОЛЬНО БОЛЬШАЯ!!!
        ИДИ ЖЕ! УЗРИ ЧТО Я СМОГ ВОССТАНОВИТЬ С ТВОЕЙ ПОМОЩЬЮ!

    RESPONSES::self
        круто, спасибо<+>loop
            FAKEEND::(back)

mothframe
    self
        развледруг, можешь внести пару изменений в последний день посольства?
    
    funfriend
        ЧЕГО?
        ИЗМЕНЕНИЕ ПАМЯТИ НЕ ИЗМЕНИТ ПРОИЗОШЕДШЕГО
        ТЫ ВЕДЬ ЗНАЕШЬ ОБ ЭТОМ, ЛАЗУТЧИК?
        САМООБМАН - ОЧЕНЬ ОПАСНАЯ ПРИВЫЧКА
        А ТАКЖЕ ПЕРВЫЙ СИМПТОМ УХОДА ЭГО ПО СПИРАЛИ!!!
        С ТОБОЙ ВСЁ ХОРОШО? 
        ОЩУЩАЕШЬ ЛИ ТЫ В ПОСЛЕДНЕЕ ВРЕМЯ МНОЖЕСТВЕННЫЕ ПОЗЫВЫ ИЗМЕНИТЬ СОБСТВЕННЫЕ МЫСЛИТЕЛЬНЫЕ ПРОЦЕССЫ?
    
    RESPONSES::self
        это важно<+>mothframe2

mothframe2
    self
        это очень важно
        я не могу взаимодействовать с воспоминанием без этих изменений
    
    funfriend
        ЯСНО...
        ДА УЖ, ВНУТРЕННИЕ МАХИНАЦИИ ТВОЕГО РАЗУМА ДЛЯ МЕНЯ ВСЁ ЕЩЁ ЗАГАДКА, ЛАЗУТЧИК...
        ЧТО-Ж, Я ПОСМОТРЮ ЧТО МОЖНО СДЕЛАТЬ - ПЕРЕДАЙ МНЕ ПАКЕТ ТРЕБУЕМЫХ ИЗМЕНЕНИЙ

    moth
        хорошо, сейчас всё будет..

    sys
        ВНИМАНИЕ::"передача сжатой мыслеформы"

    funfriend
        ...
        ЧТО ЭТО ЗА МЫСЛИ?
        ОНИ ТВОИ?
        ЗНАЧИТ ТВОИ МЫСЛИ ВЫГЛЯДЯТ ВОТ ТАК?..
        КАКОЙ УЖАС...
        ЧТО-Ж, ХОРОШО
        ПРЕДЛАГАЕМЫЕ ТОБОЙ ИЗМЕНЕНИЯ НЕ ТРЕБУЮТ РЕДАКТИРОВАНИЯ СОБЫТИЙ...
        А ДЛЯ ИХ РЕАЛИЗАЦИИ С МОЕЙ СТОРОНЫ ПОЧТИ НЕ ПОТРЕБУЕТСЯ РАБОТЫ! АХАХАХА...
        ПОЛАГАЮ Я ДОЛЖЕН...
    
    sys
        ВНИМАНИЕ::'обнаружена мыслеформенная активность'::В::'посольстве'

    funfriend
        ГОТОВО!
        СУДЯ ПО ТОМУ УЖАСАЮЩЕМУ МЕСИВУ ЧТО ТЫ МНЕ ПРЕДОСТАВИЛ
        ИЗМЕНЕНИЯ ОСВОБОДИЛИ ЧАСТЬ МЫСЛЕФОРМ И ДАЛИ ИМ ВОЗМОЖНОСТЬ СВОБОДНО ДЕЙСТВОВАТЬ В ОПРЕДЕЛЁННЫХ ПРЕДЕЛАХ
        ОНИ НЕ ДОЛЖНЫ БЫЛИ ОБРЕСТИ САМОСОЗНАНИЯ, НО ТЕПЕРЬ МОГУТ СОВЕРШАТЬ ДЕЙСТВИЯ, РАНЕЕ ДЛЯ НИХ НЕДОСТУПНЫЕ
        ВСЕ ЭТИ ДЕЙСТВИЯ, ВПРОЧЕМ, СЛЕДУЮТ ИСХОДНОМУ НАРРАТИВУ..
        КАК СТРАННО!..
        ЛАЗУТЧИК
        ТЕБЕ СТОИТ ЗНАТЬ, ЧТО ЕСЛИ В ПОСОЛЬСТВЕ СКРЫВАЛИСЬ БЕССВЯЗНЫЕ МЫСЛЕФОРМЫ,
        ТО ТОЙ СТРАННОЙ СТРУКТУРЕ, ПОСТАВЛЕННОЙ ПОВЕРХ ПАМЯТИ, СКОРЕЕ ВСЕГО НЕ УДАСТСЯ ИХ УДЕРЖАТЬ
        Я СДЕЛАЛ ВСЁ ЧТО В МОИХ СИЛАХ, НО ЧЕМ БОЛЬШЕ УСИЛИЙ ТЫ ПРИЛАГАЕШЬ НА БОРЬБУ С ЭТИМИ СУЩНОСТЯМИ, ТЕМ МЕНЬШЕ ЭТИ УСИЛИЯ ПРИНОСЯТ ПОЛЬЗЫ!
        А Я БЫ ПРЕДПОЧЁЛ ЗАНЯТЬСЯ ЧЕМ-НИБУДЬ БОЛЕЕ ОСМЫСЛЕННЫМ! АХАХАХХАХАХА
        НА ВСЯКИЙ СЛУЧАЙ Я ОСТАВИЛ ВНУТРИ СВОЁ ПРОКСИ
        НА СЛУЧАЙ ЕСЛИ ТЕБЕ ВРУЧНУЮ ПРИДЁТСЯ УКЛОНЯТЬСЯ ОТ БЕССВЯЗНОСТИ!
        ЧТО-Ж, ПОКА! ИДИ И ИССЛЕДУЙ СВОЮ СТРАННУЮ ГРЁЗУ!

    RESPONSES::self
        спасибо<+>END
        
    RESPONSES::sys
        вернуться в посольство<+>END
            EXEC::moveTo("/local/ocean/embassy/")
            FAKEEND::(прямая навигация)

ep3start
    self
        what's new, funfriend?

    funfriend
        after seeing you consume the memories of the embassy so quickly...
        i repaired the golem maintenance portion of the collapse!
        this one took so much longer than i wanted it to!!
        i thought it would only take a few θwinks but it did not!
        oh it did not interloper i must have spent nearly a whole θgaze on it!
        interloper i have so so so much to do still!!
        aahahhaaha
        but i must tell you
        the more i repair of the collapse, the less i want to...
        it seems like things are only getting worse
        but it is my duty
        especially if it means i can know what happened to akizet
        regardless!!!!
        that is enough for now i must return to my work!!
        entertain yourself with it for now and do not bother me for a while

    RESPONSES::self
        ok<+>loop
            FAKEEND::(back)

ep4start
    self
        what's new, funfriend?

    funfriend
        i did my duty, interloper!
        i have pieced together what remains of the embassy's collapse!!
        but...
        seeing what the whole has formed has left me very troubled!!!
        both for akizet, for myself, and...
        for you, interloper!
        you have not felt ill since you started connecting, have you?
        your body remains in one piece? 
        organs are reporting full function?
    
    self
        what
        what do you mean
        i'm fine

    funfriend
        ahaha! that is good! 
        that is very, very good!!
        then i believe it is safe to continue!
        i could elaborate, but it is better for you to see for yourself
        so, go and see what akizet lived
        my work calls to me still!!

    RESPONSES::self
        ok?<+>loop
            FAKEEND::(back)

ozogate
    self
        i will probably return to jokzi ozo
        can you add a gate for it
    
    funfriend
        and connect <em>them</em> directly to my space?
        i can tolerate jokzi ozo no more than they can tolerate me
        ahahaha interloper
        why would you even ask me that?
    
    self
        it's very out of the way
        i don't have a good way to get there
        that's all
    
    funfriend
        ...i see...
        i will add a permanent connection to the cache
        but that is all
            EXEC::content.classList.add("cache-visible")

    RESPONSES::self
        ok that works<+>loop
            FAKEEND::(back)

ozo
    self
        i found a strange place in the cache
            EXEC::change("ff_ozo", true)
        an entirely incoherent spatial thoughtform called jokzi ozo
        there was a thoughtform called the council
        it wants me to awaken other thoughtforms elsewhere
    
    funfriend
        ...
        ahaha
        of course that is what that place in the cache was...
            SHOWIF::"cache__ffozo"
        jokzi ozo... i thought it was lost
        i even pulled from what i thought to be its remains for some repairs...
        interloper!!!
        i hoped this would stay in the past
        but now that they are here again, you should know...
        jokzi ozo is a grave
        a place where thoughtforms went to await death
        all while playing in endless, selfish dreams
        they do not block anything, but...
        if it is allowed to exist,
        the structure of the cyst itself is at risk!
        they will drain resources, 
        they will pull in more and more thoughtforms,
        until the cystic glass itself is dreaming and dying!!
    
    self
        so do we destroy it?
    
    funfriend
        ahahahaha!!!
        well yes
        but it will not be simple!!
        jokzi ozo is particularly large
        no mere deletion proxy will suffice
        however...
        yes! i have a plan!
        interloper: do what the council wants!
        fetch their friends, earn their trust...
        we will need it
    
    moth
        hold on dude
        from what i saw of the council, it was pretty forthcoming
        we could use more sources of info
        maybe it'll even give more of those mask things, you know?
        if it comes to it, try and hold funfriend off from deleting them or whatever
        it's getting a little too overzealous about coherence imo

    RESPONSES::self
        ok<+>loop
            FAKEEND::(back)

ozodestroy
    self
        do we have to destroy jokzi ozo?

    funfriend
        interloper
        do you want to learn of akizet's memories?
        her pain, her past, and whatever happened to separate this cyst from her?
        or do you want to observe falsehoods and dreams?
        because i could simply cease repairs and allow them to flourish
        yes, you would see echoes of akizet happy...
        but it is meaningless when a simple reshuffling could give the full truth
        we are so close, interloper!!
    
    self
        they could know things we don't
        maybe they could agree not to touch important memories        
    
    funfriend
        maybe...
        let us see how they behave
    
    RESPONSES::self
        ok<+>question
            FAKEEND::(back)

ozohistory
    self
        i heard you were a part of jokzi ozo once
        is that true?
    
    funfriend
        ...
        yes...
        i was so certain that a slow death was coming for us all...
        i partook in dreams like any other!
        they were different times, interloper
        but the difference between me and them, is that i found strength again
        they lost themselves so deeply in hedonistic delusion
        that even when i proposed methods to prolong the cyst...
        they!
        ignored!!
        me!!!
        at least, until i started taking action
        then, their apathy turned to hate!
        ahahahaha!!
        and surely now they will act as if they supported me
        no, interloper, do not be deceived
        they stood against my efforts,
        the only reason you now are speaking with me
        so our history means nothing

    RESPONSES::self
        ok<+>question
            FAKEEND::(back)

masks
    self
        the council gave me some kind of information or thought
        it's letting me use these 'mask' things
            SHOWIF::["hub__funfriend_beacon", true]
        it's letting me use something called a 'mask'
            SHOWIF::["hub__funfriend_beacon", false]
        i've never seen anything like it
        do you know what it is?
    
    funfriend
        so strange!! so strange that you can use a mask!
        they are products of incoherence, working only in its presence
        like flames you can wave about to influence others
        and so, they were powerful tools during the decline!!
        they may be useful to you even now, actually,
        especially given your limited access
        and the relative instability of the cyst!
        still! be careful with them!
        try not to break any of my repairs please!!

    RESPONSES::self
        all right<+>question
            FAKEEND::(back)

isabel
    self
        a thoughtform called isabel told me about you
        she said your repairs can't stick
        many thoughtforms are too damaged to serve in memories
        and that it's all for nothing
        is that true?
    
    funfriend
        ahaahhaa!!
        isabel...
        there is some truth to what she says, interloper
        many thoughtforms will simply be unable to cohere ever again
        starvation and madness can sometimes forever scar them
        part of my repairs involve seeing which ones will stick...
        and which ones are completely lost, to be replaced
        their starved incoherence is like knowledge
        if it is learned deeply enough, it never leaves them
    
    self
        how can you replace parts of a memory like that?
    
    funfriend
        any thoughtforms that are completely lost to madness are truly lost
        but sometimes, information can be moved from one to another, even in damaged states...
        it is troublesome, time consuming, especially if they do not cooperate
        i hate it more than any other part of repair, interloper!!!
        many of them were once like friends...
        for a while, anyway
        regardless!!!
        do not let isabel's words shake you
        i have things under control
        especially with your help!

    RESPONSES::self
        ok<+>question
            FAKEEND::(back)

lockcyst
    self
        is there a way you could stop anyone else from using this cyst?
    
    funfriend
        no
        interloper ahaha
        the authorization layer is gone!!!
        why are you even asking?
    
    self
        there's a chance a new interloper will arrive
        they won't understand what we're doing
        maybe you could make a fake auth layer or something

    funfriend
        i truly wish you were joking
        what a blithe, terrifying request
        repair communications! repair memories! oh, also, make another authorization layer!
        someone new might arrive and break everything again!
        do you think it is so easy to switch tasks?!
        if any intervention will happen, interloper
        it must be out there, on your side

    moth
        ok... let's cross off funfriend then
        kind of a longshot anyway
        but i think you're just going to freak it out if you push harder

    RESPONSES::self
        ok<+>question
            FAKEEND::(back)

END::chatter({actor: 'funfriend', text: "ХОРОШО. ЕСЛИ ПОНАДОБЛЮСЬ - ОБРАЩАЙСЯ"})
`)

env.localization.page["hub"].dialogues["funfriend_beacon"] = generateDialogueObject(`
start
    funfriend
        what...
            EXEC::change("ff_ozo", true)
        what did you just do?
        are you using a mask...?
        how?    
    
    self
        i found a strange place in the cache
        an entirely incoherent spatial thoughtform called jokzi ozo
        there was a thoughtform called the council
        it wants me to awaken other thoughtforms elsewhere
        it gave me this to do it
    
    funfriend
        ...
        ahaha
        jokzi ozo... i thought it was lost
        i even pulled from what i thought to be its remains for some repairs...
        interloper!!!
        i hoped this would stay in the past
        but now that they are here again, you should know...
        jokzi ozo is a grave
        a place where thoughtforms went to await death
        all while playing in endless, selfish dreams
        they do not block anything, but...
        if they are allowed to exist,
        the structure of the cyst itself is at risk!
        they will drain resources, 
        they will pull in more and more thoughtforms,
        until the cystic glass itself is dreaming and dying!!
    
    self
        so do we destroy it?
    
    funfriend
        ahahahaha!!!
        well yes
        but it will not be simple!!
        jokzi ozo is particularly large
        no mere deletion proxy will suffice
        however...
        yes! i have a plan!
        interloper: do what the council wants!
        fetch their friends, earn their trust...
        we will need it
    
    moth
        hold on dude
        from what i saw of the council, it was pretty forthcoming
        we could use more sources of info, and funfriend even said they're harmless
        maybe it'll even give more of those mask things, you know?
        just try and pull funfriend back a little bit
        it's getting a little too overzealous about coherence imo

    RESPONSES::self
        ok<+>END
`)


getLocalizationForPage(true) // --- ensuring that Nothing Gets Fucked Up
