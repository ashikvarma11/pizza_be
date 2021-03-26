let pizza = {
    id:1,
    name:'asdasd',
    description:'adawd',
    image_url:'adawd',
    category:'adasd',
    price:20
}

let user = {
    id: 1,
    username: 'jhbjsa',
    name: 'asdkhb',
    password: 'kasgd',
    orders:['orderId1','orderId1','orderId1'],
}

// @GET users/:userId/orders
// @GET users/:userId/orders/:orderId
// @POST users/:userId/orders -  add new order for the user
// @UPDATE users/:userId/orders/:orderId
// @PATCH users/:userId/orders/:orderId
// @DELETE users/:userId/orders/:orderId

// We might not need to create Order Schema as we are not
// maintaining a separate list of orders.
// Here the products are Pizzas and we maintain a Schema for it.
// Orders are only associated with Users and we can keep it as a list in 
// Users. Maybe we can create an interface for it and use it while getting the params.
let order = {
    id:1,
    userId: 2,
    pizzaList:[
        {
            pizzaId: 1,
            count: 2
        },
        {
            pizzaId: 3,
            count: 4
        }
    ],
    date: new Date(),
    status: 0  // 0 - PENDING, 1 - ONGOING, 2 - FULFILLED
}