/**
 * This function calculates the total price of the products
 * @param {Array} products cartProduct : Array of Objects
 * @returns {number} Total price of the products
 */
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
}