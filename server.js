const app = require('express')();
const Utils = require('./app/utils');
const Demo = require('./app/modules/demo');
global.webLog = Utils.webLog;
const PORT = process.env.PORT || 3000;
const db = require('./config/db');


require('./config/express')(app);
require('./routes')(app);


Promise.all([
    // db.connect(),
]).then(listen).catch(function () {
    webLog("Error to connect DB");
})

function listen() {
    app.listen(PORT, () => {
        webLog("APP started on port " + PORT + " " + app.get('env'));
    });
}


