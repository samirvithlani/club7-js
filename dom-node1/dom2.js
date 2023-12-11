var orders =[
    {
        id: 1,
        name: "order1",
        items:["pizza","coke","fries"],
        price: 100,
        imageUrl: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        name: "order2",
        items:["burger","coke","fries"],
        price: 200,
        imageUrl: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        name: "order3",
        items:["pizza"],
        price: 300,
        imageUrl: "https://picsum.photos/200/300",
    
    },
    {
        id: 4,
        name: "order4",
        items:["pizza","coke","fries"],
        price: 400,
        imageUrl: "https://picsum.photos/200/300",
    },
    {
        id: 5,
        name: "order5",
        items:["pizza","coke","fries"],
        price: 500,
        imageUrl: "https://picsum.photos/200/300",
    }
]

var ordersdiv = document.getElementById("orders");

for(let i=0;i<orders.length;i++){

    var boxdiv = document.createElement("div");
    boxdiv.className = "box";
    
    idH1 = document.createElement("h1");
    idH1.innerHTML = "Order Id: " + orders[i].id;
    boxdiv.appendChild(idH1);

    nameH2 = document.createElement("h2");
    nameH2.innerHTML = "Order Name: " + orders[i].name;
    boxdiv.appendChild(nameH2);

    for(let j=0;j<orders[i].items.length;j++){
        itemsH4 = document.createElement("h4");
        itemsH4.innerHTML = "Order Items: " + orders[i].items[j];
        boxdiv.appendChild(itemsH4);
    }

    priceH3 = document.createElement("h3");
    priceH3.style.textAlign = "center";
    priceH3.innerHTML = "Order Price: " + orders[i].price;
    boxdiv.appendChild(priceH3);

    //button creation.....
    buttomtag = document.createElement("button");
    buttomtag.innerHTML = "Order Now";

    buttomtag.style.marginLeft = "40%";
    buttomtag.style.marginTop = "10px";
    buttomtag.style.marginBottom = "10px";
    buttomtag.style.padding = "10px";
    buttomtag.style.borderRadius = "10px";
    buttomtag.style.backgroundColor = "green";
    buttomtag.style.color = "white";


    //adding event listener to button
    buttomtag.addEventListener("click",()=>{
        orderNow(orders[i])
    });

    boxdiv.appendChild(buttomtag);



    ordersdiv.appendChild(boxdiv);

}


function orderNow(order){
    //console.log(order.id);
    //alert("Order Now"+x);
    //alert("Order Id: " + order.id + "\nOrder Name: " + order.name + "\nOrder Items: " + order.items + "\nOrder Price: " + order.price);
    alert("Order Id : "+order.id+"\nOrder Name : "+order.name+"\nOrder Items : "+order.items+"\nOrder Price : "+order.price)
}