const url = "http://localhost:5000/laptop"

const getData = async()=>{
     let res = await fetch(url);
     let data = await res.json();
     console.log(data.prod)
}

getData()