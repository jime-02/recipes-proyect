app.component('carrousel-card', {

    props:{
        image:{
            type: String
        },

        name: {
            type: String,
            default: "Default name"
        },

        index:{
            type: Number 
        }
 
    },

    mounted() {
        this.recipe_likes = this.likes;
    },

    methods: {

        onClickViewRecipe(){
            console.log("VIEW");
            this.$emit('recipedetails', this.index);
        }
       
    },

    template: 

    /*html*/
    `
     <div class="main-carousel width-carrousel" data-flickity='{ "cellAlign": "center", "contain": true }'>
        <div class="carousel-cell"><a class="nav-link topnav-link"><img class="border border-4 border-danger rounded" v-bind:src="image" alt="receta1"><h4 class="text-center mt-3 mb-3 carrousel-text">{{name}}</h4></a>
        </div>
    </div>
     ` 
})
