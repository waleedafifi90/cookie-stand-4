'use strict';

let workHours= ['6:00 am', '7am', '8am','9am','10am','11am','12am' ,'1pm', '2pm', '3pm', '4pm', '5pm','6pm','7pm'];
const seattle = {
  noOfCookies: [],
  noOfCustomersHourly:[],
  minOfCustomers: 23,
  maxOfCustomers: 65,
  averAge: 6.3,
  toTal:0,
  getCookies: function() {
    for( let j=0; j<workHours.length; j++ ){
      let hourlyCustomers= randomNoOfCustomers( this.minOfCustomers, this.maxOfCustomers );
      let cookiesNo=Math.ceil( ( hourlyCustomers )*this.averAge );
      console.log( cookiesNo );
      this.noOfCookies.push( cookiesNo );
      this.toTal+=cookiesNo;
      this.noOfCustomersHourly.push( hourlyCustomers );
      
    }
  },


  render: function () {
    const parentElement = document.getElementById( 'Sales' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent='Seattle';

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < workHours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workHours[i]}: ${this.noOfCookies[i]} cookies`;

    }
    const li2Element = document.createElement( 'li' );
    ulElement.appendChild( li2Element );
    li2Element.textContent = `Total: ${this.toTal} cookies`;

  }
};

function randomNoOfCustomers( min, max ){
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min - 1 ) + min );
}

seattle.getCookies();
seattle.render();

///////////////For Tokyo

const tokyo = {
  noOfCookies: [],
  noOfCustomersHourly:[],
  minOfCustomers: 3,
  maxOfCustomers: 65,
  averAge: 1.2,
  toTal:0,
  getCookies: function() {
    for( let j=0; j<workHours.length; j++ ){
      let hourlyCustomers= randomNoOfCustomers( this.minOfCustomers, this.maxOfCustomers );
      let cookiesNo=Math.ceil( ( hourlyCustomers )*this.averAge );
      console.log( cookiesNo );
      this.noOfCookies.push( cookiesNo );
      this.toTal+=cookiesNo;
      this.noOfCustomersHourly.push( hourlyCustomers );

    }
  },


  render: function () {
    const parentElement = document.getElementById( 'Sales' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent='Tokyo';

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < workHours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workHours[i]}: ${this.noOfCookies[i]} cookies`;

    }
    const li2Element = document.createElement( 'li' );
    ulElement.appendChild( li2Element );
    li2Element.textContent = `Total: ${this.toTal} cookies`;

  }
};

function randomNoOfCustomers( min, max ){
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min - 1 ) + min );
}

tokyo.getCookies();
tokyo.render();

///////////////For Dubai

const dubai = {
  noOfCookies: [],
  noOfCustomersHourly:[],
  minOfCustomers: 11,
  maxOfCustomers: 38,
  averAge: 3.7,
  toTal:0,
  getCookies: function() {
    for( let j=0; j<workHours.length; j++ ){
      let hourlyCustomers= randomNoOfCustomers( this.minOfCustomers, this.maxOfCustomers );
      let cookiesNo=Math.ceil( ( hourlyCustomers )*this.averAge );
      console.log( cookiesNo );
      this.noOfCookies.push( cookiesNo );
      this.toTal+=cookiesNo;
      this.noOfCustomersHourly.push( hourlyCustomers );

    }
  },


  render: function () {
    const parentElement = document.getElementById( 'Sales' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent='Dubai';

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < workHours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workHours[i]}: ${this.noOfCookies[i]} cookies`;

    }
    const li2Element = document.createElement( 'li' );
    ulElement.appendChild( li2Element );
    li2Element.textContent = `Total: ${this.toTal} cookies`;

  }
};

function randomNoOfCustomers( min, max ){
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min - 1 ) + min );
}

dubai.getCookies();
dubai.render();

///////////////For Paris

const Paris = {
  noOfCookies: [],
  noOfCustomersHourly:[],
  minOfCustomers: 20,
  maxOfCustomers: 38,
  averAge: 2.3,
  toTal:0,
  getCookies: function() {
    for( let j=0; j<workHours.length; j++ ){
      let hourlyCustomers= randomNoOfCustomers( this.minOfCustomers, this.maxOfCustomers );
      let cookiesNo=Math.ceil( ( hourlyCustomers )*this.averAge );
      console.log( cookiesNo );
      this.noOfCookies.push( cookiesNo );
      this.toTal+=cookiesNo;
      this.noOfCustomersHourly.push( hourlyCustomers );
    }
  },


  render: function () {
    const parentElement = document.getElementById( 'Sales' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent='Paris';

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < workHours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workHours[i]}: ${this.noOfCookies[i]} cookies`;

    }
    const li2Element = document.createElement( 'li' );
    ulElement.appendChild( li2Element );
    li2Element.textContent = `Total: ${this.toTal} cookies`;

  }
};

function randomNoOfCustomers( min, max ){
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min - 1 ) + min );
}

Paris.getCookies();
Paris.render();


///////////////For Lima

const Lima = {
  noOfCookies: [],
  noOfCustomersHourly:[],
  minOfCustomers: 2,
  maxOfCustomers: 16,
  averAge: 4.6,
  toTal:0,
  getCookies: function() {
    for( let j=0; j<workHours.length; j++ ){
      let hourlyCustomers= randomNoOfCustomers( this.minOfCustomers, this.maxOfCustomers );
      let cookiesNo=Math.ceil( ( hourlyCustomers )*this.averAge );
      console.log( cookiesNo );
      this.noOfCookies.push( cookiesNo );
      this.toTal+=cookiesNo;
      this.noOfCustomersHourly.push( hourlyCustomers );
  
    }
  

  },



  render: function () {
    const parentElement = document.getElementById( 'Sales' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent='Lima';

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < workHours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workHours[i]}: ${this.noOfCookies[i]} cookies`;

    }
    const li2Element = document.createElement( 'li' );
    ulElement.appendChild( li2Element );
    li2Element.textContent = `Total: ${this.toTal} cookies`;

  }
};

function randomNoOfCustomers( min, max ){
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min - 1 ) + min );
}

Lima.getCookies();
Lima.render();
