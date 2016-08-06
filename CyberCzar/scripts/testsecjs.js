/* global $ */

function secshower() {
	$("#passphrase").toggle("slow", function() {});
	$("#checker").toggle("slow", function() {});
	$("#checker1").toggle("slow", function() {});
	$("#checker2").toggle("slow", function() {});
	$("#checker3").toggle("slow", function() {});
	$("#checker4").toggle("slow", function() {});
	$("#checker5").toggle("slow", function() {});
};

var passtext = document.getElementById("passphrase");

$(passtext).on('keyup', function passcheck() {
	switch ((passtext.value).length) {
		case 0:
			$('#checker').html("<p></p>");
			$('#checker1').html("<p></p>");
			$('#checker2').html("<p></p>");
			$('#checker3').html("<p></p>");
			$('#checker4').html("<p></p>");
			$('#checker5').html("<p></p>");
			break;
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			$('#checker').html("<p>Weak</p>");
			$('#checker1').html("<p></p>");
			$('#checker2').html("<p></p>");
			$('#checker3').html("<p></p>");
			$('#checker4').html("<p></p>");
			$('#checker5').html("<p></p>");
			break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			$('#checker').html("<p></p>");
			$('#checker1').html("<p>Okay</p>");
			$('#checker2').html("<p></p>");
			$('#checker3').html("<p></p>");
			$('#checker4').html("<p></p>");
			$('#checker5').html("<p></p>");
			break;
		case 11:
		case 12:
		case 13:
		case 14:
		case 15:
			$('#checker').html("<p></p>");
			$('#checker1').html("<p></p>");
			$('#checker2').html("<p>Good</p>");
			$('#checker3').html("<p></p>");
			$('#checker4').html("<p></p>");
			$('#checker5').html("<p></p>");
			break;
		case 16:
		case 17:
		case 18:
		case 19:
		case 20:
			$('#checker').html("<p></p>");
			$('#checker1').html("<p></p>");
			$('#checker2').html("<p></p>");
			$('#checker3').html("<p>Secure</p>");
			$('#checker4').html("<p></p>");
			$('#checker5').html("<p></p>");
			break;
		case 21:
		case 22:
		case 23:
		case 24:
		case 25:
		case 26:
		case 27:
		case 28:
		case 29:
		case 30:
		case 31:
		case 32:
		case 33:
		case 34:
		case 35:
		case 36:
		case 37:
		case 38:
		case 39:
		case 40:
			$('#checker').html("<p></p>");
			$('#checker1').html("<p></p>");
			$('#checker2').html("<p></p>");
			$('#checker3').html("<p></p>");
			$('#checker4').html("<p>Fort Knox</p>");
			$('#checker5').html("<p></p>");
			break;
		default:
			$('#checker').html("<p></p>");
			$('#checker1').html("<p></p>");
			$('#checker2').html("<p></p>");
			$('#checker3').html("<p></p>");
			$('#checker4').html("<p></p>");
			$('#checker5').html("<p>HACKER</p>");
	};
});