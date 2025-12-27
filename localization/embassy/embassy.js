/*
    cor-RU - a russian localization mod for corru.observer;
    see https://github.com/cor-RU/cor-RU for more info

    > localization/embassy.js
    localization for /local/ocean/embassy
*/

env.localization.page["embassy"] = {dialogues: {},
    definitions: {},
    strings: {
        "this is the most dense thoughtform i think i've ever seen... they have such a strange way of storing data": "это, пожалуй, самая плотная мыслеформа, которую я когда-либо видел",
        "holy smokes. yeah i don't think we ever heard about this part of the call... hey--there's another memory that's been fixed, open it": "ну нихера себе. про такие детали о зове я ещё никогда не слышал.. о--погляди - тут новое воспоминание появилось - посмотри что внутри",
        "jesus... well that first memory lines up with what akizet told gordon. but why would she go to us if they agreed to keep it quiet?": "ё.. значит то воспоминание с гордоном всё же не было бессвязным. единственное чего не понимаю - почему акизет рассказала обо всём нам, если они договорились хранить это в тайне?",
        "if those were two of the memories she chose to store, what are these other ones??": "если акизет хранит здесь такие ядерные воспоминания, то я просто боюсь представить что мы найдём в других секциях посольства",
        "time to get into the collapse, buddy": "пришла пора узнать о коллапсе",
        "seems like funfriend is still working on the rest of the collapse memory for now": "похоже оставшийся кусок воспоминаний о коллапсе развледруг всё ещё чинит",
        "time to finish the collapse buddy. we almost got everything": "пришла пора досмотреть коллапс до конца. теперь мы знаем почти всё",
        "wow... that kinda does it for this whole thoughtspace, except for that first one i guess": "пиздец.. что-ж, полагаю с этой мыслеформой закончили. точнее, почти закончили - осталось ещё посмотреть загадочное первое воспоминание",
        "our first fully repaired thoughtspace... kinda. wild": "первое полностью восстановленное мыслепространство... жесть.",

        "there are so few distinct thoughtforms here... then again it could just be one part of the embassy": "тут так мало отдельных мыслеформ.. надеюсь это лишь часть всего посольства",
        "did she really label this memory as 'suspicion'? or was that funfriend? that's kinda ominous": "она серьёзно решила назвать воспоминание таким угрожающим словом 'подозрение'? или это развледруг постарался?",
        "this is fucked up dude, imagine if you couldn't trust any of us": "жесть, конечно.. представь если бы ты никому из нас не мог доверять..",
        "how did we never hear about this?? they always said it was some sort of structural failure due to the gravity differences or some bullshit like that": "почему они нам об этом не рассказали?? обески всегда твердили, что посольство обвалилось из-за структурной неустойчивости, вызванной разницей в гравитации Земли и Обескии",
        "i have to give it to this bstrd thing, general cohesion is still pretty solid. it's still hard to tell for sure what is real and what isn't though": "надо признать - общая связность в воспоминаниях под контролем зсрнца довольно велика. сложно понять, правда, что здесь является реальностью, а что было додумано",

        "about the embassy": "о посольстве",

        "experience": "вспомнить",

        "recollection::better times": cor_ru.entity_menu["recollection::better times"].name,
        "recollection::discovery": cor_ru.entity_menu["recollection::discovery"].name,
        "recollection::suspicion": cor_ru.entity_menu["recollection::suspicion"].name,
        "recollection::collapse": cor_ru.entity_menu["recollection::collapse"].name,

        "recollection::Aæ§<äYf¹L": cor_ru.entity_menu["recollection::Aæ§<äYf¹L"].name,
        "recollection::ø¥¬À‰": cor_ru.entity_menu["recollection::ø¥¬À‰"].name,
        "recollection::„²!Äë±#Rã": cor_ru.entity_menu["recollection::„²!Äë±#Rã"].name
    },
    entityDescriptions: {
        "recollection::better times": cor_ru.entity_menu["recollection::better times"].desc,
        "recollection::discovery": cor_ru.entity_menu["recollection::discovery"].desc,
        "recollection::suspicion": cor_ru.entity_menu["recollection::suspicion"].desc,
        "recollection::collapse": cor_ru.entity_menu["recollection::collapse"].desc,

        "recollection::Aæ§<äYf¹L": cor_ru.entity_menu["recollection::Aæ§<äYf¹L"].desc,
        "recollection::ø¥¬À‰": cor_ru.entity_menu["recollection::ø¥¬À‰"].desc,
        "recollection::„²!Äë±#Rã": cor_ru.entity_menu["recollection::„²!Äë±#Rã"].desc
    }
}

