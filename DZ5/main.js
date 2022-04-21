const not = prompt("Выберите цвет? RED,YELLOW,GREEN")


switch (not) {

    case "RED":
    const RED = document.querySelector('.block');
    RED.style.backgroundColor = "red";
    RED.innerHTML = 'STOOP';
    RED.style.display = "flex";
    RED.style.alignItems = "center";
    RED.style.justifyContent = "center";
    RED.style.fontSize = "25px";
    break;

    case "YELLOW":
    const yellow = document.querySelector('.block2');
    yellow.style.backgroundColor = "yellow";
    yellow.innerHTML = 'WAIT';
    yellow.style.display = "flex";
    yellow.style.alignItems = "center";
    yellow.style.justifyContent = "center";
    yellow.style.fontSize = "25px";
    break;

    case "GREEN":
    const green = document.querySelector('.block3');
    green.style.backgroundColor = "green";
    green.innerHTML = 'GO';
    green.style.display = "flex";
    green.style.alignItems = "center";
    green.style.justifyContent = "center";
    green.style.fontSize = "25px";
    break;

    default: alert("ERROR");

    
}

