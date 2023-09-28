const createHeader = function() {
    const header = document.createElement('div')
        header.id = 'header'
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

    return header;
};

export default createHeader;