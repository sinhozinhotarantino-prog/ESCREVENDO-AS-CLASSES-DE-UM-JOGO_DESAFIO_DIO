class HEROI {
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
atacar(){
    let ataque = "";
if(this.tipo === "MAGO"){ 
    ataque = "magia";
}else if(this.tipo === "GUERREIRO"){
    ataque = "espada";
}else if(this.tipo === "MONGE"){
    ataque = "artes marciais";
}else if(this.tipo === "NINJA"){
    ataque = "shuriken";
}
    console.log(`O ${this.tipo} atacou usando ${ataque}`)
}
}
let personagem1 = new HEROI("ARMANDINHO","20","GUERREIRO");
let personagem2 = new HEROI("BARBOZINHA","21","MAGO");
let personagem3 = new HEROI("CAJUZINHO","22","MONGE");
let personagem4 = new HEROI("DOIDINHO","23","NINJA");

personagem1.atacar();
personagem2.atacar();
personagem3.atacar();
personagem4.atacar();


