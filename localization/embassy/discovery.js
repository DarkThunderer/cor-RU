/*
    cor-RU - a russian localization mod for corru.observer;
    see https://github.com/cor-RU/cor-RU for more info

    > localization/discovery.js
    localization for /local/ocean/embassy --- recollection::discovery
*/

strings = {
}
entityDescriptions = {
    "времяостановитель": "'частичный перевод';'унаследованно сгенерированное по описанию существительное'",
    "времяостановителя": "'частичный перевод';'унаследованно сгенерированное по описанию существительное'",
    "времяостановителю": "'частичный перевод';'унаследованно сгенерированное по описанию существительное'",
    "времяостановителем": "'частичный перевод';'унаследованно сгенерированное по описанию существительное'",
    "времяостановителе": "'частичный перевод';'унаследованно сгенерированное по описанию существительное'",

    "эквиками": "'подразумевается этнос';'происходит от названия континента';'экива'",
    "экивикский": "'подразумевается этнос';'происходит от названия континента';'экива'"
}

env.localization.page['embassy'].strings = {...env.localization.page['embassy'].strings, ...strings}
env.localization.page['embassy'].entityDescriptions = {...env.localization.page['embassy'].entityDescriptions, ...entityDescriptions}

// === DIALOGUES === //

// == DISCOVERY --- DAY 1 == //

env.localization.page['embassy'].dialogues["d1_start"] = generateDialogueObject(` 
start
    sourceless
        ко мне возвращается сознание
        камера восстановления раскрывается, впуская внутрь свет цистозных стёкол посольства
        чрез далёкое открытие серое я чувствую что начался новый 0взор

    RESPONSES::akizet
        выйти из камеры<+>emerge
            EXEC::toggleSwapCam(true)
    
emerge
    sourceless
        я вылезаю из камеры. моё тело куу было обновлено и восстановлено
        теперь оно ощущается прямо как в 0миг моего вознесения
        то редкое, любимое ощущение всемогущества - возможности изменить это тело как заблагорассудится
        однако стоит вернуться к работе..
        близится фокусировочная встреча инициативы исследования зова
        необычная встреча - в этот раз нам предоставили преинтереснейшее оборудование!
        стоит поскорее собрать команду.
    
    RESPONSES::akizet
        к трудовым свершениям!<+>END
`)

/* DAY 1 - TOZIK */
env.localization.page['embassy'].dialogues["d1_tozik"] = generateDialogueObject(` 
start
    sourceless
        тозик сидит на стуле терминала, его рецептор соединён с времяостановителем
            EXEC::pauseSwapCam(true);
        система сжатия времени, дающая сей великой цисте её звучащее имя, ещё не была активирована
        должно быть он использует соединение для доступа к архивам
        я обхожу изгиб времяостановителя чтобы его поприветствовать

    akizet
        привет, тозик!

    sourceless
        он показывает, что меня заметил, ненадолго встречаясь со мною взором
            EXEC::vnp({hideStage: true, tozik: "show"})
        впрочем внимание его целиком и полностью направленно внутрь - к соединению с корруцистозной веной
        тозик не любит болтать просто так, потому я стараюсь не затягивать разговор
    
    akizet
        готов к фокусу?
        прямо сейчас подготавливаешься?
    
    tozik
        да
        реорганизую соединённые архивные цисты
        буквально 0подмиг назад произошло нечто интересное
        на фокусе и обсудим
    
    akizet
        отлично
        тогда до встречи
    
    RESPONSES::akizet
        прощай<+>END
            EXEC::pauseSwapCam(false);vn.done()
`)

/* DAY 1 - GAKVU */
env.localization.page['embassy'].dialogues["d1_gakvuresp"] = generateDialogueObject(`
RESPOBJ::
    RESPONSES::akizet
        ложная среда?<+>false
        жалоба...<+>complaint
        накидка<+>coat
            SHOWIF::'gakpause'
        пока всё<+>END
            EXEC::pauseSwapCam(false);vn.done()
`)

