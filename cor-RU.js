/*/ если вы очутились здесь и не понимаете, что это такое, скорее всего /*/
/*/ вы нажали на ссылку вместо того, чтобы правильно установить мод.    /*/
/*/ не смотрите в в код дальше, если боитесь спойлеров!!! хихи          /*/
/*/ видео по установке: https://cor-RU.github.io/cor-RU/tutorial.MP4    /*/
/*/ страница мода: https://github.com/cor-RU/cor-RU                     /*/




/*
    cor-RU - a russian localization mod for corru.observer;
    see https://github.com/cor-RU/cor-RU for more info

    > cor-RU.js
    important code!!! and loads the whole mod!!! yay!!!
*/

// this should disable the mod if you happen to use it on episodes after ep0
if (window.location.pathname == '/credits') {
    devcol = `
<style>
@font-face {
    font-family: 'spacemono';
    src: url('https://raw.githubusercontent.com/cor-ru/cor-RU/recode/fonts/modfont.woff2') format('woff2'),
        url('https://raw.githubusercontent.com/cor-ru/cor-RU/recode/fonts/modfont.woff') format('woff');
    font-weight: normal; 
    font-style: normal;
    font-display: swap;
}
</style>
<div class="creditblock developers">
    <h2 definition="оригинальная команда и старые друзья">Corru Crew</h2>
    <ul>
        <li><a href="https://corru.works" target="_blank"><img src="/img/da_fiend.png" /> corru.works:</a> <span definition="программист/главный писатель/создатель музыки/визуальных ресурсов... я типа всё делаю лол" style="border-bottom: 1px dotted;display: inline-block;padding-bottom 2px;">Архитектор</span></li>
        <li><a href="https://pocl.vip" target="_blank"><img src="/img/da_pocl.png" /> pocl.v:</a> Дизайн персонажей и главный художник подписей</li>
        <li><a href="https://www.jacktenbusch.com" target="_blank"><img src="/img/da_tonk.png" /> JakkRabbitArt:</a> Творчество и поддержка иконок</li>
        <li><a href="https://uh.fyi" target="_blank"><img src="/img/da_sha.png" /> Shaman:</a> Писательская поддержка и тестирование</li>
        <li><a href="https://uh.fyi/redrealm" target="_blank"><img src="/img/da_fool.png" /> red:</a> Писательская поддержка и тестирование</li>
        <li><span definition="у загадочного шейдер-мена нет сайта сорян"><img src="/img/da_kaz.png" /> Kazne:</span> Анимированные текстуры и шейдеры</li>
    </ul>
    <h2 definition="значимые коллабораторы по прямой разработке/ресурсам">Corruborators</h2>
    <ul>
        <li><a href="https://soundcloud.com/saiiko2" target="_blank"><img src="/img/da_saiiko.png" /> saiiko2</a>: Музыкальная поддержка <label>E3A2, E4</label></li>
        <li><a href="https://sola.nekoweb.org/index.html" target="_blank"><img src="/img/da_sola.png" /> Sola Sunset</a>: Музыкальная поддержка <label>E3A2, E4</label>, поддержка кода и тестирование <label>E3A2, E4</label></li>
        <li><a href="https://rainbowcutieo3o.neocities.org/" target="_blank"><img src="/img/da_bo.png" /> RainbowCutieo3o</a>: Творчество и поддержка дизайна персонажей <label>E4</label>, тестирование <label>E3A2, E4</label></li>
    </ul>
</div>
<div class="creditblock contributors">
    <h2 definition="единичные работы и упоминания других крутых людей">Дополнительные Вклады</h2>
    <ul>
        <li><label class="art">(ТВОРЧЕСТВО)</label><label>E3A1</label> <a href="https://www.oliverbuck.land/" target="_blank">Oliver Buckland</a>: Создание темы "Jokzi Ozo"</li>
        <li><label class="art">(ТВОРЧЕСТВО)</label><label>E3A2</label> <a href="https://redscientist.com/artist/deltanoyz" target="_blank">DELTANOYZ</a> + <a href="https://redscientist.com/artist/noisyrejects" target="_blank">NoisyRejects</a>: Создание темы финала для ::/ОБРАМЛЕНИЕ/</li>
        <li><label class="eyes">(ГЛАЗА)</label><label>E3A2</label> <span class="denselist">ChickenMcNuggets, KrookedReality, RainbowCutieo3o, apia, Novae, Sola, cyberwaves, spacedotexe, Jadrek, Grimm, Chemelia, Joael, Rayka, NOVA〄AURASTY, TheElement, cyclar2, Victoria, Octo</span></li>
        <li><label class="testing">(ТЕСТИРОВАНИЕ)</label><label>E3A2, E4</label> <span class="denselist">Flanburgr, Ryanatorx, Novaenia, Octo</span> + <label>E4A1</label> <span class="denselist">rosy, spdx, anki</span></li>
        <li><label class="codehelp">(КОД)</label><label>ВСЕ</label> <a href="https://marbelynrye.000.pe/" target="_blank">marbelynrye</a>: Огромное количество тестирования багов и предложений по коду</li>
    </ul>
</div>`
    fund = `
<h2 definition="дражайшие финансовые спонсоры, без которых нас бы здесь не было">Fundfriends</h2>
<em>все, кто когда-либо поддерживал проект на <a href="https://ko-fi.com/corruworks" target="_blank">ko-fi</a> на уровне fundfriend!!</em>
    `
    document.querySelector(".developers").remove()
    document.querySelector(".contributors").remove()
    document.querySelector("main").insertAdjacentHTML("afterbegin", devcol)
    document.querySelector(".fundfriends :first-child").remove()
    document.querySelector(".fundfriends :first-child").remove()
    document.querySelector(".fundfriends").insertAdjacentHTML("afterbegin", fund)
    throw new Error("hi dont mind me cor-RU is not supposed to load properly in credits")
}
else if ((page.path == '/' && !check('TEMP!!sat') && check('ep0_epilogue') && !check('ep1_showmaterials')) || env.ep1 == true) {
    chatter({actor: 'actual_site_error', text: "hi! cor-RU is availiable only for ep0<br>приветик! cor-RU доступен только для ep0", readout: true})
    throw new Error("hi! сor-RU is availiable only for ep0")
}

