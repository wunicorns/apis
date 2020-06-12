const fs = require('fs')

const CONFIG_PATH = process.cwd() + '/config/config.json';

const data = fs.readFileSync(CONFIG_PATH);

const config = JSON.parse(`${data}`);

global.getConfig = () => {
    return config
}