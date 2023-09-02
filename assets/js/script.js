const rowSales = document.querySelector("#sales")
const rowRent = document.querySelector("#rent")

const propiedades_alquiler = [
    {
      nombre: 'Apartamento en el centro de la ciudad',
      src: 'photo-uno-alquiler.avif',
      descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      toilette: 3,
      costo: 2000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Apartamento luminoso con vista al mar',
      src: 'photo-dos-alquiler.avif',
      descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
      ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
      habitaciones: 3,
      toilette: 2,
      costo: 2500,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Condominio moderno en zona residencial',
      src: 'photo-tres-alquiler.avif',
      descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      toilette: 2,
      costo: 2200,
      smoke: false,
      pets: false
    },
    {
        nombre: 'Chalet rústico en la montaña',
        src: 'photo-cuatro-alquiler.avif',
        descripcion: 'Este chalet rústico se encuentra en una ubicación tranquila en la montaña',
        ubicacion: '789 Mountain Cabin Road, Rustic Retreat, CA 34567',
        habitaciones: 3,
        costo: 3000,
        smoke: true,
        pets: false,
      },
      {
        nombre: 'Casa contemporánea con piscina privada',
        src: 'photo-cinco-alquiler.avif',
        descripcion: 'Esta casa contemporánea ofrece una piscina privada y un diseño moderno',
        ubicacion: '456 Modern Street Avenue, Contemporaryville, CA 67890',
        habitaciones: 4,
        toilette: 3,
        costo: 6000,
        smoke: true,
        pets: true,
      },
      {
        nombre: 'Cabaña Montañesa con piscina privada',
        src: 'photo-seis-alquiler.avif',
        descripcion: 'Esta casa montañesa ofrece una piscina privada y un diseño moderno',
        ubicacion: '555 1fr Street Avenue, Contemporaryville, CA 67890',
        habitaciones: 4,
        toilette: 3,
        costo: 6000,
        smoke: false,
        pets: true,
      }
    ]
  const propiedades_venta = [
    {
      nombre: 'Apartamento de lujo en zona exclusiva',
      src:'photo-uno-venta.jpeg' ,
      descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
      ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
      habitaciones: 4,
      toilette: 2,
      costo: 5000,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Apartamento acogedor en la montaña',
      src: 'photo-dos-venta.webp',
      descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
      ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
      habitaciones: 2,
      toilette: 3,
      costo: 1200,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Penthouse de lujo con terraza panorámica',
      src: 'photo-tres-venta.avif',
      descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
      ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
      habitaciones: 3,
      toilette: 2,
      costo: 4500,
      smoke: false,
      pets: true
    },
    {
        nombre: 'Espectacular casa de lujo con piscina',
        src: 'photo-cuatro-venta.avif',
        descripcion: 'Esta hermosa casa ofrece una piscina con agua temperada y  vistas espectaculares',
        ubicacion: '666 Oat Avenue, Atlanta City, CA 12345',
        habitaciones: 3,
        toilette: 2,
        costo: 1200,
        smoke: false,
        pets: true
      }
      ,
    {
        nombre: 'Moderna casa con piscina',
        src: 'photo-cinco-venta.jpeg',
        descripcion: 'Esta sspectacular casa ofrece una piscina con agua temperada y  vistas espectaculares',
        ubicacion: '234 5ta Avenue, Atlanta City, CA 12345',
        habitaciones: 3,
        toilette: 3,
        costo: 2200,
        smoke: false,
        pets: true
      },
    {
        nombre: 'Casa de lujo con piscina',
        src: 'photo-seis-venta.jpeg',
        descripcion: 'Esta casa ofrece una piscina con agua temperada',
        ubicacion: '879 Flat Avenue, New York City, CA 22222',
        habitaciones: 5,
        toilette: 4,
        costo: 3100,
        smoke: true,
        pets: true
      }
  ];
 

const getCards = (dataResult) => {
    let results ="";

    for(let data of dataResult)
    {
        results += `<div class="col-md-4 mb-4">
                        <div class='card'>
                        <img
                        src='./assets/img/${data.src}'
                        class='card-img-top'
                        alt='Imagen del departamento'
                        />
                            <div class='card-body'>
                            <h5 class='card-title'>${data.nombre}</h5>
                            <p class='card-text'>${data.descripcion}</p>
                            <p><i class='fas fa-map-marker-alt'></i> ${data.ubicacion}</p>
                            <p>
                                <i class='fas fa-bed'></i> ${data.habitaciones} habitaciones |
                                <i class='fas fa-bath'></i> ${data.toilette}  baños
                            </p>
                            <p><i class='fas fa-dollar-sign'></i>${data.costo}</p>
                            <p class=${(data.smoke) ? 'text-success' : 'text-danger'}>
                                <i class='fas fa-smoking-ban'></i> ${(data.smoke) ? 'Se permite fumar' : 'No se permite fumar'}
                            </p>
                            <p class=${(data.pets) ? 'text-success' : 'text-danger'}>
                                <i class='fas fa-paw'></i> ${(data.pets) ? 'Se permiten mascotas' : 'No se permiten mascotas'}
                            </p>
                            </div>
                    </div>
                </div>`
    }

    return results; 
    
}
if (window.location.href.includes("index.html")) {

    const startIndex = 0;
    const endIndex = 3;

    rowSales.innerHTML = getCards(propiedades_venta.slice(startIndex, endIndex));
    rowRent.innerHTML = getCards(propiedades_alquiler.slice(startIndex, endIndex));

} else if (window.location.href.includes("propiedades_alquiler.html")) {
    
    rowRent.innerHTML = getCards(propiedades_alquiler);

} else if (window.location.href.includes("propiedades_venta.html")) {
    
    rowSales.innerHTML = getCards(propiedades_venta);
}

