import { Category } from '../types';
import { cloudinaryPhotos } from './cloudinaryPhotos';

const rawDefaultCategories: Category[] = [
  {
    id: '2025-west-sikkim',
    state: 'sk',
    title: 'West Sikkim, India',
    type: 'travel',
    coverUrl: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1782755158/_DSC2768_mgci8d.jpg',
    location: 'West Sikkim, India',
    dateRange: 'Winter 2025',
    description: `A quiet journey through the ancient heart of Japan. Kyoto is a sanctuary where wood, moss, and stone tell stories centuries older than the concrete giants of Tokyo. 
This photo essay captures the silent dialogue between architecture and nature. We walked through Fushimi Inari-taisha at five in the morning, before the orange corridors were filled with voices, hearing only the distant cry of crows and the crunch of gravel beneath our boots. In Arashiyama, the bamboo stalks whispered as they swayed, filter-feeding the dawn light into stripes of vibrant emerald.
Every tea house in Gion is a masterclass in shadows. The sliding paper shoji doors soften the afternoon sun, casting long, peaceful gradients across tatami mats. Through these photographs, I sought to capture "Yūgen"—a profound, mysterious grace, and "Wabi-Sabi"—the beautiful imperfection of weathered wooden facades, fallen autumn maple leaves on dark stone basins, and steam rising from a single bowl of hand-whisked matcha.`,
    photos: (cloudinaryPhotos['2025'] && cloudinaryPhotos['2025']['west-sikkim']) || []
  }
];

export const defaultCategories: Category[] = rawDefaultCategories.map(cat => ({
  ...cat,
  photos: cat.photos.map(p => {
    let tag = 'General';
    const title = p.title.toLowerCase();
    
    if (cat.id === 'kyoto-japan' || cat.id === '2025-west-sikkim') {
      if (title.includes('pavilion') || title.includes('pagoda') || title.includes('temple')) {
        tag = 'Architecture';
      } else if (title.includes('bamboo') || title.includes('forest') || title.includes('park') || title.includes('blossom') || title.includes('garden')) {
        tag = 'Nature';
      } else if (title.includes('lantern') || title.includes('gion') || title.includes('street')) {
        tag = 'Street';
      } else {
        tag = 'Culture';
      }
    } else if (cat.id === 'swiss-alps') {
      if (title.includes('lake') || title.includes('stream') || title.includes('water')) {
        tag = 'Water';
      } else if (title.includes('cabin') || title.includes('chalet') || title.includes('village') || title.includes('railway') || title.includes('station')) {
        tag = 'Architecture';
      } else if (title.includes('glacier') || title.includes('cave') || title.includes('ice')) {
        tag = 'Glacier';
      } else if (title.includes('star') || title.includes('canopy') || title.includes('night') || title.includes('twilight')) {
        tag = 'Astrophotography';
      } else {
        tag = 'Landscape';
      }
    }
    
    return {
      ...p,
      tag
    };
  })
}));
