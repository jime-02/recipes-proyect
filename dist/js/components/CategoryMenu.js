app.component('category-menu', {

    props:{

        category:{
            type: String,
            default: "Default category"   
        },

    },

    methods: {
        onClickCategoryMenu(){
            console.log(this.category);
               this.$emit('selectedcategory', this.category);
           }
    },

    template: 

    /*html*/
    ` 
      <a class='header-subtext mt-3' v-on:click="onClickCategoryMenu">Todas</a> <!-- {{ occasion }} -->
    
    ` 
})