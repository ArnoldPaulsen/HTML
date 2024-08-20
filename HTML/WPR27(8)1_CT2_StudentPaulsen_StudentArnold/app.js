// Recipe data
const recipes = [
    { id: 1, name: 'Spaghetti Bolognese', description: 'A classic Italian pasta dish', difficulty: 2 },
    { id: 2, name: 'Beef Wellington', description: 'A gourmet beef dish', difficulty: 8 },
    { id: 3, name: 'Chicken Curry', description: 'A spicy and flavorful curry', difficulty: 4 },
    { id: 4, name: 'Chocolate Cake', description: 'A rich and moist dessert', difficulty: 3 },
    { id: 5, name: 'Caesar Salad', description: 'A fresh and crispy salad', difficulty: 1 },
    { id: 6, name: 'Sushi', description: 'A traditional Japanese dish', difficulty: 7 },
    { id: 7, name: 'French Onion Soup', description: 'A hearty and savory soup', difficulty: 5 },
    { id: 8, name: 'Ratatouille', description: 'A vegetable stew from Provence', difficulty: 6 },
    { id: 9, name: 'Apple Pie', description: 'A classic American dessert', difficulty: 2 },
    { id: 10, name: 'Lobster Bisque', description: 'A creamy and rich soup', difficulty: 9 }
];

const recipeSelect = document.getElementById('recipeSelect');
const selectButton = document.getElementById('selectRecipe');
const messageDiv1 = document.getElementById('message1');
const messageDiv2 = document.getElementById('message2');
const messageDiv3 = document.getElementById('message3');
const recipeTable = document.getElementById('recipeTable').getElementsByTagName('tbody')[0];


recipes.forEach(recipe => {
    const option = document.createElement('option');
    option.value = recipe.id;
    option.textContent = recipe.name;
    recipeSelect.appendChild(option);
});


selectButton.addEventListener('click', () => {
    const selectedId = parseInt(recipeSelect.value);
    const selectedRecipe = recipes.find(recipe => recipe.id === selectedId);
    
    if (selectedRecipe) {
        if (selectedRecipe.difficulty >= 1 && selectedRecipe.difficulty <= 3) 
            {
            messageDiv2.textContent ='';
            messageDiv3.textContent ='';
            messageDiv1.textContent = 'You chose a simple recipe. Other easy recipes include:';
            const easyRecipes = recipes.filter(recipe => recipe.difficulty >= 1 && recipe.difficulty <= 3);
            updateTable(easyRecipes);
           
            }

        else if (selectedRecipe.difficulty >= 4 && selectedRecipe.difficulty <= 7) 
            {
            messageDiv1.textContent ='';
            messageDiv3.textContent ='';
            messageDiv2.textContent = 'You chose a moderate recipe. Other moderately difficult recipes include:';
            const moderateRecipes = recipes.filter(recipe => recipe.difficulty >= 4 && recipe.difficulty <= 7);
            updateTable(moderateRecipes);
            
            }

         else if (selectedRecipe.difficulty >= 8 && selectedRecipe.difficulty <= 10) 
            {
                messageDiv1.textContent ='';
                messageDiv2.textContent ='';
                messageDiv3.textContent = 'You chose  a  challenging  recipe.  Other  difficult  recipes include';
                const challengingRecipes = recipes.filter(recipe => recipe.difficulty >= 8 && recipe.difficulty <= 10);
                updateTable(challengingRecipes); 
                
            }

}});

function updateTable(recipesToShow) {
    recipeTable.innerHTML = '';
    recipesToShow.forEach(recipe => {
        const row = recipeTable.insertRow();
        row.insertCell(0).textContent = recipe.id;
        row.insertCell(1).textContent = recipe.name;
        row.insertCell(2).textContent = recipe.description;
        row.insertCell(3).textContent = recipe.difficulty;
    });
}