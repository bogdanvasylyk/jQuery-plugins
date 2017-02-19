(function($) {
    $.fn.trunc = function(amountCharacters, options) {
        var options = $.extend({
            'hellip': '&hellip;',
            'secondPartClass':'continue',
            'hellipClass':'hellip',
        }, options); //options - it is the object with default optons
        var change = function() {
            var $par = $(this);
            var $p = $(this).html().split(""); // transform innerHTML of target paragraph to array for next work
            var $p2p = $p.splice(amountCharacters, $p.length); // cut and store part of text which should be hidden        
            $par.html($p.join("")); //write to paragraph visible part
            var $continuation = `<span class='${options.secondPartClass}'> ${$p2p.join('')}</span>`; //make a string for hidden part and store it
            $par.append(` <a href='#' class='${options.hellipClass}'>${options.hellip}</a>`); //append hellip to the end of vivble part of paragraph
            $par.find(".hellip").click(function(event) { //add event handler for hellip
                $(this).hide(); // hide hellip node
                $par.append($continuation) //append hidden part and make a full text in paragraph
            });
        };
        return this.each(change);
    };
})(jQuery);
