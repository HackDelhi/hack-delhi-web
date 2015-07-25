var t,active_state="dem";
var getStat = function() {
  clearInterval(t);
  $.getJSON("process.php?update", function(e){
    console.log(e);
    //e
    animate(e.status);
    t = setTimeout(getStat, 1000);
  });
}
window.onload = function() {
  t = setTimeout(getStat, 1000);
}

var animate = function(st) {
  if(st == active_state) return;
  $(".ac-" + active_state).fadeOut(600);
  $(".ac-" + st).fadeIn(600);
  active_state = st;
}
