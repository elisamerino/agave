console.log(document.location.href);

if (document.location.href==="file:///C:/Users/elisaappplant/Documents/Coding/yuku/index.html#distributors"){
    console.log("HELLO DISTRIBUTION")
    document.body.className = "distributors"; 
    document.getElementById("distributors").style.display = 'block';
    document.getElementById("distributors").classList.add("is-visible");
    document.getElementById("landing-page").classList.add("hidden");
    document.getElementById("distributors").classList.remove('fade','hidden');
}


document.addEventListener("DOMContentLoaded", function(e) {
    document.body.classList.remove('fade');
    document.getElementById("distributors").classList.add('fade');
    document.getElementById("contact").classList.add('fade');
    document.getElementById("impressum").classList.add('fade');
  });
  /*
document.getElementById("distro-btn").addEventListener("click", function(e) {
document.body.className = "distributors"; 
document.getElementById("landing-page").classList.add("hidden");
document.body.style.backgroundColor="#E0DAD4";
document.getElementById("distributors").style.display = 'block';

});
*/


// Show an element
var show = function (elem) {


	var getHeight = function () {
		elem.style.display = 'block'; // Make it visible
		var height = "100vh"; // Get it's height
		elem.style.display = ''; //  Hide it again
		return height;
	};
    
	
    var height = getHeight(); // Get the natural height
    
    elem.classList.add('is-visible'); // Make the element visible
  /*  for(var i=0;i<=100;i++){
        elem.style.height= i+"vh";
        i++;
    }*/
	//elem.style.height = height; // Update the max-height

	// Once the transition is complete, remove the inline max-height so the content can scale responsively
	window.setTimeout(function () {
		elem.style.height = '100vh';
    }, 350);
    document.getElementById("landing-page").classList.add("hidden");

};

// Hide an element
var hide = function (elem) {

	// Give the element a height to change from
	elem.style.height = '100vh';
    console.log("ESCONDE LA PINCHE VENTANA")
	// Set the height back to 0
	window.setTimeout(function () {
		elem.style.height = '0';
	}, 1500);

	// When the transition is complete, hide it
	window.setTimeout(function () {
        elem.classList.remove('is-visible');
        document.getElementById("landing-page").classList.remove("hidden");

	}, 3500);

  
};

// Toggle element visibility
var toggle = function (elem, timing) {

	// If the element is visible, hide it
	if (elem.classList.contains('is-visible')) {
		hide(elem);
		return;
	}

	// Otherwise, show it
	show(elem);
	
};

$(".closebtn").bind("click", function(element) {
  
  var targetID=element.currentTarget.id.replace("close-", "");
  console.log(targetID)
  var content = document.getElementById(`${targetID}`);
  if (!content) return;
  toggle(content);
},false);
//document.getElementsByClassName("closebtn").addEventListener("click", function(event){
// Prevent default link behavior
//console.log(event);
//event.preventDefault();

// Get the content
//var content = document.getElementById();
//if (!content) return;

// Toggle the content

//toggle(content);

//}, false);

// Listen for click events
document.getElementById("open-distributors").addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
	if (!event.target.classList.contains('toggle')) return;

	// Prevent default link behavior
	event.preventDefault();

	// Get the content
	var content = document.getElementById("distributors");
	if (!content) return;

	// Toggle the content
	toggle(content);

}, false);