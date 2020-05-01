// Requirements
var express        = require('express');
var app            = express();

app.set('view engine', 'ejs');

// Create the route for the frontpage
app.get('/', function(req, res) {
    res.render('pages/index', { title: 'Home' });
});

// Define the public directory (where the stylesheet lives)
// Normally this would be a subdirectory 'public/css/'
app.use(express.static(__dirname));
// Start the app on port 3000
app.listen(3000);
console.log('listening on port 3000');