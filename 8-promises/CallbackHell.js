function fun1(callback){
    setTimeout(()=>{
        console.log('This is fun1');
        callback();
    },1000);
}

function fun2(callback){
    setTimeout(()=>{
        console.log('This is fun2');
        callback();
    },1000);
}

function fun3(callback){
    setTimeout(()=>{
        console.log('This is fun3');
        callback();
    },1000);
}

function fun4(callback){
    setTimeout(()=>{
        console.log('This is fun4');
        callback();
    },1000);
}

function fun5(callback){
    setTimeout(()=>{
        console.log('This is fun5');
        callback();
    },1000);
}

fun1(()=>{
    console.log('This is func1 again..');
    fun2(()=>{
        fun3(()=>{
            fun4(()=>{
                fun5(()=>{
                    console.log('All done...');
                })
            })
        })
    })
})