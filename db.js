const mongoose=require('mongoose')

// const dbUri = 'mongodb+srv://akashzaheer512:h6V1yAMlzjmN8ULt@cluster0.rjtzts3.mongodb.net/employees_db?retryWrites=true&w=majority'
// const uri   = "mongodb+srv://akashzaheer512:<password>@cluster0.rjtzts3.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://akash:akash123@cluster0.mfsge4q.mongodb.net/employees_db?retryWrites=true&w=majority";

// akash (db name)
// akash123 (db password)


module.exports=()=>{
    return mongoose.connect(uri, {
        //   version: ServerApiVersion.v1,
        //   strict: true,
        //   deprecationErrors: true,
        })
}