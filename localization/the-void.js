/*
    cor-RU - a russian localization mod for corru.observer;
    see https://github.com/cor-RU/cor-RU for more info

    > localization/the-void.js
    localization for /local/orbit
    (---so vast and empty!)
*/


env.localization.page['localorbit'] = {dialogues: {},
    definitions: {}, 
    strings: {
        "this thoughtspace is pretty damn big... i'm not seeing much of a reason for it either": "мыслепространство чертовски огромное... причем причин тому я особо не вижу",
        "don't forget you moved akizet's ship to the ocean thoughtspace! kinda wild it can just move like that": "не забывай что корабль акизет сейчас в мыслепространстве с океаном! дико что он может вот так вот просто двигаться",
        "about the void": "о пустоте",
    }, 
    entityDescriptions: {
        'gate::the dull contrivance': cor_ru.entity_menu["gate::the dull contrivance"].desc,
        'our dull vessel': cor_ru.entity_menu["our dull vessel"].desc,
    }
}


// === DIALOGUES === //


// == MOTH == //

env.localization.page['localorbit'].dialogues.mthvoidresp = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        открытие серое?<+>dull
            SHOWIF::[['EXEC::env.localization.page.localorbit.dialogues.mthvoidresp.scannedDull()']]

        неважно<+>CHANGE::++moth
            FAKEEND::(назад)
`)
env.localization.page.localorbit.dialogues.mthvoidresp.scannedDull = ()=>{ // --- i forgot why we have it but shit breaks without it iirc
    try {
        if(flags.detectedEntities["..__THE_VOID__.."].entities["gate::the dull contrivance"].scanned) {
            return true
        } else {
            return false
        }
    } catch(e) {
        return false
    }
}
env.localization.page['localorbit'].dialogues["mth++localorbit"] = generateDialogueObject(`
start
    self
        у меня есть вопрос об этой мыслеформе

    moth
        давай, нападай
    
    RESPOBJ::mthvoidresp

dull
    self
        что ты знаешь об открытии серое?
    
    moth
        да не так уж много, за исключением того что оно всё ещё там
        и что, оказывается, органическая жизнь не выживает проход через него, так что им могут пользоваться только куу
        по крайней мере, так они говорили в нескольких старых интервью
        как по мне - я думаю они просто не хотят гостей в родном мире
        ....
        сорян я тут на логи смотрю
        по-видимому твой мыслекол говорит что это соединительная мыслеформа?
        может с помощью этой штуки мы сможем как следует рассмотреть обескию
        если починить её вообще получится

    RESPOBJ::mthvoidresp
`)


getLocalizationForPage(true) // --- ensuring that Nothing Gets Fucked Up
