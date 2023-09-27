import "./style.css"

const content = document.getElementById('content')

// HEADER
const header = document.createElement('div')
    header.classList.add('header')
const headerText = document.createElement('h1')
    headerText.textContent = 'Restaurant Page'
const navBar = document.createElement('div')
    navBar.classList.add('nav-bar')

function createNavButton(name) {
    const btn = document.createElement('button')
    btn.classList.add('nav-button')
    btn.appendChild(document.createTextNode(name))
    return btn
}

const navButtons = [
    createNavButton('Home'),
    createNavButton('Menu'),
    createNavButton('About')
];

const docFrag = document.createDocumentFragment();
for (let i = 0; i < navButtons.length; i++) {
    docFrag.appendChild(navButtons[i])
}

header.appendChild(headerText)
header.appendChild(navBar)
navBar.appendChild(docFrag)
content.appendChild(header)

// MAIN CONTENT
const mainContent = document.createElement('div')
    mainContent.classList.add('main-content')
mainContent.textContent = 'main content here'

content.appendChild(mainContent)