app.component('user-register', {

    props:{

    },

    methods: {
    },

    template: 

    /*html*/
    ` 
    <form action="response.php" method="post" enctype="multipart/form-data">
        
        <div class="mb-5 mt-3 margin-content text-recipe-label clr-gray-dark form-content">

            <div class="form-group mt-5 d-flex d-block-mb margin-button-mb">
                <label for="nombre-admin" class="col-md-4 d-flex">Nombre completo:</label>
                <div class="col-sm">
                <input type="text" name="nombre-receta" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="nombre-admin" placeholder="Juanito Mora Rojas">
                </div>
            </div>

            <div class="form-group mt-5 d-flex d-block-mb margin-button-mb">
                <label for="usuario" class="col-md-4 d-flex">Nombre de usuario:</label>
                <div class="col-sm">
                <input type="text" name="tiempo-prep" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="usuario" placeholder="Usuario_01">
                </div>
            </div>

            <div class="form-group mt-5 d-flex d-block-mb margin-button-mb">
                <label for="email" class="col-md-4 d-flex">Correo electrónico:</label>
                <div class="col-sm">
                <input type="text" name="tiempo-coccion" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="email" placeholder="usuario@example.com ">
                </div>
            </div>

            <div class="form-group mt-5 d-flex d-block-mb margin-button-mb">
                <label for="clave" class="col-md-4 d-flex">Contraseña:</label>
                <div class="col-sm">
                <input type="password" name="tiempo-total" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="clave" placeholder="*************************">
                </div>
            </div>

        </div>        
    </form>

    <input type="submit" class="btn-large mt-3 mb-5" value="Registrarse">
    
    ` 
})