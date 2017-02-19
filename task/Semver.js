function Semver(initial) {
	this.version = initial || '0.0.0'
	this.pa = 0;
	this.mi = 0;
	this.ma = 0;
}

Semver.prototype.patch = function () {
	this.version = '0.' + '0.' + ++this.pa;
}

Semver.prototype.minor = function () {
	this.version = '0.' + ++this.mi + '.0';
}

Semver.prototype.major = function () {
	this.version = ++this.ma + '.0' + '.0';
}