const {taskOne, taskTwo} = require("./taks");

async function  main(){
    console.time("time function");
    await taskOne();
    await taskTwo();
    console.timeEnd("time function");
}


main();