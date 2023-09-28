function createAbout() {
    const about = document.createElement('about')
        about.id = 'about'
    about.textContent = 'about content here'

    return about
}

function loadAbout() {
    const main = document.getElementById('main')
    main.innerHTML = ''
    main.appendChild(createAbout())
}

export default loadAbout;