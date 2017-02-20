// Функция-конструктор Semver, которая будет принимать строку,
// хранящую версию в виде строки и создающую объект, умеющий инкрементировать версию:

    function Semver(initial) {
        this.version = initial || '0.0.0'
    }

Semver.prototype.patch = function () {
    //увеличивает патч-версию на единицу: '0.0.0' -> '0.0.1'
    var ver = this.version.split(".");
    ver[2] = ++ver[2];
    var newVer = ver.join('.');
    console.log(newVer);
    this.version = newVer;
    return this.version;
};

Semver.prototype.minor = function () {
    //увеличивает минорную версию на единицу, при этом сбрасывая патч-версию до нуля: '0.0.1' -> '0.1.0'
    var ver = this.version.split(".");
    ver[1] = ++ver[1];
    ver[2] = 0;
    var newVer = ver.join('.');
    console.log(newVer);
    this.version = newVer;
    return this.version;
};

Semver.prototype.major = function () {
    //увеличивает мажорную версию на единицу, сбрасывая как патч-версию, таки и минорную версию до нуля: '0.1.1' -> '1.0.0'
    var ver = this.version.split(".");
    ver[0] = ++ver[0];
    ver[1] = 0;
    ver[2] = 0;
    var newVer = ver.join('.');
    console.log(newVer);
    this.version = newVer;
    return this.version;
};
// Примеры реализованного кода:

    var semver = new Semver();
semver.patch();
semver.version; // '0.0.1'
semver.patch();
semver.patch();
semver.version; // '0.0.3'
semver.minor();
semver.version; // '0.1.0'
semver.patch();
semver.version; // '0.1.1'
semver.major();
semver.version; // '1.0.0'