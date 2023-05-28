app.component('recover-key', {

    props:{

        title:{
            type: String,
            default: "Default title"
        },

        message:{
            type: String,
            default: "Default message"
        },

        label_mail:{
            type: String,
            default: "Default label mail"
        },

        send_code:{
            type: String,
            default: "Default"
        },

        contrasena_id:{
            type: String,
            default: "Default"
        },

        for_label:{
            type: String,
            default: "Default"
        }

    },

    methods: {
    },

    template: 

    /*html*/
    ` 
    <p class="text-titles mb-2 mt-3">{{ title }}</p>

    <p class="text-info-name text-center mt-3 mt-tb">{{ message }}</p>

        <div class="mb-5 mt-3 text-recipe-label clr-gray-dark mt-tb form-content ml-form-mb mt-0-mb">
            <div class="form-group mt-5 d-flex d-block-mb margin-mb">
                <label :for="for_label" class="ms-3 col-md-4 d-flex">{{ label_mail }}:</label>
                <div class="col-sm">
                  <input type="text" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" :id="contrasena_id" placeholder="usuario@example.com">
                </div>
            </div> 
        </div>  

    <a class="mt-5 btn-large" href="verificar-codigo.html">{{ send_code }}</a>

    ` 
})