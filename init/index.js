const mongoose =require("mongoose");
const initData=require("./data.js");
const Listing= require("../models/listing.js");



//connect to mongoose
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

const categoryByTitle = {
  "Cozy Beachfront Cottage": "trending",
  "Modern Loft in Downtown": "rooms",
  "Mountain Retreat": "mountains",
  "Historic Villa in Tuscany": "iconic-cities",
  "Secluded Treehouse Getaway": "camping",
  "Beachfront Paradise": "trending",
  "Rustic Cabin by the Lake": "mountains",
  "Luxury Penthouse with City Views": "rooms",
  "Ski-In/Ski-Out Chalet": "mountains",
  "Safari Lodge in the Serengeti": "camping",
  "Historic Canal House": "iconic-cities",
  "Private Island Retreat": "trending",
  "Charming Cottage in the Cotswolds": "rooms",
  "Historic Brownstone in Boston": "iconic-cities",
  "Beachfront Bungalow in Bali": "amazing-pools",
  "Mountain View Cabin in Banff": "mountains",
  "Art Deco Apartment in Miami": "iconic-cities",
  "Tropical Villa in Phuket": "amazing-pools",
  "Historic Castle in Scotland": "castle",
  "Desert Oasis in Dubai": "amazing-pools",
  "Rustic Log Cabin in Montana": "camping",
  "Beachfront Villa in Greece": "trending",
  "Eco-Friendly Treehouse Retreat": "camping",
  "Historic Cottage in Charleston": "iconic-cities",
  "Modern Apartment in Tokyo": "iconic-cities",
  "Lakefront Cabin in New Hampshire": "camping",
  "Luxury Villa in the Maldives": "amazing-pools",
  "Ski Chalet in Aspen": "mountains",
  "Secluded Beach House in Costa Rica": "trending",
};

main().then(()=>{
    console.log("connected to DB");

})
.catch((err)=>{
    console.log(err);

});


async function main(){
    await mongoose.connect(MONGO_URL);
}


const intiDb = async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"6aa93d89ba7ba7410b35f6db", category: categoryByTitle[obj.title]}));
    

    await Listing.insertMany(initData.data);

    



    console.log("data was initialized");
};

intiDb();
