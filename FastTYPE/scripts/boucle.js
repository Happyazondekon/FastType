let listeMots=["Cachalot","Petunia","Serviette"];
let score=0
let motutilisateur
for(let i=0; i< listeMots.length; i++){
    motutilisateur=prompt("Entrer le mot:"+listeMots[i]);
    if(motutilisateur===listeMots[i]){
        score++   
    }
}
console.log(score)
