window.addEventListener("load", (event) => {
    addHighetToSection();
    buildNavBar();
    arrangeBestSellerSection();
    arrangeReviewRowSection();
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
];

const reviewRowValues = [
    {
        title: '267',
        desc: 'Bouquet sold last month'
    },
    {
        title: '4.2',
        desc: 'Stars in Tripadvisor'
    },
    {
        title: '508',
        desc: 'Positive Reviews'
    }
];

const navBar = document.querySelector('.nav-bar');
const bestSellerFrame = document.querySelector('.best-sellers-frame');

let isNavBarOpen = false;

function addHighetToSection(){
    const mainSection = document.querySelector('.main-section');
    const bestSellersSection = document.querySelector('.best-sellers-section');
    const aboutUsSection = document.querySelector('.about-us-section');
    const positiveReviewSection = document.querySelector('.positive-row-section');
    const infoSection = document.querySelector('.information-section');
    
    mainSection.style.height = window.innerHeight;
    bestSellersSection.style.height = window.innerHeight;
    aboutUsSection.style.height = window.innerHeight;
    positiveReviewSection.style.height = window.innerHeight / 4.5;
    infoSection.style.height = innerHeight;
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


    bestSellerValues.forEach((element, index) => {
        
        const product = document.createElement('div');
        product.classList.add('product');

        const productImgFrame = document.createElement('div');
        productImgFrame.classList.add('product-frame');
        const productImg = document.createElement('img');
        productImg.src = `./assets/images/${element.imgUrl}.svg`;

        const productDesc = document.createElement('div');
        productDesc.classList.add('product-desc');

        const productButton = document.createElement('div');
        productButton.classList.add('button');
        const productButtonContext = document.createElement('p');
        productButtonContext.innerText = element.name;

        const productPrice = document.createElement('p');
        productPrice.classList.add('price')
        productPrice.innerText = element.price + '$';

        if (index === 0 || index === (bestSellerValues.length - 1)) {
            const decorBox = document.createElement('div');
            decorBox.classList.add('decor-box');
            decorBox.classList.add(`b${index + 1}`);
            product.appendChild(decorBox);
        }

        if (index === 0) {
            const decorText = document.createElement('p');
            decorText.innerText = 'BOHO';
            decorText.classList.add('decor-text')
            product.appendChild(decorText);
        }


        productImgFrame.appendChild(productImg);
        productDesc.appendChild(productButton);
        productDesc.appendChild(productPrice);
        productButton.appendChild(productButtonContext);

        product.appendChild(productImgFrame);
        product.appendChild(productDesc);

        bestSellerFrame.appendChild(product);
    });

}

function arrangeReviewRowSection() {

    const positiveReviewSection = document.querySelector('.positive-row-section');

    reviewRowValues.forEach((element, index) => {
        
        const review = document.createElement('div');
        const title = document.createElement('p');
        const desc = document.createElement('p');

        review.classList.add('review');
        review.classList.add(`s${index + 1}`);

        title.classList.add('title');
        desc.classList.add('desc');

        title.innerText = element.title;
        desc.innerText = element.desc;

        review.appendChild(title);
        review.appendChild(desc);

        positiveReviewSection.appendChild(review);
    })
}


// document.addEventListener('click', (e) => {

//     detectNavBarClickOutside(e);
// });

// function detectNavBarClickOutside(e) {
//     let targetEl = e.target; // clicked element
    
//     if (targetEl == navBar) {
//         console.log('click oin');
        
//     }

//     else if (navBar.style.right !== '-250px') {
        
//         console.log("click out");
//     }
// }