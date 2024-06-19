const productos = [
    {
    id: '1',
    nombre: 'Refrigerador',
    precio: 100,
    imagen: 'https://www.lg.com/content/dam/channel/wcms/pe/images/refrigeradoras/gt37sgp_apzglpr_espr_pe_c/gallery/DZ1.jpg'
    },
    {
    id: '2',
    nombre: 'Televisor',
    precio: 150,
    imagen: 'https://images.philips.com/is/image/philipsconsumer/48529870a9be415d8eeeafb7009e7b8d?$jpglarge$&wid=960'
    },
    {
    id: '3',
    nombre: 'Tostadora',
    precio: 200,
    imagen: 'https://via.placeholder.com/150'
    },
    {
    id: '4',
    nombre: 'Microondas',
    precio: 250,
    imagen: 'https://hiraoka.com.pe/media/catalog/product/1/1/118433_hmm-25n_vista_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560'
    },
    ];
    function pintarProductos(productos){
    const contenedor = document.getElementById('productos');
    contenedor.innerHTML = '';
    
    productos.forEach( producto =>{

    //generar un elemento nuevo
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto');
    
    productoDiv.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h2>${producto.nombre}</h2>
    <p>Precio: ${producto.precio}</p>
    `;
    
    contenedor.appendChild(productoDiv);
    } );
    }
    
    pintarProductos(productos);