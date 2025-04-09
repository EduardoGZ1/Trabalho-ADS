(async () => {
    const breedsContainer = document.getElementById('breedsContainer');
    breedsContainer.innerHTML = '';

    const response = await fetch('https://api.thedogapi.com/v1/breeds?limit=3&page=0');
    const breeds = await response.json();
    breeds.forEach(breed => {
        const breedInfo = `Nome: ${breed.name} | Temperamento: ${breed.temperament || ''} | Origem: ${breed.origin || ''} | Tempo de vida: ${breed.life_span || ''} | Peso: ${breed.weight.metric || ''} | Altura: ${breed.height.metric || ''}`;
        breedsContainer.innerHTML += breedInfo + '<br><br>';
    });
})();
