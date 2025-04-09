(async () => {
    const imagesContainer = document.getElementById('imagesContainer');
    imagesContainer.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=1');
        const data = await response.json();
        const imgElement = document.createElement('img');
        imgElement.src = data[0].url;
        imgElement.alt = 'Imagem de um cão';
        imgElement.className = 'img-thumbnail m-2';
        imagesContainer.appendChild(imgElement);
    }
})();
