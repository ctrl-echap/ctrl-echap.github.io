// Fonction pour recommencer le jeu (pendant le jeu)
function recommencer() {
    var recommence = confirm("Êtes-vous sûr de vouloir recommencer le jeu ?")
    if (recommence === true) {
        sessionStorage.clear();
        window.location.href = "index.html"; // Source : https://www.w3schools.com/howto/howto_js_redirect_webpage.asp 
    }
}

// Fonction pour recommencer le jeu (après la fin du jeu)
function recommencer2() {
    sessionStorage.clear();
    window.location.href = "index.html"; // Source : https://www.w3schools.com/howto/howto_js_redirect_webpage.asp 
}

//Fonction pour vérifier la réponse à la question 1 : Ours en peluche
function salle1Question1() {
    // Chercher les données dans le formulaire
    var affiche = document.getElementById("divAfficheOurs");
    var entree = parseInt(document.getElementById("questionOurs").value);
    var tblQ1 = document.getElementById("tblQ1");

    // Créer une variable pour le message à afficher dépendamment de la réponse entrée
    var message = "";
        
    // Vérifier si c'est la bonne réponse et changer le message en conséquence
    if (entree == 5) {
        // On affiche un message de félicitations pour avoir eu la bonne réponse ainsi qu'un indice. On mets en mémoire que la question est complétée et on la cache
        message = "🧸 = 5";
        sessionStorage.setItem("questionOursFait", "true");
        tblQ1.style.display = "none";
    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réessayer";
    }
        
    // On affiche le message sur la page web 
    affiche.innerHTML = message;
}

// Fonction pour vérifier la réponse à la question 2 : Plante
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
        message = "🪴 = 9";
        sessionStorage.setItem("questionPlanteFait", "true");
        tblQ2.style.display = "none";
    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réessayer";
    }
    
    // On affiche le message sur la page web 
    affiche.innerHTML = message;
}

//Fonction pour vérifier la réponse à la question 3 : Peinture
function salle1Question3(){
    // Chercher les données dans le formulaire
    var affiche = document.getElementById("divAffichePeinture");
    var entree = parseInt(document.getElementById("questionPeinture").value);
    var tblQ3 = document.getElementById("tblQ3");
    
    // Créer une variable pour le message à afficher dépendamment de la réponse entrée
    var message = "";
    
    // Vérifier si c'est la bonne réponse et changer le message en conséquence
    if (entree == 16) {
        // On affiche un message de félicitations pour avoir eu la bonne réponse ainsi qu'un indice. On mets en mémoire que la question est complétée et on la cache
        message = "🎨 = 16";
        sessionStorage.setItem("questionPeintureFait", "true");
        tblQ3.style.display = "none";
    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réessayer";
    }
    
    // On affiche le message sur la page web 
    affiche.innerHTML = message;
}

//Fonction pour vérifier la réponse à la question 4 : Tiroir
function salle2Question1(){
    // Chercher les données dans le formulaire
    var affiche = document.getElementById("divAfficheTiroir");
    var entree = parseInt(document.getElementById("questionTiroir").value);
    var tblQ4 = document.getElementById("tblQ4");
    
    // Créer une variable pour le message à afficher dépendamment de la réponse entrée
    var message = "";
    
    // Vérifier si c'est la bonne réponse et changer le message en conséquence
    if (entree === 0) {
        // On affiche un message de félicitations pour avoir eu la bonne réponse ainsi qu'un indice. On mets en mémoire que la question est complétée et on la cache
        message = "🗃️ = 0";
        sessionStorage.setItem("questionTiroirFait", "true");
        tblQ4.style.display = "none";
    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réessayer";
    }
    
    // On affiche le message sur la page web 
    affiche.innerHTML = message;
}

//Fonction pour vérifier la réponse à la question 5 : Cadre
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
        message = "📈 = 28";
        sessionStorage.setItem("questionCadreFait", "true");
        tblQ5.style.display = "none";
    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réessayer";
    }
    
    // On affiche le message sur la page web 
    affiche.innerHTML = message;
}

// Fonction pour vérifier la réponse à la question 6 : Papier
function salle2Question3(){
    // Chercher les données dans le formulaire
    var affiche = document.getElementById("divAffichePapier");
    var entree = parseInt(document.getElementById("questionPapier").value);
    var tblQ6 = document.getElementById("tblQ6");
    
    // Créer une variable pour le message à afficher dépendamment de la réponse entrée
    var message = "";
    
    // Vérifier si c'est la bonne réponse et changer le message en conséquence
    if (entree == 4) {
        // On affiche un message de félicitations pour avoir eu la bonne réponse ainsi qu'un indice. On mets en mémoire que la question est complétée et on la cache
        message = "📄 = 4";
        sessionStorage.setItem("questionPapierFait", "true");
        tblQ6.style.display = "none";
    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réessayer";
    }
    
    // On affiche le message sur la page web 
    affiche.innerHTML = message;
}

