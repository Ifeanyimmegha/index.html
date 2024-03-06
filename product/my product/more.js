const product = [
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
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box-cart' id="container">
        <div class='product'>
                <div class='img-box'>
                <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                <div class='star-form'>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                </div>
                <h2>${title}</h2>
                <h3>$ ${price}.00</h3>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>
        </div>`

    )
}).join('')

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}
function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}
function displaycart(a) {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.lenght == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$" + 0 + ".00";
    }
    else {
        document.getElementById('cartItem').innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$" + total + ".00";
            return (
                `<body>
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                        </div>
                        <h2 style='font-size:15px;'>${title}</h2>
                        <h3 style='font-size:15px;'>$ ${price}.00</h3>` +
                "<i class='fa-solid fa-trash' onclick= 'delElement(" + (j++) + ")'></i></div></body>"
            );
        }); join('');
    }
}