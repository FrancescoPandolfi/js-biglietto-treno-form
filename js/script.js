var btn_Genera = document.getElementById('genera');
var btn_Annulla = document.getElementById('annulla');

btn_Genera.addEventListener('click',
  function() {

    // Raccolgo gli elementi nelle variabili
    var inputNome = document.getElementById('nome_pass');
    var inputKm = document.getElementById('km_da_percorrere');
    var selectEta = document.getElementById('eta_pass');

    // Raccolgo le informazioni dagli input nelle variabili
    var nomePasseggero = inputNome.value;
    var kmDaPercorrere = parseInt(inputKm.value);
    var fasciaEtaPasseggero = selectEta.value;

    var price1Km = 0.21;
    var offerta = "Tariffa Standard";
    var nCarrozza = Math.floor(Math.random() * 9 + 1);
    var codiceCp = Math.floor(Math.random() * 10000 + 90001);
    var prezzoTotaleBiglietto = kmDaPercorrere * price1Km;

    // Definisco se Minorenne o Over 65
    if (fasciaEtaPasseggero == "Minorenne") {
      prezzoTotaleBiglietto -= prezzoTotaleBiglietto * 0.2;
      offerta = "Sconto Minorenne";

    } else if (fasciaEtaPasseggero == "Over 65"){
      prezzoTotaleBiglietto -= prezzoTotaleBiglietto * 0.4;
      offerta = "Sconto Silver";
    }

    document.getElementById('nome_passeggero').innerHTML = nomePasseggero;
    document.getElementById('offerta').innerHTML = offerta;
    document.getElementById('carrozza').innerHTML = nCarrozza;
    document.getElementById('codice_cp').innerHTML = codiceCp;
    document.getElementById('costo_biglietto').innerHTML = prezzoTotaleBiglietto.toFixed(2) + " €";



    // console.log(nomePasseggero);
    // console.log(kmDaPercorrere);
    // console.log(fasciaEtaPasseggero);
    // console.log(codiceCp);
    // console.log(nCarrozza);
    // console.log(prezzoTotaleBiglietto);




  }
);





// Condizione per determinare se ha diritto ad uno sconto


// document.getElementById('numofkm').innerHTML = numKm;
// document.getElementById('agepass').innerHTML = passengerAge;
// document.getElementById('price').innerHTML = totPrice;
