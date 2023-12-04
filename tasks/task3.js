var product =[
    {
        
        electronic: [
            {
                // id : 1,
                namee :"juicer",
                amount : 4000,
                
            },
            {
                namee : "watch",
                amount : 2000,
            },
            {
                namee : "dryer",
                amount : 3000,
            }
        ],


        fashion: [
            {
                // id : 1,
                namee :"jeans",
                amount : 4000,
                
            },
            {
                namee : "tshirt",
                amount : 2000,
            },
            {
                namee : "band",
                amount : 3000,
            }
        ]
    },
]


var total = 0;
product.forEach((prod)=>{
    total = total + prod.electronic.reduce((acc, item)=>acc+item.amount,0);
})

console.log(total);

