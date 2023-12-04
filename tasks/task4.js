var company = [
    {
        name:"IT",
        employees:[
            {
                name:"John",
                salary:1000,
                gender:"male"
            },
            {
                name:"Mayur",
                salary:800,
                gender:"male"

            },
            {
                name:"Sara",
                salary:500,
                gender:"female"
            }
        ]
    },
    {
        name:"HR",
        employees:[
            {
                name:"Sara",
                salary:500,
                gender:"female"
            },
            {
                name:"Saravi",
                salary:700,
                gender:"female"
            }
        ]
    }
]


//find total salary of all it employees

var sal = company.find((item)=>item.name=="IT").employees.reduce((sum,item)=>sum+item.salary,0)
console.log(sal);

//find toatal salry of male in it department
var sal1 = company.find((item)=>item.name=="IT").employees.filter((emp)=>emp.gender=="male").reduce((sum,item)=>sum+item.salary,0)
console.log(sal1);

