document.getElementById('loadBreeds').addEventListener('click', () => {
    const breedsContainer = document.getElementById('breedsContainer');
    breedsContainer.innerHTML = '';

    fetch('https://api.thedogapi.com/v1/breeds?limit=3&page=0')
        .then(response => response.json())
        .then(breeds => {
            breeds.forEach(breed => {
                const breedInfo = `${breed.name}, ${breed.temperament || ''}, ${breed.origin || ''}, ${breed.life_span || ''}, ${breed.weight.metric || ''}, ${breed.height.metric || ''}`;
                breedsContainer.innerHTML += breedInfo + '<br><br>';
            });
        });
});
