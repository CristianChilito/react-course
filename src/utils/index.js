/*  
    Función que recibe un array de productos y devuelve la suma de los precios de los productos
    this function receives an array of products and returns the sum of the prices of the products
    products {Array} cartProduct: Array de Objects
    return {Number} sum: Suma de los precios de los productos
*/
export const totalPrice= (products) => {
    let sum = 0
    products.forEach(product => {
        sum += product.price
    })
    return sum

}