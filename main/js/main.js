function getURLParam() {
	const queryString = window.location.search;
	console.log(queryString);
	newString = queryString.replace(/\?/g, ''); 
	document.getElementById('url').value = newString;
	}