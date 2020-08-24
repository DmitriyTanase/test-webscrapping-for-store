let mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://d2207:wqrzxs1234@cluster0-37he4.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
    );

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongodb are connected")
});

module.exports = db;

//-----------------------------------------------------------
// create the readable stream and transform the data before writing it
// const stream = MyModel.find().lean().stream({
//     transform: (doc) => {
//         // do whatever you like to the doc
//         doc.whoIsAwesome = 'StreamToMongoDBIsAwesome';
//     }
// });
//
// stream.pipe(writableStream);
//
// stream.on('end', () => {
//     console.log('done!');
//     connection.close();
// });
//------------------------------------------------------------------
