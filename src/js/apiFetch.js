export class ApiFetch {
  constructor() {
    this.calls = 0;
  }

  getBC() {
    this.calls++;
    return fetch(`https://api.cryptonator.com/api/ticker/btc-usd`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        return json.ticker.price;
      });
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


  getAuthor() {
    this.calls++;
    return fetch(`http://openlibrary.org/works/OL27258W/editions.json?limit=5`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        return json.entries[2].authors[0].key;
      });
  }

  // getLyricsPromise(artist, title) {
  //   this.calls++;
  //   const lyrics = new Promise((resolve, reject) => {
  //     const requestObj = new XMLHttpRequest();
  //     const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
  //     requestObj.onload = function() {
  //       if (this.status === 200 || this.status === 404) {
  //         const parsedJson = JSON.parse(requestObj.response);
  //         resolve(parsedJson);
  //       } else {
  //         reject(Error(requestObj.statusText));
  //       }
  //     };
  //     requestObj.open("GET", url, true);
  //     requestObj.send();
  //   });
  //   return lyrics;
  // }

  // getLyricsFetchAwait(artist, title) {
  //   const apiPull = async (artist, title) => {
  //     const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
  //     const myJson = await response.json();
  //     return myJson;
  //   }
  //   return apiPull()
  // }

}
