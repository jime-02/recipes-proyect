app.component('password-change', {

    props:{
        title:{
          type: String,
          default: "Default title"
        },

        emailuser:{
          type: String,
          default: "Default"
        },

    },

    data() {
      return {
          email: '',
          showErrorMessage: false
      }
  },

    methods: {

      onClickResetPass(){

          if (this.email === '') {

            this.showErrorMessage = true; 
          } else {

           // console.log("funciona forgot");
            this.$emit('resetpass', this.email);
          }
      }

    },

    template: 

    /*html*/
    ` 
    <p class="text-titles mb-2 mt-3 mt-tb mt-0-mb">{{title}}</p>

    <div class="mb-5 mt-3 margin-content text-recipe-label clr-gray-dark form-content ml-form-mb mt-0-mb">
        <div class="form-group mt-5 d-flex d-block-mb margin-mb">
            <label for="useremail" class="ms-3 col-md-4 d-flex">{{ emailuser }}:</label>
            <div class="col-sm">
              <input type="text" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="useremail" placeholder="usuario@example.com" v-model="email">
           
              </div>
        </div>
      <!--  <div class="form-group mt-5 d-flex d-block-mb margin-mb">
            <label :for="repeat_new_password_for" class="ms-3 col-md-4 d-flex">{{repeat_new_password}}:</label>
            <div class="col-sm">
              <input type="password" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="repeat_new_password_id" placeholder="***********************">
            </div>
        </div> <a class="mt-3 btn-large mt-tb" href="comentario.html">Verificar</a> -->
    </div> 
    <div v-if="showErrorMessage" class="text-danger mb-3 mt-2 text-center">Debe ingresar su correo electrónico.</div> 
    
    <input class="mt-5 btn-large mt-tb" type="button" value="Cambiar contraseña" v-on:click="onClickResetPass">

    ` 
})