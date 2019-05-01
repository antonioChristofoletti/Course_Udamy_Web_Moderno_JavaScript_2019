const _ = require("lodash"); // npm -i lodash

setInterval( () => {
    console.log(_.random(900, 1000));  // nodemon - npm -i -g nodemon
}, 2000);