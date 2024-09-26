var div = document.getElementById('baloonID');
var bwidth = div.offsetWidth;
let colors = ["#FF0000", "#00FF00", "#0000FF"];
var indexColor = 0;

function click_baloon() {
  
    bwidth = bwidth + 10;

    if(bwidth > 420) {
        bwidth = 200;
    }
    div.style.width = bwidth + 'px';
    div.style.height = bwidth + 'px';

    indexColor = indexColor + 1;
    if(indexColor > 2) {
        indexColor = 0;
    }
    div.style.backgroundColor = colors[indexColor];

}

function out_baloon() {
    
    bwidth = bwidth - 5;

    if(bwidth < 200) {
        bwidth = 200;
    }
    div.style.width = bwidth + 'px';
    div.style.height = bwidth + 'px';

    if(indexColor == 0) {
        indexColor = 2;
    }
    else {
        indexColor = indexColor - 1;
    }
    div.style.backgroundColor = colors[indexColor];

}