$(function () {


  /* Canvas definieren */
  c = document.getElementById("grafic");
  ctx = c.getContext("2d");

  r = document.getElementById("grafic_ref");
  rtx = r.getContext("2d");

  function getcbrt(volume) {
    return Math.floor(Math.cbrt(volume));
  }

  function calcrelation(country,reference) {
    return (country/reference).toFixed(1);
  }

  // SOURCE: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  function numberWithCommas(x) { 
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
    $('.title_reference_cube').text(eval(countyselect)["references"][this.id]["name"]);
    //Text anpassen
    $('#text_reference_cube').text(eval(countyselect)["references"][this.id]["text"]);
    // Set relation sentence
    $('#text_reference_rel').text(" Der Food Waste von " + eval(countyselect).countryname + " passt somit " + calcrelation(eval(countyselect).foodwastequantity,eval(countyselect)["references"][this.id]["volumen"]) + " in den/die " + eval(countyselect)["references"][this.id]["name"] + ".");

  });

  $('input[type=radio][name="contryselection"]').change(function () {

    let countyselect = $('input[name="contryselection"]:checked').attr('id');
    let clength = getcbrt(eval(countyselect).foodwastequantity);
    //Update Buttons
    $('div[class="referenceselector form-inline justify-content-center"]').children('button').each(function () {
      $("#" + this.id).text(eval(countyselect)["references"][this.id]["name"]);
    });

    //DRAW CUBE
    drawCube(ctx, c, 250, 480, clength, clength, clength, clength, clength);
    
    //Country Name Update 
    $('.text_country').text(eval(countyselect).countryname);
    $('.text_fw_in_T').text(numberWithCommas(eval(countyselect).foodwastequantity));
    $('.text_q_length').text(clength);
   
    

    //klick auf reference1 damit es initialisiert wird
    $('.reference').click();
  });




  //Source: https://stackoverflow.com/questions/44829028/html5-canvas-correctly-draw-a-cube
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




// ---------------------------------------------------------------------

function inRange (num, start, end) {
	return num >= start && num <= end;
}

function getmin (id) {
  return sparpotential["item" + id]["min"];
}

function getmax (id) {
  return sparpotential["item" + id]["max"];
}

$('input[type=range]').change(function () {
  
  let kg_to_chf = 620/330;
  let fw_in_chf = Math.floor(this.value * kg_to_chf);
  let i = 1;

  // Number Updater
  $('#slider_val').text((this.value) + " KG");
  $('#fw_val_in_chf').text((fw_in_chf) + " CHF");

  while (true) {
    if (inRange(fw_in_chf, getmin(i), getmax(i)) == true) {
      //alert(i); 
      // Update Title and Texts
      $('#slider_item_title').text(sparpotential["item" + i]["title"]);
      $('#slider_item_text').text(sparpotential["item" + i]["desc"]);
      // Insert Image
      $('#slider_item_img').attr('src', sparpotential["item" + i]["image_link"]).height(250).width(400);

      //Stop loop
      break;
    } else { // not in this range
      i++;
    }
  }

});

// Initialisierung
$('input[type=range]').change();
$('input[type=radio][name="contryselection"]').change();
});