$(function(){
    $('#button1').click(function(){ 
        if(!$('#iframe1').length) {
                $('#iframeHolder').html('<iframe id="iframe1" src="https://calendar.google.com/calendar/b/3/embed?height=600&amp;wkst=1&amp;bgcolor=%23E4C441&amp;ctz=Europe%2FLondon&amp;src=ZGd2cmVzaWRlbnRzLmNvLnVrX3ZqNGdwYm5sMGZ1cHFwNzFjcTJnZnZjajNnQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZW4udWsjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23402175&amp;color=%231F753C&amp;showTitle=1&amp;showNav=1&amp;showPrint=1&amp;showCalendars=1" style="border:solid 1px #777" width="1000" height="600" frameborder="0"  scrolling="yes"></iframe>');
        }
    });   
});

function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }