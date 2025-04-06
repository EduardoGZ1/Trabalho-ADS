document.getElementById('loadImages').addEventListener('click', () => {
    const imagesContainer = document.getElementById('imagesContainer');
    imagesContainer.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        fetch('https://api.thedogapi.com/v1/images/search?limit=1') // Utilizei o for pq a API só retorna uma imagem por vez, quando tentei mudar o limit para mais que 1, ela retorna 10 imagens, nao importa o numero
            .then(response => response.json())
            .then(data => {
                const imgElement = document.createElement('img');
                imgElement.src = data[0].url;
                imgElement.alt = 'Imagem de um cão';
                imgElement.className = 'img-thumbnail m-2';
                imagesContainer.appendChild(imgElement);
            })
            .catch(error => {
                imagesContainer.innerHTML = '<p>Erro ao carregar imagens.</p>';
                console.error(error);
            });
    }
});
