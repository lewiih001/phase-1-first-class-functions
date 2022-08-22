function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return function namedFunction(hello){
        return hello;
    }
}
function returnsAnAnonymousFunction(){
    return function(hello){
        return hello;
    }
        
    }


