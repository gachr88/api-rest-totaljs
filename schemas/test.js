const helper = require(F.path.definitions('app_helper'));

NEWSCHEMA('test', function(schema) {
    schema.define('title', 'string',true);
    schema.define('body', 'string', true);
    schema.define('userId', 'number', true);

    schema.setInsert(function($){
        var data = $.model.$clean();
        
        RESTBuilder.make(function(builder) {            
            builder.url('https://jsonplaceholder.typicode.com/posts');            
            builder.post(JSON.stringify(data));
            builder.exec(function(err, response) {
                helper.successResponse($,'',response);                
            });
        });
    });

    helper.schemaErrorBuilder('custom');
    schema.setError((error) => { error.setTransform('custom') });
});