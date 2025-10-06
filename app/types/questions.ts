export type Question = {
  id: string;
  title: string;
  options: { value: string; text: string }[];
};

export const questions: Question[] = [
  {
    id: "q1",
    title: "休日に自由な時間ができたら、どんな過ごし方が一番好き？",
    options: [
      { value: "A1", text: "久しぶりにいろんな人に会ってワイワイしたい" },
      { value: "B1", text: "気心の知れた数人と、じっくり話したい" },
      { value: "C1", text: "みんなで何かを一緒に作ったり、体験したい" },
      { value: "D1", text: "ひとりで好きなことをしてリフレッシュしたい" },
    ],
  },
  {
    id: "q2",
    title: "自分が落ち込んでいるとき、どうしますか？",
    options: [
      { value: "A2", text: "とことん落ち込んで、自然と浮上するのを待つ" },
      { value: "B2", text: "誰かに話してスッキリしたい" },
      { value: "C2", text: "原因を冷静に分析して対処する" },
      { value: "D2", text: "美味しいもの食べて寝る" },
    ],
  },
  {
    id: "q3",
    title: "みんなで旅行に行きます。あなたがやる行動は？",
    options: [
      { value: "A3", text: "みんなの希望を聞いて、空気を読みながら決める" },
      { value: "B3", text: "「じゃあここにしよう！」と率先してまとめる" },
      { value: "C3", text: "行き先やお店を調べまくって、さりげなく提案する" },
      { value: "D3", text: "とにかく行きたいところを主張する" },
    ],
  },
  {
    id: "q4",
    title: "無人島に漂流しました。あなたの第一声と行動は？",
    options: [
      { value: "A4", text: "「まずは水と食料…生き延びる計画立てねば」" },
      { value: "B4", text: "「うわ〜やば！でもまあなんとかなるっしょ」" },
      {
        value: "C4",
        text: "「やばっ…でもこの島めっちゃ冒険できそうじゃん？」",
      },
      {
        value: "D4",
        text: "「とりあえず使えそうなもん拾って、なんとかするか〜」",
      },
    ],
  },
  {
    id: "q5",
    title: "夢が叶う魔法がひとつあったら？",
    options: [
      { value: "A5", text: "みんなの心が通じるようになる魔法" },
      { value: "B5", text: "どこでも好きな場所に行けるワープ魔法" },
      { value: "C5", text: "知識とアイデアが無限にわいてくる魔法" },
      { value: "D5", text: "自分の国をつくれる魔法" },
    ],
  },
  {
    id: "q6",
    title: "もし突然、大舞台に立つことになったら？",
    options: [
      { value: "A6", text: "全力で準備して、やるしかない！" },
      { value: "B6", text: "こっそり応援に回りたいな…" },
      { value: "C6", text: "場を盛り上げるの、案外得意かも？" },
      { value: "D6", text: "できれば逃げたい（笑）" },
    ],
  },
  {
    id: "q7",
    title: "プレゼントを選ぶとき、あなたは？",
    options: [
      { value: "A7", text: "相手の反応を想像して悩みまくる" },
      { value: "B7", text: "自分なら嬉しいなって思うものを贈る" },
      { value: "C7", text: "センスと個性重視で選ぶ" },
      { value: "D7", text: "とにかく喜んでほしくて張り切る！" },
    ],
  },
  {
    id: "q8",
    title: "あなたにとって「リーダー」ってどんな人？",
    options: [
      { value: "A8", text: "情熱があって頼れる人" },
      { value: "B8", text: "黙って支えてくれる人" },
      { value: "C8", text: "いろんな人の個性を活かせる人" },
      { value: "D8", text: "そもそもリーダーって必要かな？" },
    ],
  },
  {
    id: "q9",
    title: "あなたの中にある「ゆずれないもの」は？",
    options: [
      { value: "A9", text: "自分の自由時間" },
      { value: "B9", text: "チームの空気や信頼感" },
      { value: "C9", text: "「おもしろそう！」という直感" },
      { value: "D9", text: "やると決めたことは必ずやる姿勢" },
    ],
  },
  {
    id: "q10",
    title: "「あ、これ苦手だな」と思う瞬間は？",
    options: [
      { value: "A10", text: "急に注目を集めるとき" },
      { value: "B10", text: "感情や勢いだけで動く空気" },
      { value: "C10", text: "ルールが多くて自由がないとき" },
      { value: "D10", text: "人の顔色を読み続けないといけないとき" },
    ],
  },
  {
    id: "q11",
    title: "あなたの「地雷ワード」になりそうなのは？",
    options: [
      { value: "A11", text: "「で、何がしたいの？」" },
      { value: "B11", text: "「ちゃんとしてよ」" },
      { value: "C11", text: "「考えすぎじゃない？」" },
      { value: "D11", text: "「みんなやってるから」" },
    ],
  },
  {
    id: "q12",
    title: "次のうち、あなたが言われて一番うれしい言葉は？",
    options: [
      { value: "A12", text: "「一緒にいると元気出る！」" },
      { value: "B12", text: "「ほんとに面白い発想するね」" },
      { value: "C12", text: "「あなたがいると安心する」" },
      { value: "D12", text: "「やっぱり違うね！なんかすごいわ〜」" },
    ],
  },
];
