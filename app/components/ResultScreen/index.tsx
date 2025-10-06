import { ANIMAL_TYPE_MAP, AnimalType } from "@/app/config";

export const ResultScreen = ({
    nickname,
    result,
}: {
    nickname: string;
    result: {
        success: boolean;
        resultUrl?: string;
        animalType?: string;
    };
}) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                    ようこそ{nickname}さん！
                </h1>
                <div className="text-2xl font-bold mb-4 text-blue-600">
                    あなたは
                    <strong>
                        {ANIMAL_TYPE_MAP[result.animalType as AnimalType] ||
                            "不明なタイプ"}
                    </strong>
                    です！
                </div>
                {result.resultUrl && (
                    <div className="mb-6">
                        <p className="text-gray-600 mb-2">診断結果はこちら</p>
                        <a
                            href={result.resultUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 underline break-all"
                        >
                            {result.resultUrl}
                        </a>
                    </div>
                )}
                <button
                    onClick={() => window.location.reload()}
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
                >
                    もう一度占う
                </button>
            </div>
        </div>

    );
}