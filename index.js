
function receivesAFunction(cb){
    return cb()
}

function returnsANamedFunction(){
    return function test (){/* test */}
}

function returnsAnAnonymousFunction(){
    return function (){}
}