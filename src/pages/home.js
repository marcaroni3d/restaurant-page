function createHome() {
    const home = document.createElement('div')
        home.id = 'home'
    home.textContent = 'home content here'

    return home;
};

function loadHome() {
    const main = document.getElementById('main')
    main.innerHTML = ''
    main.appendChild(createHome())
}

export default loadHome;