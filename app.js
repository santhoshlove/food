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

let products = [
    {
        id: 1,
        name: 'Idil [3 Pieces]',
        image: '1.PNG',
        price: 60 
    },
    {
        id: 2,
        name: 'Plain Dosa 1',
        image: '2.PNG',
        price: 70
    },
    {
        id: 3,
        name: 'Poori 3',
        image: '3.PNG',
        price: 65
    },
    {
        id: 4,
        name: 'Burotta 1',
        image: '4.PNG',
        price: 25
    },
    {
        id: 5,
        name: 'Gobi Manchurian',
        image: '5.PNG',
        price: 200
    },
    {
        id: 6,
        name: 'Full Meals',
        image: '6.PNG',
        price: 120
    },
    {
        id: 7,
        name: 'Paneer Butter Masala',
        image: '7.PNG',
        price: 220
    },
    {
        id: 8,
        name: 'Plain Dhosa',
        image: '8.PNG',
        price: 70
    },
    {
        id: 9,
        name: 'fried-rice',
        image: '9.PNG',
        price: 100
    },
    {
        id: 10,
        name: 'veggie noodle',
        image: '10.PNG',
        price: 120
    },
    {
        id: 11,
        name: 'Non veg noodle',
        image: '11.PNG',
        price: 140
    },
    {
        id: 12,
        name: 'Mushroom noodle',
        image: '12.PNG',
        price: 200
    },
    {
        id: 13,
        name: 'Chicken soup',
        image: '13.PNG',
        price: 120
    },
    {
        id: 14,
        name: 'veg soup',
        image: '14.PNG',
        price: 300
    },
    {
        id: 15,
        name: 'Chili soup',
        image: '15.PNG',
        price: 180
    },
    {
        id: 16,
        name: 'Green-salad',
        image: '16.PNG',
        price: 220
    },
    {
        id: 17,
        name: 'Green-salad',
        image: '17.PNG',
        price: 140
    },
    {
        id: 18,
        name: 'veg-Salad',
        image: '18.PNG',
        price: 320
    },
    {
        id: 19,
        name: 'MC-Chopped-Salad',
        image: '19.PNG',
        price: 180
    },
    {
        id: 20,
        name: 'Oreo-Cheesecake',
        image: '20.PNG',
        price: 220
    },
    {
        id: 21,
        name: 'Strawberry-Poke-Cake',
        image: '21.PNG',
        price: 123
    },
    {
        id: 22,
        name: 'chicken 65',
        image: '22.PNG',
        price: 320
    }
    ,
    {
        id: 23,
        name: 'Grilled chicken',
        image: '23.PNG',
        price: 200
    },
    {
        id: 24,
        name: 'Non Veg Meal Full',
        image: '24.PNG',
        price: 320
    }
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
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
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
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