import '../css/Header.css';

const Header = () => {
    return (
        <header className="header--box-shadow bg-white border-gray-200">
            {/* <nav className="bg-white border-gray-200 dark:bg-gray-900"> */}
            <nav className="">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                        <span id="eliptica-logo" className="self-center text-4xl font-semibold whitespace-nowrap">Eliptica</span>
                    </a>
                    <div className="flex md:order-1 w-[3/4]">
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Busca tus prendas</span>
                        </button>
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Busca tus prendas..." />
                        </div>
                    </div>
                    <div className="flex md:order-2">
                        
                        <div className="flex items-center space-x-6 rtl:space-x-reverse">
                            <a href="#" className="text-gray-500 hover:text-gray-900">
                                <i className="fa-regular fa-heart "></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900">
                                <i className="fa-solid fa-bag-shopping "></i>
                            </a>
                            <a href="#" className="button bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                                Inicia sesión
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center justify-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="#" className="text-gray-900 hover:underline" aria-current="page">
                                    <i className="fa-solid fa-bars mr-3"></i>Categorías
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 hover:underline" aria-current="page">Nuevos Productos</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 hover:underline">Más vendido</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 hover:underline">FAQ</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 hover:underline">Sobre nosotros</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 hover:underline">Contáctanos</a>
                            </li>
                            <li>
                                <a href="/prendas" className="text-gray-900 hover:underline">Agregar prendas</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );

}

export default Header;