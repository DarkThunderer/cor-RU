/*
    cor-RU - a russian localization mod for corru.observer;
    see https://github.com/cor-RU/cor-RU for more info

    > localization/recosm.js
    localization for /local/uncosm/recosm
*/


env.localization.page['recosm'] = {dialogues: {},
    definitions: {}, 
    strings: {
        "this really is a 'pocket of sanity', huh? despite all the individual parts being incoherent, the readout isn't total nonsense...": 'вот значит как выглядит "островок ясности"? несмотря на то что все элементы бессвязны, данные не превращаются в кашу',
        "so you're going to let it live? that's nice of you... just hope it doesn't come back to bite us": "оставишь в живых? мило конечно, да вот как бы это не обернулось боком",
        "memory hole": cor_ru.entity_menu["memory hole"].name
    },
    entityDescriptions: {
        "no no no no": cor_ru.entity_menu["no no no no"].desc,
        "memory hole": cor_ru.entity_menu["memory hole"].desc
    }
}


// === DIALOGUES === //

getLocalizationForPage(true) // --- ensuring that Nothing Gets Fucked Up
