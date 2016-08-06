 /*global $ */

 document.getElementById("backCas").volume = 0.2;

 function MAFradio() {
 	if ("input[name='dealerDificil']:checked") {
 		document.getElementById("dealerDesc").innerHTML = "<h5>Normal dealer that makes some mistakes.<br> Aces are always worth 11 for this dealer. <br>You will only lose your betted amount.";
 	}
 	else {
 		document.getElementById("dealerDesc").innerHTML = "<h5></h5>";
 	}
 }

 function GFradio() {
 	if ("input[name='dealerDificil']:checked") {
 		document.getElementById("dealerDesc").innerHTML = "<h5>Experienced dealer, makes few mistakes.<br> Aces are worth either 11 or 1 for this dealer.<br> If dealer gets blackjack you lose 3/2 * your bet.";
 	}
 	else {
 		document.getElementById("dealerDesc").innerHTML = "<h5></h5>";
 	}
 }

 function THGradio() {
 	if ("$(#thugRadio).getAttribute('checked') == 'checked'") {
 		document.getElementById("dealerDesc").innerHTML = "<h5>Newbie, good for inexperienced players.<br> Aces are always worth 11 for this dealer.<br> You will only lose your betted amount.";
 	}
 	else {
 		document.getElementById("dealerDesc").innerHTML = "<h5></h5>";
 	}
 }

 function confirmDeal() {
 	$("#confirmDeal").css('display', 'inline-block');
 }

 function gameStart() {
 	$("#disChange").css('display', 'none');

 	setTimeout(function() {
 		$("#loadRoul").css("visibility", "visible");
 	}, 400);

 	setTimeout(function() {
 		if ($("#thugRadio").is(":checked")) {
 			window.location.href = 'darkplayTHUG.html';
 		}

 		else if ($("#GFRadio").is(":checked")) {
 			window.location.href = 'darkplayGF.html';
 		}

 		else if ($("#mafiosoRadio").is(":checked")) {
 			window.location.href = 'darkplayMAFIOSO.html';
 		}
 	}, 4400);
 }