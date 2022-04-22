const not = prompt("Выберите цвет? RED,YELLOW,GREEN")


switch (not) {
    

    case "RED":
    const RED = document.querySelector('.block');
    RED.style.backgroundColor = "red";
    console.log("STOP")
    RED.innerHTML = 'STOOP';
    RED.style.display = "flex";
    RED.style.alignItems = "center";
    RED.style.justifyContent = "center";
    RED.style.fontSize = "25px";
    break;

    case "YELLOW":
    const yellow = document.querySelector('.block2');
    yellow.style.backgroundColor = "yellow";
    console.log("WAIT")
    yellow.innerHTML = 'WAIT';
    yellow.style.display = "flex";
    yellow.style.alignItems = "center";
    yellow.style.justifyContent = "center";
    yellow.style.fontSize = "25px";
    break;

    case "GREEN":
    const green = document.querySelector('.block3');
    green.style.backgroundColor = "green";
    console.log("GO")
    green.innerHTML = 'GO';
    green.style.display = "flex";
    green.style.alignItems = "center";
    green.style.justifyContent = "center";
    green.style.fontSize = "25px";
    break;

    default: alert("ERROR");

    
}

