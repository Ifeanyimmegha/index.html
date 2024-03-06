//alert("My History");
//const product = [
   // {
     //   Id: 0,
    //  image: 'image/IMG-4.jpg',
    //title: 'z Flip Foldable Mobile',
      //  price: 120,
    //},
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
var history = [];
if (history.length == 0) {
    document.getElementById('text').innerText = "Nothing Here"
} else {
    document.getElementById('text').innerText = history.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class="history2" id="history2">
    <div class="img-box">
    <img src=${image} alt="">
    <div id="text">
        <div class="title">${title}</div>
        <div class="price">$ ${price}</div>
    </div>
</div>
<div class="xmark">
   <i class="fa fa-xmark" id="menu-icons"></i>
</div>
</div>`
        );
    }).join('');
 }


document.write(history)





//rough
var history = new history;
history = "hello world"
