const express = require('express');
const path = require('path');
// const { clog } = require('./middleware/clog');


const PORT = process.env.PORT || 3001;

const app = express();

const apiRoutes = require('./routes/apiRoutes.js')
const htmlRoutes = require('./routes/htmlRoutes.js')

// app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);





