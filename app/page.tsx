"use client";

import { useState } from "react";
import { questions, type Question } from "./questions";

import { GAS_API_URL, ANIMAL_TYPE_MAP, type AnimalType } from "./config";
import { QuestionAccordion } from "./components/QuestionAccordion";

export default function Home() {
  const [nickname, setNickname] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    resultUrl?: string;
    animalType?: string;
    error?: string;
  } | null>(null);
  const [showNicknameModal, setShowNicknameModal] = useState(true);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = async () => {
    if (!nickname) {
      alert("ニックネームを入力してください");
      return;
    }

    // 全ての質問に回答しているかチェック
    const unansweredQuestions = questions.filter((q) => !answers[q.id]);
    if (unansweredQuestions.length > 0) {
      alert("全ての質問に回答してください");
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      console.log("Frontend: Sending request to:", GAS_API_URL);
      const requestBody = {
        nickname,
        ...Object.fromEntries(
          Object.entries(answers).map(([key, value]) => [
            key,
            {
              value,
              text:
                questions
                  .find((q) => q.id === key)
                  ?.options.find((o) => o.value === value)?.text || "",
            },
          ])
        ),
      };
      console.log("Frontend: Request body:", requestBody);

      const response = await fetch(GAS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      console.log("Frontend: Response status:", response.status);
      console.log("Frontend: Response headers:", response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Frontend: Response error:", errorText);
        setResult({
          success: false,
          error: `サーバーエラー: ${response.status} ${response.statusText}`,
        });
        return;
      }

      const data = await response.json();
      console.log("Frontend: Response data:", data);
      setResult(data);
    } catch (error) {
      console.error("Frontend: Error occurred:", error);
      setResult({
        success: false,
        error: error instanceof Error ? error.message : "エラーが発生しました",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (showNicknameModal) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h2 className="text-neutral text-xl font-bold mb-4 text-center">
            ニックネームを入力してください
          </h2>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="ニックネーム"
            className="text-neutral w-full p-3 border border-gray-300 rounded-lg mb-4"
            onKeyPress={(e) =>
              e.key === "Enter" && nickname && setShowNicknameModal(false)
            }
          />
          <button
            onClick={() => nickname && setShowNicknameModal(false)}
            disabled={!nickname}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            決定
          </button>
        </div>
      </div>
    );
  }

  if (result?.success) {
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
            onClick={() => {
              setResult(null);
              setAnswers({});
              setShowNicknameModal(true);
            }}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            もう一度占う
          </button>
        </div>
      </div>
    );
  }

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
          {questions.map((question, index) => (
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
}
