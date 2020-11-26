function funcaochange(elemento){
    console.log(elemento.value);
}

function load(){
    alert("pagina carregado com sucesso");
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

/*function redirecionamento(){
    window.open("https://www.youtube.com/watch?v=kYWlN2UbGFA");
}*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar ");

}

/*function validarIdade(idade){
    var validar;
    if (idade >= 18){
        validar= true
    }else{
        validar= false               
    }
    return validar;
}
var idade = prompt("Qual  sua idade?");
console.log(validarIdade(idade));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
    }
    alert(setReplace("Vai Japão", "Japão", "Brasil"));


function soma(n1,n2){
    return n1+n2;
}
alert(soma(5,10));

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
alert(frase.replace("Japão","Braseil"));*/