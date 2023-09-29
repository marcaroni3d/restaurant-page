const createAbout = function() {
    const about = document.createElement('about')
        about.id = 'about'
    about.textContent = 'about content here'

    return about;
}

const loadAbout = function() {
    const main = document.getElementById('main')
    main.innerHTML = ''
    main.appendChild(createAbout())
}

export default loadAbout;