env.localization.page['embassy'].dialogues["d1_gakvu"] = generateDialogueObject(` 
start
    sourceless
        гакву прислонена к слушателю, глаза её смотрят куда-то вдаль
            EXEC::pauseSwapCam(true);
        на её рецепторе сидит циста ложной среды
        даже приблизившись и наклонив голову, я не могу различить стоящего на ней символа
        интересно - это ещё одна симуляция поверхности? у неё к ним какой-то совершенно нездоровый интерес
        она вскоре меня замечает, и весело машет свободным рецептором
            EXEC::vnp({hideStage: true, gakvu: "show"})
        
    gakvu
        привет, акизет!
        готова к фокусу?

    akizet
        да!
        я, если честно, ровно то же самое хотела спросить у тебя
        подготовила что интересное?
    
    gakvu
        конечно!!
        мы с тозиком чуть раньше следили за зовом и...
    
    sourceless
        она бросает взгляд на ничего вокруг себя не замечающего тозика
    
    gakvu
        если так подумать, то нашёл его именно тозик..
        мы заметили вспышку амплитуды у зова
        заметный такой шпиль посреди равнин
        очень интересно!
    
    akizet
        и что дальше?
    
    gakvu
        а ты сама не видишь? теперь он просто прирос к стулу!
        мне одной пришлось вручную собирать архивные цисты и скармливать их времяостановителю
        ну, может не одной, конечно, мне сильно помог кавик..

    sourceless
        я смеюсь, и гакву подхватывает этот смех. смеёмся мы скорее всего по разным причинам
    
    gakvu
        что-то ещё хотела спросить?
        если что - я до начала фокуса буду здесь

    sourceless
        очень не хочется, конечно, это делать..
        но мне наверное стоит рассказать о жалобе
        
    RESPOBJ::d1_gakvuresp

complaint
    akizet
        есть один вопрос, который я просто обязана обсудить
        гакву, мы обе, конечно, всё понимаем
        но... работа..
    
    gakvu
        бозко!

    sourceless
        что?
        с ней уже поговорил бозко??
        моё удивление просто очевидно по внезапному скручиванию рецепторов
    
    gakvu
        что, не он?
        я знаю что это он!
        именно у него ведь постоянно какие-то проблемы с экивиками
        
    sourceless
        я смеюсь, и отрицательно машу руками и рецепторами
        она тоже начинает смеяться--я почти уверена что ей нравится, что я понимаю сухой экивикский юмор
        
    akizet
        нет-нет, гакву...
        не важно, кто донёс до меня эту информацию
        я знаю, что тебе нравится твоя работа,
        и, что важнее всего, знаю что работа твоя важна и полезна
        но это ясно не всем вокруг
        и если подобных жалоб накопится слишком много - обратятся взоры уже ко мне
        потому, пожалуйста, ради меня..
        
    sourceless
        я останавливаюсь, чтобы придумать элегантный способ обо всём этом сказать..
        "можешь хотя бы делать вид что ты занята"?
        гакву самодовольно крутит своими рецепторами - она прекрасно понимает, о чём я хочу ей сказать

    gakvu
        не волнуйся, я поняла
    
    akizet
        вот и хорошо!

    RESPOBJ::d1_gakvuresp

false
    akizet
        а что это у тебя за ложная среда?

    gakvu
        а! эта?
    
    sourceless
        я подмечаю странное, скрытое опасение в движениях её рецепторов
        оно быстро уходит, когда гакву начинает воодушевлённо рассказывать о цисте

    gakvu
        она из дома
        воспоминания умелого наездника на вейльках в игровом формате
        в ней вейльк движется к погодной стене,
        а тебе приходится прыгать от вейлька к вейльку, пытаясь за ними поспевать
        иначе раздавит за воздушной границей!

    sourceless
        судя по жестикуляциям её рук и рецепторов,
        она пытается со мной сторговаться
    
    akizet
        звучит ужасающе
    
    gakvu
        потому-то и интересно! тебе стоит как-нибудь попробовать

    RESPOBJ::d1_gakvuresp

coat
    akizet
        your coat...
        i have never seen it off like that before!
        
    sourceless
        gakvu draws her attention outwards, to stare down at it
        she pulls at the false fabric, receptors slightly twisting in confusion
    
    gakvu
        oh
        that is strange!
        i never turn this off
    
    sourceless
        the twist in her receptors slowly grows more pronounced

    gakvu
        what did i just say?
            EXEC::ratween(env.bgm, 0.75, 3000);content.classList.add('incoherence')
        'turn it off'?
        it is fungus...
        wait, no--it is, a representation of fungus...
        that i emulate with my clothing!
    
    sourceless
        i watch her with some concern - she is saying things i already know
        like she is convincing herself... but, why? this is very strange
    
    akizet
        are you ok?

    gakvu
        ah...
        yes!
            EXEC::ratween(env.bgm, 1, 3000);content.classList.remove('incoherence')
        sorry... sometimes when i am using these false environments,
        i get context overlap!
        for a θblink, it is like i am my signature rather than myself!
        i should really start pausing these things when talking, hehe

    sourceless
        the lights of her coat resume
            EXEC::change("gakpause", false);content.classList.remove('gakpause')

    moth
        interesting... that was some sort of memory leak
            SHOWONCE::
        incoherence spiked pretty bad
            SHOWONCE::
        avoid doing that kind of thing, ok?
            SHOWONCE::

    RESPOBJ::d1_gakvuresp
`)

/* DAY 1 - CAVIK */

