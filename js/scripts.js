

// dichiarazione variabili


// prezzo al chilometro
const pricePerKm = 0.21;
console.log('pricePerKm', pricePerKm, '€');


let prezzoFinale;
let sconto;
let travelDistance;

const travelDistanceInNumbers = parseInt(travelDistance);

//variabile bottone
const bottone = document.getElementById('submit-button');

bottone.addEventListener('click',

    function (event) {
        const passengerAge = document.getElementById('age').value;
        const passengerAgeInNumbers = parseInt(passengerAge);
        console.log('Età', passengerAgeInNumbers);

        const travelDistance = document.getElementById('travel-distance').value;
        const travelDistanceInNumbers = parseInt(travelDistance);
        console.log('KM', travelDistanceInNumbers);

        event.preventDefault();
        console.log('event', event, typeof event)

        //prezzo base
        let prezzoBase = travelDistanceInNumbers * pricePerKm;
        console.log('prezzo base', prezzoBase, '€');

        // ---modificare prima variabili con parseInt---
        if (isNaN(passengerAgeInNumbers) || isNaN(travelDistanceInNumbers)) {
            alert('mannaggia a te');
        }

        else {
            if (passengerAgeInNumbers < 18) {
                sconto = ((prezzoBase / 100) * 20);
                console.log('sconto', '20%', sconto);
                prezzoFinale = prezzoBase - sconto;
            }
            else if (passengerAgeInNumbers >= 65) {
                sconto = ((prezzoBase / 100) * 40);
                console.log('sconto', '40%', sconto);
                prezzoFinale = prezzoBase - sconto;
            }

            else {
                prezzoFinale = prezzoBase;
                console.log('Prezzo intero', prezzoFinale);
            }

            document.getElementById('prezzo-biglietto').innerHTML = '€' + prezzoFinale.toFixed(2);

        }
    }
)









