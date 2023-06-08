function goToYoutube() {
    let searchText = document.getElementById("text").value;
    let urlYouTube = "https://www.youtube.com/results?search_query=" + searchText
    window.open(urlYouTube, "_self")
};

function youtubeButton(){
    let ytButton = "http://www.youtube.com"
    window.open(ytButton, "_self")
};

function aboutButton(){
    let ytButton = "http://fasttube.ddns.net"
    window.open(ytButton, "_self")
};

function studioButton(){
    let ytButton = "https://studio.youtube.com/"
    window.open(ytButton, "_self")
};