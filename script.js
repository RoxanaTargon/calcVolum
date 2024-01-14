let btn = document.getElementById("btn");
function change(){
    btn.innerHTML = "Ooops";
    btn.style.color = "red";
}

document.getElementById("btn").addEventListener("click", change)