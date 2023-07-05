app.component('user-register', {

    props:{
      /*  title:{
            type: String,
            default: "Default title"
        },

        user_last_name:{
            type: String,
            default: "Default name"
        },

        user_name:{
            type: String,
            default: "Default user"
        },

        email:{
            type: String,
            default: "Default email"
        },

        password:{
            type: String,
            default: "Default password"
        },

        country:{
            type: String,
            default: "Default country"
        },*/

    },

    data() {
        return {
            userName: '',
            userLastName: '',
            country: '',
            email: '',
            password: '',

            registrationMessage: '', 
            showErrorMessage: false
        }
    },

    methods: {

        onClickRegister(){

            if (
                this.userName === '' ||
                this.userLastName === '' ||
                this.country === '' ||
                this.email === '' ||
                this.password === ''
              ) {
                this.showErrorMessage = true; // Mostrar mensaje de error
              } else {
                //console.log("funciona");
                this.$emit('register', this.userName, this.userLastName, this.country, this.email, this.password);
                this.registrationMessage = 'Usuario registrado exitosamente.';
              }
            

        }
    },

    template: 

    /*html*/
    ` 
    <p class="text-titles mb-2 mt-2">Registro de usuario</p>

    <form>
        
        <div class="mb-5 mt-3 margin-content text-recipe-label clr-gray-dark form-content">

            <div class="form-group mt-5 d-flex d-block-mb margin-button-mb">
                <label for="name" class="col-md-4 d-flex">Nombre de usuario:</label>
                <div class="col-sm">
                <input type="name" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="userName" placeholder="Juanito" v-model="userName">
                </div>
            </div>

            <div class="form-group mt-5 d-flex d-block-mb margin-button-mb">
                <label for="userLastName" class="col-md-4 d-flex">Apellidos:</label>
                <div class="col-sm">
                <input type="userLastName" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="userLastName" placeholder="Mora Rojas" v-model="userLastName">
                </div>
            </div>

            <div class="form-group mt-5 d-flex d-block-mb margin-button-mb">
                <label for="country" class="col-md-4 d-flex">País:</label>
                <div class="col-sm">
                <input type="country" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="country" placeholder="Costa Rica" v-model="country">
                </div>
            </div>

            <div class="form-group mt-5 d-flex d-block-mb margin-button-mb">
                <label for="email" class="col-md-4 d-flex">Correo electrónico:</label>
                <div class="col-sm">
                <input type="email" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="email" placeholder="usuario@example.com" v-model="email">
                </div>
            </div>

            <div class="form-group mt-5 d-flex d-block-mb margin-button-mb">
                <label for="password" class="col-md-4 d-flex">Contraseña:</label>
                <div class="col-sm">
                <input type="password" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="password" placeholder="*************************" v-model="password">
                </div>
            </div>

            <div v-if="showErrorMessage" class="text-danger mb-3 mt-2 text-center">Debe ingresar su información en todos los campos.</div>

        </div>        
    </form>

    <input type="submit" class="btn-large mt-3 mb-5" value="Registrarse" v-on:click="onClickRegister()"> <!-- @click="onClickRegister -->
    <p v-if="registrationMessage" class="success-message">{{ registrationMessage }}</p> 
    ` 
})