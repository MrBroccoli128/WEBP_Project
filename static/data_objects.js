//Quelle der Daten zu Food Waste: Statista
var schweiz = {
    foodwastequantity: 2800000,
    foodwastequantity_in_T: function() {
        return ((this.foodwastequantity)/1000000);
    },
    countryname: "der Schweiz",
    countrytext: function() {
        return "Die Schweiz produziert pro Jahr rund " + (this.foodwastequantity_in_T) + " Millionen Tonnen Foodwaste.";
    },
    references: {
        reference1: {
            name: "Prime Tower",
            volumen: 228000,
            image_link: "./images/Prime_Tower.png",
        },
        reference2: {
            name: "Roche Tower",
            volumen: 324000,
            image_link: "./images/roche_tower.jpg"
        },
        reference3: {
            name: "Cresta See",
            volumen: 300000,
            image_link: "./images/cresta_see.jpg"
        }
    }
};
var deutschland = {
    foodwastequantity: 12708000,
    countryname: "Deutschland",
    countrytext: function () {
            return "me no care";
    },
    references: {
        reference1: {
            name: "Kölner Dom",
            volumen: 407000, // https://www.stadtgeschichten-stadtfuehrungen.koeln/index.php/tipps-fuer-ihren-koeln-trip/koeln-wissen/342-koelner-dom-gigant-aus-stein#:~:text=Die%20Gesamtl%C3%A4nge%20betr%C3%A4gt%20au%C3%9Fen%20145,200.000%20m%C2%B3%20(407.000%20m%C2%B3).
            image_link: "./images/koelner_dom.jpg"
        },
        reference2: {
            name: "Chiem See",
            volumen: 2047000,
            image_link: ""
        },
        reference3: {
            name: "DE Ref 3",
            volumen: 300000,
            image_link: ""
        }
    }
};
var italien = {
    foodwastequantity: 8772000,
    countryname: "Italien",
    countrytext: function () {
        return "me o ned care";
    },
    references: {
        reference1: {
            name: "Peters Dom",
            volumen: 1200000,
            image_link: "./images/st_peters_dom.jpg"
        },
        reference2: {
            name: "Italien Ref 2",
            volumen: 324000,
            image_link: ""
        },
        reference3: {
            name: "Italien Ref 3",
            volumen: 300000,
            image_link: ""
        }
    }
};