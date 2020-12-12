$(function () {


  /* Canvas definieren 
  c = Landesvolumen Würfel
  r = Referenzgebäude Würfel
  */
  c = document.getElementById("grafic");
  ctx = c.getContext("2d");

  r = document.getElementById("grafic_ref");
  rtx = r.getContext("2d");


  /* FUNCTION getcbrt
    Berechnung der Würfelseitelänge
    volumen:  Volumen in Kubikmeter m3
    Berechung der Seitenlänge durch das Ziehen der dritten Wurzel.
  */
  function getcbrt(volume) {
    return Math.floor(Math.cbrt(volume));
  }

  /* FUNTION calcrelation
    Berechung des Grössenverhältnis zwischen Landes- und Referenzvolumen
    Gerundet auf eine Kommastelle
    country:   Food Wastevolumen des ausgewählten Landes
    reference: Food Wastevolumen des Referenzgebäudes
  */
  function calcrelation(country, reference) {
    return (country / reference).toFixed(1);
  }

  /* FUNCTION numberWithCommas
  Vereinfachung der Lesbarkeit von mehrstelligen Zahlen.
  z.B 20000000000 -> 20,000,000,000
  x:  Zahl als String, welche die Kommasetzung erfordert
  SOURCE: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  */
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  /*
    CLICK TRIGGER
    Anpassung der Seite wenn ein anderes Referenzgebäude ausgewählt.
  */
  $('.reference').click(function () {
    // Die ID enthält den ausgewählten Button, um das Referenzgebäude einzublenden
    let id = $(this).attr('id');

    // Diese Variable enthält den Namen der zum Zeitpunkt des Buttonclicks ausgewählten Landes.
    let countyselect = $('input[name="contryselection"]:checked').attr('id');

    //Zeichenen des Referenzgebäude Würfels
    drawCube(rtx, r, 150, 480, getcbrt(eval(countyselect)["references"][id]["volumen"]));

    // Image einblenden
    $('#img_reference').attr("src", eval(countyselect)["references"][id]["image_link"]).height(300).width(300);
    // Titel anpassen
    $('.title_reference_cube').text(eval(countyselect)["references"][this.id]["name"]);
    // Text anpassen
    $('#text_reference_cube').text(eval(countyselect)["references"][this.id]["text"]);
    // Set relation sentence
    $('#text_reference_rel').text("Der Food Waste von " + eval(countyselect).countryname + " passt somit " + calcrelation(eval(countyselect).foodwastequantity, eval(countyselect)["references"][this.id]["volumen"]) + " in den/die " + eval(countyselect)["references"][this.id]["name"] + ".");

  });


  /* CHANGE TRIGGER
  Anpassung der Seite wenn ein anderes Land ausgesucht wird.
*/
  $('input[type=radio][name="contryselection"]').change(function () {

    // ID enthält den Namen des selectierten Landes, diese ID entspricht dem Namen im Dataobject
    let countyselect = $('input[name="contryselection"]:checked').attr('id');

    // Anpassung der Buttonstrings für die Verlinkungen zu den Referenzgebäuden
    $('div[class="referenceselector form-inline justify-content-center"]').children('button').each(function () {
      $("#" + this.id).text(eval(countyselect)["references"][this.id]["name"]);
    });

    // Landeswürfelzeichnen
    drawCube(ctx, c, 250, 480, getcbrt(eval(countyselect).foodwastequantity));

    // Country Name Update in diversen Texten
    $('.text_country').text(eval(countyselect).countryname);

    // Setzen des Food Waste Volumenwerts im Text. Vorab noch formatiert.
    $('.text_fw_in_T').text(numberWithCommas(eval(countyselect).foodwastequantity));

    // Angabe der Würfelseitenlänge
    $('.text_q_length').text(getcbrt(eval(countyselect).foodwastequantity));

    // Klick auf den ersten Button damit das erste Referenzgebäude initialisiert wird
    $('#reference1').click();
  });




  /* FUNCTION drawCube
  Zeichnen eines Würfels in ein Canvas
  canvas:   DOM Element
  context:  Canvas Context
  x:  Startpunkt x-Wert
  y:  Startpunkt y-Wert
  length: Seitenlänge für den Würfel

  Source: https://stackoverflow.com/questions/44829028/html5-canvas-correctly-draw-a-cube
  */
  function drawCube(canvas, context, x, y, length) {

    // Da diese Funktion nur Würfel zeichnet müssen alle Seiten gleich lang.
    let wx = wy = h = length;

    //Löschen des bestehenden Inhalts
    canvas.clearRect(0, 0, context.width, context.height);

    // LINE MODE
    canvas.lineJoin = "round";

    // Linke Seite
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

    // Rechte Seite
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

    // Vorderseite
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




  // ------------------------------ ZWEITE FUNKTION ---------------------------------------



  /* FUNCTION InRange
  Überprüfen ob Wert innerhalb eines Bereichs ist
  num:  Wert, welcher überprüft wird
  start: Start Range
  end:   End Range

  return -> bool
  */
  function inRange(num, start, end) {
    return num >= start && num <= end;
  }

  /* FUNCTION getmin
  Zugriff auf Minimumwert des Items im data_objects.js aus dem Object sparpotential
  id: ITEM ID
  */
  function getmin(id) {
    return sparpotential["item" + id]["min"];
  }

  /* FUNCTION getmax
  Zugriff auf Maxwert des Items im data_objects.js aus dem Object sparpotential
  id: ITEM ID
  */
  function getmax(id) {
    return sparpotential["item" + id]["max"];
  }


  /* CHANGE TRIGGER
  Bewegung des Sliders 
*/
  $('input[type=range]').change(function () {

    // Initalies CHF to KG Verhältnis 
    let kg_to_chf = 620 / 330;

    // Berechnung des Werts der ausgewählten Menge Food Waste
    let fw_in_chf = Math.floor(this.value * kg_to_chf);

    //Counter
    let i = 1;

    // Number Update
    $('#slider_val').text((this.value) + " KG");
    $('#fw_val_in_chf').text((fw_in_chf) + " CHF");

    //Loopen bis der richtige Range für den ausgewählten Wert gefunden wurde
    while (true) {

      if (inRange(fw_in_chf, getmin(i), getmax(i)) == true) {
        // Update Title and Texts mit Daten aus dem sparpotential Objekt
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