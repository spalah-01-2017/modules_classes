function EmojiTranslator() {
    this.emoji = {
        panda: '🐼',
        unicorn: '🦄'
    };
    this.text = '';
}

EmojiTranslator.prototype.setText = function(text) {
	this.text = text.trim().toLowerCase();
	return this;
};

EmojiTranslator.prototype.translate = function() {
	var arr = [];
	var newArr = [];
	arr = this.text.split(' ');
	arr.map(function (el) {
		if (el.charAt(0) === 'a' ||
		    el.charAt(0) === 'e' ||
		    el.charAt(0) === 'i' || 
		    el.charAt(0) === 'o' || 
		    el.charAt(0) === 'u' || 
		    el.charAt(0) === 'y')
			{
				newArr.push(this.emoji.unicorn)
			} else {
				newArr.push(this.emoji.panda)
			};
	});
	return newArr.join(' ');
};
