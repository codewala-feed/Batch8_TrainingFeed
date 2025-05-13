let iTags = document.getElementsByTagName("input");

for (let i=0; i<iTags.length; i++){
    let element = iTags[i];
    element.addEventListener("focus", function(){
        element.style.boxShadow = "4px 4px 30px aliceblue";
        element.style.fontSize = "40px";
        element.style.transition = "0.5s";
        // element.style = "box-shadow: 4px 4px 30px aliceblue;font-size: 35px;transition: 0.5s;"
    })
    element.addEventListener("blur", function(){
        element.style.boxShadow = "";
        element.style.fontSize = "";
        element.style.transition = "0.5s";
    })
}