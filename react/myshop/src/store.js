
import { configureStore, createSlice } from '@reduxjs/toolkit'; 


const productSlice=createSlice({
    name:'products',

    initialState : {
        veg : [
           { name:'tomato', price:120.00},
           { name:'potato', price:90.00}
        ],
        nonveg : [
            { name:'chiken', price:220.00},
            { name:'fish', price:320.00}
        ]
    }, 
    reducers:{}
});

const cartSlice=createSlice({

    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{

            const stat=state.find(item=>item.name === action.payload.name);
            if(stat)
            {
                stat.quantity +=1; 
            }
            else
            {
                state.push({...action.payload,quantity:1});
            }
        },

        removeFromCart:(state,action)=>{

            const stat=state.find(item=>item.name === action.payload.name);

            if(stat)
            {
                if(stat.quantity === 1)
                {
                    return state.filter(item=>item.name !== stat.name);
                }
                else
                {
                    stat.quantity -= 1;
                }
            }
        },

        deleteFromCart:(state,action)=>{

            return state.filter(product=>product.name !== action.payload.name);

        }
    } 
});

const store=configureStore({

    reducer:{
        products:productSlice.reducer,
        cart:cartSlice.reducer
    }
});
export const {addToCart,removeFromCart,deleteFromCart} = cartSlice.actions;
export default store;