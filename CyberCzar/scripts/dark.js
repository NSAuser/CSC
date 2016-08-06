 /*global $ */

document.addEventListener("contextmenu", function(){
	alert("I CAN'T ALLOW THAT");
    window.location.href = "../PageNotFound.html";
});

document.addEventListener("keydown", function(){
	 if(event.keyCode==123){
    	alert("I CAN'T ALLOW THAT");
        window.location.href = "../PageNotFound.html";
   }
else if(event.ctrlKey && event.shiftKey && event.keyCode==73){        
        alert("I CAN'T ALLOW THAT");
        window.location.href = "../PageNotFound.html";
   }
});

function resolve() {
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
        console.log(data);
        alert(data.ip);
    });
}

var inumb = 0;

function idiotAlert() {
    while (inumb != 1) {
        alert("YOU ARE AN IDIOT")
    }
}