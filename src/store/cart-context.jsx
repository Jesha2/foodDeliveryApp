import React from 'react'
// creting a contextComponent
const CartContext = React.createContext(// notice eventhough the file doesnt start withCapital c and its not a function, just an obj. in cartprovider we create excat obj but with lowercaseC for dynamically updatin
    { items:[],
        totalAmount:0,
        addItem :item=>{},
        removeItem: (id)=>{}
    }
)

export default CartContext;
