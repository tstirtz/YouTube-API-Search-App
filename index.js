
const youTube_url= "https://www.googleapis.com/youtube/v3/search";

//get data from API
function getDataFromAPI(searchTerm, callback){
  //send query to API
  const settings = {
    URL: "youTube_url",
    data: {
      q: `${searchTerm} in:name`,
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
}

//display search data
function displaySearchData(){

}

//watch for click on submit button
function watchForSubmit(){

}
