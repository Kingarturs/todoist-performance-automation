"use strict";

module.exports = {
    generateRandomData,
};

const faker = require("faker");

function generateRandomData(userContext, events, done) {
    // generate data with Faker:
    const content = faker.random.words(3);

    // add variables to virtual user's context:
    userContext.vars.content = content;

    // continue with executing the scenario:
    return done();
}
