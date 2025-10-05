// GAS API設定（プロキシAPI経由）
export const GAS_API_URL = "/api/fortune";

// 動物タイプマッピング
export const ANIMAL_TYPE_MAP = {
  dog: "犬タイプ",
  cat: "猫タイプ",
  rabbit: "うさぎタイプ",
  dolphin: "いるかタイプ",
  fox: "きつねタイプ",
  panda: "パンダタイプ",
  lion: "ライオンタイプ",
  swan: "白鳥タイプ",
} as const;

export type AnimalType = keyof typeof ANIMAL_TYPE_MAP;
