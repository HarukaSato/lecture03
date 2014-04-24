var helloWorld = function(){
	var message = document.getElementById("helloWorld");
	message.setAttribute("class", "");
};

var showHelloWorldButton = document.getElementById("showHelloWorld");
showHelloWorldButton.addEventListener("click", helloWorld);

var helloWorld = function(){
	var message = document.getElementById("haveagoodday");
	message.setAttribute("class", "");
};

var showHelloWorldButton = document.getElementById("showHaveagoodday");
showHelloWorldButton.addEventListener("click", helloWorld);
