const mongoose = require('mongoose');
// local db
mongoose.connect('mongodb://user1_cruds1:12345678@localhost:27017/cruds_v2?authSource=admin')
// atlas
// mongoose.connect('mongodb+srv://emyr:Off01Sexlnvfe2xI@cluster0.frq9s.mongodb.net/crudsv1?retryWrites=true&w=majority')
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('server terhubung'));




// .then(()=>{
//     console.log('connect');
// })
// .catch(err => console.log(err));