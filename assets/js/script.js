// Paralax Effect
let glowCloud = document.getElementById("glow-left-cloud");
let leftCloud = document.getElementById("left-cloud");
let rightCloud = document.getElementById("right-cloud");
let leftStars = document.getElementById("left-stars");
let rightStars = document.getElementById("right-stars");
let heroText = document.querySelector("#landing-page h1");
let currentScale = 1;
let buttonGST = document.querySelector("#landing-page button");
let brinBuilding = document.getElementById("brin-building");

let leftStarsTop = leftStars.offsetTop;
let leftStarsLeft = leftStars.offsetLeft;   
let rightStarsTop = rightStars.offsetTop;
const parentRightStars = rightStars.offsetParent;
const offsetRight = parentRightStars.offsetWidth - (rightStars.offsetLeft + rightStars.offsetWidth);
let rightCloudTop = rightCloud.offsetTop;
let leftCloudTop = leftCloud.offsetTop;
let glowLeftCloud = glowCloud.offsetTop;

window.addEventListener('scroll', function(){
    let value = window.scrollY;
     // Skala mengecil dari 1 ke 0.8, misalnya
    let targetScale = Math.max(1 - value * 0.001, 0.7);
     // Interpolasi lambat ke target scale (semacam easing)
    currentScale += (targetScale - currentScale) * 0.1;
    let opacity = Math.max(1 - value / 50, 0); // hilang sepenuhnya setelah scroll 300px
    // contoh batas maksimum pergeseran top heroText = 200px
    let maxShift = 500;
    // Hitung posisi top heroText dengan batas
    let newTopHeroText = Math.min(value * 0.7, maxShift);
    let newTopLeftStars = Math.min(leftStarsTop + value * 0.7, maxShift);
    let newTopRightStars = Math.min(rightStarsTop + value * 0.7, maxShift);

    // leftStars.style.top = leftStarsTop + value * 0.9 + 'px';
    leftStars.style.top = newTopLeftStars + 'px';
    leftStars.style.left = leftStarsLeft + value * 0.2 + 'px';
    rightStars.style.top = newTopRightStars + value * 0.5 + 'px';
    rightStars.style.right = offsetRight + value * 0.5 + 'px';
    // heroText.style.top = value * 0.7 + 'px';
    heroText.style.top = newTopHeroText + 'px';
    heroText.style.transform = `scale(${currentScale})`;
    rightCloud.style.top = rightCloudTop + value * 0.2 + 'px';
    leftCloud.style.top = leftCloudTop + value * 0.2 + 'px';
    glowCloud.style.top = glowLeftCloud + value * 0.2 + 'px';
    buttonGST.style.opacity = opacity;
    buttonGST.style.top = -value * 1 + 'px';
})
// Paralax Effect

// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('#navbar');
    const fixedNav = header.offsetTop;
    console.log(fixedNav);

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        header.classList.remove('navbar-absolute');
    } 
    else {
        header.classList.remove('navbar-fixed');
        header.classList.add('navbar-absolute');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click' , function() {
    // hamburger.classList.toggle('hamburger-active');
    document.body.classList.toggle('nav-open');
    navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click' , function(e) {
    if(e.target != hamburger && e.target != navMenu) {
        document.body.classList.remove('nav-open');
        navMenu.classList.add('hidden');
    }
});

// HERO SECTION
document.addEventListener("DOMContentLoaded", function () {
    let getStartedBtn = document.querySelector(".button");
    let aboutSection = document.getElementById("about");

  // Ketika tombol Get Started diklik, scroll ke bagian About
    getStartedBtn.addEventListener("click", function () {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

// LIVE HERO SECTION
document.addEventListener("DOMContentLoaded", function () {
  const liveHero = document.querySelector(".live-hero");
  const items = Array.from(document.querySelectorAll(".live-hero .live"));

  // Duplikasi elemen agar animasi berjalan tanpa jeda
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    liveHero.appendChild(clone);
  });
});
// LIVE HERO SECTION

// NUMBER COUNTING ANIMATION
const semuaAngka = document.querySelectorAll("#card span");
const container = document.getElementById("counters");

let activated = false;

window.addEventListener("scroll", () => {
    // tambahan
    const containerTop = container.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // if (pageYOffset > container.offsetTop - container.offsetHeight - 200
    if (containerTop < windowHeight - 50 && !activated) {
        semuaAngka.forEach(angka => {
            angka.innerText = 0;
            let count = 0;
            function updateCount(){
                const target = parseInt(angka.dataset.count);
                if (count < target){
                    count++;
                    angka.innerText = count;
                    setTimeout(updateCount, 20);
                } else {
                    angka.innerText = target;
                }
            }
            updateCount();
            activated = true;
        });
    }
    // } else if (pageYOffset < container.offsetTop - container.offsetHeight - 500
    //     || pageYOffset === 0 && activated === true
    // ) {
    //     semuaAngka.forEach(angka => {
    //         angka.innerText = 0;
    //     });
    //     activated = false;
    // }
    if (containerTop > windowHeight) {
        semuaAngka.forEach((angka) => {
        angka.innerText = 0;
        });
        activated = false;
    }
})
// NUMBER COUNTING ANIMATION

//  FAQ SECTION - ACCORDION
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion-toggle");

  accordions.forEach((accordion) => {
    accordion.addEventListener("change", function () {
      // Menutup accordion lainnya saat yang ini dibuka
      accordions.forEach((item) => {
        if (item !== this) item.checked = false;
      });
    });
  });
});