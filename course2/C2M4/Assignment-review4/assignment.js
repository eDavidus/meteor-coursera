/*
 *		This file contains the javascript code for our Animals site
 */

// variables for all of the templates so we only have to compile
// them once on page load and can then use the same compiled 
// templates many times
var categories_template, animals_template, animal_template;

// variables to store the current displayed album and photo
var current_category = animals_data.category[0];
var current_animal = current_category.animals[0];

// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}

function setupAnimal () {
    var index = $(this).data("id");

    // set the current animal to this animal
    current_animal = current_category.animals[index];
    
    $("h1#page-header").html(current_animal.name);
    // displays the single photo template
    showTemplate(animal_template, current_animal);
 
    // add click event for categories breadcrumb
    $(".breadcrumb").html('<li><a id="category-crumb" href="#">Categories</a></li>' +
       '<li><a id="current-cat-crumb" href="#">' + current_category.name + '</a></li>'+
       '<li class="active">' + current_animal.name + '</a></li>');
    $("#category-crumb").click(function (){
        setupCategory();
    });

    $("#current-cat-crumb").click(function (){
        setupAnimals();
    });
}

function setupAnimals () {

    $("h1#page-header").html(current_category.name);
    showTemplate(animals_template, current_category);
    // add click event for categories breadcrumb
    $(".breadcrumb").html('<li><a id="category-crumb" href="#">Categories</a></li>' +
       '<li class="active">' + current_category.name + '</li>');
    $("#category-crumb").click(function (){
        showTemplate(categories_template, animals_data);
        setupCategory();
        $(".breadcrumb").html('<li class="active">Categories</li>');
    });

    // add click on all the animal thumbnails
    $(".animal-thumbnail").click(setupAnimal);
}

function setupCategory () {

    $("h1#page-header").html('Animals');
    showTemplate(categories_template, animals_data);
	// 
    // clicking on a category shows all the animals in that category
	//
    $(".category-thumbnail").click(function () {
        var index = $(this).data("id");

        // set the current category to this category
        current_category = animals_data.category[index];

        // displays the photos template
        setupAnimals();

   });
    $(".breadcrumb").html('<li class="active">Categories</li>');
}

// document read gets called when the whole document
// is loaded, so we put most of the code that needs to run
// in here
$(document).ready(function(){

	//
	// compile all of our templates ready for use
	//
	var source   = $("#categories-template").html();
	categories_template = Handlebars.compile(source);
	
	source   = $("#animals-template").html();
	animals_template = Handlebars.compile(source);
	
	source   = $("#animal-template").html();
	animal_template = Handlebars.compile(source);
	
    setupCategory();

});
