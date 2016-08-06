 /*global $ */

 var deck = new Array(52);
 var topCard;
 var suit = new Array("s", "h", "c", "d");
 var pointValue = new Array(0, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10);
 var hand = new Array(24);
 var cardValue = new Array(24);
 var nCards = new Array(2);

 var DEALER = 0;
 var PLAYER = 1;

 var LTCoin = 50;
 var bet = 0;

 var playDelay;

 var isNav4, isIE4, isDOM;

 document.getElementById("backCas").volume = 0.2;

 function cardPlace() {
 	var audio = document.getElementById('cardDown');
 	if (audio.paused) {
 		audio.play();
 	}
 	else {
 		audio.currentTime = 0
 	}
 }


 function getItem(layerName, itemName) {
 	var obj;

 	if (isDOM) {
 		if (itemName != "") {
 			obj = document.getElementById(itemName);
 		}
 		else {
 			obj = document.getElementById(layerName);
 		}
 	}
 	else if (isNav4) {
 		obj = document[layerName].document;
 		if (itemName != "") {
 			obj = obj[itemName];
 		}
 	}
 	else if (isIE4) {
 		if (itemName != "") {
 			obj = document.all[itemName];
 		}
 		else {
 			obj = document.all[layerName];
 		}
 	}
 	return obj;
 }

 function getStyleItem(divName) {
 	var obj;

 	if (isDOM) {
 		obj = document.getElementById(divName);
 		obj = obj.style;
 	}
 	else if (isNav4) {
 		obj = document[divName];
 	}
 	else {
 		obj = document.all[divName].style;
 	}
 	return obj;
 }

 function getCardImage(whose, n) {
 	var v;
 	n = whose * 12 + n;

 	v = getItem("card" + n, "pic" + n);
 	return v;
 }

 function show(object, vis) {
 	var obj;

 	obj = getStyleItem(object);
 	obj.visibility = vis;
 }

 function shuffle(n) {
 	var i, j, temp;

 	for (i = 0; i < n; i++) {
 		j = Math.floor(Math.random() * 52);
 		temp = deck[i];
 		deck[i] = deck[j];
 		deck[j] = temp;
 	}
 }

 function clearCards() {
 	var i;
 	var v;

 	for (i = 11; i >= 0; i--) {
 		if (hand[i] != 0) {
 			show("card" + i, "hidden");
 			v = getItem("card" + i, "pic" + i);
 			v.src = "pics/null.gif";
 		}
 		hand[i] = cardValue[i] = 0;
 	}
 	for (i = 23; i >= 12; i--) {
 		if (hand[i] != 0) {
 			show("card" + i, "hidden");
 			v = getItem("card" + i, "pic" + i);
 			v.src = "pics/null.gif";
 		}
 		hand[i] = cardValue[i] = 0;
 	}

 	nCards[DEALER] = nCards[PLAYER] = 0;
 }

 function showCard(toWhom, n, faceUp) {
 	var theCard, theSuit, thePips;
 	var img;

 	theCard = hand[toWhom * 12 + n];
 	theSuit = Math.floor((theCard - 1) / 13);
 	thePips = ((theCard - 1) % 13) + 1;

 	img = getCardImage(toWhom, n);

 	if (!faceUp) {
 		img.src = "pics/back1.gif";
 	}
 	else {
 		img.src = "pics/" + suit[theSuit] + thePips + ".gif";
 	}
 	show("card" + (toWhom * 12 + n), "visible");
 }

 function giveCard(toWhom) {
 	var n, theCard, thePips;
 	var img;
 	var i;
 	var temp = new Array(52);

 	n = nCards[toWhom];
 	hand[toWhom * 12 + n] = theCard = deck[topCard++];
 	thePips = ((theCard - 1) % 13) + 1;
 	cardValue[toWhom * 12 + n] = pointValue[thePips]
 	nCards[toWhom]++;

 	img = showCard(toWhom, n, (n != 1 || toWhom == PLAYER));

 	if (topCard == 52) {
 		window.status = "Reshuffling...";
 		n = 0;
 		for (i = 0; i < 24; i++) {
 			if (hand[i] != 0) {
 				n++;
 			}
 		}

 		shuffle(52 - n);

 		for (i = 51 - n; i >= 0; i--) {
 			deck[i + n] = deck[i];
 		}

 		topCard = 0;
 		for (i = 0; i < 24; i++) {
 			if (hand[i] != 0) {
 				deck[topCard++] = hand[i];
 			}
 		}
 		window.status = "";
 	}
 }

 function dealHand() {
 	var n;
 	var item;

 	item = getItem("EnterBet", "betArea");
 	n = parseFloat(item.betAmount.value);


 	if (isNaN(n)) {
 		alert("Enter a valid bet.");
 	}
 	else if (n < 0) {
 		alert("Enter a valid bet.");
 	}
 	else if (n > LTCoin) {
 		alert("You don't have enough coin.");
 	}
 	else {
 		document.getElementById("standBtn").style.visibility = "visible";

 		bet = n;
 		if (topCard >= 48) {
 			shuffle(52);
 			topCard = 0;
 		}
 		giveCard(PLAYER);
 		giveCard(DEALER);
 		giveCard(PLAYER);
 		giveCard(DEALER);

 		n = checkBlackjack();
 		if (n == "") {
 			show("EnterBet", "hidden")
 			show("playButtons", "visible");
 		}
 		else {
 			handFinished(n);
 		}
 	}
 }

 function checkBlackjack() {
 	var player21, dealer21;
 	var msg;
 	var n;

 	msg = "";

 	n = sumHand(DEALER);
 	if (n > 21) {
 		document.getElementById("standBtn").style.display = "none";
 		document.getElementById("hitBtn").style.display = "none";
 		showCard(DEALER, 1, true);
 		msg = "Dealer loses due to 2 aces. You win " + bet + " LTC...";
 	}
 	else {
 		dealer21 = ((cardValue[0] + cardValue[1]) == 21);
 		player21 = ((cardValue[12] + cardValue[13]) == 21);

 		if (dealer21) {
 			showCard(DEALER, 1, true);
 			if (player21) {
 				document.getElementById("standBtn").style.display = "none";
 				document.getElementById("hitBtn").style.display = "none";
 				msg = "Me and you both got blackjack. That's a tie.";
 			}
 			else {
 				document.getElementById("standBtn").style.display = "none";
 				document.getElementById("hitBtn").style.display = "none";
 				msg = "I got blackjack! You lose.";
 				LTCoin -= bet;
 			}
 		}
 		else if (player21) {
 			document.getElementById("standBtn").style.display = "none";
 			document.getElementById("hitBtn").style.display = "none";
 			msg = "Blackjack... You win " + formatLTC(bet * 3 / 2) + " LTC...";
 			LTCoin += bet * 3 / 2;
 		}
 	}
 	updateDealerInfo();
 	return msg;
 }

 function sumHand(whose) {
 	var sum, i;

 	sum = 0;
 	for (i = 0; i < 12; i++) {
 		sum += cardValue[whose * 12 + i];
 	}
 	return sum;
 }

 function hit(who) {
 	var sum, i, hasAces;

 	giveCard(who);
 	sum = sumHand(who);

 	if (who == PLAYER && sum > 21) {
 		while (true) {
 			hasAces = false;
 			for (i = 0; i < 12; i++) {
 				if (cardValue[who * 12 + i] == 11) {
 					cardValue[who * 12 + i] = 1;
 					sum -= 10;
 					hasAces = true;
 					break;
 				}
 			}
 			if (sum > 21 || (!hasAces)) {
 				break;
 			}
 		}
 	}

 	if ((sum > 21) && (who == PLAYER)) {
 		document.getElementById("standBtn").style.display = "none";
 		document.getElementById("hitBtn").style.display = "none";
 		handFinished("Your score went over 21, you lose.");
 		LTCoin -= bet;
 		updateDealerInfo();
 	}
 }

 function dealerPlays() {
 	var sum, playerSum;
 	var audio = document.getElementById('cardDown');

 	sum = sumHand(DEALER);
 	if (sum <= 19) {

 		if (audio.paused) {
 			audio.play();
 		}
 		else {
 			audio.currentTime = 0
 		}
 		hit(DEALER);
 		playDelay = window.setTimeout("dealerPlays();", 1000);
 		return;
 	}
 	window.clearTimeout(playDelay);
 	playerSum = sumHand(PLAYER);
 	if (sum > 21) {
 		handFinished("Dealer went over 21. You win " + formatLTC(bet) + " LTC...");
 		LTCoin += bet;
 	}
 	else if (sum == playerSum) {
 		handFinished("Looks like we tied...");
 	}
 	else if (sum < playerSum) {
 		handFinished("Your hand is better. You win " + formatLTC(bet) + " LTC...");
 		LTCoin += bet;
 	}
 	else {
 		handFinished("I win this one.");
 		LTCoin -= bet;
 	}
 	updateDealerInfo();
 }

 function stand() {
 	var cardFlip = document.getElementById('cardFlip');
 	if (cardFlip.paused) {
 		cardFlip.play();
 	}
 	else {
 		cardFlip.currentTime = 0
 	}
 	document.getElementById("standBtn").style.visibility = "hidden";
 	document.getElementById("hitBtn").style.display = "none";
 	showCard(DEALER, 1, true);
 	playDelay = window.setTimeout("dealerPlays();", 1000);
 }

 function handFinished(msg) {
 	var doc;

 	show("EnterBet", "hidden");
 	show("playButtons", "hidden");
 	doc = getItem("nextGame", "");
 	str = msg + "<p><form>";
 	str += "<input id='nxtGame' type='button' value='Next Round' onclick='window.newDeal();' />";
 	str += "</form></p>";
 	if (isNav4) {
 		doc.open();
 		doc.write(str);
 		doc.close();
 	}
 	else {
 		doc.innerHTML = str;
 	}
 	show("nextGame", "visible");
 }

 function newDeal() {
 	if (LTCoin == 0) {
 		window.location.href = "bankrupt.html";
 		return;
 	}
 	clearCards();
 	document.getElementById("hitBtn").style.display = "inline";
 	document.getElementById("standBtn").style.visibility = "hidden";
 	document.getElementById("standBtn").style.display = "inline";
 	show("nextGame", "hidden");
 	show("EnterBet", "visible");
 }

 function formatLTC(amount) {
 	var coinz, cents;

 	coinz = Math.floor(amount);
 	cents = Math.round((amount - coinz) * 100);

 	if (cents == 100) {
 		coinz++;
 		cents = 0;
 	}
 	return coinz + "." + ((cents < 10) ? "0" : "") + cents;
 }

 function updateDealerInfo() {
 	var doc;

 	doc = getItem("dealerInfo", "");
 	str = "You currently have " + formatLTC(LTCoin) + " LTC.";
 	if (isNav4) {
 		doc.open();
 		doc.write(str);
 		doc.close();
 	}
 	else {
 		doc.innerHTML = str;
 	}
 }

 function setupGame() {
 	var i;

 	isNav4 = false;
 	isIE4 = false;
 	isDOM = false;
 	if (document.getElementById) {
 		isDOM = true;
 	}
 	else if (document.all) {
 		isIE4 = true;
 	}
 	else if (document.layers) {
 		isNav4 = true;
 	}

 	for (i = 0; i < 52; i++) {
 		deck[i] = i + 1;
 	}
 	shuffle(52);
 	topCard = 0;

 	clearCards();
 	show("nextGame", "hidden");
 	updateDealerInfo();
 }