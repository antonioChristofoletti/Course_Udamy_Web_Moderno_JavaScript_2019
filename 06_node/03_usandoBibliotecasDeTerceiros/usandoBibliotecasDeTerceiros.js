const _ = require("lodash");

setInterval( () => {
    console.log(_.random(900, 1000));
}, 2000);