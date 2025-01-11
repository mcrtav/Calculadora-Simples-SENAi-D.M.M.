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


function sub() {
    var result =
        Number(document.getElementById("firstNo").value) -
        Number(document.getElementById("secondNo").value);
    console.log(result);
    document.querySelector("#result").value = result
}



function mult() {
    var result =
        Number(document.getElementById("firstNo").value) *
        Number(document.getElementById("secondNo").value);
    console.log(result);
    document.querySelector("#result").value = result
}


function div() {


    var result
       var n1= Number(document.getElementById("firstNo").value) ;
       var n2 = Number(document.getElementById("secondNo").value);
       result= n1/n2
    if (secondNo === 0){
        document.querySelector("#result").value = "Error div 0"

    }else{
        document.querySelector("#result").value = result
    }
        console.log(result);
   
}