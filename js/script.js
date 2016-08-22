// (function($) {
//     $.fn.typeAnimation = function(content) {
//         deferred = jQuery.Deferred();
//
//         var contentArray = content.split(""),
//             current = 0,
//             elem = this;
//             console.log(contentArray);
//         setInterval(function() {
//             if(current < contentArray.length) {
//               elem.text(elem.text() + contentArray[current++]);
//             }
//         }, 100);
//     };
//
// })(jQuery);
// //
// //
// // $('.line1').typeAnimation("<!DOCTYPE html>")
// //   .then($('.line2').typeAnimation("Hello World"));
//
// stringArray = ["<!DOCTYPE html>",
//                "<html>",
//                "\t<head>",
//                "\t\t<title> Welcome! </title>" ];
//
// for(i=1; i < stringArray.length+1; i++){
//   currentLine = '.line' + i;
//   $(currentLine).typeAnimation(stringArray[i-1]);
// }


// $('.line1').typeAnimation("<!DOCTYPE html>");
// $('.line2').typeAnimation("<html>");
// $('.line3').typeAnimation("\t<head>");
// $('.line4').typeAnimation("\t\t<title> Welcome! </title>");

$('.type-it').typeIt({
});