env.localization = {
   dialogues: {},
   definitions: {}, 
   strings: {}, 
   entityDescriptions: {},
   page: {}
}

cor_ru = {
    css: `
@font-face {
    font-family: 'spacemono';
    src: url('https://raw.githubusercontent.com/cor-ru/cor-RU/main/fonts/modfont.woff2') format('woff2'),
        url('https://raw.githubusercontent.com/cor-ru/cor-RU/main/fonts/modfont.woff') format('woff');
    font-weight: normal; 
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'barcode';
    src: url('https://raw.githubusercontent.com/cor-ru/cor-RU/main/fonts/barc.woff2') format('woff2'),
        url('https://raw.githubusercontent.com/cor-ru/cor-RU/main/fonts/barc.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'barcodetext';
    src: url('https://raw.githubusercontent.com/cor-ru/cor-RU/main/fonts/barcode.woff2') format('woff2'),
        url('https://raw.githubusercontent.com/cor-ru/cor-RU/main/fonts/barcode.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'beech';
    src: url('https://raw.githubusercontent.com/cor-ru/cor-RU/main/fonts/beechy.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}


body[state="corru-loaded"][menu="none"]:not(.in-dialogue)::before, body.loading::after, body.corru-refreshing::after {
    content: "ПРЕДУПРЕЖДЕНИЕ::'Использование мыслекола может вызвать приступы у людей с ФОТОСЕНСИТИВНОЙ ЭПИЛЕПСИЕЙ, в том числе из-за вспышек света.';\\A'Удостоверьтесь, что АППАРАТНОЕ УСКОРЕНИЕ включено во избежание временной несоосновности.';\\A'Сторонние РАСШИРЕНИЯ могут мешать производительности.';\\A'Продолжение по усмотрению пользователя.'";
    font-family: spacemono;
    font-size: 0.75em;
    max-width: 600px;
    position: fixed;
    z-index: 1000;
    display: block;
    top: 10vh;
    background: var(--dark-color);
    padding: 0.25em;
    text-align: center;
    line-height: 1.25em;
    white-space: pre-wrap;
    pointer-events: none;
}

body.loading::after, body.corru-refreshing::after {
    content: "ВНИМАНИЕ::'очистка буфера мыслекола';'прогресс не будет потерян'";
    padding: 1em;
    top: 50%;
    transform: translateY(-100%);
    opacity: 1;
    display: block;
}

body.loading::after {
    content: "УВЕДОМЛЕНИЕ::'загрузка ресурсов';'пожалуйста, подождите'";
}

#meta-menu .moth-trigger:after,
#meta-menu .mask-trigger:after { 
    content: "МОЛЬ"  !important; 
    left: 0;
    right: 0;
    text-align: center;
    transition-delay: 0s;
}
#meta-menu .mask-trigger:after { content: "МАСК"  !important; }
#mui-links #meta-obs:after { content: "СУЩ"  !important; }
#mui-links #meta-sys:after { content: "СИС" !important; }
#mui-links #meta-hub:after { content: "НАВ" !important; }

#dialogue-box.dialogue-click-proceed::after {
    content: "VVV КЛИК/ENTER ДЛЯ ПРОДОЛЖЕНИЯ VVV";
    display: block;
    width: 100%;
    text-align: center;
    animation: click-to-proceed 1s linear infinite;
} 

#dialogue-box.can-skip::before {
    content: "ЛИНЕЙНЫЙ СЕГМЕНТ ПОТОКА - ПРОПУСК С ESC";
    display: block;
    text-align: center;
    padding: 0.5em;
    color: var(--neutral-color);
    font-size: 0.75rem;
    opacity: 0.5;
    position: sticky;
    top: 0;
    z-index: 2;
    background: var(--dark-color);
}

#dialogue-skip::before {
    content: "ПОДТВЕРЖДЕНИЕ::'пропуск сегмента потока'";
}

#skip-vfx::before {
    content: "ВЫПОЛНЯЕТСЯ::'продвижение сегмента'";
}

body:not(.mui-active) .target::after, body:not(.mui-active) #realgrid .target::before {
    content: "ПРАВАЯ КНОПКА МЫШИ";
}

.target.always-targeted[entaltname]::after,
.target.targeted[entaltname]::after,
#realgrid .target.targeted[entaltname]::before,
.always-targeted .target[entaltname]::after,
.always-targeted .target[entaltname]::before {
    content: attr(entaltname) !important;
}

@media screen and (max-width: 799px), (max-height: 599px) {
	html:not(.mobile):after, html:not(.mobile):before {
		position: fixed;
		z-index: 1001231231231231230;
		top: 0;
		left: 0;
		height: 100%;
	}
	
	html:not(.mobile):after {
		content: "ОШИБКА::\\A'текущее устройство визуализации непригодно';\\a'требуется нейронный вывод не менее 800x600'";
		box-sizing: border-box;
		white-space: pre-wrap;
		width: 100vw;
		height: 100vh;
		max-width: 100%;
		display: flex;
		margin: auto;
		justify-content: center;
		align-items: center;
		font-family: 'barcodetext', sans-serif;
		font-size: 2rem;	
        line-height: 1.5em;
		letter-spacing: 2.5px;
		padding: 10px;
		color: var(--bright-color);
		text-align: center;
	}
	
	html:not(.mobile):before {
		content: "";
		position: fixed;
		background-color: var(--dark-color);
		width: 100%;
	}
}

#mindspike-scanner span.loose-thought::after {
    content: "..__НЕПОЛНОЦЕННАЯ_МЫСЛЕФОРМА__..";
    display: block;
    font-family: spacemono;
    letter-spacing: 0;
    font-size: 0.63rem;
    margin-top: -0.5em;
}

body[quality="regular"] .quality::after { content: "Качество: ОБЫЧНОЕ" }
body[quality="low"] .quality::after { content: "Качество: НИЗКОЕ" }

.rulink {
    color: #b2ffff;
}
.rulink:hover {
    text-decoration-line: underline;
    color: #ffffff;
}
`,

    // i like colors

    fancy: {
        general: 'color:rgb(229, 142, 22)',
        observed: 'color:rgb(229, 194, 22)',
        setobserver: 'color:rgb(227, 227, 0)'
    },

    // funky functions that help with translation

    processSpecificTranslation: function (selector, attribute = false) { // --- this function is a mess yeah but im not fixing it cause it works
        if (selector == "mindpike") {
            document.querySelectorAll("#mindspike-examine").forEach(el=>{for (const childNode of el.childNodes) {childNode.textContent = "ИЗУЧ"}})
            document.querySelectorAll("#mindspike-act").forEach(el=>{for (const childNode of el.childNodes) {childNode.textContent = "ДЕЙСТ"}})
        } // i hate ACT and EXM strings bleeding into shit
        else if (attribute == false) {
            selector.forEach(el=>{
                for (const childNode of el.childNodes) {
                    if (childNode.nodeType === Node.TEXT_NODE) {
                        if (childNode.textContent != processStringTranslation(childNode.textContent)) childNode.textContent = processStringTranslation(childNode.textContent)
                    }
                }
            })
        }
        else {
            selector.forEach(el=>{
                if (el.getAttribute(attribute) != null) {
                    if (el.getAttribute(attribute) != processStringTranslation(el.getAttribute(attribute))) el.setAttribute(attribute, processStringTranslation(el.getAttribute(attribute)))
                }
            })
        }
        return
    },
    processEntityNamesSafeguard: function () { // --- bc i noticed sometimes they just wont get translated correctly. wack
        document.querySelectorAll("#content .target").forEach(el=>{
            let ent = el.getAttribute("entity")
            if(ent) { el.setAttribute("entaltname", processStringTranslation(ent))}
        })
    },
    processStatic: function (force) {
        cor_ru.processSpecificTranslation(document.querySelectorAll('title'));
        cor_ru.processSpecificTranslation(document.querySelectorAll(".enter"), 'page');
        if (force) processTranslation(document.querySelector(`#static`), true);
        else processTranslation(document.querySelector(`#static`));
    },
    processWarning: function (force) {
        if (force) {
            processTranslation(document.querySelector(`.cryptowarn`), true);
            processTranslation(document.querySelector(`#mod-warning`), true);
            processTranslation(document.querySelector(`#gpu-warning`), true);
            processTranslation(document.querySelector(`#wide-warning`), true);
            processTranslation(document.querySelector(`#dialogue-skip`), true);
        } else {
            processTranslation(document.querySelector(`.cryptowarn`));
            processTranslation(document.querySelector(`#mod-warning`));
            processTranslation(document.querySelector(`#gpu-warning`));
            processTranslation(document.querySelector(`#wide-warning`));
            processTranslation(document.querySelector(`#dialogue-skip`));
        }
    },
    processMenu: function () { // cannot force this one because that would defeat the purpose of it
        env.menu['system-menu'].querySelectorAll(".fundfriend").forEach(el=>{el.classList.add('tskip')})  // --- we dont want to translate fundfriends (even tho it would be funny)
        cor_ru.processSpecificTranslation(env.menu['system-menu'].querySelectorAll('#savetext'), 'placeholder');
        processTranslation(env.menu['system-menu'])

        processTranslation(env.menu['entity-menu'])

        processTranslation(document.querySelector("#meta-menu"));
        processTranslation(document.querySelector(`#advance-notice`));
        
        cor_ru.processSpecificTranslation(document.querySelectorAll('.ci-masks'), 'definition');
        cor_ru.processSpecificTranslation(document.querySelectorAll('.ozo-mask'), 'definition');
    },
    processReply: function () {
        cor_ru.processSpecificTranslation(document.querySelectorAll('.reply'), 'name');
        cor_ru.processSpecificTranslation(document.querySelectorAll('.reply'), 'definition');
        cor_ru.processSpecificTranslation(document.querySelectorAll('.reply'), 'endtext');
    },
    processReadout: function () {
        processTranslation(document.querySelector("#minireadout"))

        dothething = function (selector) {
            if (selector == null) return;
            messages = selector.querySelectorAll(".message")
            length = messages.length - 1

            messages.forEach(el=>{
                if (length > 0) {
                    el.classList.add('tskip')
                    el.querySelectorAll(" *").forEach(el=>{el.classList.add('tskip')})
                } // dont want it touching old readouts
                if (length == 1) {
                if (el.lastElementChild.textContent == "NOTE::'restored partial recent log'") processTranslation(el, true)
                } // touching the restored partial log note is fine tho
                length--})
            processTranslation(document.querySelector("#readout"))
        }

        dothething(document.querySelector("#readout"))
        dothething(env.menu['readout'])
        dothething(env.menuStorage?.elements['readout'])
    },

    // obserbor. the itself of them gets defined later

    observer: {
        common: {
            func: (consolething)=>{
                processTranslation();
                processTranslation(document.querySelector(`#mindspike-scanner`));
                processTranslation(document.querySelector(`#advance-notice`));
                cor_ru.processEntityNamesSafeguard();

                if (document.querySelector("#combat")) {
                    processTranslation(document.querySelector(`#combat`), true) // force because things change in combat quite a lot so it does need to ignore the tdone
                    cor_ru.processSpecificTranslation(document.querySelectorAll(".floater"), "amt")
                }

                if (consolething != undefined) console.log(consolething[0], consolething[1]);
            },
            observe: ()=>{
                cor_ru.observer.common.itself.observe(document.querySelector("#mindspike-scanner"), { childList: true, subtree: true });
                cor_ru.observer.common.itself.observe(document.querySelector("#content"), { childList: true, subtree: true });

                console.log("%ccommon observer is set up! - @cor-RU", cor_ru.fancy.setobserver)
            }
        },
        bodychildren: {
            func: (consolething)=>{
                cor_ru.processWarning();
                
                if (document.querySelectorAll('#entity-menu .ent') != null) {
                    document.querySelectorAll('#entity-menu .ent').forEach(e=>{
                        if(e.getAttribute('entname')) {
                            e.addEventListener('click', ()=>{
                                let entity = flags.detectedEntities[e.getAttribute('pagename')]['entities'][e.getAttribute('entname')]
                                let container = document.querySelector('#entcontent')
                                container.innerHTML = ""


                                let replay = getReadoutMsg({message: entity.text.replace(/\n/g, "<br>"), type: `examine ${entity.type}`, name: entity.displayName || entity.name, image: entity.image})

                                try {replay = getReadoutMsg({message: cor_ru.entity_menu[entity.name]['desc'], type: `examine ${entity.type}`, name: cor_ru.entity_menu[entity.name]['name'], image: entity.image})}
                                catch (error) {
                                    console.warn("could not localize " + entity.name + " - @cor-RU")
                                    console.error(error)
                                }

                                container.insertAdjacentHTML('beforeend', replay)
                                setTimeout(()=>container.querySelector('.message').classList.add('active'), 5)
                            })
                        }
                    })
                    processTranslation(document.querySelector("#entity-menu"))
                }

                if (consolething != undefined) console.log(consolething[0], consolething[1]);
            },
            observe: ()=>{
                cor_ru.observer.bodychildren.itself.observe(body, {subtree: false, childList: true});

                console.log("%cbodychildren observer is set up! - @cor-RU", cor_ru.fancy.setobserver)
            }
        },
        gad: {
            func: (consolething)=>{
                cor_ru.processSpecificTranslation(env.menu["system-menu"].querySelectorAll(".mindsci-status"), "definition");

                if (consolething != undefined) console.log(consolething[0], consolething[1]);
            },
            observe: ()=>{
                cor_ru.observer.gad.itself.observe(env.menu["system-menu"].querySelector(".mindsci-status"), { childList: true, subtree: true, attributes: true });

                console.log("%cgad observer is set up! - @cor-RU", cor_ru.fancy.setobserver)
            }
        },
        dialogue: {
            func: (consolething)=>{
                cor_ru.processReply();

                if (consolething != undefined) console.log(consolething[0], consolething[1]);
            },
            observe: ()=>{
                cor_ru.observer.dialogue.itself.observe(document.querySelector("#dialogue-box"), { childList: true });

                console.log("%cdialogue observer is set up! - @cor-RU", cor_ru.fancy.setobserver)
            }
        },
        masks: {
            func: (consolething)=>{
                processTranslation(document.querySelector(`.ozo-mask-grid`))
                cor_ru.processSpecificTranslation(document.querySelectorAll('.ci-masks'), 'definition');
                cor_ru.processSpecificTranslation(document.querySelectorAll('.ozo-mask'), 'definition');

                if (consolething != undefined) console.log(consolething[0], consolething[1]);
            },
            observe: ()=>{
                cor_ru.observer.masks.itself.observe(document.querySelector(".ozo-mask-grid"), { childList: true });

                console.log("%cmasks observer is set up! - @cor-RU", cor_ru.fancy.setobserver)
            }
        },
        page: {
            func: (consolething)=>{
                new Promise((resolve) => {
                    if (consolething) cor_ru.updateResources()
                    resolve(getLocalizationForPage(true))
                })
                .then(()=>{
                    cor_ru.devved()
                            
                    processTranslation();

                    cor_ru.processStatic(true);
                    cor_ru.processMenu();
                    cor_ru.processWarning();

                    processTranslation(document.querySelector(`#definition-box`));
                    processTranslation(document.querySelector(`#mindspike-scanner`));
                    processTranslation(document.querySelector(`.ozo-mask-grid`))

                    cor_ru.processSpecificTranslation("mindpike");
                    cor_ru.processSpecificTranslation(document.querySelectorAll(".mindsci-status"), "definition");
                    cor_ru.processEntityNamesSafeguard();

                    cor_ru.observer.common.observe();
                    cor_ru.observer.bodychildren.observe();
                    cor_ru.observer.gad.observe();
                    cor_ru.observer.dialogue.observe();
                    cor_ru.observer.masks.observe();

                    if (consolething) console.log(consolething[0], consolething[1])
                })
            },
            observe: ()=>{
                cor_ru.observer.page.itself.observe(body, {attributes: true, attributeFilter: ['page']});

                console.log("%cpage observer is set up! - @cor-RU", cor_ru.fancy.setobserver)
            }
        },
    },

    // this is mildly annoying

    embassyCoherent: function () {
        if (env.localization.page['localocean']) env.localization.page['localocean'].entityDescriptions['the embassy'] = `::ПРОСТРАНСТВЕННАЯ МЫСЛЕФОРМА
::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>'выступление';'велзи гогочет от восторга'</span>`
        cor_ru.entity_menu['the embassy']['desc'] = `::ПРОСТРАНСТВЕННАЯ МЫСЛЕФОРМА<br>
::УНАСЛЕДОВАННЫЙ КОНТЕКСТ::<span style='color: var(--obesk-color)'>"'выступление';'${processDefinitionsInString("велзи")} гогочет от восторга"')}</span>`},

    // tehehe we are devs now

    devElement: `<div class="devs ulbox tdone cor-ru">
    <ul class="tdone">
        <h4 class="tdone">НЕОФИЦИАЛЬНАЯ КОМАНДА ПЕРЕВОДА</h4>
        <li class="tdone"><span class="tdone" definition="@dutokrisa в discord!" class="tdone">ООО "РОСРАЗУМ"</span></li>
        <li class="tdone"><span class="tdone" definition="таинственный человек о котором вы не узнаете">НАО "Млечный Путь"</span></li>
        <li class="tdone"><span class="tdone" definition="@bra1nslug_ в discord, @bruhslug в telegram!" class="tdone">Фонд "Моллюск"</span></li>
    </ul>
</div>`,

    devved: function () {
        if (env.menu["system-menu"].querySelector(".devs.cor-ru") == null) env.menu["system-menu"].querySelector(".devs").insertAdjacentHTML('afterend', cor_ru.devElement)
    },

    // loading and updating stuff as we go

    list: {
        everything: "https://darkthunderer.github.io/cor-RU/localization/everystuff.js",
        page: {
            fbx:                "https://darkthunderer.github.io/cor-RU/localization/basement.js",

            hello:              "https://darkthunderer.github.io/cor-RU/localization/auth-layer.js",
            hub:                "https://darkthunderer.github.io/cor-RU/localization/hub.js",

            localcity:          "https://darkthunderer.github.io/cor-RU/localization/their-city.js",
            citystreet:         "https://darkthunderer.github.io/cor-RU/localization/city-surface.js",

            localorbit:         "https://darkthunderer.github.io/cor-RU/localization/the-void.js",
            dullvessel:         "https://darkthunderer.github.io/cor-RU/localization/our-dull-vessel.js",

            localocean:         "https://darkthunderer.github.io/cor-RU/localization/their-waters.js",
            localship:          "https://darkthunderer.github.io/cor-RU/localization/their-vessel.js",
            interview1:         "https://darkthunderer.github.io/cor-RU/localization/the-funny-little-room.js",

            localdepths:        "https://darkthunderer.github.io/cor-RU/localization/the-depths.js",
        },
        entityMenu: "https://darkthunderer.github.io/cor-RU/localization/entity-menu.js",
        load:       "https://darkthunderer.github.io/cor-RU/load.js",
    },

    updateResources: function (fresh = false) {
        let listArray = [];

        if (fresh == true) {
            listArray.push(cor_ru.list.everything);
            listArray.push(cor_ru.list.entityMenu);
            if (Object.hasOwn(cor_ru.list.page, page.dialoguePrefix)) listArray.push(cor_ru.list.page[page.dialoguePrefix])
                else if (page.dialoguePrefix != "notfound") console.warn("the page with dialoguePrefix " + page.dialoguePrefix + " does not have a localization! this might be a bug, but might also be intentional or plain expected if you are using other mods - @cor-RU");
            listArray.push(cor_ru.list.load);
        }
        else {
            if (Object.hasOwn(cor_ru.list.page, page.dialoguePrefix)) {if (document.querySelectorAll(`script[src="${cor_ru.list.page[page.dialoguePrefix]}?v=${page.cacheval}"]`).length == 0) {listArray.push(cor_ru.list.page[page.dialoguePrefix])}}
                else console.warn("the page with dialoguePrefix " + page.dialoguePrefix + " does not have a localization! this might be a bug, but might also be intentional or plain expected if you are using other mods - @cor-RU")
        }
        if (listArray.length != 0) {console.log("%cupdating following resources! - @cor-RU", cor_ru.fancy.general); console.log(listArray); return addResources(listArray)}
        else console.log("%cno updates for resources needed! - @cor-RU", cor_ru.fancy.general)
    },
}

