let express = require('express');

// initiating express server
let app = express();
let PORT = process.env.PORT || 3000;

// setting up app to use routes
app.use('/api' , require('./routes/apiroutes'));

// listening to PORT
app.listen(PORT , () => {
    console.log(`Listening on Port: ${PORT}`);
});