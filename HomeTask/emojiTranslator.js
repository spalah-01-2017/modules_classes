function EmojiTranslator() {
    this.emoji = {
        panda: '🐼',
        unicorn: '🦄'
    };
    this.text = '';
}

EmojiTranslator.prototype.setText = function(text) {
    this.text = text.toLowerCase();
    return this;
};

EmojiTranslator.prototype.translate = function() {
	var letters = ['a', 'e', 'i', 'o', 'u', 'y'];

    return this.text.split(' ').map(function (el) {
    	return letters.includes(el[0]) ? this.emoji.unicorn : this.emoji.panda;
    }, this).join(' ');
};

var translator = new EmojiTranslator();

console.log(translator.setText('Unicorn Rabbit panda elephant Fox turtle').translate());
