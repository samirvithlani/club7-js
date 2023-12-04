var Store = [
    {
        topic:"electro",
        type:[
            {
                name1:"laptop",
                price:10
            },
            {
                name1:"keuboard",
                price:14
            },
            {
                name1:"camera",
                price:12
            }
        ]
    },
    {
        topic:"fashion",
        type:[
            {
                name1:"lipstick",
                price:123
            },
            {
                name1:"nailpaint",
                price:120
            },
            {
                name1:"clothes",
                price:1244
            }
        ]
    }

]



var electronics = Store.find((item)=>item.topic=="electro").type.reduce((sum,item)=>sum+item.price,0)
console.log(electronics);