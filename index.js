
const youTube_url= "https://www.googleapis.com/youtube/v3/search";

//get data from API
function getDataFromAPI(searchTerm, callback){
  //send query to API
  const settings = {
    URL: "youTube_url",
    part: 'snippet',
    key: 'AIzaSyAgn_oFoGo-8EOWZ4yh-v_NCF3MuiziDPg'
    data: {
      q: `${searchTerm}`,
      per_page: 5
    },
    dataType: "json"
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
}

//render results
function renderResults(){
  //append results to HMTL
  $('.js-results').append()
}

//display search data
function displaySearchData(){

}

//watch for click on submit button
function watchForSubmit(){

}

$(getDataFromAPI);
