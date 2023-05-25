app.component('header-nav',{

    props:{
        register:{
            type: String,
            default: "Default register"   
        },

        session:{
            type: String,
            default: "Default session"   
        },

        image_identifier:{
            type: String,
            default: "Default image"   
        },

        image_user:{
            type: String,
            default: "Default image"   
        },
    },

    methods: {
       
    },
  
    template: 

    /*html*/
    `  
    <!--header section-->
    <header class="topnav container-fluid">
        <div>
            <a href="index.html"><img v-bind:src="image_identifier" class="position-relative mt-4 ml-header p-2 margin-tb-logo icons-tb" alt="Graphic identifier"></a>
        </div>
    
        <div class="position-absolute top-0 display-user end-0 mx-5 mt-2 px-5">
            <ul class="nav">
                <li class="position-relative">
                <a class="" href="#">
                    <img v-bind:src="image_user" class="margin-user zoom-user-mb" alt="Perfil" > 
                </a> 
                    <ul class="nav-background-color nav-client-align list-unstyled">
                        <li class="header-no-item"><a class="mt-3 btn-menu nav-link" href="login.html">{{ session }}</a></li>
                        <li class="header-no-item"><a class="mt-3 btn-menu mb-3 nav-link" href="registro-admin.html">{{ register }}</a></li>
                    </ul>  
                </li>
            </ul>
        </div>
    </header>
    <!--header section end-->
    `   
})