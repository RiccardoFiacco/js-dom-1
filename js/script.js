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
const lampFlag = false;

//in base al flag scelgo cosa scrivere come valore inziale nel button (uso operatore ternario cioè abbreviazione dell'if)
button.innerText = (!lampFlag) ? "Accendi" : "Spegni"; 
//
button.addEventListener('click',function(){})


