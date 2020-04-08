window.onload = function () {
    this.loadHome()
};

const dugmeHome = document.getElementById('home')
const dugmeUsluge = document.getElementById('usluge')
const dugmeOnama = document.getElementById('oNama')
const dugmeKontakt = document.getElementById('kontakt')

const naslovna = document.getElementById('homePoruka')

const nosacHome = document.getElementById('nosacHome')
const nosacUsluge = document.getElementById('nosacUsluge')
const nosacOnama = document.getElementById('nnosacOnama')
const nosacKontakt = document.getElementById('nosacKontakt')

const trajanje = 1200

function loadHome() {

    setTimeout(() => {
        anime({
            targets: '.poruka h2',
            translateY: -100,
            direction: 'normal',
            opacity: 1,
            loop: false,
            delay: 1000,
            delay: function (el, i, l) {
                return i * 700;
            },
            endDelay: function (el, i, l) {
                return (l - i) * 700;
            },
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
        duration: trajanje
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