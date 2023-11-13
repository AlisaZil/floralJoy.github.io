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
const openNavBarButton = document.querySelector('.open-nav-bar');
const openNavBarButtonContext = document.querySelector('.open-nav-bar p');
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
    
    isNavBarOpen = !isNavBarOpen;

    if (isNavBarOpen) {
        
        openNavBarButtonContext.style.display = 'none';
        openNavBarButton.classList.add('light-button');
        navBar.style.right = 0;
    } else {

        setTimeout(() => { 
            openNavBarButtonContext.style.display = 'block';
            openNavBarButton.classList.remove('light-button');
        }, 300);
        
        navBar.style.right = -250;
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

        const descriptionBox = document.createElement('div');
        descriptionBox.classList.add('desc-box');
        const descriptionText = document.createElement('p');
        descriptionText.innerText = element.description;

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

        descriptionBox.appendChild(descriptionText);

        productImgFrame.appendChild(descriptionBox);

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


document.addEventListener("scroll", () => {
    
    isNavBarBattonInBestSellers();
});

function isNavBarBattonInBestSellers() {
    const domRect1 = document.querySelector('.about-us-section').getBoundingClientRect();
    const domRect2 = document.querySelector('.open-nav-bar').getBoundingClientRect();

    let isIn = !(
        domRect1.top > domRect2.bottom ||
        domRect1.right < domRect2.left ||
        domRect1.bottom < domRect2.top ||
        domRect1.left > domRect2.right
    );

    if (isIn) {
        openNavBarButton.classList.add('dark-button');
    } else {
        openNavBarButton.classList.remove('dark-button');
        
    }
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