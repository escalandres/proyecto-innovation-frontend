import { useState } from 'react';
import { alerta, showLoader, hideLoader } from './js/general';

const prendas = ['Camisa', 'Pantalones', 'Vestido', 'Falda', 'Chamarra', 'Abrigo', 'Suéter', 'Blazer', 'Camiseta', 'Shorts', 'Bermudas', 'Blusa', 'Traje de baño'];

const colores = [
    'Rojo','Azul','Verde','Amarillo','Blanco','Negro','Gris','Beige','Café','Morado','Rosa'
];

const estilos = [
    'Casual', 'Formal', 'Deportivo', 'Juvenil'
];

const temporadas = ['Verano', 'Invierno'];

const sexos = ['Hombre', 'Mujer'];








const AgregarPrendas = () => {
    document.title = 'Agregar prenda';
        const [prenda, setPrenda] = useState('');
        const [sexo, setSexo] = useState('');
        const [color, setColor] = useState('');
        const [estilo, setEstilo] = useState('');
        const [temporada, setTemporada] = useState('');
        const [img, setImg] = useState('');
        const [nombre, setNombre] = useState('');
    
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            try {
                showLoader();
                const payload = {
                    name: nombre, color: color, season: temporada, gender: sexo, style: estilo, type:prenda, img: `/assets/${img.trim()}`
                }
                // Simulación de la solicitud de autenticación al servidor
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/app/prenda`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({item: payload}),
                });
                hideLoader();
                // console.log(response);
                if (!response.ok) {
                    alerta.error('Ocurrió un error al registrar la prenda. Por favor, inténtalo de nuevo.');
                }
                else{
                    const data = await response.json();
                    console.log(data);
                    console.log(response);
                    alerta.autoSuccess('Prenda registrada correctamente.');
                    setTimeout(() => {
                        window.location.reload();
                    }, 2500);
                }
            } catch (error) {
                hideLoader();
                console.log('error', error.message);
            }
        };
    
        return (
            <>
            <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-10 dark:bg-gray-50 sm:px-4 py-4">
                <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                    <div className="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
                        <div className="text-center">
                            <a href="/">
                                <img src="/icons/tiendas.png" alt="Cosmos" width={80} className="mx-auto" />
                            </a>
                            <div className="mt-5 space-y-2">
                                <h3 className="text-gray-800 text-2xl font-bold sm:text-2xl">Registrar prenda</h3>
                                {/* <p className="">¿No tienes una cuenta? <a href="/registro" className="font-medium text-indigo-600 hover:text-indigo-500">Regístrate gratis</a></p> */}
                            </div>
                        </div>
                        <div className="relative">
                            <span className="block w-full h-px bg-gray-300"></span>
                            {/* <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">O continua con</p> */}
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <fieldset className="Fieldset relative text-left">
                                    <label htmlFor="prendas" className="block mb-2 text-sm font-medium dark:text-gray-900 text-white">Prenda</label>
                                    <select id="prendas" className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 text-sm rounded-lg dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 "
                                        onChange={(e) => setPrenda(e.target.value)}
                                    >
                                        <option value="">Seleccione una prenda</option>
                                        {
                                            prendas.map((prenda, index) => (
                                                <option key={index} value={prenda}>{prenda}</option>
                                            ))
                                        }
                                    </select>
                                </fieldset>
                                <fieldset className="Fieldset relative text-left">
                                    <label htmlFor="sexo" className="block mb-2 text-sm font-medium dark:text-gray-900 text-white">Sexo</label>
                                    <select id="sexo" className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 text-sm rounded-lg dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 "
                                        onChange={(e) => setSexo(e.target.value)}
                                    >
                                        <option value="">Seleccione un sexo</option> 
                                        {   sexos.map((service, index) => ( 
                                                <option key={index} value={service}> {service} </option> 
                                            ))
                                        }
                                    </select>
                                </fieldset>
                            </div>
                            <div className="flex items-center gap-4 mb-2 mt-4">
                                <fieldset className="Fieldset relative text-left">
                                    <label htmlFor="colores" className="block mb-2 text-sm font-medium dark:text-gray-900 text-white">Color</label>
                                    <select id="colores" className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 text-sm rounded-lg dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 "
                                        onChange={(e) => setColor(e.target.value)}
                                    >
                                        <option value="">Seleccione un color</option>
                                        {
                                            colores.map((color, index) => (
                                                <option key={index} value={color}>{color}</option>
                                            ))
                                        }
                                    </select>
                                </fieldset>
                                <fieldset className="Fieldset relative text-left">
                                    <label htmlFor="estilos" className="block mb-2 text-sm font-medium dark:text-gray-900 text-white">Estilo</label>
                                    <select id="estilos" className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 text-sm rounded-lg dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 "
                                        onChange={(e) => setEstilo(e.target.value)}
                                    >
                                        <option value="">Seleccione un estilo</option>
                                        {
                                            estilos && estilos.length > 0 && estilos.map((estilo, index) => (
                                                <option key={index} value={estilo}>{estilo}</option>
                                            ))
                                        }
                                    </select>
                                </fieldset>
                                <fieldset className="Fieldset relative text-left">
                                    <label htmlFor="temporada" className="block mb-2 text-sm font-medium dark:text-gray-900 text-white">Temporada</label>
                                    <select id="temporada" className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 text-sm rounded-lg dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 "
                                        onChange={(e) => setTemporada(e.target.value)}
                                    >
                                        <option value="">Seleccione una temporada</option> 
                                        {   temporadas.map((temporada, index) => ( 
                                                <option key={index} value={temporada}> {temporada} </option> 
                                            ))
                                        }
                                    </select>
                                </fieldset>
                            </div>
                            <div className="text-left mt-4">
                                <label className="font-medium">
                                    Nombre de la prenda
                                </label>
                                <input
                                    type="text"
                                    value={nombre}
                                    placeholder='Escribe el nombre de la prenda'
                                    onChange={(e) => setNombre(e.target.value)} 
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div className="text-left mt-4">
                                <label className="font-medium">
                                    Nombre de la imagen
                                </label>
                                <input
                                    type="text"
                                    value={img}
                                    placeholder='Escribe el nombre de la imagen'
                                    onChange={(e) => setImg(e.target.value)} 
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <button
                                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                                type="submit"
                            >
                                Registrar prenda
                            </button>
                        </form>
                        {/* <div className="text-center">
                            <a href="/recuperacion" className="hover:text-indigo-600">¿Olvidaste tu contraseña?</a>
                        </div> */}
                    </div>
                </div>
            </main>
            </>
        )

}



export default AgregarPrendas;