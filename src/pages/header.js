import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

const createHeader = function() {
    const header = document.createElement('div')
    header.id = 'header'
    const headerText = document.createElement('h1')
    headerText.textContent = 'Pizza Magnifique'
    const navBar = createNavBar()

    header.appendChild(headerText)
    header.appendChild(navBar)

    return header;
};

const createNavBar = function() {
    const navBar = document.createElement('div')
    navBar.classList.add('nav-bar')

    const homeButton = document.createElement('button')
    homeButton.classList.add('nav-button', 'active')
    homeButton.textContent = 'HOME'
    homeButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return
        setActiveButton(homeButton)
        loadHome()
    })

    const menuButton = document.createElement('button')
    menuButton.classList.add('nav-button')
    menuButton.textContent = 'MENU'
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return
        setActiveButton(menuButton)
        loadMenu()
    })

    const aboutButton = document.createElement('button')
    aboutButton.classList.add('nav-button')
    aboutButton.textContent = 'ABOUT'
    aboutButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return
        setActiveButton(aboutButton)
        loadAbout()
    })

    navBar.appendChild(homeButton)
    navBar.appendChild(menuButton)
    navBar.appendChild(aboutButton)

    return navBar;
}

const setActiveButton = function(button) {
    const buttons = document.querySelectorAll('.nav-button')

    buttons.forEach((button) => {
        button.classList.remove('active')
    })
    
    button.classList.add('active')
}

export default createHeader;