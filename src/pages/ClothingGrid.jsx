import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { showLoader, hideLoader, alerta } from './js/general';

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
          <option value="Negro">Negro</option>
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

FilterPanel.propTypes = {
  filters: PropTypes.shape({
    color: PropTypes.string,
    season: PropTypes.string,
    gender: PropTypes.string,
    style: PropTypes.string,
  }).isRequired,
  setFilters: PropTypes.func.isRequired,
};


const ClothingGrid = () => {
  const [filters, setFilters] = useState({
    color: '',
    season: '',
    gender: '',
    style: '',
  });

  const [clothes, setClothes] = useState([]);

  const fetchClothes = async () => {
    try {
      showLoader();
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/app/prenda`);
      hideLoader();

      if (!response.ok) {
        alerta.error('Error al consultar las prendas.');
        return;
      }

      const data = await response.json();
      console.log(data);
      setClothes(data.items); // Suponiendo que devuelves { items: [] } en el backend
    } catch (error) {
      hideLoader();
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchClothes();
  }, []);

  const filteredClothes = clothes.filter(item => {
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
      <div className="clothing-grid" style={{ marginLeft: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
        {filteredClothes.length > 0 ? (
          filteredClothes.map(item => (
            <div key={item.id} className="clothing-item" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
              <h4>{item.name}</h4>
              <p>Color: {item.color}</p>
              <p>Temporada: {item.season}</p>
              <p>Sexo: {item.gender}</p>
              <p>Estilo: {item.style}</p>
              <img src={item.img} alt={item.name} style={{ width: '100%', objectFit: 'cover' }} />
            </div>
          ))
        ) : (
          <p>No se encontraron prendas.</p>
        )}
      </div>
    </div>
  );
};

export default ClothingGrid;
