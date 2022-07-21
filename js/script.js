const pokemon_name = document.querySelector('.pokemon_name');
const pokemon_number = document.querySelector('.pokemon_number');
const pokemonImage= document.querySelector('.pokemon_image');
const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const  buttonPrev = document.querySelector('.btn-prev')
const  buttonNext = document.querySelector('.btn-next')
let = searchPokemon = 1;

const fetchPokemon = async (pokemon) =>{  //async usado para fazer uma função assincrona
    const APIResponse = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`); //wait usado para fazer com que 
    //a busca seja carregada antes de continuar o resto do codigo
    if (APIResponse.status === 200){
        const data = await APIResponse.json();
        return data;
    }
    
    
}


const renderPokemon = async (pokemon) => {
    pokemon_name.innerHTML = 'Loading';
    pokemon_number.innerHTML = '';  
    const data = await fetchPokemon(pokemon);
    if (data){
    pokemonImage.style.display = 'block';
    pokemon_name.innerHTML = data.name;
    pokemon_number.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']
    ['black-white']['animated']['front_default'];
    input.value = '';
    searchPokemon = data.id;
}else{
    pokemon_name.innerHTML = 'not found';
    pokemon_number.innerHTML = '';
    pokemonImage.style.display = 'none';

}
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    renderPokemon(input.value.toLowerCase());
 
  
});



buttonPrev.addEventListener('click', () =>{
   if(searchPokemon > 1){
    searchPokemon -= 1;
    renderPokemon(searchPokemon)
   }

});


buttonNext.addEventListener('click', () =>{
    searchPokemon += 1;
    renderPokemon(searchPokemon)
});

renderPokemon(searchPokemon);




   

