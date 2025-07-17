// Traditional Function
let order_list = [100,400,200,600,100]
let threshold = 5
total_cost(order_list,threshold)
function total_cost(order_list,threshold){
    let price = 0
    let discount = 0
    for(let i = 0; i < order_list.length; i++) {
        price += order_list[i]
    }
    if(order_list.length >= threshold){
        discount = price/10
        price = price - discount
        console.log(`Total price of the order is ${price} with discount of ${discount}`)
        return
    }
    console.log(`Total price of the order is ${price} with no discount`)
}
