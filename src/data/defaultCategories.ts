import { Category } from '../types';

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
    photos: [
      {
        id: '2025-west-sikkim-1',
        url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1782754077/_DSC2584_ltzzj5.jpg',
        title: 'Golden Pavilion in Autumn',
        description: 'The Kinkaku-ji temple reflected perfectly in the Mirror Pond, framed by maple trees in their peak scarlet brilliance.',
        location: 'Kinkaku-ji, Kyoto',
        date: '2025-11-12',
        aspectRatio: 'landscape'
      },
      {
        id: '2025-west-sikkim-2',
        url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1782755099/_DSC2796_slsmtg.jpg',
        title: 'Yasaka Pagoda at Twilight',
        description: 'The historic streets of Higashiyama empty out as twilight paints the sky in shades of deep indigo and violet.',
        location: 'Higashiyama, Kyoto',
        date: '2025-11-14',
        aspectRatio: 'portrait'
      },
      {
        id: '2025-west-sikkim-3',
        url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1782755158/_DSC2768_mgci8d.jpg',
        title: 'Arashiyama Bamboo Forest',
        description: 'Stately green bamboo shoots reaching upwards, sculpting the midday sun into columns of soft, lime-colored light.',
        location: 'Arashiyama, Kyoto',
        date: '2025-11-15',
        aspectRatio: 'portrait'
      },
      {
        id: '2025-west-sikkim-4',
        url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1782755098/_DSC2714_lk6cvh.jpg',
        title: 'Gion Lanterns',
        description: 'A traditional wooden house facade illuminated by warm red paper lanterns in Gion district.',
        location: 'Gion, Kyoto',
        date: '2025-11-13',
        aspectRatio: 'landscape'
      },
      {
        id: '2025-west-sikkim-5',
        url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1783188187/_DSC2973_jz88xg.jpg',
        title: 'Gion Lanterns',
        description: 'A traditional wooden house facade illuminated by warm red paper lanterns in Gion district.',
        location: 'Gion, Kyoto',
        date: '2025-11-13',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: 'graduation-new-beginnings',
    title: 'The Horizon Shifts',
    type: 'milestone',
    state: 'hp',
    coverUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
    location: 'University Campus & City Relocation',
    dateRange: 'Spring 2026',
    description: `A documentary record of a critical threshold. Graduation is often depicted as a single moment of triumph—caps flying against a blue sky, handshakes, and broad smiles. But in reality, it is a complex emotional ecosystem of endings, anticipation, and an underlying quiet anxiety about the future.

This photo series chronicles our final semester. It is a story told through the details: the stack of dog-eared library books on a wooden desk lit by a flickering study lamp at two in the morning; the empty, echoing lecture hall on the afternoon after our last exam; and the lingering, warm embraces of friends who had spent four years sharing rent, coffee, and dreams, realizing they were about to scatter across separate time zones.

The narrative continues beyond the university gates. It follows the quiet transition into the adult world—unpacking moving boxes in a small, empty city apartment where the light comes from skyscrapers instead of campus oaks, putting on a professional suit for the first time, and looking out a corporate window as the horizon of youth shifts into the landscape of a career.`,
    photos: [
      {
        id: 'grad-1',
        url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
        title: 'The Cap Toss',
        description: 'A synchronous burst of caps thrown into the spring sky, symbolizing the release of four years of intellectual rigor.',
        location: 'University Quadrangle',
        date: '2026-05-18',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Fujifilm X-T5',
          lens: 'XF 16-55mm f/2.8 R LM WR',
          shutter: '1/1000s',
          aperture: 'f/4.0',
          iso: '200',
          focalLength: '24mm'
        }
      },
      {
        id: 'grad-2',
        url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop',
        title: 'Shared Laughter',
        description: 'A candid portrait of roommates sharing a final meal together in our cramped dorm room, laughing amidst packing tape.',
        location: 'Residence Hall, Room 304',
        date: '2026-05-15',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Leica M11',
          lens: 'Summilux-M 35mm f/1.4 ASPH',
          shutter: '1/80s',
          aperture: 'f/1.4',
          iso: '640',
          focalLength: '35mm'
        }
      },
      {
        id: 'grad-3',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop',
        title: 'Ivy and Red Brick',
        description: 'The late-afternoon sun warming the classic red brick walls and creeping ivy of the historic humanities building.',
        location: 'Founders Hall, Campus',
        date: '2026-05-10',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 24-70mm f/2.8 GM II',
          shutter: '1/200s',
          aperture: 'f/5.6',
          iso: '100',
          focalLength: '50mm'
        }
      },
      {
        id: 'grad-4',
        url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
        title: 'The Silent Stacks',
        description: 'Dust motes dancing in shafts of light between rows of leather-bound research books in the silent third-floor library.',
        location: 'Main Library Archives',
        date: '2026-04-22',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 35mm f/1.4 GM',
          shutter: '1/60s',
          aperture: 'f/1.8',
          iso: '400',
          focalLength: '35mm'
        }
      },
      {
        id: 'grad-5',
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
        title: 'Study Table Remnants',
        description: 'An abstract top-down view of open binders, highlighters, half-empty coffee cups, and laptops during final week.',
        location: 'Campus Cafe',
        date: '2026-05-02',
        aspectRatio: 'square',
        exif: {
          camera: 'Fujifilm X-T5',
          lens: 'XF 23mm f/1.4 R LM WR',
          shutter: '1/125s',
          aperture: 'f/2.0',
          iso: '320',
          focalLength: '23mm'
        }
      },
      {
        id: 'grad-6',
        url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
        title: 'The Final Closure',
        description: 'A close-up shot of hands gently closing a laptop after submitting the final undergraduate thesis project.',
        location: 'Science Library Study Pod',
        date: '2026-05-08',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Fujifilm X-T5',
          lens: 'XF 35mm f/1.4 R',
          shutter: '1/180s',
          aperture: 'f/1.4',
          iso: '160',
          focalLength: '35mm'
        }
      },
      {
        id: 'grad-7',
        url: 'https://images.unsplash.com/photo-1491845338219-4f74409f06a8?q=80&w=1200&auto=format&fit=crop',
        title: 'Accumulated Knowledge',
        description: 'A beautiful, textured close-up of worn books stacked high on our oak desk, casting long shadows.',
        location: 'Humanities Common Room',
        date: '2026-04-15',
        aspectRatio: 'square',
        exif: {
          camera: 'Leica M11',
          lens: 'Apo-Summicron-M 50mm f/2 ASPH',
          shutter: '1/125s',
          aperture: 'f/2.8',
          iso: '100',
          focalLength: '50mm'
        }
      },
      {
        id: 'grad-8',
        url: 'https://images.unsplash.com/photo-1513258496099-7966c982512b?q=80&w=1200&auto=format&fit=crop',
        title: 'Midnight Writing',
        description: 'A focused, close-up shot of a hand jotting down formulas under the warm ring of a single study desk lamp.',
        location: 'Off-Campus Flat',
        date: '2026-05-01',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 90mm f/2.8 Macro G OSS',
          shutter: '1/60s',
          aperture: 'f/2.8',
          iso: '800',
          focalLength: '90mm'
        }
      },
      {
        id: 'grad-9',
        url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
        title: 'The Polaroid Memories',
        description: 'A collection of slightly faded polaroid photos showing laughing friends, clipped onto a string over a bed.',
        location: 'Dorm Room Wall',
        date: '2026-05-14',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Fujifilm X-T5',
          lens: 'XF 35mm f/1.4 R',
          shutter: '1/100s',
          aperture: 'f/2.0',
          iso: '400',
          focalLength: '35mm'
        }
      },
      {
        id: 'grad-10',
        url: 'https://images.unsplash.com/photo-1525921429573-05911ed04c4e?q=80&w=1200&auto=format&fit=crop',
        title: 'The Silent Lecture Hall',
        description: 'A stark, beautiful perspective looking down the empty wood desks of our large engineering auditorium.',
        location: 'Hall A, Engineering Department',
        date: '2026-05-11',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Leica M11',
          lens: 'Elmarit-M 28mm f/2.8 ASPH',
          shutter: '1/45s',
          aperture: 'f/5.6',
          iso: '500',
          focalLength: '28mm'
        }
      },
      {
        id: 'grad-11',
        url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop',
        title: 'Under the Desk Lamp',
        description: 'A late-night study environment, showing a single glowing green bankers lamp lighting handwritten notes.',
        location: 'Library Basement Stacks',
        date: '2026-05-04',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Fujifilm X-T5',
          lens: 'XF 18mm f/1.4 R LM WR',
          shutter: '1/30s',
          aperture: 'f/1.4',
          iso: '1600',
          focalLength: '18mm'
        }
      },
      {
        id: 'grad-12',
        url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop',
        title: 'The Ceremony Stage',
        description: 'A panoramic view of the grand auditorium set up with flowers and podium for the diploma presentation.',
        location: 'University Grand Hall',
        date: '2026-05-18',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 24-70mm f/2.8 GM II',
          shutter: '1/125s',
          aperture: 'f/4.0',
          iso: '320',
          focalLength: '24mm'
        }
      },
      {
        id: 'grad-13',
        url: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=1200&auto=format&fit=crop',
        title: 'The Tearful Hug',
        description: 'An emotional candid shot of a graduate embracing their crying parent immediately after the ceremony.',
        location: 'Quad Gardens',
        date: '2026-05-18',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 70-200mm f/2.8 GM OSS II',
          shutter: '1/250s',
          aperture: 'f/2.8',
          iso: '200',
          focalLength: '100mm'
        }
      },
      {
        id: 'grad-14',
        url: 'https://images.unsplash.com/photo-1521791136364-722288356515?q=80&w=1200&auto=format&fit=crop',
        title: 'Handshake and Diploma',
        description: 'A sharp, narrow depth-of-field shot focusing on the handshake of the Dean handing over the degree scroll.',
        location: 'Ceremony Podium',
        date: '2026-05-18',
        aspectRatio: 'square',
        exif: {
          camera: 'Fujifilm X-T5',
          lens: 'XF 50-140mm f/2.8 R LM OIS WR',
          shutter: '1/500s',
          aperture: 'f/2.8',
          iso: '400',
          focalLength: '135mm'
        }
      },
      {
        id: 'grad-15',
        url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
        title: 'The Final Group Portrait',
        description: 'A joyful portrait of our core study group, wearing gowns and holding rolled scrolls, smiling against spring leaves.',
        location: 'Campus Lawn',
        date: '2026-05-18',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Leica M11',
          lens: 'Summilux-M 50mm f/1.4 ASPH',
          shutter: '1/320s',
          aperture: 'f/2.0',
          iso: '100',
          focalLength: '50mm'
        }
      },
      {
        id: 'grad-16',
        url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop',
        title: 'Adjusting the Tie',
        description: 'A slow-shutter detail shot of a graduate adjusting their dark silk tie before stepping onto the stage.',
        location: 'Graduation Prep Room',
        date: '2026-05-18',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Fujifilm X-T5',
          lens: 'XF 35mm f/1.4 R',
          shutter: '1/60s',
          aperture: 'f/1.4',
          iso: '200',
          focalLength: '35mm'
        }
      },
      {
        id: 'grad-17',
        url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop',
        title: 'A Toast to Tomorrow',
        description: 'Candid capture of sparkling soda glasses clinking under warm outdoor terrace fairy lights during the after-party.',
        location: 'The Union Terrace',
        date: '2026-05-19',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 35mm f/1.4 GM',
          shutter: '1/125s',
          aperture: 'f/1.4',
          iso: '800',
          focalLength: '35mm'
        }
      },
      {
        id: 'grad-18',
        url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
        title: 'The New Corridor',
        description: 'Walking into a modern corporate office building, capturing the glass panels and reflections on highly polished floors.',
        location: 'Tech District Office',
        date: '2026-06-15',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 24-70mm f/2.8 GM II',
          shutter: '1/100s',
          aperture: 'f/4.0',
          iso: '320',
          focalLength: '24mm'
        }
      },
      {
        id: 'grad-19',
        url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
        title: 'Putting on the Suit',
        description: 'A moody, minimalist shot focusing on a graduate adjusting the sleeve cuff of their first charcoal business suit.',
        location: 'New Apartment Wardrobe',
        date: '2026-06-12',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Leica M11',
          lens: 'Summilux-M 35mm f/1.4 ASPH',
          shutter: '1/120s',
          aperture: 'f/1.4',
          iso: '160',
          focalLength: '35mm'
        }
      },
      {
        id: 'grad-20',
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
        title: 'City Skyscraper Horizon',
        description: 'Looking up at soaring steel and glass towers reflecting the sky, capturing the overwhelming scale of the metropolitan jungle.',
        location: 'Financial District, New York',
        date: '2026-06-18',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 16-35mm f/4 G PZ',
          shutter: '1/250s',
          aperture: 'f/8.0',
          iso: '100',
          focalLength: '16mm'
        }
      },
      {
        id: 'grad-21',
        url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop',
        title: 'New Workspace Calm',
        description: 'A minimalist desk setup with a simple keyboard and a single succulent plant by a massive window looking at city tops.',
        location: 'My New Desk, 12th Floor',
        date: '2026-06-20',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Fujifilm X-T5',
          lens: 'XF 23mm f/1.4 R LM WR',
          shutter: '1/160s',
          aperture: 'f/2.8',
          iso: '160',
          focalLength: '23mm'
        }
      },
      {
        id: 'grad-22',
        url: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1200&auto=format&fit=crop',
        title: 'Moving In',
        description: 'A simple stack of cardboard moving boxes on a raw hardwood floor, with sunlight filtering through blinds.',
        location: 'New Apartment, Brooklyn',
        date: '2026-06-01',
        aspectRatio: 'square',
        exif: {
          camera: 'Fujifilm X-T5',
          lens: 'XF 35mm f/1.4 R',
          shutter: '1/100s',
          aperture: 'f/2.0',
          iso: '200',
          focalLength: '35mm'
        }
      },
      {
        id: 'grad-23',
        url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop',
        title: 'Relief of the Sunset',
        description: 'Warm reddish-pink neon glow illuminating our glasses of cider on a rooftop bar looking out to sunset cityscapes.',
        location: 'Rooftop Bar, Manhattan',
        date: '2026-06-19',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Leica M11',
          lens: 'Summilux-M 35mm f/1.4 ASPH',
          shutter: '1/45s',
          aperture: 'f/1.4',
          iso: '1250',
          focalLength: '35mm'
        }
      },
      {
        id: 'grad-24',
        url: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
        title: 'New City Sunset',
        description: 'The golden sphere of the sun setting exactly between the steel cables of a major city bridge, signaling a beautiful dawn.',
        location: 'East River, New York',
        date: '2026-06-25',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 70-200mm f/2.8 GM OSS II',
          shutter: '1/400s',
          aperture: 'f/4.0',
          iso: '100',
          focalLength: '150mm'
        }
      },
      {
        id: 'grad-25',
        url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop',
        title: 'The Solitary Cap on Oak',
        description: 'A single dark graduation mortarboard cap sitting quietly on a dark oak desk in the library, looking at empty corridors.',
        location: 'Graduate Studies Wing',
        date: '2026-05-19',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 50mm f/1.2 GM',
          shutter: '1/160s',
          aperture: 'f/2.0',
          iso: '100',
          focalLength: '50mm'
        }
      }
    ]
  }
];

export const defaultCategories: Category[] = rawDefaultCategories.map(cat => ({
  ...cat,
  photos: cat.photos.map(p => {
    let tag = 'General';
    const title = p.title.toLowerCase();
    
    if (cat.id === 'kyoto-japan') {
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
    } else if (cat.id === 'graduation-new-beginnings' || cat.id === 'graduation') {
      if (title.includes('ceremony') || title.includes('stage') || title.includes('diploma') || title.includes('lecture') || title.includes('hall') || title.includes('stacks') || title.includes('library')) {
        tag = 'Ceremony';
      } else if (title.includes('toast') || title.includes('hug') || title.includes('laugh') || title.includes('portrait') || title.includes('group') || title.includes('handshake') || title.includes('shared')) {
        tag = 'People';
      } else {
        tag = 'Details';
      }
    }
    
    return {
      ...p,
      tag
    };
  })
}));