// On crée la fonction pour la sortie de la chambre 1
function validerSortie1(){
    // Chercher les données dans le formulaire
    var affiche = document.getElementById("divAffichePorte1");
    var entree = parseInt(document.getElementById("echap1").value);
    
    // Créer une variable pour le message à afficher dépendamment de la réponse entrée
    var message = "";
    
    // Créer des variables qui gardent en mémoire quelles questions ont été répondues correctement
    var oursFait = sessionStorage.getItem("questionOursFait")
    var planteFait = sessionStorage.getItem("questionPlanteFait")
    var peintureFait = sessionStorage.getItem("questionPeintureFait")
    var tiroirFait = sessionStorage.getItem("questionTiroirFait")
    var cadreFait = sessionStorage.getItem("questionCadreFait")
    var papierFait = sessionStorage.getItem("questionPapierFait")
    
    // Vérifier que toutes les questions ont été répondues avant d'essayer de quitter la salle
    if (!((oursFait == "true") && (planteFait == "true") && (peintureFait == "true") && (tiroirFait == "true") && (cadreFait == "true") && (papierFait == "true"))) {
        message = "Vous devez répondre à toutes les questions dans la salle avant de tenter de quitter. Chop Chop !!!"
    } else if (entree == 62) { // Si l'entrée est bonne
        // Aller à la prochaine salle
        window.location.href = "chambre2vue1.html" // Source : https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
        sessionStorage.setItem("porte1Fait", "true");
    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réessayer";
    }
    
    // On affiche le message à l'écran
    affiche.innerHTML = message;
}

// Fonction pour vérifier la réponse à la question 7 : Four
function salle3Question1(){
    // Chercher les données dans le formulaire
    var affiche = document.getElementById("divAfficheFour");
    var entree = parseInt(document.getElementById("questionFour").value);
    var tblQ7 = document.getElementById("tblQ7");
    
    // Créer une variable pour le message à afficher dépendamment de la réponse entrée
    var message = "";
    
    // Vérifier si c'est la bonne réponse et changer le message en conséquence
    if (entree == 73) {
        // On affiche un message de félicitations pour avoir eu la bonne réponse ainsi qu'un indice. On mets en mémoire que la question est complétée et on la cache
        message = "🥧 = 73";
        sessionStorage.setItem("questionFourFait", "true");
        tblQ7.style.display = "none";
    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réessayer";
    }
    
    // On affiche le message sur la page web 
    affiche.innerHTML = message;
}

// Fonction pour vérifier la réponse à la question 8 : Statue d'ours
function salle3Question2(){
    // Chercher les données dans le formulaire
    var affiche = document.getElementById("divAfficheOurs2");
    var entree = parseInt(document.getElementById("questionOurs2").value);
    var tblQ8 = document.getElementById("tblQ8");
    
    // Créer une variable pour le message à afficher dépendamment de la réponse entrée
    var message = "";
    
    // Vérifier si c'est la bonne réponse et changer le message en conséquence
    if (entree == 18) {
        // On affiche un message de félicitations pour avoir eu la bonne réponse ainsi qu'un indice. On mets en mémoire que la question est complétée et on la cache
        message = "🍬 = 18";
        sessionStorage.setItem("questionOurs2Fait", "true");
        tblQ8.style.display = "none";

    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réessayer";
    }
    
    // On affiche le message sur la page web 
    affiche.innerHTML = message;
}

// Fonction pour vérifier la réponse à la question 9 : Tiroir 2
function salle3Question3(){
    // Chercher les données dans le formulaire
    var affiche = document.getElementById("divAfficheTiroir2");
    var entree = parseInt(document.getElementById("questionTiroir2").value);
    var tblQ9 = document.getElementById("tblQ9");
    
    // Créer une variable pour le message à afficher dépendamment de la réponse entrée
    var message = "";
    
    // Vérifier si c'est la bonne réponse et changer le message en conséquence
    if (entree == 2) {
        // On affiche un message de félicitations pour avoir eu la bonne réponse ainsi qu'un indice. On mets en mémoire que la question est complétée et on la cache
        message = "🥄 = 2";
        sessionStorage.setItem("questionTiroir2Fait", "true");
        tblQ9.style.display = "none";

    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réessayer";
    }
    
    // On affiche le message sur la page web 
    affiche.innerHTML = message;
}

// Fonction pour vérifier la réponse à la question 10 : Bol 1
function salle4Question1(){
    // Chercher les données dans le formulaire
    var affiche = document.getElementById("divAfficheBolUn");
    var entree = parseInt(document.getElementById("questionBolUn").value);
    var tblQ10 = document.getElementById("tblQ10");
    
    // Créer une variable pour le message à afficher dépendamment de la réponse entrée
    var message = "";
    
    // Vérifier si c'est la bonne réponse et changer le message en conséquence
    if (entree == 4) {
        // On affiche un message de félicitations pour avoir eu la bonne réponse ainsi qu'un indice. On mets en mémoire que la question est complétée et on la cache
        message = "🍚 = 4";
        sessionStorage.setItem("questionBol1Fait", "true");
        tblQ10.style.display = "none";

    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réessayer";
    }
    
    // On affiche le message sur la page web 
    affiche.innerHTML = message;
}

