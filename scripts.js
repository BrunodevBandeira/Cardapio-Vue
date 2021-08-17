var products = [
        {
            "photo": "img/big-mac.png",
            "name": "Big Mac",
            "price": 5.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/mc-chicken.png",
            "name": "Mc Chicken",
            "price": 4.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/double-cb.png",
            "name": "Double Cheese Burger",
            "price": 2.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/fries.png",
            "name": "Batata frita",
            "price": 2.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/nuggets.png",
            "name": "Mc Nuggets",
            "price": 3.49,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/salad.png",
            "name": "Salada",
            "price": 2.79,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/cola.png",
            "name": "Coca Cola",
            "price": 1.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/lipton.png",
            "name": "Ice Tea",
            "price": 1.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/water.png",
            "name": "Água",
            "price": 1.49,
            "active": false,
            "quantity": 1
        }
];

const SelfServiceMachine = { //OBJETO
    data() {
        return {
            products: window.products,
            orderTotal: 0
        }
    },
    methods: {
        toggleActive: function(item){
            item.active = !item.active;
        },
        total: function(){
            var total = 0;
            this.products.forEach(function(item){
                if (item.active){
                    total+= item.price * item.quantity;
                }
            });
           return total.toFixed(2);
        }
    }
}; //Fim do Objeto

Vue.createApp(SelfServiceMachine).mount('#app');
                                  


/* createApp()
            Guarda a lógica da aplicação

    mount('#app');
            Inicia a lógica da aplicação indicando qual o elmento HTML que a aplicação vai rodar, no caso é o id="app" na linha 15 do HTML

    
    data() 
           É onde vem a manipulação dos databinding, é a função que retorna os dados da aplicação.

    
*/