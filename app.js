'use strict';

let workHours= ['6:00 am', '7am', '8am','9am','10am','11am','12am' ,'1pm', '2pm', '3pm', '3pm', '4pm', '5pm','6pm','7pm','8pm'];
let total=0;
const seattle = {
  cutomers: [],

  getCutomers: function( min, max ) {
    this.cutomers =randomNoOfCustomers( min, max );

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
      liElement.textContent = `${workHours[i]}: ${this.cutomers[i]} cookies`;

    }
    const li2Element = document.createElement( 'li' );
    ulElement.appendChild( li2Element );
    li2Element.textContent = `Total: ${total} cookies`;

  }
};

function randomNoOfCustomers( min, max )
{
  let Avg=6.3;
  let math=0;
  let randomArr=[];
  let Average;

  for ( let j=0;j<=workHours.length; j++ ){
    if( j===workHours.length ){
      randomArr.push( total );
    }
    else{
      min = Math.ceil( min );
      max = Math.floor( max );
      math= Math.floor( Math.random() * ( max - min ) + min );
      Average=math * Avg;
      Average=Math.ceil( Average );
      randomArr.push( Average );
      total=Average+total;
    }
  }
  return randomArr;
}


seattle.getCutomers( 23,65 );
console.log( seattle.cutomers );
seattle.render();

////////

const Tokyo = {
  cutomers: [],

  getCutomers: function( min, max ) {
    this.cutomers =randomNoOfCustomers( min, max );

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
      liElement.textContent = `${workHours[i]}: ${this.cutomers[i]} cookies`;

    }
    const li2Element = document.createElement( 'li' );
    ulElement.appendChild( li2Element );
    li2Element.textContent = `Total: ${total} cookies`;

  }
};

function randomNoOfCustomers( min, max )
{
  let Avg=1.2;
  let math=0;
  let randomArr=[];
  let Average;

  for ( let j=0;j<=workHours.length; j++ ){
    if( j===workHours.length ){
      randomArr.push( total );
    }
    else{
      min = Math.ceil( min );
      max = Math.floor( max );
      math= Math.floor( Math.random() * ( max - min ) + min );
      Average=math * Avg;
      Average=Math.ceil( Average );
      randomArr.push( Average );
      total=Average+total;
    }
    //The maximum is exclusive and the minimum is inclusive
  }
  return randomArr;

}


Tokyo.getCutomers( 3, 24 );
console.log( Tokyo.cutomers );
Tokyo.render();

///////////

const Dubai = {
  cutomers: [],

  getCutomers: function( min, max ) {
    this.cutomers =randomNoOfCustomers( min, max );

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
      liElement.textContent = `${workHours[i]}: ${this.cutomers[i]} cookies`;

    }
    const li2Element = document.createElement( 'li' );
    ulElement.appendChild( li2Element );
    li2Element.textContent = `Total: ${total} cookies`;

  }
};

function randomNoOfCustomers( min, max )
{
  let Avg=3.7;
  let math=0;
  let randomArr=[];
  let Average;

  for ( let j=0;j<=workHours.length; j++ ){
    if( j===workHours.length ){
      randomArr.push( total );
    }
    else{
      min = Math.ceil( min );
      max = Math.floor( max );
      math= Math.floor( Math.random() * ( max - min ) + min );
      Average=math * Avg;
      Average=Math.ceil( Average );
      randomArr.push( Average );
      total=Average+total;
    }
    //The maximum is exclusive and the minimum is inclusive
  }
  return randomArr;

}


Dubai.getCutomers( 11, 38 );
console.log( Dubai.cutomers );
Dubai.render();
//////////

const Paris = {
  cutomers: [],

  getCutomers: function( min, max ) {
    this.cutomers =randomNoOfCustomers( min, max );

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
      liElement.textContent = `${workHours[i]}: ${this.cutomers[i]} cookies`;

    }
    const li2Element = document.createElement( 'li' );
    ulElement.appendChild( li2Element );
    li2Element.textContent = `Total: ${total} cookies`;

  }
};

function randomNoOfCustomers( min, max )
{
  let Avg=2.3;
  let math=0;
  let randomArr=[];
  let Average;

  for ( let j=0;j<=workHours.length; j++ ){
    if( j===workHours.length ){
      randomArr.push( total );
    }
    else{
      min = Math.ceil( min );
      max = Math.floor( max );
      math= Math.floor( Math.random() * ( max - min ) + min );
      Average=math * Avg;
      Average=Math.ceil( Average );
      randomArr.push( Average );
      total=Average+total;
    }
    //The maximum is exclusive and the minimum is inclusive
  }
  return randomArr;

}

Paris.getCutomers( 20, 38 );
console.log( Paris.cutomers );
Paris.render();

////////

const Lima = {
  cutomers: [],

  getCutomers: function( min, max ) {
    this.cutomers =randomNoOfCustomers( min, max );

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
      liElement.textContent = `${workHours[i]}: ${this.cutomers[i]} cookies`;

    }
    const li2Element = document.createElement( 'li' );
    ulElement.appendChild( li2Element );
    li2Element.textContent = `Total: ${total} cookies`;

  }
};

function randomNoOfCustomers( min, max )
{
  let Avg=4.6;
  let math=0;
  let randomArr=[];
  let Average;

  for ( let j=0;j<=workHours.length; j++ ){
    if( j===workHours.length ){
      randomArr.push( total );
    }
    else{
      min = Math.ceil( min );
      max = Math.floor( max );
      math= Math.floor( Math.random() * ( max - min ) + min );
      Average=math * Avg;
      Average=Math.ceil( Average );
      randomArr.push( Average );
      total=Average+total;
    }
    //The maximum is exclusive and the minimum is inclusive
  }
  return randomArr;

}

Lima.getCutomers( 2, 16 );
console.log( Lima.cutomers );
Lima.render();



