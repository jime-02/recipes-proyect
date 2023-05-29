const app = Vue.createApp({

    data() {
        return {

            searchRecipes:[],
            all_recipes:[],
            selectedIndex: 0,
            hasRecipes: true,
            recipe: {},
            visibleRecipes: 8,
            visibleRecipesTop: 8, // Número de recetas visibles inicialmente
            increment: 8, // incremento de recetas visibles
            bestRecipes:[],
            userRecipesArray:[],

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
               
            ],

        }
    },

    mounted:function(){

        this.all_recipes = this.recipes; //que guarde una copia de los datos

        this.userRecipesArray = JSON.parse(localStorage.getItem('userRecipesArray'));

        //axios para obtener recetas random y mostrar en el card de las recetas generales
        axios({
            method:'get',
            url:'https://api.spoonacular.com/recipes/random?apiKey=81328dddd20b45d099ec7921d82cdc30&number=50'
        })
        .then(
            (response) => {
                let items = response.data.recipes;
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
                        category: element.dishTypes[0],
                        portions: element.servings,
                        level: "Easy",
                        occasion: element.occasions,
                        likes: element.aggregateLikes, 
                        description: element.summary,
                        ingredients: element.ingredientsList,  //corregir que aparezcan bien los datos
                        instructions: element.instructions,
                        
                    })
                });
            }
        )
        .catch(
            error => console.log(error)
        );

        //obtener recetas del API para el card de top 10 
        axios({
            method:'get',
            url:'https://api.spoonacular.com/recipes/complexSearch?type=main course&apiKey=81328dddd20b45d099ec7921d82cdc30&number=10'
        })
        .then(
            (response) => {
                let items = response.data.results;
                console.log(items);

                this.bestRecipes = []; 
                
                items.forEach( (element) => {
                    this.bestRecipes.push({
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

        //metodo para mostrar solamente 8 recetas en el card top 10 y que se desplieguen más cuando se da "ver mas"
        showMoreTop() {
            this.visibleRecipesTop += this.increment;
        },

         //metodo para mostrar solamente 8 recetas en el card recetas y que se desplieguen más cuando se da "ver mas"
        showMore() {
             this.visibleRecipes += this.increment;
         },

         //metodo mostrar más en recetas buscadas 
        showMoreSearch() {
            this.visibleRecipes += this.increment;
        },

         //metodo mostrar más en recetas buscadas 
         showMoreCollectionRecipes() {
            this.visibleRecipes += this.increment;
        },

        onClickViewRecipe(index){
            this.selectedIndex = index;
        },

     /*   onClickPrev(){
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

        onClickRecipeLike(index){
            this.recipes[index].likes += 1; 
        },*/

        // ver los detalles de la receta
        onClickRecipeDetails(index){
            console.log("Recipe id " + index)

            //get recipes details
            axios({
                method:'get', 
                url:'https://api.spoonacular.com/recipes/'+index+'/information?includeNutrition=false&apiKey=81328dddd20b45d099ec7921d82cdc30'
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

        //guardar coleccion de receta del usuario
        saveRecipeUser(index){
            console.log("recipe id save recipe- " + index);
        
            axios({
                method:'get', 
                url:'https://api.spoonacular.com/recipes/'+index+'/information?includeNutrition=false&apiKey=81328dddd20b45d099ec7921d82cdc30'
            })
            .then(
                (response) => {
                    let items = response.data;
                    console.log(items);
                    
                        this.userRecipesArray.push({
                            id: items.id, 
                            image: items.image,
                            name: items.title,
                            preparation_time: items.preparationMinutes + " mins",
                            cook_time: items.cookingMinutes + " mins",
                            total_time: items.readyInMinutes + " mins",
                            category: items.dishTypes[1],
                            portions: items.servings,
                            level: "Easy",
                            occasion: items.occasions,
                            likes: items.aggregateLikes, 
                            description: items.summary,
                            ingredients: items.extendedIngredients, 
                            instructions: items.instructions,
                        })
                    localStorage.setItem('userRecipesArray', JSON.stringify(this.userRecipesArray));     
                }
            )
            .catch(
                error => console.log(error)
            );
        },

        //metodo para el buscador por keyword 
        onClickSearchRecipe(){

            const searchTerm = this.$refs.searchInput.value;
    
            //get recipe by keyword
            axios({
                method: 'get',
                url: `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=81328dddd20b45d099ec7921d82cdc30`
              })

            .then(
                (response) => {
                    let items = response.data.results;
                    console.log(items);
                    
                    items.forEach( (element) => {
                        this.searchRecipes.push({
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

        //que se muestre la seleccion del filtro
        onClickCategoryMenu(category){
    
            //get recipe by category FALTA
            axios({
                method:'get',
                url:'https://api.spoonacular.com/recipes/complexSearch?type='+category+'&apiKey=81328dddd20b45d099ec7921d82cdc30'
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
    },
})

//init custom events for components 
const emitter = mitt(); 
app.config.globalProperties.$test = emitter; 