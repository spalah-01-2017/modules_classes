function Semver(initial) {
	this.version = initial || '0.0.0'
	this.c = 0;
	this.b = 0;
	this.a = 0;
}

Semver.prototype.patch = function () {
	this.version = this.a + '.' + this.b +  '.' + ++this.c;
}

Semver.prototype.minor = function () {
	this.version = this.a + '.' + ++this.b + '.' + (this.c = 0);
}

Semver.prototype.major = function () {
	this.version = ++this.a + '.' + (this.b = 0) + '.' + (this.c = 0);
}