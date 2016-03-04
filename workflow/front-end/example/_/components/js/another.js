var another = function () {
    var someArray = [99,88,77,66,55,44]; // my test array

    var obj = {
        key1        : function () {
            return "i'm test";
        },
        keyNumber2  : [1 /*commented here*/, 2]
    };

    console.log('another');

    return {
        array   : someArray,
        obj     : [obj]
    };
};

another();