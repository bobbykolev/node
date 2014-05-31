window.onload=function(){
	ko.applyBindings(vm);
};

var ViewModel = function(name) {
	this.name = ko.observable(name);
	this.username = ko.observable('');
	this.password = ko.observable('');
	this.login = function (data, event) {
		console.log(this.username(), this.password());
	}
},
vm = new ViewModel('Test Node');