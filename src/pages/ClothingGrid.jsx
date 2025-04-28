import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Reconocimiento from './Reconocimiento';
import { showLoader, hideLoader, alerta } from './js/general';
import './css/clothing.css'; // Asegúrate de tener este archivo CSS para estilos adicionales

const prendas = ['Camisa', 'Pantalones', 'Vestido', 'Falda', 'Chamarra', 'Abrigo', 'Suéter', 'Blazer', 'Camiseta', 'Shorts', 'Bermudas', 'Blusa', 'Traje de baño'];
const colores = [
    'Rojo','Azul','Verde','Amarillo','Blanco','Negro','Gris','Beige','Café','Morado','Rosa'
];
const estilos = [
    'Casual', 'Formal', 'Deportivo', 'Juvenil'
];
const temporadas = ['Verano', 'Invierno'];
const sexos = ['Hombre', 'Mujer'];

const FilterPanel = ({ filters, setFilters }) => {

  const resetFilters = () => {
    setFilters({
      color: '',
      season: '',
      gender: '',
      style: '',
      type: '',
    });
  };
  return (
    <div className="filter-panel">
      <h3>Filtrar por</h3>
      <div className='filter-options'>
        <h4>Sexo</h4>
        <select onChange={e => setFilters({ ...filters, gender: e.target.value })}
          value={filters.gender}
        >
          <option value="">Todos</option>
          {
              sexos.map((prenda, index) => (
                  <option key={index} value={prenda}>{prenda}</option>
              ))
          }
        </select>
      </div>
      <div className='filter-options'>
        <h4>Tipo</h4>
        <select onChange={e => setFilters({ ...filters, type: e.target.value })}
          value={filters.type}>
          <option value="">Todos</option>
          {
              prendas.map((prenda, index) => (
                  <option key={index} value={prenda}>{prenda}</option>
              ))
          }
        </select>
      </div>
      <div className='filter-options'>
        <h4>Color</h4>
        <select onChange={e => setFilters({ ...filters, color: e.target.value })}
          value={filters.color}>
          <option value="">Todos</option>
          {
              colores.map((prenda, index) => (
                  <option key={index} value={prenda}>{prenda}</option>
              ))
          }
        </select>
      </div>
      <div className='filter-options'>
        <h4>Temporada</h4>
        <select onChange={e => setFilters({ ...filters, season: e.target.value })}
          value={filters.season}>
        <option value="">Todas</option>
          {
              temporadas.map((prenda, index) => (
                  <option key={index} value={prenda}>{prenda}</option>
              ))
          }
        </select>
      </div>
      <div className='filter-options'>
        <h4>Estilo</h4>
        <select onChange={e => setFilters({ ...filters, style: e.target.value })}
          value={filters.style}>
          <option value="">Todos</option>
          {
              estilos.map((prenda, index) => (
                  <option key={index} value={prenda}>{prenda}</option>
              ))
          }
        </select>
      </div>
      <button className="button reset-button bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
        onClick={resetFilters}
        >Reiniciar Filtros</button>

      {/* <button className="button hover-button mt-4 bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
        onClick={resetFilters}
        >Reconocimiento facial</button> */}
        <Reconocimiento setGender={(gender) => setFilters({ ...filters, gender })}/>
    </div>
  );
};

FilterPanel.propTypes = {
  filters: PropTypes.shape({
    color: PropTypes.string,
    season: PropTypes.string,
    gender: PropTypes.string,
    style: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  setFilters: PropTypes.func.isRequired,
};


const ClothingGrid = () => {
  const [filters, setFilters] = useState({
    color: '',
    season: '',
    gender: '',
    style: '',
    type: '',
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
      (!filters.type || item.type === filters.type) &&
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
              <h4 className='text-indigo-600 font-bold'>{item.name}</h4>
              <p>Tipo: {item.type}</p>
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
