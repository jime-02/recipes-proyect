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

    data() {
      return {
        newPass: ''
      }
    },

    methods: {
      
    },

    mounted() {
      // Obtener el valor del parámetro "newPass" de la URL
      const params = new URLSearchParams(window.location.search);
      this.newPass = params.get('newPass');
    },

    template: 

    /*html*/
    ` 
    <p class="text-titles mb-2 mt-3">{{title}}</p>

    <div class="row justify-content-center mt-0-mb">
          <p class="footer-title mb-2 mt-3 text-center"><small>Asegúrese de guardar su contraseña. Esta es su nueva contraseña:</small></p>
          <p class="mb-2 mt-5 text-recipe-name text-danger text-center" id="new-pass">{{ newPass }}</p>
          <a class="mt-5 btn-large" href="login.html">{{ button_text }}</a>
    </div>
    ` 
})