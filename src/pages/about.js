const createAbout = function() {
    const about = document.createElement('div')
    about.id = 'about'

    const aboutTitle = document.createElement('h2')
    aboutTitle.innerText = 'About'

    const contactTitle = document.createElement('h3')
    contactTitle.innerText = 'Contact Us'

    const contactInfo = document.createElement('div')
    contactInfo.id = 'contact-section'
    contactInfo.appendChild(createImage('phone', 'svg', 'contact-image'))
    contactInfo.appendChild(createParagraph('(123) 456-7890'))
    contactInfo.appendChild(createImage('address', 'svg', 'contact-image'))
    contactInfo.appendChild(createParagraph('P Sherman 42 Wallaby Way, Syndey, Australia'))

    about.appendChild(aboutTitle)
    about.appendChild(createParagraph('Our quest for global pizza domination is well under way. Join us, or be turned into pizza.'))
    about.appendChild(contactTitle)
    about.appendChild(contactInfo)
    about.appendChild(createImage('map-location', 'jpg', 'map-image'))

    return about;
}

const createParagraph = function(text) {
    const paragraph = document.createElement('p')
    paragraph.textContent = text;
    return paragraph
}

const createImage = function(name, type, className) {
    const image = document.createElement('img')
    image.src = `/src/images/${name.toLowerCase()}.${type}`
    image.classList.add(`${className}`)
    return image
}

const loadAbout = function() {
    const main = document.getElementById('main')
    main.innerHTML = ''
    main.appendChild(createAbout())
}

export default loadAbout;