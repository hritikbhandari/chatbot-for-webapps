const {WebhookClient} = require('dialogflow-fulfillment');

const mongoose = require('mongoose');
const Join = mongoose.model('join');



module.exports = app => {
    app.post('/', async (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });

        function domains(agent) {
            agent.add(`Welcome to my domains fulfillment!`);
        }

        function join(agent) {
            Join.findOne({'join': agent.parameters.join}, function(err, join) {
                if (join !== null ) {
                    join.counter++;
                    join.save();
                } 
            });
            let responseText = 'Follow our handles on Instagram and LinkedIn to stay updated';

            agent.add(responseText);
        }

        function fallback(agent) {
            agent.add(`I didn't understand`);
            agent.add(`I'm sorry, can you try again?`);
        }
        let intentMap = new Map();
        intentMap.set('domains', domains);
        intentMap.set('join', join);

        intentMap.set('Default Fallback Intent', fallback);

        agent.handleRequest(intentMap);
    });

}