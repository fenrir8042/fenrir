let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}
//
const anamenu = document.querySelector('.fenrir')

const hakkimizdaLink = document.getElementById('hakkimizda-link');
const hakkimizdaSection = document.querySelector('.hakkimizda');

const galeriLink = document.getElementById('galeri-link');
const galeriSection = document.querySelector('.galeri');

const iletisimSection = document.querySelector('.iletisim');
const iletisimLink = document.getElementById("iletisim-link");

hakkimizdaSection.style.display = 'none';
galeriSection.style.display = 'none';
iletisimSection.style.display = 'noe';


hakkimizdaLink.addEventListener('click', function (event) {
    event.preventDefault();
    anamenu.style.display = "none";
    galeriSection.style.display = "none";
    iletisimSection.style.display = "none";
    hakkimizdaSection.style.display = 'block';
});

galeriLink.addEventListener('click', function (event) {
    event.preventDefault();
    anamenu.style.display = "none"
    galeriSection.style.display = "block"
    iletisimSection.style.display = "none";
    hakkimizdaSection.style.display = 'none';
})

iletisimLink.addEventListener('click', function (event) {
    event.preventDefault();
    anamenu.style.display = "none"
    galeriSection.style.display = "none"
    iletisimSection.style.display = "block";
    hakkimizdaSection.style.display = 'none';
})

