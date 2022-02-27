const loadData = ()=>{
    const inputField = document.getElementById('input-field').value
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputField}`
    // console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data.drinks))
}

const displayData = (drinks)=>{ 
    const cardContainer = document.getElementById('card-container')
    for(const drink of drinks){
        console.log(drink);
        const div= document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
                <div class="card h-100">
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${drink.strDrink}</h5>
                  <p class="card-text">${drink.strInstructions}</p>
                  
                </div>
                <button class="btn btn-success">See Details</button>
                </div>
                
                
        `
        cardContainer.appendChild(div)
    }
}