const mongoose = require('mongoose');
const dbName = 'authors'

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then((res) => console.log(`Connected to MongoDB: ${dbName}`))
.catch((err) => console.log('Error connecting to Database', err));