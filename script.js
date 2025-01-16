const navlinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const  menuIcon = document.querySelector("#menu-icon");
const  navBar = document.querySelector("header nav");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("active");
})
const activePage = () => {
    const header = document.querySelector("header");
    const barsBox = document.querySelector(".bars-box");

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');

    }, 1100);

    navlinks.forEach(link => {
        link.classList.remove("active");
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');

    }, 1100);

    sections.forEach(section => {
        section.classList.remove("active");
    });

    menuIcon.classList.remove("bx-x");
    navBar.classList.remove("active");
}


navlinks.forEach((link, idx) => {
    link.addEventListener("click", () => {
        if(!link.classList.contains("active")){
            activePage();
            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add("active")
            },1100);
        }
    });

});

logoLink.addEventListener("click", () => {
    if(!navlinks[0].classList.contains("active"));
    activePage(); 
    navlinks[0].classList.add("active");

    setTimeout(() => {
        sections[0].classList.add("active")
    },1100);

})

// hireMe
const resumeBtn =  document.querySelectorAll(".resume-btn");

resumeBtn.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        resumeDetails = document.querySelectorAll(".resume-detail");

        resumeBtn.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add("active");

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });

        resumeDetails[idx].classList.add('active');
    })
});

// portfolio

const arrowRight = document.querySelector(".portfolio-box .navigation .arrow-right");
const arrowLeft = document.querySelector(".portfolio-box .navigation .arrow-left");
const imgSlide = document.querySelector(".img-slide");
const totalSlides = document.querySelectorAll(".img-slide .img-item").length;
const portfolioDetails = document.querySelectorAll(".portfolio-detail");

let index = 0;

const activePortfolio = () => {
    imgSlide.style.transform = `translateX(${index * -100}%)`;

    arrowLeft.classList.toggle("disabled", index === 0);
    arrowRight.classList.toggle("disabled", index === totalSlides - 1);
    portfolioDetails.forEach((detail) => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active')
};

if (arrowRight) {
    arrowRight.addEventListener("click", () => {
        if (index < totalSlides - 1) {
            index++;
            activePortfolio();
        }
    });
}

if (arrowLeft) {
    arrowLeft.addEventListener("click", () => {
        if (index > 0) {
            index--;
            activePortfolio();
        }
    });
}

// Initialize button states
activePortfolio();

