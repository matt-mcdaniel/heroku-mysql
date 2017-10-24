const orm = require('../config/orm');

const burger = {
    all: cb => orm.selectAll(cb),
    add: (name, cb) => orm.insertOne(name, cb),
    update: (id, values, cb) => orm.updateOne(id, values, cb),
    delete: (id, cb) => orm.deleteOne(id, cb)
};

module.exports = burger;
