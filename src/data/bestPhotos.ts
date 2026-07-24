import { Photo } from '../types';

export interface BestPhoto extends Photo {
  categoryId?: string;
  categoryTag: 'Monsoon & Rivers' | 'Himalayan Vistas' | 'Spring & Flora' | 'Rural & Heritage';
  storySnippet?: string;
}

export const bestPhotos: BestPhoto[] = [
  // --- KOYNA DAM, SATARA (9 Photos) ---
  {
    id: '_DSC0043_zmq2jv',
    categoryId: '2025-koyna-dam-satara',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783541679/_DSC0043_zmq2jv.jpg',
    title: 'Shivsagar Reservoir in Monsoon Mist',
    description: 'Drifting monsoon cloud curtains falling softly over the expansive Koyna dam backwaters in Satara, Maharashtra.',
    storySnippet: 'As early monsoon clouds engulfed the Sahyadri ranges, the quiet expanse of Koyna dam backwaters turned into a living monochrome painting.',
    location: 'Koyna Dam, Maharashtra',
    date: 'Monsoon 2025',
    aspectRatio: 'landscape',
    tag: 'Monsoon & Rivers',
    categoryTag: 'Monsoon & Rivers',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 24-70mm f/4 S',
      shutter: '1/320s',
      aperture: 'f/8.0',
      iso: 'ISO 100',
      focalLength: '35mm'
    }
  },
  {
    id: '_DSC0092_fdwyd1',
    categoryId: '2025-koyna-dam-satara',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783541656/_DSC0092_fdwyd1.jpg',
    title: 'Sahyadri Cloud Pass',
    description: 'Low-hanging monsoon cloud layers gliding across green rainforest canopy near Satara.',
    storySnippet: 'Thick valley mist rolling over the evergreen crests of Maharashtra’s Western Ghats.',
    location: 'Satara Ghats, Maharashtra',
    date: 'Monsoon 2025',
    aspectRatio: 'landscape',
    tag: 'Monsoon & Rivers',
    categoryTag: 'Monsoon & Rivers',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 24-70mm f/4 S',
      shutter: '1/400s',
      aperture: 'f/8.0',
      iso: 'ISO 100',
      focalLength: '50mm'
    }
  },
  {
    id: '_DSC0088_uyeu3w',
    categoryId: '2025-koyna-dam-satara',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783541656/_DSC0088_uyeu3w.jpg',
    title: 'Echoes of Shivsagar Lake',
    description: 'Emerald waters cradled by mist-shrouded hills in Western Ghats.',
    storySnippet: 'Rain-splattered balconies looking out over 50 kilometers of uninterrupted rain-fed lake.',
    location: 'Koyna Dam, Satara',
    date: 'Monsoon 2025',
    aspectRatio: 'landscape',
    tag: 'Monsoon & Rivers',
    categoryTag: 'Monsoon & Rivers',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 24-70mm f/4 S',
      shutter: '1/320s',
      aperture: 'f/7.1',
      iso: 'ISO 100',
      focalLength: '45mm'
    }
  },
  {
    id: '_DSC0014_usxkdn',
    categoryId: '2025-koyna-dam-satara',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783541656/_DSC0014_usxkdn.jpg',
    title: 'Koyna Rainforest Canopy',
    description: 'Dense lush green forest cover overlooking Shivsagar Lake during peak monsoon.',
    storySnippet: 'Evergreen forests carved by nature, offering panoramic views of drifting clouds and rain.',
    location: 'Koyna Dam, Satara',
    date: 'Monsoon 2025',
    aspectRatio: 'landscape',
    tag: 'Monsoon & Rivers',
    categoryTag: 'Monsoon & Rivers',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 24-70mm f/4 S',
      shutter: '1/500s',
      aperture: 'f/8.0',
      iso: 'ISO 100',
      focalLength: '50mm'
    }
  },
  {
    id: '_DSC0104_cbda0o',
    categoryId: '2025-koyna-dam-satara',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783541655/_DSC0104_cbda0o.jpg',
    title: 'Koyna Mist & Ridge',
    description: 'Soft mist creeping over Western Ghats ridges.',
    location: 'Koyna Dam, Satara',
    date: 'Monsoon 2025',
    aspectRatio: 'landscape',
    tag: 'Monsoon & Rivers',
    categoryTag: 'Monsoon & Rivers',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 24-70mm f/4 S',
      shutter: '1/250s',
      aperture: 'f/6.3',
      iso: 'ISO 100',
      focalLength: '40mm'
    }
  },
  {
    id: '_DSC0119_caj1lc',
    categoryId: '2025-koyna-dam-satara',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783541655/_DSC0119_caj1lc.jpg',
    title: 'Monsoon Rain Veil',
    description: 'Distant rain curtains falling across Shivsagar Lake.',
    location: 'Koyna Dam, Satara',
    date: 'Monsoon 2025',
    aspectRatio: 'landscape',
    tag: 'Monsoon & Rivers',
    categoryTag: 'Monsoon & Rivers',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 24-70mm f/4 S',
      shutter: '1/320s',
      aperture: 'f/8.0',
      iso: 'ISO 100',
      focalLength: '50mm'
    }
  },
  {
    id: '_DSC0082_apeu5d',
    categoryId: '2025-koyna-dam-satara',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783541655/_DSC0082_apeu5d.jpg',
    title: 'Rainwashed Slopes of Koyna',
    description: 'Lush green mountain slopes shining under fresh rain.',
    location: 'Koyna Dam, Satara',
    date: 'Monsoon 2025',
    aspectRatio: 'landscape',
    tag: 'Monsoon & Rivers',
    categoryTag: 'Monsoon & Rivers',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 24-70mm f/4 S',
      shutter: '1/200s',
      aperture: 'f/5.6',
      iso: 'ISO 100',
      focalLength: '35mm'
    }
  },
  {
    id: '_DSC0003_tfamxc',
    categoryId: '2025-koyna-dam-satara',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783541654/_DSC0003_tfamxc.jpg',
    title: 'Early Monsoon Whispers',
    description: 'First monsoon light filtering through morning clouds.',
    location: 'Koyna Dam, Satara',
    date: 'Monsoon 2025',
    aspectRatio: 'landscape',
    tag: 'Monsoon & Rivers',
    categoryTag: 'Monsoon & Rivers',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 24-70mm f/4 S',
      shutter: '1/400s',
      aperture: 'f/7.1',
      iso: 'ISO 100',
      focalLength: '28mm'
    }
  },
  {
    id: '_DSC0042_acsykf',
    categoryId: '2025-koyna-dam-satara',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783541654/_DSC0042_acsykf.jpg',
    title: 'Sahyadri Horizon Frame',
    description: 'Expansive view of Shivsagar Lake surrounded by evergreen forests.',
    location: 'Koyna Dam, Satara',
    date: 'Monsoon 2025',
    aspectRatio: 'landscape',
    tag: 'Monsoon & Rivers',
    categoryTag: 'Monsoon & Rivers',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 24-70mm f/4 S',
      shutter: '1/320s',
      aperture: 'f/8.0',
      iso: 'ISO 100',
      focalLength: '35mm'
    }
  },

  // --- WEST SIKKIM (5 Photos) ---
  {
    id: '_DSC2768_mgci8d',
    categoryId: '2025-west-sikkim',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1782755158/_DSC2768_mgci8d.jpg',
    title: 'Alpenglow over Kanchenjunga Ridge',
    description: 'Golden morning rays crowning the high snow peaks of West Sikkim before sunrise mist takes over the valley.',
    storySnippet: 'Standing in freezing sub-zero dawn in West Sikkim, watching the first golden light pierce through Himalayan clouds.',
    location: 'West Sikkim, India',
    date: 'Winter 2025',
    aspectRatio: 'landscape',
    tag: 'Himalayan Vistas',
    categoryTag: 'Himalayan Vistas',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
      shutter: '1/500s',
      aperture: 'f/7.1',
      iso: 'ISO 160',
      focalLength: '135mm'
    }
  },
  {
    id: '_DSC2973_jz88xg',
    categoryId: '2025-west-sikkim',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783188187/_DSC2973_jz88xg.jpg',
    title: 'High Altitude Sikkim Monastery Pass',
    description: 'A serene Himalayan trail wind draped in prayer flags amidst crisp mountain air.',
    storySnippet: 'Whispering mountain winds carrying prayers across snow-covered Himalayan valleys.',
    location: 'West Sikkim, India',
    date: 'Winter 2025',
    aspectRatio: 'landscape',
    tag: 'Himalayan Vistas',
    categoryTag: 'Himalayan Vistas',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 24-70mm f/4 S',
      shutter: '1/640s',
      aperture: 'f/6.3',
      iso: 'ISO 100',
      focalLength: '35mm'
    }
  },
  {
    id: '_DSC2796_slsmtg',
    categoryId: '2025-west-sikkim',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1782755099/_DSC2796_slsmtg.jpg',
    title: 'Frozen Cascade of West Sikkim',
    description: 'A icy Himalayan stream trickling past lichen-covered boulders in winter.',
    storySnippet: 'Crystal clear glacial waters flowing through silent pine valleys under sharp winter sun.',
    location: 'West Sikkim, India',
    date: 'Winter 2025',
    aspectRatio: 'landscape',
    tag: 'Himalayan Vistas',
    categoryTag: 'Himalayan Vistas',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 24-70mm f/4 S',
      shutter: '1/125s',
      aperture: 'f/11.0',
      iso: 'ISO 64',
      focalLength: '24mm'
    }
  },
  {
    id: '_DSC2714_lk6cvh',
    categoryId: '2025-west-sikkim',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1782755098/_DSC2714_lk6cvh.jpg',
    title: 'Snowline Pines of Sikkim',
    description: 'Tall pine trees blanketed in snow along the high trails of West Sikkim.',
    storySnippet: 'Silent winter afternoon walking amongst snow-laden pine trees under cold blue skies.',
    location: 'West Sikkim, India',
    date: 'Winter 2025',
    aspectRatio: 'landscape',
    tag: 'Himalayan Vistas',
    categoryTag: 'Himalayan Vistas',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 24-70mm f/4 S',
      shutter: '1/400s',
      aperture: 'f/8.0',
      iso: 'ISO 100',
      focalLength: '35mm'
    }
  },
  {
    id: '_DSC2584_ltzzj5',
    categoryId: '2025-west-sikkim',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1782754077/_DSC2584_ltzzj5.jpg',
    title: 'Valley Mist over West Sikkim',
    description: 'Distant snow-capped ridges emerging from morning fog.',
    location: 'West Sikkim, India',
    date: 'Winter 2025',
    aspectRatio: 'landscape',
    tag: 'Himalayan Vistas',
    categoryTag: 'Himalayan Vistas',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 24-70mm f/4 S',
      shutter: '1/500s',
      aperture: 'f/7.1',
      iso: 'ISO 100',
      focalLength: '50mm'
    }
  },

  // --- BANGRIPOSHI, ODISHA (10 Photos) ---
  {
    id: '_DSC9234_yohl0f',
    categoryId: '2025-bangriposhi',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783449096/_DSC9234_yohl0f.jpg',
    title: 'Scarlet Palash in Spring',
    description: 'Vibrant fiery crimson Palash (Flame of the Forest) blossoms adorning the quiet spring trails of Bangriposhi.',
    storySnippet: 'Inspired by Buddhadeb Guha’s classic romance, spring brought brilliant scarlet blossoms to the quiet banks of Budhabalanga.',
    location: 'Bangriposhi, Odisha',
    date: 'Spring 2025',
    aspectRatio: 'landscape',
    tag: 'Spring & Flora',
    categoryTag: 'Spring & Flora',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 50mm f/1.8 S',
      shutter: '1/1000s',
      aperture: 'f/2.8',
      iso: 'ISO 100',
      focalLength: '50mm'
    }
  },
  {
    id: '_DSC9185_kpq2zn',
    categoryId: '2025-bangriposhi',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783450055/_DSC9185_kpq2zn.jpg',
    title: 'Earthy Trails of Mayurbhanj',
    description: 'Sunlight filtering through dry deciduous forest canopy near Kuliyana Dokra village.',
    storySnippet: 'Golden afternoon sunlight casting dappled shadows on ancient red soil paths.',
    location: 'Mayurbhanj, Odisha',
    date: 'Spring 2025',
    aspectRatio: 'landscape',
    tag: 'Spring & Flora',
    categoryTag: 'Spring & Flora',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 50mm f/1.8 S',
      shutter: '1/800s',
      aperture: 'f/2.0',
      iso: 'ISO 100',
      focalLength: '50mm'
    }
  },
  {
    id: '_DSC9232_b3jero',
    categoryId: '2025-bangriposhi',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783449085/_DSC9232_b3jero.jpg',
    title: 'Spring Canopy Vertical Frame',
    description: 'Reaching skyward through blooming trees on the Budhabalanga river banks.',
    storySnippet: 'Bare branches meeting vibrant spring sky in a dramatic vertical composition.',
    location: 'Bangriposhi, Odisha',
    date: 'Spring 2025',
    aspectRatio: 'portrait',
    tag: 'Spring & Flora',
    categoryTag: 'Spring & Flora',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 50mm f/1.8 S',
      shutter: '1/1600s',
      aperture: 'f/2.8',
      iso: 'ISO 100',
      focalLength: '50mm'
    }
  },
  {
    id: '_DSC9281_jtdb1f',
    categoryId: '2025-bangriposhi',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783449091/_DSC9281_jtdb1f.jpg',
    title: 'Budhabalanga Riverbed',
    description: 'Tranquil flow of Budhabalanga river winding through green Bangriposhi valleys.',
    storySnippet: 'A peaceful escape far from urban hustle, where river waters set the rhythm of life.',
    location: 'Bangriposhi, Odisha',
    date: 'Spring 2025',
    aspectRatio: 'landscape',
    tag: 'Spring & Flora',
    categoryTag: 'Spring & Flora',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 50mm f/1.8 S',
      shutter: '1/640s',
      aperture: 'f/4.0',
      iso: 'ISO 100',
      focalLength: '50mm'
    }
  },
  {
    id: '_DSC9105_rymnov',
    categoryId: '2025-bangriposhi',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783450054/_DSC9105_rymnov.jpg',
    title: 'Kuliyana Dokra Artisans Trail',
    description: 'Traditional metal artisan village path in Mayurbhanj.',
    location: 'Kuliyana, Odisha',
    date: 'Spring 2025',
    aspectRatio: 'landscape',
    tag: 'Rural & Heritage',
    categoryTag: 'Rural & Heritage',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 50mm f/1.8 S',
      shutter: '1/400s',
      aperture: 'f/2.8',
      iso: 'ISO 100',
      focalLength: '50mm'
    }
  },
  {
    id: '_DSC9259_whikga',
    categoryId: '2025-bangriposhi',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783450053/_DSC9259_whikga.jpg',
    title: 'Fiery Palash Bloom Detail',
    description: 'Close-up macro frame of intense orange-red Palash flower petals.',
    location: 'Bangriposhi, Odisha',
    date: 'Spring 2025',
    aspectRatio: 'landscape',
    tag: 'Spring & Flora',
    categoryTag: 'Spring & Flora',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 50mm f/1.8 S',
      shutter: '1/1250s',
      aperture: 'f/2.0',
      iso: 'ISO 100',
      focalLength: '50mm'
    }
  },
  {
    id: '_DSC9276_e4dlbj',
    categoryId: '2025-bangriposhi',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783449090/_DSC9276_e4dlbj.jpg',
    title: 'Budhabalanga Sunset Reflections',
    description: 'Golden hour light illuminating river ripples in Bangriposhi.',
    location: 'Bangriposhi, Odisha',
    date: 'Spring 2025',
    aspectRatio: 'landscape',
    tag: 'Monsoon & Rivers',
    categoryTag: 'Monsoon & Rivers',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 50mm f/1.8 S',
      shutter: '1/500s',
      aperture: 'f/4.0',
      iso: 'ISO 100',
      focalLength: '50mm'
    }
  },
  {
    id: '_DSC9271_xjxqhj',
    categoryId: '2025-bangriposhi',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783449088/_DSC9271_xjxqhj.jpg',
    title: 'Open Skies over Bangriposhi',
    description: 'Panoramic spring sky framed by forest trees.',
    location: 'Bangriposhi, Odisha',
    date: 'Spring 2025',
    aspectRatio: 'landscape',
    tag: 'Spring & Flora',
    categoryTag: 'Spring & Flora',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 50mm f/1.8 S',
      shutter: '1/800s',
      aperture: 'f/5.6',
      iso: 'ISO 100',
      focalLength: '50mm'
    }
  },
  {
    id: '_DSC9155_moujjq',
    categoryId: '2025-bangriposhi',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783449087/_DSC9155_moujjq.jpg',
    title: 'Mayurbhanj Red Soil Path',
    description: 'Rural path winding through quiet tribal hamlets.',
    location: 'Bangriposhi, Odisha',
    date: 'Spring 2025',
    aspectRatio: 'landscape',
    tag: 'Rural & Heritage',
    categoryTag: 'Rural & Heritage',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 50mm f/1.8 S',
      shutter: '1/400s',
      aperture: 'f/2.8',
      iso: 'ISO 100',
      focalLength: '50mm'
    }
  },
  {
    id: '_DSC9101_lhyddm',
    categoryId: '2025-bangriposhi',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783449085/_DSC9101_lhyddm.jpg',
    title: 'Bangriposhi Forest Glade',
    description: 'Quiet wooded glade under warm spring afternoon light.',
    location: 'Bangriposhi, Odisha',
    date: 'Spring 2025',
    aspectRatio: 'landscape',
    tag: 'Spring & Flora',
    categoryTag: 'Spring & Flora',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 50mm f/1.8 S',
      shutter: '1/500s',
      aperture: 'f/3.2',
      iso: 'ISO 100',
      focalLength: '50mm'
    }
  },

  // --- CHAR BENAPUR, WEST BENGAL (5 Photos) ---
  {
    id: '_DSC7212_03_vx236n',
    categoryId: '2024-benapur-west-bengal',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783539250/_DSC7212_03_vx236n.jpg',
    title: 'Erosion and Hope along the Rupnarayan',
    description: 'Quiet resilience of riverbank dwellers living in Char Benapur, where the shifting river silently shapes lives.',
    storySnippet: 'Along the eroding banks of Purba Medinipur, life moves in a delicate rhythm of loss and rebuild.',
    location: 'Char Benapur, West Bengal',
    date: 'Monsoon 2024',
    aspectRatio: 'landscape',
    tag: 'Rural & Heritage',
    categoryTag: 'Rural & Heritage',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 24-70mm f/4 S',
      shutter: '1/250s',
      aperture: 'f/5.6',
      iso: 'ISO 200',
      focalLength: '28mm'
    }
  },
  {
    id: '_DSC7196_01_wevess',
    categoryId: '2024-benapur-west-bengal',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783539249/_DSC7196_01_wevess.jpg',
    title: 'Reflections on the Waterway',
    description: 'Early evening reflections of monsoon sky on the calm waters of the Rupnarayan.',
    storySnippet: 'Where land ends and water takes over, the sky paints a quiet canvas of hope.',
    location: 'Char Benapur, West Bengal',
    date: 'Monsoon 2024',
    aspectRatio: 'landscape',
    tag: 'Rural & Heritage',
    categoryTag: 'Rural & Heritage',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 24-70mm f/4 S',
      shutter: '1/200s',
      aperture: 'f/5.0',
      iso: 'ISO 400',
      focalLength: '24mm'
    }
  },
  {
    id: '_DSC7208_01_no3ddt',
    categoryId: '2024-benapur-west-bengal',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783539250/_DSC7208_01_no3ddt.jpg',
    title: 'Village Shorelines',
    description: 'Local wooden boats resting against the quiet banks of Purba Medinipur.',
    storySnippet: 'Traditional country boats anchored along the silty shore, waiting for the evening tide.',
    location: 'Char Benapur, West Bengal',
    date: 'Monsoon 2024',
    aspectRatio: 'landscape',
    tag: 'Rural & Heritage',
    categoryTag: 'Rural & Heritage',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 24-70mm f/4 S',
      shutter: '1/320s',
      aperture: 'f/6.3',
      iso: 'ISO 200',
      focalLength: '35mm'
    }
  },
  {
    id: '_DSC7214_v6i7uz',
    categoryId: '2024-benapur-west-bengal',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783539250/_DSC7214_v6i7uz.jpg',
    title: 'Silent Rupnarayan Dusk',
    description: 'Dusk settling gently over the eroding silt banks of Char Benapur.',
    storySnippet: 'Standing on delicate land between permanence and loss as dusk settles over the river.',
    location: 'Char Benapur, West Bengal',
    date: 'Monsoon 2024',
    aspectRatio: 'landscape',
    tag: 'Rural & Heritage',
    categoryTag: 'Rural & Heritage',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 24-70mm f/4 S',
      shutter: '1/160s',
      aperture: 'f/4.5',
      iso: 'ISO 400',
      focalLength: '35mm'
    }
  },
  {
    id: '_DSC7198_kxsao3',
    categoryId: '2024-benapur-west-bengal',
    url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783539250/_DSC7198_kxsao3.jpg',
    title: 'Rupnarayan River Horizon',
    description: 'Wide horizon view of Rupnarayan river meet point.',
    location: 'Char Benapur, West Bengal',
    date: 'Monsoon 2024',
    aspectRatio: 'landscape',
    tag: 'Rural & Heritage',
    categoryTag: 'Rural & Heritage',
    exif: {
      camera: 'Nikon Z Series',
      lens: 'NIKKOR Z 24-70mm f/4 S',
      shutter: '1/320s',
      aperture: 'f/6.3',
      iso: 'ISO 100',
      focalLength: '28mm'
    }
  }
];
