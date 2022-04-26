const name = prompt("Введите имя")
console.log(`hello ${name}` )

const mass1 = [1,2,3,4,5,6,"vfr"]
const mass2 = [1,2,3,4,5,6,,7,8,9]


if(mass1.length < mass2.length){
        console.log(`TRUE`)
    }
else{
        console.log(`FALSE`)
    }


const SV = prompt("Выберите цвет?")

switch (SV) {
    case 'red': alert('STOP')
        break;
    case 'yellow': alert("WAIT");
        break;
    case 'green': alert("go");
        break;

    default: alert("error");
        break;
}

// /////////////


for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log(`FizzBuzz`);
    }
     else if (i % 3 === 0) {
      console.log(`Fizz`);
    }
     else if (i % 5 === 0) {
      console.log(`Buzz`);
    }
     else {
      console.log(i);
    }
}

// ////////////////////////


function twoMass(num1, num2) {
    if(num1.length>num2.length){
        console.log(`FALSE`)
    }
    else if(length < length){
        console.log(`TRUE`)
    }
}

const num1 = [1,2,3,4,5,6,7,8]
const num2 = [1,2,3,4,5,6,7,8,9]

twoMass(num1,num2);


function nums(NUM1,NUM2){
    if(NUM1 > NUM2){
        console.log(`TRUE`)
    }
    else if(NUM1 < NUM2){
        console.log(`FALSE`)
    }
}

const NUM = {
    NUM1: 5,
    NUM2: 10
}

nums(NUM.NUM1,NUM.NUM2);

//////////////////////////////////////////

const Helio = [];

const addButton = document.getElementById('button');
const input = document.getElementById('input')

function render(){
    const mainBlock = document.createElement('div')
    mainBlock.setAttribute('class', 'list')

    for(let i = 0; i < Helio.length; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'todoBlock');
        
        const p = document.createElement('p');
        p.innerText = Helio[i].text;
        div.append(p);

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'actions');
        div.append(buttons);
        mainBlock.append(div);

    }
    const form = document.querySelector('.form');
    form.append(mainBlock)
    document.querySelector('.list').remove()

}



addButton.onclick = function () {
    const obj = {
        id: Helio.length+1,
        text: input.value
    }
    Helio.push(obj)
    console.log(Helio);
    render();
}


// /////////////////////////

const arr1 = [1,2,3,4,5,6,7];
const arr2 = [3,5,7,4,3,2];
const arr3 = [2343,44,342];
const arr4 = [3224,532,423];
const arr5 = ["323",344,'43431'];

const SP = [...arr1,arr2,arr3,arr4,arr5];
console.log(SP)

// ////////////////
const obj = {
    key: "fill",
    key2: "galko",
    key3: "falko",
    key4: "gena",
    key5: 343245
}

const objM = {...obj,key6:'fjjn',key7:'jurhue',key8:'njvnr'};
console.log(objM)