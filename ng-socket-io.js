// Angular module
(function(ang) {

	var module = ang.module('ng-socket-io', []);

	module.factory('IO', [function() {
		return function (url, opts) {
			return io( url, opts );
		}
	}]);

	module.provider('$socket', function() {
		var url;
		var opts;
		this.init = function(_url, _opts) {
			url = _url;
			opts = _opts;
		}
		this.$get = ['IO', function(IO) {
			return IO(url, opts);
		}];
	});

})(angular)