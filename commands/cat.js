const request = require('request');

const list_of_animals = {
    'dog': ['https://dog.ceo/api/breeds/image/random', 'message']
}

const randomAnimal = function (obj) {
    const keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

module.exports = {
    name: 'animal',
    aliases: ['cute', 'ani'],
    execute(client, message, Discord, extra) {
        const animal = randomAnimal(list_of_animals)
        let send = ''
        request(animal[0], function(error, response, body){
            body = JSON.parse(body)
            if (animal=='cat') {
                send = body[0]['url']
            } else {
                send = body[animal[1]]
            }
            message.channel.send(send)  
        })
    }
}