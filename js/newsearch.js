var that = $(this);
var mSearch = $("#m-search");
$("#search-input").bind("change paste keyup", function(){
  var value = $(this).val();
  if (!value) {
    mSearch.html("");
    return;
  }; 
  mSearch.html('.wrap:not([data-index*="' + value.toLowerCase() + '"]) {display: none;}');
});