function textEnter(){
    let textarea = document.getElementById("serchBar")
    textarea.addEventListener("keydown", (e) => {
        if (e == 13) {
        //if (!e.repeat) {
          alert(`Key "${e.key}" pressed [event: keydown]`);
        } else {
          alert(`Key "${e.key}" repeating [event: keydown]`);
        }
      });
};

function goToYoutube() {
    let searchText = document.getElementById("serchBar").value;
    let urlYouTube = "https://www.youtube.com/results?search_query=" + searchText
    window.open(urlYouTube, "_self")
};