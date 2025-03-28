function openFile(callback){
    setTimeout(()=>{
        console.log('File Opened..');
        callback();
    },3000);
}

function addSomething(){
    console.log('Something Added to the File...');
}

function removeSomething(){
    console.log('Something Removed from the File...');
}

openFile(removeSomething);
openFile(addSomething);