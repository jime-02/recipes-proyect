app.component('password-change', {

    props:{

    },

    methods: {
    },

    template: 

    /*html*/
    ` 
    <p class="text-titles mb-2 mt-3 mt-tb mt-0-mb">Cambio de contraseña</p>

    <div class="mb-5 mt-3 margin-content text-recipe-label clr-gray-dark form-content ml-form-mb mt-0-mb">
        <div class="form-group mt-5 d-flex d-block-mb margin-mb">
            <label for="contrasena" class="ms-3 col-md-4 d-flex">Ingrese la nueva contraseña:</label>
            <div class="col-sm">
              <input type="password" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="contrasena" placeholder="***********************">
            </div>
        </div>

        <div class="form-group mt-5 d-flex d-block-mb margin-mb">
            <label for="clave" class="ms-3 col-md-4 d-flex">Repita la contraseña:</label>
            <div class="col-sm">
              <input type="password" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="clave" placeholder="***********************">
            </div>
        </div>
    </div>  

    <a class="mt-3 btn-large mt-tb" href="comentario.html">Verificar</a>

    ` 
})