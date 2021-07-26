var main =document.getElementById('main')
var regex=/(?<==)(.*?)(?=&)/;  
var link= 'https://newsapi.org/v2/everything?q=apple&from=2021-07-25&to=2021-07-25&sortBy=popularity&apiKey=0b8d9a0f6ab743af843f2c3549454a7c';

  var search=document.getElementById("srch").value;
  var newStr = link.replace(regex, search);
  fetch(link)
  .then(response => response.json())
  .then(json  =>{
    // console.log(json.articles.length)
     
    for(var i=0; i<json.articles.length;i++){
    
        let card=`<div class="card  col-md-4  col-sm-6 " >
        <img class="card-img-top width="100%" src="${json.articles[i].urlToImage}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${json.articles[i].author}</h5>
          <p class="card-text">${json.articles[i].description}</p>
          <p class="card-text">${json.articles[i].content}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${json.articles[i].publishedAt}</li>
        </ul>
      
      </div>`

      main.innerHTML += card;
    }
} )









