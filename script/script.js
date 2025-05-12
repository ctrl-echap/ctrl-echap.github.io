//Fonction question 1 : Ourson
function salle1Question1(){
    var affiche=document.getElementById("divAffiche");
    var entrer=parseInt(document.getElementById("question").value);
    var reponse = 5;
    
    if (entrer == reponse) {
        var message1="Bravo!! Vous avez trouvé la 1ére entrée du mot de passe. Continuez comme ça!";
        affiche.innerHTML=message1;
    } else {
        var validation = "false";
        while (validation == "false") {
            validation = "true"
            var message2="Ah non! désolé mauvaise réponse! Veuillez réesayer";
            affiche.innerHTML=message2;
        }
    }
}
 //Fonction question 3 : Peinture
function salle4Question1(){
    var affiche=document.getElementById("divaffiche10");
    var entrer=parseInt(document.getElementById("question10").value);
    var reponse = 4;
    
        if (entrer== reponse) {
            var message1="bravo!! Vous avez trouvé la 3éme entrée du mot de passe.Continuez comme ca.";
            affiche.innerHTML=message1;
        } else {
            var validation = "false";
            while (validation == "false") {
               validation = "true"
           var message2="Ah non! désolé mauvaise réponse! veuillez réessayer";
            affiche.innerHTML=message2;
                }
        }
}