env.localization.page['embassy'].dialogues["d1_cavikresp"] = generateDialogueObject(`
RESPOBJ::
    RESPONSES::akizet
        our focus approaches<+>focus
        closed loop theory?<+>theory
        anything happening?<+>talk
        пока всё<+>END
            EXEC::pauseSwapCam(false);vn.done()
`)
env.localization.page['embassy'].dialogues["d1_cavik"] = generateDialogueObject(` 
start
    sourceless
        КАВИК РАБОТАЕТ С АРХИВНЫМИ ЦИСТАМИ, ИНОГДА ЗАКРЕПЛЯЯ ИХ НА МОЩНОМ РЕЦЕПТОРЕ
            EXEC::pauseSwapCam(true);
        ЦИСТЫ АККУРАТНО РАЗЛОЖЕНЫ ПО КУЧКАМ В ЗАВИСИМОСТИ ОТ ОТТЕНКА ИХ ВНУТРЕННОСТЕЙ
        ЕГО РЕГУЛЯРНОЕ ОБСЛУЖИВАНИЕ НЕ ДОПУСКАЕТ ТОГО, ЧТОБЫ ХОТЬ ОДНА СТАЛА СЛИШКОМ ТЁМНОЙ ИЛИ ОГОЛОДАЛА
        ОН ЧУВСТВУЕТ МОЁ ПРИБЛИЖЕНИЕ, И ОБОРАЧИВАЕТСЯ, РАДУШНО КИВАЯ
            EXEC::vnp({cavik: "show", hideStage: true})
    
    cavik
        акизет! благой взор!
            
    akizet
        и тебе того же, друг мой
        чем занят?

    cavik
        да просто обслуживаю старые архивные цисты
        а вместе с тем вспоминаю! ох, какие же раньше предлагались безумные обескоцентричные теории!
        долго думал, значит, над одной из них--не абы какой, а совместной теорией сероетеше и азкавинеше!
        назвали они её 'закрытая петля' - не слышала, случаем?
    
    akizet
        а..

    sourceless
        О НЕТ
        КОНЕЧНО ЖЕ СЛЫШАЛА
        НАДО СДЕЛАТЬ ВСЁ ВОЗМОЖНОЕ, ЧТОБЫ ОТГОВОРИТЬ ЕГО РАССКАЗЫВАТЬ О НЕЙ ПЕРЕД СВЕТЛЫМИ БЛИЗНЕЦАМИ

    cavik
        я почти готов поверить что она представляет собой сатиру наиболее безумных теорий ранних эпох...
        и всё же, есть в ней нечто по-странному убедительное!
        ах, точно--ты что-то хотела спросить?
    
    RESPOBJ::d1_cavikresp

focus
    akizet
        близится фокус, друг мой
        ты готов? нашёл чем поделиться?
    
    sourceless
        ПОЗА, КОТОРУЮ ОН ПРИНЯЛ, ГОВОРИТ ОБ ОБРАТНОМ

    cavik
        ой!! а что, уже пора?
        ох, точно ведь - у этих старых цист нет опции сжатия времени.. не удивительно что я потерял ему счёт!
        а, да, точно, я буду готов!
        без сомнений!
    
    akizet
        не слишком сильно волнуйся, you do not need to press yourself, my friend
        it is a simple one
    
    cavik
        i know, i just hate when this happens
        i do not have anything to bring this time... but i will be ready!
    
    akizet
        excellent
    
    RESPOBJ::d1_cavikresp
    
theory
    sourceless
        I WOULD PREFER NOT TO CRUSH HIS INVESTIGATIVE SPIRIT
        BUT THESE EARLY THEORIES CARRY LESS WORTH THAN <span definition="NOTE::'partial translation';'inherited description-generated noun'">WALL-ROT</span>
        ESPECIALLY DULLZKOVIK'S, VELZIE'S SMILE UPON HIM
    
    akizet
        closed loop...
        is that the time--
    
    cavik
        time manipulation!! yes! let me remind you! 
        dullzkovik posited that one era... we learn to use the dull plane to traverse space four-dimensionally
        and our future selves eventually discover the home of the bright cousins, but far too late to meet them
        so--we create a contrivance just big enough to release a message to ourselves and signal its location!

    sourceless
        OH, CAVIK
        I TWIST MY RECEPTORS THOUGHTLESSLY, ACCIDENTALLY BARING MY SKEPTICISM
        
    cavik
        now--i know you must think it is ridiculous, 
        and it is! especially as it goes on, hehe
        but is it not inevitable at the same time?
        in our θdeaths, there is enough time to unravel any mystery--time manipulation included!
    
    akizet
        first...
        i do not think dullzkovik understood the full implication of creating a contrivance inside a planet at that point
        that was before the incident with the shared moon, you know
        and, time manipulation... 
        if we ever were to manage it,
        the mistakes that created us and our world would be gradually undone to right old wrongs
    
    cavik
        but we would never know if it was happening, would we? it would just 'be'!
        anyway, i will not seriously debate it with you--it is just a bit of fun
    
    sourceless
        TO BE SURE...
    
    akizet
        yes, of course!
        and--you are not going to share this with any cousins, correct?

    sourceless
        I SEE THE DEJECTION EVEN AS HE TRIES TO HIDE IT BENEATH AN ARCHIVAL CYST
        HOW JOYLESS I MUST SEEM, SUCH A TERRIBLE INVERSION OF OUR YOUTH
        BUT I REALLY WOULD PREFER NOT NEEDING TO FIX ANOTHER OVERSHARING INCIDENT
    
    cavik
        aki...
        i would not seriously entertain sharing <em>this</em> one.
        did you really think that?
        i know i made an incorrect step, but
    
    akizet
        cavik, cavik! i trust you, be at ease
        you know how i must be during these times
        do not feel at fault
    
    cavik
        of course, no, no, i understand

    sourceless
        ¥IÁÈiæb4
        ANOTHER LITTLE DEATH TO HAUNT ME
    
    RESPOBJ::d1_cavikresp

talk
    akizet
        cavik, my friend, tell me
        what news do you carry?
        have you been enjoying your role?
        it is not often that we have time to speak plainly anymore

    cavik
        i have! the oceans are truly mesmerizing, nothing at all like home
        you should see all the artifacts that the cousins have simply left to the water!
        and on our expeditions, so many little creatures come up to examine our vessels
        has bozko told you about the one he has taken?
    
    sourceless
        FOR THAT MOMENT I HEARD AN ECHO OF LARVAL JOY IN HIS VOICE
        BUT IN THE SUBTLE TURN OF A RECEPTOR, I SEE HE FEELS HE SHOULD NOT HAVE SAID THAT
    
    cavik
        that is fine, right?
        you heard that from a veilk's whisper, not me
    
    akizet
        haha! it is! it is perfectly fine
        well, the groundsmind says we should not, since the cousins could get mad, but...
        i do not really care
        tell me - have you contributed any more to the <span definition="NOTE::'partial translation';'inherited description-generated noun'">life-pod</span> project?
    
    cavik
        ahh! no! not in some time
        but i hear they recently succeeded in sending a 'grain' back to obeski
        it is, of course, being held in deep quarantine, but...
        that it worked is promising alone
        even if the cyst itself was bigger than both of us combined!

    akizet
        remarkable, i must check in with them to see how they did it
        as trade continues, i imagine that organic materials will be the next leap in relations
        if you find the time again, you should join the effort!
        last i spoke with the team, they asked when they would see you again
    
    cavik
        really??
        i should! i will check in again with them!
    
    RESPOBJ::d1_cavikresp
`)

