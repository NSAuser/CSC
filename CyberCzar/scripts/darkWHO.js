/* global $ */

var OSName = "Unknown OS";
var watch = document.getElementById(watchDiv);

function osfind() {
	if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
	if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
	if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
	if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

	$('#watchDiv').html("<h2>Welcome, </h2>" + OSName + "<h2> user</h2>");
};