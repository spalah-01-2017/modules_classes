function Semver(initial) {
    var version = initial || '0.0.0';

    return {
    	patch: function () {
		var arr = version.split('.');
		arr[2] = (+arr[2] + 1);
		version = arr.join('.')
		},

		minor: function () {
		var arr = version.split('.');
		arr[1] = (+arr[1] + 1);
		arr[2] = 0;
		version = arr.join('.')
		},

		major: function () {
		var arr = version.split('.');
		arr[0] = (+arr[0] + 1);
		arr[1] = 0;
		arr[2] = 0;
		version = arr.join('.')
		},

		getVersion: function () {
			return version;
		}
    }
}

var semver = Semver();
semver.patch()
console.log(semver.getVersion()); // '0.0.1'
semver.patch();
semver.patch();
console.log(semver.getVersion()); // '0.0.3'
semver.minor();
console.log(semver.getVersion()); // '0.1.0'
semver.patch();
console.log(semver.getVersion()); // '0.1.1'
semver.major();
console.log(semver.getVersion()); // '1.0.0'
console.log(semver.version); // undefined
