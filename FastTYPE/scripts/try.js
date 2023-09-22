let listeMots=["Cachalot","Petunia","Serviette"];
let score=0
let motutilisateur=prompt("Entrer le mot"+listeMots[0]);
if(motutilisateur===listeMots[0]){
    score++
}
motutilisateur=prompt("Entrer le mot"+listeMots[1]);
if(motutilisateur===listeMots[1]){
        score++   
    }
motutilisateur=prompt("Entrer le mot"+listeMots[2]);
if(motutilisateur===listeMots[2]){
            score++
        }
     console.log(score)
    