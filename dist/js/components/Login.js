app.component('login', {

    //emits: ['login'], // Declarar el evento 'login' en la opción emits

    props:{
      /*  title:{
            type: String,
            default: "Default title"
        },

        titlelabel:{
            type: String,
            default: "Default password label"
        },

        action_click:{
            type: String,
            default: "Default click"
        },

        username_label:{
            type: String,
            default: "Default username"
        },

        username_name:{
            type: String,
            default: "Default"
        },

        username_Id:{
            type: String,
            default: "Default"
        },

        password_name:{
            type: String,
            default: "Default"
        },

        password_id:{
            type: String,
            default: "Default"
        },

        submit_button_label:{
            type: String,
            default: "Default"
        },

        submit_label_forgot:{
            type: String,
            default: "Default"
        },

        for_label_user:{
            type: String,
            default: "Default"
        },

        for_label_password:{
            type: String,
            default: "Default"
        },*/

    },

    data() {
        return {
            email: '',
            password: '',
            showErrorMessage: false
        }
    },

    methods: {
        onClickLogin(){

            if (this.email === '' || this.password === '') {

                this.showErrorMessage = true; 
              } else {

               // console.log("funciona login");
                this.$emit('login', this.email, this.password);
            }
        },

        onClickReset(){
           
            window.location.href = 'cambio-clave.html';
           // this.$emit('login', this.email, this.password);   
        },

    },

    template: 

    /*html*/
    ` 
    <p class="text-titles mb-3 mt-4 mt-tb">Iniciar sesión</p>

    <form>

        <div class="mb-3 mt-3 margin-content text-recipe-label clr-gray-dark form-content">
       
            <div class="form-group mt-5 d-flex d-block-mb">
                <label for="email" class="col-md-4 d-flex">Correo electrónico:</label>
                <div class="col-sm">
                  <input type="text" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="email" placeholder="usuario@example.com" v-model="email">
                </div>
            </div>

            <div class="form-group mt-5 d-flex d-block-mb">
                <label for="password" class="col-md-4 d-flex">Contraseña:</label>
                <div class="col-sm">
                  <input type="password" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="password" placeholder="*************************" v-model="password">
                </div>
            </div>

        </div>  
        
          <!-- Mensaje de error -->
          <div v-if="showErrorMessage" class="text-danger mb-3 mt-2 text-center">Debe ingresar su información en los campos.</div>

        <div class="text-center mt-2">
            <input class="me-5 d-inline-block btn-large mt-5 mb-5 margin-mb margin-tb" type="button" value="Iniciar Sesión" v-on:click="onClickLogin">
            <input class="me-5 d-inline-block btn-large mt-5 mb-5 margin-mb margin-tb" type="button" value="¿Olvidó su contraseña?" v-on:click="onClickReset">
        </div>  
         
    </form>
    ` 
})