     
    const headerCSS = '<link rel="stylesheet" href="../CSS/header.css">';

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
                <li><a href="/HTML/contact.html" class="nav__item">contact</a></li>
                <li><a href="/HTML/add.html" class="nav__item">add</a></li>
                <li><a href="/HTML/recipes.html" class="nav__item"">recipes</a></li>
                <li><a href="/HTML/home.html" class="nav__item">home</a></li>
            </ul>
        </nav>
    `;

    // Path: /JS/header.js
    // Must have: <header id="header"></header> in the body of the HTML file