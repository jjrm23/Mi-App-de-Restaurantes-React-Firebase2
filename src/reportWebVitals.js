const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa dinámicamente las funciones de 'web-vitals'
    // Esto asegura que la librería solo se cargue si la función es llamada,
    // lo que puede ser útil para optimización.
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // Calcula y reporta Cumulative Layout Shift
      getFID(onPerfEntry); // Calcula y reporta First Input Delay
      getFCP(onPerfEntry); // Calcula y reporta First Contentful Paint
      getLCP(onPerfEntry); // Calcula y reporta Largest Contentful Paint
      getTTFB(onPerfEntry); // Calcula y reporta Time to First Byte
    });
  }
};

export default reportWebVitals;