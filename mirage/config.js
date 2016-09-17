export default function() {
  this.namespace = '/api';
  this.get('/musicians', function() {
    return {
      data: [{
        type: 'musician',
        id: 'msc001',
        attributes: {
          type: 'h',
          name: 'Johann Sebastian Bach',
          city: 'Eisenach',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Johann_Sebastian_Bach.jpg/220px-Johann_Sebastian_Bach.jpg'
        }
      }, {
        type: 'musician',
        id: 'spy002',
        attributes: {
          name: 'María Calamidades',
          city: 'Bogotá',
          type: 'Espía',
          image: 'http://www.cineycine.com/archivos/2099/09/espias-lucha.jpg'
        }
      }, {
        type: 'musician',
        id: 'spy003',
        attributes: {
          name: 'Otilio Benavidez',
          city: 'Valle',
          type: 'Luchador',
          image: 'https://gimnasiorizo.files.wordpress.com/2015/02/img_0291.jpg'
        }
      }]
    };
  });

  // Find and return the provided spy from our spy list above
/*  this.get('/spies/:id', function (db, request) {
    return { data: spy.find((spy) => request.params.id === spy.id) };
  });*/
}