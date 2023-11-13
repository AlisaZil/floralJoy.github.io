window.addEventListener("load", (event) => {
    addHighetToSection();
    buildNavBar();
    arrangeBestSellerSection();
});

const navBarValues = [
    {
        name:'MAIN',
        section:'main-section'
    },
    {
        name:'BEST SELLERS',
        section:'main-section'
    },
    {
        name:'ABOUT US',
        section:'main-section'
    },
    {
        name:'CONTACT US',
        section:'main-section'
    }
];

const bestSellerValues = [
    {
        name: 'Bouquet 01',
        description: 'simple, sunny',
        imgUrl: "Bouquet-1",
        price: "35"
    },
    {
        name: 'Bouquet 04',
        description: 'romantic, pleasant',
        imgUrl: "Bouquet-2",
        price: "50"
    },
    {
        name: 'Bouquet 07',
        description: 'young, pure',
        imgUrl: "Bouquet-3",
        price: "68"
    }
]

const navBar = document.querySelector('.nav-bar');
const bestSellerFrame = document.querySelector('.best-sellers-frame');

let isNavBarOpen = false;

function addHighetToSection(){
    const mainSection = document.querySelector('.main-section');
    const bestSellersSection = document.querySelector('.best-sellers-section');
    
    mainSection.style.height = window.innerHeight;
    bestSellersSection.style.height = window.innerHeight;
}

function buildNavBar(){

    navBarValues.forEach((element) =>{
        const navButton = document.createElement('p');
        navButton.innerText = element.name;
        navButton.classList.add('nav-bar-button');
        navBar.appendChild(navButton);
    })
}

function openNavBar() {
    
    isNavBarOpen = true;

    if(isNavBarOpen){
        
        navBar.style.right = 0;
    }
}

function arrangeBestSellerSection() {


    bestSellerValues.forEach((element) => {
        
        const product = document.createElement('div');
        product.classList.add('product');

        const productImgFrame = document.createElement('div');
        productImgFrame.classList.add('product-frame');
        const productImg = document.createElement('img');
        productImg.src = `./assets/images/${element.imgUrl}.png`;

        const productDesc = document.createElement('div');
        productDesc.classList.add('product-desc');

        const productButton = document.createElement('div');
        productButton.classList.add('button');
        const productButtonContext = document.createElement('p');
        productButtonContext.innerText = element.name;

        const productPrice = document.createElement('p');
        productPrice.classList.add('price')
        productPrice.innerText = element.price + '$';


        productImgFrame.appendChild(productImg);
        productDesc.appendChild(productButton);
        productDesc.appendChild(productPrice);
        productButton.appendChild(productButtonContext);

        product.appendChild(productImgFrame);
        product.appendChild(productDesc);

        bestSellerFrame.appendChild(product);
    });

}


document.addEventListener('click', (e) => {

    detectNavBarClickOutside(e);
});

function detectNavBarClickOutside(e) {
    let targetEl = e.target; // clicked element
    
    if (targetEl == navBar) {
        console.log('click oin');
        
    }

    else if (navBar.style.right !== '-250px') {
        
        console.log("click out");
    }
}