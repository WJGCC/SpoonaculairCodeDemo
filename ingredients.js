$(document).ready(function () {
    const params = (new URL(document.location)).searchParams;
    const id = params.get('id');

    $.ajax({
        url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=c25e2d349ba842ee8186ded1ff30b942`
    }).done(function (data) {
        $('.recipe').append(`
            <h3 class="recipe-name">${data.title}</h3>
            <img src="${data.image}" />
        `);

        data.extendedIngredients.forEach(ingredient => {
            $('.ingredients').append(`
                <div class="ingredient">
                    <h3>${ingredient.name}</h3>
                    <img src="https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}" />
                    <p>${ingredient.amount} ${ingredient.unit}</p>
                </div>
            `);
        });
    });
});
