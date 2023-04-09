const getImagen = async() => {
    try {
        const apiKey = 'RYXonQxXlaG5ASo8vdaOy6yaTTR0at5V';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement( 'img' );
        img.src = url;
        document.body.append(img);
    }
    catch( error ) {
        // manejo del error.
    }
}

getImagen();

// const apiKey = 'RYXonQxXlaG5ASo8vdaOy6yaTTR0at5V';
// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// peticion
//     .then( resp => resp.json() )
//     .then( ({ data }) => {
//         // console.log( data.images.original.url );
//         const { url } = data.images.original;
//         const img = document.createElement( 'img' );
//         img.src = url;
//         document.body.append( img );
//     } )
//     .catch( console.warn );