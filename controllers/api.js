exports.install = function() {

    // Sets cors for the entire API
      CORS();
  
    //Test
    ROUTE('/test', ['post','*Test --> @insert']);  
    
      
  }