import createHeader from "./pages/header";
import loadHome from "./pages/home";

function createMain() {
    const main = document.createElement('main')
    main.id = 'main'
    return main
}

function init() {
    const content = document.getElementById('content')

    content.appendChild(createHeader())
    content.appendChild(createMain())

    loadHome()
}

export default init;