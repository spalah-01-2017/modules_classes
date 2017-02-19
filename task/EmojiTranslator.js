function EmojiTranslator() {
    this.emoji = {
        panda: '🐼',
        unicorn: '🦄'
    };
    this.text = '';
}

EmojiTranslator.prototype.setText = function(text) {
	this.text = text.trim();
	return this;
};

EmojiTranslator.prototype.translate = function() {
	var arr = [];
	var newArr = [];
	arr = this.text.split(' ');
	arr.map(function (el) {
		if (el.charAt(0).toLowerCase() === 'a' ||
				el.charAt(0).toLowerCase() === 'e' ||
				el.charAt(0).toLowerCase() === 'i' || 
				el.charAt(0).toLowerCase() === 'o' || 
				el.charAt(0).toLowerCase() === 'u' || 
				el.charAt(0).toLowerCase() === 'y')
			{
				newArr.push(this.emoji.unicorn)
			} else {
				newArr.push(this.emoji.panda)
			};
	});
	return newArr.join(' ');
};