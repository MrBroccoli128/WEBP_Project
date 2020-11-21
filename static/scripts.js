$(function () {

  /* Volumen in m3 */
  const volumenPRIMETOWER = 228000;
  const volumenCRESTASEE = 300000;
  const volumenROCHETOWER = 324000;
  const volumeFOODWASTE = 2800000;

  let seitenlaenge;
  let f_title;
  let f_text;

  /* CONTENT DEFINITIONS */
  let title_PRIMETOWER = "Prime Tower";
  let text_PRIMETOWER = "Der Prime Tower in Zürich war lange das höchste Gebäude in der Schweiz. Das Gesamtvolumen beträgt 228000 m3. Umgerechnet auf einen Würfel hat dieser eine Seitenlänge von !LAENGE!m.";
  let image_PRIMETOWER = "";

  let title_ROCHETOWER = "Roche Tower";
  let text_ROCHETOWER = "Der Roche in Basel hat ein Gesamtvolumen von 324'000 m3. Umgrechnet auf einen Wüfel hat dieser eine Seitenlänge von !LAENGE!m.";
  let image_ROCHETOWER = "";

  let title_CRESTASEE = "Cresta See";
  let text_CRESTASEE = "Der Crestasee in Graubünden hat eine Fassungsvermögen von 300'000 m3. Umgrechnet auf einen Wüfel hat dieser eine Seitenlänge von !LAENGE!m.";
  let image_CRESTASEE = "";

  let title_FOODWASTE = "Foodwaste Menge Schweiz";
  let text_FOODWASTE = "Wenn !MENGE! Tonnen Foodwaste auf einen Würfel umgerechnet werden, entspricht dies einem Würfel mit den Seitenlängen von !LAENGE!m.";
  let image_FOODWASTE = "";

  /* Canvas definieren */
  tc = document.getElementById("grafic");
  tctx = tc.getContext("2d");

  /* Canvas für Referenz */
  r = document.getElementById("referencebuilding");
  rtx = r.getContext("2d");

  // Set default Foodwaste value
  $("#foodwasteschweiz").val(volumeFOODWASTE);

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

  function textupdater(f_title, f_text, title, text) {
    $(f_title).text(title);
    $(f_text).text(text);
  }


  $('.reference').click(function () {
    let id = $(this).attr('id');
    f_title = "#referencetitle";
    f_text = "#referencetext";

    switch (id) {
      case "primetower":
        drawrect(rtx, r, getcbrt(volumenPRIMETOWER), "blue");
        textupdater(f_title, f_text, title_PRIMETOWER, text_PRIMETOWER.replace("!LAENGE!", getcbrt(volumenPRIMETOWER)));
        break;
      case "rochetower":
        drawrect(rtx, r, getcbrt(volumenROCHETOWER), "blue");
        textupdater(f_title, f_text, title_ROCHETOWER, text_ROCHETOWER.replace("!LAENGE!", getcbrt(volumenROCHETOWER)));
        break;
      case "see":
        drawrect(rtx, r, getcbrt(volumenCRESTASEE), "blue");
        textupdater(f_title, f_text, title_CRESTASEE, text_CRESTASEE.replace("!LAENGE!", getcbrt(volumenCRESTASEE)));
        break;
    }
  });

  $('#recalc').click(function () {

    f_title = "#foodwastetitle"
    f_text = "#foodwastetext"

    seitenlaenge = getcbrt(($("#foodwasteschweiz").val()));
    drawrect(tctx, tc, seitenlaenge, "black");
    textupdater(f_title, f_text, title_FOODWASTE, text_FOODWASTE.replace("!LAENGE!", seitenlaenge).replace("!MENGE!", $("#foodwasteschweiz").val()));

  });

  //ON LOAD
  // Draw inital trash rect 
  $('#recalc').click();


});