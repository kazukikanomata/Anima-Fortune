import { questions } from "@/app/types/questions";
import { QuestionAccordion } from "../QuestionAccordion";

export const MainScreen = ({
    nickname,
    answers,
    handleAnswerChange,
    handleSubmit,
    isLoading,
    result,
}: {
    nickname: string;
    answers: Record<string, string>;
    handleAnswerChange: (questionId: string, value: string) => void;
    handleSubmit: () => void;
    isLoading: boolean;
    result: { success: boolean; error?: string } | null;
}) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-blue-600 text-white p-4 shadow-lg">
                <h1 className="text-2xl font-bold text-center">みにしみ動物占い🔮</h1>
                <p className="text-center text-blue-100 mt-2">
                    ようこそ{nickname}さん！
                </p>
            </header>

            <div className="max-w-4xl mx-auto p-4">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                    className="space-y-4"
                >
                    {questions.map((question, index: number) => (
                        <QuestionAccordion
                            key={question.id}
                            question={question}
                            questionNumber={index + 1}
                            selectedValue={answers[question.id] || ""}
                            onValueChange={(value) => handleAnswerChange(question.id, value)}
                        />
                    ))}

                    <div className="mt-8">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "占い中..." : "送信"}
                        </button>
                    </div>
                </form>

                {result && !result.success && (
                    <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        エラー: {result.error}
                    </div>
                )}
            </div>
        </div>
    );
};