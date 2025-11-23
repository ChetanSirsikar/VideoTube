import mongoose , {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber :{
        type : Schema.Types.ObjectId,
        ref : "User"    // subscriber ----> subscribes
    },
    channel : {
        type : Schema.Types.ObjectId,
        ref : "User"    // to whom ????
    }
},{ timestamps : true })


export const Subscription = mongoose.model("Subscription",subscriptionSchema)