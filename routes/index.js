const demo = require('../app/modules/demo')

module.exports = (app) => {
    app.get('/', demo.getUserDetails)
}

