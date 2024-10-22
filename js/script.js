// -----------------------------------------------------------------------
// FUNZIONI
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------

//procedo a memorizzare in due variabili gli elementi img e button dell dom
const lamp = document.getElementById("lamp");
const button = document.getElementById("switch");
//imposto un flag per vedere se la lampadina è accesa o meno, come valore inizziale impostiamo falso perche è spenta
let lampFlag = false;
//in base al flag scelgo cosa scrivere come valore inziale nel button (uso operatore ternario cioè abbreviazione dell'if)
button.innerText = !lampFlag ? "Accendi" : "Spegni";
//qui tramite la funzione addeventlistener, al click facciamo partire una funzione che fa accedndere e spegnere la lampadina
button.addEventListener("click", function () {
  //controlliamo se la "lampadina è accesa"
  if (lampFlag) {
    //se lampadina è accesa, al click
    lampFlag = false; //allora la spegniamo
    lamp.src = "./img/white_lamp.png"; //cambiamo immagine mettendo quella spenta
    button.innerText = "Accendi"; //cambiamo la scritta del bottone in "Accendi"
  } else {
    // altriementi se è spenta, al click
    lampFlag = true; //la accendiamo
    lamp.src = "./img/yellow_lamp.png"; //cambiamo immagine mettendo quella accesa
    button.innerText = "Spegni"; //cambiamo la scritta del bottone in "Spegni"
  }
});
// function changeImgg(flag){
//     if(flag===true){
//         lamp.src="../img/yellow_lamp.png";
//         console.log("sono nel ramo: 1");
//         flag = false;

// }else{
//         lamp.src="../img/white_lamp.png";
//         console.log("sono nel ramo: 2");
//         flag =true;

// }
// return flag;
// }
// function changeButtonn(flag){
//     if(flag===true){
//         button.innerText = "spegni";
//         console.log("sono nel ramo: 3");
//         flag = false;

// }else{
//         button.innerText = "accendi";
//         console.log("sono nel ramo: 4");
//         flag =true;

// }
// return flag;
// }


// function changeImg() {
// if (lamp.src === "http://127.0.0.1:5501/img/yellow_lamp.png") {
// lamp.src = "../img/white_lamp.png";
// } else {
// lamp.src = "../img/yellow_lamp.png";
// }
// }
// function changeButton() {
// if (button.textContent === "accendi") {
// button.innerText = "spegni";
// } else {
// button.innerText = "accendi";
// }
// }