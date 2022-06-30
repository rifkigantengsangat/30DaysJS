const HitData = (url, data, type, option = null) => {
    return new Promise((resolve, reject) => {
        $.ajaxSetup({
            headers: {
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
                'X-RapidAPI-Key': '6f7b138495mshfb1e96b52210655p1c7904jsn4f787ad14abb'
            }
        })
        $.ajax({
            url,
            data,
            type,
            option,
            success: (response) => {
                resolve(response)
            },
            error: (err) => {
                reject(err)
            }
        })
    });
}

const getData = async (input) => {
    try {
        $('#listid').html('')
        input = input.replace(' ', '%20').toLowerCase()
        const response = await HitData(`https://shazam.p.rapidapi.com/search?term=${input}&locale=en-US&offset=0&limit=5`, null, 'GET')
        const artist = response.artists;
       
        artist.hits.forEach(art => {
            $('#listid').append(`<button onclick="getDataById('${art.artist.id}')">ankdk</button>`)
        })
    } catch (error) {
        console.log(error);
    }
}

const getDataById = async (id) => {
    try {
        const response = await HitData(`https://shazam.p.rapidapi.com/songs/get-details?key=${id}&locale=en-US`)
        modalData(response)
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
const modalData = (data)=>{
    var modal = $('#modal-lagu');
    modal.modal('show')
    modal.find('#judul').text(data.title)
    modal.find('#subjudul').text(data.subtitle)
}

const arr = [1,2,3,4,5,6,7,8,9,9,10,1,2]
arr.map((e) => {
    console.log(e);
})
arr.forEach(e => {
    console.log(e);
})


 //callback
const greeting = (name,umur)=>{
  if(name.length > 100){
    console.log("nama anda rendah")
  }else{
    console.log(name,umur)
  }
}
const namasaya =(callback)=>{
  const nama = "raden Muhamad Rifki"
  const umur = 13
  callback(nama,umur)
  console.log(callback)
}
namasaya(greeting)

promise
const promise = new Promise ((resolve, reject) => {
  setTimeout(()=>{ 
    resolve("halo")
  },3000)
}).then(value =>console.log(value))
const submit = document.querySelector("#submit")
function Ada(ada){
   submit.addEventListener("click",()=>{

    const tampung = document.querySelector('.tampung')
   const p = document.createElement("p")
   p.innerHTML = `token anda adalah ${ada}`
   tampung.appendChild(p)
 setTimeout(() => { 
    window.location.reload()
  }, 3000)
   })
}

function generateCode(batas) {
    const arr =[]
    const data =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,10]
 

   for(let i = 0; i<batas; i++){
        const random = Math.floor(Math.random() *data.length)    
        arr.push(data[random])         
     arr.map((el,i,array)=>{
        if(array.indexOf(el)!== array.lastIndexOf(el)){
            array.splice(i,1)
        }
       })
      
    const joining = arr.join('')
       sayHelloRandom(joining)  
   
   }
   return arr
}
const random = generateCode(5)

function sayHelloRandom (nama){
    const Data = ['a','i','u','e','o']
    const arr =[]
    const random = Math.floor(Math.random()*Data.length)
    arr.push(Data[random])
   if(nama.length <= 6){
    const gabung = [...nama,...arr].join('')
   Ada(gabung)
   
   
   }
   return arr
  
}

window.addEventListener("scroll",()=>{
    const height = window.scrollY
   const buletNumber = Math.floor(height)
    if(buletNumber >=60){
       const createElement = document.createElement("div")
      const giftkelas = createElement.classList.add("giftkelas")
      
    }
// })
const para = document.querySelector(".title")
const container = document.querySelector(".container")
const inijalanPertama =() =>{
    setTimeout(async() => {
       await console.log("halo") 
    }, 4000);
}
inijalanPertama()

const awaitLagi = ()=>{
    setTimeout(async() => {await console.log("ini keua ") }, 2000)
}
awaitLagi()
 console.log("memel")

 const buffer = new ArrayBuffer(16);
 console.log(buffer)

 document.addEventListener("keydown",(e)=>{
    e =e || window.event

   if(e.keyCode === 37){
    container.removeChild(container.lastElementChild)
    container.scrollTo({
    top:100,
    left:100,
    behavior:"smooth"
   })
  
   }else{

   }
 })
 const promise = new Promise ((resolve, reject) => {
  const sto =setTimeout(() => {
    console.log("hallo")
  }, 3000);
  if (sto > 3000) {
    resolve()
    
  } else {
    reject()
  }
 }).then((val) => { console(val)})
let ditepati = true;
const janji = new Promise((resolve, reject) =>{
    if(!ditepati){
        resolve('janji di tepati')
    }else{
        reject('janji di ingkari')
    }
})
.then((val) => {console.log(val)})
.catch((err) => {console.log(err)})
console.log("mulai")
let ditepati = true
const janji = new Promise ((resolve, reject) => {
    if(ditepati){setTimeout(() => { 
        resolve("diteapti sabar")
     },3000 )
    }else{setTimeout(() => {
   reject("tidak diteapti sabar")
    },3000 )}
})
const janji2 = new Promise ((resolve, reject) => {
    setTimeout(() => { 
      resolve([{
        nama : 'nama',
        kelas : 'kelas'
      }])
     },4000)
})
Promise.all([janji,janji2])
.then((res)=>console.log(res))
.then((res)=>{
    const [janji,janji2] = res
    console.log(janji)
})

const as =async (nama) => {
   try {
    const waktu = 3000
    if(waktu >6000){
       setTimeout(async() => { 
        await console.log(nama)
        },waktu)
    }
   } catch (err) {
  setTimeout(async() => {
    await console.log("matos")
  }, waktu);
   }
}
const carinama =()=>{
    const nama = "raden Muhamad rifkin"
    as(nama)
}
carinama()
const data = [
    {
        id : 1,
  nama : "raden Muhamad rifki",
  qty : 1
},
{
    id:1,
    nama : "raden Muhamad rifki",
    qty : 1

},{
    id:2,
    nama : "raden Muhamad ozak",
    qty : 1

}
]

const cust = data.reduce((acc,data)=>{
    if(!acc[data.id]) acc[data.id] = [] 
    acc[data.id].push(data)
    return acc;
},{})
console.log(cust[1].map((e)=>{

}))
const datas = data.reduce((acc, data)=>{
    if(!acc[data.id]) acc[data.id] = []
    acc[data.id].push(data)
    return acc
},{})

console.log(datas[1])

const totalkan =()=>{
    let total = 0

    datas[1].forEach((item,i)=>{
        total += i * item.qty;
    })
    console.log(total);
    return total
}
totalkan()

var accounts = [
    { name: 'James Brown', msgCount: 123 },
    { name: 'Stevie Wonder', msgCount: 22 },
    { name: 'Sly Stone', msgCount: 16 },
    { name: 'Otis Redding', msgCount: 300 }  // Otis has the most messages
  ];
  
  
  var msgTotal = accounts.reduce(function(prev, cur) {
    return prev + cur.msgCount;
  }, 0);
  
  console.log('Total Messages:', msgTotal)

  const totalkeun = datas[1].reduce(function(prev, cur) {
return prev + cur.qty
  },0)
  console.log('Total Messages:', totalkeun)