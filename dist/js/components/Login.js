app.component('login', {

    props:{

    },

    methods: {
    },

    template: 

    /*html*/
    ` 
    <p class="text-titles mb-3 mt-4 mt-tb">Iniciar sesión</p>

    <form action="login.html" method="post" enctype="multipart/form-data">

        <div class="mb-3 mt-3 margin-content text-recipe-label clr-gray-dark form-content">

            <div class="form-group mt-5 d-flex d-block-mb">
                <label for="username" class="col-md-4 d-flex">Nombre de usuario:</label>
                <div class="col-sm">
                  <input type="text" name="username" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="username" placeholder="Usuario_01">
                </div>
            </div>

            <div class="form-group mt-5 d-flex d-block-mb">
                <label for="password" class="col-md-4 d-flex">Contraseña:</label>
                <div class="col-sm">
                  <input type="password" name="tiempo-total" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="password" placeholder="*************************">
                </div>
            </div>

        </div>  

        <div class="text-center mt-2">
            <input class="me-5 d-inline-block btn-large mt-5 mb-5 margin-mb margin-tb" type="submit" value="Iniciar Sesión">
            <input class="me-5 d-inline-block btn-large mt-5 mb-5 mt-tb margin-mb margin-tb mt-0-mb" type="submit" value="¿Olvidó su contraseña?">
        </div>  
         
    </form>
    ` 
})