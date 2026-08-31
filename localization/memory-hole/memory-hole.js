/*
    cor-RU - a russian localization mod for corru.observer;
    see https://github.com/cor-RU/cor-RU for more info

    > localization/memory-hole.js
    localization for /local/uncosm/where
*/

env.localization.page['localuncosmwhere'] = {dialogues: {},
    definitions: {}, 
    strings: {
        "yeah i got nothing here. seems like you could give it some input, but... no clue what it wants": "м-да, тут я не помощник. похоже этой мыслеформе можно дать какой-то ввод.. вот только что ей надо - непонятно.",
        "memoryhole": cor_ru.entity_menu["memoryhole"].name
    },
    entityDescriptions: {
        "memoryhole": cor_ru.entity_menu["memoryhole"].desc
    }
}


// === DIALOGUES === //
env.localization.page['localuncosmwhere'].dialogues["wrong"] = generateDialogueObject(`
start
    ¥Óñ«J
        хахаха невеерно!!! невеерно неверно неверно неверно!~!!! неверно!!!
        невееерно неверно неверно не попааал!!! ахахахаха 
        ахахаххахах
        покааа!!!!
            EXEC::setTimeout(()=>{endDialogue();moveTo(\`/local/uncosm\`)}, 1000)
            WAIT::2000
            
    RESPONSES::self
        что вообще происходит?<+>END
`)

// === CODES === //
env.uncode.enter = ()=>{
    let value = env.uncode.input.value.toLowerCase().replaceAll(".", "").replaceAll("/", "")
    switch (value) {
        case "pit":
            value = "dangerous";
            break;
        case "рекосм":
            value = "recosm";
            break;
        case "зов":
            value = "call";
            break;
        case "кавик":
            value = "cavik";
            break;
        case "корру":
            value = "corru";
            break;
        case "пёс":
            value = "dog";
            break;
        case "пес":
            value = "dog";
            break;
        case "серое":
            value = "dull";
            break;
        case "effigy":
            value = "effigy";
            break;
        case "fairy":
            value = "fairy";
            break;
        case "цветок*":
            value = "flower";
            break;
        case "humor":
            value = "humor";
            break;
        case "личиночный":
            value = "larval";
            break;
        case "личинка":
            value = "larval";
            break;
        case "паразит":
            value = "parasite";
            break;
        case "паразита":
            value = "parasite";
            break;
        case "шпиль":
            value = "spire";
            break;
        case "прости":
            value = "sorry";
            break;
        case "поверхность":
            value = "surface";
            break;
        case "вейльк":
            value = "veilk";
            break;
        case "вейльков":
            value = "veilk";
            break;
        case "walker":
            value = "walker";
            break;
        case "yuzku":
            value = "yuzku";
            break;
        case "зузукри":
            value = "zuzucri";
            break;
        case "маски*":
            value = "zuzucri-mask";
            break;
        default:
            value = "default";
            break;
    }
    console.log("memoryhole ", value)
        
    if(value.length) {
        env.uncode.input.blur()
        cutscene(true)
        play('destabilize', 0.5)
        ratween(env.bgm, 0.1)
        content.classList.add('memorydive')

        if(!check("hub__funfriend-ah1") && value == "recosm") {
            //fuck you lol
            location.href = `/img/sprites/obesk/larval/larval7.gif`
        }

        fetch(`/local/uncosm/${value}/`).then(resp=>{
            if(resp.status == 404){
               cutscene(false)
               startDialogue('wrong')
            } else {
                setTimeout(()=>{
                cutscene(false)
                moveTo(`/local/uncosm/${value}/`)
                }, 4000)
            }
        })
    }
}

getLocalizationForPage(true) // --- ensuring that Nothing Gets Fucked Up
