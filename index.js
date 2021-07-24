// this a jsquery code creating new clases thst aligns the text to the center
$(document).ready(function(){
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
//  ----verivication----

function verify(){
    let name = document.getElementById('idname').value;
    let email = document.getElementById('idemail').value;
    if(name==''){
        alert('input valid name');
        return false
    }
    if(email==''){
        alert('input valid email');
        return false
    }
alert('welcome '+name)
alert('email is noted')
}

function on(){
    document.getElementById('overlay').style.display="block";
}
function off(){
    document.getElementById('overlay').style.display="none";
}
function hove(){
    document.getElementById('overla').style.display="block";
}
function nohove(){
    document.getElementById('overla').style.display="none";
}
function hov(){
    document.getElementById('overl').style.display="block";
}
function nohov(){
    document.getElementById('overl').style.display="none";
}
function ho(){
    document.getElementById('overlay').style.display="block";
}
function noho(){
    document.getElementById('overlay').style.display="none";
}
function hover1(){
    document.getElementById('over').style.display="block";
}
function nohover2(){
    document.getElementById('over').style.display="none";
}
// function hover(){
//     document.getElementById('overly').style.display="block";
// }
// function nohover(){
//     document.getElementById('overly').style.display="none";
// }