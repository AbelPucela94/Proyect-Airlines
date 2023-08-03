let userName = '';  // Variable USUARIO : vacío, "a elegir"
let totalCost = 0;  // Variable COSTE MEDIO : 0 -empezamos desde cero-
let allLayoverFlights = 0 // Variable vuelos con ESCALA : 0 -empezamos desde cero-
let allLastFlights = 0    // Variable ÚLTIMOS VUELOS : 0 -empieza desde cero-


const flights = [  // ARRAY PRINCIPAL
    { id: 00, to: "New York", from: "Barcelona", cost: 700, layover: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, layover: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, layover: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, layover: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, layover: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, layover: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, layover: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, layover: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, layover: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, layover: false },
  ];


// 1 - INGRESO DE USUARIO + ALERT DE BIENVENIDA (OKEY):

const askUserName = () => {
    userName = prompt('¡Bienvenid@ CODER! Ingresa aquí tu nombre de usuario para visualizar los vuelos: ');
    if (userName === '') {
        alert('ERROR 404: Nombre de usuario no válido. Vuelva a intentarlo');
        return askUserName();
    } else {
        alert(`¡Bienvenido ${userName.toUpperCase()}! ✈️ Welcome to CODER Airlines ✈️`);
    };
};

askUserName();


// 2 - ALERT + IMPRESIÓN DE VUELOS DISPONIBLES (OKEY):

const showAllFlights = () => {
    alert(`Estos son todos los vuelos que tenemos hoy disponibles en CODER Airlines, ${userName.toUpperCase()}:`);
    console.log('                  ✈️   ALL FLIGHTS   ✈️                       ');
    console.log('---------------------------------------------------------------');
    for (i = 0; i < flights.length; i++) {
        if (flights[i].layover === true) { // Es decir, imprime los vuelos que hacen ESCALA.
            console.log(`El vuelo CON ESCALA con ID: ${flights[i].id}, de ORIGEN en ${flights[i].from} y DESTINO en ${flights[i].to}, tiene un COSTE de ${flights[i].cost}€`);
        } else { // Aquí estamos imprimiendo los que NO HACEN ESCALA.
            console.log(`El vuelo DIRECTO con ID: ${flights[i].id}, de ORIGEN en ${flights[i].from} y DESTINO en ${flights[i].to}, tiene un COSTE de ${flights[i].cost}€`);
        };
    };
    console.log('---------------------------------------------------------------');
};

showAllFlights();


// 3 - ALERT + IMPRESIÓN MEDIA DE LOS COSTES DE LOS VUELOS (OKEY):

const averageCost = () => {
    for (i = 0; i < flights.length; i++) {
        totalCost = totalCost + flights[i].cost;
    };
    let totalAverageCost = totalCost / flights.length;
    alert(`A modo informativo, comunicar que el precio medio de los vuelos disponibles en el día de hoy es: ${totalAverageCost}€`);
};


averageCost();


// 4 - ALERT + IMPRESIÓN DE VUELOS CON ESCALA (OKEY):

const layoverFlights = () => {
    for (i = 0; i < flights.length; i++) {
        if (flights[i].layover === true) {
            allLayoverFlights = allLayoverFlights + 1;
        };
    };
    alert(`A continuación, le mostraremos en pantalla los ${allLayoverFlights} vuelos del día que realizan ESCALAS: `);
    console.log('                  🏃   WITH LAYOVER   🏃                      ');
    for (i = 0; i < flights.length; i++) {
        if (flights[i].layover === true) {
            console.log(`ID: ${flights[i].id}, de ORIGEN en ${flights[i].from} y DESTINO en ${flights[i].to}, con un COSTE de ${flights[i].cost}€`);
        };
    console.log('---------------------------------------------------------------');
    };
};


layoverFlights();


// 5 - ALERT + IMPRESIÓN DE LOS ÚLTIMOS VUELOS DEL DÍA (OKEY):

const lastFlights = () => {
    for (i = 0; i < flights.length; i++) {
        if (flights[i].id > 4) {
            allLastFlights = allLastFlights + 1;
        };
    };
    alert(`Por último, le indicamos cuáles son los últimos ${allLastFlights} vuelos del día y sus destinos: `);
    console.log('                  ✈️   LAST FLIGHTS   ✈️                      ');
    for (i = 0; i < flights.length; i++) {
        if (flights[i].id > 4) {
            console.log(`El vuelo con ID: ${flights[i].id} tiene DESTINO en ${flights[i].to}`);
        };
    };
    console.log('---------------------------------------------------------------');
};


lastFlights(); 