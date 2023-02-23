const product1btn = document.getElementById('p1');
const product2btn = document.getElementById('p2');
const product3btn = document.getElementById('p3');

const items = document.getElementById('items')
const itemsarr = []
let cart = []

product1 = [
    {
        name: 'Donut Holes',
        price: 6.99,
        image: './images/Glazed-Donut-Holes.jpg',
        id: 0,
    }
]

product2 = [
    {
        name: '1/2 Dozen Donuts',
        price: 12.99,
        image: './images/EZ6GdgUXYAEZ6OD.jpg',
        id: 0,
    }
]

product3 = [
    {
        name: 'Dozen Donuts',
        price: 15.99,
        image: './images/istockphoto-1155705840-612x612.jpg',
        id: 0,
    }
]

let id = -1

product1btn.addEventListener('click', () => {
    id = id + 1

    const parent = document.createElement('div');
    parent.classList = 'card w-75 m-3';
    parent.setAttribute('id', String(product1[0].id))


    const child = document.createElement('div');
    child.classList = 'card-body';

    const h5 = document.createElement('h5')
    h5.classList = 'card-title';
    h5.innerHTML = product1[0].name;


    const del = document.createElement('button');
    del.classList = 'btn btn-primary';
    del.setAttribute('onclick', 'del(this)');
    del.innerHTML = "delete"

    child.append(h5);
    child.append(del);
    parent.append(child);
    items.append(parent);

    cart.push(product1)
})

product2btn.addEventListener('click', () => {
    id = id + 1

    const parent = document.createElement('div');
    parent.classList = 'card w-75 m-3';
    parent.setAttribute('id', String(product2[0].id))


    const child = document.createElement('div');
    child.classList = 'card-body';

    const h5 = document.createElement('h5')
    h5.classList = 'card-title';
    h5.innerHTML = product2[0].name;

    const del = document.createElement('button');
    del.classList = 'btn btn-primary';
    del.setAttribute('onclick', 'del(this)');
    del.innerHTML = "delete"

    child.append(h5);
    child.append(del);
    parent.append(child);
    items.append(parent);
    cart.push(product2)

})

product3btn.addEventListener('click', () => {
    id = id + 1

    const parent = document.createElement('div');
    parent.classList = 'card w-75 m-3';
    parent.setAttribute('id', String(product3[0].id))


    const child = document.createElement('div');
    child.classList = 'card-body';

    const h5 = document.createElement('h5')
    h5.classList = 'card-title';
    h5.innerHTML = product3[0].name;

    const del = document.createElement('button');
    del.classList = 'btn btn-primary';
    del.setAttribute('onclick', 'del(this)');
    del.innerHTML = "delete"

    child.append(h5);
    child.append(del);
    parent.append(child);
    items.append(parent);
    cart.push(product3)

})

function del(a){
    const di = a.parentElement.parentElement.getAttribute('id');
    cart = cart.filter((e,i)=>{
        if(i != di){
          return e;
        }
    })
    a.parentElement.parentElement.remove()
}


