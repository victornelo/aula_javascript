
function clicou(){
    alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://globallabs.academy/")
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(elemento){
    alert("Página Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
var validar = 0;

function validarIdade(idade){
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
validarIdade(idade)
console.log(validar);
*/

/*
var count = 0;
while(count <= 5){
    alert(count);
    console.log(count);
    count++;
};
*/

/*
var count;
for(count = 0; count <=5; count++){
alert(count);
console.log(count);
};
*/

/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/

//var lista = ["João ", "Victor ", "Dulce ", "Cirino "];
//lista.push("Amor");
//lista.pop();
//console.log(lista);
//console.log(lista.length);

//var nome = "João Victor";
//var idade = 19;
//var idade2 = 20;
//alert(nome + " tem " + idade + " anos");
//console.log(idade + idade2);
//console.log(nome.replace("João Victor", "Dulce Cirino"));