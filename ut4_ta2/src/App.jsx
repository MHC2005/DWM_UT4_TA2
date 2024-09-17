import React from 'react';
import Card from './components/Card';

const App = () => {
  return (
    <div className="app">
      <Card>
        <h2>Proyecto A</h2>
        <p>Desarrollo de una aplicación web.</p>
        <p><strong>Asignado a:</strong> Mateo</p>
        <p><strong>Fecha de inicio:</strong> 2024-09-01</p>
        <p><strong>Fecha de fin:</strong> 2024-09-30</p>
      </Card>
      <Card>
        <h2>Proyecto B</h2>
        <p>Implementación de un sistema de seguridad.</p>
        <p><strong>Asignado a:</strong> Cecilia</p>
        <p><strong>Fecha de inicio:</strong> 2024-10-01</p>
        <p><strong>Fecha de fin:</strong> 2024-10-31</p>
      </Card>
      <Card>
        <h2>Proyecto C</h2>
        <p>Análisis de datos para un cliente.</p>
        <p><strong>Asignado a:</strong> Fabio</p>
        <p><strong>Fecha de inicio:</strong> 2024-11-01</p>
        <p><strong>Fecha de fin:</strong> 2024-11-15</p>
      </Card>
    </div>
  );
}

export default App;
