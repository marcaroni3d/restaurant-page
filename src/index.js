// Entry Point for website

import "./style.css";
import init from "./init";
import loadHome from "./pages/home";
import loadMenu from "./pages/menu";
import loadAbout from "./pages/about";

init()

const navButtons = document.querySelectorAll('.nav-button')

navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let target = e.target.innerText

        if (target === 'HOME') {
            loadHome()
        }
        if (target === 'MENU') {
            loadMenu()
        }
        if (target === 'ABOUT') {
            loadAbout()
        }
    })
})