// === DIALOGUES === //

// == MOTH == //

env.localization.page['embassy'].dialogues["quality"] = generateDialogueObject(` 
start
    moth
        нифига себе.. так, погоди
        дружище, из всех мыслеформ что мы успели встретить - эта самая плотная
        типа--это серьёзно
        какого там года твой мыслекол? ты уверен что он с таким справится?
        знаю, конечно, это не моего ума дело...
        но я пожалуй вызову для тебя окошко выбора качества
        так, на всякий случай
    
    sys
        ВНИМАНИЕ::'выберите текущее качество визуализации'
        ПРИМЕЧАНИЕ::'качество можно поменять через системное меню'
        ПРИМЕЧАНИЕ::'ОБЫЧНОЕ';'все сущности визуализируются';'анимация мыслеформ'
        ПРИМЕЧАНИЕ::'НИЗКОЕ';'визуализируются лишь ключевые для потока памяти компоненты'
        ПРИМЕЧАНИЕ::'выбор НИЗКОГО качества включает <span style="ПРИМЕЧАНИЕ::'предоставляет альтернативные методы управления';'предназначен для решения проблем совместимости'">ПОНИЖЕННУЮ ИНТЕНСИВНОСТЬ</span>';'переключается в системном меню'

    RESPONSES::sys
        ОБЫЧНОЕ<+>END
            EXEC::setTimeout(()=>{setQualityPreference('regular')}, 500)
        НИЗКОЕ<+>END
            EXEC::setTimeout(()=>{setQualityPreference('low');setIntensityPreference(true)}, 500)
`)

env.localization.page['embassy'].dialogues.mthembresp = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        about the groundsmindry<+>groundsmindry
            SHOWIF::"ep4__entrance"
        о структуре мыслеформы<+>structureloop
            SHOWIF::"embassy__d1_start"
        об обесках<+>obeskloop
        about collapse<+>collapseloop
            SHOWIF::"embassy__d3_start-end"
        about bstrd<+>bstrd
            SHOWIF::"embassy__d3_bstrdintro-start"
        не важно<+>CHANGE::++moth
            FAKEEND::(back)
`)

env.localization.page['embassy'].dialogues[`mth++${page.dialoguePrefix}`] = generateDialogueObject(`
start
    self
        у меня возник вопрос о посольстве

    moth
        ну, посмотрим что я на него смогу ответить
    
    RESPOBJ::mthembresp

loop
    RESPOBJ::mthembresp

groundsmindry
    self
        i want to talk to you about the groundsmindry
        and all the stuff that happened there
    
    moth
        given the complexity, i'd really prefer to have the data in front of me
        sure i have the machines recording stuff, but it's raw
        it's a lot easier to quickly review when it's all loaded up through your spike
        so just load your iteration
        or start a new one in that last part
        then talk to me again, ok?

    RESPONSES::self
        ok<+>loop
            FAKEEND::(back)


