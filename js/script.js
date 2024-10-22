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
button.innerText = (!lampFlag) ? "Accendi" : "Spegni"; 
//qui tramite la funzione addeventlistener, al click facciamo partire una funzione che fa accedndere e spegnere la lampadina
button.addEventListener('click',function(){
    //controlliamo se la "lampadina è accesa"
    if(lampFlag){//se lampadina è accesa, al click
        lampFlag = false; //allora la spegniamo
    }else{ // altriementi se è spenta, al click
        lampFlag = true; //la accendiamo
    }
    
})


