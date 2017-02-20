function Semver(initial) {
	this.version = initial || '0.0.0'
	this.newArr = initial.split('.');
	this.c = this.newArr[2] || 0;
	this.b = this.newArr[1] || 0;
	this.a = this.newArr[0] || 0;
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
