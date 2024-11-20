import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const profileData = {
  name: 'Jihad',
  title: 'Full Stack Developer',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop', // Replace with a specific Unsplash image URL
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Done', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Awards', value: '5' },
  ],
  contactInfo: [
    {
      label: 'Phone',
      value: '+880 1303-417316',
      icon: FaPhone,
    },
    {
      label: 'Email',
      value: 'jihad.developer.bd@gmail.com',
      icon: FaEnvelope,
    },
    {
      label: 'Location',
      value: 'Lakshmipur, Bangladesh',
      icon: FaMapMarkerAlt,
    },
  ],
}; 