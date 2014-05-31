window.onload=function(){
	ko.applyBindings(vm);
};

var ViewModel = function(name) {
	this.name = ko.observable(name);
},

vm = new ViewModel('Test Node');