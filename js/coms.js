
var maxLength = 500;

window.onload = init;

function init()
{
	var commentBox = document.getElementById("comment");
	var countBox = document.getElementById("wordcount");
	
	countBox.value = "0/" + maxLength;
	
	commentBox.onkeypress = checkLength;
	commentBox.onkeyup = updateCount;
}

function countText()
{
	var commentBox = document.getElementById("comment");
	var commentregx = /\s/g;
	var commentText = commentBox.value.replace(commentregx, "");
	return commentText.length;
}

function checkLength(e)
{
	var evt = e || window.event;
	
	if(countText() < maxLength)
		return true;
	else if (evt.keyCode == 8 || evt.keyCode == 46) 
		return true;
    else 
		return false;
}

function updateCount(e)
{
	var countBox = document.getElementById("wordcount");
	var currentLength = countText();
	
	countBox.value = currentLength+ "/" + maxLength;
	
	if(currentLength < maxLength)
	{
		countBox.style.color = "black";
		countBox.style.backgroundColor = "white";
	}
	else
	{
		countBox.style.color = "white";
		countBox.style.backgroundColor = "red";
	}
}