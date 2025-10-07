// GAS API URL
export const GAS_API_URL =
  process.env.GAS_API_URL ||
  "https://script.google.com/macros/s/AKfycbzhSQnAiTf16EHAw3qrpB22tsA8oS61g-vrXPl12pQprjKZLMGOwIFog_myPlt0p7rF/exec";

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
