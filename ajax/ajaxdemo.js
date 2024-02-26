const readDataFromFile =()=>{
    //read data from file using ajax...
    //AJAX --> Asynchronous JavaScript and XML
    //xhr -->XMLHttpRequest

    const output = document.getElementById("output");

    var xhr = new XMLHttpRequest();
    //true stands for asynchronous
    xhr.open("GET","../data.txt",true)
    xhr.send(); //request send..
    xhr.onload = ()=>{
        //console.log(xhr.responseText);
        output.innerHTML = xhr.responseText;
    }


}


const getDataFromServer =()=>{


        var xhr = new XMLHttpRequest();
        xhr.open("GET","https://node5.onrender.com/user/user",true)
        xhr.send(); //request send..
        xhr.onload = ()=>{
            //console.log(xhr.responseText);
            //var data = xhr.responseText;
            var data = JSON.parse(xhr.responseText);
            console.log(data);
        }


}


//getDataFromServer();
const readJsonFile =()=>{


        var xhr = new XMLHttpRequest();
        xhr.open("GET","./student.json",true)
        xhr.send(); //request send..

        xhr.onload = ()=>{
            var data = JSON.parse(xhr.responseText);
            console.log(data);
        }



}
readJsonFile();