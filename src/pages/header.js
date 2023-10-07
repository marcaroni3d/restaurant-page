const createHeader = function() {
    const header = document.createElement('div')
    header.id = 'header'
    const headerText = document.createElement('h1')
    headerText.textContent = 'Pizza Magnifique'
    const navBar = createNavBar('HOME', 'MENU', 'ABOUT')

    header.appendChild(headerText)
    header.appendChild(navBar)

    return header;
};

const createNavBar = function(...buttons) {
    const navBar = document.createElement('div')
    navBar.classList.add('nav-bar')

    function createNavButton(name) {
        const btn = document.createElement('button')
        btn.classList.add('nav-button')
        btn.appendChild(document.createTextNode(name))
        return btn
    }

    const docFrag = document.createDocumentFragment();
    for (let i = 0; i < buttons.length; i++) {
        docFrag.appendChild(createNavButton(buttons[i]))
    }

    navBar.appendChild(docFrag)

    return navBar;
}

export default createHeader;