app.component('footer-component', {

    props:{
        image_identifier:{
            type: String,
            default: "Default image"   
        },
    },

    methods: {
       
    },

    template: 

    /*html*/
    `
    <footer class="mt-5 footer-color">
        <div class="row footermb">
            <div class="col-md margin-logo">
                <a href="index.html"><img v-bind:src="image_identifier" class="p-5 p-5-mb img-size-mb ml-mt-mobile" alt="Graphic identifier"></a> 
            </div>

            <div class="col-md margin-top-tb info-footer-mb">
                <div class="row mt-5 margin-top-tb margin-left-tb">
                    <p class="footer-title">Secciones</p>
                    <div class="">
                        <ul class="list-unstyled p-0">
                            <li class="mt-3"><a class="nav-link footer-info" href="#">Categorias</a></li>
                            <li class="mt-4"><a class="nav-link footer-info" href="#">Niveles</a></li>
                            <li class="mt-4"><a class="nav-link footer-info" href="#">Ocasiones</a></li>
                            <li class="mt-4"><a class="nav-link footer-info" href="#">Top 10</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-md margin-top-tb info-footer-mb ms-5 ms-0">
                <div class="row mt-5 margin-botton-tb ml-tb ml-mb">
                    <p class="footer-title">Social</p>
                    <div class="">
                        <ul class="list-unstyled p-0"> 
                            <li class="mt-1"><a class="nav-link footer-info" href="#"><img src="./images/icono-facebook.png" class="icons-size" alt="Instagram"></a></li>
                            <li class="mt-4"><a class="nav-link footer-info" href="#"><img src="./images/icono-instagram.png" class="icons-size" alt="Facebook"></a></li>
                            <li class="mt-4"><a class="nav-link footer-info" href="#"><img src="./images/icono-whatsapp.png" class="icons-size" alt="WhatsApp"></a></li>
                            <li class="mt-4"><a class="nav-link footer-info" href="#"><img src="./images/icono-correo.png" class="icons-size" alt="Correo"></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-md margin-top-tb info-footer-mb mr-footer">
                <div class="row mt-5">
                    <p class="footer-title">Acerca de</p>
                    <div class="mb-3">
                        <ul class="list-unstyled p-0 mb-5">
                            <li class="mt-3"><a class="nav-link footer-info" href="#">Equipo</a></li>
                            <li class="mt-4"><a class="nav-link footer-info" href="#">Términos</a></li>
                            <li class="mt-4"><a class="nav-link footer-info" href="#">Únete</a></li>
                            <li class="mt-4"><a class="nav-link footer-info" href="#">Visión</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>    
    </footer>
  ` 
})