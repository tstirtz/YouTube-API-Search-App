
const youTube_url= "https://www.googleapis.com/youtube/v3/search";

//get data from API
function getDataFromAPI(searchTerm, callback){
  //send query to API
console.log('start of getDataFromAPI working');

  const querySettings = {
    part: 'snippet',
    key: 'AIzaSyAgn_oFoGo-8EOWZ4yh-v_NCF3MuiziDPg',
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
}

function getNextPageData(nextPgToken, callback){
console.log('start of getNextPageData working');
  const querySettings = {
    part: 'snippet',
    key: 'AIzaSyAgn_oFoGo-8EOWZ4yh-v_NCF3MuiziDPg',
    q: `${$('.js-query').val()}`,
    pageToken: `${nextPgToken}`,
    maxResults: 6,
    type: 'video',
  };
  console.log(`${nextPgToken}`);
  console.log(`${$('.js-query').val()}`);
  console.log(querySettings);
  $.getJSON(youTube_url, querySettings, callback);

  console.log('end of getNextPageData working');
}

function renderPagination(result){
  console.log('start of renderPagination working');
  $('.js-pagination').append(
    `<button type="submit" class="js-previous-button">Prev</button>
     <button type="submit" class="js-next-button">Next</button>`
  );
  console.log('end of renderPagination work');
}

//display search data
function displaySearchData(data){

  const results = data.items.map(function(item, index){
    console.log('start of displaySearchData working');
    renderResults(item);
  });

  const nextPage = data.nextPageToken;
  watchForNextButton(nextPage);
  renderPagination(data);

  console.log('end of displaySearchData working');
}

//watch for click on submit button
function watchForSubmit(){
  console.log('start of watchForSubmit working');
  $(".js-submit-search").on('click', function(){
      event.preventDefault();

      $('.js-results').contents().remove();

      const query = $(this).prev().val();
      console.log($(this).prev().val());
      getDataFromAPI(query, displaySearchData);
  });
  console.log('end of watchForSubmit working');
}

function watchForNextButton(pgToken){
    console.log('start of watchForNextButton working');
  //create event listener for click on next button
  $('.js-pagination').on('click', '.js-next-button', function(){
    event.preventDefault();
    //when clicked clear old results and render new results
    $('.js-results').contents().remove();
    $('.js-pagination').contents().remove();

    getNextPageData(pgToken, displaySearchData);
  });
}


function docReady(){
  watchForSubmit();
}

$(docReady);
