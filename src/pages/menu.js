function createMenu() {
    const menu = document.createElement('div')
        menu.id = 'menu'
    menu.textContent = 'menu content here'

    return menu
}

function loadMenu() {
    const main = document.getElementById('main')
    main.innerHTML = ''
    main.appendChild(createMenu())
}

export default loadMenu;