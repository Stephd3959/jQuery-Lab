$(document).ready(function(){
    console.log("It Works");
});


var form = $('form');
form.hide();

$('.available').on('click', function(){
  form.show();

});
  var currentTable;


  $('.available').on('click', function(){
    currentTable = $(this);
    form.show();
  });
  
  $('.reservation-box').on('click', function(){
    currentTable.addClass('reserved');
    form.hide();
  });
  
