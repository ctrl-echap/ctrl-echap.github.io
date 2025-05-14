//Fonction question 1 : Ours en peluche
function salle1Question1() {
    // Chercher les données dans le formulaire
    var affiche = document.getElementById("divAfficheOurs");
    var entree = parseInt(document.getElementById("questionOurs").value);
    var tblQ1 = document.getElementById("tblQ1")

    // Créer une variable pour le message à afficher dépendamment de la réponse entrée
    var message = "";
        
    // Vérifier si c'est la bonne réponse et changer le message en conséquence
    if (entree == 5) {
        // On affiche un message de félicitations pour avoir eu la bonne réponse ainsi qu'un indice. On mets en mémoire que la question est complétée et on la cache
        message = "Bravo!! Vous avez trouvé la 1ère entrée du mot de passe. Continuez comme ça!";
        sessionStorage.setItem("questionOursFait", "true");
        tblQ1.style.display = "none";
    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réesayer";
    }
        
    // On affiche le message sur la page web 
    affiche.innerHTML = message;
}

// Fonction question 2 : Plante
function salle1Question2(){
    // Chercher les données dans le formulaire
    var affiche = document.getElementById("divAffichePlante");
    var entree = parseInt(document.getElementById("questionPlante").value);
    var tblQ2 = document.getElementById("tblQ2");

    // Créer une variable pour le message à afficher dépendamment de la réponse entrée
    var message = "";
    
    // Vérifier si c'est la bonne réponse et changer le message en conséquence
    if (entree == 9) {
        // On affiche un message de félicitations pour avoir eu la bonne réponse ainsi qu'un indice. On mets en mémoire que la question est complétée et on la cache
        message = "Bravo!! Vous avez trouvé la 2ème entrée du mot de passe. Continuez comme ça!";
        sessionStorage.setItem("questionPlanteFait", "true");
        tblQ2.style.display = "none";
    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réesayer";
    }
    
    // On affiche le message sur la page web 
    affiche.innerHTML = message;
}

//Fonction question 3 : Peinture
function salle1Question3(){
    // Chercher les données dans le formulaire
    var affiche = document.getElementById("divAffichePeinture");
    var entree = parseInt(document.getElementById("questionPeinture").value);
    var tblQ3 = document.getElementById("tblQ3");
    
    // Créer une variable pour le message à afficher dépendamment de la réponse entrée
    var message = "";
    
    // Vérifier si c'est la bonne réponse et changer le message en conséquence
    if (entree == 4) {
        // On affiche un message de félicitations pour avoir eu la bonne réponse ainsi qu'un indice. On mets en mémoire que la question est complétée et on la cache
        message = "Bravo!! Vous avez trouvé la 3ème entrée du mot de passe. Continuez comme ça!";
        sessionStorage.setItem("questionPeintureFait", "true");
        tblQ3.style.display = "none";
    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réesayer";
    }
    
    // On affiche le message sur la page web 
    affiche.innerHTML = message;
}

//fonction de la porte pour la verification
/*function verification(){
    var reponse1=parseInt(document.getElementById("reponse1").value);
    var reponse2=parseInt(document.getElementById("reponse2").value);
    var reponse3=parseInt(document.getElementById("reponse3").value);
    var reponse4=parseInt(document.getElementById("reponse4").value);
    var reponse5=parseInt(document.getElementById("reponse5").value);
    var affiche=document.getElementById("divaffiche7");
    if ((reponse1==5)&&(reponse2==9)&&(reponse3==4)&&(reponse4==)&&(reponse5==)){
    window.location.href = "chambre2vue1.html";
    }else{
      var message="non desole,vos entrées sont incorrectes! retournez revoir le bon ordre et réessayer";
       affiche.innerHTML=message;
    }
}*/

//Fonction question 4 : Tiroir
function salle2Question1(){
    // Chercher les données dans le formulaire
    var affiche = document.getElementById("divAfficheTirroir");
    var entree = parseInt(document.getElementById("questionTirroir").value);
    var tblQ4 = document.getElementById("tblQ4");
    
    // Créer une variable pour le message à afficher dépendamment de la réponse entrée
    var message = "";
    
    // Vérifier si c'est la bonne réponse et changer le message en conséquence
    if (entree == 0) {
        // On affiche un message de félicitations pour avoir eu la bonne réponse ainsi qu'un indice. On mets en mémoire que la question est complétée et on la cache
        message = "Bravo!! Vous avez trouvé la 4ème entrée du mot de passe. Continuez comme ça!";
        sessionStorage.setItem("questionTirroirFait", "true");
        tblQ4.style.display = "none";
    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réesayer";
    }
    
    // On affiche le message sur la page web 
    affiche.innerHTML = message;
}

//Fonction question 5 : Cadre
function salle2Question2(){
    // Chercher les données dans le formulaire
    var affiche = document.getElementById("divAfficheCadre");
    var entree = parseInt(document.getElementById("questionCadre").value);
    var tblQ5 = document.getElementById("tblQ5");
    
    // Créer une variable pour le message à afficher dépendamment de la réponse entrée
    var message = "";
    
    // Vérifier si c'est la bonne réponse et changer le message en conséquence
    if (entree == 28) {
        // On affiche un message de félicitations pour avoir eu la bonne réponse ainsi qu'un indice. On mets en mémoire que la question est complétée et on la cache
        message = "Bravo!! Vous avez trouvé la 4ème entrée du mot de passe. Continuez comme ça!";
        sessionStorage.setItem("questionCadreFait", "true");
        tblQ5.style.display = "none";
    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réesayer";
    }
    
    // On affiche le message sur la page web 
    affiche.innerHTML = message;
}
