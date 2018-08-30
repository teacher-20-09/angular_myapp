var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin1@ds125392.mlab.com:25392/newangular');
console.log('mongoose connected success!');
module.exports = mongoose;