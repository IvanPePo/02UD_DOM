
window.onload = function () {
    const divContent = document.querySelector("#content")
    divContent.innerHTML = ""

    const url       = `https://source.unsplash.com/random`;
    const size      = `/400x200`;

    const getRandomImage = async () => {

        try {
            const response = await fetch( url + size );

            if (!response.ok) {
                throw new Error('No se pudo cargar la imagen.');
            }

            const randomImageUrl = response.url;
            
            const img = `<img style="padding: 15px" src="${randomImageUrl}" alt="imagen-aleatoria">`
            divContent.innerHTML = img;


        } catch (error) {
            console.error('Error:', error);
        }
    }



    getRandomImage();


}

