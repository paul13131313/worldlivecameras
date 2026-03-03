import type { CameraGroup } from './cameras';
import { cameraGroups } from './cameras';

export type ChannelId = 'earth' | 'news' | 'music' | 'ocean' | 'city' | 'animal' | 'space' | 'volcano' | 'railroad' | 'weather';

export interface Channel {
  id: ChannelId;
  label: string;
  emoji: string;
  groups: CameraGroup[];
  hasCategories: boolean;
}

// NEWS: 12スロット = 12の異なるニュースチャンネル（重複なし）
const newsGroups: CameraGroup[] = [
  {
    category: 'news',
    slot: 1,
    highAvailability: true,
    cameras: [
      { name: 'Al Jazeera English', channelId: 'UCNye-wNBqNL5ZzHSJj3l8Bg', videoId: 'gCNeDWCI0vo', country: 'QATAR', flag: '🇶🇦', timezone: 'Asia/Qatar' },
    ],
  },
  {
    category: 'news',
    slot: 2,
    highAvailability: true,
    cameras: [
      { name: 'France 24 English', channelId: 'UCCCPCZNChQdGa9EkATeye4g', videoId: 'l8PMl7tUDIE', country: 'FRANCE', flag: '🇫🇷', timezone: 'Europe/Paris' },
    ],
  },
  {
    category: 'news',
    slot: 3,
    cameras: [
      { name: 'DW News', channelId: 'UCknLrEdhRCp1aegoMqRaCZg', videoId: 'LuKwFajn37U', country: 'GERMANY', flag: '🇩🇪', timezone: 'Europe/Berlin' },
    ],
  },
  {
    category: 'news',
    slot: 4,
    cameras: [
      { name: 'NHK World-Japan', channelId: 'UCSPEjw8F2nQDtmUKPFNF7_A', videoId: 'f0lYkdA-Gtw', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
    ],
  },
  {
    category: 'news',
    slot: 5,
    cameras: [
      { name: 'CNA', channelId: 'UC83jt4dlz1Gjl58fzQrrKZg', videoId: 'XWq5kBlakcQ', country: 'SINGAPORE', flag: '🇸🇬', timezone: 'Asia/Singapore' },
    ],
  },
  {
    category: 'news',
    slot: 6,
    cameras: [
      { name: 'WION', channelId: 'UC_gUM8rL-Lrg6O3adPW9K1g', videoId: 'X6pa-V9MS-c', country: 'INDIA', flag: '🇮🇳', timezone: 'Asia/Kolkata' },
    ],
  },
  {
    category: 'news',
    slot: 7,
    cameras: [
      { name: 'Arirang TV', channelId: 'UC-PHIZjV-oX8H7zD1cCN2NQ', videoId: 'CJVBX7KI5nU', country: 'SOUTH KOREA', flag: '🇰🇷', timezone: 'Asia/Seoul' },
    ],
  },
  {
    category: 'news',
    slot: 8,
    cameras: [
      { name: 'CGTN', channelId: 'UCgrNz-aDmcr2uuto8_DL2jg', videoId: '4JB8pnqaibg', country: 'CHINA', flag: '🇨🇳', timezone: 'Asia/Shanghai' },
    ],
  },
  {
    category: 'news',
    slot: 9,
    cameras: [
      { name: 'Euronews', channelId: 'UCSrZ3UV4jOidv8ppoVuvW9Q', videoId: 'pykpO5kQJ98', country: 'EUROPE', flag: '🇪🇺', timezone: 'Europe/Paris' },
    ],
  },
  {
    category: 'news',
    slot: 10,
    cameras: [
      { name: 'NDTV 24x7', channelId: 'UCZFMm1mMw0F81Z37aaEzTUA', videoId: '_h0KLwDm4Vg', country: 'INDIA', flag: '🇮🇳', timezone: 'Asia/Kolkata' },
    ],
  },
  {
    category: 'news',
    slot: 11,
    cameras: [
      { name: 'ABC News Australia', channelId: 'UCVgO39Bk5sMo66-6o6Spn6Q', videoId: 'vOTiJkg1voo', country: 'AUSTRALIA', flag: '🇦🇺', timezone: 'Australia/Sydney' },
    ],
  },
  {
    category: 'news',
    slot: 12,
    cameras: [
      { name: 'TeleSUR English', channelId: 'UCmuTmpLY35O3csvhyA6vrkg', videoId: '3nN3vtMzxTo', country: 'VENEZUELA', flag: '🇻🇪', timezone: 'America/Caracas' },
    ],
  },
];

// MUSIC: 12スロット = 12の異なる音楽チャンネル（重複なし）
const musicGroups: CameraGroup[] = [
  {
    category: 'music',
    slot: 1,
    highAvailability: true,
    cameras: [
      { name: 'Lofi Girl', channelId: 'UCSJ4gkVC6NrvII8umztf0Ow', videoId: 'jfKfPfyJRdk', country: 'LOFI HIP HOP', flag: '🎧', timezone: 'Europe/Paris' },
    ],
  },
  {
    category: 'music',
    slot: 2,
    highAvailability: true,
    cameras: [
      { name: 'Chillhop Music', channelId: 'UCOxqgCwgOqC2lMqC5PYz_Dg', videoId: 'Mq-3Sjg41n4', country: 'CHILLHOP', flag: '🎵', timezone: 'Europe/Amsterdam' },
    ],
  },
  {
    category: 'music',
    slot: 3,
    cameras: [
      { name: 'Cafe Music BGM', channelId: 'UCJhjE7wbdYAae1G25m0tHAA', videoId: 'vgw70unQ2vo', country: 'JAZZ', flag: '☕', timezone: 'Asia/Tokyo' },
    ],
  },
  {
    category: 'music',
    slot: 4,
    cameras: [
      { name: 'Yellow Brick Cinema', channelId: 'UCwobzUc3z-0PrFpoRxNszXQ', videoId: 'AK-gGnvqOMc', country: 'AMBIENT', flag: '🌿', timezone: 'America/New_York' },
    ],
  },
  {
    category: 'music',
    slot: 5,
    cameras: [
      { name: 'Soothing Relaxation', channelId: 'UCjzHeG1KWoonmf9d5KBvSiw', videoId: 'w9S5ID3nfOc', country: 'PIANO', flag: '🎹', timezone: 'Europe/Stockholm' },
    ],
  },
  {
    category: 'music',
    slot: 6,
    cameras: [
      { name: 'STEEZYASFUCK', channelId: 'UCsIg9WMfxjZZvwROleiVsQg', videoId: 'blAFxjhg62k', country: 'JAZZ HIP HOP', flag: '🎷', timezone: 'America/Los_Angeles' },
    ],
  },
  {
    category: 'music',
    slot: 7,
    cameras: [
      { name: 'The Bootleg Boy', channelId: 'UC0fiLCwTmAukotCXYnqfj0A', videoId: 'FWjZ0x2M8og', country: 'LOFI', flag: '🎶', timezone: 'America/New_York' },
    ],
  },
  {
    category: 'music',
    slot: 8,
    cameras: [
      { name: 'OCB Relax Music', channelId: 'UCb1ANUIW7arUUDI-Mwz65rw', videoId: '4khIPP--FDU', country: 'RELAX', flag: '🧘', timezone: 'Europe/Paris' },
    ],
  },
  {
    category: 'music',
    slot: 9,
    cameras: [
      { name: 'Cozy Coffee Shop', channelId: 'UCIWAwKP3_KcWned5aLqZHtw', videoId: 'Gjlg6GGj5U4', country: 'COFFEE JAZZ', flag: '☕', timezone: 'America/New_York' },
    ],
  },
  {
    category: 'music',
    slot: 10,
    cameras: [
      { name: 'Your Relax Music', channelId: 'UCm5J1Fu_dHgBMGOBbRY7KYg', videoId: 'HnIjDcVCNW4', country: 'MEDITATION', flag: '🌌', timezone: 'Europe/London' },
    ],
  },
  {
    category: 'music',
    slot: 11,
    cameras: [
      { name: 'Oneshinemusic', channelId: 'UCTbBzmNpMiRwMFQCOBCbRCA', videoId: 'Hbq56WnpJeE', country: 'TROPICAL', flag: '🌴', timezone: 'America/New_York' },
    ],
  },
  {
    category: 'music',
    slot: 12,
    cameras: [
      { name: 'Chili AI Music', channelId: 'UCAoX7r7wXKkwSOolURaidsA', videoId: 'X6EyMdL9vw0', country: 'TECHNO', flag: '🎛️', timezone: 'Europe/Berlin' },
    ],
  },
];

// OCEAN: 世界の海・水中・ビーチライブカメラ
const oceanGroups: CameraGroup[] = [
  {
    category: 'ocean',
    slot: 1,
    cameras: [
      { name: 'Banzai Pipeline', channelId: 'UCVjFf0Lf_hSdl-Hv1Gt3-Zg', videoId: 'DY5RYp4sxYc', country: 'HAWAII, USA', flag: '🇺🇸', timezone: 'Pacific/Honolulu' },
    ],
  },
  {
    category: 'ocean',
    slot: 2,
    cameras: [
      { name: 'Monterey Bay Jelly Cam', channelId: 'UCnM5iMGiKsZg-iOlIO2ZkdQ', videoId: 'NUnJc82ptd4', country: 'CALIFORNIA, USA', flag: '🇺🇸', timezone: 'America/Los_Angeles' },
    ],
  },
  {
    category: 'ocean',
    slot: 3,
    cameras: [
      { name: 'Monterey Bay Kelp Forest', channelId: 'UCnM5iMGiKsZg-iOlIO2ZkdQ', videoId: 'w3LjpFhySTg', country: 'CALIFORNIA, USA', flag: '🇺🇸', timezone: 'America/Los_Angeles' },
    ],
  },
  {
    category: 'ocean',
    slot: 4,
    cameras: [
      { name: 'Coral City Camera Miami', channelId: 'UCzJhDBpHBPOxMPIoc5BMNHQ', videoId: '7i8ARjIeM2k', country: 'FLORIDA, USA', flag: '🇺🇸', timezone: 'America/New_York' },
    ],
  },
  {
    category: 'ocean',
    slot: 5,
    cameras: [
      { name: 'Dubrovnik Banje Beach', channelId: 'UC8p5WnMzg8hZjdd5_C--ynQ', videoId: 'qWCDxVNdRkM', country: 'CROATIA', flag: '🇭🇷', timezone: 'Europe/Zagreb' },
    ],
  },
  {
    category: 'ocean',
    slot: 6,
    cameras: [
      { name: 'Geirangerfjord Norway', channelId: 'UCD3fPz7PdO06e8k75nIwifQ', videoId: 'S4aJlRY39fo', country: 'NORWAY', flag: '🇳🇴', timezone: 'Europe/Oslo' },
    ],
  },
  {
    category: 'ocean',
    slot: 7,
    cameras: [
      { name: 'Hjørundfjorden Fjord', channelId: 'UCD3fPz7PdO06e8k75nIwifQ', videoId: 'NKaFizWO6w0', country: 'NORWAY', flag: '🇳🇴', timezone: 'Europe/Oslo' },
    ],
  },
  {
    category: 'ocean',
    slot: 8,
    cameras: [
      { name: 'Waimea Bay Hawaii', channelId: 'UCVjFf0Lf_hSdl-Hv1Gt3-Zg', videoId: 'wnNrd-VjLsQ', country: 'HAWAII, USA', flag: '🇺🇸', timezone: 'Pacific/Honolulu' },
    ],
  },
  {
    category: 'ocean',
    slot: 9,
    highAvailability: true,
    cameras: [
      { name: 'Okinawa Churaumi Aquarium', channelId: 'UCXjkj8-HaOvX7o-fzhOu7Ng', videoId: 'GJiQWmjBfVo', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
    ],
  },
  {
    category: 'ocean',
    slot: 10,
    cameras: [
      { name: 'Monterey Bay Sea Otter', channelId: 'UCnM5iMGiKsZg-iOlIO2ZkdQ', videoId: 'abbR-Ttd-cA', country: 'CALIFORNIA, USA', flag: '🇺🇸', timezone: 'America/Los_Angeles' },
    ],
  },
  {
    category: 'ocean',
    slot: 11,
    cameras: [
      { name: 'Dubrovnik Cavtat View', channelId: 'UC8p5WnMzg8hZjdd5_C--ynQ', videoId: 'uKVVxKvPkKg', country: 'CROATIA', flag: '🇭🇷', timezone: 'Europe/Zagreb' },
    ],
  },
  {
    category: 'ocean',
    slot: 12,
    cameras: [
      { name: 'Monterey Bay Moon Jelly', channelId: 'UCnM5iMGiKsZg-iOlIO2ZkdQ', videoId: 'IeWhbCe2Krk', country: 'CALIFORNIA, USA', flag: '🇺🇸', timezone: 'America/Los_Angeles' },
    ],
  },
];

// CITY: 世界の都市ライブカメラ
const cityGroups: CameraGroup[] = [
  {
    category: 'city',
    slot: 1,
    highAvailability: true,
    cameras: [
      { name: 'Shibuya Crossing', channelId: 'UCGCZAYq5Xxojl_tSXcVJhiQ', videoId: '8H3nRCFVR6Y', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
    ],
  },
  {
    category: 'city',
    slot: 2,
    highAvailability: true,
    cameras: [
      { name: 'Times Square 4K', channelId: 'UC6qrG3W8SMK0jior2olka3g', videoId: 'rnXIjl_Rzy4', country: 'USA', flag: '🇺🇸', timezone: 'America/New_York' },
    ],
  },
  {
    category: 'city',
    slot: 3,
    cameras: [
      { name: 'Abbey Road London', channelId: 'UC6qrG3W8SMK0jior2olka3g', videoId: 'M3EYAY2MftI', country: 'UK', flag: '🇬🇧', timezone: 'Europe/London' },
    ],
  },
  {
    category: 'city',
    slot: 4,
    cameras: [
      { name: 'Venice Grand Canal', channelId: 'UCMpn1qLudF-zb4M4bqxLIbw', videoId: 'lFQ_BvxIcnI', country: 'ITALY', flag: '🇮🇹', timezone: 'Europe/Rome' },
    ],
  },
  {
    category: 'city',
    slot: 5,
    cameras: [
      { name: 'Prague City View', channelId: 'UCTWiGrfNRpOLmHkiRPmulVQ', videoId: 'IFnbDmgP69Q', country: 'CZECH REPUBLIC', flag: '🇨🇿', timezone: 'Europe/Prague' },
    ],
  },
  {
    category: 'city',
    slot: 6,
    cameras: [
      { name: 'Amsterdam Singel Canal', channelId: 'UCa9KQ9U8iKSYGR-m7FJ0XzA', videoId: 'ZnOoxCd7BGU', country: 'NETHERLANDS', flag: '🇳🇱', timezone: 'Europe/Amsterdam' },
    ],
  },
  {
    category: 'city',
    slot: 7,
    cameras: [
      { name: 'Dubrovnik Stradun', channelId: 'UC8p5WnMzg8hZjdd5_C--ynQ', videoId: 'TkIsMGMk8V8', country: 'CROATIA', flag: '🇭🇷', timezone: 'Europe/Zagreb' },
    ],
  },
  {
    category: 'city',
    slot: 8,
    cameras: [
      { name: 'Kyoto Nishiki Market', channelId: 'UCiO1X79VTO5MV-8EyNWFOpQ', videoId: 'wuC8wRvXock', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
    ],
  },
  {
    category: 'city',
    slot: 9,
    cameras: [
      { name: 'Paris Eiffel Tower', channelId: 'UCfkbmwi67lrETUqnOmf-Hqw', videoId: 'OzYp4NRZlwQ', country: 'FRANCE', flag: '🇫🇷', timezone: 'Europe/Paris' },
    ],
  },
  {
    category: 'city',
    slot: 10,
    cameras: [
      { name: 'Venice Scalzi Bridge 4K', channelId: 'UCMpn1qLudF-zb4M4bqxLIbw', videoId: '4wKN93E3K8g', country: 'ITALY', flag: '🇮🇹', timezone: 'Europe/Rome' },
    ],
  },
  {
    category: 'city',
    slot: 11,
    cameras: [
      { name: 'Kyoto Kiyomizuzaka', channelId: 'UCiO1X79VTO5MV-8EyNWFOpQ', videoId: 'cUnYPpK7ENk', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
    ],
  },
  {
    category: 'city',
    slot: 12,
    cameras: [
      { name: 'Kyoto Fushimi Inari', channelId: 'UCiO1X79VTO5MV-8EyNWFOpQ', videoId: 'MMeBDRfRHyA', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
    ],
  },
];

// ANIMAL: 世界の動物園・保護施設・巣のライブカメラ
const animalGroups: CameraGroup[] = [
  {
    category: 'animal',
    slot: 1,
    highAvailability: true,
    cameras: [
      { name: 'iPanda Chengdu', channelId: 'UCtEgLf0_j1vJLz0aNEdO2SQ', videoId: '_A_-TjdZ7lw', country: 'CHINA', flag: '🇨🇳', timezone: 'Asia/Shanghai' },
    ],
  },
  {
    category: 'animal',
    slot: 2,
    cameras: [
      { name: 'Monterey Bay Jellyfish', channelId: 'UCnM5iMGiKsZg-iOlIO2ZkdQ', videoId: 'NUnJc82ptd4', country: 'USA', flag: '🇺🇸', timezone: 'America/Los_Angeles' },
    ],
  },
  {
    category: 'animal',
    slot: 3,
    cameras: [
      { name: 'Monterey Bay Sea Otter', channelId: 'UCnM5iMGiKsZg-iOlIO2ZkdQ', videoId: 'abbR-Ttd-cA', country: 'USA', flag: '🇺🇸', timezone: 'America/Los_Angeles' },
    ],
  },
  {
    category: 'animal',
    slot: 4,
    cameras: [
      { name: 'Kenya Mpala Waterhole', channelId: 'UC-2KSeUU5SMCX6XLRD-AEvw', videoId: 'KyQAB-TKOVA', country: 'KENYA', flag: '🇰🇪', timezone: 'Africa/Nairobi' },
    ],
  },
  {
    category: 'animal',
    slot: 5,
    highAvailability: true,
    cameras: [
      { name: 'Alaska Bear Cam (Katmai)', channelId: 'UC-2KSeUU5SMCX6XLRD-AEvw', videoId: 'HsLvnFQW_yM', country: 'USA', flag: '🇺🇸', timezone: 'America/Anchorage' },
    ],
  },
  {
    category: 'animal',
    slot: 6,
    cameras: [
      { name: 'Decorah Eagle Nest', channelId: 'UCoC_-rIBtLCzAl5l-834jZQ', videoId: 'ry8_KAn9Pzg', country: 'USA', flag: '🇺🇸', timezone: 'America/Chicago' },
    ],
  },
  {
    category: 'animal',
    slot: 7,
    cameras: [
      { name: 'Cape Town Penguin Colony', channelId: 'UC-2KSeUU5SMCX6XLRD-AEvw', videoId: 'StGk_2DA5ig', country: 'SOUTH AFRICA', flag: '🇿🇦', timezone: 'Africa/Johannesburg' },
    ],
  },
  {
    category: 'animal',
    slot: 8,
    cameras: [
      { name: 'Costa Rica Sloth Cam', channelId: 'UC-2KSeUU5SMCX6XLRD-AEvw', videoId: 'HViersODKVQ', country: 'COSTA RICA', flag: '🇨🇷', timezone: 'America/Costa_Rica' },
    ],
  },
  {
    category: 'animal',
    slot: 9,
    cameras: [
      { name: 'Tembe Elephant Park', channelId: 'UCuoNAKa3P0QR1Lw9QdpmoVg', videoId: 'zqc0Z2oWmo8', country: 'SOUTH AFRICA', flag: '🇿🇦', timezone: 'Africa/Johannesburg' },
    ],
  },
  {
    category: 'animal',
    slot: 10,
    cameras: [
      { name: 'Namib Waterhole', channelId: 'UC9X6gGKDv2yhMoofoeS7-Gg', videoId: 'ME0dPuBtzug', country: 'NAMIBIA', flag: '🇳🇦', timezone: 'Africa/Windhoek' },
    ],
  },
  {
    category: 'animal',
    slot: 11,
    cameras: [
      { name: 'Lone Pine Koala', channelId: 'UCGL4W-Vvt7ndk-XrPQ1im_A', videoId: 'xdPbkvRbCZk', country: 'AUSTRALIA', flag: '🇦🇺', timezone: 'Australia/Brisbane' },
    ],
  },
  {
    category: 'animal',
    slot: 12,
    cameras: [
      { name: 'Explore Nature Cams', channelId: 'UC-2KSeUU5SMCX6XLRD-AEvw', videoId: 'ObR7SBKrkXc', country: 'VARIOUS', flag: '🌍', timezone: 'Africa/Nairobi' },
    ],
  },
];

// SPACE: 宇宙・天文ライブカメラ
const spaceGroups: CameraGroup[] = [
  {
    category: 'space',
    slot: 1,
    highAvailability: true,
    cameras: [
      { name: 'ISS HD Earth View', channelId: 'UCLA_DiR1FfKNvjuUpBHmylQ', videoId: '21X5lGlDOfg', country: 'SPACE', flag: '🌍', timezone: 'UTC' },
    ],
  },
  {
    category: 'space',
    slot: 2,
    cameras: [
      { name: 'ISS Forward Camera', channelId: 'UCmheCYT4HlbFi943lpH8CA', videoId: 'P57qbXekG9Y', country: 'SPACE', flag: '🛸', timezone: 'UTC' },
    ],
  },
  {
    category: 'space',
    slot: 3,
    cameras: [
      { name: 'SpaceX Starbase (LabPadre)', channelId: 'UCFwMITSkc1Fms6PoJoh1OUQ', videoId: 'tS2PHJmvJzo', country: 'USA', flag: '🇺🇸', timezone: 'America/Chicago' },
    ],
  },
  {
    category: 'space',
    slot: 4,
    cameras: [
      { name: 'Starbase Live (NASASpaceflight)', channelId: 'UCSUu1lih2RifWkKtDOJdsBA', videoId: 'mhJRzQsLZGg', country: 'USA', flag: '🇺🇸', timezone: 'America/Chicago' },
    ],
  },
  {
    category: 'space',
    slot: 5,
    cameras: [
      { name: 'Lapland Aurora Cam', channelId: 'UC-whuqv4HIi1O9hh9CHpPJg', videoId: 'bOEvPL206Hc', country: 'FINLAND', flag: '🇫🇮', timezone: 'Europe/Helsinki' },
    ],
  },
  {
    category: 'space',
    slot: 6,
    cameras: [
      { name: 'Lapland Inari Aurora', channelId: 'UC-whuqv4HIi1O9hh9CHpPJg', videoId: 'P5Txi7u6tBs', country: 'FINLAND', flag: '🇫🇮', timezone: 'Europe/Helsinki' },
    ],
  },
  {
    category: 'space',
    slot: 7,
    cameras: [
      { name: 'Lapland Posio Aurora', channelId: 'UC-whuqv4HIi1O9hh9CHpPJg', videoId: 'iOmco6eIa-0', country: 'FINLAND', flag: '🇫🇮', timezone: 'Europe/Helsinki' },
    ],
  },
  {
    category: 'space',
    slot: 8,
    cameras: [
      { name: 'Iceland Aurora', channelId: 'UC7sG1cQ5TFIJarNQa2SSfGw', videoId: 'x60l2rXh47c', country: 'ICELAND', flag: '🇮🇸', timezone: 'Atlantic/Reykjavik' },
    ],
  },
  {
    category: 'space',
    slot: 9,
    highAvailability: true,
    cameras: [
      { name: 'Mauna Kea StarCam', channelId: 'UCiN7OwV8g8dMm_E0xphBVig', videoId: 'qh6Nqiq6LIg', country: 'HAWAII, USA', flag: '🇺🇸', timezone: 'Pacific/Honolulu' },
    ],
  },
  {
    category: 'space',
    slot: 10,
    cameras: [
      { name: 'NASA Kennedy Space Center', channelId: 'UCVTomc35agH1SMHanELSLow', videoId: 'nA9UZF-SZoQ', country: 'USA', flag: '🇺🇸', timezone: 'America/New_York' },
    ],
  },
  {
    category: 'space',
    slot: 11,
    cameras: [
      { name: 'Sen 4K ISS View', channelId: 'UCUTDUagK6ql7kWY0QMdYWFw', videoId: 'DDU-rZs-Ic4', country: 'UK', flag: '🇬🇧', timezone: 'Europe/London' },
    ],
  },
  {
    category: 'space',
    slot: 12,
    cameras: [
      { name: 'NASA Live', channelId: 'UCLA_DiR1FfKNvjuUpBHmylQ', videoId: 'FV4Q9DryTG8', country: 'USA', flag: '🇺🇸', timezone: 'America/New_York' },
    ],
  },
];

// VOLCANO: 世界の火山・地球活動ライブカメラ
const volcanoGroups: CameraGroup[] = [
  {
    category: 'volcano',
    slot: 1,
    highAvailability: true,
    cameras: [
      { name: 'Kilauea V1cam (West Crater)', channelId: 'UCeXH8GZyV3sVqAr45AvupOA', videoId: 'tk0tfYDxrUA', country: 'HAWAII, USA', flag: '🇺🇸', timezone: 'Pacific/Honolulu' },
    ],
  },
  {
    category: 'volcano',
    slot: 2,
    cameras: [
      { name: 'Kilauea V3cam (South Crater)', channelId: 'UCeXH8GZyV3sVqAr45AvupOA', videoId: 'gXKuUyKt8mc', country: 'HAWAII, USA', flag: '🇺🇸', timezone: 'Pacific/Honolulu' },
    ],
  },
  {
    category: 'volcano',
    slot: 3,
    highAvailability: true,
    cameras: [
      { name: 'Iceland Volcano Watch', channelId: 'UCaG0IHN1RMOZ4-U3wDXAkwA', videoId: '4B-xBkUX4jM', country: 'ICELAND', flag: '🇮🇸', timezone: 'Atlantic/Reykjavik' },
    ],
  },
  {
    category: 'volcano',
    slot: 4,
    cameras: [
      { name: 'Sakurajima Live', channelId: 'UCpWU25qIleNLmUEF9VwBdMA', videoId: 'uCbr0YLxsac', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
    ],
  },
  {
    category: 'volcano',
    slot: 5,
    cameras: [
      { name: 'Mount Etna 24/7', channelId: 'UCaG0IHN1RMOZ4-U3wDXAkwA', videoId: 'EGk3Mr0OshE', country: 'ITALY', flag: '🇮🇹', timezone: 'Europe/Rome' },
    ],
  },
  {
    category: 'volcano',
    slot: 6,
    cameras: [
      { name: 'Popocatépetl 4K', channelId: 'UCaG0IHN1RMOZ4-U3wDXAkwA', videoId: '-l4Vu6gdGZ4', country: 'MEXICO', flag: '🇲🇽', timezone: 'America/Mexico_City' },
    ],
  },
  {
    category: 'volcano',
    slot: 7,
    cameras: [
      { name: 'Mount Merapi 4K', channelId: 'UCaG0IHN1RMOZ4-U3wDXAkwA', videoId: 'qPBKLNe5-Jc', country: 'INDONESIA', flag: '🇮🇩', timezone: 'Asia/Jakarta' },
    ],
  },
  {
    category: 'volcano',
    slot: 8,
    cameras: [
      { name: 'Mount Aso Live', channelId: 'UCwQ7n1SvtocHAaOlCKnM32A', videoId: 'aVGYOlIzV0A', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
    ],
  },
  {
    category: 'volcano',
    slot: 9,
    cameras: [
      { name: 'Old Faithful Yellowstone', channelId: 'UCHxMx-U1BRljvROSw3Mx3jQ', videoId: 'BWnloy8r0qU', country: 'USA', flag: '🇺🇸', timezone: 'America/Denver' },
    ],
  },
  {
    category: 'volcano',
    slot: 10,
    cameras: [
      { name: 'Kanlaon Volcano Philippines', channelId: 'UCaG0IHN1RMOZ4-U3wDXAkwA', videoId: 'JVLVCSfQLYQ', country: 'PHILIPPINES', flag: '🇵🇭', timezone: 'Asia/Manila' },
    ],
  },
  {
    category: 'volcano',
    slot: 11,
    cameras: [
      { name: 'Global Volcano Monitor', channelId: 'UCaG0IHN1RMOZ4-U3wDXAkwA', videoId: 'S5M-qDFyYxs', country: 'GLOBAL', flag: '🌋', timezone: 'UTC' },
    ],
  },
  {
    category: 'volcano',
    slot: 12,
    cameras: [
      { name: 'Iceland Reykjanes Multi-cam', channelId: 'UCaG0IHN1RMOZ4-U3wDXAkwA', videoId: 'eYW_FvsDfZ8', country: 'ICELAND', flag: '🇮🇸', timezone: 'Atlantic/Reykjavik' },
    ],
  },
];

// RAILROAD: 世界の鉄道ライブカメラ
const railroadGroups: CameraGroup[] = [
  {
    category: 'railroad',
    slot: 1,
    highAvailability: true,
    cameras: [
      { name: 'Tehachapi Loop', channelId: 'UC6RIkXobtXWJElbwEHIC-sg', videoId: 'pCpkspPc-n0', country: 'USA', flag: '🇺🇸', timezone: 'America/Los_Angeles' },
    ],
  },
  {
    category: 'railroad',
    slot: 2,
    cameras: [
      { name: 'Railcam UK (Seaton Tramway)', channelId: 'UC6YuojLzzdEMjbFiMHyecug', videoId: 'd41DPPsnHaY', country: 'UK', flag: '🇬🇧', timezone: 'Europe/London' },
    ],
  },
  {
    category: 'railroad',
    slot: 3,
    cameras: [
      { name: 'Railcam Hannover', channelId: 'UCKUb0TwifX_aQODQosDAfoA', videoId: 'D8OX81BWMpU', country: 'GERMANY', flag: '🇩🇪', timezone: 'Europe/Berlin' },
    ],
  },
  {
    category: 'railroad',
    slot: 4,
    highAvailability: true,
    cameras: [
      { name: 'Tohoku Shinkansen Live', channelId: 'UCHxsYayZMyj1RbaAgxU0lCQ', videoId: 'rsbGgSQi4bg', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
    ],
  },
  {
    category: 'railroad',
    slot: 5,
    cameras: [
      { name: 'Fort Madison Train Cam', channelId: 'UCOIkT9bq-1N2BvrsBjhNlag', videoId: 'cOHhA_XIZZw', country: 'USA', flag: '🇺🇸', timezone: 'America/Chicago' },
    ],
  },
  {
    category: 'railroad',
    slot: 6,
    cameras: [
      { name: 'Norway Cab View', channelId: 'UCeIU079SsB5QF7sW1XVbiuw', videoId: 'tAWFO8_O_7M', country: 'NORWAY', flag: '🇳🇴', timezone: 'Europe/Oslo' },
    ],
  },
  {
    category: 'railroad',
    slot: 7,
    cameras: [
      { name: 'Virtual Railfan (Muncie IN)', channelId: 'UCOIkT9bq-1N2BvrsBjhNlag', videoId: '5JG-4mwWWrQ', country: 'USA', flag: '🇺🇸', timezone: 'America/Indiana/Indianapolis' },
    ],
  },
  {
    category: 'railroad',
    slot: 8,
    cameras: [
      { name: 'RailCam Netherlands', channelId: 'UC2qwiv3R_Dqrp15vh7cpH9Q', videoId: 'TcJvbahPke8', country: 'NETHERLANDS', flag: '🇳🇱', timezone: 'Europe/Amsterdam' },
    ],
  },
  {
    category: 'railroad',
    slot: 9,
    cameras: [
      { name: 'Japan Shinkansen Alt', channelId: 'UCHxsYayZMyj1RbaAgxU0lCQ', videoId: 'sgrAfWdVa0E', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
    ],
  },
  {
    category: 'railroad',
    slot: 10,
    cameras: [
      { name: 'Railcam UK York', channelId: 'UC6YuojLzzdEMjbFiMHyecug', videoId: 'vByZX49lCic', country: 'UK', flag: '🇬🇧', timezone: 'Europe/London' },
    ],
  },
  {
    category: 'railroad',
    slot: 11,
    cameras: [
      { name: 'Railcam UK Lynton', channelId: 'UC6YuojLzzdEMjbFiMHyecug', videoId: 'ZB45BTgSUAk', country: 'UK', flag: '🇬🇧', timezone: 'Europe/London' },
    ],
  },
  {
    category: 'railroad',
    slot: 12,
    cameras: [
      { name: 'Virtual Railfan Alt', channelId: 'UCOIkT9bq-1N2BvrsBjhNlag', videoId: 'wK-k4cmiH2o', country: 'USA', flag: '🇺🇸', timezone: 'America/New_York' },
    ],
  },
];

// WEATHER: 世界の気象・嵐ライブカメラ
const weatherGroups: CameraGroup[] = [
  {
    category: 'weather',
    slot: 1,
    cameras: [
      { name: 'Texas Storm Chasers', channelId: 'UCoIfgmxArIATc2EpHD3W9EA', videoId: 'So8K7n6tYRA', country: 'USA', flag: '🇺🇸', timezone: 'America/Chicago' },
    ],
  },
  {
    category: 'weather',
    slot: 2,
    highAvailability: true,
    cameras: [
      { name: 'Mt Washington Wildcat Cam', channelId: 'UCq-cqqXchflIRPLsf_n3wlg', videoId: 'BPeJ6VT8t3k', country: 'USA', flag: '🇺🇸', timezone: 'America/New_York' },
    ],
  },
  {
    category: 'weather',
    slot: 3,
    cameras: [
      { name: 'Mt Washington Presidentials', channelId: 'UCq-cqqXchflIRPLsf_n3wlg', videoId: 'zJjiTnGlSSM', country: 'USA', flag: '🇺🇸', timezone: 'America/New_York' },
    ],
  },
  {
    category: 'weather',
    slot: 4,
    cameras: [
      { name: 'Mt Washington Tower Cam', channelId: 'UCq-cqqXchflIRPLsf_n3wlg', videoId: 'EVW-Q363_b8', country: 'USA', flag: '🇺🇸', timezone: 'America/New_York' },
    ],
  },
  {
    category: 'weather',
    slot: 5,
    highAvailability: true,
    cameras: [
      { name: 'Swiss Alps Panorama 24/7', channelId: 'UC9xLSF0SZDbVa70iTpghQBw', videoId: 'enYFXf8u7Lc', country: 'SWITZERLAND', flag: '🇨🇭', timezone: 'Europe/Zurich' },
    ],
  },
  {
    category: 'weather',
    slot: 6,
    cameras: [
      { name: 'Iceland Volcano & Weather', channelId: 'UCaG0IHN1RMOZ4-U3wDXAkwA', videoId: '4B-xBkUX4jM', country: 'ICELAND', flag: '🇮🇸', timezone: 'Atlantic/Reykjavik' },
    ],
  },
  {
    category: 'weather',
    slot: 7,
    cameras: [
      { name: 'Himawari Satellite Live', channelId: 'UCxfKytzQPCOfyhdsp48CD_A', videoId: 'ch9_qqoxQwU', country: 'GLOBAL', flag: '🌏', timezone: 'Asia/Tokyo' },
    ],
  },
  {
    category: 'weather',
    slot: 8,
    cameras: [
      { name: 'Earth Cloud Satellite', channelId: 'UCxfKytzQPCOfyhdsp48CD_A', videoId: 'ELIW5qiE5Yw', country: 'GLOBAL', flag: '🌍', timezone: 'UTC' },
    ],
  },
  {
    category: 'weather',
    slot: 9,
    cameras: [
      { name: 'Sydney Harbour Weather', channelId: 'UCcVY8_gD43Eh4FYE0TS-gqQ', videoId: '5uZa3-RMFos', country: 'AUSTRALIA', flag: '🇦🇺', timezone: 'Australia/Sydney' },
    ],
  },
  {
    category: 'weather',
    slot: 10,
    cameras: [
      { name: 'Geirangerfjord Weather', channelId: 'UCD3fPz7PdO06e8k75nIwifQ', videoId: 'S4aJlRY39fo', country: 'NORWAY', flag: '🇳🇴', timezone: 'Europe/Oslo' },
    ],
  },
  {
    category: 'weather',
    slot: 11,
    cameras: [
      { name: 'Lapland Arctic Sky', channelId: 'UC-whuqv4HIi1O9hh9CHpPJg', videoId: 'bOEvPL206Hc', country: 'FINLAND', flag: '🇫🇮', timezone: 'Europe/Helsinki' },
    ],
  },
  {
    category: 'weather',
    slot: 12,
    cameras: [
      { name: 'Sakurajima Weather Cam', channelId: 'UCpWU25qIleNLmUEF9VwBdMA', videoId: 'uCbr0YLxsac', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
    ],
  },
];

export const channels: Channel[] = [
  {
    id: 'earth',
    label: 'EARTH',
    emoji: '🌍',
    groups: cameraGroups,
    hasCategories: false,
  },
  {
    id: 'news',
    label: 'NEWS',
    emoji: '📰',
    groups: newsGroups,
    hasCategories: false,
  },
  {
    id: 'music',
    label: 'MUSIC',
    emoji: '🎵',
    groups: musicGroups,
    hasCategories: false,
  },
  {
    id: 'ocean',
    label: 'OCEAN',
    emoji: '🌊',
    groups: oceanGroups,
    hasCategories: false,
  },
  {
    id: 'city',
    label: 'CITY',
    emoji: '🏙️',
    groups: cityGroups,
    hasCategories: false,
  },
  {
    id: 'animal',
    label: 'ANIMAL',
    emoji: '🐾',
    groups: animalGroups,
    hasCategories: false,
  },
  {
    id: 'space',
    label: 'SPACE',
    emoji: '🌌',
    groups: spaceGroups,
    hasCategories: false,
  },
  {
    id: 'volcano',
    label: 'VOLCANO',
    emoji: '🌋',
    groups: volcanoGroups,
    hasCategories: false,
  },
  {
    id: 'railroad',
    label: 'RAILROAD',
    emoji: '🚂',
    groups: railroadGroups,
    hasCategories: false,
  },
  {
    id: 'weather',
    label: 'WEATHER',
    emoji: '⛈️',
    groups: weatherGroups,
    hasCategories: false,
  },
];

export function getChannel(id: ChannelId): Channel {
  return channels.find((ch) => ch.id === id)!;
}
