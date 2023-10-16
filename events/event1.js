function updateBox(event){

    console.log(event);
    var x = document.getElementById("prod")
    x.style.height = "400px";
    x.style.width = "400px";

}
function updateBox1(){

    var x = document.getElementById("prod")
    x.style.height = "200px";
    x.style.width = "200px";


}
function updateBox2(){

    var x = document.getElementById("div1")
    x.innerHTML = "Hello World";
}
function zoomout(){

    var x = document.getElementById("image")
    x.style.height = "400px";
    x.style.width = "500px";
}