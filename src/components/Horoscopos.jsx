import React, { useState } from 'react';
import Horoscopo from './horoscopo';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const horoscopos = [
    {
      signo: 'Aries',
      fecha: '21 de marzo - 19 de abril',
      imagen: 'https://en.astroloq.com/images/astro/Aries.png',
      descripcion: 'Aries es el primer signo del zodíaco y se asocia con el carnero. Las personas nacidas bajo este signo son conocidas por su valentía y energía. Son líderes naturales y están llenas de entusiasmo.'
    },
    {
      signo: 'Tauro',
      fecha: '20 de abril - 20 de mayo',
      imagen: 'https://pngimg.com/uploads/taurus/taurus_PNG21.png',
      descripcion: 'Tauro es el segundo signo del zodíaco y se asocia con el toro. Las personas nacidas bajo este signo son conocidas por su determinación y lealtad. Son amantes de la belleza y disfrutan de la comodidad.'
    },
    {
      signo: 'Géminis',
      fecha: '21 de mayo - 20 de junio',
      imagen: 'https://th.bing.com/th/id/R.a74d4f8daa2d12845f3505a0038cab62?rik=CSZv1Ib3MngZ7w&pid=ImgRaw&r=0',
      descripcion: 'Géminis es el tercer signo del zodíaco y se asocia con los gemelos. Las personas nacidas bajo este signo son conocidas por su versatilidad y curiosidad. Son comunicativos y tienen una mente ágil.'
    },
    {
      signo: 'Cáncer',
      fecha: '21 de junio - 22 de julio',
      imagen: 'https://cdn.pixabay.com/photo/2017/07/29/13/07/cancer-2551431_1280.png',
      descripcion: 'Cáncer es el cuarto signo del zodíaco y se asocia con el cangrejo. Las personas nacidas bajo este signo son conocidas por su sensibilidad y protección. Son emocionales y tienen un fuerte sentido de la familia.'
    },
    {
      signo: 'Leo',
      fecha: '23 de julio - 22 de agosto',
      imagen: 'https://th.bing.com/th/id/R.9095c0e909056f01f4975f053d3848d3?rik=9q%2buC9DwnziWUg&pid=ImgRaw&r=0',
      descripcion: 'Leo es el quinto signo del zodíaco y se asocia con el león. Las personas nacidas bajo este signo son conocidas por su carisma y liderazgo. Son generosos y aman estar en el centro de atención.'
    },
    {
      signo: 'Virgo',
      fecha: '23 de agosto - 22 de septiembre',
      imagen: 'https://th.bing.com/th/id/R.f7b0dc21846654be32725518a8fda248?rik=I3NVYz%2f%2bJI%2bv8Q&pid=ImgRaw&r=0',
      descripcion: 'Virgo es el sexto signo del zodíaco y se asocia con la virgen. Las personas nacidas bajo este signo son conocidas por su perfeccionismo y organización. Son analíticas y trabajadoras.'
    },
    {
      signo: 'Libra',
      fecha: '23 de septiembre - 22 de octubre',
      imagen: 'https://en.astroloq.com/images/astro/Libra.png',
      descripcion: 'Libra es el séptimo signo del zodíaco y se asocia con la balanza. Las personas nacidas bajo este signo son conocidas por su equilibrio y amor por la justicia. Son sociables y disfrutan de la armonía.'
    },
    {
      signo: 'Escorpio',
      fecha: '23 de octubre - 21 de noviembre',
      imagen: 'https://th.bing.com/th/id/R.dbc51da43b5839feb6b99188b7d162fd?rik=VaJVqRTxRgoHmw&pid=ImgRaw&r=0',
      descripcion: 'Escorpio es el octavo signo del zodíaco y se asocia con el escorpión. Las personas nacidas bajo este signo son conocidas por su intensidad y pasión. Son misteriosas y tienen una gran determinación.'
    },
    {
      signo: 'Sagitario',
      fecha: '22 de noviembre - 21 de diciembre',
      imagen: 'https://th.bing.com/th/id/R.34d1c836cffd2c26c85422d7b1387ba5?rik=5zBKqDtMJA0Diw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fsagittarius%2fsagittarius_PNG69.png&ehk=LKNB44GgYy%2fuFTSjLadZld3vP1hUsmc%2f9Y%2fSJMuhs4s%3d&risl=&pid=ImgRaw&r=0',
      descripcion: 'Sagitario es el noveno signo del zodíaco y se asocia con el arquero. Las personas nacidas bajo este signo son conocidas por su espíritu aventurero y optimismo. Son amantes de la libertad y la exploración.'
    },
    {
      signo: 'Capricornio',
      fecha: '22 de diciembre - 19 de enero',
      imagen: 'https://pngimg.com/uploads/capricorn/capricorn_PNG28.png',
      descripcion: 'Capricornio es el décimo signo del zodíaco y se asocia con la cabra. Las personas nacidas bajo este signo son conocidas por su ambición y determinación. Son responsables y trabajadoras.'
    },
    {
      signo: 'Acuario',
      fecha: '20 de enero - 18 de febrero',
      imagen: 'https://th.bing.com/th/id/R.9b86f69b9ad3ff70e6d885a8539dcd78?rik=wnJ86LOnXhtSbA&pid=ImgRaw&r=0',
      descripcion: 'Acuario es el undécimo signo del zodíaco y se asocia con el aguador. Las personas nacidas bajo este signo son conocidas por su originalidad y humanitarismo. Son inventivas y tienen una mente abierta.'
    },
    {
      signo: 'Piscis',
      fecha: '19 de febrero - 20 de marzo',
      imagen: 'https://pngimg.com/uploads/pisces/pisces_PNG49.png',
      descripcion: 'Piscis es el duodécimo signo del zodíaco y se asocia con los peces. Las personas nacidas bajo este signo son conocidas por su intuición y empatía. Son soñadoras y espirituales.'
    },
  ];
  

  function calcularSigno(fechaNacimiento) {
    const FechaNacimiento = new Date(fechaNacimiento);
    const dia = FechaNacimiento.getDate();
    const mes = FechaNacimiento.getMonth() + 1;
  
    switch (mes) {
      case 3:
        return dia >= 21 ? 'Aries' : 'Piscis';
      case 4:
        return dia >= 20 ? 'Tauro' : 'Aries';
      case 5:
        return dia >= 21 ? 'Géminis' : 'Tauro';
      case 6:
        return dia >= 21 ? 'Cáncer' : 'Géminis';
      case 7:
        return dia >= 23 ? 'Leo' : 'Cáncer';
      case 8:
        return dia >= 23 ? 'Virgo' : 'Leo';
      case 9:
        return dia >= 23 ? 'Libra' : 'Virgo';
      case 10:
        return dia >= 23 ? 'Escorpio' : 'Libra';
      case 11:
        return dia >= 22 ? 'Sagitario' : 'Escorpio';
      case 12:
        return dia >= 22 ? 'Capricornio' : 'Sagitario';
      case 1:
        return dia >= 20 ? 'Acuario' : 'Capricornio';
      case 2:
        return dia >= 19 ? 'Piscis' : 'Acuario';
      default:
        return null;
    }
  }
  
  

  function Horoscopos() {
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [selectedSigno, setSelectedSigno] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const signo = calcularSigno(fechaNacimiento);
      setSelectedSigno(signo);
    };
  
    return (
      <div className="horoscopo-list container">
        <form onSubmit={handleSubmit} className='mb-3'>
            <label style={{ color: 'white' }}>
              Ingrese su fecha de nacimiento:
              <input
                type="date"
                value={fechaNacimiento}
                onChange={(e) => setFechaNacimiento(e.target.value)}
              />
            </label>
            <button type="submit" className='btn btn-primary'>Obtener Horóscopo</button>
        </form>
        {selectedSigno && (
          <Horoscopo
            signo={selectedSigno}
            fecha={horoscopos.find((h) => h.signo === selectedSigno).fecha}
            imagen={horoscopos.find((h) => h.signo === selectedSigno).imagen}
            descripcion={horoscopos.find((h) => h.signo === selectedSigno).descripcion}
          />
        )}
      </div>
    );
  }

export default Horoscopos;
