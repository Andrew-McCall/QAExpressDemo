const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const {Square} = require("../demo.js")

describe("Demo Module (Sqaure)", function() {
  
  it("Square 4", function() {

    if (Square(2) !== 2*2){
      throw new Error("Square didn't equal 4");
    }

  })

  it("Square 16", function() {

    if (Square(16) !== 16*16){
      throw new Error("Square didn't equal 256");
    }

  })

})


describe("Http", function() {
  let app = null;

  this.beforeAll("Setup", function(){
    app = require("../index.js")
  })

  it("App Request", function(){
   
    chai.request(app).get("/api/hello").end(function(error, response) {

      chai.expect(error).to.be.null;
      chai.expect(response).to.have.status(200);
      chai.expect(response.text).to.equal("Hello World!")

    });

  })

  this.afterAll("Shutdown", function(){
    app.close();
  })

})
