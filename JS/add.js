document.addEventListener('DOMContentLoaded', function(){
    const recipeForm = document.getElementById('recipeForm1');

    recipeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name1').value;
        const time = document.getElementById('time1').value;
        const amount = document.getElementById('amount1').value;
        const ingredients = document.getElementById('ingredients1').value.split(',').map(item => item.trim());
        const image = document.getElementById('image1').value;
        const content = document.getElementById('content1').value.split('\n').map(item => item.trim());

        const newRecipe = {
            name: name,
            time: time,
            amount: amount,
            ingredients: ingredients,
            image: image,
            content: content
        };

        const recipeNew = { name2: name, time2: time, amount2: amount, ingredients2: ingredients, image2: image, content2: content};
        const {name2, time2, amount2} = recipeNew;
        

        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

        recipes.push(newRecipe);

        localStorage.setItem('recipes', JSON.stringify(recipes));


        recipeForm.reset();

        alert(`Recipe added successfully!: ${newRecipe.name} \n ${time2} \n ${amount2}`);
    });
    /* //this doesnt work cuz of PUT method not allowed
    const recipesFromLocalStorage = JSON.parse(localStorage.getItem('recipes')) || [];

    fetch('../ASSETS/json/recept.json')
        .then(response => response.json())
        .then(existingRecipes => {
            const allRecipes = existingRecipes.concat(recipesFromLocalStorage);

            const updatedJson = JSON.stringify(allRecipes);

            fetch('../ASSETS/json/recept.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: updatedJson
            })
            .then(() => {
                console.log('Recipes from localStorage added successfully to JSON file!');
            })
        })*/

});