bstrd
    self
        WHAT IS THIS BSTRD THING
    
    moth
        i gave the data a closer look, at least as close as i can see without a spike myself
        as far as i can tell, it's an autonomous, iteration-limited memory modifier
        it picks one spot in a memory based on its importance, and operates only there
        the fact it can alter the memory at all is honestly incredible
        it's intended for human memories, specifically combat recordings, but...
        maybe the loose structure of obesk memory is actually helping it work?
        anyway don't worry about it spreading, it's limited to the framing device
        which, by the way, i got from a college pal, not off the spike trade
        we'd be boiling in internal affairs already if i got it off the spike trade lol
        but i gotta tell you, this pal of mine...
        they got the spike a few years ago and they've been really strange ever since
        and not in a fun way like with you
        i mean, bless them, they're great, they're just...
        they would say we aren't getting the full experience of their work without a "hard mode"
        despite this being an <em>important operation</em>
        that kind of person, you know?
        at least this one didn't have a title screen

    RESPONSES::self
        i see<+>loop
            FAKEEND::(back)

structureloop
    RESPONSES::self
        game sucks<+>gamebad
            SHOWONCE::
            SHOWIF::"embassy__d3_rec_clear-end"
        actually the game is ok<+>gamegood
            SHOWONCE::
            SHOWIF::"mth++embassy-gamebad"
        but it needs some work<+>gameok
            SHOWONCE::
            SHOWIF::"mth++embassy-gamegood"
        смена перспективы?<+>perspective
            SHOWIF::"embassy__d1_start"
        other memories locked?<+>locked
            SHOWIF::[["embassy_d2_complete", true],["embassy_d1_complete", true],["fbx__ep2intro-end", false]]
        back<+>loop
            FAKEEND::(back)

obeskloop
    RESPONSES::self
        kazki guns?<+>kazkiguns
            SHOWIF::"embassy__d3r2-end"
        почему обески так странно выглядят?<+>weirdlook
            SHOWIF::"embassy__d1_start"
        что стало с посольством?<+>state
        team members still around?<+>team
            SHOWIF::"embassy__d1_kazkibozko"
        groundsmind?<+>groundsmind
            SHOWIF::"exm|embassy|attendant"
        what is a kalstik?<+>kalstik
            SHOWIF::"exm|embassy|kalstik stand"
        what is an archival vein?<+>archives
            SHOWIF::"embassy__d3_bstrdintro-start"

        другой вопрос<+>loop
            FAKEEND::(back)

collapseloop
    RESPONSES::self
        cavik?<+>cavik
        the signal?<+>signal
        casualties?<+>casualties
        attacks outside embassy?<+>otherattacks
        back<+>loop
            FAKEEND::(back)

cavik
    self
        AKIZET SAID SOMETHING ABOUT CAVIK...
        POTENTIALLY GETTING THEM KILLED?
    
    moth
        yeah, i saw that too...
        i think this memory is further ahead than the other ones
        we're definitely missing something

    RESPONSES::self
        i see<+>collapseloop
            FAKEEND::(back)

casualties
    self
        how many casualties were there in the collapse?

    moth
        we never really got any solid numbers...
        all we know is enough permanently died that very few physically visit earth anymore
        i've been told it's mostly out of fear now, but...
        i have to wonder if most of the existing qou were actually killed in the collapse
        see, the population of the embassy was only something like a few hundred
        but the obesk have a really low population, like, as a whole
        so when one of them dies, especially a qou, it's a big deal

    RESPONSES::self
        i see<+>collapseloop
            FAKEEND::(back)

signal
    self
        do we know anything about the signal?
        the one that triggered the start of this?

    moth
____SHOWIF::'ep4__h2h'
        officially, no
        nothing i have access to suggests that the FBX does
        but, based on what we saw, it's pretty safe to assume it was a dull signal
        probably from the meteorite, maybe amplified through the embassy's spine
        though that last part is just my own speculation
        cause it ran up through the whole embassy and carried groundsmindry signals, right?
        the embassy easily could have been like, a big antenna
        that's all i got though

____SHOWIF::['ep4__h2h', false]
        no, actually
        i mean, that's me making an assumption
        because if we knew anything, we'd probably have already connected it to the collapse somehow
        we didn't and still don't have any tools that can detect dull signals
        but the fact we didn't know about it does at least confirm that it was a dull signal            
