window.onload = function () {
    this.loadHome()

};

const poruke = document.querySelectorAll('.poruka h2')
const poruka1 = document.querySelector('.poruka h2:nth-child(1)')
const poruka2 = document.querySelector('.poruka h2:nth-child(2)')
const poruka3 = document.querySelector('.poruka h2:nth-child(3)')
const mapa = document.getElementById('map');

const dugmeHome = document.getElementById('home')
const dugmeUsluge = document.getElementById('usluge')
const dugmeOnama = document.getElementById('oNama')
const dugmeKontakt = document.getElementById('kontakt')

const naslovna = document.getElementById('homePoruka')

const nosacHome = document.getElementById('nosacHome')
const nosacUsluge = document.getElementById('nosacUsluge')
const nosacOnama = document.getElementById('nosacOnama')
const nosacKontakt = document.getElementById('nosacKontakt')

const usluge = document.getElementsByClassName('usluge');
const usluga1 = document.querySelector('.usluge:nth-child(1)')
const usluga2 = document.querySelector('.usluge:nth-child(2)')
const usluga3 = document.querySelector('.usluge:nth-child(3)')
const usluga4 = document.querySelector('.usluge:nth-child(4)')

const privH2 = document.querySelector('#nosacOnama h2')

const kontaktEl = document.querySelectorAll('#nosacKontakt h4, #nosacKontakt a')

const trajanje = 1200


function loadHome() {

    setTimeout(() => {
        // anime({
        //     targets: poruke,
        //     translateY: -100,
        //     direction: 'normal',
        //     opacity: 1,
        //     loop: false,
        //     delay: 1000,
        //     delay: function (el, i, l) {
        //         return i * 700;
        //     },
        //     endDelay: function (el, i, l) {
        //         return (l - i) * 700;
        //     },
        //     duration: 2000
        // });
        anime({
            targets: poruka1,
            translateY: -100,
            direction: 'normal',
            opacity: 1,
            loop: false,
            delay: 1000,
            duration: 2000
        });
        anime({
            targets: poruka2,
            translateY: -100,
            direction: 'normal',
            opacity: 1,
            loop: false,
            delay: 1700,
            duration: 2000
        });
        anime({
            targets: poruka3,
            translateY: -100,
            direction: 'normal',
            opacity: 1,
            loop: false,
            delay: 2400,
            duration: 2000
        });
        anime({
            targets: nosacHome,
            opacity: 1,
            loop: false,
            duration: 2000
        })


    }, 1000);
}

function resetHome() {
    nosacHome.style.cssText = "";
    poruka1.style.cssText = "";
    poruka2.style.cssText = "";
    poruka3.style.cssText = "";
}

function loadUsluge() {
    nosacUsluge.style.opacity = '1'
    anime({
        targets: [usluga1],
        translateX: 200,
        direction: 'normal',
        opacity: 1,
        loop: false,
        delay: 750,
        duration: 2800
    });
    anime({
        targets: [usluga2],
        translateX: -200,
        direction: 'normal',
        opacity: 1,
        loop: false,
        delay: 500,
        duration: 2800
    });
    anime({
        targets: [usluga3],
        translateX: 200,
        direction: 'normal',
        opacity: 1,
        loop: false,
        delay: 250,
        duration: 2800
    });
    anime({
        targets: [usluga4],
        translateX: -200,
        direction: 'normal',
        opacity: 1,
        loop: false,
        delay: 0,
        duration: 2800
    });
    console.log('uspelko');
}

function resetUsluge() {
    usluga1.style.cssText = "";
    usluga2.style.cssText = "";
    usluga3.style.cssText = "";
    usluga4.style.cssText = "";
}

function loadKontakt() {
    nosacKontakt.style.opacity = '1'
    const animation = anime({
        targets: mapa,
        width: '80%',
        easing: 'linear',
        duration: 1000
    });
    animation.finished.then(() => {
        anime({
            targets: mapa,
            height: '70%',
            easing: 'linear',
            duration: 1000
        });
        map.renderSync();
    })
    anime({
        targets: kontaktEl,
        opacity: 1,
        easing: 'linear',
        duration: 3000,
        delay: 1500
    });
}

function loadOnama() {
    nosacOnama.style.opacity = '1'
    anime({
        targets: privH2,
        direction: 'normal',
        opacity: 1,
        loop: false,
        delay: 0,
        duration: 1400
    });

}

function resetOnama() {
    privH2.style.cssText = "";
}

function resetKontakt() {
    mapa.style.cssText = '';
}

dugmeUsluge.addEventListener('click', () => {

    if (dugmeHome.classList.contains('aktivnoD')) {
        resetUsluge();
        dugmeHome.classList.remove('aktivnoD');
        dugmeUsluge.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacHome,
            opacity: 0,
            easing: 'linear',
            duration: 1000
        });
        animation.finished.then(() => {
            loadUsluge();
        })

        const animation1 = anime({
            targets: naslovna,
            translateY: -300,
            easing: 'linear',
            duration: 1500,
            //delay: 500
        })
        animation1.finished.then(function () {

            naslovna.innerText = 'Usluge'
            anime({
                targets: naslovna,
                translateY: 0,
                easing: 'linear',
                duration: 1500
            })
        })
    } else if (dugmeOnama.classList.contains('aktivnoD')) {
        resetUsluge();
        dugmeOnama.classList.remove('aktivnoD');
        dugmeUsluge.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacOnama,
            opacity: 0,
            easing: 'linear',
            duration: 1000
        });
        animation.finished.then(() => {
            loadUsluge();
        })

        const animation1 = anime({
            targets: naslovna,
            translateY: -300,
            easing: 'linear',
            duration: 1500,
            //delay: 500
        })
        animation1.finished.then(function () {

            naslovna.innerText = 'Usluge'
            anime({
                targets: naslovna,
                translateY: 0,
                easing: 'linear',
                duration: 1500
            })
        })
    } else if (dugmeKontakt.classList.contains('aktivnoD')) {
        resetUsluge();
        dugmeKontakt.classList.remove('aktivnoD');
        dugmeUsluge.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacKontakt,
            opacity: 0,
            easing: 'linear',
            duration: 1000
        });
        animation.finished.then(() => {
            loadUsluge();
        })

        const animation1 = anime({
            targets: naslovna,
            translateY: -300,
            easing: 'linear',
            duration: 1500,
            //delay: 500
        })
        animation1.finished.then(function () {

            naslovna.innerText = 'Usluge'
            anime({
                targets: naslovna,
                translateY: 0,
                easing: 'linear',
                duration: 1500
            })
        })
    }
})

dugmeHome.addEventListener('click', () => {

    if (dugmeUsluge.classList.contains('aktivnoD')) {
        resetHome()
        dugmeUsluge.classList.remove('aktivnoD');
        dugmeHome.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacUsluge,
            opacity: 0,
            easing: 'linear',
            duration: 1000
        });
        animation.finished.then(() => {
            loadHome();
        })

        const animation1 = anime({
            targets: naslovna,
            translateY: -300,
            easing: 'linear',
            duration: 1500,
            //delay: 500
        })
        animation1.finished.then(function () {

            naslovna.innerText = 'Dobrodošli'
            anime({
                targets: naslovna,
                translateY: 0,
                easing: 'linear',
                duration: 1500
            })
        })
    } else if (dugmeOnama.classList.contains('aktivnoD')) {
        resetHome();
        dugmeOnama.classList.remove('aktivnoD');
        dugmeHome.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacOnama,
            opacity: 0,
            easing: 'linear',
            duration: 1000
        });
        animation.finished.then(() => {
            loadHome();
        })

        const animation1 = anime({
            targets: naslovna,
            translateY: -300,
            easing: 'linear',
            duration: 1500,
            //delay: 500
        })
        animation1.finished.then(function () {

            naslovna.innerText = 'Dobrodošli'
            anime({
                targets: naslovna,
                translateY: 0,
                easing: 'linear',
                duration: 1500
            })
        })
    } else if (dugmeKontakt.classList.contains('aktivnoD')) {
        resetHome();
        dugmeKontakt.classList.remove('aktivnoD');
        dugmeHome.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacKontakt,
            opacity: 0,
            easing: 'linear',
            duration: 1000
        });
        animation.finished.then(() => {
            loadHome();
        })

        const animation1 = anime({
            targets: naslovna,
            translateY: -300,
            easing: 'linear',
            duration: 1500,
            //delay: 500
        })
        animation1.finished.then(function () {

            naslovna.innerText = 'Dobrodošli'
            anime({
                targets: naslovna,
                translateY: 0,
                easing: 'linear',
                duration: 1500
            })
        })
    }
})

