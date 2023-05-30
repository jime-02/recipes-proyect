app.component('comment', {

    props:{
        title:{
          type: String,
          default: "Default"
        },

        button_text:{
          type: String,
          default: "Default"
        },

    },

    methods: {
    },

    template: 

    /*html*/
    ` 
    <p class="text-titles mb-2 mt-3">{{title}}</p>

    <div class="row justify-content-center mt-0-mb">
         <a class="mt-5 btn-large" href="login.html">{{ button_text }}</a>
    </div>
    ` 
})