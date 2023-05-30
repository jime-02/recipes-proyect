app.component('user-register', {

    props:{
        title:{
            type: String,
            default: "Default title"
        },

        complete_name:{
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

        completename_name:{
            type: String,
            default: "Default"
        },
        completename_id:{
            type: String,
            default: "Default"
        },

        username_name:{
            type: String,
            default: "Default"
        },
        username_id:{
            type: String,
            default: "Default"
        },

        email_name:{
            type: String,
            default: "Default"
        },
        email_id:{
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

    },

    methods: {
    },

    template: 

    /*html*/
    ` 
    <p class="text-titles mb-2 mt-2">{{title}}</p>

    <form action="response.php" method="post" enctype="multipart/form-data">
        
        <div class="mb-5 mt-3 margin-content text-recipe-label clr-gray-dark form-content">

            <div class="form-group mt-5 d-flex d-block-mb margin-button-mb">
                <label for="nombre-admin" class="col-md-4 d-flex">{{ complete_name }}</label>
                <div class="col-sm">
                <input type="text" :name="completename_name" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" :id="completename_id" placeholder="Juanito Mora Rojas">
                </div>
            </div>

            <div class="form-group mt-5 d-flex d-block-mb margin-button-mb">
                <label for="usuario" class="col-md-4 d-flex">{{ user_name }}</label>
                <div class="col-sm">
                <input type="text" :name="username_name" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" :id="username_id" placeholder="Usuario_01">
                </div>
            </div>

            <div class="form-group mt-5 d-flex d-block-mb margin-button-mb">
                <label for="email" class="col-md-4 d-flex">{{ email }}</label>
                <div class="col-sm">
                <input type="text" :name="email_name" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" :id="email_id" placeholder="usuario@example.com ">
                </div>
            </div>

            <div class="form-group mt-5 d-flex d-block-mb margin-button-mb">
                <label for="clave" class="col-md-4 d-flex">{{password}}:</label>
                <div class="col-sm">
                <input type="password" :name="password_name" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" :id="password_id" placeholder="*************************">
                </div>
            </div>

        </div>        
    </form>

    <input type="submit" class="btn-large mt-3 mb-5" value="Registrarse">
    
    ` 
})