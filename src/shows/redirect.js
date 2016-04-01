function(doc, req) {
	return {
		code : 307,
		headers : {
			"Content-Type" : "text/plain",
			"Location": doc.href
		}
	}
}