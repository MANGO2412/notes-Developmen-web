const weather = true;


const date = new Promise((resolve, reject)=>{
   if(weather){
    const dateDetails = {
        namePlace: 'cubana Restaurant',
        location: '55th Street',
        table: 5
    };

    resolve(dateDetails)

   }else{
       reject(new Error("Bad weather, so no Date"));
   }
})

const orderUber = (dateDetails)=>{
    const message = `Get me an Uber ASAp to ${dateDetails.location}, we are going on a date!`;
    return Promise.resolve(message);
}




(async ()=>{
    try{
     let dateDetails = await date
     let message = await orderUber(dateDetails);
     console.log(message);
    }catch(error){
      console.log(error.message);
    }
})();
