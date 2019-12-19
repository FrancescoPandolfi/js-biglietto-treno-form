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
    var prezzoTotaleBiglietto = kmDaPercorrere * price1Km;

    if (fasciaEtaPasseggero == "Minorenne") {
      prezzoTotaleBiglietto -= prezzoTotaleBiglietto * 0.2;
    } else if (fasciaEtaPasseggero == "Over 65"){
      prezzoTotaleBiglietto -= prezzoTotaleBiglietto * 0.4;
    }

    var codiceCp = Math.floor(Math.Random()) * 10000 + 90001;
    var nCarrozza = Math.floor(Math.Random()) * 9 + 1;

    console.log(nomePasseggero);
    console.log(kmDaPercorrere);
    console.log(fasciaEtaPasseggero);
    console.log(codiceCp);
    console.log(nCarrozza);
    console.log(prezzoTotaleBiglietto);




  }
);





// Condizione per determinare se ha diritto ad uno sconto


// document.getElementById('numofkm').innerHTML = numKm;
// document.getElementById('agepass').innerHTML = passengerAge;
// document.getElementById('price').innerHTML = totPrice;
