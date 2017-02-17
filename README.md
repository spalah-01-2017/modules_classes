## Домашнее задание

### Теория

[Презентация](https://docs.google.com/presentation/d/17-H9P-4jUph_B1RTRQgP3KDuxASkGM-jYXZIKdXTh4g/edit?usp=sharing)

Функции-конструкторы, прототипы: [1](https://learn.javascript.ru/prototype), [2](https://learn.javascript.ru/new-prototype), [3](https://learn.javascript.ru/native-prototypes), [4](https://learn.javascript.ru/classes)

[Продвинутое использование функций](https://karmazzin.gitbooks.io/eloquentjavascript_ru/content/chapters/chapter5.html)

[Примеры с занятия](/example.js)

===
### Практика. Реализуйте следующие функции-конструкторы

(1) ⭐ Конструктор EmojiTranslator позволяет создать объект, умеющий переводить слова в [эмодзи](https://ru.wikipedia.org/wiki/%D0%AD%D0%BC%D0%BE%D0%B4%D0%B7%D0%B8). Описание методов указано в комментариях к ним:

```javascript
function EmojiTranslator() {
    this.emoji = {
        panda: '🐼',
        unicorn: '🦄'
    };
    this.text = '';
}

EmojiTranslator.prototype.setText = function(text) {
    //устанавливает текст для перевода в свойство text
};

EmojiTranslator.prototype.translate = function() {
    //заменяет слова в строке свойства text на панду или единорога: если слово начинается на 'a', 'e', 'i', 'o', 'u' или 'y' - то единорог, иначе - панда.
}
```

Пример работы реализованного кода:

```javascript
var translator = new EmojiTranslator();
translator.setText('unicorn rabbit panda elephant fox turtle');
translator.translate(); // '🦄 🐼 🐼 🦄 🐼 🐼'
```

Добейтесь того, чтобы можно было использовать цепочку методов:

```javascript
var translator = new EmojiTranslator();
translator.setText('unicorn rabbit panda elephant fox turtle').translate(); // '🦄 🐼 🐼 🦄 🐼 🐼'
```

(2) ⭐ Функция-конструктор Semver, которая будет принимать строку, хранящую версию в виде строки (почитайте про семантическое версионирование [здесь](http://semver.org/lang/ru/)) и создающую объект, умеющий инкрементировать версию:

```javascript
function Semver(initial) {
    this.version = initial || '0.0.0'
}

Semver.prototype.patch = function () {
  //увеличивает патч-версию на единицу: '0.0.0' -> '0.0.1'
}

Semver.prototype.minor = function () {
  //увеличивает минорную версию на единицу, при этом сбрасывая патч-версию до нуля: '0.0.1' -> '0.1.0'
}

Semver.prototype.major = function () {
  //увеличивает мажорную версию на единицу, сбрасывая как патч-версию, таки и минорную версию до нуля: '0.1.1' -> '1.0.0'
}
```

Примеры реализованного кода:

```javascript
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
```

(3) Реализуйте функционал из задания (2), используя паттерн "Модуль" ([1](https://github.com/spalah-01-2017/modules_classes/blob/master/example.js#L16-L28), [2](http://monsterlessons.com/project/lessons/module-pattiern-v-javascript), [3](https://learn.javascript.ru/closures-module#приём-проектирования-модуль)).

___
⭐ - обязательное задание
Все функции должны находиться в разных файлах (одна функция - один файл) с именем этой функции. Например, реализация функции-конструктора Semver должна находиться в файле Semver.js.
