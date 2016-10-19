import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let persons =   [
      { id: 11, firstname: 'Jean', lastname: 'Nguon', img :{src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg', alt:'pika' } , skills: ["assistant DSI"]},
      { id: 12, firstname: 'Mael', lastname: 'Gadbois', img :{src: 'http://images.google.fr/imgres?imgurl=http%3A%2F%2Fwww.photodenature.fr%2Fwp-content%2Fuploads%2F2014%2F08%2Fphoto-Pika-7.jpg&imgrefurl=http%3A%2F%2Fwww.photodenature.fr%2Fpika%2F&h=300&w=300&tbnid=31QEk7ROgy7tpM%3A&docid=e8B3N8zdsRNwOM&ei=J_UAWMqWKIWwaob5qtgB&tbm=isch&iact=rc&uact=3&dur=488&page=0&start=0&ndsp=13&ved=0ahUKEwiKxpHmydrPAhUFmBoKHYa8ChsQMwg2KAMwAw&safe=off&bih=925&biw=839', alt:'pika' }, skills: ["expert flex"] },
      { id: 13, firstname: 'Hugo', lastname:'Colas', img :{src: 'http://images.google.fr/imgres?imgurl=http%3A%2F%2Fwww.photodenature.fr%2Fwp-content%2Fuploads%2F2014%2F08%2Fphoto-Pika-7.jpg&imgrefurl=http%3A%2F%2Fwww.photodenature.fr%2Fpika%2F&h=300&w=300&tbnid=31QEk7ROgy7tpM%3A&docid=e8B3N8zdsRNwOM&ei=J_UAWMqWKIWwaob5qtgB&tbm=isch&iact=rc&uact=3&dur=488&page=0&start=0&ndsp=13&ved=0ahUKEwiKxpHmydrPAhUFmBoKHYa8ChsQMwg2KAMwAw&safe=off&bih=925&biw=839', alt:'pika' }, skills:["remplaçant titulaire de florian"] },
      { id: 14, firstname: 'Florian', lastname: 'Fagniez', img :{src: 'http://images.google.fr/imgres?imgurl=http%3A%2F%2Fwww.photodenature.fr%2Fwp-content%2Fuploads%2F2014%2F08%2Fphoto-Pika-7.jpg&imgrefurl=http%3A%2F%2Fwww.photodenature.fr%2Fpika%2F&h=300&w=300&tbnid=31QEk7ROgy7tpM%3A&docid=e8B3N8zdsRNwOM&ei=J_UAWMqWKIWwaob5qtgB&tbm=isch&iact=rc&uact=3&dur=488&page=0&start=0&ndsp=13&ved=0ahUKEwiKxpHmydrPAhUFmBoKHYa8ChsQMwg2KAMwAw&safe=off&bih=925&biw=839', alt:'pika'}, skills: ["BOSS Java"]  },
    ];

	let images = [
		{id: 1, title: 'test', url : 'http://placehold.it/350x150' }
	];
    return {persons, images};
  }
}