/* DAY 1 - KAZKI + BOZKO */
env.localization.page['embassy'].dialogues["d1_kazkibozkoresp"] = generateDialogueObject(`
RESPOBJ::
    RESPONSES::akizet
        our focus approaches<+>focus
            EXEC::change('PAGE!!d1_kbcollected', true)
        what was that about?<+>story
        anything happening?<+>talk
        fare well for now<+>END
            EXEC::specialCam(false);pauseSwapCam(false);vn.done()
`)

env.localization.page['embassy'].dialogues["d1_kazkibozko"] = generateDialogueObject(` 
start
    sourceless
        BOZKO AND KAZKI IDLE NEAR THE INNER WALL, THEIR CHATTER DROWNED OUT BY THE NUMEROUS OTHERS NEARBY
            EXEC::pauseSwapCam(true);
        KAZKI'S BRANCHED RECEPTORS GESTICULATE AS WILDLY AS HER HANDS WHILE SHE SPEAKS TO BOZKO
        HIS FOCUS LIES MOSTLY UPON THE <span definition="NOTE::'partial translation';'implied closest functional equivalent';'technological implication'">WINDOW</span>, OBSERVING THE COUSINS' RESEARCH VESSEL
        HER TALE BECOMES MORE DISTINCT AS I APPROACH
    
    kazki
        ... so i said, it is because my larval form was tir! and i told him of the function that entails...
        i even talked a little about that story from the kozazni excavation--you know the one, ah, when i was first starting work there
    
    bozko
        oh, no

    kazki
        and while i was saying these things, my funfriend was attempting to warn me about something, but i kept talking...
        and then when i was done, i checked to see what it was, and it was telling me to stop! 
        he was apparently expressing terror on his face! as though i might drench him in acid at random! 
        ahahaha!!

    sourceless
        BOZKO CHUCKLES AND ROLLS HIS RECEPTORS SLIGHTLY
        HE LOOKS FROM THE WINDOW TO KAZKI, WITNESSING MY APPROACH INCIDENTALLY
        WITH ANOTHER LITTLE RECEPTOR GESTURE, KAZKI TURNS TO FACE ME AS WELL, DELIGHTED
            EXEC::specialCam('kazkibozko');vnp({bg: true, kazki: "show", bozko: "show"})

    bozko
        hello, akizet

    kazki
        hi akizet!!
    
    akizet
        hello my friends
    
    RESPOBJ::d1_kazkibozkoresp
    
story
    sourceless
        I CANNOT CONTAIN MY CURIOSITY
        KAZKI'S STORIES, EVEN IF HYPERBOLIC, ARE ALWAYS ENTERTAINING

    akizet
        what was that story you were telling, kazki?
    
    sourceless
        HER BRANCHED RECEPTORS FAN OUTWARDS EXCITEDLY

    kazki
        ah! i was in the nation of australia recently! 
        for the polygonation spire meeting, you see
        it went well, but my contact was curious, because he had not seen a once-tir before, 
        and so he had a number of questions unrelated to the construction approval
        mostly about my receptors...
        which!! by the way! the construction was approved!
    
    bozko
        through some giggle of velzie, it occurred to her to share the events of her early larval work
    
    sourceless
        THE KOZAZNI EXCAVATION STORY...
        OF COURSE A CLUELESS BRIGHT COUSIN WOULD FEAR FOR THEIR LIFE AFTER HEARING THAT

    kazki
        it was in good nature! he found it funny after i explained away his fears!
    
    akizet
        i say this with a deep respect, kazki,
        with how much you share so readily with the cousins,
        your diplomatic successes always come as a surprise

    RESPOBJ::d1_kazkibozkoresp
    
talk
    akizet
        my friends, what news do you carry?
        for yourselves, of course
        we have the imminent focus to share our works
    
    sourceless
        BOZKO PEERS INTO THE ESTIMATION OF THE <span definition="NOTE::'partial translation';'implied closest functional equivalent';'technological implication'">WINDOW</span>
    
    bozko
        outside of our works,
        i have been observing the creatures of the water nearby
        a few dispatched <span definition="NOTE::'partial translation';'implied closest cultural equivalent'">golems</span> with relays
        here, look at this--see how they form great organized clouds?

    sourceless
        BOZKO REACHES INTO THE WINDOW, DISRUPTING THE DISPLAY, TO PULL A CONNECTIVE CYST FROM ITS INTERNAL DOCK
            EXEC::content.classList.add('bozkoceptor');vnp({fade: true})
        HE AFFIXES IT TO HIS CLOSEST RECEPTOR, AND ADJUSTS THE DISPLAY TO A RECOLLECTION
        THE WINDOW'S COLORS RIPPLE UNTIL THEY FIX UPON A MENTAL PROJECTION
            EXEC::content.classList.add('fishies')
        IT IS AS HE SAYS - A CLOUD OF IMPECCABLY ORIENTED WATER INHABITANTS
        HOW DO THEY DO IT? 

    akizet
        remarkable

    bozko
        and i am not the sole observer of the bright world's creatures among us
    
    sourceless
        BOZKO RETURNS THE CONNECTOR BENEATH THE WINDOW'S SURFACE
            EXEC::content.classList.remove('bozkoceptor')
        THE IMAGE SOON DISSIPATES
            EXEC::content.classList.remove('fishies');vnp({fade: false})
        HE GESTURES TOWARDS KAZKI TEASINGLY AFTER A MOMENT'S SILENCE

    kazki
        bozko!
    
    bozko
        although, she is taking a more live approach

    kazki
        bozko!!

    sourceless
        HER RECEPTORS CURL INTO THEMSELVES, LIKE BALLED FISTS

    kazki
        fine, fine!
            EXEC::vnp({kazki: "focus"})
        it is an experiment i am doing, akizet
        well, hmm, sort of
        on my trip to australia i found this little creature skittering around on a window
        so, i looked closer... and it had eight legs, vibrant stripes, and many large eyes! and it was staring at me!
        it even had armored skin, just like a <span definition="NOTE::'partial translation';'inherited description-generated noun'">cave keeper!</span>
        and--and i thought, 'ah, how cute!' and i wanted to keep it!

    sourceless
        WITH HOW EMOTIONALLY SHE WEIGHTS HER WORDS
        IT IS LIKE SHE EXPECTS ME TO SAY SHE SHOULD PUT IT BACK

    bozko
        so she made a cavity in her head
            EXEC::vnp({kazki: "defocus"})
    
    akizet
        what? are you--?

    kazki
        i am getting to that!!
            EXEC::vnp({kazki: "focus"})
        so... i went to pick it up, but it leaped into my hand!
        like it wanted to be with me! ah, but, by this time, some bright cousins were coming to see what i was doing...
        so i excused myself and went back to my vessel
        and i realized--there is no life support in our vessels, so, if i wanted to keep it alive... i had to think!
        with my head!
    
    akizet
        so you hollowed out your head,
        and are keeping it in an air pocket?

    kazki
        exactly!! do you want to see it???
    
    sourceless
        MY RECEPTORS DROOP SLIGHTLY, AND I CHUCKLE EXASPERATEDLY
        BOZKO FINDS MY REACTION VERY FUNNY
        INDEED, THIS IS BOTH A PROBLEM AND SOLUTION THAT ONLY A ONCE-TIR WOULD COME TO
    
    akizet
        of course i do

    sourceless
        KAZKI DIPS HER HEAD FORWARD, THE FEATURES OF HER FACE MELTING AWAY, AND THE COLOR OF HER SKIN FADING TO TRANSPARENCY
            EXEC::specialCam('kazkihead');content.classList.add('kazkihead')
        IT IS EMPTY, CLEAR AS THE BRIGHT COUSINS' GLASS, CONTAINING ONLY A SPACIOUS SPHERICAL CAVITY
        I TILT MY HEAD FROM SIDE TO SIDE, EVEN ADJUST THE ACCURACY OF MY EYES, BUT DO NOT SEE IT
        AT LEAST, NOT AT FIRST... BUT THEN IT IS THERE, SITTING SUSPENDED ON BARELY VISIBLE STRANDS OF ITS OWN CREATION
    
    sys
        ALERT::'memory of arachnid detected';'render?'

    RESPONSES::sys
        render<+>arthur
            EXEC::content.classList.add('spider')
        omit<+>arthur

arthur
    sourceless
        IT LOOKS AT ME, THEN RAISES ITS FORELEGS AND WAVES THEM BOTH FROM SIDE TO SIDE
        I IMAGINE THIS IS SOME SORT OF THREAT
    
    akizet
        i can see why you chose to keep it
    
    sourceless
        KAZKI REPLACES HER FACIAL FEATURES, PULLING HER HEAD BACK
            EXEC::specialCam('kazkibozko');content.classList.remove('kazkihead')
    
    kazki
        such life in its little eyes!
            EXEC::content.classList.remove('spider');vnp({kazki: "defocus"})

    RESPOBJ::d1_kazkibozkoresp

focus
    akizet
        our focus approaches, my friends
        are you prepared? do you have any topics to bring?
    
    sourceless
        THEY BOTH DIP THEIR RECEPTORS AFFIRMATIVELY

    kazki
        yes!
    
    akizet
        good! report to the signal chamber when you are ready
        i arranged for the timestopper to be used this time, so it will be quick
    
    bozko
        excellent
        we will be there shortly, you go ahead

    RESPOBJ::d1_kazkibozkoresp
`)

