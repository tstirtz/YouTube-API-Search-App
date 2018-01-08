
const youTube_url= "https://www.googleapis.com/youtube/v3/search";

//get data from API
function getDataFromAPI(searchTerm, callback){
  //send query to API
console.log('start of getDataFromAPI working');

  const querySettings = {
    part: 'snippet',
    key: "AIzaSyAgn_oFoGo-8EOWZ4yh-v_NCF3MuiziDPg",
    q: `${searchTerm}`,
    maxResults: 25,
    type: 'video',
  };
  $.getJSON(youTube_url, querySettings, callback);
  console.log('end of getDataFromAPI working');
  console.log($.getJSON(youTube_url, querySettings, callback));
}

//render results
/*function renderResults(result){
  //append results to HMTL
  $('.js-results').append(`<video src="${result.items.snippet.thumbnails.medium.url}"></video>`);
}*/

//display search data
function displaySearchData(){

}

//watch for click on submit button
function watchForSubmit(){
  $(".js-submit-search").submit(function(){
      event.preventDefault();

      const query = $(this).prev()
      getDataFromAPI(query, needToChangeThis);
  });
}

function docReady(){
  getDataFromAPI();
  watchForSubmit();
}

$(docReady);
