const createFooter = function() {
    const footer = document.createElement('div')
    footer.id = 'footer'

    const footerText = document.createElement('p')
    footerText.textContent = 'Created by Marcaroni3d'

    const githubLink = document.createElement('a')
    githubLink.href = 'https://github.com/marcaroni3d'
    githubLink.target = '_blank'

    const githubImage = new Image()
    githubImage.src = '/src/images/github-mark-white.svg'
    githubImage.alt = 'github'
    githubImage.classList.add('github-img')

    githubLink.appendChild(githubImage)

    footer.appendChild(footerText)
    footer.appendChild(githubLink)

    return footer;
}


export default createFooter;