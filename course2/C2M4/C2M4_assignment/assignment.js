/*
 *		This file contains the javascript code for our gallery
 */

// variables for all of the templates so we only have to compile
// them once on page load and can then use the same compiled 
// templates many times
var category_template, animals_template, animal_template;

// create an object for image modal
var image_modal = {};

// variables to store the current displayed album and photo
var current_category = animals_data.category[0];
var current_animal = current_category.animals[0];

// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data) {
	var html    = template(data);
	$("#content").html(html);
}

function showModal() {
	var modal = document.getElementById("myModal");
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	modal.style.display = "block";
	modalImg.src = this.src;
	modalImg.alt = this.alt;
	captionText.innerHTML = this.alt;
	$(".close").click(function(){
		modal.style.display = "none";
	});
}

// prepare one animal thumbnail picture for each category
for (var i = 0; i < animals_data.category.length; i++) {
	animals_data.category[i].cat_thumbnail = animals_data.category[i].animals[0].image1;
	console.log(animals_data.category[i].cat_thumbnail);
}

// document read gets called when the whole document
// is loaded, so we put most of the code that needs to run
// in here
$(document).ready(function(){

	//
	// compile all of our templates ready for use
	//
	var source   = $("#category-template").html();
	category_template = Handlebars.compile(source);
	
	source = $("#animals-template").html();
	animals_template = Handlebars.compile(source);
	
	source= $("#animal-template").html();
	animal_template = Handlebars.compile(source);
	
	
	// showTemplate(category_template, animals_data);

	// 
	//  clicking on the albums tab shows the 
	//  thumbnails of all the albums
	//
	$("#category-tab").click(function () {

		// displays the albums template
		showTemplate(category_template, animals_data);

		// make the categorires tab the active one
		$(".nav-tabs .active").removeClass("active");
		// then make albums tab active
		$("#category-li").addClass("active");
		
		$(".category-thumbnail").click(function() {
			var index = $(this).data("id");
			
			// set the current category to the one user clicks on
			current_category = animals_data.category[index];
			// displays animals from the selected category
			showTemplate(animals_template, current_category);
			
			// make the animals tab the active one
			$(".nav-tabs .active").removeClass("active");
			$("#animals-li").addClass("active");
			
			$(".animal-thumbnail").click(function() {
				index = $(this).data("id");
				current_animal = current_category.animals[index];
				showTemplate(animal_template, current_animal);
				
				$(".nav-tabs .active").removeClass("active");
				$("#animal-li").addClass("active");
				
				$(".large-img").click(showModal);
			});
			
		});
	});
	
	$("#animals-tab").click(function() {
		showTemplate(animals_template, current_category)
		
		// make the animals tab the active one
		$(".nav-tabs .active").removeClass("active");
		$("#animals-li").addClass("active");
		
		$(".animal-thumbnail").click(function() {
			var index = $(this).data("id");
			current_animal = current_category.animals[index];
			showTemplate(animal_template, current_animal);
			
			$(".nav-tabs .active").removeClass("active");
			$("#animal-li").addClass("active");
			
			// $(".large-img").click(displayModal);
			$(".large-img").click(showModal);
			
		});	
	});
	
	$("#animal-tab").click(function() {
		// show current annial
		showTemplate(animal_template, current_animal);
		
		// active tab
		$(".nav-tabs .active").removeClass("active");
		$("#animal-li").addClass("active");
		
		// show modal
		$(".large-img").click(showModal);
	});

	// start the page by showing the albums view
	// we do this by virtually clicking on the 
	// albums tab
	$("#category-tab").click();

});