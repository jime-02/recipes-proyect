const app = Vue.createApp({

    data() {
        return {
            
            sessionMessage: '',
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

        let idUser = localStorage.getItem('idUser');

        console.log(idUser);

        this.seeSaveRecipeUser();

        this.seeActiveSesion();

        this.all_recipes = this.recipes; //que guarde una copia de los datos

       // this.userRecipesArray = JSON.parse(localStorage.getItem('userRecipesArray'));

        //axios para obtener recetas random y mostrar en el card de las recetas generales
        axios({
            method:'get',
            url:'http://localhost/pruebaLaravel/public/api/recipes/all'
        })
        .then(
            (response) => {
                let items = response.data;
                console.log(items);

                this.recipes = []; //esta limpiando el array
                
                items.forEach( (element) => {
                    this.recipes.push({
                        id: element.id, 
                        image: "http://localhost/pruebaLaravel/public/storage/imgs/"+element.image,
                        name: element.name,
                        category: element.category,
                        level: element.level,
                        occasion: element.occasion,
                        likes: element.likes, 
                        description: element.description,
                        ingredients: element.ingredientsList,    
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
            url:'http://localhost/pruebaLaravel/public/api/recipes/top10'
        })
        .then(
            (response) => {
                
                let items = response.data;
                console.log(items);

                this.bestRecipes = []; 
                
                items.forEach( (element) => {
                    this.bestRecipes.push({
                        id: element.id, 
                        image: "http://localhost/pruebaLaravel/public/storage/imgs/"+element.image,
                        name: element.name,
                        category: element.category,
                        level: element.level,
                        occasion: element.occasion,
                        likes: element.likes, 
                        description: element.description,
                        ingredients: element.ingredientsList,  //corregir que aparezcan bien los datos
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

        // ver los detalles de la receta
        onClickRecipeDetails(index){
            console.log("Recipe id" + index)

            //get recipes details
            axios({
                method:'get', 
                url:' http://localhost/pruebaLaravel/public/api/recipes/recipe/' + index
               
            })
            .then(
                (response) => {
                    let item = response.data[0][0];
                    console.log(item);

                    this.recipe.id = index;
                    this.recipe.image = "http://localhost/pruebaLaravel/public/storage/imgs/"+item.image;
                    this.recipe.name = item.name;
                    this.recipe.preparation_time = item.preparation_time + " mins";
                    this.recipe.cook_time = item.cooking_time + " mins";
                    this.recipe.total_time = item.total_time + " mins";
                    this.recipe.category = item.category;
                    this.recipe.portions = item.portions;
                    this.recipe.level = item.level;
                    this.recipe.occasion = item.occasion;
                    this.recipe.likes = item.likes;
                    this.recipe.description = item.description;
                 
                    this.recipe.instructions = item.preparation_instructions;

                    let ingredientsList = "";
                    response.data[1].forEach((ingredient) => {
                      ingredientsList += ingredient.amount + " " + ingredient.measurement_unit + " " + ingredient.description + "\n";
                    });
                    
                    this.recipe.ingredients = ingredientsList;
                }
            )
            .catch(
                error => console.log(error)
            );
        },

        //guardar la coleccion del usuario
        seeSaveRecipeUser(){

            let idUser = localStorage.getItem('idUser');

            axios({
                method: 'get',
                url: 'http://localhost/pruebaLaravel/public/api/users/savedrecipes/' + idUser
            })
            .then(
                (response) => {
                 //   console.log(response.data);
                    let items = response.data;
                 //   console.log(items);

                    this.userRecipesArray = [];
                    
                    items.forEach(element => {
                        this.userRecipesArray.push({
                            id: element.id, 
                            image: "http://localhost/pruebaLaravel/public/storage/imgs/"+element.image,
                            name: element.name,
                            category: element.category,
                            level: element.level,
                            occasion: element.occasion,
                            likes: element.likes, 
                            description: element.description,
                            ingredients: element.ingredientsList
                        })
                    });
                }
            )
            .catch(
                error => console.log(error)
            );
        },

        //guardar likes del usuario 
        onClickRecipeLike(index){

            let idUser = localStorage.getItem('idUser');
            console.log(idUser, index);

            axios({
                method: 'get',
                url: 'http://localhost/pruebaLaravel/public/api/users/likes/' + idUser + '/' + index
            })
            .then(
                (response) => {

                    console.log(response.data);
                }
            )
            .catch(
                error => console.log(error)
            );
        },

        //guardar coleccion de receta del usuario
        saveRecipeUser(index){

            let idUser = localStorage.getItem('idUser');

            console.log("recipe id - " + index);

            axios({
                method: 'get',
                url: 'http://localhost/pruebaLaravel/public/api/users/saverecipe/' + idUser + '/' + index
            })
            .then(
                (response) => {

                    console.log(response.data); 
                    //console.log(idUser); 
                }
            )
            .catch(
                error => console.log(error)
            );
        },

         //quitar coleccion de receta del usuario
         onClickDeleteRecipeUser(index){

            let idUser = localStorage.getItem('idUser');

            console.log("recipe id 6 - " + index);

            axios({
                method: 'get',
                url: 'http://localhost/pruebaLaravel/public/api/users/removesaverecipe/' + idUser + '/' + index
            })
            .then(
                (response) => {

                    console.log(response);
                    alert('Se eliminó la receta correctamente'); 
                    window.location.href = "perfil-usuario.html";
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
                url: `http://localhost/pruebaLaravel/public/api/recipes/searchbyname/` + searchTerm
               })

            .then(
                (response) => {
                    let items = response.data;
                    console.log(items);
                    
                    items.forEach( (element) => {
                        this.searchRecipes.push({
                            id: element.id, 
                            image: "http://localhost/pruebaLaravel/public/storage/imgs/"+element.image,
                            name: element.name,
                            preparation_time: element.preparation_time + " mins",
                            cook_time: element.cooking_time + " mins",
                            total_time: element.total_time + " mins",
                            category: element.category,
                            portions: element.portions,
                            level: element.level,
                            occasion: element.occasion,
                            likes: element.likes, 
                            description: element.description,
                           //ingredients: element.extendedIngredients, 
                            instructions: element.preparation_instructions,
                        })
                    });
                }
            )
            .catch(
                error => console.log(error)
            );
        },

        //metodo para registrar un usuario
        onClickRegister(userName, userLastName, country, email, password){
        
            axios({
                method:'post', 
                url:'http://localhost/pruebaLaravel/public/api/users/register?name='+userName+'&last_name='+userLastName+'&country='+country+'&email='+email+'&password='+password    
            })
            .then(
                (response) => {
            
                    console.log(response.data); 
                    
                     window.location.href = 'login.html';
                     alert('Se registró el usuario correctamente');
                }
            )
            .catch(
                error => console.log(error)
            );
        },

        onClickResetPass(email) {

            console.log('Reset Password');

            axios({
                method:'post', 
                 url:'http://localhost/pruebaLaravel/public/api/users/recoverpassword?email=' + email
            })
            .then(
                (response) => {
            
                    console.log(response.data); 
                    let item = response.data;
                    let newPass = item.password;
                    localStorage.setItem('newPass', newPass);

                    const url = 'comentario.html?newPass=' + encodeURIComponent(newPass);
                    window.location.replace(url);

                   // window.location.href = 'comentario.html?newPass=' + encodeURIComponent(newPass);
                  //  window.location.href = 'comentario.html';
                     alert('Inicie sesión con su nueva contraseña: ' + localStorage.getItem('newPass'));
                }
            )
            .catch(
                error => console.log(error)
            );
        },

         //metodo para hacer login de un usuario
         onClickLogin(user, pass){
        
            let data = {email:user, password:pass};
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            }

            axios.post('http://localhost/pruebaLaravel/public/api/users/login', data, config)
            .then(
                (response) => {
                    console.log(response.data);

                     //variable que almacena lo que tiene el response.data
                     let item = response.data;

                     //variable que se asigna lo que tenga el item en lo que deseo "access token"
                     let userToken = item.accessToken;

                     //almacene en local storage y el valor es lo que tiene userToken
                     localStorage.setItem('tokenUser', userToken);
                    // console.log(localStorage.getItem('tokenUser'));

                     //mensaje para mostrar el usuario que esta login
                     let items = response.data;
                     let userMessage = items.message;
                     localStorage.setItem('message', userMessage);

                     let element = response.data;
                     let idUser = element.user.id;
                     localStorage.setItem('idUser', idUser); 
                     
                     let data = response.data;
                     let email = data.user.id;
                     localStorage.setItem('email', email); 

                     alert('Se inicio sesión correctamente');

                     //Redirigir a otra página
                     window.location.href = 'perfil-usuario.html';
                                       
                }
            )
            .catch(
                error => console.log(error)
            );
        },

        seeActiveSesion() {

            const message = localStorage.getItem('message');
            const tokenUser = localStorage.getItem('tokenUser');

            if (tokenUser !== null) {
                this.sessionMessage = 'Sesión activada: ' + message;
            } else {
                this.sessionMessage = 'No hay sesión activada';
            }
        },

         //metodo para hacer logout de un usuario
         onclicklogout(){

            const tokenUser = localStorage.getItem('tokenUser');
        
            axios({
                method: 'get',
                url: 'http://localhost/pruebaLaravel/public/api/users/logout',

                headers: {
                     Authorization: `Bearer ${tokenUser}`, 
                }
            })
                .then(response => {

                     console.log(response.data); 
                     localStorage.removeItem('tokenUser');
                     localStorage.removeItem('idUser');
                     alert('Se cerró la sesión');
                     window.location.href = 'login.html';
                }

              )
                .catch(error => console.log(error)
            );
         },

        //que se muestre la seleccion del filtro
       onClickCategoryMenu(category){
    
            //get recipe by category FALTA
          /*  axios({
                method:'get',
                url:'https://api.spoonacular.com/recipes/complexSearch?type='+category+'&apiKey=31e5447649f3452a8e2375370891f5d7'
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
            );*/
        },

    },
})

//init custom events for components 
const emitter = mitt(); 
app.config.globalProperties.$test = emitter; 