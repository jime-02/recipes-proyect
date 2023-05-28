app.component('user-profile', {

    props:{

    },

    methods: {
    },

    template: 

    /*html*/
    ` 
     <!-- colection recipes -->
    <div class="row mt-5 justify-content-center">
        <p class="text-titles mb-2 mt-3 mt-tb">Recetas coleccionadas</p>

        <section class="row mt-2 padding-card grid-tb">
            <div v-for="(item, index) in userRecipesArray" class="col-2 mt-3 mx-5 mt-2 px-5">
                <new-recipes-card :image="item.image" :category="item.category" :name="item.name" :level="item.level" :index="item.id" v-on:recipedetails="onClickRecipeDetails"></new-recipes-card>   
            </div> 
        </section>

        <button class="btn-large mt-5 mb-4 zoom-button">Ver más</button>

    </div>  
    <!-- colection recipes --> 
    ` 
})