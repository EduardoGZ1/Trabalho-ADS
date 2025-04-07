document.getElementById('loadBreeds').addEventListener('click', () => {
    const breedsContainer = document.getElementById('breedsContainer');
    breedsContainer.innerHTML = '';

    fetch('https://api.thedogapi.com/v1/breeds?limit=3&page=0')
        .then(response => response.json())
        .then(breeds => {
            breeds.forEach(breed => {
                const breedInfo = `Nome: ${breed.name} | Temperamento: ${breed.temperament || ''} | Origem: ${breed.origin || ''} | Tempo de vida: ${breed.life_span || ''} | Peso: ${breed.weight.metric || ''} | Altura: ${breed.height.metric || ''}`;
                breedsContainer.innerHTML += breedInfo + '<br><br>';
            });
        });
});
