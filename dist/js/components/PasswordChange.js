app.component('password-change', {

    props:{
        title:{
          type: String,
          default: "Default title"
        },

        new_password:{
          type: String,
          default: "Default"
        },

        repeat_new_password:{
          type: String,
          default: "Default"
        },

        new_password_for:{
          type: String,
          default: "Default"
        },
        new_password_id:{
            type: String,
            default: "Default"
        },
           
        repeat_new_password_for:{
          type: String,
          default: "Default"
        },
        repeat_new_password_id:{
          type: String,
          default: "Default"
        },
    },

    methods: {
    },

    template: 

    /*html*/
    ` 
    <p class="text-titles mb-2 mt-3 mt-tb mt-0-mb">{{title}}</p>

    <div class="mb-5 mt-3 margin-content text-recipe-label clr-gray-dark form-content ml-form-mb mt-0-mb">
        <div class="form-group mt-5 d-flex d-block-mb margin-mb">
            <label :for="new_password_for" class="ms-3 col-md-4 d-flex">{{ new_password }}:</label>
            <div class="col-sm">
              <input type="newpassword" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" :id="new_password_id" placeholder="***********************">
            </div>
        </div>

        <div class="form-group mt-5 d-flex d-block-mb margin-mb">
            <label :for="repeat_new_password_for" class="ms-3 col-md-4 d-flex">{{repeat_new_password}}:</label>
            <div class="col-sm">
              <input type="password" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" :id="repeat_new_password_id" placeholder="***********************">
            </div>
        </div>
    </div>  

    <a class="mt-3 btn-large mt-tb" href="comentario.html">Verificar</a>

    ` 
})