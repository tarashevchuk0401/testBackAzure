const express = require('express');
const app = express();
app.get('/', (req,res) => res.json({message: 'HELLO WOrlD_!!!'}))
app.listen(process.env.PORT || 80)

