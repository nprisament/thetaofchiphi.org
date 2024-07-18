jQuery(document).ready(function ($) {
	(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FIRSTNAME';ftypes[1]='text';fnames[2]='LASTNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);
		// Find all iframes
		var $iframes = $( "iframe" );
		// Find &#x26; save the aspect ratio for all iframes
		$iframes.each(function () {
		    $( this ).data( "ratio", this.height / this.width )
		    // Remove the hardcoded width &#x26; height attributes
		    .removeAttr( "width" )
		    .removeAttr( "height" );
		});
		// Resize the iframes when the window is resized
		$( window ).resize( function () {
		    $iframes.each( function() {
				if ($(this).hasClass("no-resize"))
					return;

				// Get the parent container&#x27;s width
		        var width = $( this ).parent().width();
		        $( this ).width( width * .8 )
		        .height( width * $( this ).data( "ratio" ) *.75);
		    });
		    // Resize to fix all iframes on page load.
	}).resize();
});
