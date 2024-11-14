// ----------------------rejexp-------------------------

// let myText="I am muneeb amdani";
// let find=myText.match("muneeb");
// console.log(find);


// let myText="I am muneeb amdani";
// let pattern=/muneeb/i;
// let find=myText.match(pattern);
// console.log(find);
// document.getElementById("demo").innerHTML=find;


// let myText="I am muneeb amdani my age is 16 and my current semester is 7";
// let pattern=/muneeb|7/ig;
// let find=myText.match(pattern);
// console.log(find);
// document.getElementById("demo").innerHTML=find;


// const numbers=[4,9,16,25];

// numbers.map((data)=>
// {
//     console.log(data+1)
// }
// )


// const numbers=[4,9,16,25];

// let result=numbers.map((data)=>
// {
//     console.log(data+1)
//     return data+1;
// }
// )
// console.log(result);


// const numbers=[4,9,16,25];

// let result=numbers.map((data)=>
// {
//     console.log(data+1)
//     return "muneeb";
// }
// )
// console.log(result);


// const numbers=[4,9,16,25];

// let result=numbers.map((data,index)=>
// {
//     if(index===2){
//         data=data+1;
//     }
//     console.log(data,index);
//     return "muneeb";
// }
// )
// console.log(result);


// const numbers=[4,9,16,25];

// let result2=numbers.forEach((element,index) => {
//     if(index===2){
//         element=element+1
//     }
//     console.log(element);
// });
// console.log(result2);
// console.log(numbers);



// let ages=[17,23,15,26];
// let result3= ages.filter((age) =>{
//     console.log(age)
//     if(age>=18){
//         return age;
//     }
// })
// console.log(result3);
// document.getElementById("demo").innerHTML=result3;


// let ages=[17,23,15,26];
// let result4= ages.find((age) =>{
//     if(age>18){
//         return age;
//     }
// })
// console.log(result4);
// document.getElementById("demo").innerHTML=result4;


// let value=5;
// value+=adder();
// value+=adder();
// value+=adder();
// console.log(value)
// function adder(){
//     let counter=value;
//     for(let i=0;i<value;i++){
//         counter++;
//     }
//     return counter;
    
// }


// let value=5;
// value+=adder();
// value+=adder();
// value+=adder();
// console.log(value)
// function adder(){
//     let counter=value;
//     for(let i=0;i<value;i++){
//         counter++;
//     }
//     if(counter==10){
//         return undefined;
//     }
//     return counter;
    
// }
// debugger;


// const output=document.getElementById("output");
// const email=document.getElementById("email");
// const btn=document.getElementById("check-btn");
// const emailPattern=/([A-Za-z0-9._-]+@[A-Za-z0-9]+\.[A-Za-z0-9]+)\w+/;
// btn.addEventListener("click",(e)=>{
// const value=email.value;
// const result=value.match(emailPattern);
// console.log(result)
// })


// const output=document.getElementById("output");
// const email=document.getElementById("email");
// const btn=document.getElementById("check-btn");
// const emailPattern=/([A-Za-z0-9._-]+@[A-Za-z0-9]+\.[A-Za-z0-9]+)\w+/;
// btn.addEventListener("click",(e)=>{
// const value=email.value;
// const result=emailPattern.test(value);
// console.log(result)
// })


const output=document.getElementById("output");
const email=document.getElementById("email");
const btn=document.getElementById("check-btn");
const emailPattern=/([A-Za-z0-9._-]+@[A-Za-z0-9]+\.[A-Za-z0-9]+)\w+/;
btn.addEventListener("click",(e)=>{
const value=email.value;
const result=emailPattern.test(value);
let response="";
if(result){
    response="Invalid Email";
    output.style.color="red";
}else{
    response="Valid Email";
    output.style.color="green";
}
output.textContent=response;
console.log(result)
})