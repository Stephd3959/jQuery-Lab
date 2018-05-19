var form = $('form');

form.hide();
// $('.available').on('click', function () {
//     form.show();
// });
var currentTable;

$('.available').on('click', function () {
    currentTable = $(this);
    $('#newRes').text(currentTable.attr('id').substring(5))
    $('form').fadeIn(2000);
    form.show();
});



    $('#save').on('click', function () {
        currentTable.addClass('reserved');
        var userName= $('.name').val();
        var guestCount = $('.table-number').val();
        currentTable.append(`<div class = "tool-tip"> Name: ${userName}<br> Guests: ${guestCount}</div>`)
        // form.hide();
        $('form').fadeOut(500);
        $(".reserved").css({
            "background-color":"#ADAAAA",
            "cursor":"not-allowed",
        })
        $("#myForm")[0].reset();

        // console.log("reserved")
    });
    



var numberDisplay;
$('#number').on('click', function(){
    currentTable=$(this);})

//This is the x button
$('.material-icons').on('click', function (){
    // form.hide();
    $('form').fadeOut(500);
})



