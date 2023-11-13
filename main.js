window.addEventListener("load", (event) => {
    addHighetToMainSection();
    buildNavBar();
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

const navBar = document.querySelector('.nav-bar');

let isNavBarOpen = false;

function addHighetToMainSection(){
    const mainSection = document.querySelector('.main-section');
    mainSection.style.height = window.innerHeight;
}

function buildNavBar(){

    navBarValues.forEach((element) =>{
        const navButton = document.createElement('p');
        navButton.innerText = element.name;
        navButton.classList.add('nav-bar-button');
        navBar.appendChild(navButton);
    })
}

function openNavBar(){

    // const navBarButton = document.querySelector('.open-nav-bar');
    const navBarButtonBars = document.querySelector('.open-nav-bar .bars-icon');
    isNavBarOpen = true;

    if(isNavBarOpen){
        navBarButtonBars.style.fill = 'white';

        navBar.style.right = 0;
    }
    
}