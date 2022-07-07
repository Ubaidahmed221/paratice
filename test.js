
// function  checkdata() {
//     var fname = document.getElementById('uname').value
//     var lname = document.getElementById('lname').value
//     var pass = document.getElementById('pass').value
//     var city = document.getElementById('city').value


//     {fname == 'ubaid' && lname == 'khan' &&  pass == 'main' && city == 'karachi'? alert('welcome' ):  'not'}

// }

// var employdata =[
//     {
//         id : 1,
//         fname : 'ali',
//         lname : 'khan',
//         city : 'karachi',
//         country : 'pakistan',
//         adress : [
//             {
//                 adre1 : 'house no 45 ,landhi',
//                 adre2 : 'house no 40, korangi'
//             }
//         ],
//     },
//     {
//         id : 2,
//         fname : 'usama',
//         lname : 'shah',
//         city : 'lahore',
//         country : 'pakistan',
//         adress : [
//             {
//                 adre1 : 'house no 2 ,landhi 5',
//                 adre2 : 'house no 40, korangi'
//             }
//         ],
//     },
//     {
//         id : 3,
//         fname : 'kashan',
//         lname : 'khan',
//         city : 'peshawer',
//         country : 'pakistan',
//         adress : [
//             {
//                 adre1 : 'house no 45 ,landhi',
//                 adre2 : 'house no 40, korangi'
//             }
//         ],
//     },
//     {
//         id : 4,
//         fname : 'alishah',
//         lname : 'shah',
//         city : 'multan',
//         country : 'pakistan',
//         adress : [
//             {
//                 adre1 : 'house no 45 ,landhi',
//                 adre2 : 'house no 40, korangi'
//             }
//         ],
//     },
//     {
//         id : 5,
//         fname : 'syed',
//         lname : 'usman',
//         city : 'islamabad',
//         country : 'pakistan',


//     },
// ]
// // employdata.map(i => console.log(i))
// console.table(employdata);

// function checkdata(){
//     let uname = document.getElementById('uname').value
//     var lname = document.getElementById('lname').value
//     var pass = document.getElementById('pass').value
//     var email = document.getElementById('email').value


//     data =[
// {
//             fname : uname,
//             laname : lname,
//             password : pass,
//             e_mail : email,
//         }

//     ]
//     localStorage.setItem('set', JSON.stringify(data))
//     var get = localStorage.getItem('set')
//     var convert = JSON.parse(get)
//     document.write(convert)
// }
// var foot = localStorage.getItem(main)
// console.log(foot)


// time date
// const startinterval = ()=>{
//     setInterval(showtime)
//     var showtime = setInterval(()=>{
//         var date = new Date
//         var time = date.toLocaleString()
//         document.getElementById('time').innerHTML= time
//     },1000)
// }
// function click() {
//     clearInterval(showtime)
// }


// var getData
// var startApi = setInterval(() => {
//     getData = async () => {
//         var res = await fetch('https://jsonplaceholder.typicode.com/posts')
//         rej = await fetch('https://jsonplaceholder.typicode.com/users')
//         var json = await res.json()
//         var foot = await rej.json()
//         console.log(json)
//         console.log(foot)
//     }
//     getData()
// }, 1000)
// var click = () => {
//     clearInterval(startApi)
// }

var arry =[5,4,7,6]
arry.sort()
console.log(arry)

// var numArry =[45,87,80,60,70]
// var total = numArry.reduce((preNum,nexNum) => preNum + nexNum)
// console.log(total)

// var data = 'ali zaid usman usama sheikh'
// var convert = data.split(' ').reverse()
// console.log(convert)

// var save = [45,21,65,45]
//  var a = save.lastindexOf(21)
// console.log(a)

var foot = (currentValue) => currentValue < 100
var arry = [45,20,30,70,90]
console.log(arry.every(foot))

var val =[4,6,7,8,9]
console.log(val.fill(2,2))

var words =['ali','uneeb','usama','khan','ghar']
var result = words.filter( word => word.length > 4)
console.log(result)

var  value =[45,12,27,65,48]
var result = value.find(element => element.length > 40)
console.log(result)

var val =[4,6,7,8,9]
val.flatMap(x =>[x*2])

var val =[4,6,7,8,9]
val.forEach(element => console.log(element))

console.log(Array.from('welcome'))

const name =['ali','uneeb','usama','khan','ghar']
console.log(name.join(''));






