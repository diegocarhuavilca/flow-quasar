export interface informacion {
  titulo: string;
  contenido: string;
  imagen: string;
}

export const informaciones: informacion[] = [
  {
    titulo: '¿Soporte y Atención al Cliente?',
    contenido:
      'Estamos siempre disponibles, cada vez que necesites algo, contáctanos y te ayudaremos. Llama o escribe al Whatsapp 017401740, estamos para atender tus inquietudes.',
    imagen: '/information/soporte.png',
  },
  {
    titulo: 'Máxima Velocidad',
    contenido:
      'Disfruta de la máxima velocidad en fibra óptica y siempre con el mejor precio posible. Olvídate de quedarte sin internet, navega, comparte, juega online, mira tus videos sin interrupciones.',
    imagen: '/information/velocidad.webp',
  },
  {
    titulo: 'Instalación Inmediata',
    contenido:
      'Te enviamos e instalamos el Router en el horario que mejor te convenga. Nuestros técnicos instaladores cumplen con todos los Protocolos de Instalación Covid-19. Quédate tranquilo.',
    imagen: '/information/instalacion.webp',
  },
];
