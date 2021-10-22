let divs = document.getElementsByTagName("div");
let container = document.getElementById("container");
let tab = ["red","blue","green","yellow"];
let count = -1;
let pos = () => {

    for(item in tab){
        divs[item].style.backgroundColor = `${tab[item]}`;
    }
    
}
let changeColor = () => {
    
    tab.push(tab.shift())
    console.log(tab)
    for(item in tab){
        divs[item].style.backgroundColor = `${tab[item]}`;
    }
}
container.addEventListener("click", changeColor);
pos();


