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

// promise
const promise = new Promise ((resolve, reject) => {
  setTimeout(()=>{ 
    resolve("halo")
  },3000)
}).then(value =>console.log(value))