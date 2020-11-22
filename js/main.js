var d = new Date();
alert(d);

var count;
for(count=0; count <=5; count++){
alert(count);
};


var count = 0;
while(count <=5){
    console.log(count);
    alert(count);
    count++;
}


var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("Maior de idade");
}else{
        alert("Não recomendado para nenor de 18 anos");
    };


    var frutas = [{nome: "maça", cor:"vermelho"},{nome: "uva", cor:"roxa"}];
console.log(frutas[1]);
alert(frutas[1].cor);


var fruta = {nome: "maça", cor:"vermelho"}
console.log(fruta.nome);
alert(fruta.cor);


var lista =["maça", "pera", "laranja", "uva"];
lista.push("banana");
lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join("-"));

var nome = "Jaliel Gleison";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//alert(nome + tem + idade + "anos");
//alert(idade + idade2);
console.log(n1 + n2);
console.log(frase.toUpperCase());
alert(frase.replace("Japão","Braseil"));