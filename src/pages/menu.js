const createMenu = function() {
    const menu = document.createElement('div')
    menu.id = 'menu'

    const menuTitle = document.createElement('h2')
    menuTitle.innerText = 'Menu'

    const menuArea = document.createElement('div')
    menuArea.id = 'menu-area'

    menuArea.appendChild(
        createMenuItem(
            'Delicioso',
            'Tomato sauce, Mozzarella, Tomato, Pepperoni, Onion, Corn, Peppers, Basil'
        )
    )
    menuArea.appendChild(
        createMenuItem(
            'Especialoso',
            'Tomato sauce, Mozzarella, Tomato, Salami, Onion, Olives, Parsley'
        )
    )
    menuArea.appendChild(
        createMenuItem(
            'Pepperoni',
            'Tomato sauce, Mozzarella, Pepperoni, Parsley'
        )
    )
    menuArea.appendChild(
        createMenuItem(
            'Salamishroomo',
            'Tomato sauce, Mozzarella, Tomato, Salami, Mushroom, Olives, Peppers'
        )
    )
    menuArea.appendChild(
        createMenuItem(
            'Tomatagheti',
            'Tomato sauce, Mozzarella, Tomato, Garlic, Onion, Parsley'
        )
    )
    menuArea.appendChild(
        createMenuItem(
            'Vegetariano',
            'Tomato sauce, Mozzarella, Mushroom, Olives, Basil'
        )
    )

    menu.appendChild(menuTitle)
    menu.appendChild(menuArea)
    
    return menu;
}

const createMenuItem = function(name, description) {
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu-item')

    const foodName = document.createElement('h2')
    foodName.textContent = name

    const foodDescription = document.createElement('p')
    foodDescription.textContent = description

    const foodImage = document.createElement('img')
    foodImage.src = `images/pizzas/${name.toLowerCase()}.png`
    foodImage.alt = `${name}`

    menuItem.appendChild(foodImage)
    menuItem.appendChild(foodName)
    menuItem.appendChild(foodDescription)

    return menuItem
}

const loadMenu = function() {
    const main = document.getElementById('main')
    main.innerHTML = ''
    main.appendChild(createMenu())
}

export default loadMenu;