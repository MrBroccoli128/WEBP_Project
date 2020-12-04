$(function () {


  /* Canvas definieren */
  c = document.getElementById("grafic");
  ctx = c.getContext("2d");

  r = document.getElementById("grafic_ref");
  rtx = r.getContext("2d");




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
  }

  $('.reference').click(function () {
    let id = $(this).attr('id');
    let countyselect = $('input[name="contryselection"]:checked').attr('id');
    $('#text_referencetitle').text(eval(countyselect)["references"][id]["name"]);
    

    //draw cube
    drawCube(rtx, r, 150, 480, getcbrt(eval(countyselect)["references"][id]["volumen"]), getcbrt(eval(countyselect)["references"][id]["volumen"]), getcbrt(eval(countyselect)["references"][id]["volumen"]), getcbrt(eval(countyselect)["references"][id]["volumen"]), getcbrt(eval(countyselect)["references"][id]["volumen"]));

    //image einblenden
    $('#img_reference').attr("src", eval(countyselect)["references"][id]["image_link"]).height(300).width(300);
    //titel anpassen
    $('#title_reference_cube').text("Volumen des " + eval(countyselect)["references"][this.id]["name"]);
    //Text anpassen
    $('#text_foodwastebeschreibung').text(eval(countyselect).countrytext);

  });

  $('input[type=radio][name="contryselection"]').change(function () {

    let countyselect = $('input[name="contryselection"]:checked').attr('id');
    //Update Buttons
    $('div[class="referenceselector"]').children('button').each(function () {
      $("#" + this.id).text(eval(countyselect)["references"][this.id]["name"]);
    });

    //DRAW CUBE
    drawCube(ctx, c, 250, 480, getcbrt(eval(countyselect).foodwastequantity), getcbrt(eval(countyselect).foodwastequantity), getcbrt(eval(countyselect).foodwastequantity), getcbrt(eval(countyselect).foodwastequantity), getcbrt(eval(countyselect).foodwastequantity));
    
    //Country Name Update 
    $('.text_country').text(eval(countyselect).countryname);

   
    

    //klick auf reference1 damit es initialisiert wird
    $('.reference').click();
  });




  //Migration auf 3d Model
  function drawCube(canvas, context, x, y, wx, wy, h) {

    canvas.clearRect(0, 0, context.width, context.height);

    // LINE MODE
    canvas.lineJoin = "round";
    
    // left face
    canvas.beginPath();
    canvas.moveTo(x, y);
    canvas.lineTo(x - wx, y - wx * 0.5);
    canvas.lineTo(x - wx, y - h - wx * 0.5);
    canvas.lineTo(x, y - h * 1);
    canvas.closePath();
    canvas.fillStyle = "#838357"
    canvas.strokeStyle = "#7a7a51";
    canvas.stroke();
    canvas.fill();

    // right face
    canvas.beginPath();
    canvas.moveTo(x, y);
    canvas.lineTo(x + wy, y - wy * 0.5);
    canvas.lineTo(x + wy, y - h - wy * 0.5);
    canvas.lineTo(x, y - h * 1);
    canvas.closePath();
    canvas.fillStyle = "#6f6f49";
    canvas.strokeStyle = "#676744";
    canvas.stroke();
    canvas.fill();

    // center face
    canvas.beginPath();
    canvas.moveTo(x, y - h);
    canvas.lineTo(x - wx, y - h - wx * 0.5);
    canvas.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    canvas.lineTo(x + wy, y - h - wy * 0.5);
    canvas.closePath();
    canvas.fillStyle = "#989865";
    canvas.strokeStyle = "#8e8e5e";
    canvas.stroke();
    canvas.fill();
}



$('input[type=radio][name="contryselection"]').change();

// ---------------------------------------------------------------------

function inRange (num, start, end) {
	return num >= start && num <= end;
}

$('input[type=range]').change(function () {
  
  let fw_in_kg = this.value;
  let kg_to_chf = 620/330;
  let fw_in_chf = Math.floor(this.value * kg_to_chf);
  $('#slider_val').text((this.value) + " KG");

  $('#fw_val_in_chf').text((fw_in_chf) + " CHF");

  inRange(this.value, 400, 600)
  $('#slider_item').attr('src', './images/img_slider/ps5.jpg').height(250).width(400);

});
$('input[type=range]').change();

});