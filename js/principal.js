let menu=document.getElementById("contain__old__option");
let ingame=document.getElementById("the_game");
let op1=document.getElementById("op1");
let op2=document.getElementById("op2");
let op3=document.getElementById("contain__otras__opciones");
let letra=document.getElementById("letra");
let nuevo=document.getElementById("new");
let guardar=document.getElementById("guardar");
let cancelar=document.getElementById("cancelar");
let valor=document.getElementById("valor");
let salir=document.getElementById("exit");
let word=document.getElementById("palabra");
/*let musica=document.getElementById("music");
let mu=document.getElementById("option");*/
const patron=/[a-z-A-Z]/g;
const palabras=["homero","abeja","mouse","perro","manzana","atomo","ogro"];
let j=[];
let a=[];
let intentos=8;
console.log(valor);
console.log(palabras);

/*let musi=new Audio("../musica/musica_prueba.mp3");
musi.play();

musica.addEventListener("click",()=>{
    if(musi.paused){
    musi.play();
    mu.classList.replace("fa-volume-xmark","fa-volume-high");
}else{
    musi.pause();
    mu.classList.replace("fa-volume-high","fa-volume-xmark");
}
})*/
op2.addEventListener("click",()=>{
    op2.classList.add("cambio");
    op3.classList.remove("remover");
    estilos(op2,menu,200);
 });
 cancelar.addEventListener("click",()=>{
    cancelar.classList.add("cambio");
    estilos(menu,op3,200);
    cancelar.classList.remove("cambio");
 });
op1.addEventListener("click",()=>{
        console.log("hola el evento se esta ejecutando")
        op1.classList.add("cambio");
        estilos(ingame,menu,300);
        star_game();
});
salir.addEventListener("click",()=>{
    salir.classList.add("cambio");
    estilos(menu,ingame,300);
    reset();
});
nuevo.addEventListener("click",()=>{
   reset();
   star_game();
});
function reset(){
    op1.classList.remove("cambio");
    salir.classList.remove("cambio");
    limpiar();
    dibujarBaseHorca();
    word.textContent="";
    j.splice(0,j.length);
    letra.textContent="";
    a.splice(0,a.length);
    intentos=8;
    confetti.stop();
}
function palabra(){
    let desafio=palabras[Math.floor(Math.random()*palabras.length)]
    let cadena__palabra= desafio.split("");
    return cadena__palabra;
}
function star_game(){
 let contian=palabra();
 for(let i=0;i<contian.length;i++){
    j.push("_");
 }
 word.textContent+=j;
 dibujarBaseHorca();
 document.addEventListener("keydown",(e)=>{
    if(a.indexOf(e.key)==-1 && intentos>0 && j.includes("_")==true) { 
        if(patron.test(e.key)){
            let i=0;
            let flag=false;
            contian.forEach(w=>{
                if(w===e.key.toLocaleLowerCase()){
                    j[i]=e.key.toLocaleLowerCase()
                    flag=true;
                }
                i++;
            })
            if(flag==false){
                intentos--;
                dibujoJuego(intentos);
            }
            word.textContent="";
            word.textContent+=j;
            a.push(e.key);
            console.log(intentos);
        }
      letra.textContent="";
      letra.textContent+=a;
      if(intentos==0){
        alert(contian);
    }
    }
    if(JSON.stringify(contian) === JSON.stringify(j)){
        setTimeout(()=>{
            confetti.start();
        })
    }
 })} 
function estilos( m1,m2,m){
    setTimeout(()=>{
        m1.classList.remove("remover");
        m2.classList.add("remover");
    },m);
}
valor.value = "";
guardar.addEventListener("click", function(){
    console.log(valor.value.toUpperCase());
    if(tiene8(valor.value)==true && validar_palabra(valor.value)==true){
        palabras.push(valor.value.toLocaleLowerCase());
        guardar.classList.add("cambio");
        estilos(ingame,op3,300);
        reset();
        star_game();
        valor.value = "";
        console.log(palabras);
    }else{
        alert("Ingreso una Palabra de mas 8 letras o una palabra alfanumerica!");
    }
});
function tiene8(palabra){
    if(palabra.length > 8){
        return false;
    }else{
        return true;
    }
}
function validar_palabra(verificar){
    let k=verificar.split("");
    console.log(k);
    let bandera;
    k.forEach(q=>{
        console.log(q);
        if(patron.test(q)==true){
            console.log(patron.test(q));
            return bandera=true;
        }else{
            return bandera=false;
        }
    });
    console.log(bandera);
}