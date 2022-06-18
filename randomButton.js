function randomizer() {
    const collection = document.getElementsByTagName("button");
    let aux = 1 + Math.floor(Math.random() * (collection.length - 1));
    for (let i = 0; i < collection.length - 1; ++i) {
        collection[i].onclick = function() {
            if (this.innerHTML == aux) {
                document.getElementById("winner").innerHTML = "Winner!";
            } else {
                document.getElementById("winner").innerHTML = "You lost :(";
            }
            for (let j = 0; j < collection.length - 1; ++j) {
                collection[j].style.display = "none";
            }
            document.getElementById("reveal").hidden = false;
        };
    }
}
console.log("test");
window.onload = randomizer();

document.getElementsByClassName("retry")[0].onclick = function() {    
    const parent = document.getElementById("btn_parent");
    parent.innerHTML = "";
    let number_of_buttons = document.getElementsByTagName("input")[0].value;
    for (let i = 0; i < number_of_buttons; ++i) {
        const btn = document.createElement("button");
        btn.textContent = i + 1;
        parent.appendChild(btn);
    }
    randomizer();
    document.getElementById("reveal").hidden = true;
    document.getElementById("winner").innerHTML = "Choose a button";
}