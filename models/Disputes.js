const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DisputesSchema = new Schema({
  hash: String,
  id: String,
  disputeId: Number,
  arbitratorAddress: String,
  contractAddress: String,
  partyA : String,
  partyB : String,
  title : String,
  deadline : String,
  status : String,
  fee: Number,
  information : String,
  justification : String,
  ruling: Number, // 0 means no decision
  session: Number, // session that dispute was active
  resolutionOptions: [{
    name: String,
    description: String,
    value: Number
  }],
  created_at: {
    type: Date,
    default: Date.now
  }
},
{
  versionKey: false
})

// index disputes by aribtrator address and then disputeId
DisputesSchema.index({arbitratorAddress: 1, disputeId: -1})

module.exports = mongoose.model('disputes', DisputesSchema)
