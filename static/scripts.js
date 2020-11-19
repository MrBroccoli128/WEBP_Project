$(function () {

  /* Volumen in m3 */
  const volumenPRIMETOWER = 228000;
  const volumenSEE = 200000;
  const volumenROCHETOWER = 324000;

  /* 2.8 Millionen Tonnen an Food Waste in der Schweiz pro Jahr in KG */
  let totalWasteKG = 2800000000;

  /* Umrechnung pro Liter = 1kg Abfall */
  let volumentrash = totalWasteKG / 1000; /* m3 */

  /* Canvas definieren */
  c = document.getElementById("grafic");
  ctx = c.getContext("2d");

  /* Canvas für Referenz */
  r = document.getElementById("referencebuilding");
  rtx = r.getContext("2d");


  // Initales Trash rect zeichnen, mit den Buttons wird 
  trashrect();


  /*FUNCTIONS */
  function trashrect() {
    ctx.clearRect(0, 0, c.width, c.height);
    let seitenlaenge = Math.floor(Math.cbrt(volumentrash));

    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.rect(5, 5, seitenlaenge, seitenlaenge);
    ctx.stroke();


  }


  $('.btn').click(function () {
    let id = $(this).attr('id');
    let seitenlaenge
    switch (id) {
      case "primetower":
        seitenlaenge = Math.floor(Math.cbrt(volumenPRIMETOWER));
        break;
      case "rochetower":
        seitenlaenge = Math.floor(Math.cbrt(volumenROCHETOWER));
        break;
        case "see":
          seitenlaenge = Math.floor(Math.cbrt(volumenSEE));
          break;
    }
    rtx.clearRect(0, 0, r.width, r.height);
    rtx.beginPath();
    rtx.lineWidth = "1";
    rtx.strokeStyle = "blue";
    rtx.rect(5, 5, seitenlaenge, seitenlaenge);
    rtx.stroke();

  });


});