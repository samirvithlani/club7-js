var data ={
    cat:[
        {
            category:"Electronics",
            products:[
                {
                    name:"TV",
                    price:1000
                },
                {
                    name:"Radio",
                    price:80
                }
            ]

        },
        {
            category:"Fashion",
            products:[
                {
                    name:"Shirt",
                    price:30
                },
                {
                    name:"Pants",
                    price:50
                }
            ]

            
        }
    ]
}
//find total amount of electronics stocks  using filter find and reduce

var total = 0;
//.products.reduce((acc, item)=>acc+item.price,0);
var electronics = data.cat.find((item)=>item.category=="Fashion").products.reduce((sum,item)=>sum+item.price,0)
console.log(electronics);