// yay! opbsbernr time

cor_ru.observer.common.itself = new MutationObserver(()=>{cor_ru.observer.common.func(["%ccommon observed! - @cor-RU", cor_ru.fancy.observed])})
cor_ru.observer.bodychildren.itself = new MutationObserver(()=>{cor_ru.observer.bodychildren.func(["%cbodychildren observed! - @cor-RU", cor_ru.fancy.observed])})
cor_ru.observer.gad.itself = new MutationObserver(()=>{cor_ru.observer.gad.func(["%cgad observed! - @cor-RU", cor_ru.fancy.observed])})
cor_ru.observer.dialogue.itself = new MutationObserver(()=>{cor_ru.observer.dialogue.func(["%cdialogue observed! - @cor-RU", cor_ru.fancy.observed])})
cor_ru.observer.masks.itself = new MutationObserver(()=>{cor_ru.observer.masks.func(["%cmasks observed! - @cor-RU", cor_ru.fancy.observed])})
cor_ru.observer.page.itself = new MutationObserver(()=>{cor_ru.observer.page.func(["%cpage observed! - @cor-RU", cor_ru.fancy.observed])})

// advance log thingy to warn guys that shit aint done past ep2
cor_ru['advance'] = function () {
    MUI('off'); flash(true); cutscene(true); exitMenu();
    if(env.bgm) env.bgm.fade(env.bgm.volume(), 0, 1000)
    corruStatic.play()
    corruStatic.fade(0, getModifiedVolume('music', 1), 1000)
                
    setTimeout(()=>{
        sessionStorage.clear()
        location.replace('/')
    }, 1000)
}
cor_ru['advancewarnclick'] = function () {
    document.body.insertAdjacentHTML('beforeend', `
        <div id="ru-warning" class="popup-warning">
            <div class="sysblock">
                <div class="sysbox ru">
                    <h3>!!__ПРЕДУПРЕЖДЕНИЕ__!!</h3>
                    <p class="sysinfo">Приветик! Вы достигли конца <em>полноценно переведённого контента в cor-RU!</em></p>
                    <p class="sysinfo">В следующем эпизоде cor-RU отключится и игра будет состоять целиком из английского текста.</p>
                    <p class="sysinfo">Если есть вопросы, просьбы, предложения или надо зарепортить баг, обращайтесь к @dutokrisa, @bra1nslug_ в дискорде или @bruhslug в телеграме. Также доступны: <a target="_blank" class="rulink" href="https://forms.gle/HHGhd4zU3VmJQgPCA">анонимная гугл форма</a> и <a target="_blank" class="rulink" href="https://discord.gg/QtqqCh8myn">дискорд сервер</a>.</p>
                    <p class="sysinfo">Спасибо за использование :]</p>
                    <div class="buttons">
                        <span id="gpu-done" class="button" onclick="cor_ru.advance();document.querySelector('#ru-warning').remove()">продвинуть лог</span>
                        <span id="gpu-hide" class="button" onclick="document.querySelector('#ru-warning').remove()">пока не продвигать</span>
                    </div>
                </div>
            </div>
        </div>
    `)
}
env.entities['advance log'] = {
    hide: true,
    name: 'advance log',
    type: "system-component",
    image: "/img/textures/target.png",
    text: `::SYSTEM COMPONENT
    ::ALERT::<span style="color:var(--bright-color)">'current mindspike log procession concluded';'static environment sustained'</span>
    ::NOTE::'log state will advance on next visit';'utilize ACT:advance to immediately proceed to next state'`,
    actions: [
        {
            name: "advance",
            exec: ()=>{cor_ru.advancewarnclick()}
        }
    ]  
}

console.log("%c(en) contact @dutokrisa, @bra1nslug_ on discord or @bruhslug on telegram if you have any questions, requests, suggestions or bugs to report. also availiable, albeit not recommended for non-russian speakers: anonymous google form (https://forms.gle/HHGhd4zU3VmJQgPCA), discord server (https://discord.gg/QtqqCh8myn) - @cor-RU", cor_ru.fancy.general)
console.log("%c(ru) свяжитесь с @dutokrisa, @bra1nslug_ в дискорде или @bruhslug в телеграме, если есть вопросы, просьбы, предложения или надо зарепортить баг. также доступны: анонимная гугл форма (https://forms.gle/HHGhd4zU3VmJQgPCA), дискорд сервер (https://discord.gg/QtqqCh8myn) - @cor-RU", cor_ru.fancy.general)

if (!document.querySelector("#cor-rucss")) {
    document.head.appendChild(
        document.createElement(
            'style'
        ).appendChild(
            document.createTextNode(
                cor_ru.css
            )
        ).parentElement
    ).setAttribute(
            "id", "cor-rucss"
        )
}

page.formedDefinitionStrings = undefined // evil!!!!!!!!!!!!!!!!!!!!!!!


cor_ru.updateResources(true)
