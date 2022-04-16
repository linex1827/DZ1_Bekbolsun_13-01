// console.log(document)

const blocks = document.getElementsByClassName('block');
// console.log(blocks)

const block3 = document.getElementById('block3')
// console.log(block3.classList)
// block3.className = "changedClass"
// console.log(block3.classList)
// block3.classList.add("changedClass")
// block3.classList.remove("newClass")
// console.log(block3.classList)

// block3.onclick = () => {
//     block3.classList.toggle("active")
// }

// const block = document.querySelector('.block')
//
// const blocks1 = document.querySelectorAll('.block')
// console.log(blocks1)

const button = document.getElementById('button')
const input = document.getElementById('input')

button.onclick = () => {
    const div = document.createElement('div')
    const deleteButton = document.createElement('button')
    deleteButton.innerText = "delete";
    
    div.setAttribute("class", 'block');
    div.innerText = input.value
    document.body.append(div)
    input.value = "";
}