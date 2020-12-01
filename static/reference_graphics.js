$(function () {


  /* Canvas definieren */
  tc = document.getElementById("grafic");
  tctx = tc.getContext("2d");

  /* Canvas für Referenz */
  r = document.getElementById("referencebuilding");
  rtx = r.getContext("2d");

  // Set default Foodwaste value
  $("#foodwaste").val(volumeFOODWASTE);

  /*FUNCTIONS */
  /* Draw Rect
  Parameters:
  Element
  Context
  length
  linecolor
  
  */
  function drawrect(canv, cont, length, linecol) {

    canv.clearRect(0, 0, cont.width, cont.height);
    canv.beginPath();
    canv.lineWidth = "1";
    canv.strokeStyle = linecol; //color
    canv.rect(5, 5, length, length);
    canv.stroke();
  }

  function getcbrt(volume) {
    return Math.floor(Math.cbrt(volume));
  }n 
  $('.reference').click(function () {
    let id = $(this).attr('id');
    let countyselect = $('input[name="contryselection"]:checked').attr('id');
    alert(id + " " + countyselect);
    $('#text_referencetitle').text(eval(countyselect)["references"][id]["name"]);
    //image einblenden
    //titel anpassen
    //Text anpassen
  });

  $('input[type=radio][name="contryselection"]').change(function() {

   let countyselect = $('input[name="contryselection"]:checked').attr('id');
    //Update Buttons
    $('div[class="referenceselector"]').children('button').each(function () {
      $("#"+this.id).text(eval(countyselect)["references"][this.id]["name"]);
  });
  
  //Draw Rectangle 
  drawrect(tctx, tc, getcbrt(eval(countyselect).foodwastequantity), "black");

  //Country Text Update

  });


//Migration auf 3d Model
  function drawCube(x, y, wx, wy, h) {
    tctx.beginPath();
    tctx.moveTo(x, y);
    tctx.lineTo(x - wx, y - wx * 0.5);
    tctx.lineTo(x - wx, y - h - wx * 0.5);
    tctx.lineTo(x, y - h * 1);
    tctx.closePath();
    tctx.stroke();
    tctx.fill();

    tctx.beginPath();
    tctx.moveTo(x, y);
    tctx.lineTo(x + wy, y - wy * 0.5);
    tctx.lineTo(x + wy, y - h - wy * 0.5);
    tctx.lineTo(x, y - h * 1);
    tctx.closePath();
    tctx.stroke();
    tctx.fill();

    tctx.beginPath();
    tctx.moveTo(x, y - h);
    tctx.lineTo(x - wx, y - h - wx * 0.5);
    tctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    tctx.lineTo(x + wy, y - h - wy * 0.5);
    tctx.closePath();
    tctx.stroke();
    tctx.fill();
  }

});