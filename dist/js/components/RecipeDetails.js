app.component('recipe-details',{

    props:{
        name:{
            type: String,
            default: "default",
        },
        image:{
            type: String,
            default: "default",
        },

        preparation_time:{
            type: String,
            default: "default",
        },

        cook_time:{
            type: String,
            default: "default",
        },

        total_time:{
            type: String,
            default: "default",
        },

        category:{
            type: String,
            default: "default",
        },

        portions:{
            type: Number,
            default: 1,
        },

        level:{
            type: String,
            default: "default",
        },

        occasion:{
            type: String,
            default: "default",
        },

        description:{
            type: String,
            default: "default",
        },
       
        ingredients:{
            type: String,
            default: "default",
        },

        instructions:{
            type: String,
            default: "default",
        },

        likes:{
            type: Number,
            default: 1
        },

        index:{
            type: Number
        },

    },

    //custom libreria
    mounted() {
      this.$test.on('foo', function(data){
        console.log(data);
      })
    },

    data() {
        return {
          //localLikes: 0,
          showMessageCollection: false,
        };
    },

    methods: {

        saveRecipeUser(){
            console.log("coleccionar")
            this.$emit('colectionrecipe', this.index);

            this.showMessageCollection = true; // Mostrar el mensaje para coleccionar la receta 
            setTimeout(() => {
                this.showMessageCollection = false; 
            }, 4000);
        },

        onClickRecipeLike(){
            console.log("likes")
            //this.localLikes += 1;
            this.$emit('recipelike', this.index);
        },

    },
  
    template: 

    /*html*/
    `
     <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen modal-tb">
            <div class="modal-content"> 
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-header justify-content-center">
                    <p class="text-titles">Información receta</p>
                </div>
        
                <div class="modal-body">
                    <p class="position-absolute featured-badge">Destacada</p>
                    <img class="img-fluid d-block m-auto img-fitscreeen img-modal" v-bind:src="image" alt="{{ name }}">
                  
                    <h1 class="modal-title text-info-name text-center mt-5" id="staticBackdropLabel">{{ name }}</h1>

                    <div class="card-color mb-5">
                        <section class="row mt-5 mb-icons margin-modal">

                            <div class="mt-2 col-md">
                                <h3 class="text-recipe-label m-4">Tpo. preparación:</h3>
                                <p class="text-info m-4">{{ preparation_time }}</p>
                              
                            </div>
            
                            <div class="mt-2 col-md ">
                                <h3 class="text-recipe-label m-4">Tpo. cocción:</h3>
                                <p class="text-info m-4">{{ cook_time }}</p>
                            </div>
            
                            <div class="mt-2 col-md">
                                <h3 class="text-recipe-label m-4">Tpo. total:</h3>
                                <p class="text-info m-4">{{ total_time }}</p>
                            </div>
                        </section>

                        <section class="row mt-1 mb-icons margin-modal">

                            <div class="col-md">
                                <h3 class="text-recipe-label m-4">Categoría:</h3>
                                <p class="text-info m-4">{{ category }}</p>
                              
                            </div>
            
                            <div class="col-md">
                                <h3 class="text-recipe-label m-4">Porciones:</h3>
                                <p class="text-info m-4">{{ portions }}</p>
                            </div>
            
                            <div class="col-md">
                                <h3 class="text-recipe-label m-4">Nivel complejidad:</h3>
                                <p class="text-info m-4">{{ level }}</p>
                            </div>
                        </section>

                        <section class="row mt-1 mb-icons margin-modal">

                            <div class="col-md-4 mb-2 ">
                                <h3 class="text-recipe-label m-4">Ocasión:</h3>
                                <p class="text-info m-4">{{ occasion }}</p>
                              
                            </div>
            
                            <div class="col-md-4 mb-2">
                                <h3 class="text-recipe-label m-4">Cantidad de votos:</h3>
                                <p class="text-info m-4">{{ likes }}</p>
                            </div>

                            <div class="col-md-4 mb-2">
                                <h3 class="text-recipe-label m-4">Receta destacada:</h3>
                                <p class="text-info m-4">Sí</p>
                            </div>
            
                        </section>

                    </div>

                    <div class="row margin-modal padding-right-info">
                        <h3 class="text-info-name mt-3 ml-align-text">Descripción:</h3>
                        <p class="text-info-recipe mt-2 ml-align-text">{{ description }}</p>

                        <h3 class="text-info-name mt-3 ml-align-text">Ingredientes:</h3>
                        <p class="text-info-recipe mt-2 ml-align-text">{{ ingredients }}</p>

                        <h3 class="text-info-name mt-3 ml-align-text">Instrucciones:</h3>
                        <p class="text-info-recipe mt-2 mb-1 ml-align-text">{{ instructions }}</p>
                        
                    </div>
                
                    <div class="text-center mt-2 mb-5">
                        <div class="justify-content-center">
                            <a class="btn-large d-inline-block mt-5 mb-5 p-1 coursorPointer" v-on:click="onClickRecipeLike()">Me gusta</a>
                            <a class="btn-large d-inline-block ms-5 p-1 margin-button-mb ml-tb coursorPointer" v-on:click="saveRecipeUser()">Coleccionar</a>
                        </div>

                        <div v-if="showMessageCollection" class="alert alert-success fixed-bottom mb-0" role="alert">Se coleccionó la receta</div>

                        <div class="modal-footer justify-content-center">
                            <p class="text-titles mt-2">Recetas relacionadas</p>
                        </div>
                         
                        <div class="main-carousel main-carousel-mb mt-5 mb-2" data-flickity='{ "cellAlign": "center", "contain": true }'>
                            <div class="carousel-cell"><a class="nav-link topnav-link" href="informacion-receta.html"><img class="border border-4 border-danger rounded carrousel-width" src="./images/receta-10.png" alt="receta1"><h4 class="text-center mt-3 mb-3 carrousel-text">Almuerzo</h4><p class="text-recipe-name">Arroz con pollo</p><p class="mb-3 text-recipe-level">Fácil</p></a><button class="btn btn-danger">Ver receta</button></div>
                            <div class="carousel-cell"><a class="nav-link topnav-link" href="informacion-receta.html"><img class="border border-4 border-danger rounded carrousel-width" src="./images/receta-10.png" alt="receta1"><h4 class="text-center mt-3 mb-3 carrousel-text">Bebida</h4><p class="text-recipe-name">Arroz con pollo</p><p class="mb-3 text-recipe-level">Fácil</p></a><button class="btn btn-danger">Ver receta</button></div>
                            <div class="carousel-cell"><a class="nav-link topnav-link" href="informacion-receta.html"><img class="border border-4 border-danger rounded carrousel-width" src="./images/receta-10.png" alt="receta1"><h4 class="text-center mt-3 mb-3 carrousel-text">Desayuno</h4><p class="text-recipe-name">Arroz con pollo</p><p class="mb-3 text-recipe-level">Fácil</p></a><button class="btn btn-danger">Ver receta</button></div> 
                        </div>
                    </div>
                </div>
                
                
                <div class="modal-footer">
                   <!-- <button type="button" class="btn-modal" v-on:click="onClickPrev()">Anterior</button>

                    <button type="button" class="btn-modal" v-on:click="onClickNext()">Siguiente</button> -->
                    
                    <button type="button" class="btn-modal" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    `  
})