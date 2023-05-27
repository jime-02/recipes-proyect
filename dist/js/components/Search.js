app.component('search-button', {

    props:{

        name:{
            type: String,
            default: "Default category"   
        },

    },

    methods: {
        onClickSearch(){
           // console.log(this.category);
               this.$emit('selectedsearch', this.name);
           }
    },

    template: 

    /*html*/
    ` 
    <button class="search-btn ul-adjust" v-on:click="onClickSearch"><img src="./images/lupa.png" alt="lupa"></button>
    
    ` 
})