env.localization.page['embassy'].dialogues["d1_kazki_research"] = generateDialogueObject(`
start
    akizet
        ready to proceed, kazki?
    
    kazki
        <span definition="NOTE::'common phrase';'original pun untranslateable';'generated alternate pun';'retains level of wit'">absoqoutely!</span>
    
    akizet
        hehe, excellent
    
    RESPONSES::akizet
        we will start soon<+>END
`)

env.localization.page['embassy'].dialogues["d1_bozko_research"] = generateDialogueObject(`
start
    akizet
        ready to proceed, bozko?
    
    bozko
        of course
        i only wish i had more to share given our amenities this θgaze
    
    akizet
        true!
        with the timestopper,
        it often seems like there is never enough
    
    RESPONSES::akizet
        we will start soon<+>END
`)

/* DAY 1 - ATTENDANT/GROUNDSMIND */

env.localization.page['embassy'].dialogues["d1_attendantresp"] = generateDialogueObject(`
RESPOBJ::
    RESPONSES::akizet
        timestopper<+>timestopper
        that is all<+>leave
            FAKEEND::(leave)
`)

env.localization.page['embassy'].dialogues["d1_attendant"] = generateDialogueObject(` 
start
    sourceless
        I APPROACH THE ATTENDANT DRONE
            EXEC::pauseSwapCam(true)
        IT IS FACELESS AT THE MOMENT
        SO IT REGARDS ME WITH A SIMPLE STARE

    RESPONSES::akizet
        speak with groundsmind<+>groundsmind
        nevermind<+>END
            EXEC::pauseSwapCam(false);
    
groundsmind
    akizet
        the groundsmind, please

    attendant
        OF COURSE!

    sourceless
        THE DRONE STRAIGHTENS, AND A CONNECTIVE RIPPLE PASSES THROUGH ITS SKIN
        OUR GROUNDSMIND'S SYMBOL IS FORMED OVER ITS FACEPLATE
            EXEC::content.classList.add('groundsminded')
        
    akizet
        hello vekoa!!
    
    groundsmind
        akizetesche. speak

    RESPOBJ::d1_attendantresp
    
timestopper
    akizet
        i appreciate you affording us the timestopper
        how long was it again that we have it?

    groundsmind
        originally you had it for only a few θgazes... 
        however: as of a few θwinks prior, it is indefinitely in the care of the call initiative
        the schedule has shifted due to materials no longer needing an upcoming simulation
        once another initiative has need of it, it will be transferred

    akizet
        really? we moved quite a bit of cystery to accommodate it,
        and still only the top barely fits in the room...
    
    groundsmind
        is this a request to have it removed post-use?
        this can be arranged
    
    akizet
        hmm... no, no
        the cysts were not vital, and this may be a boon
        it does shorten our meetings and plans by orders of magnitude
        if it becomes a bother, i will reach out again

    RESPOBJ::d1_attendantresp

leave
    akizet
        that is all!
    
    groundsmind
        excellent
        fare well
    
    sourceless
        THE DRONE DISCONNECTS FROM THE GROUNDSMIND AND STANDS STILL ONCE MORE
            EXEC::content.classList.remove('groundsminded')
    
    RESPONSES::akizet
        leave<+>END
            EXEC::pauseSwapCam(false);

END::content.classList.remove('groundsminded');
`)

