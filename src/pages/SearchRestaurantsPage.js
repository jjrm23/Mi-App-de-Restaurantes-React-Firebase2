import React, { useState, useEffect } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import { getRestaurants } from '../services/firebase';

function SearchRestaurantsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants();
        setAllRestaurants(data);
        setFilteredRestaurants(data); // Inicialmente muestra todos los restaurantes
      } catch (err) {
        setError("Error al cargar los restaurantes.");
        console.error("Error fetching restaurants:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  useEffect(() => {
    // Lógica de filtrado
    if (searchTerm === '') {
      setFilteredRestaurants(allRestaurants);
    } else {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const results = allRestaurants.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          restaurant.cuisine.toLowerCase().includes(lowerCaseSearchTerm) ||
          restaurant.address.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredRestaurants(results);
    }
  }, [searchTerm, allRestaurants]);

  if (loading) {
    return <div className="text-center mt-5">Cargando restaurantes...</div>;
  }

  if (error) {
    return <div className="alert alert-danger mt-5">{error}</div>;
  }

  return (
    <section>
      <h2 className="mb-4 text-center">Buscar Restaurantes</h2>
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por nombre, cocina o dirección..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No se encontraron restaurantes con ese criterio.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default SearchRestaurantsPage;