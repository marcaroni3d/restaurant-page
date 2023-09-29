const createHome = function() {
    const home = document.createElement('div')
        home.id = 'home'
    home.textContent = 'home content here'

    return home;
};

const loadHome = function() {
    const main = document.getElementById('main')
    main.innerHTML = ''
    main.appendChild(createHome())
}

export default loadHome;