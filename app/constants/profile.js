import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const profileData = {
  name: 'Jihad',
  title: 'Full Stack Developer',
  image: 'https://plus.unsplash.com/premium_photo-1666299356306-b65a7dd95dae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
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