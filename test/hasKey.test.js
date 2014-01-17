var hasKey = require( "../index" ),
  should = require( "should" );

describe( "hasKey", function () {

  it( "should check if an object has a key", function () {

    hasKey( {
      chicken: {
        really: "tasty"
      }
    }, "chicken", "object" ).should.be.true;

  } );

  it( "should check an object has a key path", function () {

    hasKey( {
      address: {
        street: "bam"
      }
    }, "address.street", "string" ).should.be.true;

  } );

} );