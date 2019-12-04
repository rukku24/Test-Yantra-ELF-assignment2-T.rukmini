
    var colors = [ "orange","red", "blue", "green","yellow","pink"];
    var colorIndex = 0;
    function changeColor() {
        var col = document.getElementById("body");
        if( colorIndex >= colors.length ) {
            colorIndex = 0;
        }
        col.style.backgroundColor = colors[colorIndex];
        colorIndex++;
    }
   
for(const i=0;i<=6;i++)
{
    col.style.backgroundColor = colors[i];
}