dugmeOnama.addEventListener('click', () => {

    if (dugmeHome.classList.contains('aktivnoD')) {
        resetOnama()
        dugmeHome.classList.remove('aktivnoD');
        dugmeOnama.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacHome,
            opacity: 0,
            easing: 'linear',
            duration: 1000
        });
        animation.finished.then(() => {
            loadOnama();
        })

        const animation1 = anime({
            targets: naslovna,
            translateY: -300,
            easing: 'linear',
            duration: 1500,
            //delay: 500
        })
        animation1.finished.then(function () {

            naslovna.innerText = 'Onama'
            anime({
                targets: naslovna,
                translateY: 0,
                easing: 'linear',
                duration: 1500
            })
        })
    } else if (dugmeUsluge.classList.contains('aktivnoD')) {
        resetOnama();
        dugmeUsluge.classList.remove('aktivnoD');
        dugmeOnama.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacUsluge,
            opacity: 0,
            easing: 'linear',
            duration: 1000
        });
        animation.finished.then(() => {
            loadOnama();
        })

        const animation1 = anime({
            targets: naslovna,
            translateY: -300,
            easing: 'linear',
            duration: 1500,
            //delay: 500
        })
        animation1.finished.then(function () {

            naslovna.innerText = 'O nama'
            anime({
                targets: naslovna,
                translateY: 0,
                easing: 'linear',
                duration: 1500
            })
        })
    } else if (dugmeKontakt.classList.contains('aktivnoD')) {
        resetOnama();
        dugmeKontakt.classList.remove('aktivnoD');
        dugmeOnama.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacKontakt,
            opacity: 0,
            easing: 'linear',
            duration: 1000
        });
        animation.finished.then(() => {
            loadOnama();
        })

        const animation1 = anime({
            targets: naslovna,
            translateY: -300,
            easing: 'linear',
            duration: 1500,
            //delay: 500
        })
        animation1.finished.then(function () {

            naslovna.innerText = 'O nama'
            anime({
                targets: naslovna,
                translateY: 0,
                easing: 'linear',
                duration: 1500
            })
        })
    }
})

dugmeKontakt.addEventListener('click', () => {

    if (dugmeHome.classList.contains('aktivnoD')) {
        resetKontakt()
        dugmeHome.classList.remove('aktivnoD');
        dugmeKontakt.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacHome,
            opacity: 0,
            easing: 'linear',
            duration: 1000
        });
        animation.finished.then(() => {
            loadKontakt();
            map.renderSync();
        })

        const animation1 = anime({
            targets: naslovna,
            translateY: -300,
            easing: 'linear',
            duration: 1500,
            //delay: 500
        })
        animation1.finished.then(function () {

            naslovna.innerText = 'Kontakt'
            anime({
                targets: naslovna,
                translateY: 0,
                easing: 'linear',
                duration: 1500
            })
        })
    } else if (dugmeUsluge.classList.contains('aktivnoD')) {
        resetKontakt();
        dugmeUsluge.classList.remove('aktivnoD');
        dugmeKontakt.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacUsluge,
            opacity: 0,
            easing: 'linear',
            duration: 1000
        });
        animation.finished.then(() => {
            loadKontakt();
        })

        const animation1 = anime({
            targets: naslovna,
            translateY: -300,
            easing: 'linear',
            duration: 1500,
            //delay: 500
        })
        animation1.finished.then(function () {

            naslovna.innerText = 'Kontakt'
            anime({
                targets: naslovna,
                translateY: 0,
                easing: 'linear',
                duration: 1500
            })
        })
    } else if (dugmeOnama.classList.contains('aktivnoD')) {
        resetKontakt();
        dugmeOnama.classList.remove('aktivnoD');
        dugmeKontakt.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacOnama,
            opacity: 0,
            easing: 'linear',
            duration: 1000
        });
        animation.finished.then(() => {
            loadKontakt();
        })

        const animation1 = anime({
            targets: naslovna,
            translateY: -300,
            easing: 'linear',
            duration: 1500,
            //delay: 500
        })
        animation1.finished.then(function () {

            naslovna.innerText = 'Kontakt'
            anime({
                targets: naslovna,
                translateY: 0,
                easing: 'linear',
                duration: 1500
            })
        })
    }
})

const meni = document.getElementById('nav');

anime({
    targets: meni,
    translateX: '100%',
    duration: 2000,
    delay: 500
})


const naslov = document.getElementById('naslov');
const futer = document.getElementById('futer');
const logo = document.getElementById('logo');

anime({
    targets: [naslov, futer, logo],
    opacity: 1,
    duration: 2500,
    delay: 1000,
    easing: 'linear'
})




/********** MAPA **********/

const centarMape = [19.880691, 44.619044]
const map = new ol.Map({
    target: mapa,
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),


    ],

    view: new ol.View({
        center: ol.proj.fromLonLat(centarMape),
        zoom: 15,
        maxZoom: 21,
        minZoom: 6

    })
});

var marker = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat(centarMape)
    ),
});
var vectorSource = new ol.source.Vector({
    features: [marker]
});
var markerVectorLayer = new ol.layer.Vector({
    source: vectorSource,
});

marker.setStyle(new ol.style.Style({
    image: new ol.style.Icon(({
        crossOrigin: 'anonymous',
        src: './img/car_50px.png'
    }))
}));