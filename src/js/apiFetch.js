export class ApiFetch {
  constructor() {
  }



  getGif(searchTerm) {
    return fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${process.env.API_KEY}&s=${searchTerm}`)
      .then((response)=> {
        return response.json();
      })
      .then((json) => {
        return json.data.images.original.url;
      });
  }






}
