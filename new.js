// alert('welcome')

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(data => data.json())
// .then(json => console.log(json))
// .catch(Error => console.log(Error))


fetch('https://fakestoreapi.com/products')
  .then(response => {
    var data = response.json()
    return data
  })
  .then(apidata => {
    var data =""
    apidata.map(i => {
      data +=`
    <div class ='card' style="widht : 18rem">
      <img src="${i.image}" class='card_img-top' alt="">
        <div class="card-body">
          <h5 class="card-title">${i.title}</h5>
          <p class="card-text">${i.price}</p>
          <p class='card-text'>${i.description}</p>
          </div>
    </div>`
    })
    document.getElementById('foot').innerHTML =data
  })


//  (i => console.log('hello'))


// var uname = prompt('enter your name')
// {uname && 'ali' ? alert('welcome') : alert('not welcome')}


// callback function
// var mycalculator =(sum1,sum2)=>{
// sum = sum1 +sum2
// document.write(sum)
// }
// mycalculator(45,2)


// let mypromise = new Promise((resolve, reject) => {
//   var uname = prompt('enter your name')
//   var lname = prompt('enter your fname')
//   if (uname == "ali" , fname == "khan") {
//     resolve()
//   }
//   else {
//     reject()
//   }
// })
// mypromise.then(
//   function () {
//     console.log('welcome')
//   },
//   function () {
//     console.log('not welcome')
//   }
// )



// var  mypromise = new Promise((resolve,reject)=>{
//   resolve()

//   reject()
// })
// mypromise.then(
//   function() {
//     console.log('true')
//   },
//   function(){
//     console.log('false')
//   }
// )

