function jQuery(selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector))
	return this
}

jQuery.prototype.each = function(fn){
	this.elements.forEach((element, index) => fn.call(element, element, index))
	return this
}

jQuery.prototype.click = function(fn){
	this.each(element => element.addEventListener('click', fn))
	return this
}

jQuery.prototype.html = function(h){
	this.each(element => element.innerHTML = h);
	return this
}

jQuery.prototype.text = function(txt){
	this.each(element => element.innerText = txt);
	return this
}

const $ = (e) => new jQuery(e);

$('#ch').html("<p>New paragraph</p>");
$('.CP').text("You changed me")