/* DAY 1 - DISCOVERY */
env.localization.page['embassy'].dialogues["discovery_notyet"] = generateDialogueObject(` 
start
    sourceless
        this is where i will sit...
        once i have the team assembled.
        gakvu, tozik, and cavik are all here
        all but kazki and bozko
        i should tell them it is time for the focus
        they are probably in the recreational area!
    
    RESPONSES::akizet
        to recreation!<+>END
`)

env.localization.page['embassy'].dialogues["discovery"] = generateDialogueObject(` 
start
    sourceless
        the team is assembled around their seats, so i sit
    
    akizet
        everyone!
        let us begin
    
    sourceless
        i dip my head towards tozik, as he has already connected
        with an impulse, he instructs the grand cyst to lower wired cysts before each of us
        what a rare opportunity! i am certain that even gakvu is excited
        i raise the cyst to my right receptor, and its shell softens, becoming as viscous liquid
        it settles over my receptor, and the timestopper connects to me
        my mind is drawn into it, with the others - everyone is connected
            EXEC::content.classList.add('innerfocus')
    
    akizet
        commencing now!
            EXEC::env.embassy.setFocus('akizet')
    
    sourceless
        with a simple instruction, the grand cyst's additional neural processing activates
        its strength and processing speed is such that time... stops
        such a peculiar sensation - to observe in full cognitive capacity a world and body that cannot move
        though the cores of our minds are shelled from one another
        we each carry a new mind that feels as if it was always there - the grand cyst
            EXEC::content.classList.add('showfocus')
        and it thinks with us as one
            EXEC::content.classList.add('cull-stage')
    
    timestopper
        is this not peculiar?
            EXEC::env.embassy.setFocus(false)
        ahaha! how fun! 
        oh but i cannot tell which thought is mine
        how do we stay distinct again?
        silly! the last one was not so long ago
        but i will remind you
        you do it like this
    
    sourceless
        we each understand simply: think outwardly

    akizet
        you see?
            EXEC::env.embassy.setFocus('akizet')
        a reminder of our best practice here...
        it will be simpler to convey things of importance indistinctly
        but for discussion, you should stay distinct
        understood?

    timestopper
        yes! yes! yes stop
        yes oh i think i am yes
        echoing it sorry yes
    
    cavik
        that was me sorry
            EXEC::env.embassy.setFocus('cavik')
        this is only my second time using one of these
    
    timestopper
        it is ok!
    
    kazki
        you are too tense!
            EXEC::env.embassy.setFocus('kazki')
        just let it pass through you!
        that is how i stop echoing
    
    timestopper
        are we good? yes! ok
            EXEC::env.embassy.setFocus(false)
        now onto the matters of the call
    
    sourceless
        a great deal of information is transmitted between us
        long-overdue discussions and planning for expeditions
        in an instant, fast even within the altered time of the grand cyst,
        wordless knowledge is understood, assigned words only in afterthought
    
    timestopper
        Êü€ßÑúŽÞRùãÝ™÷ûÜ›ö±Ü¨õ*ÜRômÜÜóŒÜéóSÝÚ
        óêñXò…ñôð¨ñAðÝòÌï_ô°ï€õîï
        ÿßÅûýÞhúGÞáøþÜzöøÛÆó]ÛäðƒÛ©í¾Ú˜é×Ú9
        ôŸÞó]á‘óUåAô)êô
    
    sys
        ATTENTION::'large amount of unprocessable data';'advancing stream to next coherent data'
            EXEC::flash(true)
    
    sourceless
        ...
            EXEC::env.embassy.setFocus('kazki')
        ...
            EXEC::flash(false)
    
    timestopper
        POLYGONATION SPIRE IN GUAM IS LIKELY EASIEST
        KAZKI AGREES?
    
    kazki
        yes! i will organize a meeting
        they liked the last time we visited because it drew lots of attention!
        so a spire would be lucrative for us both! 

    bozko
        it does not need to be of the highest strength or quality
            EXEC::env.embassy.setFocus('bozko')
        there is no hard data backing my decision
        but... kazki's contacts have suggested the trench multiple times
        and if what they say is true, 
        it is one of the least explored places on this planet
        so there is certainly potential for the origin to be there, never seen 

    timestopper
        makes sense! no argument!
        no other leads yet anyway ahaha
        anything else before we disengage?
        no
        wait yes we have the spike
        see!
    
    sourceless
        in our collective mind's eye, a visualization of the signal is shown
            EXEC::env.embassy.setFocus(false);content.classList.add('signal')
        a strange spike... but not unexpected given the dull contrivance's proximity
    
    timestopper
        that is peculiar
        this frequency looks unnatural
        it is too far from the call's baseline activity
        could it be an error?
        no - this is aggregate data from many listeners all across this planet
        did not help polygonation regrettably
        so what do we do about it?
        do we just mark it down?
    
    tozik
        wait

    sourceless
        identical memorized data from an archival cyst manifests
            EXEC::env.bgm.rate(0.9);content.classList.add('signal2')
        did he bring up the same record by accident?
            EXEC::env.bgm.rate(0.8)
        no... this is different
            EXEC::env.bgm.rate(0.7)
    
    tozik
        i have been searching through approximately twelve θeyes of data
        this has happened once before. see?
        the same type of spike, with the same duration
    
    timestopper
        how many θeyes ago was that? seven? eight?
    
    gakvu
        look
            EXEC::content.classList.add('signal3')
        that is exactly equidistant from the start of the call
    
    tozik
        exactly
        the exact same spike, at exactly fifty percent of the call
    
    timestopper
        how is that possible? could it be a coincidence?
        absolutely not
    
    tozik
        i have seen this before
            EXEC::env.embassy.setFocus('tozik')
        in my early studies, maybe even larval
        these are markers of raw thought - unoptimized, primal
        what corru knows and broadcasts instinctively, 
        and what early corrucystic pioneers used for communication
    
    sourceless
        a strange dread spreads through our shared mind
        why do i feel it too? is it mine? am i scared?
        this does not mean anything
        
    tozik
        in raw thought transmission, the signal spikes at regular intervals
        five equidistant times, once at the beginning
        and there are no recordings of the exact beginning...
        so that means it could be halfway done, if this is true
        
    timestopper
        ...
        but it has been broadcast for how long?
        how could a thought be that large?
        could we even
        ...
            EXEC::content.classList.remove('signal', 'signal2')

    sourceless
        the dread's claw bites into me, paralyzing my thoughts
        is it mine?? no one is commenting upon it - perhaps confused, themselves...
        so then who is scared? it is overwhelming
        i feel like tearing the cyst from my receptor, but i cannot move
        not without first turning off the time constriction
    
    timestopper
        it could be something else
        there are only two data points here
        a compelling theory but that means we must wait a long time
        are we all in agreement that we should probably tell no one about this
        what!
    
    cavik
        wait, why! this is huge!
            EXEC::env.embassy.setFocus('cavik')
        even just the possibility changes everything...
        you know what this means, right?
    
    akizet
        cavik... this is not a theory of fancy
            EXEC::env.embassy.setFocus('akizet')
        it is true that this does change everything...
        but we are still missing data. right?
    
    timestopper
        right yes we need more
        we cannot simply share it
        not while the evidence is incomplete

    akizet
        is anyone in disagreement?
    
    sourceless
        i sense a mixture of frustration and relief
        indeed, this is compelling, but it is simply a theory
        judging by the team's reactions, even sharing it as a possibility would be quite an upset
        without the theoretical first spike being recorded, it is hard to justify
        either way it is not worth interrogating at this time - we need only wait
        i take everyone's silence as confirmation
        
    akizet
        excellent
        adjourning

    timestopper
        bye everyone!
            EXEC::content.classList.remove('cull-stage', 'showfocus')

    sourceless
        the time constriction disengages. i remove the cyst from my receptor
            EXEC::env.bgm.rate(1)
        in real time, we had been sitting only for the length of a larval breath
        but immediately, everyone stands, relieved at their freedom
            EXEC::content.classList.remove('innerfocus')
        i dip my head and receptors towards the team, and return to my quarters
    
    RESPONSES::sys
        end recollection<+>END
            EXEC::change("embassy_d1_complete", true);corruRefresh()

SKIPNOTICE::this will end the memory stream
SKIP::content.classList.remove('cull-stage', 'showfocus');content.classList.remove('innerfocus');change("embassy_d1_complete", true);corruRefresh()
`)
