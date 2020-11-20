$(function () {

  /* Volumen in m3 */
  const volumenPRIMETOWER = 228000;
  const volumenSEE = 200000;
  const volumenROCHETOWER = 324000;

  let seitenlaenge


  /* Canvas definieren */
  tc = document.getElementById("grafic");
  tctx = tc.getContext("2d");

  /* Canvas für Referenz */
  r = document.getElementById("referencebuilding");
  rtx = r.getContext("2d");

  /*FUNCTIONS */


  /* Draw Rect
  Parameters:
  Element
  Context
  length
  linecolor
  
  */
function drawrect(canv, cont, length,linecol){

  canv.clearRect(0, 0, cont.width, cont.height);
  canv.beginPath();
  canv.lineWidth = "1";
  canv.strokeStyle = linecol; //color
  canv.rect(5, 5, length, length);
  canv.stroke();
}  


  function getcbrt(volume){
    return Math.floor(Math.cbrt(volume));
  }


  $('.reference').click(function () {
    let id = $(this).attr('id');

    switch (id) {
      case "primetower":
        drawrect(rtx, r, getcbrt(volumenPRIMETOWER), "blue");
        $('#referencetitle').text("Der Prime Tower");
        break;
      case "rochetower":   
        drawrect(rtx, r, getcbrt(volumenROCHETOWER), "blue");
        break;
      case "see":
        drawrect(rtx, r, getcbrt(volumenSEE), "blue");
        break;
    }
  });

  $('#recalc').click(function() {

    tctx.clearRect(0, 0, tc.width, tc.height);
    seitenlaenge = getcbrt(($("#foodwasteschweiz").val())/1000);
    drawrect(tctx, tc, seitenlaenge, "black");

  });
  
  //ON LOAD
  // Draw inital trash rect 
  $('#recalc').click();


});