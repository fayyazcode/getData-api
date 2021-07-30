
let main =document.getElementById('main');
let srch =document.getElementById("srch");
let allData;

let getData = (search)=>{
  return new Promise((resolve,reject)=>{
    fetch(`https://newsapi.org/v2/everything?q=${search}&from=2021-06-30&sortBy=publishedAt&apiKey=16bce94d64464f04808b8eeb474d8e34`)
    .then(data =>data.json())
    .then (data =>{
     resolve(data) 
    })
  })
}

let setData = async()=>{
  let a = await getData(srch.value);

    main.innerHTML="";

  for(var i=0; i<a.articles.length;i++){
    
            let card=`<div class="card  col-md-4  col-sm-6 " >
            <img class="card-img-top width="100%" src="${a.articles[i].urlToImage}" alt="Card image cap">
            <div class="card-body">
               <h5 class="card-title">${a.articles[i].author}</h5>
               <p class="card-text">${a.articles[i].description}</p>
               <p class="card-text">${a.articles[i].content}</p>
             </div>
             <ul class="list-group list-group-flush">
               <li class="list-group-item">${a.articles[i].publishedAt}</li>
             </ul>      
           </div>`
// console.log(card)
          main.innerHTML += card;
        }
}

setData()
