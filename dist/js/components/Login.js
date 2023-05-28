app.component('login', {

    props:{
        title:{
            type: String,
            default: "Default title"
        },

        titlelabel:{
            type: String,
            default: "Default password label"
        },

        action_click:{
            type: String,
            default: "Default click"
        },

        username_label:{
            type: String,
            default: "Default username"
        },

        username_name:{
            type: String,
            default: "Default"
        },

        username_Id:{
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

        submit_button_label:{
            type: String,
            default: "Default"
        },

        submit_label_forgot:{
            type: String,
            default: "Default"
        },

        for_label_user:{
            type: String,
            default: "Default"
        },

        for_label_password:{
            type: String,
            default: "Default"
        },

    },

    methods: {
    },

    template: 

    /*html*/
    ` 
    <p class="text-titles mb-3 mt-4 mt-tb">{{title}}</p>

    <form :action="action_click" method="post" enctype="multipart/form-data">

        <div class="mb-3 mt-3 margin-content text-recipe-label clr-gray-dark form-content">

            <div class="form-group mt-5 d-flex d-block-mb">
                <label :for="for_label_user" class="col-md-4 d-flex">{{ username_label }}:</label>
                <div class="col-sm">
                  <input type="text" :name="username_name" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" :id="username_Id" placeholder="Usuario_01">
                </div>
            </div>

            <div class="form-group mt-5 d-flex d-block-mb">
                <label :for="for_label_password" class="col-md-4 d-flex">{{ titlelabel }}:</label>
                <div class="col-sm">
                  <input type="password" :name="password_name" class="form-control ms-5 shadow-lg text-recipe-textarea input-mb" :id="password_id" placeholder="*************************">
                </div>
            </div>

        </div>  

        <div class="text-center mt-2">
            <input class="me-5 d-inline-block btn-large mt-5 mb-5 margin-mb margin-tb" type="submit" :value="submit_button_label">
            <input class="me-5 d-inline-block btn-large mt-5 mb-5 mt-tb margin-mb margin-tb mt-0-mb" type="submit" :value="submit_label_forgot">
        </div>  
         
    </form>
    ` 
})