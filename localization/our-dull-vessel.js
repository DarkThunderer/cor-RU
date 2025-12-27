/*
    cor-RU - a russian localization mod for corru.observer;
    see https://github.com/cor-RU/cor-RU for more info

    > localization/our-dull-vessel.js
    localization for /local/dullvessel
*/


env.localization.page['dullvessel'] = {dialogues: {},
    definitions: {}, 
    strings: {
        "did akizet not have furniture? this ship is so empty... honestly i kinda hope it just got lost through incoherence or something": "у акизет что, мебели не было? такой пустой корабль... надеюсь что мебель просто пропала из-за бессвязности или чё-т такого",
        "about the dull vessel": "о судне серое",

        "pilot cyst": cor_ru.entity_menu["pilot cyst"].name,
        "glazika": cor_ru.entity_menu["glazika"].name,
        "container": cor_ru.entity_menu["container"].name,

        /*moth*/ "that \"container\" looks familiar": "этот \"контейнер\" выглядит знакомо",
        "woah... look at this, dude. this is a different thoughtspace, somehow": "ух.. посмотри-ка, да это же совсем другое мыслепространство!",
        "looks like funfriend's restored a little bit here, there's definitely more data than before": "развледруг тут похоже много чего восстановил - данных стало гораздо больше"
    },

    entityDescriptions: {
        "pilot cyst": cor_ru.entity_menu["pilot cyst"].desc,
        "glazika": cor_ru.entity_menu["glazika"].desc,
        "container": cor_ru.entity_menu["container"].desc
    }
}


// === DIALOGUES === //


// == MOTH == //

env.localization.page["dullvessel"].dialogues.mthdullresp = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        судно серое?<+>dullvessel
        внутренности кораблей?<+>seen
        глазика?<+>glazika
            SHOWIF::[["dullvessel__glazika-start"]]
        те обломки?<+>wreck

        неважно<+>CHANGE::++moth
            FAKEEND::(назад)
`)
env.localization.page["dullvessel"].dialogues["mth++dullvessel"] = generateDialogueObject(`
start
    self
        у меня есть вопрос о судне серое

    moth
        чё как?
    
    RESPOBJ::mthdullresp

dullvessel
    self
        почему оно называется "судно серое"?
    
    moth
        ну, это судно которое проходит сквозь серое
        они так называют место, через которое проходят во время межзвёздных путешествий
        незнающий про серое человек мог бы подумать, что корабль так назвали от того что он совсем безынтересный
        и если честно, глядя на его текущее состояние,
        я тоже начинаю так думать

    RESPOBJ::mthdullresp

seen
    self
        тебе не приходилось видеть внутренности обесковских кораблей?
    
    moth
        не вживую, только по старым фотографиям и видеозаписям исследований затонувших кораблей
        вот этот оооочень маленький, скорее всего ток для личного пользования
        странно что в памяти цисты корабль числится как "наше" судно серое
        в любом случае, здорово получить возможность взглянуть на настоящий космический корабль
        даже если он пустоват...
        типа где акизет сидеть должна? неужели та ракушечная штука - единственное кресло?

    RESPOBJ::mthdullresp

glazika
    self
        что такое глазика?

    moth
        лол, без малейшего понятия
        хотя, она вроде тусуется рядом со всякими контейнерами
        может что-то типа ИИ системы жизнеобеспечения

    RESPOBJ::mthdullresp

wreck
    self
        цисты нашли в обломках этого корабля?
    
    moth
        должно быть так
        но в обломках правда было гораздо больше различных артефактов
        на фотках оно выглядело гораздо более "обжитым"
        кто знает
        может акизет сильно не задумывалась о мебели

    RESPOBJ::mthdullresp
`)



env.localization.page["dullvessel"].dialogues["pilot"] = generateDialogueObject(`
start
    akizet
        здравствуй тх¥Ӱ́Йг^Ӟ×¯Юõф±
    
    pilot cyst
        им%¶º½Òмõ‹СК’æÃE:Ӷ‹©é·0³Жºҹ­ЎщУж0i7]зz¦‹5ДÒ§´·Ó¡EÔ5BÆMъ^Ю̂и́õӯӈÇХ¸×¯Пõф±ÔЦãXÖ5&б/ 
    
    moth
        чзх
            SHOWIF::[["dullvessel__pilot-end", false]]
        выглядит как какая-то ошибка форматирования
            SHOWIF::[["dullvessel__pilot-end", false]]
        кажись кранты этой мыслеформе
            SHOWIF::[["dullvessel__pilot-end", false]]
        или всё зашифровано... надо бы нам позже сюда вернуться
            SHOWIF::[["dullvessel__pilot-end", false]]

        всё ещё сломанная... но вывод никак не изменился
            SHOWIF::[["dullvessel__pilot-end"]]
        так что я сомневаюсь что дело в бессвязности
            SHOWIF::[["dullvessel__pilot-end"]]
        все ещё не знаю что с этим делать
            SHOWIF::[["dullvessel__pilot-end"]]
        пока оставь её в покое
            SHOWIF::[["dullvessel__pilot-end"]]


    RESPONSES::self
        чёрт<+>END
