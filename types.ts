export interface Gift {
  id: string;
  name: string;
  price: string; // Display string like "R$ 150,00"
  iconName: string;
  category: 'Kitchen' | 'Home' | 'Honeymoon' | 'Experience';
  link?: string;
}

export interface Godparent {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface EventDetails {
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  description: string;
  mapUrl?: string;
  googleCalendarLink?: string;
}

export interface TimelineItem {
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
  icon?: 'Glass' | 'Ring' | 'Music';
}