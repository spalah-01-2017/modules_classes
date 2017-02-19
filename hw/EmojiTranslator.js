// Конструктор EmojiTranslator позволяет создать объект,
// умеющий переводить слова в эмодзи. Описание методов указано в комментариях к ним:

    function EmojiTranslator() {
        this.emoji = {
            panda: '🐼',
            unicorn: '🦄'
        };
        this.text = '';
    }

EmojiTranslator.prototype.setText = function(text) {
    //устанавливает текст для перевода в свойство text
    this.text = text;
    return this.text;
};

EmojiTranslator.prototype.translate = function() {
    //заменяет слова в строке свойства text на панду или единорога: если слово
    // начинается на 'a', 'e', 'i', 'o', 'u' или 'y' - то единорог, иначе - панда.
    var words = this.text.split(" ");

    words.forEach(function (word) {
        if (word.charAt(0) === 'a' ||
            word.charAt(0) === 'e' ||
            word.charAt(0) === 'i') {

            console.log(EmojiTranslator.prototype.emoji.unicorn);
            return EmojiTranslator.prototype.emoji.unicorn;
        } else {
            //the same as:
            //console.log(translator.emoji.panda);
            console.log(EmojiTranslator.prototype.emoji.panda);

            return EmojiTranslator.prototype.emoji.panda;
        }
    })
};
// Пример работы реализованного кода:

    var translator = new EmojiTranslator();
// translator.emoji.panda;
translator.setText('unicorn rabbit panda elephant fox turtle');
translator.translate(); // '🦄 🐼 🐼 🦄 🐼 🐼'

// TODO: Добейтесь того, чтобы можно было использовать цепочку методов:

    var translator = new EmojiTranslator();
translator.setText('unicorn rabbit panda elephant fox turtle').translate();