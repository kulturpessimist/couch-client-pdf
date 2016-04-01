function(doc, req) {
	return {
		body : '<pre>' + JSON.stringify(doc) + '</pre><hr><pre>' + JSON.stringify(req) + '</pre>',
		headers : {
			"Content-Type" : "text/html",
		}
	}
}