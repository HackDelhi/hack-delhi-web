var t,active_state="dem";
var getStat = function() {
  clearInterval(t);
  $.getJSON("http://192.168.2.18/hack-delhi-web/process.php?update", function(e){
    console.log(e);
    animate(e.status);
    t = setTimeout(getStat, 1000);
  });
}
window.onload = function() {
  t = setTimeout(getStat, 1000);
}

var animate = function(st) {
  if(parseInt(st) == 0)
    st = "dem";
  if(st == active_state) return;
  var el = $("body");
  var m = parseInt(st);
  switch (m) {
    case 1: el.css('background','#55a629');break;
    case 2: el.css('background','#bfbd16');break;
    case 3: el.css('background','#af2525');break;
    default: el.css('background','#376cc3');break;
  }
  $(".ac-" + active_state).fadeOut(600);
  $(".ac-" + st).fadeIn(600);
  active_state = st;
}
