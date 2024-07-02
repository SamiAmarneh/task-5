async function getInfo(){

const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
const info = await response.json();
console.log(info);
const recipes = info.recipes ;
console.log(recipes);

const result = recipes.map(function(ele){
    return `
    <div class="info">

   <h2>${ele.title}<h2>
   <img src="${ele.image_url}">
    
    
    </div> `;
    
}).join('');

document.querySelector(".pizza").innerHTML = result ;


}

getInfo();