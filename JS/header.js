     
    const headerCSS = '<link rel="stylesheet" href="/CSS/header.css">';

    function loadheaderCSS(code){
        const headLink = document.getElementsByTagName('head');

        for(let i = 0; i < headLink.length; i++){
            headLink[i].innerHTML += code;
        }
    }

    loadheaderCSS(headerCSS);


    const headerHTML = document.getElementById('header');

    headerHTML.innerHTML = 
    `   
        <nav class="nav">
            <ul class="nav__header">
                <li class="nav__item"><a href="/HTML/index.html" class="nav__home">home</a></li>
                <li class="nav__item"><a href="/HTML/recipes.html" class="nav__recipes">recipes</a></li>
                <li class="nav__item"><a href="/HTML/builds.html" class="nav__builds">builds</a></li>
                <li class="nav__item"><a href="/HTML/contact.html" class="nav__contacts">contact</a></li>
            </ul>
        </nav>
    `;

    // Path: /JS/header.js
    // Must have: <header id="header"></header> in the body of the HTML file