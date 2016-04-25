(function ( $ ) {
	$.fn.toggleImageSrc = function(options) {
		if( options.length === 2) {
			if( this.attr('src') !== options[0] ) {
				this.attr('src', options[0]);
			} else {
				this.attr('src', options[1]);
			}
		}
		return this;
	}
}( jQuery ));
