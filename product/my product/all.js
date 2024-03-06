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
    {
        Id: 0,
        image: 'image/IMG-4.jpg',
        title: 'Machine',
        price: 120,
    },
    {
        Id: 1,
        image: 'image/IMG-2.png',
        title: 'Ziplock Bag',
        price: 140,
    },

    {
        Id: 2,
        image: 'image/lyns-img.jpg',
        title: 'Perfume Container',
        price: 160,
    },

    {
        Id: 3,
        image: 'image/IMG-1.png',
        title: 'Juice Container',
        price: 120,
    },
    {
        Id: 4,
        image: 'image/IMG-1.png',
        title: 'LipBam Container',
        price: 120,
    },
    {
        Id: 0,
        image: 'image/IMG-4.jpg',
        title: 'Spices Container',
        price: 120,
    },
    {
        Id: 1,
        image: 'image/IMG-2.png',
        title: 'Lotion Container',
        price: 140,
    },

    {
        Id: 2,
        image: 'image/lyns-img.jpg',
        title: 'Cream Container',
        price: 160,
    },

    {
        Id: 3,
        image: 'image/IMG-1.png',
        title: 'Vaseline Cups',
        price: 120,
    },
    {
        Id: 4,
        image: 'image/IMG-1.png',
        title: 'Ice-Cream Cups',
        price: 120,
    },
    {
        Id: 5,
        image: 'image/IMG-1.png',
        title: 'Hair-Cream Cups',
        price: 150,
    },
    {
        Id: 0,
        image: 'image/IMG-4.jpg',
        title: 'Machine',
        price: 120,
    },
    {
        Id: 1,
        image: 'image/IMG-2.png',
        title: 'Ziplock Bag',
        price: 140,
    },

    {
        Id: 2,
        image: 'image/lyns-img.jpg',
        title: 'Perfume Container',
        price: 160,
    },

    {
        Id: 3,
        image: 'image/IMG-1.png',
        title: 'Juice Container',
        price: 120,
    },
    {
        Id: 4,
        image: 'image/IMG-1.png',
        title: 'LipBam Container',
        price: 120,
    },
    {
        Id: 0,
        image: 'image/IMG-4.jpg',
        title: 'Spices Container',
        price: 120,
    },
    {
        Id: 1,
        image: 'image/IMG-2.png',
        title: 'Lotion Container',
        price: 140,
    },

    {
        Id: 2,
        image: 'image/lyns-img.jpg',
        title: 'Cream Container',
        price: 160,
    },

    {
        Id: 3,
        image: 'image/IMG-1.png',
        title: 'Vaseline Cups',
        price: 120,
    },
    {
        Id: 4,
        image: 'image/IMG-1.png',
        title: 'Ice-Cream Cups',
        price: 120,
    },
    {
        Id: 5,
        image: 'image/IMG-1.png',
        title: 'Hair-Cream Cups',
        price: 150,
    }
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
        `</div>
        </div>
        </div>`

    )
}).join('')