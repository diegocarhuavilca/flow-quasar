export interface contacto {
  titulo: string;
  informacion: string;
  icon: string;
}

export const direccion = 'Ernesto Diez Canseco 236, ofic. 403, Miraflores';
export const atencion =
  'De lunes a viernes de 9:00 a 17:30 y sábados de 9:00 a 13:00';
export const mensajeCovid =
  'Debido a la emergencia Sanitaria estamos atendiendo de manera remota desde nuestros hogares. Puede contactarnos a nuestra central telefónica (51) 1740-1740';

export const testVelocidad = 'https://www.speedtest.net/'

export const contactos: contacto[] = [
  {
    titulo: 'direccion',
    informacion: 'Ernesto Diez Canseco 236, ofic. 403, Miraflores',
    icon: 'location_on',
  },
  {
    titulo: 'telefono',
    informacion: '+51 1740 1740',
    icon: 'phone',
  },
  {
    titulo: 'email',
    informacion: 'contacto@flow.pe',
    icon: 'email',
  },
];
