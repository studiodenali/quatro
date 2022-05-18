window.addEventListener('load', function () {

    var cookieconsent = initCookieConsent();

    // quatro logo
    // height: 30px / 1.875em
    var logo = '<svg width="8.6375em" height="1.875em" viewBox="0 0 700 152" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M271.739,126.015l-16.873,-16.457c5.443,-2.721 7.947,-4.681 10.777,-8.6c4.791,-6.423 7.294,-14.914 7.294,-24.821c0,-11.865 -3.592,-22.207 -9.907,-28.63c-6.096,-6.205 -16.111,-9.907 -26.779,-9.907c-22.316,-0 -36.251,14.48 -36.251,37.775c-0,11.758 3.483,22.208 9.362,28.304c5.77,6.097 16.765,10.252 26.78,10.252c0.436,-0 1.414,-0 2.503,-0.109l11.43,12.193l21.664,0Zm-35.271,-74.154c4.573,0 9.036,2.396 11.866,6.532c3.049,4.354 4.463,10.016 4.463,18.18c0,14.043 -6.313,22.971 -16.219,22.971c-4.899,-0 -9.581,-2.615 -12.302,-6.751c-2.831,-4.354 -4.137,-9.579 -4.137,-17.091c-0,-8.056 1.523,-13.826 4.789,-17.962c2.832,-3.593 7.295,-5.879 11.54,-5.879Zm61.615,-12.519l-0,42.892c-0,10.342 1.851,16.547 6.532,21.772c5.552,6.205 14.697,9.706 25.256,9.706c8.819,0 16.33,-2.521 22.1,-7.421c5.986,-5.223 8.709,-11.974 8.709,-21.88l-0,-45.069l-19.596,0l-0,43.001c-0,6.966 -0.217,8.599 -1.414,11.103c-1.852,3.702 -5.662,5.988 -10.125,5.988c-4.137,0 -7.621,-1.851 -9.689,-5.117c-1.633,-2.504 -2.177,-5.66 -2.177,-12.083l0,-42.892l-19.596,0Zm159.592,72.611l-27.869,-72.611l-23.188,0l-27.651,72.611l19.487,0l5.878,-15.35l26.998,-0l5.552,15.35l20.793,0Zm-30.918,-28.739l-18.071,-0l8.165,-24.603c0.544,-1.633 0.98,-3.484 1.198,-5.007c0.326,1.959 0.435,2.611 1.198,5.116l7.51,24.494Zm78.817,28.739l-0,-57.696l17.744,-0l0,-14.479l-55.193,0l-0,14.479l17.854,-0l-0,57.696l19.595,0Zm60.417,0l-0,-27.978l3.157,-0c7.185,-0 10.015,2.178 12.41,9.688l5.879,18.29l20.356,0l-7.293,-20.031c-4.246,-12.084 -5.77,-14.151 -11.103,-15.567c9.47,-1.959 14.587,-8.164 14.587,-17.635c0,-6.968 -2.939,-12.519 -8.274,-15.785c-4.246,-2.505 -9.906,-3.593 -19.377,-3.593l-29.937,0l-0,72.611l19.595,0Zm-0.544,-41.911l-0,-16.765l6.532,-0c8.382,-0 12.41,2.83 12.41,8.599c-0,5.553 -3.593,8.166 -11.43,8.166l-7.512,-0Zm98.084,-32.442c-10.668,-0 -20.576,3.81 -26.889,10.234c-6.096,6.313 -9.471,16.111 -9.471,27.541c-0,11.758 3.484,21.99 9.58,28.304c6.097,6.097 16.438,10.033 26.78,10.033c11.539,0 22.534,-4.698 28.74,-12.21c4.899,-5.987 7.729,-15.24 7.729,-25.365c-0,-11.321 -2.83,-20.574 -8.165,-26.889c-6.315,-7.402 -16.547,-11.648 -28.304,-11.648Zm0.109,14.261c10.015,0 16.22,9.253 16.22,24.276c-0,14.262 -6.205,23.297 -16.112,23.297c-10.124,0 -16.438,-9.145 -16.438,-23.732c0,-14.588 6.423,-23.841 16.33,-23.841" style="fill:#264796;" /><path d="M58.571,34.256c1.178,0 2.344,0.04 3.505,0.109c14.467,-19.228 36.628,-32.312 63.547,-34.382c-21.881,5.724 -35.849,20.134 -43.055,39.429c20.351,9.195 34.575,29.698 34.575,53.416c-0,6.469 -1.062,12.697 -3.014,18.523c7.567,-0.656 15.469,0.695 23.257,4.289c10.225,4.716 17.972,12.644 22.614,22.038c-3.773,-4.307 -8.48,-7.902 -14,-10.453c-16.268,-7.508 -34.937,-3.728 -47.114,8.055l-0.019,-0.018c-0.24,0.228 -0.478,0.455 -0.721,0.679c-7.45,-6.126 -13.762,-13.588 -18.565,-22.015c5.423,-5.401 8.79,-12.869 8.79,-21.098c-0,-16.413 -13.386,-29.799 -29.8,-29.799c-16.413,0 -29.799,13.386 -29.799,29.799c-0,14.439 10.362,26.534 24.028,29.233c4,10.454 9.865,19.996 17.192,28.214c-3.696,0.735 -7.513,1.125 -11.421,1.125c-32.26,-0 -58.571,-26.311 -58.571,-58.572c-0,-32.26 26.311,-58.572 58.571,-58.572" style="fill:#ef7c00;" /></svg>';
    var cookie = '🍪';

    cookieconsent.run({
        current_lang: 'cs',
        page_scripts: true,

        theme_css: 'https://nastartuj.cz/cookieconsent.css',

        autorun: true,
        delay: 0,
        autoclear_cookies: true,

        gui_options: {
            consent_modal: {
                layout: 'box',               // box/cloud/bar 
                position: 'bottom right',     // bottom/top + left/right/center
                transition: 'slide'             // zoom/slide
            },
            settings_modal: {
                layout: 'box',                 // box/bar
                transition: 'slide',            // zoom/slide
            }
        },

        onAccept: function (cookies) {
            if (cookieconsent.allowedCategory('necessary')) {
                var dataLayer = window.dataLayer || [];
                dataLayer.push({
                    event: 'CookieConsent',
                    consentType: 'necessary'
                });
            }


            if (cookieconsent.allowedCategory('analytics')) {
                var dataLayer = window.dataLayer || [];
                dataLayer.push({
                    event: 'CookieConsent',
                    consentType: 'analytics'
                });
            }


        },

        languages: {
            'cs': {
                consent_modal: {
                    title: cookie + ' Používáme cookies! ',
                    description: ' Tato webové stránka používá analytické cookies, abychom lépe pochopili, jak používáte náš web a naše služby. Na základě těchto dat se vám snažíme zlepšit a zpříjemnit váš zážitek na našem webu. Tyto cookies se spustí až po udělení souhlasu. <button type="button" data-cc="c-settings" class="cc-link">Upravit možnosti</button> ',
                    primary_btn: {
                        text: 'Přijmout vše',
                        role: 'accept_all'  //'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text: 'Odmítnout vše',
                        role: 'settings'   //'settings' or 'accept_necessary'
                    }
                },
                settings_modal: {
                    title: logo,
                    save_settings_btn: 'Uložit nastavení',
                    accept_all_btn: 'Přijmout vše',
                    reject_all_btn: 'Odmítnout vše',
                    close_btn_label: 'Zavřít',
                    cookie_table_headers: [
                        { col1: 'Název' },
                        { col2: 'Doména' },
                        { col3: 'Expirace' },
                        { col4: 'Popis' }

                    ],
                    blocks: [
                        {
                            title: 'Použití cookies 📢',
                            description: 'Soubory cookie používáme k analýze údajů o našich návštěvnících, ke zlepšení našich webových stránek, zobrazení personalizovaného obsahu a k tomu, abychom vám poskytli skvělý zážitek z webu. Používáním tohoto webu s tímto používáním souhlasíte.',
                        }, {
                            title: 'Cookies nutné pro fungování webu',
                            description: 'Tyto soubory cookies jsou nezbytné pro fungování webu a díky tomu je není možné zakázat. Neukládají žádné informace, které lze přiřadit ke konkrétní osobě.',
                            toggle: {
                                value: 'necessary',
                                enabled: true,
                                readonly: true
                            }
                        }, {
                            title: 'Analytické cookies',
                            description: 'Tento typ cookies nám umožňuje zkoumat vaši aktivitu na stránce a přizpůsobovat tak v budoucnu náš web tak, abychom zlepšili váš zážitek při prohlížení.',
                            toggle: {
                                value: 'analytics',
                                enabled: false,
                                readonly: false
                            },
                            cookie_table: [
                                {
                                    col1: '_ga',
                                    col2: 'google.com',
                                    col3: '2 roky',
                                    col4: 'Rozlišuje uživatele.',
                                    is_regex: true
                                },
                                {
                                    col1: '_gid',
                                    col2: 'google.com',
                                    col3: '24 hodin',
                                    col4: 'Rozlišuje uživatele.',
                                },
                                {
                                    col1: '_gat',
                                    col2: 'google.com',
                                    col3: '1 minuta',
                                    col4: 'Omezuje a reguluje rychlost požadavků.'
                                }
                            ]
                        }
                    ]
                }
            }

        }
    });

    if (!cookieconsent.validCookie('cc_cookie')) {
        var dataLayer = window.dataLayer || [];
        dataLayer.push({
            event: 'CookieConsent',
            consentType: 'empty'
        });
    }
});