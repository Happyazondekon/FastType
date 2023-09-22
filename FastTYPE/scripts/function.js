function retournemessagescore(score, nombreMotsMax){
    let message ="le score est de" + score + 'sur' +nombreMotsMax
    return message
}
let retourfunction = retournemessagescore(1,3)
console.log(retourfunction)