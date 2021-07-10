const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stockSchema = new Schema({
  today: {
    type: Date,
    default: Date.now
  },
  stocks: [
    {
      companyName: {
        type: String,
        trim: true,
        required: "Please enter an exercise type"
      },
      symbol: {
          type: String,
          trim: true,
          required: "Enter a name for exercise"
        },
        primaryExchange: {
            type: String,
            trim: true,
            required: "Enter a name for exercise"
          },
      iexRealTimePrice: {
          type: Number,
          required:"Please enter a duration"
        },
      previousClose: {
          type: Number,

        },
      week52High: {
        type: Number,
        },
      week52Low: {
        type: Number,
        },
      change: {
        type: Number,
      },
      changePercent: {
        type: Number,
      },
      ytdChange: {
        type: Number,
      }

    }
  ]

},
{
  toJSON:{
    virtuals: true
  }
}
);

// need to figure out how I specifically want this to go
stockSchema.virtual("totalDuration").get(function(){
  return this.exercises.reduce((total,exercise)=>{
    return total + exercise.duration
  }, 0)
})

const Stock= mongoose.model("Stock", stockSchema);

module.exports = Stock;
