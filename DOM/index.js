// const val = document.getElementById("i");
// console.log(val)
// document.write("Hii guyzzz")
// setTimeout(()=>{
//     document.write("Hloo guyzz")
// },2000)
// const key1 = document.getElementsByClassName("hloo");
//     console.log(key1)
const button = document.getElementsByTagName("button")[0];
console.log(button)
button.addEventListener("click",()=>alert("You clicked it"))
const button1 = document.getElementsByTagName("button")[1]
console.log(button1)
function greet(){
    console.log("Hii guyzz")
}
button1.addEventListener("click",greet)
