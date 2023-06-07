function goToYoutube() {
    let searchText = document.getElementById("serchBar").value;
    let urlYouTube = "https://www.youtube.com/results?search_query=" + searchText
    window.open(urlYouTube, "_self")
};