function Semver(initial) {
	this.version = initial || '0.0.0'
	var newArr = initial ? initial.split('.') : [];
	this.c = newArr[2] || 0;
	this.b = newArr[1] || 0;
	this.a = newArr[0] || 0;
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
