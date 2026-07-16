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
    description: `Some things in life are destined to break.

Dreams shatter. Relationships fall apart. Sometimes, it is the heart that bears the deepest cracks. Trust fades. Homes disappear. For many, even the comfort of a safe shelter is taken away.

Rivers have their own way of reminding us of life's impermanence. As one bank crumbles into the water, another slowly emerges somewhere else. Without noise or warning, the river inches forward, swallowing fields, homes, and entire villages. Along the banks of the Rupnarayan, where life appears quiet and unhurried, erosion is not an occasional disaster—it is a constant companion.

The Rupnarayan River separates Purba Medinipur on its western bank from Howrah on its eastern bank. It is the eastern bank, on the Howrah side, that has been steadily and silently disappearing into the river for years. We found ourselves at Char Benapur, standing on land that exists in a delicate balance between permanence and loss.

Yet, even here, life refuses to surrender. We humans are creatures of the present, always searching for hope amid uncertainty. A patch of green grass, a newly planted tree, a house rebuilt a little farther inland—small signs that tomorrow is still worth believing in.

Perhaps that is the quiet resilience of those who live by the river. They know the land beneath their feet may not last forever, but they continue to build, to dream, and to live until the very last moment before the river comes calling once again.

This version is more reflective and narrative, making it well-suited as the opening or closing section of a travel blog or photo story about the Rupnarayan River and the people living along its eroding banks.`,
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
    description: `Yet to publish`,    
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
