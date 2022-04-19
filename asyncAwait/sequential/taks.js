const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    async taskOne(){
        try{
            throw new Error('some problem')
            await sleep(4000);
            console.log("one value");
        } catch(e){
            console.log(e)
        }
    },


    async taskTwo(){
        try{
            await sleep(1000);
            console.log("two value")
        } catch(e){
         console.log(e)
        }
       
    }
}