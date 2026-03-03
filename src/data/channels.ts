import type { CameraGroup } from './cameras';
import { cameraGroups } from './cameras';

export type ChannelId = 'earth' | 'news' | 'music';

export interface Channel {
  id: ChannelId;
  label: string;
  emoji: string;
  groups: CameraGroup[];
  hasCategories: boolean;
}

const newsGroups: CameraGroup[] = [
  {
    category: 'news',
    slot: 1,
    highAvailability: true,
    cameras: [
      { name: 'Al Jazeera English', channelId: 'UCNye-wNBqNL5ZzHSJj3l8Bg', videoId: 'gCNeDWCI0vo', country: 'QATAR', flag: '🇶🇦', timezone: 'Asia/Qatar' },
      { name: 'France 24 English', channelId: 'UCCCPCZNChQdGa9EkATeye4g', videoId: 'l8PMl7tUDIE', country: 'FRANCE', flag: '🇫🇷', timezone: 'Europe/Paris' },
      { name: 'DW News', channelId: 'UCknLrEdhRCp1aegoMqRaCZg', videoId: 'LuKwFajn37U', country: 'GERMANY', flag: '🇩🇪', timezone: 'Europe/Berlin' },
    ],
  },
  {
    category: 'news',
    slot: 2,
    highAvailability: true,
    cameras: [
      { name: 'France 24 English', channelId: 'UCCCPCZNChQdGa9EkATeye4g', videoId: 'l8PMl7tUDIE', country: 'FRANCE', flag: '🇫🇷', timezone: 'Europe/Paris' },
      { name: 'Al Jazeera English', channelId: 'UCNye-wNBqNL5ZzHSJj3l8Bg', videoId: 'gCNeDWCI0vo', country: 'QATAR', flag: '🇶🇦', timezone: 'Asia/Qatar' },
      { name: 'WION', channelId: 'UC_gUM8rL-Lrg6O3adPW9K1g', videoId: 'X6pa-V9MS-c', country: 'INDIA', flag: '🇮🇳', timezone: 'Asia/Kolkata' },
    ],
  },
  {
    category: 'news',
    slot: 3,
    cameras: [
      { name: 'DW News', channelId: 'UCknLrEdhRCp1aegoMqRaCZg', videoId: 'LuKwFajn37U', country: 'GERMANY', flag: '🇩🇪', timezone: 'Europe/Berlin' },
      { name: 'France 24 English', channelId: 'UCCCPCZNChQdGa9EkATeye4g', videoId: 'l8PMl7tUDIE', country: 'FRANCE', flag: '🇫🇷', timezone: 'Europe/Paris' },
      { name: 'CNA', channelId: 'UC83jt4dlz1Gjl58fzQrrKZg', videoId: 'XWq5kBlakcQ', country: 'SINGAPORE', flag: '🇸🇬', timezone: 'Asia/Singapore' },
    ],
  },
  {
    category: 'news',
    slot: 4,
    cameras: [
      { name: 'NHK World-Japan', channelId: 'UCSPEjw8F2nQDtmUKPFNF7_A', videoId: 'f0lYkdA-Gtw', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
      { name: 'Arirang TV', channelId: 'UC-PHIZjV-oX8H7zD1cCN2NQ', videoId: 'CJVBX7KI5nU', country: 'SOUTH KOREA', flag: '🇰🇷', timezone: 'Asia/Seoul' },
      { name: 'CGTN', channelId: 'UCgrNz-aDmcr2uuto8_DL2jg', videoId: '4JB8pnqaibg', country: 'CHINA', flag: '🇨🇳', timezone: 'Asia/Shanghai' },
    ],
  },
  {
    category: 'news',
    slot: 5,
    cameras: [
      { name: 'CNA', channelId: 'UC83jt4dlz1Gjl58fzQrrKZg', videoId: 'XWq5kBlakcQ', country: 'SINGAPORE', flag: '🇸🇬', timezone: 'Asia/Singapore' },
      { name: 'NHK World-Japan', channelId: 'UCSPEjw8F2nQDtmUKPFNF7_A', videoId: 'f0lYkdA-Gtw', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
      { name: 'WION', channelId: 'UC_gUM8rL-Lrg6O3adPW9K1g', videoId: 'X6pa-V9MS-c', country: 'INDIA', flag: '🇮🇳', timezone: 'Asia/Kolkata' },
    ],
  },
  {
    category: 'news',
    slot: 6,
    cameras: [
      { name: 'WION', channelId: 'UC_gUM8rL-Lrg6O3adPW9K1g', videoId: 'X6pa-V9MS-c', country: 'INDIA', flag: '🇮🇳', timezone: 'Asia/Kolkata' },
      { name: 'Al Jazeera English', channelId: 'UCNye-wNBqNL5ZzHSJj3l8Bg', videoId: 'gCNeDWCI0vo', country: 'QATAR', flag: '🇶🇦', timezone: 'Asia/Qatar' },
      { name: 'DW News', channelId: 'UCknLrEdhRCp1aegoMqRaCZg', videoId: 'LuKwFajn37U', country: 'GERMANY', flag: '🇩🇪', timezone: 'Europe/Berlin' },
    ],
  },
  {
    category: 'news',
    slot: 7,
    cameras: [
      { name: 'Arirang TV', channelId: 'UC-PHIZjV-oX8H7zD1cCN2NQ', videoId: 'CJVBX7KI5nU', country: 'SOUTH KOREA', flag: '🇰🇷', timezone: 'Asia/Seoul' },
      { name: 'NHK World-Japan', channelId: 'UCSPEjw8F2nQDtmUKPFNF7_A', videoId: 'f0lYkdA-Gtw', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
      { name: 'CNA', channelId: 'UC83jt4dlz1Gjl58fzQrrKZg', videoId: 'XWq5kBlakcQ', country: 'SINGAPORE', flag: '🇸🇬', timezone: 'Asia/Singapore' },
    ],
  },
  {
    category: 'news',
    slot: 8,
    cameras: [
      { name: 'CGTN', channelId: 'UCgrNz-aDmcr2uuto8_DL2jg', videoId: '4JB8pnqaibg', country: 'CHINA', flag: '🇨🇳', timezone: 'Asia/Shanghai' },
      { name: 'Arirang TV', channelId: 'UC-PHIZjV-oX8H7zD1cCN2NQ', videoId: 'CJVBX7KI5nU', country: 'SOUTH KOREA', flag: '🇰🇷', timezone: 'Asia/Seoul' },
      { name: 'France 24 English', channelId: 'UCCCPCZNChQdGa9EkATeye4g', videoId: 'l8PMl7tUDIE', country: 'FRANCE', flag: '🇫🇷', timezone: 'Europe/Paris' },
    ],
  },
  {
    category: 'news',
    slot: 9,
    cameras: [
      { name: 'Al Jazeera English', channelId: 'UCNye-wNBqNL5ZzHSJj3l8Bg', videoId: 'gCNeDWCI0vo', country: 'QATAR', flag: '🇶🇦', timezone: 'Asia/Qatar' },
      { name: 'CGTN', channelId: 'UCgrNz-aDmcr2uuto8_DL2jg', videoId: '4JB8pnqaibg', country: 'CHINA', flag: '🇨🇳', timezone: 'Asia/Shanghai' },
      { name: 'DW News', channelId: 'UCknLrEdhRCp1aegoMqRaCZg', videoId: 'LuKwFajn37U', country: 'GERMANY', flag: '🇩🇪', timezone: 'Europe/Berlin' },
    ],
  },
  {
    category: 'news',
    slot: 10,
    cameras: [
      { name: 'France 24 English', channelId: 'UCCCPCZNChQdGa9EkATeye4g', videoId: 'l8PMl7tUDIE', country: 'FRANCE', flag: '🇫🇷', timezone: 'Europe/Paris' },
      { name: 'WION', channelId: 'UC_gUM8rL-Lrg6O3adPW9K1g', videoId: 'X6pa-V9MS-c', country: 'INDIA', flag: '🇮🇳', timezone: 'Asia/Kolkata' },
      { name: 'Al Jazeera English', channelId: 'UCNye-wNBqNL5ZzHSJj3l8Bg', videoId: 'gCNeDWCI0vo', country: 'QATAR', flag: '🇶🇦', timezone: 'Asia/Qatar' },
    ],
  },
  {
    category: 'news',
    slot: 11,
    cameras: [
      { name: 'DW News', channelId: 'UCknLrEdhRCp1aegoMqRaCZg', videoId: 'LuKwFajn37U', country: 'GERMANY', flag: '🇩🇪', timezone: 'Europe/Berlin' },
      { name: 'NHK World-Japan', channelId: 'UCSPEjw8F2nQDtmUKPFNF7_A', videoId: 'f0lYkdA-Gtw', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
      { name: 'CNA', channelId: 'UC83jt4dlz1Gjl58fzQrrKZg', videoId: 'XWq5kBlakcQ', country: 'SINGAPORE', flag: '🇸🇬', timezone: 'Asia/Singapore' },
    ],
  },
  {
    category: 'news',
    slot: 12,
    cameras: [
      { name: 'WION', channelId: 'UC_gUM8rL-Lrg6O3adPW9K1g', videoId: 'X6pa-V9MS-c', country: 'INDIA', flag: '🇮🇳', timezone: 'Asia/Kolkata' },
      { name: 'CGTN', channelId: 'UCgrNz-aDmcr2uuto8_DL2jg', videoId: '4JB8pnqaibg', country: 'CHINA', flag: '🇨🇳', timezone: 'Asia/Shanghai' },
      { name: 'Arirang TV', channelId: 'UC-PHIZjV-oX8H7zD1cCN2NQ', videoId: 'CJVBX7KI5nU', country: 'SOUTH KOREA', flag: '🇰🇷', timezone: 'Asia/Seoul' },
    ],
  },
];

const musicGroups: CameraGroup[] = [
  {
    category: 'music',
    slot: 1,
    highAvailability: true,
    cameras: [
      { name: 'Lofi Girl', channelId: 'UCSJ4gkVC6NrvII8umztf0Ow', videoId: 'jfKfPfyJRdk', country: 'LOFI HIP HOP', flag: '🎧', timezone: 'Europe/Paris' },
      { name: 'Chillhop Music', channelId: 'UCOxqgCwgOqC2lMqC5PYz_Dg', videoId: 'Mq-3Sjg41n4', country: 'CHILLHOP', flag: '🎵', timezone: 'Europe/Amsterdam' },
      { name: 'The Bootleg Boy', channelId: 'UC0fiLCwTmAukotCXYnqfj0A', videoId: 'FWjZ0x2M8og', country: 'LOFI', flag: '🎶', timezone: 'America/New_York' },
    ],
  },
  {
    category: 'music',
    slot: 2,
    highAvailability: true,
    cameras: [
      { name: 'Chillhop Music', channelId: 'UCOxqgCwgOqC2lMqC5PYz_Dg', videoId: 'Mq-3Sjg41n4', country: 'CHILLHOP', flag: '🎵', timezone: 'Europe/Amsterdam' },
      { name: 'Lofi Girl', channelId: 'UCSJ4gkVC6NrvII8umztf0Ow', videoId: 'jfKfPfyJRdk', country: 'LOFI HIP HOP', flag: '🎧', timezone: 'Europe/Paris' },
      { name: 'STEEZYASFUCK', channelId: 'UCsIg9WMfxjZZvwROleiVsQg', videoId: 'blAFxjhg62k', country: 'JAZZ HIP HOP', flag: '🎷', timezone: 'America/Los_Angeles' },
    ],
  },
  {
    category: 'music',
    slot: 3,
    cameras: [
      { name: 'Cafe Music BGM', channelId: 'UCJhjE7wbdYAae1G25m0tHAA', videoId: 'vgw70unQ2vo', country: 'JAZZ', flag: '☕', timezone: 'Asia/Tokyo' },
      { name: 'Lofi Girl', channelId: 'UCSJ4gkVC6NrvII8umztf0Ow', videoId: 'jfKfPfyJRdk', country: 'LOFI HIP HOP', flag: '🎧', timezone: 'Europe/Paris' },
      { name: 'Cozy Coffee Shop', channelId: 'UCIWAwKP3_KcWned5aLqZHtw', videoId: 'Gjlg6GGj5U4', country: 'COFFEE JAZZ', flag: '☕', timezone: 'America/New_York' },
    ],
  },
  {
    category: 'music',
    slot: 4,
    cameras: [
      { name: 'Yellow Brick Cinema', channelId: 'UCwobzUc3z-0PrFpoRxNszXQ', videoId: 'AK-gGnvqOMc', country: 'AMBIENT', flag: '🌿', timezone: 'America/New_York' },
      { name: 'Soothing Relaxation', channelId: 'UCjzHeG1KWoonmf9d5KBvSiw', videoId: 'w9S5ID3nfOc', country: 'PIANO', flag: '🎹', timezone: 'Europe/Stockholm' },
      { name: 'OCB Relax Music', channelId: 'UCb1ANUIW7arUUDI-Mwz65rw', videoId: '4khIPP--FDU', country: 'RELAX', flag: '🧘', timezone: 'Europe/Paris' },
    ],
  },
  {
    category: 'music',
    slot: 5,
    cameras: [
      { name: 'Soothing Relaxation', channelId: 'UCjzHeG1KWoonmf9d5KBvSiw', videoId: 'w9S5ID3nfOc', country: 'PIANO', flag: '🎹', timezone: 'Europe/Stockholm' },
      { name: 'Yellow Brick Cinema', channelId: 'UCwobzUc3z-0PrFpoRxNszXQ', videoId: 'AK-gGnvqOMc', country: 'AMBIENT', flag: '🌿', timezone: 'America/New_York' },
      { name: 'Cafe Music BGM', channelId: 'UCJhjE7wbdYAae1G25m0tHAA', videoId: 'vgw70unQ2vo', country: 'JAZZ', flag: '☕', timezone: 'Asia/Tokyo' },
    ],
  },
  {
    category: 'music',
    slot: 6,
    cameras: [
      { name: 'STEEZYASFUCK', channelId: 'UCsIg9WMfxjZZvwROleiVsQg', videoId: 'blAFxjhg62k', country: 'JAZZ HIP HOP', flag: '🎷', timezone: 'America/Los_Angeles' },
      { name: 'The Bootleg Boy', channelId: 'UC0fiLCwTmAukotCXYnqfj0A', videoId: 'FWjZ0x2M8og', country: 'LOFI', flag: '🎶', timezone: 'America/New_York' },
      { name: 'Chillhop Music', channelId: 'UCOxqgCwgOqC2lMqC5PYz_Dg', videoId: 'Mq-3Sjg41n4', country: 'CHILLHOP', flag: '🎵', timezone: 'Europe/Amsterdam' },
    ],
  },
  {
    category: 'music',
    slot: 7,
    cameras: [
      { name: 'The Bootleg Boy', channelId: 'UC0fiLCwTmAukotCXYnqfj0A', videoId: 'FWjZ0x2M8og', country: 'LOFI', flag: '🎶', timezone: 'America/New_York' },
      { name: 'Lofi Girl', channelId: 'UCSJ4gkVC6NrvII8umztf0Ow', videoId: 'jfKfPfyJRdk', country: 'LOFI HIP HOP', flag: '🎧', timezone: 'Europe/Paris' },
      { name: 'STEEZYASFUCK', channelId: 'UCsIg9WMfxjZZvwROleiVsQg', videoId: 'blAFxjhg62k', country: 'JAZZ HIP HOP', flag: '🎷', timezone: 'America/Los_Angeles' },
    ],
  },
  {
    category: 'music',
    slot: 8,
    cameras: [
      { name: 'OCB Relax Music', channelId: 'UCb1ANUIW7arUUDI-Mwz65rw', videoId: '4khIPP--FDU', country: 'RELAX', flag: '🧘', timezone: 'Europe/Paris' },
      { name: 'Soothing Relaxation', channelId: 'UCjzHeG1KWoonmf9d5KBvSiw', videoId: 'w9S5ID3nfOc', country: 'PIANO', flag: '🎹', timezone: 'Europe/Stockholm' },
      { name: 'Yellow Brick Cinema', channelId: 'UCwobzUc3z-0PrFpoRxNszXQ', videoId: 'AK-gGnvqOMc', country: 'AMBIENT', flag: '🌿', timezone: 'America/New_York' },
    ],
  },
  {
    category: 'music',
    slot: 9,
    cameras: [
      { name: 'Cozy Coffee Shop', channelId: 'UCIWAwKP3_KcWned5aLqZHtw', videoId: 'Gjlg6GGj5U4', country: 'COFFEE JAZZ', flag: '☕', timezone: 'America/New_York' },
      { name: 'Cafe Music BGM', channelId: 'UCJhjE7wbdYAae1G25m0tHAA', videoId: 'vgw70unQ2vo', country: 'JAZZ', flag: '☕', timezone: 'Asia/Tokyo' },
      { name: 'Lofi Girl', channelId: 'UCSJ4gkVC6NrvII8umztf0Ow', videoId: 'jfKfPfyJRdk', country: 'LOFI HIP HOP', flag: '🎧', timezone: 'Europe/Paris' },
    ],
  },
  {
    category: 'music',
    slot: 10,
    cameras: [
      { name: 'Cafe Music BGM', channelId: 'UCJhjE7wbdYAae1G25m0tHAA', videoId: 'vgw70unQ2vo', country: 'JAZZ', flag: '☕', timezone: 'Asia/Tokyo' },
      { name: 'Cozy Coffee Shop', channelId: 'UCIWAwKP3_KcWned5aLqZHtw', videoId: 'Gjlg6GGj5U4', country: 'COFFEE JAZZ', flag: '☕', timezone: 'America/New_York' },
      { name: 'Chillhop Music', channelId: 'UCOxqgCwgOqC2lMqC5PYz_Dg', videoId: 'Mq-3Sjg41n4', country: 'CHILLHOP', flag: '🎵', timezone: 'Europe/Amsterdam' },
    ],
  },
  {
    category: 'music',
    slot: 11,
    cameras: [
      { name: 'Chillhop Music', channelId: 'UCOxqgCwgOqC2lMqC5PYz_Dg', videoId: 'Mq-3Sjg41n4', country: 'CHILLHOP', flag: '🎵', timezone: 'Europe/Amsterdam' },
      { name: 'The Bootleg Boy', channelId: 'UC0fiLCwTmAukotCXYnqfj0A', videoId: 'FWjZ0x2M8og', country: 'LOFI', flag: '🎶', timezone: 'America/New_York' },
      { name: 'OCB Relax Music', channelId: 'UCb1ANUIW7arUUDI-Mwz65rw', videoId: '4khIPP--FDU', country: 'RELAX', flag: '🧘', timezone: 'Europe/Paris' },
    ],
  },
  {
    category: 'music',
    slot: 12,
    cameras: [
      { name: 'Lofi Girl', channelId: 'UCSJ4gkVC6NrvII8umztf0Ow', videoId: 'jfKfPfyJRdk', country: 'LOFI HIP HOP', flag: '🎧', timezone: 'Europe/Paris' },
      { name: 'Soothing Relaxation', channelId: 'UCjzHeG1KWoonmf9d5KBvSiw', videoId: 'w9S5ID3nfOc', country: 'PIANO', flag: '🎹', timezone: 'Europe/Stockholm' },
      { name: 'Cafe Music BGM', channelId: 'UCJhjE7wbdYAae1G25m0tHAA', videoId: 'vgw70unQ2vo', country: 'JAZZ', flag: '☕', timezone: 'Asia/Tokyo' },
    ],
  },
];

export const channels: Channel[] = [
  {
    id: 'earth',
    label: 'EARTH',
    emoji: '🌍',
    groups: cameraGroups,
    hasCategories: true,
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
];

export function getChannel(id: ChannelId): Channel {
  return channels.find((ch) => ch.id === id)!;
}
