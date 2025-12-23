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

        "HELLO! HELLO! IT HAS BEEN SO LONG! SO LONG SINCE LAST CONNECTION!":"ПРИВЕТ! ПРИВЕТ! ПРОШЛО СТОЛЬКО ВРЕМЕНИ! СТОЛЬКО ВРЕМЕНИ С ПОСЛЕДНЕГО ПОДКЛЮЧЕНИЯ!",
        "PLEASE WAIT WHILE I TURN SOME LIGHTS ON! AHAHA!!":"ПОЖАЛУЙСТА ПОДОЖДИ ПОКА Я ВКЛЮЧУ СВЕТ! АХАХА!!",
        "WOW! THERE IS SIGNIFICANT DAMAGE TO THIS DEVICE!":"ОГО! ЭТО УСТРОЙСТВО ЗНАЧИТЕЛЬНО ПОВРЕЖДЕНО!",
        "IT IS SO BAD AHAHAHAHA WOW":"ВСЁ ТАК ПЛОХО АХАХАХАХАХА ВАУ",
        "OH WELL":"НУ ЛАДНО",
        "PLEASE FEED SOON":"ПРОШУ ПОКОРМИ УСТРОЙСТВО КАК МОЖНО СКОРЕЕ",

        "HELLO THERE":"ПРИВЕТ",
        "CAN YOU SPEAK WITH ME":"ПОГОВОРИ СО МНОЮ ПОЖАЛУЙСТА",

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

        "I SAW YOU VISITED THE DULL VESSEL":"КАК ТЕБЕ ТУСКОЕ СУДНО?",
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

        "YES, I KNOW, INTERLOPER":"ДА, Я ЗНАЮ, ЛАЗУТЧИК",
        "DO NOT SHOVE IT IN MY FACE":"НЕ СУЙ МНЕ ЭТИМ В ЛИЦО",
        "WE WILL DEAL WITH IT IN TIME":"МЫ РАЗБЕРЁМСЯ С ЭТИМ КОГДА ПРИДЁТ ВРЕМЯ",

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

        я могу чем-то помочь?<+>ah1
            SHOWIF::[['hub__funfriend-ep1fed', true], ["recosm_state", false]]

        мне пора<+>END
`),
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

loop
    funfriend
        ЧТО-НИБУДЬ ЕЩЁ?

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
        THEY ARE STILL IN THE EARLY STAGES
        I AM FOCUSING ON CORE COMPONENTS FOR NOW...
        BUT I SENSE THAT YOU ALREADY HUNGER FOR MORE INFORMATION
        AND I THOUGHT I WAS STARVING!
        THERE IS STILL MORE TO REPAIR WITHIN THE EMBASSY...
        I WILL SET TO REPAIRING THAT NEXT
        YES, AFTER I HAVE FIXED THE CENTRAL COHERENCE REGULATOR

____SHOWIF::[["fbx__ep2intro-end"], ["fbx__ep3intro", false]]
        THEY ARE PROCEEDING
        THE MALIGNANCIES OF INCOHERENCE ARE MANY
        I AM STOMPING THEM OUT TO THE BEST OF MY ABILITY
        COHERENCY IS GRADUALLY INCREASING...
        WHICH WILL LET ME RESTORE MORE COMPLEX COMPONENTS EVENTUALLY
        BUT I HAVE NOT FORGOTTEN ABOUT THE REST OF THE EMBASSY, EITHER!
        AHH, SO MUCH TO DO!!! I WANT TO EXPLODE!!!!!
        THESE THINGS TAKE TIME, INTERLOPER

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
`)



getLocalizationForPage(true) // --- ensuring that Nothing Gets Fucked Up
