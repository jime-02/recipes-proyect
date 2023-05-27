const app = Vue.createApp({

    data() {
        return {

            all_recipes:[],
            selectedIndex: 0,
            hasRecipes: true,
            recipe: {},

            categories:[ //se establece relacion de ir a buscar el filtro de cada una de las categorias 
                { name: 'main course'}, 
                { name: 'side dish'}, 
                { name: 'dessert'}, 
                { name: 'appetizer'}, 
                { name: 'salad'}, 
                { name: 'bread'}, 
                { name: 'bread'}, 
                { name: 'breakfast'}, 
                { name: 'soup'},  
                { name: 'beverage'}, 
                { name: 'sauce'}, 
                { name: 'marinade'}, 
                { name: 'fingerfood'}, 
                { name: 'snack'}, 
                { name: 'drink'}
              
            ],

            recipes: [ //array
            //objetos
                {id: 1, image:"", name: "", category: "", time: "", level: "", likes: 4, ingredients: "", instructions: "", description:"", portions:"", occasion:"", preparation_time:"", cook_time:"", total_time:""},
               
            ]
        }
    },

    mounted:function(){
        this.all_recipes = this.recipes; //que guarde una copia de los datos
    
        //obtener recetas del API 
        axios({
            method:'get',
            url:'https://api.spoonacular.com/recipes/complexSearch?type=main course&apiKey=93d548ce31d7411eaecf08e61cd0be2d'
        })
        .then(
            (response) => {
                let items = response.data.results;
                console.log(items);

                this.recipes = []; //esta limpiando el array
                
                items.forEach( (element) => {
                    this.recipes.push({
                        id: element.id, 
                        image: element.image,
                        name: element.title,
                        preparation_time: element.preparationMinutes + " mins",
                        cook_time: element.cookingMinutes + " mins",
                        total_time: element.readyInMinutes + " mins",
                        category: element.dishTypes,
                        portions: element.servings,
                        level: "Easy",
                        occasion: element.occasions,
                        likes: element.aggregateLikes, 
                        description: element.summary,
                        ingredients: element.extendedIngredients, 
                        instructions: element.instructions,
                        

                    })
                });
            }
        )
        .catch(
            error => console.log(error)
        );
    }, 

    methods: {
        onClickRecipeLike(index){
            this.recipes[index].likes += 1; 
        },
        onClickRecipeUnlike(index){
            if(this.recipes[index].likes > 0) this.recipes[index].likes -= 1;
        },
        onClickRecipeDetails(index){
            console.log("Recipe id " + index)

            //get recipes details
            axios({
                method:'get', 
                url:'https://api.spoonacular.com/recipes/'+index+'/information?includeNutrition=false&apiKey=93d548ce31d7411eaecf08e61cd0be2d'
            })
            .then(
                (response) => {
                    let item = response.data;
                    console.log(item);

                    this.recipe.id = index;
                    this.recipe.image = item.image;
                    this.recipe.name = item.title;
                    this.recipe.preparation_time = item.preparationMinutes + " mins";
                    this.recipe.cook_time = item.cookingMinutes + " mins";
                    this.recipe.total_time = item.readyInMinutes + " mins";
                    this.recipe.category = item.dishTypes[1];
                    this.recipe.portions = item.servings;
                    this.recipe.level = "Easy";
                    this.recipe.occasion = item.occasions[0];
                    this.recipe.likes = item.aggregateLikes;
                    this.recipe.description = item.summary;
                 
                    this.recipe.instructions = item.instructions;

                    let ingredientsList = "";
                    for(let i=0; i< item.extendedIngredients.length; i++){
                        ingredientsList += item.extendedIngredients[i].original + "\n";
                    }

                    this.recipe.ingredients = ingredientsList;
                }
            )
            .catch(
                error => console.log(error)
            );
        },

        onClickViewRecipe(index){
            this.selectedIndex = index;
        },

        onClickPrev(){
            this.selectedIndex--;
            if(this.selectedIndex < 0){
                this.selectedIndex = this.recipes.length -1;
            }
        },

        onClickNext(){
            this.selectedIndex++;
            if(this.selectedIndex >= this.recipes.length){
                this.selectedIndex = 0;
            }
        },

        onClickSelectedCategory(category){
    
            //get recipe by category FALTA
            axios({
                method:'get',
                url:'https://api.spoonacular.com/recipes/complexSearch?type='+category+'&apiKey=93d548ce31d7411eaecf08e61cd0be2d'
            })
            .then(
                (response) => {
                    let items = response.data.results;
                    console.log(items);
    
                    this.recipes = []; //esta limpiando el array
                    
                    items.forEach( (element) => {
                        this.recipes.push({
                            id: element.id, 
                            image: element.image,
                            name: element.title,
                            preparation_time: element.preparationMinutes + " mins",
                            cook_time: element.cookingMinutes + " mins",
                            total_time: element.readyInMinutes + " mins",
                            category: element.dishTypes[1],
                            portions: element.servings,
                            level: "Easy",
                            occasion: element.occasions,
                            likes: element.aggregateLikes, 
                            description: element.summary,
                            ingredients: element.extendedIngredients, 
                            instructions: element.instructions,
                        })//push metodo de array para meter datos
                    });
                    //console.log(this.categories);
                }
            )
            .catch(
                error => console.log(error)
            );
        },

        onClickSearchBar(){
    
            //get recipe by category FALTA
            axios({
                method:'get',
                url:'https://api.spoonacular.com/recipes/complexSearch?type=keyword&apiKey=93d548ce31d7411eaecf08e61cd0be2d'
            })
            .then(
                (response) => {
                    let items = response.data.results;
                    console.log(items);
    
                    this.recipes = []; //esta limpiando el array
                    
                    items.forEach( (element) => {
                        this.recipes.push({
                            id: element.id, 
                            image: element.image,
                            name: element.title,
                            preparation_time: element.preparationMinutes + " mins",
                            cook_time: element.cookingMinutes + " mins",
                            total_time: element.readyInMinutes + " mins",
                            category: element.dishTypes[1],
                            portions: element.servings,
                            level: "Easy",
                            occasion: element.occasions,
                            likes: element.aggregateLikes, 
                            description: element.summary,
                            ingredients: element.extendedIngredients, 
                            instructions: element.instructions,
                        })//push metodo de array para meter datos
                    });
                    //console.log(this.categories);
                }
            )
            .catch(
                error => console.log(error)
            );
        }
    },
})

//init custom events for components 
const emitter = mitt(); 
app.config.globalProperties.$test = emitter; 