var main=document.getElementById("main")
fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-06-20&sortBy=publishedAt&apiKey=314b1e059fcd4cf8901f53490a1ed14e')
  .then(response => response.json())
//    .then(json => console.log(json))
  .then(json  =>{
     
      for(var i=0; i<json.articles.length;i++){
          let card=`<div class="card" style="width: 300px;">
          <img class="card-img-top width="100%" src="${json.articles[i].urlToImage}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${json.articles[i].author}</h5>
            <p class="card-text">${json.articles[i].description}</p>
            <p class="card-text">${json.articles[i].content}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${json.articles[i].publishedAt}</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>`
        main.innerHTML +=card;
      }
  } )

  
    
  