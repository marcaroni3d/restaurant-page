const createMenu = function() {
    const menu = document.createElement('div')
        menu.id = 'menu'
    menu.textContent = 'menu content here'

    return menu;
}

const loadMenu = function() {
    const main = document.getElementById('main')
    main.innerHTML = ''
    main.appendChild(createMenu())
}

export default loadMenu;