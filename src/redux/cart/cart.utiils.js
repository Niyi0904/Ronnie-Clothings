// creating a function that handles multiple similar items in our array 
export const addItemToCart = (cartItems, cartItemToAdd) => {
    // checking if added items exist in our array
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    // if item exist, create a new object of that item setting the quantity property to increase by 1,  if not return the cartItem and proceed the loop
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }

    // if item does not exist create a new object in cartItems array and assign it a qunatity value of 1
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}