// UTILITIES
import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';

// MAIN LOGIC
import { ApiFetch } from './js/apiFetch.js';





// USER INTERFACE
$(document).ready(function(){


  $('#author').click(() => {
    apiFetch.getAuthor().then((auth) => {
      $('.author-id').text(auth);
      console.log(auth);
    });
  });

  $('#coin').click(() => {
    apiFetch.getBC().then((auth) => {
      $('.bc').text(auth);
      console.log(auth);
    });
  });

  $('#getGif').click(() => {
    let searchTerm = 'astronaut';
    apiFetch.getGif(searchTerm)
      .then((url) => {
        $('#gif').attr('src', url);
      })
  });

  const apiFetch = new ApiFetch();

});
