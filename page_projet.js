document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("load", ()=>{
        updateDescription();
        updateZIndex();
    });

    let imageIndex = 0;

    let previous = document.querySelector("#previous");
    let next = document.querySelector("#next");
    let image1 = document.querySelector("#image-1");
    let image2 = document.querySelector("#image-2");
    let image3 = document.querySelector("#image-3");
    let image4 = document.querySelector("#image-4");
    let buttonSlider = document.querySelector(".button-slider")
    let descriptionProjet = document.querySelector(".description-projet");
    let paragrapheDescriptionProjet = document.querySelector("#paragraphe-description-projet");
    let sousTitreDescriptionProjet = document.querySelector("#sous-titre-description-projet");


    previous.addEventListener("click", () => {
        if (imageIndex > 0) {
            imageIndex = imageIndex - 1;
            console.log(imageIndex);
            updateZIndex();
            updateDescription();
        }
    });

    next.addEventListener("click", () => {
        if (imageIndex < 3) {
            imageIndex = imageIndex + 1;
            console.log(imageIndex);
            updateZIndex();
            updateDescription();
       
        }
    });

    function updateZIndex() {
        image1.style.zIndex = imageIndex === 0 ? "10" : "0";
        image2.style.zIndex = imageIndex === 1 ? "10" : "0";
        image3.style.zIndex = imageIndex === 2 ? "10" : "0";
        image4.style.zIndex = imageIndex === 3 ? "10" : "0";
    }

function updateDescription () {





    if (imageIndex == 0) {
        sousTitreDescriptionProjet.textContent = "Conception et design d'une application";
        paragrapheDescriptionProjet.textContent = "L'idée de ce projet est partie d'une problematique à laquelle je fais face dans mon quoitidien : la difficulté de trouver des recettes adaptées au régime végétarien (et vegan), répondant aux besoins nutritionnels de ces régimes, mais sans mettre de côté la diversité des saveurs et la simplicité de cuisine. J'ai donc décidé d'imaginer à quoi cet interface pourrait ressembler. ";
        previous.style.backgroundColor = "rgba(255, 255, 255, 0.583)";

       previous.addEventListener("mouseenter", () => {
            previous.style.backgroundColor = "rgba(255, 255, 255, 0.583)";

          });
          
          previous.addEventListener("mouseleave", () => {
            previous.style.backgroundColor = "rgba(255, 255, 255, 0.583)";
           
          });

          next.addEventListener("mouseenter", () => {
            next.style.backgroundColor = "white";

          });
          
          next.addEventListener("mouseleave", () => {
            next.style.backgroundColor = "rgba(255, 255, 255, 0.583)";
           
          });
    }

    else if (imageIndex == 1) {
        sousTitreDescriptionProjet.textContent = "deuxième étape";
        paragrapheDescriptionProjet.textContent = "Description de la 2e étape";




        previous.addEventListener("mouseenter", () => {
            previous.style.backgroundColor = "white";

          });
          
          previous.addEventListener("mouseleave", () => {
            previous.style.backgroundColor = "rgba(255, 255, 255, 0.583)";
           
          });

          next.addEventListener("mouseenter", () => {
            next.style.backgroundColor = "next";

          });
          
          next.addEventListener("mouseleave", () => {
            next.style.backgroundColor = "rgba(255, 255, 255, 0.583)";
           
          });


    }

    else if (imageIndex == 2) {
        sousTitreDescriptionProjet.textContent = "troisième étape";
        paragrapheDescriptionProjet.textContent = "Description de la 3e étape";





        previous.addEventListener("mouseenter", () => {
            previous.style.backgroundColor = "white";

          });
          
          previous.addEventListener("mouseleave", () => {
            previous.style.backgroundColor = "rgba(255, 255, 255, 0.583)";
           
          });

          next.addEventListener("mouseenter", () => {
            next.style.backgroundColor = "next";

          });
          
          next.addEventListener("mouseleave", () => {
            next.style.backgroundColor = "rgba(255, 255, 255, 0.583)";
           
          });




    }


    else if (imageIndex == 3) {
        sousTitreDescriptionProjet.textContent = "quatrième étape";
        paragrapheDescriptionProjet.textContent = "Description de la 4e étape";
        next.style.backgroundColor = "rgba(255, 255, 255, 0.583)";
      
        next.addEventListener("mouseenter", () => {
            next.style.backgroundColor = "rgba(255, 255, 255, 0.583)";

          });
          
          next.addEventListener("mouseleave", () => {
            next.style.backgroundColor = "rgba(255, 255, 255, 0.583)";
           
          });

          previous.addEventListener("mouseenter", () => {
            previous.style.backgroundColor = "white";

          });
          
          previous.addEventListener("mouseleave", () => {
            previous.style.backgroundColor = "rgba(255, 255, 255, 0.583)";
           
          });

    }
}









});




