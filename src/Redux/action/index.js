
export const addItems = (product) =>{
    return{
        type:"ADD_ITEM",
        payload:product,
    }
}
export const delItems = (product) =>{
    return{
        type:"DEL_ITEM",
        payload:product,
    }
}