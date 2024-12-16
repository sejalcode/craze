let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

function onMenuClick() {
    var navbar = document.getElementById("navigation-bar");
    var responsive_class_name = "responsive";

    navbar.classList.toggle(responsive_class_name);
}
let products = [
    {
        id: 1,
        name: 'Classic Crewneck T-Shirt',
        image: '1.jpg',
        price: 80000
    },
    {
        id: 2,
        name: 'Wide-Legged Jeans',
        image: '2.jpeg',
        price: 120000
    },
    {
        id: 3,
        name: 'Classic Bomber Jacket',
        image: '3.jpg',
        price: 150000
    },
    {
        id: 4,
        name: 'Chunky Knit Sweater',
        image: '4.jpg',
        price: 75000
    },
    {
        id: 5,
        name: 'Cozy Pajama Set',
        image: '5.jpg',
        price: 45000
    },
    {
        id: 6,
        name: 'Leather Crossbody Bag',
        image: '6.jpg',
        price: 180000
    }
];
let listCards  = [];



function addToCard(key){
    if(listCards[key] == null){

        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}" alt="${value.name}" /></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
             <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
             </div>`;
         listCard.appendChild(newDiv);
        }
     
        console.log(`Image path: ${value.image}`);
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}