$(document).ready(function(){
$("#search-term").submit(function(event){
event.preventDefault();
var searchTerm = $("#query").val();
getRequest(searchTerm);
});
});
// search query
  function getRequest (searchTerm){
var params = {

	part: "snippet",
	q: searchTerm,
	r:'json',
	key: "AIzaSyD3Zk6EqYQ_KRuQQ9k58S5iFcS6uuAYe9I",
	maxResults:"12",

	
};

url= "https://www.googleapis.com/youtube/v3/search";


$.getJSON(url,params,function(data){
	var myData = data.items;
	showResults(myData);
	console.log(myData[0].id.videoId);

	$.each(myData, function(index, value){
	var elem = value.id.videoID;
	var showy = value.snippet.thumbnails.medium.url	

	})

});

}



 // show results/ push <p>          
 function showResults (results){	
  var html = "";
   $.each(results, function(index, value){
  var showy =value.snippet.thumbnails.medium.url;

  var video = value.id.videoId;
  var link = "https://www.youtube.com/watch?v=";
  var addy = "<a href="+ link +video+">" +"<img src=" + showy + ">"+ "</a>";
html += "<div class='col-md-4 col-sm-6 col-xs-12'+" + addy + "</div>";

		

$("#search-results").html(html);



});






}