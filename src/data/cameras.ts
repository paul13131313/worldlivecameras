export type Category = 'wildlife' | 'aurora' | 'ocean' | 'mountain' | 'city' | 'zoo' | 'scenic';

export interface Camera {
  id: string;
  videoId: string;
  name: string;
  country: string;
  flag: string;
  category: Category;
  timezone: string;
  channel: string;
  channelUrl: string;
}

export const categoryLabels: Record<Category, string> = {
  wildlife: '野生動物',
  aurora: 'オーロラ',
  ocean: '海',
  mountain: '山',
  city: '都市',
  zoo: '動物',
  scenic: '絶景',
};

export const categoryColors: Record<Category, string> = {
  wildlife: 'bg-amber-800/60 text-amber-200',
  aurora: 'bg-purple-800/60 text-purple-200',
  ocean: 'bg-cyan-800/60 text-cyan-200',
  mountain: 'bg-emerald-800/60 text-emerald-200',
  city: 'bg-blue-800/60 text-blue-200',
  zoo: 'bg-pink-800/60 text-pink-200',
  scenic: 'bg-indigo-800/60 text-indigo-200',
};

export const cameras: Camera[] = [
  {
    id: 'tembe',
    videoId: 'gdrNUUf-cQw',
    name: 'Tembe Elephant Park',
    country: 'South Africa',
    flag: '🇿🇦',
    category: 'wildlife',
    timezone: 'Africa/Johannesburg',
    channel: 'Africam',
    channelUrl: 'https://www.youtube.com/@Africam',
  },
  {
    id: 'namibia',
    videoId: 'ydYDqZQpim8',
    name: 'Gondwana Namib Waterhole',
    country: 'Namibia',
    flag: '🇳🇦',
    category: 'wildlife',
    timezone: 'Africa/Windhoek',
    channel: 'NamibiaCam',
    channelUrl: 'https://www.youtube.com/@NamibiaCam',
  },
  {
    id: 'kenya',
    videoId: 'KyQAB-TKOVA',
    name: 'Mpala Research Centre',
    country: 'Kenya',
    flag: '🇰🇪',
    category: 'wildlife',
    timezone: 'Africa/Nairobi',
    channel: 'Explore.org',
    channelUrl: 'https://www.youtube.com/@ExploreLiveNatureCams',
  },
  {
    id: 'finland-aurora',
    videoId: 'iOmco6eIa-0',
    name: 'Lapland Sky Camera',
    country: 'Finland',
    flag: '🇫🇮',
    category: 'aurora',
    timezone: 'Europe/Helsinki',
    channel: 'Hotel Lapin Satu',
    channelUrl: 'https://www.youtube.com/@HotelLapinSatu',
  },
  {
    id: 'alaska-aurora',
    videoId: 'a0i1Kg6fROg',
    name: 'Fairbanks Aurora Cam',
    country: 'USA',
    flag: '🇺🇸',
    category: 'aurora',
    timezone: 'America/Anchorage',
    channel: 'Explore.org',
    channelUrl: 'https://www.youtube.com/@ExploreZenDen',
  },
  {
    id: 'pipeline',
    videoId: 'VI8Wj5EwoRM',
    name: 'Banzai Pipeline',
    country: 'Hawaii, USA',
    flag: '🇺🇸',
    category: 'ocean',
    timezone: 'Pacific/Honolulu',
    channel: 'Explore.org',
    channelUrl: 'https://www.youtube.com/@ExploreOceans',
  },
  {
    id: 'fuji',
    videoId: 'Sv9hcJ3k5h4',
    name: 'Mount Fuji',
    country: 'Japan',
    flag: '🇯🇵',
    category: 'mountain',
    timezone: 'Asia/Tokyo',
    channel: 'Fujiyama NAVI',
    channelUrl: 'https://www.youtube.com/@fujiyamanavi',
  },
  {
    id: 'shibuya',
    videoId: 'dfVK7ld38Ys',
    name: 'Shibuya Crossing',
    country: 'Japan',
    flag: '🇯🇵',
    category: 'city',
    timezone: 'Asia/Tokyo',
    channel: 'ANN newsCH',
    channelUrl: 'https://www.youtube.com/@ANNnewsCH',
  },
  {
    id: 'timessquare',
    videoId: 'rnXIjl_Rzy4',
    name: 'Times Square',
    country: 'USA',
    flag: '🇺🇸',
    category: 'city',
    timezone: 'America/New_York',
    channel: 'EarthCam',
    channelUrl: 'https://www.youtube.com/@EarthCam',
  },
  {
    id: 'panda',
    videoId: 'gnEuhfyZPPQ',
    name: 'Chengdu Panda Base',
    country: 'China',
    flag: '🇨🇳',
    category: 'zoo',
    timezone: 'Asia/Shanghai',
    channel: 'iPanda',
    channelUrl: 'https://www.youtube.com/@iPandaCam',
  },
  {
    id: 'iss',
    videoId: 'fO9e9jnhYK8',
    name: 'ISS Earth View',
    country: 'Space',
    flag: '🌍',
    category: 'scenic',
    timezone: 'UTC',
    channel: 'Sen',
    channelUrl: 'https://www.youtube.com/@SenSpace',
  },
  {
    id: 'venice',
    videoId: 'ph1vpnYIxJk',
    name: 'Venice Canals',
    country: 'Italy',
    flag: '🇮🇹',
    category: 'scenic',
    timezone: 'Europe/Rome',
    channel: 'I Love You Venice',
    channelUrl: 'https://www.youtube.com/@ILoveYouVenice',
  },
];
