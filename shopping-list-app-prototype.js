/* debugging strategies
debugging level 1 => check if JS syntax is correct (check console in Web Dev )
debugging level 2 => check if the targeting is working (check the connection between the HTML element and equivalent JS functionality ==> alert("here"); inside the function)
debugging level 3 => check if the logic makes sense (check if the JS functionality returns what we expect ==> alert alert(VALUE-NAME); inside the function)
*/


/*
STEP 1
before document ready we are defining all the functions (we explain what they should be doing when used)
*/

/* function for adding items to the shopping list using the add to list button and enter key */
function addItem() {
	//get the value of the input box
	var itemValue = $('#add-item').val();
	
	//validate input
	if( (itemValue == "") || (itemValue == " ") || (itemValue == "  ") ) {
		alert("Please add a valid product");
	}
	//if the input is valid ....
	else {
		//dynamically create one row inside the shopping list 
		var row = $('<li><button class="checkbox">&#x2713;</button><span class="list">' + itemValue + '</span><button class="delete" id="remove-button">x</button></li>');
		//add each row to the previous ones
		$('#list').append(row);
	}
	//empty the input box after submit
	$('#add-item').val('');
}

/*function to remove an item from the list clicking on the 'x' */
function removeItem() {
//$(this) means that on WHATEVER you just clicked, go to the parent of it (in our case the LI) and remove it
	$(this).parent().remove();
}

/*function to select an item to cross out 
	Note: create the 'cross-out' class in CSS file first! You don't need to use it in the index.html because the JS will be adding it automatically to the index
*/
function crossOut() {
//$(this) means that on WHATEVER you just clicked, go to the parent of it (in our case the LI) and add / remove the "cross-out" class to it
	$(this).parent().toggleClass('cross-out');
}

/*function to reset and clear the list */
function clearList() {
//find the the UL container (in our case having the ID list) which contains all the LIs and delete it
	$('#list').empty();
}	

/*
STEP 2
Inside document ready we are calling all the functions (we used them) and connect them with the containers in HTML (for example the #add-button from HTML will be connected with the addItem function)
*/

/*the following 2 function calls should be INSIDE the $(document).ready(function() because the targeted containers where created WHEN the page was loaded*/
$(document).ready(function() {
	/*on click of the add to list button id add-button action add item */
	$('#add-button').on('click', addItem);
	
	
	/*on click of the reset list button id startover action reset list */
	$('#startover').on('click', clearList);

});

/*the following 3 function calls should be OUTSIDE the $(document).ready(function() because the targeted containers where created AFTER the page was loaded*/


/*on click of the 'x' button id remove-button action remove item */
	$(document).on('click', '#remove-button', removeItem);
	
/*on click of a list item id cross-out action cross out item */
	$(document).on('click', '.checkbox', crossOut);

/*on ENTER add item */
	$(document).on('keypress', function(key) {
        if (key.keyCode == 13) {
            addItem();
        }
	});