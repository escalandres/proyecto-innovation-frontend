import React, { useState } from 'react';

// Datos de ejemplo
const clothesData = [
  { id: 1, name: 'Camisa Roja', color: 'Rojo', season: 'Verano', gender: 'Hombre', style: 'Casual', img: '/assets/cam_rojo_h_verano_casual_001.jpg' },
  { id: 2, name: 'Pantalones Azules', color: 'Azul', season: 'Invierno', gender: 'Mujer', style: 'Formal', img: '/assets/pan_azul_m_invierno_formal_001.jpg' },
  { id: 3, name: 'Pantalones Azules', color: 'Azul', season: 'Invierno', gender: 'Mujer', style: 'Casual', img: '/assets/pan_azul_m_invierno_casual_001.jpg' },
  // Agrega más prendas según sea necesario
];

const FilterPanel = ({ filters, setFilters }) => {
  return (
    <div className="filter-panel">
      <h3>Filtrar por</h3>
      <div>
        <h4>Color</h4>
        <select onChange={e => setFilters({ ...filters, color: e.target.value })}>
          <option value="">Todos</option>
          <option value="Rojo">Rojo</option>
          <option value="Azul">Azul</option>
          {/* Agrega más colores según sea necesario */}
        </select>
      </div>
      <div>
        <h4>Temporada</h4>
        <select onChange={e => setFilters({ ...filters, season: e.target.value })}>
          <option value="">Todas</option>
          <option value="Verano">Verano</option>
          <option value="Invierno">Invierno</option>
        </select>
      </div>
      <div>
        <h4>Sexo</h4>
        <select onChange={e => setFilters({ ...filters, gender: e.target.value })}>
          <option value="">Todos</option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
        </select>
      </div>
      <div>
        <h4>Estilo</h4>
        <select onChange={e => setFilters({ ...filters, style: e.target.value })}>
          <option value="">Todos</option>
          <option value="Casual">Casual</option>
          <option value="Formal">Formal</option>
        </select>
      </div>
    </div>
  );
};

const ClothingGrid = () => {
  const [filters, setFilters] = useState({
    color: '',
    season: '',
    gender: '',
    style: '',
  });

  const filteredClothes = clothesData.filter(item => {
    return (
      (!filters.color || item.color === filters.color) &&
      (!filters.season || item.season === filters.season) &&
      (!filters.gender || item.gender === filters.gender) &&
      (!filters.style || item.style === filters.style)
    );
  });

  return (
    <div style={{ display: 'flex' }}>
      <FilterPanel filters={filters} setFilters={setFilters} />
      <div className="clothing-grid" style={{ marginLeft: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px' }}>
        {filteredClothes.map(item => (
          <div key={item.id} className="clothing-item" style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h4>{item.name}</h4>
            <p>Color: {item.color}</p>
            <p>Temporada: {item.season}</p>
            <p>Sexo: {item.gender}</p>
            <p>Estilo: {item.style}</p>
            <img src={item.img}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothingGrid;
