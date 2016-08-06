/* global $ */

var captcha = document.getElementById("captchatext");
var username = document.getElementById("loguser");
var lpassword = document.getElementById("logpass");
var delay = 600;
var delay2 = 5000;

function login() {
	if (captcha.value.toUpperCase() != "W68HP" && captcha.value.toUpperCase() != "W6 8HP") {
		$(".captcha").css("animation", "capshake 0.4s cubic-bezier(.36,.07,.19,.97) both");
	}

	else if (username.value === ' ' || username.value === '') {
		$(".valCheckUser").css("display", "inline");
	}

	else if (lpassword.value === ' ' || lpassword.value === '') {
		$(".valCheckPass").css("display", "inline");
	}

	else {
		$("#remload").slideUp("slow", function() {
			$('#remload').remove();
		});
		document.body.innerHTML = document.body.innerHTML.replace('Login', username.value);
		setTimeout(function() {
			$("#loading").css("display", "block");
		}, delay);
		setTimeout(function() {
			$("#loading").css("display", "none");
			setTimeout(function() {
				$('#welcome').html("<h2>Welcome back, </h2>" + username.value);
			}, delay);
		}, delay2);
	};
};