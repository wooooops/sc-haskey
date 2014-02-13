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

  it( "should check a instantiated class has a property", function () {

    var MyClass = function () {};

    MyClass.prototype.chicken = function () {};
    MyClass.prototype.active = false;

    var myClass = new MyClass();

    hasKey( myClass, "chicken", "function" ).should.be.true;
    hasKey( myClass, "active", "boolean" ).should.be.true;
    hasKey( myClass, "invalid" ).should.be.false;

  } );

  it( "should check falsey values", function () {

    var a = {
      chicken: {
        is: {
          tasty: false
        }
      },
      duck: {
        is: {
          really: {
            tasty: void 0
          }
        }
      },
      horse: {
        is: {
          big: undefined
        }
      }
    };

    hasKey( a, "chicken.is.tasty" ).should.be.true;
    hasKey( a, "duck.is.really.tasty" ).should.be.true;
    hasKey( a, "horse.is.big" ).should.be.true;

  } );

} );