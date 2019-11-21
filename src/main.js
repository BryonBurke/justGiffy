// UTILITIES
import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';

// MAIN LOGIC
import { ApiFetch } from './js/apiFetch.js';





// USER INTERFACE
$(document).ready(function(){


  $('#getGif').click(() => {
    let searchTerm = 'astronaut';
    apiFetch.getGif(searchTerm)
      .then((url) => {
        $('#gif').attr('src', url);
      })
  });

  const apiFetch = new ApiFetch();

});
