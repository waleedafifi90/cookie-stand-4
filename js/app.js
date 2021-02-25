'use strict';

let workHours= ['6am', '7am', '8am','9am','10am','11am','12am' ,'1pm', '2pm', '3pm', '4pm', '5pm','6pm','7pm'];

function City ( name, minOfCustomers,maxOfCustomers, averAge ) {
  this.name = name;
  this.minOfCustomers = minOfCustomers;
  this.maxOfCustomers = maxOfCustomers;
  this.averAge = averAge;
  this.noOfCookies =[];
  this.noOfCustomersHourly=[];
  this.noOfCustomersDaily=0;
  this.toTalHourly=0;
  City.allCity.push( this );
}
City.allCity = [];


City.prototype.getCookies= function() {
  for( let j=0; j<workHours.length; j++ ){
    let hourlyCustomers= randomNoOfCustomers( this.minOfCustomers, this.maxOfCustomers );
    let cookiesNo=Math.ceil( ( hourlyCustomers )*this.averAge );
    this.noOfCustomersDaily+=cookiesNo;
    this.noOfCookies.push( cookiesNo );
    this.noOfCustomersHourly.push( hourlyCustomers );
  }

};


City.prototype.render=function () {

  const tableElement = document.getElementById( 'myTable' );
  const tr2Element=document.createElement( 'tr' );
  tableElement.appendChild( tr2Element );
  const th4Element=document.createElement( 'th' );
  tr2Element.appendChild( th4Element );
  th4Element.textContent = `${this.name}`;
  for( let i = 0; i < workHours.length; i++ ) {
    const td1Element=document.createElement( 'td' );
    tr2Element.appendChild( td1Element );
    td1Element.textContent = `${this.noOfCookies[i]}`;
  }
  const td3Element=document.createElement( 'td' );
  tr2Element.appendChild( td3Element );
  td3Element.textContent = `${this.noOfCustomersDaily}`;
};

const header = function () {
  const parentElement = document.getElementById( 'Sales' );
  const tableElement=document.createElement( 'table' );
  tableElement.setAttribute( 'id','myTable' );
  parentElement.appendChild( tableElement );
  const tr1Element=document.createElement( 'tr' );
  tableElement.appendChild( tr1Element );
  const th1Element=document.createElement( 'th' );
  tr1Element.appendChild( th1Element );
  th1Element.textContent = 'City';
  for( let i = 0; i < workHours.length; i++ ) {
    const th2Element=document.createElement( 'th' );
    tr1Element.appendChild( th2Element );
    th2Element.textContent = `${workHours[i]}`;

  }
  const th16Element=document.createElement( 'th' );
  tr1Element.appendChild( th16Element );
  th16Element.textContent = 'Daily Location Total';


};
header();


const seattle = new City( 'Seattle', 23, 65, 6.3 );


seattle.getCookies();
seattle.render();

console.log( seattle );


const tokyo = new City( 'tokyo', 3, 24, 1.2 );
tokyo.getCookies();
tokyo.render();

const dubai = new City( 'Dubai', 11, 38, 3.7 );
dubai.getCookies();
dubai.render();


const Paris = new City( 'Paris', 20, 38, 2.3 );
Paris.getCookies();
Paris.render();

const Lima = new City( 'Lima', 2, 16, 4.6 );
Lima.getCookies();
Lima.render();

function randomNoOfCustomers( min, max ){
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min - 1 ) + min );
}



const footer = function () {
  const tableElement = document.getElementById( 'myTable' );
  const tr1Element=document.createElement( 'tr' );
  tableElement.appendChild( tr1Element );
  const th1Element=document.createElement( 'th' );
  tr1Element.appendChild( th1Element );
  th1Element.textContent = 'Totals';
  for( let i = 0; i < workHours.length; i++ ) {
    const td2Element=document.createElement( 'td' );
    tr1Element.appendChild( td2Element );
    let totalCookies = 0;
    for( let j = 0; j < City.allCity.length; j++ ){
      console.log( parseInt( City.allCity[j].noOfCookies[i] ) );
      totalCookies += parseInt( City.allCity[j].noOfCookies[i] );
    }
    td2Element.textContent = totalCookies;
    // td2Element.textContent = `${seattle.noOfCookies[i]+tokyo.noOfCookies[i]+dubai.noOfCookies[i]+Paris.noOfCookies[i]+Lima.noOfCookies[i]}`;
  }
  const td3Element=document.createElement( 'td' );
  tr1Element.appendChild( td3Element );
  let totalOfTotals = 0;
  for( let j = 0; j < City.allCity.length; j++ ){
    totalOfTotals += City.allCity[j].noOfCustomersDaily;
  }
  td3Element.textContent = totalOfTotals;
};

footer();



const formElement = document.getElementById( 'addNewCity' );
formElement.addEventListener( 'submit', function( event ) {
  event.preventDefault();
  const cityName = event.target.city_name.value;
  const minOfCustomers = event.target.minOfCustomers.value;
  const maxOfCustomers = event.target.maxOfCustomers.value;
  const averAge = event.target.averAge.value;

  document.getElementById( 'myTable' ).removeChild( document.getElementById( 'myTable' ).lastChild );

  const city = new City ( cityName, minOfCustomers, maxOfCustomers, averAge );
  formElement.reset();
  console.log( city.noOfCustomersHourly );

  city.getCookies();
  city.render();
  console.log( city.noOfCustomersHourly );
  // document.getElementById( 'myTable' ).deleteRow ( 6 );

  footer();

} );

