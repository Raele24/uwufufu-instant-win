//usare macro

var children_left= [].slice.call(document.getElementById('trigger-left').getElementsByTagName('*'), 0);   //9 = p & 3 = a
var name_left = children_left[9].innerHTML;
var selection_left = children_left[3];
var children_right = [].slice.call(document.getElementById('trigger-right').getElementsByTagName('*'), 0);   //9 = p & 3 = a
var name_right = children_right[9].innerHTML;
var selection_right = children_right[3];
//change this var---------------
var winner = ""
//------------------------------
if(name_left == winner) {
    selection_left.click();
}
else if(name_right == winner){
    selection_right.click();
}
else{
        selection_left.click();
}



