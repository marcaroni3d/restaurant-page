const createHome = function() {
    const home = document.createElement('div')
    home.id = 'home'

    const chefImage = document.createElement('img')
    chefImage.src = '/src/images/pizza-chef.jpg'
    chefImage.alt = 'Cheffery Pizza'
    chefImage.classList.add('pizza-chef-image')
    
    home.appendChild(createParagraph('The future of pizza is now'))
    home.appendChild(createParagraph("The best pizza on the planet, or my name's not Cheffery Pizza!"))
    home.appendChild(chefImage)
    home.appendChild(createParagraph('Order online or visit us'))

    return home;
};

const createParagraph = function(text) {
    const paragraph = document.createElement('p')
    paragraph.textContent = text;
    return paragraph
}

const loadHome = function() {
    const main = document.getElementById('main')
    main.innerHTML = ''
    main.appendChild(createHome())
}

export default loadHome;