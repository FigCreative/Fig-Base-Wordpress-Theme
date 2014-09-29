// Smooth Animations
jQuery.fx.interval = 27;

// Start Foundation
$(document).foundation();

/// Modernizr SVG Support
/// Replace all .svgz with .png if unsupported
//////////////////////////////////////////////

if(!Modernizr.svg) {
    $('img[src*="svgz"]').attr('src', function() {
        return $(this).attr('src').replace('.svgz', '.png');
    });
} 

/// Modernizr WebP Support
/// Replace all .webp with .png if unsupported
/// Check Compatability! http://caniuse.com/#feat=webp
/////////////////////////////////////////////////////////

if(!Modernizr.webp) {
    $('img[src*="webp"]').attr('src', function() {
        return $(this).attr('src').replace('.webp', '.png');
    });
} 