// Fonction pour vérifier la réponse à la question 11 : Bol 2
function salle4Question2(){
    // Chercher les données dans le formulaire
    var affiche = document.getElementById("divAfficheBolDeux");
    var entree = parseInt(document.getElementById("questionBolDeux").value);
    var tblQ11 = document.getElementById("tblQ11");
    
    // Créer une variable pour le message à afficher dépendamment de la réponse entrée
    var message = "";
    
    // Vérifier si c'est la bonne réponse et changer le message en conséquence
    if (entree == 216) {
        // On affiche un message de félicitations pour avoir eu la bonne réponse ainsi qu'un indice. On mets en mémoire que la question est complétée et on la cache
        message = "🍓 = 216";
        sessionStorage.setItem("questionBol2Fait", "true");
        tblQ11.style.display = "none";
    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réessayer";
    }
    
    // On affiche le message sur la page web 
    affiche.innerHTML = message;
}

// Fonction pour vérifier la réponse à la question 12 : Bol 3
function salle4Question3(){
    // Chercher les données dans le formulaire
    var affiche = document.getElementById("divAfficheBolTrois");
    var entree = parseInt(document.getElementById("questionBolTrois").value);
    var tblQ12 = document.getElementById("tblQ12");
    
    // Créer une variable pour le message à afficher dépendamment de la réponse entrée
    var message = "";
    
    // Vérifier si c'est la bonne réponse et changer le message en conséquence
    if (entree == 2025) {
        // On affiche un message de félicitations pour avoir eu la bonne réponse ainsi qu'un indice. On mets en mémoire que la question est complétée et on la cache
        message = "🥖 = 2025";
        sessionStorage.setItem("questionBol3Fait", "true");
        tblQ12.style.display = "none";
    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réessayer";
    }
    
    // On affiche le message sur la page web 
    affiche.innerHTML = message;
}

// Fonction pour vérifier la réponse à la question 13 : L'affiche
function salle4Question4(){
    // Chercher les données dans le formulaire
    var affiche = document.getElementById("divAfficheAffiche");
    var entree = parseInt(document.getElementById("questionAffiche").value);
    var tblQ13 = document.getElementById("tblQ13");
    
    // Créer une variable pour le message à afficher dépendamment de la réponse entrée
    var message = "";
    
    // Vérifier si c'est la bonne réponse et changer le message en conséquence
    if (entree == 180) {
        // On affiche un message de félicitations pour avoir eu la bonne réponse ainsi qu'un indice. On mets en mémoire que la question est complétée et on la cache
        message = "🍪 = 180";
        sessionStorage.setItem("questionAfficheFait", "true");
        tblQ13.style.display = "none";

    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réessayer";
    }
    
    // On affiche le message sur la page web 
    affiche.innerHTML = message;
}

// On crée la fonction pour la sortie de la chambre 2
function validerSortie2(){
    // Chercher les données dans le formulaire
    var affiche = document.getElementById("divAffichePorte2");
    var entree = parseInt(document.getElementById("echap2").value);
    
    // Créer une variable pour le message à afficher dépendamment de la réponse entrée
    var message = "";
    
    // Créer des variables qui gardent en mémoire quelles questions ont été répondues correctement
    var fourFait = sessionStorage.getItem("questionFourFait")
    var ours2Fait = sessionStorage.getItem("questionOurs2Fait")
    var tiroir2Fait = sessionStorage.getItem("questionTiroir2Fait")
    var bol1Fait = sessionStorage.getItem("questionBol1Fait")
    var bol2Fait = sessionStorage.getItem("questionBol2Fait")
    var bol3Fait = sessionStorage.getItem("questionBol3Fait")
    var afficheFait = sessionStorage.getItem("questionAfficheFait")
    
    // Vérifier que toutes les questions ont été répondues avant d'essayer de quitter la salle
    if (!((fourFait == "true") && (ours2Fait == "true") && (tiroir2Fait == "true") && (bol1Fait == "true") && (bol2Fait == "true") && (bol3Fait == "true") && (afficheFait == "true"))) {
        message = "Vous devez répondre à toutes les questions dans la salle avant de tenter de quitter. Chop Chop !!!"
    } else if (entree == 26) { // Si l'entrée est bonne
        // Quitter la maison
        window.location.href = "pagefin1.html" // Source : https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
        sessionStorage.setItem("porte2Fait", "true");
    } else {
        // On affiche un message de qui dit de réessayer si l'utilisateur a entré la mauvaise réponse
        message = "Ah non! désolé mauvaise réponse! Veuillez réessayer";
    }
    
    // On affiche le message à l'écran
    affiche.innerHTML = message;
}
