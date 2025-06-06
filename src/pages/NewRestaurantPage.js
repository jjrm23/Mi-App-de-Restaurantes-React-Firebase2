import React, { useState } from 'react';
import { addRestaurant } from '../services/firebase';
import Swal from 'sweetalert2'; // Importa SweetAlert2

function NewRestaurantPage() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [imageName, setImageName] = useState(''); // Para almacenar el nombre del archivo como 'fritosmaya.jpg'

  const handleImageChange = (e) => {
    // Esto asume que seleccionarás un archivo, pero por simplicidad aquí solo almacenaremos el nombre
    // En una aplicación real, manejarías la carga de archivos a Firebase Storage
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !address || !cuisine) {
      Swal.fire('Error', 'Todos los campos son obligatorios.', 'error');
      return;
    }

    const newRestaurant = {
      name,
      address,
      cuisine,
      imageName: imageName || 'placeholder.jpg', // Usa un valor por defecto si no se selecciona imagen
      createdAt: new Date(),
    };

    try {
      await addRestaurant(newRestaurant);
      Swal.fire('¡Éxito!', 'Restaurante añadido correctamente.', 'success');
      // Limpiar el formulario
      setName('');
      setAddress('');
      setCuisine('');
      setImageName('');
      // Opcionalmente, navegar a otra página o actualizar la lista de restaurantes
    } catch (error) {
      console.error("Error al añadir restaurante: ", error);
      Swal.fire('Error', 'No se pudo añadir el restaurante. Inténtalo de nuevo.', 'error');
    }
  };

  return (
    <section>
      <h2 className="mb-4 text-center">Añadir Nuevo Restaurante</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre del Restaurante</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cuisine" className="form-label">Tipo de Cocina</label>
          <input
            type="text"
            className="form-control"
            id="cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Imagen del Restaurante</label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={handleImageChange}
            accept="image/*"
          />
          {imageName && <small className="form-text text-muted">Archivo seleccionado: {imageName}</small>}
        </div>
        <button type="submit" className="btn btn-primary">Añadir Restaurante</button>
      </form>
    </section>
  );
}

export default NewRestaurantPage;