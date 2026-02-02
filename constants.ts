import { EventDetails, Gift, TimelineItem } from './types';

// Generated Google Calendar Link for April 18, 2025 (Assuming upcoming year) 18:30 - 02:00
const GOOGLE_CALENDAR_LINK = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Casamento+Karla+%26+Davi&dates=20250418T183000/20250419T020000&details=Vamos+celebrar+nossa+uni%C3%A3o+com+muito+amor%2C+m%C3%BAsica+e+alegria.&location=A+Capela+Eventos%2C+Manaus+-+AM";

export const WEDDING_EVENT: EventDetails = {
  title: "A Cerimônia & Recepção",
  date: "18 de Abril",
  time: "18:30",
  location: "A Capela Eventos",
  address: "R. Várzea, 155 - Flores, Manaus - AM",
  description: "Celebração solene seguida de festa.",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.124544506347!2d-60.005862099999995!3d-3.0613495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1ba47e96948d%3A0x7f60ada72f0c79e1!2sA%20Capela%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1770038757126!5m2!1spt-BR!2sbr",
  googleCalendarLink: GOOGLE_CALENDAR_LINK
};

export const WELCOME_EVENT: EventDetails = {
  title: "Welcome Drinks",
  date: "17 de Abril",
  time: "11:00",
  location: "Local a definir",
  address: "Manaus, AM",
  description: "Um brinde de boas-vindas para começarmos as comemorações.",
};

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    title: "Welcome Drinks",
    date: "17 de Abril",
    time: "11:00",
    location: "Local a definir",
    description: "Um brinde especial para recepcionar nossos convidados.",
    icon: 'Glass'
  },
  {
    title: "A Cerimônia",
    date: "18 de Abril",
    time: "18:30",
    location: "A Capela Eventos",
    description: "A celebração do nosso amor.",
    icon: 'Ring'
  },
  {
    title: "A Recepção",
    date: "18 de Abril",
    time: "Logo após",
    location: "A Capela Eventos",
    description: "Jantar e festa para comemorarmos juntos.",
    icon: 'Music'
  }
];

export const GIFTS: Gift[] = [
  {
    id: '1',
    name: 'Um brinde aos noivos (Drinks)',
    price: 'R$ 50,00',
    category: 'Experience',
    iconName: 'Wine',
    link: 'https://pay.kirvano.com/855a0677-1fb3-4a6a-bcdf-99145ea48f85'
  },
  {
    id: '2',
    name: 'Petiscos para o fim de semana',
    price: 'R$ 60,00',
    category: 'Home',
    iconName: 'Utensils',
    link: 'https://pay.kirvano.com/790e4747-f997-4854-879b-3a7d4c23514f'
  },
  {
    id: '3',
    name: 'Churrasco de domingo',
    price: 'R$ 70,00',
    category: 'Home',
    iconName: 'Utensils',
    link: 'https://pay.kirvano.com/26db3a5a-84ca-49f8-8cbf-157a1a027111'
  },
  {
    id: '4',
    name: 'Café da manhã especial',
    price: 'R$ 80,00',
    category: 'Experience',
    iconName: 'Coffee',
    link: 'https://pay.kirvano.com/52446073-9c8b-449c-8055-5149e3d11d86'
  },
  {
    id: '5',
    name: 'Reserva de Charutos do Davi',
    price: 'R$ 100,00',
    category: 'Experience',
    iconName: 'Flame',
    link: 'https://pay.kirvano.com/7650de48-def2-4f1d-9665-ed4ac04af6f5'
  },
  {
    id: '6',
    name: 'Manicure e beleza da Karla',
    price: 'R$ 120,00',
    category: 'Experience',
    iconName: 'Sparkles',
    link: 'https://pay.kirvano.com/0eef7acf-3861-4ef7-9c21-ad5067381e24'
  },
  {
    id: '7',
    name: 'Vinho especial para o jantar',
    price: 'R$ 150,00',
    category: 'Experience',
    iconName: 'Wine',
    link: 'https://pay.kirvano.com/3e933e48-32bb-4211-8118-b95b5cc268b1'
  },
  {
    id: '8',
    name: 'Massagem relaxante para o casal',
    price: 'R$ 180,00',
    category: 'Honeymoon',
    iconName: 'Sparkles',
    link: 'https://pay.kirvano.com/31c10078-7f53-469b-9849-8d790e8b7c1b'
  },
  {
    id: '9',
    name: 'Jantar no restaurante favorito',
    price: 'R$ 200,00',
    category: 'Honeymoon',
    iconName: 'Utensils',
    link: 'https://pay.kirvano.com/87b19895-d2aa-43dc-b8ae-c2d1770885c6'
  },
  {
    id: '10',
    name: 'Vale "Dia de Folga"',
    price: 'R$ 250,00',
    category: 'Home',
    iconName: 'Sun',
    link: 'https://pay.kirvano.com/3fb26877-c4ee-41a4-a220-6c485b49c5e0'
  }
];

export const GODMOTHERS = [
  "Gisella Crispim",
  "Sintia Assis",
  "Camila Noronha",
  "Cristiane Cristovam",
  "Layse Cruz",
  "Marlene Dantas",
  "Priscila Magalhães",
  "Mariana Gentil",
  "Malu Caiuby",
  "Maressa Barroso",
  "Julia Felipe",
  "Beatriz Konasugawa"
];

export const GODFATHERS = [
  "Leonidas Souza",
  "Paulo Filgueiras",
  "Ricardo Siara",
  "Leandro Cristovam",
  "Karllus Cruz",
  "Ivan Dantas",
  "Victor Capobiango",
  "Bruno Gentil",
  "Davi Silva",
  "Favilla Gentil",
  "Favilla Gentil Neto",
  "Julio Yukio Konasugawa"
];