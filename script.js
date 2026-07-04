/*=====================================
        LOADING SCREEN
======================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);

});


/*=====================================
        TYPING ANIMATION
======================================*/

new Typed("#typing", {

    strings: [

        "Electronics Engineer",

        "RTL Designer",

        "Embedded Engineer",

        "FPGA Developer",

        "Java Programmer",

        "IoT Enthusiast"

    ],

    typeSpeed: 70,

    backSpeed: 45,

    backDelay: 1500,

    loop: true

});


/*=====================================
        DARK / LIGHT MODE
======================================*/

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("light")){

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    }

    else{

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

});


/*=====================================
        AOS ANIMATION
======================================*/

AOS.init({

    duration:1000,

    once:true

});


/*=====================================
        BACK TO TOP BUTTON
======================================*/

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

}

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


/*=====================================
        ACTIVE NAVBAR
======================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/*=====================================
        CONTACT FORM
======================================*/

const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_apbr0mm",      // Service ID
            "template_iux9xi7",     // Template ID
            this,
                // Public Key
        )
        .then(function () {
            alert("Message sent successfully!");
            form.reset();
        })
        .catch((error) => {
    console.log("EmailJS Error:", error);
    alert("Failed to send message");
});
    });
}
/*=====================================
        SAVE THEME
======================================*/

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

    document.body.classList.add("light");

    if(themeBtn){
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

}

if(themeBtn){

themeBtn.addEventListener("click",()=>{

    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");

    }

    else{

        localStorage.setItem("theme","dark");

    }

});

}


/*=====================================
        PARTICLE BACKGROUND
======================================*/

if(typeof particlesJS !== "undefined"){

particlesJS("particles-js",{

"particles":{

"number":{"value":80},

"color":{"value":"#38bdf8"},

"shape":{"type":"circle"},

"opacity":{"value":0.5},

"size":{"value":3},

"move":{

"enable":true,

"speed":2

},

"line_linked":{

"enable":true,

"distance":150,

"color":"#38bdf8",

"opacity":0.4

}

},

"interactivity":{

"events":{

"onhover":{

"enable":true,

"mode":"grab"

}

}

}

});

}


/*=====================================
        PROJECT FILTER
======================================*/

const filterButtons = document.querySelectorAll(".filter-buttons button");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

const filter = button.getAttribute("data-filter");

projectCards.forEach(card=>{

if(filter==="all"){

card.style.display="block";

}

else if(card.classList.contains(filter)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

});


/*=====================================
        SKILL BAR ANIMATION
======================================*/

const bars=document.querySelectorAll(".progress span");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.width=entry.target.dataset.width || entry.target.style.width;

}

});

});

bars.forEach(bar=>{

observer.observe(bar);

});


/*=====================================
        MOBILE MENU
======================================*/

const menuBtn=document.querySelector(".menu-btn");

const navMenu=document.querySelector("nav ul");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("show");

});

}


/*=====================================
        NAVBAR SHADOW
======================================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 5px 20px rgba(0,0,0,.25)";

}

else{

header.style.boxShadow="none";

}

});


/*=====================================
        HERO FLOAT EFFECT
======================================*/

const hero=document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

if(hero){

const x=(window.innerWidth/2-e.pageX)/40;

const y=(window.innerHeight/2-e.pageY)/40;

hero.style.transform=`translate(${x}px,${y}px)`;

}

});


/*=====================================
        CONSOLE MESSAGE
======================================*/

console.log("%cWelcome to Bhuvanika's Portfolio","color:#38bdf8;font-size:18px;font-weight:bold;");
