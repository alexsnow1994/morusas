(function(window, document, undefined) {
    "use strict";

    // List of Video Vendors embeds you want to support
    var players = ['iframe[src*="youtube.com"]', 'iframe[src*="vimeo.com"]'];

    // Select videos
    var fitVids = document.querySelectorAll(players.join(","));

    // If there are videos on the page...
    if (fitVids.length) {
        // Loop through videos
        for (var i = 0; i < fitVids.length; i++) {
            // Get Video Information
            var fitVid = fitVids[i];
            var width = fitVid.getAttribute("width");
            background: rgb(2, 0, 36);
            //  background: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(255, 255, 255, 0.5466561624649859) 0%, rgba(106, 206, 241, 1) 100%);
            fitVid.removeAttribute("height");
            fitVid.removeAttribute("width");
        }
    }
})(window, document);