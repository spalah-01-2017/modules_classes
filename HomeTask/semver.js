function Semver(initial) {
    this.version = initial || '0.0.0'
}

Semver.prototype.patch = function () {
	var arr = this.version.split('.');
	arr[2] = (+arr[2] + 1);
	this.version = arr.join('.')
}

Semver.prototype.minor = function () {
	var arr = this.version.split('.');
	arr[1] = (+arr[1] + 1);
	arr[2] = 0;
	this.version = arr.join('.')
}

Semver.prototype.major = function () {
	var arr = this.version.split('.');
	arr[0] = (+arr[0] + 1);
	arr[1] = 0;
	arr[2] = 0;
	this.version = arr.join('.')
}

var semver = new Semver();
semver.patch()
console.log(semver.version); // '0.0.1'
semver.patch();
semver.patch();
console.log(semver.version); // '0.0.3'
semver.minor();
console.log(semver.version); // '0.1.0'
semver.patch();
console.log(semver.version); // '0.1.1'
semver.major();
console.log(semver.version); // '1.0.0'
