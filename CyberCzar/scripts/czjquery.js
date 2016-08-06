/*global $*/

function add() {
	document.getElementById("urlstop").addEventListener("click", function(event) {
		event.preventDefault()
	});
	var nickname = document.getElementById("nickn").value;
	var review = document.getElementById("reviewer").value;
	if (review === "" || nickname === "") {
		console.error("Review/Nickname field is empty");
		return 1;
	}

	var holder = document.getElementById("valuez");
	var holder1 = document.createElement("li");
	var imghold = document.createElement("div");
	var img = document.createElement("img");
	img.className = 'avatar';
	$(img).attr("src", "images/new_user.png");

	var username = document.createElement("a");
	var breaker = document.createElement("BR");
	var review2 = document.createElement("p");
	var divhold = document.createElement("div");
	var divhold2 = document.createElement("div");

	divhold.setAttribute("class", "divhold");
	divhold2.setAttribute("class", "divhold2");
	holder1.setAttribute("class", "clear");
	username.setAttribute("class", "userpos");
	img.setAttribute("class", "img1 borderedbox");
	review2.setAttribute("class", "revjs");
	username.innerHTML = nickname;
	review2.innerHTML = review;
	document.getElementById("nickn").value = "";
	document.getElementById("reviewer").value = "";

	holder1.appendChild(divhold);
	divhold.appendChild(img);
	divhold.appendChild(username);
	username.appendChild(breaker);
	divhold.appendChild(divhold2);
	divhold2.appendChild(review2);
	holder.appendChild(holder1);
};

var searchTerm = document.getElementById('serchbor');

function searchegg() {
	var searchVal = searchTerm.value;
	var searchUpper = searchVal.toUpperCase();
	var searchSpace = searchUpper.replace(/\s+/g, '');
	switch (searchSpace) {
		case "LIZARD":
		case "LIZARDSQUAD":
		case "LSQUAD":
		case "HAX":
		case "HACKS":
		case "HACKER":
		case "DARKWEB":
		case "DEEPWEB":
		case "HACKSQUAD":
			window.location.replace("PageNotFound.html");
			break
		case "SECURITY":
		case "SECURITYCHECK":
		case "PASSWORD":
		case "PASSWORDSTRENGTH":
		case "TESTYOURSECURITY":
		case "PASSWORDCHECK":
		case "PASSWORDCHECKER":
		case "TESTSEC":
			window.location.href = "TestSec.html";
			break
		case "REVIEWS":
		case "CONSUMER":
		case "CONSUMERREVIEWS":
		case "RATINGS":
		case "CONSUMERREVIEWS/EXPERIENCES":
		case "CONSUMERREVIEWSANDEXPERIENCES":
		case "REVIEWSANDEXPERIENCES":
		case "EXPERIENCES":
			window.location.href = "reviews.html";
			break
		case "LOGIN":
		case "REGISTER":
		case "SIGNIN":
		case "SIGNUP":
		case "JOIN":
		case "USERLOGIN":
		case "PROFILE":
		case "SIGN":
			window.location.href = "login.html";
			break
		case "HOME":
		case "HOMEPAGE":
		case "INDEX":
		case "HOMESCREEN":
		case "FRONTPAGE":
			window.location.href = "index.html";
			break
		default:
			window.location.href = "error404.html";
	}

};
