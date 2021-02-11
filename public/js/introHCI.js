'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var project = $(this).closest('.project')
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	$.get("http://localhost:3000/project/"+idNumber, function(res) {
		console.log(res)
		$("#project"+res.id+" .details").append("<p>"+res.title+"</p>")
		$("#project"+res.id+" .details").append("<p>"+res.date+"</p>")
		$("#project"+res.id+" .details").append(res.summary)
		$("#project"+res.id+" .details").append("<img src="+res.image+">")
		$("#project"+res.id+" .details img").addClass("detailsImage")
	})
	console.log("User clicked on project " + idNumber);
}


