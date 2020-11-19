$(function () {

     /*var trashpicURL = "./images/trashcan.svg"

    var totalWasteKG = 2800000
    var kgperlitrewaste = 0.800
    var trashtonnesizeL = 35
    var ochsnerbreite = 0.44

    var garbagecancount = (totalWasteKG * kgperlitrewaste)/trashtonnesizeL 
    var alltrashcansum = (ochsnerhoehe * garbagecancount)


    garbagecancount = 10
    var i;
   for (i = 0; i = garbagecancount; i++) {
        var image = new Image();
        image.src = trashpicURL;
        image.setAttribute("class", "trashcan");
        $('#Content').append(image);
    }*/ 


    var totalWasteKG = 2800000;
    var kgperlitrewaste = 0.800; /* kg pro Liter abfall im Durchschnitt */
    var trashtonnesizeL = 35;/* in Liter */
    var ochsnerbreite = 0.44;/* in Meter */
    var garbagecancount = (totalWasteKG * kgperlitrewaste)/trashtonnesizeL ;
    var alltrashcansum = (ochsnerbreite * garbagecancount);

    c = document.getElementById("distance"); 
    ctx = c.getContext("2d");
    c.style.width = (alltrashcansum) + "px";
    c.style.height =  "500px";
    ctx.beginPath();
    canvas_arrow(ctx, 0, 100, alltrashcansum, 100);
    ctx.stroke();
    
    
    function canvas_arrow(context, fromx, fromy, tox, toy) {
      var headlen = 20; // length of head in pixels
      var dx = tox - fromx;
      var dy = toy - fromy;
      var angle = Math.atan2(dy, dx);
      context.moveTo(fromx, fromy);
      context.lineTo(tox, toy);
      context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
      context.moveTo(tox, toy);
      context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    }

});