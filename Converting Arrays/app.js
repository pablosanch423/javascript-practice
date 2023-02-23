const arr1body = document.getElementById('arr1');
const arr2body = document.getElementById('arr2');

let arr1 = ['Hello', 'World', 'This', 'Is'];
let arr2 = ['hello', 'world', 'this', 'is']

arr1body.innerHTML = arr1.join(" ")
arr2body.innerHTML = arr2.join(" ")


document.getElementById('lower').addEventListener('click', () =>{
    const lower = arr1.map(word => word.toLowerCase());
    arr1body.innerHTML = lower.join(" ")
})

document.getElementById('upper').addEventListener('click', () =>{
    const upper = arr1.map(word => word.toUpperCase());
    arr2body.innerHTML = upper.join(" ")
})




