const orderFood = (time,order)=>{

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(order)
        },time)
    })
}



const placeOrder = async(time,order)=>{

    const orderData = await orderFood(time,order)
    console.log("orderData",orderData)

}
console.log("Ordering food...")
placeOrder(3000,{item:"pizza",quantity:"1",size:"large"})
