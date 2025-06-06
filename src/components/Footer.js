import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Mi App de Restaurantes. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;