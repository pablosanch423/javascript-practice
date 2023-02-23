const glendale = 
    {
        length: 4,
        0: "partly cloudy",
        1: "46 C",
        2: "West-Gate",
        3: ['cardinals', 'suns', 'coyotes', 'dbacks'],
    }


const typediv = document.getElementById('type');
const weatherdiv = document.getElementById('weather');

typediv.innerHTML = glendale[0];
weatherdiv.innerHTML = glendale[1];

const infodiv = document.getElementById('info');

let i = 0;

document.getElementById('btn').addEventListener('click', ()=>{
    if(i == 3){
        i = 0
    }
    i++
    let arr = Array.prototype.slice.call(glendale, i, 4)
    infodiv.innerHTML = arr[0]
})