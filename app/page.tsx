"use client";
import { useState } from "react";
import { MainScreen } from "./components/MainScreen";
import { NicknameModal } from "./components/NicknameModal";
import { ResultScreen } from "./components/ResultScreen";
import { GAS_API_URL } from "./config";
import { questions } from "./types/questions";

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
    // ニックネーム入力チェック
    // 全ての質問に回答しているかチェック

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

      const response = await fetch("/api/fortune", {
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
      setResult(data);
    } catch (error) {
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
      <NicknameModal
        nickname={nickname}
        setNickname={setNickname}
        onClose={() => nickname && setShowNicknameModal(false)}
      />
    );
  }

  if (result?.success) {
    return <ResultScreen nickname={nickname} result={result} />;
  }

  return (
    <MainScreen
      nickname={nickname}
      answers={answers}
      handleAnswerChange={handleAnswerChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      result={result}
    />
  );
}
