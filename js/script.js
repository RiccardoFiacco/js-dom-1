const lamp = document.getElementById("lamp");
const button = document.getElementById("switch");
console.log(lamp, button);

button.addEventListener('click',function(){
    changeImg();
    changeButton();
})

    function changeImg(){
        if(lamp.src ==="http://127.0.0.1:5501/img/yellow_lamp.png"){
            lamp.src="../img/white_lamp.png";
        }else{
            lamp.src="../img/yellow_lamp.png";
        }
    }
    function changeButton(){
        if(button.textContent ==="accendi"){
            button.innerText = "spegni"; 
        }else{
            button.innerText = "accendi"; 
        }
    }

// button.addEventListener('click',function(){ 
//     let flag =true;
//     console.log("stato flag prima click "+flag)
//     changeImg(flag);
//     console.log("stato flag durante click "+flag)
//     flag = changeButton(flag);
//     console.log("stato flag dopo click "+flag)
// })

// function changeImg(flag){
//     if(flag===true){
//         lamp.src="../img/yellow_lamp.png";
//         console.log("sono nel ramo: 1");
//         flag = false;
//     }else{
//         lamp.src="../img/white_lamp.png";
//         console.log("sono nel ramo: 2");
//         flag =true;
//     }
//     return flag;
// }
// function changeButton(flag){
//     if(flag===true){
//         button.innerText = "spegni";
//         console.log("sono nel ramo: 3");
//         flag = false;
//     }else{
//         button.innerText = "accendi";
//         console.log("sono nel ramo: 4");
//         flag =true;
//     } 
//     return flag;
// }

