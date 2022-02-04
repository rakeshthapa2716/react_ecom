const init = []
const cardHandle = (state=init, action)=>{
    const product = action.payload;

    switch(action.type){
        case 'ADD_ITEM':
        const existingItem = state.find((item)=>{
            return item.id === product.id
    })
    if(existingItem){
        return state.map((item)=>item.id===product.id ? {...item,qty:item.qty + 1}: item)
    }else{
        const product = action.payload;
        return [...state , {...product,qty:1}]
    }
    break;
    case "DEL_ITEM":
        const existing = state.find((itemId)=>{
            return itemId.id === product.id
        })
        if(existing.qty === 1){
            return state.filter((item)=>item.id !== product.id)
        }else{
            return state.map((item)=> item.id === product.id ? {...item,qty:item.qty - 1}: item)
        }
        break;
        default:
            return state
    }
}
export default cardHandle;