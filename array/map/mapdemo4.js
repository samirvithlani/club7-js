var bank={
    users:[
        {
            name:"amit",
            transactions:[
                {
                    type:"debit",
                    debitTrans:[
                        {
                            mode:"cash",
                            amount:1000
                        },
                        {
                            mode:"online",
                            amount:2000
                        },
                        {
                            mode:"upi",
                            amount:3000
                        }
                    ]
                },

                {
                    type:"credit",
                    creditTrans:[
                        {
                            mode:"cash",
                            amount:1200
                        },
                        {
                            mode:"online",
                            amount:2500
                        },
                        {
                            mode:"upi",
                            amount:4000
                        }
                    ]
                }
            ]
        }
    ]
}

var dtrac =0
var ctrac =0
bank.users.map((user)=>{
    user.transactions.map((t)=>{
      t.debitTrans?.map((d)=>{
        dtrac+=d.amount
      })
      t.creditTrans?.map((c)=>{
        ctrac+=c.amount
      })
    })
})
console.log(dtrac)
console.log(ctrac)


// debit upi transation....
console.log(upiTrans)