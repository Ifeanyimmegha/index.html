 const openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.closeShopping');
const list = document.querySelector('.list')
const listCard = document.querySelector('.listCard')
const total = document.querySelector('.total')
const body = document.querySelector('body')
const quantity = document.querySelector('.quantity')


openShopping.addEventListener("click", () =>{
    body.classList.add("active")
});
closeShopping.addEventListener("click", () =>{
    body.classList.add("active")
});

let product = [
    {
        Id: 0,
        image: 'image/IMG-4.jpg',
        title: 'z Flip Foldable Mobile',
        price: 120,
    },
    {
        Id: 1,
        image: 'image/IMG-4.jpg',
        title: 'machine',
        price: 140,
    },

    {
        Id: 2,
        image: 'image/lyns-img.jpg',
        title: 'z Flip Foldable Mobile',
        price: 160,
    },

    {
        Id: 3,
        image: 'image/IMG-1.png',
        title: 'container',
        price: 120,
    },
    {
        Id: 4,
        image: 'image/IMG-1.png',
        title: 'container',
        price: 120,
    },
    {
        Id: 0,
        image: 'image/IMG-4.jpg',
        title: 'z Flip Foldable Mobile',
        price: 120,
    },
    {
        Id: 1,
        image: 'image/IMG-2.png',
        title: 'machine',
        price: 140,
    },

    {
        Id: 2,
        image: 'image/lyns-img.jpg',
        title: 'z Flip Foldable Mobile',
        price: 160,
    },

    {
        Id: 3,
        image: 'image/IMG-1.png',
        title: 'container',
        price: 120,
    },
    {
        Id: 4,
        image: 'image/IMG-1.png',
        title: 'container',
        price: 120,
    },
];

let listCards = [];

const iniApp = () =>{
    product.forEach((value, key) =>{
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML=
        `<img src="${value, image}">
        <div class="title">${value, title}</div>
        <div class="price">${value, price.toLocalString()}
        </div>
        <button onclick="addtoCard(${i++})"Add to Card
        </button>
        `
        list.appendChild(newDiv)
    })
}
iniApp()