const {taskOne, taskTwo} = require("./taks");

async function  main(){
    console.time("time function");

    const result = await Promise.all([taskOne(), taskTwo()])
    console.timeEnd("time function");
    
    console.log("task one returned", result[0]);
    console.log("task two returne", result[1]);
}


main();