import { Category } from '../types';
import { cloudinaryPhotos } from './cloudinaryPhotos';

const rawDefaultCategories: Category[] = [
  {
    id: '2025-koyna-dam-satara',
    state: 'mh',
    title: 'Koyna Dam, Satara',
    type: 'travel',
    coverUrl: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/w_200,h_200,c_fill,f_auto,q_auto/v1783541679/_DSC0043_zmq2jv.jpg',
    location: 'Maharashtra, India',
    dateRange: 'Monsoon 2025',
    description: `In 2025, the monsoon arrived in the Western Ghats much earlier than usual. By the first week of May, dark rain clouds had begun to blanket the skies of Maharashtra. Typically, the monsoon makes its grand entrance in early June, but this year nature had different plans. The early showers gifted us a few extra weekends to experience the magic of the Sahyadri mountains at their lush, rain-soaked best.

Our destination was the majestic Koyna Dam, one of India's largest hydroelectric projects, built across the Koyna River. Stretching nearly 50 kilometers, the vast Shivsagar Lake forms its serene backwaters, creating a landscape that feels both immense and tranquil.

We stayed at a private property near the Maharashtra Tourism lodge, blessed with a beautiful balcony overlooking the Koyna Dam. The entire region appears to have been carved out of dense evergreen forests, offering uninterrupted panoramic views in every direction. Throughout the day, drifting clouds cast moving shadows across the still waters, constantly transforming the scenery. At times, thick mist rolled into the valley, enveloping everything around us. Standing on the balcony, feeling the cool, gentle touch of the clouds against our faces, we realized that this was more than just a destination—it was an experience that captured the true essence of the Western Ghats during the monsoon.
`,
    photos: (cloudinaryPhotos['2025'] && cloudinaryPhotos['2025']['koyna-dam-satara']) || []
  },
  {
    id: '2024-benapur-west-bengal',
    state: 'wb',
    title: 'Char Benapur, India',
    type: 'travel',
    coverUrl: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/w_200,h_200,c_fill,f_auto,q_auto/v1783539250/_DSC7212_03_vx236n.jpg',
    location: 'West Bengal, India',
    dateRange: 'Monsoon 2024',
    description: `A quiet journey through the ancient heart of Japan. Kyoto is a sanctuary where wood, moss, and stone tell stories centuries older than the concrete giants of Tokyo. 
This photo essay captures the silent dialogue between architecture and nature. We walked through Fushimi Inari-taisha at five in the morning, before the orange corridors were filled with voices, hearing only the distant cry of crows and the crunch of gravel beneath our boots. In Arashiyama, the bamboo stalks whispered as they swayed, filter-feeding the dawn light into stripes of vibrant emerald.
Every tea house in Gion is a masterclass in shadows. The sliding paper shoji doors soften the afternoon sun, casting long, peaceful gradients across tatami mats. Through these photographs, I sought to capture "Yūgen"—a profound, mysterious grace, and "Wabi-Sabi"—the beautiful imperfection of weathered wooden facades, fallen autumn maple leaves on dark stone basins, and steam rising from a single bowl of hand-whisked matcha.`,
    photos: (cloudinaryPhotos['2024'] && cloudinaryPhotos['2024']['benapur-west-bengal']) || []
  },
  {
    id: '2025-west-sikkim',
    state: 'sk',
    title: 'West Sikkim, India',
    type: 'travel',
    coverUrl: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/w_200,h_200,c_fill,f_auto,q_auto/v1782755158/_DSC2768_mgci8d.jpg',
    location: 'West Sikkim, India',
    dateRange: 'Winter 2025',
    description: `A quiet journey through the ancient heart of Japan. Kyoto is a sanctuary where wood, moss, and stone tell stories centuries older than the concrete giants of Tokyo. 
This photo essay captures the silent dialogue between architecture and nature. We walked through Fushimi Inari-taisha at five in the morning, before the orange corridors were filled with voices, hearing only the distant cry of crows and the crunch of gravel beneath our boots. In Arashiyama, the bamboo stalks whispered as they swayed, filter-feeding the dawn light into stripes of vibrant emerald.
Every tea house in Gion is a masterclass in shadows. The sliding paper shoji doors soften the afternoon sun, casting long, peaceful gradients across tatami mats. Through these photographs, I sought to capture "Yūgen"—a profound, mysterious grace, and "Wabi-Sabi"—the beautiful imperfection of weathered wooden facades, fallen autumn maple leaves on dark stone basins, and steam rising from a single bowl of hand-whisked matcha.`,
    photos: (cloudinaryPhotos['2025'] && cloudinaryPhotos['2025']['west-sikkim']) || []
  },
  {
    id: '2025-bangriposhi',
    state: 'or',
    title: 'Bangriposhi: The Village That Inspired a Classic Bengali Romance',
    type: 'travel',
    coverUrl: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/w_200,h_200,c_fill,f_auto,q_auto/v1783449096/_DSC9234_yohl0f.jpg',
    location: 'Odisha, India',
    dateRange: 'Spring 2025',
    description: `Spring drew me to Bangriposhi, a quiet village in **Odisha** where nature still sets the rhythm of life. Though not always on the tourist map, Bangriposhi gained recognition after renowned Bengali writer Buddhadeb Guha immortalized it in his romantic novel *Bangriposhir Du Ratti*. Ever since, the village has held a special place in the hearts of many readers and travelers.

Nestled on the banks of the Budhabalanga River (known as the Buribalam in Bengali), Bangriposhi may no longer have the dense forests that once defined its landscape, but it continues to offer a peaceful escape surrounded by nature. Its simplicity, open skies, and tranquil atmosphere make it one of the most refreshing destinations in Odisha for anyone looking to slow down and reconnect with the outdoors.

We visited during spring, when the vibrant scarlet blossoms of the shimul and palash trees painted the landscape, while many other trees stood bare, having shed their leaves. The contrast of fiery blooms against the earthy tones of the forest created a scene that was both dramatic and beautiful.

If you're looking to unwind far from the hustle and bustle of city life, Bangriposhi is an ideal place to spend a few quiet days. And while you're there, don't miss a visit to the nearby village of Kuliyana, renowned for its exquisite Dokra metal craft. Watching skilled artisans create these timeless works of art offers a wonderful glimpse into the region's rich cultural heritage, making the journey even more memorable.
`,
    photos: (cloudinaryPhotos['2025'] && cloudinaryPhotos['2025']['bangriposhi']) || []
  },

];

export const defaultCategories: Category[] = rawDefaultCategories.map(cat => ({
  ...cat,
  photos: cat.photos.map(p => ({
    ...p,
    tag: p.tag || 'General'
  }))
}));
