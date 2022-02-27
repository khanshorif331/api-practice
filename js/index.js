const deleteData = () =>{
    const main = document.getElementById('main-container')
    main.innerHTML=''

}


//  loading data searching by name
const loadData = ()=>{
    const inputField = document.getElementById('input-field')
    const inputValue = inputField.value
    
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
    
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data.drinks))
    
    inputField.value =''
}

// function to display in the ui
 
const displayData = (drinks)=>{ 
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = ''
    for(const drink of drinks){
        const div= document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
                <div class="card h-100">
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${drink.strDrink}</h5>
                  <p class="card-text">${drink.strInstructions.slice(0,150)}</p>               
                </div>
                <button onclick = "getDetails('${drink.idDrink}')" class="btn btn-success">See Details</button>
                </div>               
        `
        cardContainer.appendChild(div)  
    } 
}


// loading data from api by id for details

const getDetails =(id)=>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}
    `
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.drinks[0]))
}


const displayDetails = (drink)=>{
    const detailContainer = document.getElementById('details-container')
    detailContainer.innerHTML=''
    const div = document.createElement('div')
    console.log(drink);
    div.innerHTML= `
                <div class="card w-50 mx-auto mb-5 h-50">
                <img width="" src="${drink.strDrinkThumb}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${drink.strDrink}</h5>
                  <p class="card-text">${drink.strInstructions.slice(0,150)}</p>               
                </div>
                <button onclick = "getDetails('${drink.idDrink}')" class="btn btn-success">See Details</button>
                </div>
    `
    detailContainer.appendChild(div)
   
}