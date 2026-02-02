//-------------------------------------------------------------
//-------------------------------------------------------------

// INITIALISATIONS DE VARIABLES

//-------------------------------------------------------------
//-------------------------------------------------------------


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let lettreP = document.querySelector('#p');
let lettreO1 = document.querySelector('#o1');
let lettreR = document.querySelector('#r');
let lettreT = document.querySelector('#t');
let lettreF = document.querySelector('#f');
let lettreO2 = document.querySelector('#o2');
let lettreL = document.querySelector('#l');
let lettreI = document.querySelector('#i');
let lettreO3 = document.querySelector('#o3');
let portfolioLetters = document.querySelector(".portfolio-letters")
let lettersFixed = document.querySelector(".letters-fixed")
let homeText = document.querySelector(".home-text")
let lettre = document.querySelectorAll(".lettre")
let homeTextH1 = document.querySelector("#home-text-h1")
let homeTextH2 = document.querySelector("#home-text-h2")
let homeTextP = document.querySelector("#home-text-p")
let imageProfil = document.querySelector("#image-profil")
let skill = document.querySelector(".skill")
let h1Competences = document.querySelector("#h1-competences")
let h1Projects = document.querySelector("#h1-projects")
let viewProject1Btn = document.querySelector("#view-project-1-btn")
let viewProject = document.querySelector("view-project")


gsap.registerPlugin(ScrollTrigger)


//react bits


/*gsap.to(lettre,{


    yPercent : -20,
scrollTrigger  :{
    trigger: lettersFixed,
    markers : true,
    start : "top 10%",
    end : "top 1%",
    stagger : 12

}


})*/




//-------------------------------------------------------------
//-------------------------------------------------------------

// MENU BURGER

//-------------------------------------------------------------
//-------------------------------------------------------------



menu.onclick = () => {
    menu.classList.toggle('fa-bars');
    menu.classList.toggle('fa-close'); 
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-close');
    menu.classList.add('fa-bars'); 
    navbar.classList.remove('active');
}


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};


 /*document.addEventListener("DOMContentLoaded", () => {
   scrollPosition = 0;
   bas = true

  

  }); */


//-------------------------------------------------------------
//-------------------------------------------------------------

// ANIMATION AU SCROLL DES LETTRES

