// take input textbox put into a list

function addItem(){
	var newItem = $("#newItem").val();
	console.log(newItem);

	// var listItems = $('#itemList');

	// console.log(listItems);
	// console.log(listItems.length);

	$('#itemList').prepend('<li><i class="fa fa-check checkMark"></i>' + newItem + '<i class="fa fa-times delete"></i></li>');
	$('#newItem').val('')
	// console.log(listItems.length);
}

//list:
//change style of text to show purchased

function checkItem(){
	$(this).parent().toggleClass('cross-out');
}

//delete item from list

function deleteItem(){
	// var listIndex = $(this).parent().index();
	// console.log(listIndex);
// $(this).parent().index(listIndex).remove();
$(this).parent().remove();
console.log($(this).parent().length);
}

//clear list

function clearList(){
	var listItems = $('#itemList');
	listItems.empty();
}


$(document).ready(function() {
	console.log('This is JQuery.');
	$("#addItem").on('click', addItem);
	$("#newItem").on('keypress',function(key){
		if (key.which == 13){
		addItem();
	}
});
	$(".clear").on('click', clearList);

});

// $(".checkBox").on('click', checkItem);

 // $(".delete").on('click', deleteItem);
 $(document).on('click', '.delete', deleteItem);
 $(document).on('click', '.checkMark', checkItem);