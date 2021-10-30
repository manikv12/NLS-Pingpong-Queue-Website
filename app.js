// Import Dependencies
const express = require('express')
const app = express()


// Define the Port for the app to work
const PORT = process.env.PORT || '8080';

// Express Settings
// app.use(express.static(__dirname + "/public"));
// app.set('views', __dirname + '/views');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');


// Routes
app.use('/', app);


// Listner
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
