app.component('recipe-register', {

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
                <label for="nombre-receta" class="col-md-4 d-flex">Nombre receta:</label>
                <div class="col-sm">
                <input type="text" name="nombre-receta" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="nombre-receta" placeholder="Arroz con pollo...">
                </div>
            </div>

            <div class="form-group mt-5 d-flex d-block-mb margin-button-mb">
                <label for="tiempo-prep" class="col-md-4 d-flex">Tiempo preparación:</label>
                <div class="col-sm">
                <input type="text" name="tiempo-prep" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="tiempo-prep" placeholder="10 min, 30 min, 1 hora...    ">
                </div>
            </div>

            <div class="form-group mt-5 d-flex d-block-mb margin-button-mb">
                <label for="tiempo-coccion" class="col-md-4 d-flex">Tiempo de cocción:</label>
                <div class="col-sm">
                <input type="text" name="tiempo-coccion" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="tiempo-coccion" placeholder="10 min, 30 min, 1 hora...    ">
                </div>
            </div>

            <div class="form-group mt-5 d-flex d-block-mb margin-button-mb">
                <label for="tiempo-total" class="col-md-4 d-flex">Tiempo total:</label>
                <div class="col-sm">
                <input type="text" name="tiempo-total" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="tiempo-total" placeholder="10 min, 30 min, 1 hora...    ">
                </div>
            </div>

            <div class="form-group mt-5 d-flex d-block-mb margin-button-mb">
                <label for="porciones" class="col-md-4 d-flex">Porciones:</label>
                <div class="col-sm">
                <input type="text" name="porciones" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" id="porciones" placeholder="1, 2, 3, 4...   ">
                </div>
            </div>

            <div class="form-group margin-right mt-5 mb-5 d-flex d-block-mb margin-button-mb">
                <label for="nivel" class="col-md-4 d-flex">Nivel complejidad:</label>
                <select name="nivel" class="form-control-lg ms-5 shadow-lg text-recipe-textarea textarea-width input-mb" id="nivel">
                    <option class="title-medium-light">Fácil</option>
                    <option class="title-medium-light">Intermedio</option>
                    <option class="title-medium-light">Avanzado</option> 
                </select>
            </div>

            <div class="form-group margin-right mt-5 mb-5 d-flex d-block-mb margin-button-mb">
                <label for="categoria" class="col-md-4 d-flex">Categoría:</label>
                <select name="categoria" class="form-control-lg ms-5 shadow-lg text-recipe-textarea textarea-width input-mb" id="categoria">
                    <option class="title-medium-light">Almuerzo</option>
                    <option class="title-medium-light">Bebida</option>
                    <option class="title-medium-light">Desayuno</option>
                    <option class="title-medium-light">Entradas</option>
                    <option class="title-medium-light">Postres</option>
                    <option class="title-medium-light">Sopas</option>
                </select>
            </div>

            <div class="form-group margin-right mt-5 mb-5 d-flex d-block-mb margin-button-mb">
                <label for="ocasion" class="col-md-4 d-flex">Ocasión:</label>
                <select name="ocasion" class="form-control-lg ms-5 shadow-lg text-recipe-textarea textarea-width input-mb" id="ocasion">
                    <option class="title-medium-light">Todas</option>
                    <option class="title-medium-light">Cumpleaños</option>
                    <option class="title-medium-light">Día del padre</option>
                    <option class="title-medium-light">Día de la madre</option>
                    <option class="title-medium-light">Día del niño</option>
                    <option class="title-medium-light">Navidad</option>
                    <option class="title-medium-light">Semana Santa</option>
                    <option class="title-medium-light">Verano</option> 
                </select>
            </div>

            <div class="form-group margin-right mt-5 mb-4 d-flex d-block-mb margin-button-mb">
                <label for="descripcion" class="col-md-4 d-flex">Descripción:</label>
                <textarea name="descripcion" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" placeholder="Esta receta.." rows="5" id="descripcion"></textarea>
            </div>

            <div class="form-group margin-right mt-5 mb-4 d-flex d-block-mb margin-button-mb">
                <label for="ingredientes" class="col-md-4 d-flex">Ingredientes:</label>
                <textarea name="ingredientes" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" placeholder="Lista de ingredientes.." rows="5" id="ingredientes"></textarea>
            </div>

            <div class="form-group margin-right mt-5 mb-4 d-flex d-block-mb margin-button-mb">
                <label for="pasos" class="col-md-4 d-flex">Pasos:</label>
                <textarea name="pasos" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" placeholder="Pasos de receta.." rows="5" id="pasos"></textarea>
            </div>

            <div class="custom-file title-medium mt-5 mb-2 d-flex margin-content display-photo-tb">
                <label class="custom-file-label col-md-4 d-flex d-block-mb margin-button-mb" for="recipe_img">Seleccionar foto</label>
                <img id="preview" src="./imgs/preview.png" width="188" height="190" alt="Preview" class="preview-img-mb">
                <input type="file" name="recipe_img" class="ms-5 file-size-mb" id="recipe_img" lang="es" onchange="readURL(this)">
            
            </div>
        </div>        
    </form>

    <input type="submit" class="btn-large mb-3" value="Guardar receta">
    
    ` 
})