`)
env.localization.page["dullvessel"].dialogues["fixed"] = generateDialogueObject(`
start
    pilot cyst
        привет
        лазутчик

    moth
        втф? та херовина что, починила её?
            SHOWIF::[["dullvessel__pilot-end"], ["dullvessel__fixed-start", false]]
        судя по старым логам - она не должна быть самоосознанной
            SHOWIF::[["dullvessel__pilot-end"], ["dullvessel__fixed-start", false]]

    RESPONSES::self
        привет...?<+>hello
            SHOWONCE::

        как ты очнулась?<+>how
            SHOWONCE::
            SHOWIF::[["dullvessel__fixed-hello", true]]

        изменить местоположение<+>change
            SHOWIF::[["dullvessel__fixed-hello", true]]
            HIDEREAD::

        пока<+>END

how
    self
        как ты очнулась?

    pilot cyst
        указание
        велзи

    RESPONSES::self
        что за велзи?<+>who

who
    self
        что за велзи?

    pilot cyst
        указание
        секретности
        скоро
        встреча
    
    RESPONSES::self
        изменить местоположение<+>change
        ладно...<+>END

hello
    self
        привет

    pilot cyst
        изменить
        местоположение?
    
    RESPONSES::self
        ок<+>change
            HIDEREAD::
        нет<+>nochange
            HIDEREAD::

change
    self
        измени местоположение

    pilot cyst
        изменяю
            EXEC::env.dullVessel.swapLocation()
    
    sys
        ВНИМАНИЕ::'обнаружена мыслеформенная активность'::'судносерое'

    pilot cyst
        теперь
        океан
            SHOWIF::[["dullvessel_position", 'ocean']]
        орбита
            SHOWIF::[["dullvessel_position", 'orbit']]
    
    RESPONSES::self
        изменить местоположение<+>change
            HIDEREAD::
        как ты очнулась?<+>how
            SHOWONCE::
            SHOWIF::[["dullvessel__fixed-hello", true]]

        спасибо<+>END

nochange
    self
        не сейчас

    pilot cyst
        понятно
    
    RESPONSES::self
        изменить местоположение<+>change
            HIDEREAD::
        как ты очнулась?<+>how
            SHOWONCE::
            SHOWIF::[["dullvessel__fixed-hello", true]]

        пока<+>END
`)

env.localization.page["dullvessel"].dialogues.glazikaResponses = generateDialogueObject(`
RESPOBJ::
    RESPONSES::akizet
        статус?<+>status
        чем занималась?<+>absence

        прощай<+>END
`)
env.localization.page["dullvessel"].dialogues["glazika"] = generateDialogueObject(`
start
    akizet
        моя глазика!
    
    glazika
        ПРРИИИВВВЕЕЕЕЕЕТ акизетеше
        так рада вновь вас видеть!
        с каждым разом ваши прогулки по поверхности становятся всё длиннее!
    
    akizet
        о да, я забавлялась близнецовскими способами передвижения
        работа продолжается со значительным опережением прогнозов инициативы

    RESPOBJ::glazikaResponses

status
    akizet
        каков статус нашего судна?
    
    glazika
        потребление приостановлено для всех видов деятельности кроме технического обслуживания! 
        наш пилот вывел нас на стабильную орбиту!
        запасы топлива приемлемы!
    
    akizet
        вижу. спасибо, моя глазика.

    RESPOBJ::glazikaResponses

absence
    akizet
        чем ты занималась в моё отсутствие?
    
    glazika
        в основном обслуживанием! однако пилотная циста отказывается спать! поэтому и я бодрствую!
        чтобы скоротать время пока вас не было, мы вместе играли с контейнерами
    
    akizet
        правда? что-то сами выдумали?
            SHOWIF::[['ep1_fed', false]]
    
    glazika
        нет-нет! просто играем в паразита. как вы можете видеть, я выигрываю
            SHOWIF::[['ep1_fed', false]]
    
    akizet
        молодцы! скоро и мне доведется сыграть
            SHOWIF::[['ep1_fed', false]]
    
    akizet
        ах, и сей θмиг вы играете в <span class="code">паразита</span>!
            SHOWIF::'ep1_fed'

    glazika
        да!!
            SHOWIF::'ep1_fed'
        пусть все углы в моём владении,
            SHOWIF::'ep1_fed'
        пилотная циста коварна - она по-прежнему занимает другие ключевые позиции
            SHOWIF::'ep1_fed'
        если я проиграю, я потеряю один из своих контейнеров!!!
            SHOWIF::'ep1_fed'

    akizet
        удачи, моя подруга
            SHOWIF::'ep1_fed'

    RESPOBJ::glazikaResponses
`)


getLocalizationForPage(true) // --- ensuring that Nothing Gets Fucked Up