____END

    RESPONSES::self
        that's too bad<+>collapseloop
            FAKEEND::(back)

gameok
    self
        i've been thinking some more
        the game is ok but it needs some work

    moth
        i'll forward that to the hacker i got it from for you
        i'm sure they'll get right on it
    
    RESPONSES::self
        thanks<+>structureloop
            FAKEEND::(back)


gamegood
    self
        actually the game is ok
    
    moth
        ok?
        great
    
    RESPONSES::self
        yes!!<+>structureloop
            FAKEEND::(back)          

gamebad
    self
        game sucks
    
    moth
        ok, first, that's not a question
        second, you're gonna have to deal with it
        the only way we can access this data is with a framing device
        and this is the only one i could get without drawing attention
    
    RESPONSES::self
        fine<+>structureloop
            FAKEEND::(back)

otherattacks
    self
        when the collapse started,
        were there any attacks anywhere else?
    
    moth
        not attacks, really
        but there was some really weird stuff that happened at the same time
        see, the obesk had these things they called polygonation spires
        put them all around the world, used them to track the call's origin point
        looked like big purple spikes that stuck out of the ground, like radio tower height
        they were big tourist attractions for a while, actually
        anyway, when this started, they all melted
        every single one just collapsed on itself
        popular theory was that they relied on something in the embassy that broke...
        but i'm not really sure that's the case anymore
        there are also these old archived videos from way back when of obesk ships acting strangely
        like, darting around in the air and not really going anywhere, nearly crashing into buildings
        nothing bad ever really happened, and some news sites debunked them as CGI hoaxes
        remember, that was also about when the AI shit hit the fan, so...
        man, i'm just rambling - there was all kinds of weird stuff that happened, ok?
    
    RESPONSES::self
        ok<+>collapseloop
            FAKEEND::(back)
    

kazkiguns
    self
        where did kazki get guns?

    moth
        one of the internal initiatives the obesk had involved the exchange of materials
        like, everything - from plastic bottles, to assault rifles
        they gave us stuff too, although obviously it was a little one sided...
        this was like 20+ years ago so idk exactly what the circumstances were,
        but when aliens were new, people probably didn't hesitate to give them whatever
    
    RESPONSES::self
        i see<+>obeskloop
            FAKEEND::(back)
    

perspective
    self
        почему я могу менять песпективу?
        разве воспоминание не должно быть от лица акизет?
    
    moth
        погоди, а раньше ты менять перспективу чтоль не мог?
        это же встроенная в патч функция. включенная по дефолту
        хмм.. 
        может просто другие мыслеформы были слишком нестабильны?
        когда развледруг до них доберётся - функция должна будет включиться
    
    RESPONSES::self
        было бы здорово<+>structureloop
            FAKEEND::(back)

locked
    self
        why are these other two memories not opening up?

    moth
        looking at the data i can access here,
        these two are still totally busted. 
        something to talk to funfriend about for sure
        and the last one... holy smokes
        i don't think your mindspike will even let you render it?
        it's still busted, but i'm also reading that it has 'aggressive action'
        even if we get it repaired,
        your mindspike will block out combat simulations
        it's, like... a legal thing. remember that big mindsci lawsuit?
        although, i do have an idea...
        but, we'll get to that if this ever gets fixed
    
    RESPONSES::self
        i see<+>structureloop
            FAKEEND::(back)

weirdlook
    self
        почему обески так странно выглядят?

    moth
        ну, если ты забыл - развледруг сказал что визуальные данные невосстановимы
        потому он использовал кэшированные "сетевые сигнатуры" из "коллектива"
        то есть вроде как аналога нашего интернета
        в старых интервью обески его пару раз упоминали
        первый раз такое упоминание произошло, когда они узнали о <em>нашем</em> интернете
        интересно, наверное, было обескам первого контакта - что ни день, то открытие
    
    RESPONSES::self
        наверное<+>obeskloop
            FAKEEND::(back)

