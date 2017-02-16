/////////////////////
function counter() {
    var count = 0;
    return function(str) {
        return str === '-' ? --count : ++count;
    }
}

var c1 = counter();
c1(); //1
c1(); //2
c1('-');

///////////////////////
//Скрытые данные с публичными методами
function counter() {
    var count = 0;

    var puplicAPI = {
        inc: function() {
            return ++count;
        },
        dec: function() {
            return --count;
        }
    };
    return puplicAPI;
}

var c1 = counter();
c1.inc(); // 1
//Данные доступны, не скрыты
var counter = {
    count: 0,
    inc: function() {
        return ++this.count;
    },
    dec: function() {
        return --this.count;
    }
};
counter.inc(); // 1
counter.count = 999;


//////////////////////

var module2 = {
	anotherMethod: function() {
		console.log('another method');
	}
}
var moduleCounter = (function counter(mod) {
    var count = 0;
    mod.anotherMethod();
    var puplicAPI = {
        inc: function() {
            return ++count;
        },
        dec: function() {
            return --count;
        }
    };
    return puplicAPI;
})(module2);

moduleCounter.inc(); // 1

////////////////
//Более сложный пример на основе примера выше
var counter = function(extend) {
	var count = {
		value: 0
	};
	var publicAPI = {
		inc: function() {
			return ++count.value;
		},
		dec: function() {
			return --count.value;
		}
	};

	if(typeof extend === 'function') {
		extend(publicAPI, count);
	}

	return publicAPI;
}

//создание объекта с двумя методами
var moduleCounter = counter();
moduleCounter.inc(); // 1

var extendApi = function (api, privateData) {
	api.help = function() {
		return Object.keys(api).filter(function(methodName) {
			return methodName !== 'help';
		});
	}
	api.increaseTwice = function() {
		return privateData.value *= 2;
	}
	api.getValue = function() {
		return privateData.value;
	}
};

//создание расширенного объекта с большим количеством методов
var moduleCounterExtended = counter(extendApi);
moduleCounterExtended.help() // ["inc", "dec", "increaseTwice", "getValue"]
moduleCounterExtended.getValue() // 0
moduleCounterExtended.inc() // 1
moduleCounterExtended.increaseTwice() // 2
moduleCounterExtended.increaseTwice() // 4


// ES6/7 синтаксис - так это будет выглядеть в современном варианте, который мы будем использовать чуть позже
// const counter = (extend) => {
// 	const count = {
// 		value: 0
// 	};
// 	const publicAPI = {
// 		inc: () => ++count.value,
// 		dec: () => --count.value
// 	};

// 	if(typeof extend === 'function') {
// 		extend(publicAPI, count);
// 	}

// 	return publicAPI;
// }

// const moduleCounter = counter();

// const extendApi = (api, privateData) => {
// 	Object.assign(api, {
// 		help: () => Object.keys(api).filter(methodName => methodName !== 'help'),
// 		increaseTwice: () => privateData.value *= 2,
// 		getValue: () => privateData.value
// 	})
// };

// const moduleCounterExtended = counter(extendApi);


/////////////////////
//Class pattern
function Counter() {
    this.count = 0;
}

Counter.prototype.inc = function() {
    return ++this.count;
};

Counter.prototype.dec = function() {
    return --this.count;
};

var c1 = new Counter();
c1.inc() // 1

// class Counter {
// 	constructor() {
// 		this.count = 0;
// 	}
// 	inc() {
// 		return ++this.count;
// 	}
// 	dec() {
// 		return --this.count;
// 	}
// }
