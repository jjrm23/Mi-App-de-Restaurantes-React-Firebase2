import React, { useEffect, useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import { getRestaurants } from '../services/firebase';

function HomePage() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants();
        setRestaurants(data);
      } catch (err) {
        setError("Error al cargar los restaurantes.");
        console.error("Error fetching restaurants:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Cargando restaurantes...</div>;
  }

  if (error) {
    return <div className="alert alert-danger mt-5">{error}</div>;
  }

  return (
    <section>
      <h2 className="mb-4 text-center">Restaurantes Destacados</h2>
      <div className="row">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No hay restaurantes disponibles.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default HomePage;