kalstik
    self
        what is a kalstik?
    
    moth
        i have absolutely no idea
        sorry lol
    
    RESPONSES::self
        its ok<+>obeskloop
            FAKEEND::(back)

archives
    self
        what is an archival vein?
    
    moth
        well, i can see from surface-level context that it's part of the groundsmindry system
            SHOWIF::[["exm|embassy|archive", false]]
        there are apparently a lot of them, and since it uses the word 'vein'...
            SHOWIF::[["exm|embassy|archive", false]]
        there's probably a whole system they're connected to
            SHOWIF::[["exm|embassy|archive", false]]
        that's the best i can do buddy, do some more scanning and i might be able to help more
            SHOWIF::[["exm|embassy|archive", false]]

        from the context of what you've scanned, i can get a pretty good idea...
            SHOWIF::[["exm|embassy|archive", true]]
        everything is implying that there was an entire vascular-like system of them throughout the embassy
            SHOWIF::[["exm|embassy|archive", true]]
        and all of them had the obesk's data cysts loaded up in bulk amounts...
            SHOWIF::[["exm|embassy|archive", true]]
        ...which all funnelled knowledge down to the groundsmind for 'operational omniscience'
            SHOWIF::[["exm|embassy|archive", true]]
        that's a pretty cool idea, but i can only imagine it made the collapse happen faster
            SHOWIF::[["exm|embassy|archive", true]]
        seems like there'd be a lot of structural failure points if it was an entire tunnel system
            SHOWIF::[["exm|embassy|archive", true]]

    RESPONSES::self
        ok<+>obeskloop
            FAKEEND::(back)

state
    self
        что стало с посольством?

    moth
        развалилось. буквально расплавилось
        обески, конечно, построили новое, но к оригиналу из воспоминаний оно отношения не имеет
____SHOWIF::"ep4__entrancefinal"
        and now we know why
        but knowing that, i really wonder why they bothered building another one
        was it to save face?
        maybe they have a new research team investigating the aftermath?
        or maybe they just didn't wanna totally abandon us, despite what happened
        the obesk totally closed up after the collapse, so we don't have any answers yet

____SHOWIF::["ep4__entrancefinal", false]
        почему развалилось старое? никто не знает. после обвала обески 'ушли в себя'
        перестали отправлять гостей в города, с ФБК связываются очень редко...
        в своё время все только об этом и судачили
        океан вокруг посольства так и не пришёл в норму
____END
    
    RESPONSES::self
        ясно<+>obeskloop
            FAKEEND::(back)

team
    self
        как думаешь, члены сигнальной инициативы ещё живы?

    moth
        без понятия
____SHOWIF::"ep4__entrancefinal"
        вот прям совсем.
        ответов так мало, что какие-то предположения строить просто не на чем
        вернулись ли они домой?
        остались ли на Земле, чтобы продолжить работу над Конфликтом?
        узнать наверняка сможем, наверное, лишь когда закончим работу над цистой
        а может и тогда ничего не будет ясно

____SHOWIF::["ep4__entrancefinal", false]
        ходят слухи что они пропали без вести..
        но если уж быть честным - когда обески позакрывали свою деятельность на Земле
        команда акизет скорее всего просто вернулась домой
        чтобы ни произошло при развале посольства, обесков это похоже серьёзно напугало
        вряд-ли нашлось много желающих остаться на Земле
____END
    
    RESPONSES::self
        понятно<+>obeskloop
            FAKEEND::(back)

groundsmind
    self
        what is a groundsmind?

    moth
        oh, you don't know?
        it's pretty cool
        basically, they assign someone to be the "groundsmind" of major structures
        they connect to this gigantic corrucyst that's hooked up to the walls
        and they kind of just control everything
        it's like they become the building
        sounds familiar, right?
        that idea ended up inspiring the whole mindspike industry
        it's one of those little bits of history that gets forgotten all the time
    
    RESPONSES::self
        i see<+>obeskloop
            FAKEEND::(back)

`)

getLocalizationForPage(true) // --- ensuring that Nothing Gets Fucked Up
