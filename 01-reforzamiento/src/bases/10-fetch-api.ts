import type { GiphyRandomResponse } from "../data/giphy.response";


const API_KEY = 'XfACqphxbsh22M6PEd0Zav7BcyTtikEM';

const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

// myRequest.then( (response) => {
//     response.json().then( (data) => {
//         console.log(data);
//     });
// }).catch( (err) => {
//     console.error(err);
// });

// myRequest
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

const createImgInsideDOM  = ( url:string ): void => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
        
    document.body.append(imgElement);
};

myRequest
    .then((response) => response.json())
    .then(({data}: GiphyRandomResponse) => {
        const imageUrl = data.images.original.url;
        createImgInsideDOM(imageUrl);
    })
    .catch((err) => console.error(err));
