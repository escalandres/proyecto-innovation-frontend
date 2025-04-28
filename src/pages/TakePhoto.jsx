import { useEffect, useRef } from 'react';
import { showLoader, hideLoader, alerta } from './js/general';
import './css/clothing.css';

function TakePhoto() {
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
            alerta.success(JSON.stringify(data.message),'Prenda registrada correctamente.');
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
        <div className='container mx-auto flex flex-col items-center justify-center h-screen'>
            <h1>Captura de Foto</h1>
            <video ref={videoRef} width="640" height="480" autoPlay></video>
            <button className="button reset-button bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                onClick={takePhoto}>Tomar Foto</button>
            <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }}></canvas>
            <a className="button hover-button mt-4 bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center" 
                ref={downloadLinkRef} style={{ display: 'none' }}>Descargar Foto</a>
        </div>
    );
}

export default TakePhoto;
