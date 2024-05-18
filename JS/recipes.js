document.addEventListener('DOMContentLoaded', function(){
    fetch('../ASSETS/json/recept.json')
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById('recipesYes');
            if (!container) {
                console.error("Element with ID 'recipesYes' not found.");
                return;
            }
            data.forEach(recept => {
                let receptDiv = document.createElement('div');
                receptDiv.className = 'recept';

                let textingDiv = document.createElement('div');
                textingDiv.className = 'texting';
                receptDiv.appendChild(textingDiv);

                let name = document.createElement('div');
                name.className = 'name';
                name.textContent = recept.name;
                textingDiv.appendChild(name);

                let time = document.createElement('p') ;
                time.className = 'time';
                time.textContent = 'Time: ' + recept.time;
                textingDiv.appendChild(time);

                let amount = document.createElement('p');
                amount.className = 'amount';
                amount.textContent = 'Amount: ' + recept.amount;
                textingDiv.appendChild(amount);

                let ingredients = document.createElement('div');
                ingredients.className = 'ingredients';
                ingredients.innerHTML = `Ingredients: <br>${recept.ingredients.join('<br>')}`;
                textingDiv.appendChild(ingredients);

                let content = document.createElement('div');
                content.className = 'content';
                content.innerHTML = `Instructions: <br>${recept.content.join('<br>')}`;
                textingDiv.appendChild(content);

                let image = document.createElement('img');
                image.className = 'image';
                image.src = recept.image;
                receptDiv.appendChild(image);

                container.appendChild(receptDiv);  

            });

        })
        .catch(error => console.error('Error fetching the recipes:', error));

});