//-------------------------------------------------------------
//-------------------------------------------------------------


   window.addEventListener("scroll", () => {
    console.log(window.scrollY);


  
 if (scrollY<100){
        scrollPosition = 0
    }

    else if (scrollY>100 && scrollY < 200){
        scrollPosition = 1
    }

    else if (scrollY>200 && scrollY < 300){
        scrollPosition = 2
    }

    else if (scrollY>300 && scrollY < 400){
        scrollPosition = 3
    }

    else if (scrollY>400 && scrollY < 500){
        scrollPosition = 4
    }

    else if (scrollY>600 && scrollY < 700){
        scrollPosition = 5
    }
    else if (scrollY>700 && scrollY < 800){
        scrollPosition = 6
    }

    else if (scrollY>800 && scrollY < 900){
        scrollPosition = 7
    }

    else if (scrollY>900 && scrollY < 1000){
        scrollPosition = 8
    }

    else if (scrollY>1000 && scrollY < 1100){
        scrollPosition = 9
    } 

    else if (scrollY>1100 ){
        scrollPosition = 10
    } 
    else if (scrollY>1500){
        scrollPosition = 11
    }
    console.log(scrollPosition)





    if (scrollPosition == 1 && bas == true) {
        lettreP.style.transform = "translateY(calc(-8.46vw - 100vw)) rotateZ(-5deg)";
    }
    else if (scrollPosition == 2 && bas == true) {
        lettreO1.style.transform = "translateY(calc(4.23vw - 100vw)) rotateZ(30deg)";
    }
    else if (scrollPosition == 3 && bas == true) {
        lettreR.style.transform = "translateY(calc(-5.64vw - 100vw)) rotateZ(-10deg)";
    }
    else if (scrollPosition == 4 && bas == true) {
        lettreT.style.transform = "translateY(calc(3.53vw - 100vw)) rotateZ(10deg)";
    }
    else if (scrollPosition == 5 && bas == true) {
        lettreF.style.transform = "translateY(calc(-12.70vw - 100vw))";
    }
    else if (scrollPosition == 6 && bas == true) {
        lettreO2.style.transform = "translateY(calc(0vw - 100vw))";
    }
    else if (scrollPosition == 7 && bas == true) {
        lettreL.style.transform = "translateY(calc(5.64vw - 100vw))";
    }
    else if (scrollPosition == 8 && bas == true) {
        lettreI.style.transform = "translateY(calc(-4.94vw - 100vw))";
    }
    else if (scrollPosition == 9 && bas == true) {
        lettreO3.style.transform = "translateY(calc(-6.35vw - 100vw))";
    }
    else if (scrollPosition == 10 && bas == true) {}
    








if (scrollPosition==1 && bas == false) {
    lettreP.style.transform="translateY(-8.46vw) rotateZ(-5deg)"  
} 
else if (scrollPosition==2 && bas == false){
    lettreO1.style.transform="translateY(4.23vw) rotateZ(30deg)" 
}
else if (scrollPosition==3 && bas == false){
    lettreR.style.transform=" translateY(-5.64vw) rotateZ(-10deg)"
}
else if (scrollPosition==4 && bas == false){
    lettreT.style.transform="translateY(3.53vw) rotateZ(10deg)"
}
else if (scrollPosition==5 && bas == false){
    lettreF.style.transform="translateY(-12.70vw)"
}
else if (scrollPosition==6 && bas == false){
    lettreO2.style.transform="translateY(0px)"
}
else if (scrollPosition==7 && bas == false){
    lettreL.style.transform="translateY(5.64vw)"
}
else if (scrollPosition==8 && bas == false){
    lettreI.style.transform="translateY(-4.94vw)"
}
else if (scrollPosition==9 && bas == false){
    lettreO3.style.transform="translateY(-6.35vw)"
}
else if (scrollPosition==10 && bas == false){}





/*if (scrollY == 1500){

    lettersFixed.style.position="static"

}*/

if (window.scrollY >= 1600){

    lettre.forEach(element => {
        element.style.opacity = "0";
    });
} else if (window.scrollY < 1600){
    lettre.forEach(element => {
        element.style.opacity = "1";
    });

}






  });



//-------------------------------------------------------------
//-------------------------------------------------------------

//déterminer le sens du scroll 

//-------------------------------------------------------------
//-------------------------------------------------------------





  let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    console.log("👉 Scroll vers le bas");
    bas = true
  } else if (scrollTop < lastScrollTop) {
    console.log("👆 Scroll vers le haut");
    bas = false
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // éviter les valeurs négatives
});




   /* letters.forEach((element)=>{
        element.style.transform="translateY(-100px)"
    }) */


//-------------------------------------------------------------
//-------------------------------------------------------------

//ANIMATION DU CONTENU DE LA HOME PAGE

//-------------------------------------------------------------
//-------------------------------------------------------------


gsap.to(imageProfil,{
    x : 60,
    rotateZ : -10,
    scrollTrigger : {
        trigger : imageProfil,
        scrub : 1,
    }
})


gsap.to(homeTextH1,{

    xPercent : -25,
    scrollTrigger : {
    trigger : homeText,
     scrub: 1,




    }
})


gsap.to(h1Competences,{

    xPercent : 80,
    scrollTrigger : {
    trigger : h1Competences,
     scrub: 1,




    }
})





gsap.to(h1Projects,{

    xPercent : 100,
    scrollTrigger : {
    trigger : h1Projects,
     scrub: 1,




    }
})


viewProject1Btn.onclick = () => {
    window.location.href = 'projet_vegi.html';
};



viewProject.addEventListener("mouseenter", () => {
    viewProject.classList.add(".souligne");

  });
  
viewProject.addEventListener("mouseleave", () => {
    viewProject.classList.remove(".souligne");
   
  });


/*viewProject1Btn.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.2)";
    button.style.color = "#033359";
  });
  

  viewProject1Btn.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
    button.style.color = "";
  });*/



