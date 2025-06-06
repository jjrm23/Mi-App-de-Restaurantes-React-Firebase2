import React from 'react';

// Importa las imágenes dinámicamente (importante para que Webpack las procese)
import fritosmayaImg from '../assets/images/fritosmaya.png';
import maleducadosImg from '../assets/images/maleducados.png';
import rincondelyImg from '../assets/images/rincondely.png';
import elcapatazImg from '../assets/images/elcapataz.png';
import vicentelopezImg from '../assets/images/vicentelopez.png';

const images = {
  'fritosmaya.png': fritosmayaImg,
  'maleducados.png': maleducadosImg,
  'rincondely.png': rincondelyImg,
  'elcapataz.png': elcapatazImg,
  'vicentelopez.png': vicentelopezImg,
};

function RestaurantCard({ restaurant }) {
  const imageUrl = images[restaurant.imageName] || 'https://via.placeholder.com/150'; // Imagen de respaldo

  return (
    <div className="col-md-4 mb-4">
      <div className="card restaurant-card">
        <img src={imageUrl} className="card-img-top" alt={restaurant.name} />
        <div className="card-body">
          <h5 className="card-title">{restaurant.name}</h5>
          <p className="card-text">{restaurant.address}</p>
          <p className="card-text">
            <small className="text-muted">{restaurant.cuisine}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;