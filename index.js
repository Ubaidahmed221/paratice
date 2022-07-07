 // callback function
    
//     var funA = ()=>{
//         setTimeout(function(){
//             console.log('welcome')
//         })
//     }
//     var funB =()=>{
//         console.log('not welcome')
//     }
//  funA()
//  funB()

 // function with parameter

//  function hello(){
//      alert('welcomes')
//  }
//  hello()

// function hello(fname ="ubaid",lname ="ahmed"){
//     document.write( fname + ""+lname)
// }
// hello( )

// function sum(a,b){
//     document.write(a+b)
// }
// sum(5,10)

 
 //Promise

//   function  fun1(){
//     return new Promise(function(resolve,reject){
//       resolve('welcome')

//       reject('not welcome')

//         })
//     }
//     fun1().then(function(){console.log('no')})
//     .catch(function(){console.log('yes')})

    // var maypromise = ()=>{
    //   return  new Promise((resolve,reject) =>{
    //       resolve('welcome')
    //           reject('no welcome')
          
    //     })
    // }
    // maypromise()
    // .then(data => alert(data))
    // .catch(Error => alert(Error))
  

    // arrow function
      
    // let some = (name)=>{
    //     return `hello & thank ${name}`
    // } 
    // document.write(some('ubaid'))
   
    // let some =name => `welcome ${name}`
    // document.write('ali')


    // fatch

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response  => response.json())
    .then(data  => console.log(data))
    .catch(Error => document.write(Error))

     
// loop

// let i=5
// for(i=5; i<50; i++){
//     console.log(i)
// }

// var a = [10,50,60,80,70,55]
// a.forEach(function(value){
//     document.write(value)
// })

// var a= 10;
// do{
//     document.write(a+'good<br>');
//     a++
// }
// while(a <= 50)


// object
// var a={
//     fname : 'ubaid',
//     lname  : 'ahmed',
//     age  : 15,
//     salary : function(){
//         return 38000
//     },
//     favarite_food : ['birayani','barbiq' ,'other']
// }
// document.write(a.salary())
// document.write(a.favarite_food) 

// ternory operator

// var a = 50;
// var b;
//  var b = (a == 50) ? 'ture'  : 'false' 
//   document.write(b)

//   // template literal
//   let user = 'ali'
//   document.write( `welcome ${user}`)


  // spread operator

//   var arry1 =['karachi', 'lahore', ]
//  var arry2 =['multan' ,'islamabad', 'peshawer' ]
//  let newarry =[...arry1,...arry2]
//  console.log(newarry)

//  var A =[10,20,50,60]
//  var sum = ['welcome' ,...A]
//  console.log(sum)
  // var  obj1=[
  //     fname = 'ali',
  //       lname = 'khan'
  // ];
  // var obj2 =[
  //     city = "karachi",
  //     country = 'pakistan'
  // ];
  // let main=[ ...obj1, ...obj2]
  // console.log(main)




 

   