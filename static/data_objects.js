//Quelle der Daten zu Food Waste: Statista
var schweiz = {
    foodwastequantity: 2800000,
    countryname: "der Schweiz",
    references: {
        reference1: {
            name: "Prime Tower",
            volumen: 228000,
            image_link: "./images/Prime_Tower.png",
            text: "Prime Tower ist ein Hochhaus in Zürich. Das 126 Meter hohe Bauwerk mit 36 Stockwerken hat ein Volumen von 228.000m³."
        },
        reference2: {
            name: "Roche Tower",
            volumen: 324000,
            image_link: "./images/roche_tower.png",
            text: "Der Roche Tower in Basel ist mit 178m das höchste Gebäude der Schweiz und verfügt über ein Volumen von 324.000m³."
        },
        reference3: {
            name: "Cresta See",
            volumen: 300000,
            image_link: "./images/cresta_see.png",
            text: "Der Crestasee liegt zwischen Flims und Trin im schweizerischen Kanton Graubünden auf 844 m Höhe. Der See ist 280m lang und hat eine maximal Tiefe von 14m. Das das Wasservolumen beträgt 300.000m³."
        }
    }
};

var deutschland = {
    foodwastequantity: 12708000,
    countryname: "Deutschland",
    references: {
        reference1: {
            name: "Kölner Dom",
            volumen: 407000, // https://www.stadtgeschichten-stadtfuehrungen.koeln/index.php/tipps-fuer-ihren-koeln-trip/koeln-wissen/342-koelner-dom-gigant-aus-stein#:~:text=Die%20Gesamtl%C3%A4nge%20betr%C3%A4gt%20au%C3%9Fen%20145,200.000%20m%C2%B3%20(407.000%20m%C2%B3).
            image_link: "./images/koelner_dom.png",
            text: "Die Gesamtlänge beträgt außen 145 m, (Kölner Dom 144,58 m). Die Höhe des Mittelschiffes beträgt 42,30 m (43,35 m). Die Fläche auf der die Kathedrale ruht, hat die Ausmaße von 7.700 m² (7.914 m²), das Volumen ohne Strebewerk beträgt 200.000 m³ (407.000 m³)."
        },
        reference2: {
            name: "Alianz Arena",
            volumen: 2928300,
            image_link: "./images/alianzarena.png",
            text: "Das Volumen der Allianz-Arena schlägt Daumen mal Pi mit 2.928.300m³ (258m x 227m x 50m) zu Buche"
        },
        reference3: {
            name: "DE Ref 3",
            volumen: 300000,
            image_link: "",
            text: ""
        }
    }
};

var italien = {
    foodwastequantity: 8772000,
    countryname: "Italien",
    references: {
        reference1: {
            name: "Peters Dom",
            volumen: 1200000,
            image_link: "./images/st_peters_dom.png",
            text: "Die ‘Basilica di San Pietro in Vaticano’ oder der Petersdom wurde zwischen 1506 und 1626 erbaut. Der Dom beeindruckt vor allem durch seine Größe (136 Meter hoch und 186 x 123 Meter breit)."
        },
        reference2: {
            name: "Kolosseum",
            volumen: 1105632,
            image_link: "./images/kolosseum.png",
            text: "Das Kolosseum ist ellipsenförmig gebaut. Seine Breite beträgt 156 Meter, die Länge 188 Meter, der Umfang 527 Meter, die Höhe 48 Meter. Auch der Boden der Arena war elliptisch mit einer Breite von 54 Metern und einer Länge von 86 Metern."
        },
        reference3: {
            name: "Italien Ref 3",
            volumen: 300000,
            image_link: "",
            text: ""
        }
    }
};

var sparpotential = {
    item1: { // <100 CHF
        min: 0,
        max: 100,
        title: "Taschengeld",
        desc: "Taschengeld für die Kinder für ein ganzes Jahr.",
        image_link: "./images/img_slider/taschengeld.png"
    },
    item2: { // 101 - 300 CHF
        min: 101,
        max: 300,
        title: "Grosseinkauf",
        desc: "Dieser Betrag reicht für einen Grosseinkauf in der Schweiz.",
        image_link: "./images/img_slider/einkaufswagen.png",
    },
    item3: { // 301 - 500 CHF
        min: 301,
        max: 500,
        title: "Playstation 5",
        desc: "Eine Playstation 5 wäre doch viel cooler",
        image_link: "./images/img_slider/ps5.jpg"
    },
    item4: { // 501 - 700 CHF
        min: 501,
        max: 700,
        title: "Grafikkarte",
        desc: "Für dieses Geld hätte ich mir lieber eine neue Grafikkarte für meinen PC gekauft.",
        image_link: "./images/img_slider/gk.jpg"
    },
    item5: { // 701 - 900 CHF
        min: 701,
        max: 900,
        title: "Netflix oder Spotify",
        desc: "Also ich hätte lieber für 5 Jahre mein Netflix oder Spotify bezahlt als das ganze Essen fortgeworfen....",
        image_link: "./images/img_slider/Netflix.png"
    },
    item6: { // > 901 CHF
        min: 901,
        max: 2000,
        title: "Ferien",
        desc: "Wären wir doch lieber in die Karibik gefolgen als unser gutes Essen wegzuwerfen.",
        image_link: "./images/img_slider/karibik.png"
    }
};