document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".bidang-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.opacity = "0";
        slide.style.transform = "translateY(20px)"; // Efek geser ke bawah
        setTimeout(() => {
          slides.forEach((s) => s.classList.remove("active")); // Hapus active di semua
          slide.classList.add("active");
          slide.style.opacity = "1";
          slide.style.transform = "translateY(0)";
        }, 200); // Delay agar tidak langsung muncul
      } else {
        slide.style.opacity = "0";
        slide.style.transform = "translateY(-20px)"; // Efek geser ke atas saat pindah
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      showSlide(currentIndex);
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      showSlide(currentIndex);
    }
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", function () {
      currentIndex = i;
      showSlide(currentIndex);
    });
  });

  // Tampilkan slide pertama saat halaman dimuat
  showSlide(currentIndex);
});

// Mencegah Inspect Element dan View Source
document.addEventListener("keydown", function (event) {
    if (
        (event.ctrlKey &&
        (event.key === "u" ||
            event.key === "i" ||
            event.key === "j" ||
            event.key === "s")) ||
        (event.ctrlKey &&
        event.shiftKey &&
        (event.key === "I" || event.key === "J" || event.key === "C")) ||
        event.key === "F12"
    ) {
        event.preventDefault();
        console.log("Inspect Element telah dinonaktifkan!"); // Debugging
    }
});
// Mencegah Klik Kanan
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});
// Mencegah Drag & Drop pada Semua Gambar
document.addEventListener("dragstart", function (event) {
    event.preventDefault();
});
// Mencegah Klik Kanan pada Gambar Secara Spesifik
document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("contextmenu", (event) => event.preventDefault());
});

// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('#navbar');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');
    const scrollY = window.pageYOffset;

    if (scrollY <= 200) {
      // TAMPILKAN navbar absolute
      header.classList.remove('navbar-fixed');
      header.classList.add('navbar-absolute');
      header.style.transform = "translateY(0)";
      header.style.opacity = "1";

      toTop.classList.remove('flex');
      toTop.classList.add('hidden');
    } 
    else if (scrollY > 200 && scrollY <= 350) {
      // SEMBUNYIKAN NAVBAR
      header.style.transform = "translateY(-10px)";
      header.style.opacity = "0";

      toTop.classList.remove('flex');
      toTop.classList.add('hidden');
    } 
    else {
      // TAMPILKAN navbar fixed
      header.classList.add('navbar-fixed');
      header.classList.remove('navbar-absolute');
      header.style.transform = "translateY(0)";
      header.style.opacity = "1";

      toTop.classList.remove('hidden');
      toTop.classList.add('flex');
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
});
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
