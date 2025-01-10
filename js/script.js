function add() {
    var result =
        Number(document.getElementById("firstNo").value) +
        Number(document.getElementById("secondNo").value);
    console.log(result);
    document.querySelector("#result").value = result
}

function sub() {
    var result =
        Number(document.getElementById("firstNo").value) -
        Number(document.getElementById("secondNo").value);
    console.log(result);
    document.querySelector("#result").value = result
}