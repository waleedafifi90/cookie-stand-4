'use strict';

let workHours= ['6:00 am', '7am', '8am','9am','10am','11am','12am' ,'1pm', '2pm', '3pm', '4pm', '5pm','6pm','7pm'];

function City ( name, minOfCustomers,maxOfCustomers, averAge ) {
  this.name = name;
  this.minOfCustomers = minOfCustomers;
  this.maxOfCustomers = maxOfCustomers;
  this.averAge = averAge;
  this.noOfCookies =[];
  this.noOfCustomersHourly=[];
  this.toTal=0;
}
const tableElement=document.getElementById( 'table' );

City.prototype.getNN= function(){
  const tr1Element=document.createElement( 'tr' );
  tableElement.appendChild( tr1Element );
  for( let i = 0; i < workHours.length; i++ ) {
    const th1Element=document.createElement( 'th' );
    tr1Element.appendChild( th1Element );
    tr1Element.textContent = `${workHours[i]}`;
  }
};

City.prototype.getCookies= function() {
  for( let j=0; j<workHours.length; j++ ){
    let hourlyCustomers= randomNoOfCustomers( this.minOfCustomers, this.maxOfCustomers );
    let cookiesNo=Math.ceil( ( hourlyCustomers )*this.averAge );
    console.log( cookiesNo );
    this.noOfCookies.push( cookiesNo );
    this.toTal+=cookiesNo;
    this.noOfCustomersHourly.push( hourlyCustomers );
  }
};

City.prototype.render=function () {
  const parentElement = document.getElementById( 'Sales' );

  const articleElement = document.createElement( 'article' );
  parentElement.appendChild( articleElement );

  const h2Element = document.createElement( 'h2' );
  articleElement.appendChild( h2Element );


  const ulElement = document.createElement( 'ul' );
  articleElement.appendChild( ulElement );

  const tableElement=document.createElement( 'table' );
  articleElement.appendChild( tableElement );

  // const tr1Element=document.createElement( 'tr' );
  // tableElement.appendChild( tr1Element );







  // for( let i = 0; i < workHours.length; i++ ) {
  //   const tr1Element=document.createElement( 'tr' );
  //   tableElement.appendChild( tr1Element );
  //   textContent = `${workHours[i]}: ${this.noOfCookies[i]} cookies`;

  // }
  const li2Element = document.createElement( 'li' );
  ulElement.appendChild( li2Element );
  li2Element.textContent = `Total: ${this.toTal} cookies`;






};


const seattle = new City( 'Seattle', 23, 65, 6.3 );
seattle.getCookies();
seattle.getNN();
seattle.render();
console.log( seattle );


const Tokyo = new City( 'Tokyo', 3, 24, 1.2 );
Tokyo.getCookies();
Tokyo.render();

const Dubai = new City( 'Dubai', 11, 38, 3.7 );
Dubai.getCookies();
Dubai.render();
// Create Element

const Paris = new City( 'Paris', 20, 38, 2.3 );
Paris.getCookies();
Paris.render();

const Lima = new City( 'Lima', 2, 16, 4.6 );
Lima.getCookies();
Lima.render();

// const seattle = {
//   noOfCookies: [],
//   noOfCustomersHourly:[],
//   minOfCustomers: 23,
//   maxOfCustomers: 65,
//   averAge: 6.3,
//   toTal:0,
//   getCookies: function() {
//     for( let j=0; j<workHours.length; j++ ){
//       let hourlyCustomers= randomNoOfCustomers( this.minOfCustomers, this.maxOfCustomers );
//       let cookiesNo=Math.ceil( ( hourlyCustomers )*this.averAge );
//       console.log( cookiesNo );
//       this.noOfCookies.push( cookiesNo );
//       this.toTal+=cookiesNo;
//       this.noOfCustomersHourly.push( hourlyCustomers );

//     }
//   },


//   render: function () {
//     const parentElement = document.getElementById( 'Sales' );

//     const articleElement = document.createElement( 'article' );
//     parentElement.appendChild( articleElement );

//     const h2Element = document.createElement( 'h2' );
//     articleElement.appendChild( h2Element );
//     h2Element.textContent='Seattle';

//     const ulElement = document.createElement( 'ul' );
//     articleElement.appendChild( ulElement );

//     for( let i = 0; i < workHours.length; i++ ) {
//       const liElement = document.createElement( 'li' );
//       ulElement.appendChild( liElement );
//       liElement.textContent = `${workHours[i]}: ${this.noOfCookies[i]} cookies`;

//     }
//     const li2Element = document.createElement( 'li' );
//     ulElement.appendChild( li2Element );
//     li2Element.textContent = `Total: ${this.toTal} cookies`;

//   }
// };

function randomNoOfCustomers( min, max ){
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min - 1 ) + min );
}
