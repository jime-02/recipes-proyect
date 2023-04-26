const app = Vue.createApp({

    data() {
        return {
            categories:[ //se establece relacion de ir a buscar el filtro de cada una de las categorias 
                {id:1, name: "Almuerzo"},
                {id:2, name: "Bebidas"},
                {id:3, name: "Desayunos"},
                {id:4, name: "Entradas"},
                {id:5, name: "Postres"},
                {id:6, name: "Sopas"}
              
            ],

            //array 
            all_recipes:[],
            selectedIndex: 0,

            recipes: [ //array
            //objetos
                {id: 1, image:"./images/recipes/patacones.jpg", name: "Patacones", category: "Entradas", time: "20 minutos", level: "Fácil", likes: 4, ingredients: "2 plátanos verdes o pintonessal al gusto, aceite vegetal cantidad para freír, 1 ajo machacado o pasta de ajo (opcional), 1/4 limón", instructions: "1.Pelar el plátano (ver en el video como se pela, es diferente a una banana y bastante engorroso). 2.Cortarlo en rodajas de 2-3 centímetros. 3.En una sartén con aceite calientes, freírlos hasta que estén apenas dorados, apenitas. 4.Aquí está el tema: mojá la parte de abajo de un vaso, bien mojada, y aplastalos sobre una tabla hasta que queden como círculos. 5.Cada 2 ó 3 aplastadas, volvé a mojar el vaso. 6.Da a estos círculos de plátano una segunda fritura, ahora sí, hasta que queden bien dorados. 7.Retirá sobre un papel absorbente. 8.Condimentá con sal y cilantro picado. 9.¡Listo! Ya sabés cómo hacer patacones."},
                {id: 2, image:"./images/recipes/ensalada-papa.jpg", name: "Ensalada de papa y atún", category: "Entradas", time: "30 minutos", level: "Fácil", likes: 10, ingredients: "½ Lechuga 4 Papas 1 trozo de Cebolla 1 manojo de Perejil 2 latas de Atún 2 cucharadas soperas de Mayonesa 1 manojo de Perejil 1 pizca de Sal y Pimienta", instructions: "1-Pela las papas y córtalas en cubos no tan pequeños para evitar que se deshagan en la cocción.2-Lleva las papas cortadas a una olla con agua y sal a la estufa hasta que estén cocidas pero no muy blandas. Una vez listas las papas, escurre el agua de la olla y sírvelas cuidadosamente en un recipiente profundo. Deja que se enfríen.3-Agrega los pimentones picados, el atún, las arvejas y el huevo picado a las papas.4-Mezcla en un recipiente aparte la crema de leche, las mayonesa, la mostaza y el vinagre. Agrega sal al gusto.5-Cubre las papas con la salsa y llévalas al refrigerador hasta que todos los ingredientes estén fríos.6-En el momento de servir, espolvorea cilantro picado."},
                {id: 3, image:"./images/recipes/sopa-azteca.jpg", name: "Sopa azteca", category: "Lunch", time: "20 minutos", level: "Intermedio", likes: 15, ingredients: "2 pechugas de pollo2 cebollas, finamente picadas1 lata de tomates3 dientes de ajo1 zanahoria1 ajoporro1 apio3 tazas de caldo de pollo1 cucharada de chile chipotle seco ahumadoCilantro para decorarSal y pimienta al gusto", instructions: "Corte las pechugas de pollo en trozos. Reserve.En una licuadora, procese los tomates con el chile seco.En una olla, coloque aceite de achiote y sofría las cebollas y el ajo. Incorpore la mezcla de tomates y chile y cocine por unos 5 minutos.Añada el pollo, las zanahorias, el ajoporro y el apio picaditos junto con el caldo de pollo. Condimente con sal y pimienta y cocine por 20 minutos.Sirva caliente, decorada con cilantro y acompañe con tortillas, queso y aguacate."},
                {id: 4, image:"./images/recipes/soufle.jpg", name: "Soufflé de Chocolate", category: "Postres", time: "30 minutos", level: "Intermedio", likes: 8, ingredients: "90 gramos de chocolate negro para fundir 60 gramos de cacao en polvo 4 claras de huevo 1 yema de huevo 40 gramos de mantequilla 35 gramos de azúcar 1 cucharada sopera de mantequilla para los moldes 3 cucharadas soperas de azúcar para los moldes 1 pizca de sal 2 cucharadas soperas de azúcar glass", instructions: "Con una brocha, unta unos moldes aptos para el horno con un poco de mantequilla, cubriendo la base y los laterales. Espolvorea azúcar dentro de los moldes para que se quede pegada en ellos. Reserva en la nevera. En un bol pon la yema de huevo y los 40 g de azúcar, bate con unas varillas hasta que la mezcla blanquee. Reserva. En un bol pon la yema de huevo y los 40 g de azúcar, bate con unas varillas hasta que la mezcla blanquee. Reserva. Incorpora el chocolate fundido con la mantequilla al bol de la mezcla de la yema con el azúcar, mezcla bien hasta integrar todos los ingredientes. A esta mezcla añade el cacao en polvo, mezcla de nuevo. Monta las claras a punto de nieve, pon una pizca de sal para ayudar a que monten bien las claras, han de quedar unos picos firmes. Añade una parte de las claras montadas al bol del chocolate y mezcla. Sigue añadiendo las claras y velas mezclando con movimientos envolventes. Añade la mezcla de chocolate en los tarros para el horno, con estas cantidades salen 3-4 soufflés según la capacidad de los tarros. Se han de llenar justo al ras, limpia los bordes con un papel de cocina. Saca, espolvoréalos con un poco de azúcar glass y sirve enseguida. El soufflé de chocolate se baja rápidamente después de sacarlo del horno, es normal."},
                
                {id: 5, image:"./images/recipes/margarita.jpg", name: "Margarita", category: "Bebidas", time: "5 minutos", level: "Fácil", likes: 11, ingredients: "60 ml de tequila blanco o reposado40 ml. de triple seco o de licor de naranja60 ml zumo de limaSal y sirope de azúcar (para adornar la copa en su superficie)HieloCopa de boca ancha para cóctel Margarita", instructions: "Primero decoraremos el borde de sal. Cogemos un vaso ancho y ovalado (el clásico de margarita) lo mojamos en un poco de sirope de azúcar presionando y a continuación, lo pasamos por un plato con sal, colocamos la lima y reservamos.Exprimimos las limas para extraer su zumo, puedes utilizar un prensador de limas que resulta de lo más útil pero también te sirve cualquier exprimidor que utilices para limones o naranjas. En nuestro caso no colamos el zumo, aunque si cae alguna pepita la retiramos.Con la ayuda del vaso medidor vertemos en la coctelera el zumo de lima recién exprimido, el tequila, y el triple seco, en este orden.Metemos cuatro o cinco cubos de hielo y agitamos bien durante unos 15 segundo, con brío y arte. Luego servimos el cóctel con ayuda del filtro de la propia coctelera o el colador en el vaso que tenemos preparado anteriormente."},
                {id: 6, image:"./images/recipes/fideos.jpg", name: "Fideos en salsa blanca", category: "Almuerzo", time: "36 minutos", level: "Intermedio", likes: 7, ingredients: "500 ml.) 2 tazas de agua(65 g.) 1 sobre de Crema de Hongos (5 ml.) 1 cucharadita de aceite de oliva(75 g.) ½ taza de cebolla cortada finamente(8 g.) 2 dientes de ajo cortados finamente(230 g.) 3 tazas de hongos blancos cortados en lascas(130 g.) 2 taza de hongos Cremini cortados en lascas(296 g.) 1 lata de Crema de LecheSal y pimienta al gusto(820 g.) 6 tazas de pasta larga cocida", instructions: "1. En un tazón, disolver la Crema de Hongos en el agua y reservar.2. En una cacerola a fuego medio coloca el aceite y sofríe la cebolla, el ajo y los hongos hasta que estén dorados.3. Verter la crema disuelta, revolver y cocinar hasta que hierva. Agregar la Crema De Leche, bajar el fuego y cocinar por 5 minutos más. Ajustar punto de sal y pimienta4. Añadir la pasta y revolver.5. Servir y disfrutar"},
                {id: 7, image:"./images/recipes/galletas.jpg", name: "Galletas con Chispas de Chocolate", category: "Postres", time: "15 minutos", level: "Fácil", likes: 5, ingredients: "2 tazas de Harina (280 gramos) 2 unidades de Huevos 1 taza de Chispas de chocolate 1 taza de Azúcar (200 gramos) 1 taza de Mantequilla (225 gramos) 1 cucharadita de Polvos para hornear", instructions: "Coge un recipiente y mezcla bien la mantequilla con el azúcar para empezar a elaborar las galletas caseras. Luego incorpora los huevos y sigue batiendo. Una vez integrados, agrega la harina previamente tamizada con los polvos de hornear y mezcla hasta obtener una masa homogénea. Por último, añade las chispas de chocolate y mézclalas en la masa con una cuchara, espátula o las manos. Puedes dejar reposar la masa en el frigorífico durante 20 minutos y volver a amasarla durante 3 minutos al retirarla. De esta forma adquirirá mayor consistencia Da forma a tus galletas y colócalas sobre la bandeja del horno, con cierta separación. Hornea las galletas con chispas de chocolate durante 20 minutos y ¡listo!"},
                {id: 8, image:"./images/recipes/galletas.jpg", name: "Galletas con Chispas de Chocolate", category: "Postres", time: "15 minutos", level: "Fácil", likes: 5, ingredients: "2 tazas de Harina (280 gramos) 2 unidades de Huevos 1 taza de Chispas de chocolate 1 taza de Azúcar (200 gramos) 1 taza de Mantequilla (225 gramos) 1 cucharadita de Polvos para hornear", instructions: "Coge un recipiente y mezcla bien la mantequilla con el azúcar para empezar a elaborar las galletas caseras. Luego incorpora los huevos y sigue batiendo. Una vez integrados, agrega la harina previamente tamizada con los polvos de hornear y mezcla hasta obtener una masa homogénea. Por último, añade las chispas de chocolate y mézclalas en la masa con una cuchara, espátula o las manos. Puedes dejar reposar la masa en el frigorífico durante 20 minutos y volver a amasarla durante 3 minutos al retirarla. De esta forma adquirirá mayor consistencia Da forma a tus galletas y colócalas sobre la bandeja del horno, con cierta separación. Hornea las galletas con chispas de chocolate durante 20 minutos y ¡listo!"},
                
            ]
        }
    },

    mounted:function(){
        this.all_recipes = this.recipes; //que guarde una copia de los datos
    },

    methods: { //area donde se establecen todas las funciones
       /* onClickLike(index){
           // console.log("btn-click");
           //this.likes += 1;
           //console.log("index=" + index);

           this.recipes[index].likes += 1;

        },

        onClickUnLike(index){
           // if(this.likes > 0) this.likes -= 1;
           if(this.recipes[index].likes > 0) this.recipes[index].likes -= 1;
        },*/
        
        onClickCategory(category){
           // console.log("category " + category);

           //FILTER hace el recorrido de busqueda para revisar el array y filtrar lo que se necesita

           //saber la categoria que estan enviando para guardarla ,se envia todo a allrecipes y despues se filtra

           if(category =="All"){
                this.recipes = this.all_recipes;
           }else{
                this.recipes = this.all_recipes;

                //variable
                let recipesInCategory = this.recipes.filter(function(el){
                    return el.category === category;
               });

               this.recipes = recipesInCategory;
           }

        },

        //ver la receta completa en pantalla con el modal
        onClickViewRecipe(index){
            this.selectedIndex = index;
        },

        onClickPrev(){
            this.selectedIndex--;
            if(this.selectedIndex < 0){
                this.selectedIndex = this.recipes.length - 1;;
            }
        },

        onClickNext(){
            this.selectedIndex++;
            if(this.selectedIndex >= this.recipes.length){
                this.selectedIndex = 0;
            }
        }

    }
});