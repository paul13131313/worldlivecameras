export type Category = 'wildlife' | 'aurora' | 'ocean' | 'mountain' | 'city' | 'zoo' | 'scenic' | 'news' | 'music';

export interface CameraCandidate {
  name: string;
  channelId: string;
  videoId: string;
  country: string;
  flag: string;
  timezone: string;
}

export interface CameraGroup {
  category: Category;
  slot: number;
  /** true = ISS/Namib等の高安定カメラ。OFFLINEリトライ間隔を短くする */
  highAvailability?: boolean;
  cameras: CameraCandidate[];
}

export interface ActiveCamera extends CameraCandidate {
  category: Category;
}

export const categoryLabels: Record<Category, string> = {
  wildlife: '野生動物',
  aurora: 'オーロラ',
  ocean: '海',
  mountain: '山',
  city: '都市',
  zoo: '動物',
  scenic: '絶景',
  news: 'ニュース',
  music: '音楽',
};

export const cameraGroups: CameraGroup[] = [
  // Slot 1: 🇳🇦 ナミブ砂漠の水場
  {
    category: 'wildlife',
    slot: 1,
    highAvailability: true,
    cameras: [
      { name: 'Namib Waterhole', channelId: 'UC9X6gGKDv2yhMoofoeS7-Gg', videoId: 'ME0dPuBtzug', country: 'NAMIBIA', flag: '🇳🇦', timezone: 'Africa/Windhoek' },
    ],
  },
  // Slot 2: 🌍 ISS Earth View（NASA）
  {
    category: 'scenic',
    slot: 2,
    highAvailability: true,
    cameras: [
      { name: 'ISS Earth View', channelId: 'UCLA_DiR1FfKNvjuUpBHmylQ', videoId: 'FV4Q9DryTG8', country: 'SPACE', flag: '🌍', timezone: 'UTC' },
    ],
  },
  // Slot 3: 🇿🇦 Tembe Elephant Park
  {
    category: 'wildlife',
    slot: 3,
    cameras: [
      { name: 'Tembe Elephant Park', channelId: 'UCuoNAKa3P0QR1Lw9QdpmoVg', videoId: 'zqc0Z2oWmo8', country: 'SOUTH AFRICA', flag: '🇿🇦', timezone: 'Africa/Johannesburg' },
    ],
  },
  // Slot 4: 🇨🇳 iPanda Chengdu（パンダ）
  {
    category: 'zoo',
    slot: 4,
    cameras: [
      { name: 'Chengdu Panda Base', channelId: 'UCtEgLf0_j1vJLz0aNEdO2SQ', videoId: '9LvjI3NelAU', country: 'CHINA', flag: '🇨🇳', timezone: 'Asia/Shanghai' },
    ],
  },
  // Slot 5: 🇯🇵 歌舞伎町ライブカメラ
  {
    category: 'city',
    slot: 5,
    cameras: [
      { name: 'Kabukicho Live', channelId: 'UCBFDJXGCOdMjVtg2AnReoXA', videoId: 'gFRtAAmiFbE', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
    ],
  },
  // Slot 6: 🇮🇹 Venice Grand Canal
  {
    category: 'city',
    slot: 6,
    cameras: [
      { name: 'Venice Grand Canal', channelId: 'UCMpn1qLudF-zb4M4bqxLIbw', videoId: '7fhy-Eu8AFs', country: 'ITALY', flag: '🇮🇹', timezone: 'Europe/Rome' },
    ],
  },
  // Slot 7: 🇫🇮 オーロラ
  {
    category: 'aurora',
    slot: 7,
    cameras: [
      { name: 'Lapland Sky Camera', channelId: 'UC2z6E_R2mADXr53hBL_lYmA', videoId: 'iOmco6eIa-0', country: 'FINLAND', flag: '🇫🇮', timezone: 'Europe/Helsinki' },
    ],
  },
  // Slot 8: 🇯🇵 富士山ライブカメラ（YBS専用）
  {
    category: 'mountain',
    slot: 8,
    cameras: [
      { name: 'Mount Fuji (YBS)', channelId: 'UCL3peEBSiAkEMDuxNkffbvw', videoId: '_qdu714QT1E', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
    ],
  },
  // Slot 9: 🇺🇸 Times Square
  {
    category: 'city',
    slot: 9,
    cameras: [
      { name: 'Times Square', channelId: 'UC6qrG3W8SMK0jior2olka3g', videoId: 'kLoFxVhRWtQ', country: 'USA', flag: '🇺🇸', timezone: 'America/New_York' },
    ],
  },
  // Slot 10: 🇺🇸 Banzai Pipeline
  {
    category: 'ocean',
    slot: 10,
    cameras: [
      { name: 'Banzai Pipeline', channelId: 'UCSyg9cb3Iq-NtlbxqNB9wGw', videoId: 'gbaLDcOhqI8', country: 'HAWAII, USA', flag: '🇺🇸', timezone: 'Pacific/Honolulu' },
    ],
  },
  // Slot 11: 🇨🇦 Niagara Falls
  {
    category: 'scenic',
    slot: 11,
    cameras: [
      { name: 'Niagara Falls', channelId: 'UC15QFO-cdISk-4Sn5CPd78g', videoId: 'cf4YkyGk6Tk', country: 'CANADA', flag: '🇨🇦', timezone: 'America/New_York' },
    ],
  },
  // Slot 12: 🌍 Explore Nature Cams
  {
    category: 'wildlife',
    slot: 12,
    cameras: [
      { name: 'Explore Nature Cams', channelId: 'UC-2KSeUU5SMCX6XLRD-AEvw', videoId: 'ObR7SBKrkXc', country: 'VARIOUS', flag: '🌍', timezone: 'Africa/Nairobi' },
    ],
  },
];
