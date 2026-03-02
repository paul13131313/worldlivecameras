export type Category = 'wildlife' | 'aurora' | 'ocean' | 'mountain' | 'city' | 'zoo' | 'scenic';

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
};

export const cameraGroups: CameraGroup[] = [
  // Slot 1: Wildlife - Africam
  {
    category: 'wildlife',
    slot: 1,
    cameras: [
      { name: 'Tembe Elephant Park', channelId: 'UCuoNAKa3P0QR1Lw9QdpmoVg', videoId: 'zqc0Z2oWmo8', country: 'SOUTH AFRICA', flag: '🇿🇦', timezone: 'Africa/Johannesburg' },
      { name: 'Djuma Dam (WildEarth)', channelId: 'UCV6HJBZD_hZcIX9JVJ3dCXQ', videoId: 'MAU57NcV-xE', country: 'SOUTH AFRICA', flag: '🇿🇦', timezone: 'Africa/Johannesburg' },
      { name: 'Explore Nature Cams', channelId: 'UC-2KSeUU5SMCX6XLRD-AEvw', videoId: 'ObR7SBKrkXc', country: 'VARIOUS', flag: '🌍', timezone: 'Africa/Nairobi' },
    ],
  },
  // Slot 2: Wildlife - Namibia
  {
    category: 'wildlife',
    slot: 2,
    cameras: [
      { name: 'Namib Waterhole', channelId: 'UC9X6gGKDv2yhMoofoeS7-Gg', videoId: 'ME0dPuBtzug', country: 'NAMIBIA', flag: '🇳🇦', timezone: 'Africa/Windhoek' },
      { name: 'Great Plains', channelId: 'UCsNVi5wOyXcDKNPaT5I0-aQ', videoId: '1HxOxiMZUNI', country: 'BOTSWANA', flag: '🇧🇼', timezone: 'Africa/Gaborone' },
      { name: 'Africam', channelId: 'UCuoNAKa3P0QR1Lw9QdpmoVg', videoId: 'zqc0Z2oWmo8', country: 'SOUTH AFRICA', flag: '🇿🇦', timezone: 'Africa/Johannesburg' },
    ],
  },
  // Slot 3: Wildlife - WildEarth
  {
    category: 'wildlife',
    slot: 3,
    cameras: [
      { name: 'safariLIVE', channelId: 'UCV6HJBZD_hZcIX9JVJ3dCXQ', videoId: 'MAU57NcV-xE', country: 'SOUTH AFRICA', flag: '🇿🇦', timezone: 'Africa/Johannesburg' },
      { name: 'Explore Nature Cams', channelId: 'UC-2KSeUU5SMCX6XLRD-AEvw', videoId: 'ObR7SBKrkXc', country: 'VARIOUS', flag: '🌍', timezone: 'Africa/Nairobi' },
      { name: 'Namib Waterhole', channelId: 'UC9X6gGKDv2yhMoofoeS7-Gg', videoId: 'ME0dPuBtzug', country: 'NAMIBIA', flag: '🇳🇦', timezone: 'Africa/Windhoek' },
    ],
  },
  // Slot 4: Aurora - Finland
  {
    category: 'aurora',
    slot: 4,
    cameras: [
      { name: 'Aurora Borealis LIVE', channelId: 'UCrEfDv09Q2suoiSDt1hZIlg', videoId: 'l9_VHVuzn4w', country: 'FINLAND', flag: '🇫🇮', timezone: 'Europe/Helsinki' },
      { name: 'Lapland Sky Camera', channelId: 'UC2z6E_R2mADXr53hBL_lYmA', videoId: 'iOmco6eIa-0', country: 'FINLAND', flag: '🇫🇮', timezone: 'Europe/Helsinki' },
      { name: 'Fairbanks Aurora', channelId: 'UCUtGnX65osNPQ98Y3-SSgpg', videoId: 'ExKSeDuMqbs', country: 'USA', flag: '🇺🇸', timezone: 'America/Anchorage' },
    ],
  },
  // Slot 5: Aurora - Alaska
  {
    category: 'aurora',
    slot: 5,
    cameras: [
      { name: 'Fairbanks Aurora', channelId: 'UCUtGnX65osNPQ98Y3-SSgpg', videoId: 'ExKSeDuMqbs', country: 'USA', flag: '🇺🇸', timezone: 'America/Anchorage' },
      { name: 'Northern Lights Multi', channelId: 'UCNj6DsIsOi-DHORB-0MGlGQ', videoId: 'YfF0ngef-WA', country: 'CANADA', flag: '🇨🇦', timezone: 'America/Edmonton' },
      { name: 'Aurora Borealis LIVE', channelId: 'UCrEfDv09Q2suoiSDt1hZIlg', videoId: 'l9_VHVuzn4w', country: 'FINLAND', flag: '🇫🇮', timezone: 'Europe/Helsinki' },
    ],
  },
  // Slot 6: Ocean
  {
    category: 'ocean',
    slot: 6,
    cameras: [
      { name: 'Banzai Pipeline', channelId: 'UCSyg9cb3Iq-NtlbxqNB9wGw', videoId: 'gbaLDcOhqI8', country: 'HAWAII, USA', flag: '🇺🇸', timezone: 'Pacific/Honolulu' },
      { name: 'Surfline', channelId: 'UC4i3-yfVazfuqwoz71T79Sw', videoId: 'hm9iAviOZ20', country: 'USA', flag: '🇺🇸', timezone: 'America/Los_Angeles' },
      { name: 'North Shore 4K', channelId: 'UCaG0IHN1RMOZ4-U3wDXAkwA', videoId: 'JVLVCSfQLYQ', country: 'HAWAII, USA', flag: '🇺🇸', timezone: 'Pacific/Honolulu' },
    ],
  },
  // Slot 7: Mountain
  {
    category: 'mountain',
    slot: 7,
    cameras: [
      { name: 'Mount Fuji', channelId: 'UCk2oG--VyYST4SYyQkeadjA', videoId: 'CQFZblF3seM', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
      { name: 'Tokyo Bay & Fuji', channelId: 'UC8Y5mMpRMNLlLWXM3BUKy6Q', videoId: 'obZSDjuJ36U', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
      { name: 'Swiss Alps', channelId: 'UC9xLSF0SZDbVa70iTpghQBw', videoId: 'HVt5n0CDRF8', country: 'SWITZERLAND', flag: '🇨🇭', timezone: 'Europe/Zurich' },
    ],
  },
  // Slot 8: City - Japan
  {
    category: 'city',
    slot: 8,
    cameras: [
      { name: 'Shibuya Crossing', channelId: 'UCoQBJMzcwmXrRSHBFAlTsIw', videoId: 'ck_Yl0GgpK4', country: 'JAPAN', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
      { name: 'Times Square', channelId: 'UC6qrG3W8SMK0jior2olka3g', videoId: 'kLoFxVhRWtQ', country: 'USA', flag: '🇺🇸', timezone: 'America/New_York' },
      { name: 'World Cities', channelId: 'UCRuyAVeVd7oUwh0LWmxxBBQ', videoId: 'Fu8vYoIkaeM', country: 'VARIOUS', flag: '🌍', timezone: 'Europe/Prague' },
    ],
  },
  // Slot 9: City - Europe
  {
    category: 'city',
    slot: 9,
    cameras: [
      { name: 'Venice Grand Canal', channelId: 'UCMpn1qLudF-zb4M4bqxLIbw', videoId: '7fhy-Eu8AFs', country: 'ITALY', flag: '🇮🇹', timezone: 'Europe/Rome' },
      { name: 'Prague Old Town', channelId: 'UCs8QCDKYww0gFmZkJ3JHiBQ', videoId: 'IFnbDmgP69Q', country: 'CZECH REPUBLIC', flag: '🇨🇿', timezone: 'Europe/Prague' },
      { name: 'Abbey Road & More', channelId: 'UC2WMV4vCYurHdHPd9pCqYSg', videoId: 'wyMx0d7q0mo', country: 'UK', flag: '🇬🇧', timezone: 'Europe/London' },
    ],
  },
  // Slot 10: Animals
  {
    category: 'zoo',
    slot: 10,
    cameras: [
      { name: 'Chengdu Panda Base', channelId: 'UCtEgLf0_j1vJLz0aNEdO2SQ', videoId: '9LvjI3NelAU', country: 'CHINA', flag: '🇨🇳', timezone: 'Asia/Shanghai' },
      { name: 'Monterey Bay Aquarium', channelId: 'UCnM5iMGiKsZg-iOlIO2ZkdQ', videoId: 'nNTVZKz219U', country: 'USA', flag: '🇺🇸', timezone: 'America/Los_Angeles' },
      { name: 'Explore Nature Cams', channelId: 'UC-2KSeUU5SMCX6XLRD-AEvw', videoId: 'ObR7SBKrkXc', country: 'VARIOUS', flag: '🌍', timezone: 'Africa/Nairobi' },
    ],
  },
  // Slot 11: Scenic - Space
  {
    category: 'scenic',
    slot: 11,
    cameras: [
      { name: 'ISS Earth View', channelId: 'UCLA_DiR1FfKNvjuUpBHmylQ', videoId: 'FV4Q9DryTG8', country: 'SPACE', flag: '🌍', timezone: 'UTC' },
      { name: 'Niagara Falls', channelId: 'UC15QFO-cdISk-4Sn5CPd78g', videoId: 'cf4YkyGk6Tk', country: 'CANADA', flag: '🇨🇦', timezone: 'America/New_York' },
      { name: 'Jackson Hole', channelId: 'UCEpDjqeFIGTqHwk-uULx72Q', videoId: 'XNSFRR5kj-Q', country: 'USA', flag: '🇺🇸', timezone: 'America/Denver' },
    ],
  },
  // Slot 12: Scenic - World
  {
    category: 'scenic',
    slot: 12,
    cameras: [
      { name: 'Santorini Sunset', channelId: 'UC2WMV4vCYurHdHPd9pCqYSg', videoId: 'wyMx0d7q0mo', country: 'GREECE', flag: '🇬🇷', timezone: 'Europe/Athens' },
      { name: 'Niagara Falls', channelId: 'UC15QFO-cdISk-4Sn5CPd78g', videoId: 'cf4YkyGk6Tk', country: 'CANADA', flag: '🇨🇦', timezone: 'America/New_York' },
      { name: 'Jackson Hole', channelId: 'UCEpDjqeFIGTqHwk-uULx72Q', videoId: 'XNSFRR5kj-Q', country: 'USA', flag: '🇺🇸', timezone: 'America/Denver' },
    ],
  },
];
