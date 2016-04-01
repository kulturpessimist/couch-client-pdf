function(doc){
	if(doc.type=="link"){
		emit(doc._id, doc.href);
	}
}