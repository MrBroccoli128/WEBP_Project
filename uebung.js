function flaeche(a,b) {
    return a * b
}

function euroinCHF(euro) {
    let wechselkurs = 1.08;
    return euro * wechselkurs;
}

function kapital(anfangbetrag, zinssatz, jahre) {
    return anfangbetrag * Math.pow(1+zinssatz / 100,jahre)

}