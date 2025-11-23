// JavaScript Document
var typed = new Typed('.element',{
strings: ["Senior Graphic Designer.","Web Designer."],
typeSpeed:50, //tốc độ đánh máy
backSpeed:50, 
loop:true,
});
$('.counter').countUp();
$('.timeline-panel').click(function() {

    $('.timeline-body', this).toggle(); // p00f

});

AOS.init();