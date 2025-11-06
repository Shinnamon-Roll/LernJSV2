let count = 0;
let fruit = ["banana"]


document.getElementById("btn").onclick = function() {
    // document.getElementById("title").textContent = "Hello Isus yes mae";
    // count = count + 1
    // console.log(`Click ${count}`)
    // if (count === 5) {
    //     console.log("E dog");
    //     callMae("Shinnamon")
    //     count = 0;
    // }

    console.log(fruit)
};

document.getElementById("btnAdd").onclick = function() {
    fruit.push("apple")
    console.log(fruit)
}

document.getElementById("btnPop").onclick = function() {
    fruit.pop("banana")
    console.log(fruit)
}
const callMae = (name) => {
    alert(`${name} Mae mung mah!!!!`)
}