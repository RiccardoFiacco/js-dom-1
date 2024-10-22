const lamp = document.getElementById("lamp");
const button = document.getElementById("switch");
console.log(lamp, button);

button.addEventListener('click',function(){
    lamp.src="../img/yellow_lamp.png";
    console.log("accesa")
})