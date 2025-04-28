import { useState, useRef, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import PropTypes from 'prop-types';
import TakePhoto from "./TakePhoto";

const Reconocimiento = ({ setGender }) => {
    const [open, setOpen] = useState(false); // estado para controlar apertura/cierre del modal

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const downloadLinkRef = useRef(null);

    useEffect(() => {
        const getVideo = async () => {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
        };
        getVideo();
    }, []);

    const takePhoto = async () => {
        showLoader();
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL('image/png');

        // downloadLinkRef.current.href = dataURL;
        // downloadLinkRef.current.download = 'foto.png';
        // downloadLinkRef.current.style.display = 'block';
        // downloadLinkRef.current.innerText = 'Descargar Foto';

        // Convertir a Blob para enviar al servidor
        const blob = await fetch(dataURL).then(res => res.blob());
        const formData = new FormData();
        formData.append('imagen', blob, 'foto.png');
 
        // Enviar la imagen al servidor
        let response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/app/algoritmo`, {
            method: 'POST',
            body: formData,
        });
        hideLoader();
        // console.log(response);
        if (!response.ok) {
            alerta.error('Ocurrió un error al registrar la prenda. Por favor, inténtalo de nuevo.');
        }
        else{
            const data = await response.json();
            console.log(data);
            alerta.autoSuccess('¡Buscando recomendaciones para ti!','Recomendando...');
            
            let _gender = data.message.genero === 'Male' ? 'Hombre' : 'Mujer';
            alerta.autoSuccess(_gender)
            setGender(_gender)
            setOpen(false);
            // setTimeout(() => {
            //     window.location.reload();
            // }, 2500);
        }
        // console.log('Respuesta del servidor:', data);
        // console.log(data.message);
        // let jsonData = JSON.stringify(data.message);
        // console.log(jsonData);
        // alerta.success(jsonData,'Foto enviada correctamente.');

        
    };

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <button className="mt-4 hover-button px-4 py-2 font-medium text-white border-[#4f46e5] hover:bg-indigo-500 hover:text-white active:bg-indigo-600 rounded-lg duration-150"
                onClick={() => setOpen(true)}
                >
                    {/* <i className="fa-solid fa-play me-2"></i> */}
                    Usar Reconocimiento
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 w-full h-full bg-black opacity-40" />
                <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4">
                    <div className="bg-white rounded-md shadow-lg px-4 py-6">
                        <div className="flex items-center justify-end">
                            <Dialog.Close className="p-2 text-gray-400 rounded-md hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Dialog.Close>
                        </div>
                        <div className="max-w-sm mx-auto space-y-3 text-center">
                            <TakePhoto setCloseModal={() => setOpen(false)} setGender={setGender} />
                            {/* <div className='container mx-auto flex flex-col items-center justify-center'>
                                <h2>Captura de Foto</h2>
                                <video ref={videoRef} width="640" height="480" autoPlay></video>
                                <button className="button reset-button bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                                    onClick={takePhoto}>Tomar Foto</button>
                                <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }}></canvas>
                                <a className="button hover-button mt-4 bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center" 
                                    ref={downloadLinkRef} style={{ display: 'none' }}>Descargar Foto</a>
                            </div> */}
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

Reconocimiento.propTypes = {
    containers: PropTypes.array,
    companies: PropTypes.array,
};

export default Reconocimiento;
