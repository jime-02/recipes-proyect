app.component('user-profile', {

    props:{

        image:{
            type: String
        },

        category: {
            type: String,
            default: "Default category"
        },

        name: {
            type: String,
            default: "Default name"
        },

        level: {
            type: String,
            default: "Default level"
        },

        title: {
            type: String,
            default: "Default title"
        },
 
        index:{
            type: Number 
        }
    },

    methods: {

        onClickViewRecipe(){
            console.log("VIEW details");
            this.$emit('recipedetails', this.index);
        },

        onClickDeleteRecipeUser(){
            console.log("delete recipe");
            this.$emit('deleterecipe', this.index);
        }
       
    },

    template: 

      /*html*/
      ` 
      <div class="card p-3 shadow border-0 d-inline-block card-color mb-4">
          <img v-bind:src="image" class="card-img-top img-height rounded mb-4" alt="featured recipe">
          <div class="card-body p-0">
              <p class="mt-2 mb-3 category-text">{{ category }}</p>
              <h5 class="mb-3 card-title overflow-hidden text-recipe-name">{{ name }}</h5>
              <p class="card-text overflow-hidden text-recipe-description">{{ ingredients }}</p>
              <p class="mb-3 text-recipe-level">{{ level }}</p>
  
              <button class="btn-view mt-2 mb-4 align-middle" v-on:click="onClickViewRecipe()" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ver receta</button>
              <button class="btn-view btn-delete-recipe mt-2 mb-4 align-middle" v-on:click="onClickDeleteRecipeUser()">Quitar receta</button>
              
          </div>
      </div>     
    ` 
})