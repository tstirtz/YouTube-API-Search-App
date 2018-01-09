
const youTube_url= "https://www.googleapis.com/youtube/v3/search";

//get data from API
function getDataFromAPI(searchTerm, callback){
  //send query to API
console.log('start of getDataFromAPI working');

  const querySettings = {
    part: 'snippet',
    key: "AIzaSyAgn_oFoGo-8EOWZ4yh-v_NCF3MuiziDPg",
    q: `${searchTerm}`,
    maxResults: 6,
    type: 'video',
  };
  $.getJSON(youTube_url, querySettings, callback);
  console.log('end of getDataFromAPI working');
  console.log(`${searchTerm}`);
}

//render results
function renderResults(result){
  //append results to HMTL
  $('.js-results').prepend(
    `
    <h2>${result.snippet.title}</h2>
    <a href="https://www.youtube.com/watch?v=${result.id.videoId}">
        <img src="${result.snippet.thumbnails.medium.url}">
     </a>`);
  console.log(`${result.snippet.thumbnails.medium.url}`);
}

//display search data
function displaySearchData(data){
  const results = data.items.map(function(item, index){
    renderResults(item);
  });
}

//watch for click on submit button
function watchForSubmit(){
  $(".js-submit-search").on('click', function(){
      event.preventDefault();

      $('.js-results').contents().remove();

      const query = $(this).prev().val();
      console.log($(this).prev().val());
      getDataFromAPI(query, displaySearchData);
  });
}

function docReady(){
  getDataFromAPI();
  watchForSubmit();
}

$(docReady);
