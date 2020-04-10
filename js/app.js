window.onload = function () {
    this.loadHome()
};

const poruke = document.querySelectorAll('.poruka h2')
const poruka1 = document.querySelector('.poruka h2:nth-child(1)')
const poruka2 = document.querySelector('.poruka h2:nth-child(2)')
const poruka3 = document.querySelector('.poruka h2:nth-child(3)')
console.log(poruke);

const dugmeHome = document.getElementById('home')
const dugmeUsluge = document.getElementById('usluge')
const dugmeOnama = document.getElementById('oNama')
const dugmeKontakt = document.getElementById('kontakt')

const naslovna = document.getElementById('homePoruka')

const nosacHome = document.getElementById('nosacHome')
const nosacUsluge = document.getElementById('nosacUsluge')
const nosacOnama = document.getElementById('nosacOnama')
const nosacKontakt = document.getElementById('nosacKontakt')

const trajanje = 1200

function resetHome() {
    poruka1.style.top = '150px';
    poruka1.style.opacity = '0';


    poruka2.style.top = '250px';
    poruka2.style.opacity = '0';

    poruka3.style.top = '350px';
    poruka3.style.opacity = '0'


}

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

function loadUsluge() {

    anime({
        targets: nosacUsluge,
        opacity: 1,
        easing: 'linear',
        duration: trajanje
    })
}

function loadOnama() {

    anime({
        targets: nosacOnama,
        opacity: 1,
        easing: 'linear',
        duration: trajanje
    })
}

function loadKontakt() {

    anime({
        targets: nosacKontakt,
        opacity: 1,
        easing: 'linear',
        duration: 2000
    })

}


const meni = document.getElementById('nav');
console.log(meni);

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





dugmeHome.addEventListener('click', () => {
    if (dugmeHome.classList.contains('aktivnoD')) {

    } else if (dugmeUsluge.classList.contains('aktivnoD')) {
        resetHome()
        dugmeUsluge.classList.remove('aktivnoD');
        dugmeHome.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacUsluge,
            opacity: 0,
            easing: 'linear',
            duration: trajanje
        })
        animation.finished.then(function () {
            nosacHome.style.display = 'flex'
            nosacUsluge.style.display = 'none'
            nosacHome.style.opacity = 1
            loadHome()

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
        dugmeOnama.classList.remove('aktivnoD');
        dugmeHome.classList.add('aktivnoD');
        resetHome()
        const animation = anime({
            targets: nosacOnama,
            opacity: 0,
            easing: 'linear',
            duration: trajanje
        })
        animation.finished.then(function () {
            nosacHome.style.display = 'flex'
            nosacOnama.style.display = 'none'
            loadHome()

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
        dugmeKontakt.classList.remove('aktivnoD');
        dugmeHome.classList.add('aktivnoD');
        resetHome()
        const animation = anime({
            targets: nosacKontakt,
            opacity: 0,
            easing: 'linear',
            duration: trajanje
        })
        animation.finished.then(function () {
            nosacHome.style.display = 'flex'
            nosacKontakt.style.display = 'none'
            loadHome()

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

dugmeUsluge.addEventListener('click', () => {
    if (dugmeUsluge.classList.contains('aktivnoD')) {

    } else if (dugmeHome.classList.contains('aktivnoD')) {
        dugmeHome.classList.remove('aktivnoD');
        dugmeUsluge.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacHome,
            opacity: 0,
            easing: 'linear',
            duration: trajanje
        })
        animation.finished.then(function () {
            nosacHome.style.display = 'none'
            nosacUsluge.style.display = 'flex'
            loadUsluge()
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
        dugmeOnama.classList.remove('aktivnoD');
        dugmeUsluge.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacOnama,
            opacity: 0,
            easing: 'linear',
            duration: trajanje
        })
        animation.finished.then(function () {
            nosacUsluge.style.display = 'flex'
            nosacOnama.style.display = 'none'
            loadUsluge()

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
        dugmeKontakt.classList.remove('aktivnoD');
        dugmeUsluge.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacKontakt,
            opacity: 0,
            easing: 'linear',
            duration: trajanje
        })
        animation.finished.then(function () {
            nosacHome.style.display = 'flex'
            nosacKontakt.style.display = 'none'
            loadUsluge()

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

dugmeOnama.addEventListener('click', () => {
    if (dugmeOnama.classList.contains('aktivnoD')) {

    } else if (dugmeHome.classList.contains('aktivnoD')) {
        dugmeHome.classList.remove('aktivnoD');
        dugmeOnama.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacHome,
            opacity: 0,
            easing: 'linear',
            duration: trajanje
        })
        animation.finished.then(function () {
            nosacHome.style.display = 'none'
            nosacOnama.style.display = 'flex'
            loadOnama()
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
    } else if (dugmeUsluge.classList.contains('aktivnoD')) {
        dugmeUsluge.classList.remove('aktivnoD');
        dugmeOnama.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacUsluge,
            opacity: 0,
            easing: 'linear',
            duration: trajanje
        })
        animation.finished.then(function () {
            nosacUsluge.style.display = 'none'
            nosacOnama.style.display = 'flex'
            loadOnama()

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
        dugmeKontakt.classList.remove('aktivnoD');
        dugmeOnama.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacKontakt,
            opacity: 0,
            easing: 'linear',
            duration: trajanje
        })
        animation.finished.then(function () {
            nosacOnama.style.display = 'flex'
            nosacKontakt.style.display = 'none'
            loadOnama()

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
    if (dugmeKontakt.classList.contains('aktivnoD')) {

    } else if (dugmeHome.classList.contains('aktivnoD')) {
        dugmeHome.classList.remove('aktivnoD');
        dugmeKontakt.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacHome,
            opacity: 0,
            easing: 'linear',
            duration: trajanje
        })
        animation.finished.then(function () {
            nosacHome.style.display = 'none'
            nosacKontakt.style.display = 'flex'
            loadKontakt()
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
        dugmeUsluge.classList.remove('aktivnoD');
        dugmeKontakt.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacUsluge,
            opacity: 0,
            easing: 'linear',
            duration: trajanje
        })
        animation.finished.then(function () {
            nosacUsluge.style.display = 'none'
            nosacKontakt.style.display = 'flex'
            loadKontakt()

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
        dugmeOnama.classList.remove('aktivnoD');
        dugmeKontakt.classList.add('aktivnoD');
        const animation = anime({
            targets: nosacOnama,
            opacity: 0,
            easing: 'linear',
            duration: trajanje
        })
        animation.finished.then(function () {
            nosacOnama.style.display = 'none'
            nosacKontakt.style.display = 'flex'
            loadKontakt()

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



/********** MAPA **********/
const mapa = document.getElementById('map');
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
        //src: './img/'
    }))
}));