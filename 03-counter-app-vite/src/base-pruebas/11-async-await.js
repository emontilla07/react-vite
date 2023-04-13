export const getImagen = async() => {
    try {
        const apiKey = 'RYXonQxXlaG5ASo8vdaOy6yaTTR0at5V';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
        const { url } = data.images.original;
        return url;
    } catch (error) {
        console.error(error)
        return 'No se encontro la imagen';
    }
}
//  getImagen();



