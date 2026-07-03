import { Category } from '../types';

const rawDefaultCategories: Category[] = [
//   {
//     id: '2025-west-sikkim',
//     title: 'West Sikkim, India',
//     type: 'travel',
//     coverUrl: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1782755158/_DSC2768_mgci8d.jpg',
//     location: 'West Sikkim, India',
//     dateRange: 'Winter 2025',
//     description: `A quiet journey through the ancient heart of Japan. Kyoto is a sanctuary where wood, moss, and stone tell stories centuries older than the concrete giants of Tokyo. 

// This photo essay captures the silent dialogue between architecture and nature. We walked through Fushimi Inari-taisha at five in the morning, before the orange corridors were filled with voices, hearing only the distant cry of crows and the crunch of gravel beneath our boots. In Arashiyama, the bamboo stalks whispered as they swayed, filter-feeding the dawn light into stripes of vibrant emerald. 

// Every tea house in Gion is a masterclass in shadows. The sliding paper shoji doors soften the afternoon sun, casting long, peaceful gradients across tatami mats. Through these photographs, I sought to capture "Yūgen"—a profound, mysterious grace, and "Wabi-Sabi"—the beautiful imperfection of weathered wooden facades, fallen autumn maple leaves on dark stone basins, and steam rising from a single bowl of hand-whisked matcha.`,
//     photos: [
//       {
//         id: '2025-west-sikkim-1',
//         url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1782754077/_DSC2584_ltzzj5.jpg',
//         title: 'Golden Pavilion in Autumn',
//         description: 'The Kinkaku-ji temple reflected perfectly in the Mirror Pond, framed by maple trees in their peak scarlet brilliance.',
//         location: 'Kinkaku-ji, Kyoto',
//         date: '2025-11-12',
//         aspectRatio: 'landscape',
//         exif: {
//           camera: 'Fujifilm X-T5',
//           lens: 'XF 16-55mm f/2.8 R LM WR',
//           shutter: '1/250s',
//           aperture: 'f/5.6',
//           iso: '160',
//           focalLength: '35mm'
//         }
//       },
//       {
//         id: '2025-west-sikkim-2',
//         url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1782755099/_DSC2796_slsmtg.jpg',
//         title: 'Yasaka Pagoda at Twilight',
//         description: 'The historic streets of Higashiyama empty out as twilight paints the sky in shades of deep indigo and violet.',
//         location: 'Higashiyama, Kyoto',
//         date: '2025-11-14',
//         aspectRatio: 'portrait',
//         exif: {
//           camera: 'Sony A7R V',
//           lens: 'FE 24-70mm f/2.8 GM II',
//           shutter: '1/15s',
//           aperture: 'f/4.0',
//           iso: '800',
//           focalLength: '50mm'
//         }
//       },
//       {
//         id: '2025-west-sikkim-3',
//         url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1782755158/_DSC2768_mgci8d.jpg',
//         title: 'Arashiyama Bamboo Forest',
//         description: 'Stately green bamboo shoots reaching upwards, sculpting the midday sun into columns of soft, lime-colored light.',
//         location: 'Arashiyama, Kyoto',
//         date: '2025-11-15',
//         aspectRatio: 'portrait',
//         exif: {
//           camera: 'Fujifilm X-T5',
//           lens: 'XF 10-24mm f/4 R OIS WR',
//           shutter: '1/60s',
//           aperture: 'f/4.0',
//           iso: '320',
//           focalLength: '14mm'
//         }
//       },
//       {
//         id: '2025-west-sikkim-4',
//         url: 'https://res.cloudinary.com/dqwd7rzmz/image/upload/v1782755098/_DSC2714_lk6cvh.jpg',
//         title: 'Gion Lanterns',
//         description: 'A traditional wooden house facade illuminated by warm red paper lanterns in Gion district.',
//         location: 'Gion, Kyoto',
//         date: '2025-11-13',
//         aspectRatio: 'landscape',
//         exif: {
//           camera: 'Leica M11',
//           lens: 'Summilux-M 35mm f/1.4 ASPH',
//           shutter: '1/45s',
//           aperture: 'f/1.4',
//           iso: '400',
//           focalLength: '35mm'
//         }
//       }
//     ]
//   },
  {
    id: 'swiss-alps',
    state: 'wb',
    title: 'The Swiss Alps',
    type: 'travel',
    coverUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    location: 'Valais and Bernese Oberland, Switzerland',
    dateRange: 'Summer 2024',
    description: `An exploration of immense scale, cold winds, and silent, majestic peaks. The Swiss Alps are not merely mountains; they are monument structures of tectonic history that make all human timelines feel completely insignificant. 

Our route was slow and deliberate. We spent a week around the car-free town of Zermatt, watching the Matterhorn hide in shifting storm fronts and re-emerging at sunrise like a dark, angular tooth chewing on clouds. In the Bernese Oberland, we rode rack-railway trains through tunnels bored directly into the solid rock face of the Eiger and hiked through the Lauterbrunnen valley, where twenty-eight waterfalls drop vertically from massive limestone cliffs into green meadows dotted with cows and small timber barns.

These photographs represent an attempt to capture both the micro-landscapes and the endless expanses. I spent hours waiting for wild mountain goats to step into position on high-elevation ridges, tracking the slow crawl of glaciers carving valleys over millennia, and capturing the warmth of single wooden huts lit from within under cold, unpolluted starry night skies.`,
    photos: [
      {
        id: 'alps-1',
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
        title: 'Tectonic Monolith',
        description: 'A sharp, glaciated peak towering above clouds as seen from Gornergrat, showing millions of years of rock folding.',
        location: 'Gornergrat, Zermatt',
        date: '2024-07-04',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 24-70mm f/2.8 GM II',
          shutter: '1/400s',
          aperture: 'f/8.0',
          iso: '100',
          focalLength: '45mm'
        }
      },
      {
        id: 'alps-2',
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
        title: 'Morning in Lauterbrunnen',
        description: 'The dramatic morning sun rays cutting through cliffs, illuminating Staubbach Falls dropping into the valley mist.',
        location: 'Lauterbrunnen Valley',
        date: '2024-07-06',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Fujifilm X-T5',
          lens: 'XF 16-55mm f/2.8 R LM WR',
          shutter: '1/160s',
          aperture: 'f/5.6',
          iso: '200',
          focalLength: '24mm'
        }
      },
      {
        id: 'alps-3',
        url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop',
        title: 'Lake Bachalpsee Calm',
        description: 'A crystal-clear reflection of Schreckhorn and Wetterhorn in the perfectly glassy mountain waters of Bachalpsee.',
        location: 'Grindelwald First, Bern',
        date: '2024-07-08',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 16-35mm f/4 G PZ',
          shutter: '1/250s',
          aperture: 'f/8.0',
          iso: '100',
          focalLength: '18mm'
        }
      },
      {
        id: 'alps-4',
        url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1200&auto=format&fit=crop',
        title: 'Crests of Snow',
        description: 'A dynamic telephoto capture of razor-sharp wind-blown snow ridges on a high alpine col.',
        location: 'Jungfraujoch, Grindelwald',
        date: '2024-07-07',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 70-200mm f/2.8 GM OSS II',
          shutter: '1/2000s',
          aperture: 'f/5.6',
          iso: '100',
          focalLength: '180mm'
        }
      },
      {
        id: 'alps-5',
        url: 'https://images.unsplash.com/photo-1531315630201-bb15abeb1653?q=80&w=1200&auto=format&fit=crop',
        title: 'Deep Glacier Crevasse',
        description: 'The incredible sapphire-blue depths of a glaciated crevasse in the massive Aletsch Glacier.',
        location: 'Aletsch Glacier, Valais',
        date: '2024-07-10',
        aspectRatio: 'square',
        exif: {
          camera: 'Fujifilm X-T5',
          lens: 'XF 18mm f/1.4 R LM WR',
          shutter: '1/500s',
          aperture: 'f/4.0',
          iso: '160',
          focalLength: '18mm'
        }
      },
      {
        id: 'alps-6',
        url: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1200&auto=format&fit=crop',
        title: 'Mountain Lake Reflection',
        description: 'An early-morning shot of alpine mountains and pristine dark evergreen trees perfectly reflecting on a glassy pool.',
        location: 'Lake Oeschinen, Kandersteg',
        date: '2024-07-09',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Leica M11',
          lens: 'Summicron-M 35mm f/2 ASPH',
          shutter: '1/125s',
          aperture: 'f/5.6',
          iso: '100',
          focalLength: '35mm'
        }
      },
      {
        id: 'alps-7',
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
        title: 'Ridge Line Trails',
        description: 'A hiker navigating a narrow ridge path, surrounded by sweeping grass meadows and distant steep peaks.',
        location: 'Stoos Ridge, Central Switzerland',
        date: '2024-07-11',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Fujifilm X-T5',
          lens: 'XF 16-55mm f/2.8 R LM WR',
          shutter: '1/320s',
          aperture: 'f/4.0',
          iso: '200',
          focalLength: '28mm'
        }
      },
      {
        id: 'alps-8',
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
        title: 'The Valley Mist',
        description: 'Thick valley fog settling between dark mountain forest silhouettes as dawn breaks on the horizons.',
        location: 'Interlaken Valley',
        date: '2024-07-05',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 70-200mm f/2.8 GM OSS II',
          shutter: '1/100s',
          aperture: 'f/2.8',
          iso: '400',
          focalLength: '120mm'
        }
      },
      {
        id: 'alps-9',
        url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop',
        title: 'Solitary Cabin',
        description: 'A beautiful dark timber cabin standing on a vast green field, surrounded by ancient dark pine trees.',
        location: 'Grindelwald Outskirts',
        date: '2024-07-07',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Leica M11',
          lens: 'Summilux-M 50mm f/1.4 ASPH',
          shutter: '1/250s',
          aperture: 'f/2.8',
          iso: '100',
          focalLength: '50mm'
        }
      },
      {
        id: 'alps-10',
        url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
        title: 'Starry Canopy Above peaks',
        description: 'An astrophotography study of the Milky Way galaxy framing the snow-capped, rugged mountains at midnight.',
        location: 'Simplon Pass, Valais',
        date: '2024-07-10',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 14mm f/1.8 GM',
          shutter: '15s',
          aperture: 'f/1.8',
          iso: '3200',
          focalLength: '14mm'
        }
      },
      {
        id: 'alps-11',
        url: 'https://images.unsplash.com/photo-1531361312168-7d97117f5e73?q=80&w=1200&auto=format&fit=crop',
        title: 'The Red Mountain Railway',
        description: 'The iconic red Swiss train winding its way along a breathtaking curved stone viaduct high over alpine pines.',
        location: 'Bernina Express, Graubünden',
        date: '2024-07-12',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 24-70mm f/2.8 GM II',
          shutter: '1/640s',
          aperture: 'f/4.0',
          iso: '160',
          focalLength: '35mm'
        }
      },
      {
        id: 'alps-12',
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
        title: 'Lake Lucerne Shorelines',
        description: 'Turquoise waters breaking gently on smooth white pebbles with mountains plunging directly into the lake.',
        location: 'Lake Lucerne, Central Switzerland',
        date: '2024-07-03',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Leica M11',
          lens: 'Elmarit-M 28mm f/2.8 ASPH',
          shutter: '1/200s',
          aperture: 'f/5.6',
          iso: '100',
          focalLength: '28mm'
        }
      },
      {
        id: 'alps-13',
        url: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1200&auto=format&fit=crop',
        title: 'Alpine Chalet Village',
        description: 'Hundreds of traditional brown-timber Swiss chalets clustered in the emerald bowl of Grindelwald valley.',
        location: 'Grindelwald Village',
        date: '2024-07-07',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Fujifilm X-T5',
          lens: 'XF 16-55mm f/2.8 R LM WR',
          shutter: '1/125s',
          aperture: 'f/5.6',
          iso: '160',
          focalLength: '55mm'
        }
      },
      {
        id: 'alps-14',
        url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop',
        title: 'Crystalline Glacial Stream',
        description: 'A rushing torrent of icy turquoise meltwater carving through smooth gray river rocks and mossy forests.',
        location: 'Rosenlaui Glacier Gorge',
        date: '2024-07-08',
        aspectRatio: 'square',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 16-35mm f/4 G PZ',
          shutter: '1/8s',
          aperture: 'f/11.0',
          iso: '50',
          focalLength: '24mm'
        }
      },
      {
        id: 'alps-15',
        url: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1200&auto=format&fit=crop',
        title: 'Cabin in the Sky',
        description: 'A single yellow cable car floating effortlessly in front of the massive snow-capped south face of the Eiger.',
        location: 'Eiger Express, Grindelwald',
        date: '2024-07-07',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Fujifilm X-T5',
          lens: 'XF 50-140mm f/2.8 R LM OIS WR',
          shutter: '1/800s',
          aperture: 'f/4.0',
          iso: '160',
          focalLength: '70mm'
        }
      },
      {
        id: 'alps-16',
        url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop',
        title: 'Camp at First Light',
        description: 'A glowing orange tent pitched on a high grassy col, with mountain fog sweeping through distant spruce tops.',
        location: 'Schynige Platte, Interlaken',
        date: '2024-07-05',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 24-70mm f/2.8 GM II',
          shutter: '1/30s',
          aperture: 'f/2.8',
          iso: '400',
          focalLength: '24mm'
        }
      },
      {
        id: 'alps-17',
        url: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1200&auto=format&fit=crop',
        title: 'Light Rays Through Larches',
        description: 'Magical golden afternoon sunbeams filtering through ancient alpine larch trees on a wet mountain slopes.',
        location: 'Zermatt Forests, Valais',
        date: '2024-07-04',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Leica M11',
          lens: 'Summilux-M 35mm f/1.4 ASPH',
          shutter: '1/160s',
          aperture: 'f/2.0',
          iso: '160',
          focalLength: '35mm'
        }
      },
      {
        id: 'alps-18',
        url: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?q=80&w=1200&auto=format&fit=crop',
        title: 'The Alpine Pasture',
        description: 'A sea of purple and yellow wildflowers swaying in mountain pastures, looking out to steep glacial cliffs.',
        location: 'Mürren Alpine Meadow',
        date: '2024-07-06',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Fujifilm X-T5',
          lens: 'XF 16-55mm f/2.8 R LM WR',
          shutter: '1/500s',
          aperture: 'f/4.0',
          iso: '200',
          focalLength: '35mm'
        }
      },
      {
        id: 'alps-19',
        url: 'https://images.unsplash.com/photo-1563170351-be82bc888bb4?q=80&w=1200&auto=format&fit=crop',
        title: 'Narrow Streets of Zermatt',
        description: 'Wandering through Zermatt town, capturing the classic dark larch wood facades standing on stone stilts.',
        location: 'Hinterdorf, Zermatt',
        date: '2024-07-04',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Leica M11',
          lens: 'Summicron-M 35mm f/2 ASPH',
          shutter: '1/125s',
          aperture: 'f/2.8',
          iso: '250',
          focalLength: '35mm'
        }
      },
      {
        id: 'alps-20',
        url: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1200&auto=format&fit=crop',
        title: 'The Alpine Ski Trails',
        description: 'A high-elevation snowy ridge trail looking out to a vast, untouched sea of white peaks in the Bernese Oberland.',
        location: 'Jungfrau Region',
        date: '2024-07-07',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 70-200mm f/2.8 GM OSS II',
          shutter: '1/1600s',
          aperture: 'f/8.0',
          iso: '100',
          focalLength: '70mm'
        }
      },
      {
        id: 'alps-21',
        url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
        title: 'On the Mountain Crest',
        description: 'A spectacular capture of a sheer rock ridge, showing the stark drops on either side of an alpine route.',
        location: 'Klingenstock Summit',
        date: '2024-07-11',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Fujifilm X-T5',
          lens: 'XF 10-24mm f/4 R OIS WR',
          shutter: '1/400s',
          aperture: 'f/6.3',
          iso: '160',
          focalLength: '12mm'
        }
      },
      {
        id: 'alps-22',
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
        title: 'Lake Lunch Break',
        description: 'A slow picnic set up by the shore of a quiet blue alpine lake, looking at mountains cutting the skies.',
        location: 'Lake Bachalpsee, Grindelwald',
        date: '2024-07-08',
        aspectRatio: 'square',
        exif: {
          camera: 'Fujifilm X-T5',
          lens: 'XF 23mm f/1.4 R LM WR',
          shutter: '1/500s',
          aperture: 'f/2.8',
          iso: '160',
          focalLength: '23mm'
        }
      },
      {
        id: 'alps-23',
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
        title: 'The Valley Village',
        description: 'Looking down into a historic Swiss village, with brown roofs standing out on lush emerald hillsides.',
        location: 'Wengen Village, Bern',
        date: '2024-07-06',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 24-70mm f/2.8 GM II',
          shutter: '1/250s',
          aperture: 'f/4.0',
          iso: '100',
          focalLength: '50mm'
        }
      },
      {
        id: 'alps-24',
        url: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?q=80&w=1200&auto=format&fit=crop',
        title: 'Ice Cave Exploration',
        description: 'Wandering deep inside a naturally occurring glacial cave, with light bouncing off crystalline walls.',
        location: 'Rhone Glacier Cave',
        date: '2024-07-10',
        aspectRatio: 'portrait',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 16-35mm f/4 G PZ',
          shutter: '1/15s',
          aperture: 'f/4.0',
          iso: '1250',
          focalLength: '16mm'
        }
      },
      {
        id: 'alps-25',
        url: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
        title: 'Matterhorn Golden peak',
        description: 'The final rays of the setting sun hitting only the absolute triangular peak of the majestic Matterhorn.',
        location: 'Riffelsee, Zermatt',
        date: '2024-07-04',
        aspectRatio: 'landscape',
        exif: {
          camera: 'Sony A7R V',
          lens: 'FE 70-200mm f/2.8 GM OSS II',
          shutter: '1/125s',
          aperture: 'f/2.8',
          iso: '200',
          focalLength: '200mm'
        }
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
