let t1 = document.getElementById("t1"); // <h1 id="t1">Marvel</h1>
t1.addEventListener("mouseenter", function(){
    t1.style.fontSize = "60px";
})
t1.addEventListener("mouseleave", function(){
    t1.style.fontSize = "";
})

let hDiv = document.getElementsByClassName("hero-div");
// [<div class="hero-div">, <div class="hero-div">, <div class="hero-div">, <div class="hero-div">]

for (let ele=0; ele<hDiv.length; ele++){
    let tag = hDiv[ele]; //<div class="hero-div">
    tag.addEventListener("mouseenter", function(){
        tag.style.backgroundColor = "rgba(240, 248, 255, 0.253)";
        tag.style.boxShadow = "1px 1px 10px aliceblue";
    })

    tag.addEventListener("mouseleave", function(){
        tag.style.backgroundColor = "";
        tag.style.boxShadow = "";
    })
}


let f1 = document.getElementById("f1"); //<p id="f1">Click On name to view images</p>

f1.addEventListener("mouseenter", function(){
    f1.style.textDecoration = "underline";
})

f1.addEventListener("mouseleave", function(){
    f1.style.textDecoration = "";
})