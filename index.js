// this a jsquery code creating new clases thst aligns the text to the center
$(document) .ready(function(){
    $('div.jumbotro').addClass("text-center")
    $('div.jumbotro').addClass("text-white")
    $('div.about').addClass("text-center")
    $('div.services').addClass("text-center text-white mt-5")
    $('div.we-do').addClass("text-center")
    $('.what').on('click',function(){
        $('.contain').toggle(2000)
    })
    $('.des').on('click' ,function(){
        $('.design').toggle(1000)
    });
    $('.dev').on('click' ,function(){
        $('.develop').toggle(1000)
    });
    $('.product').on('click' ,function(){
        $('.manage').toggle(1000)
    });
});