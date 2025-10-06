"use client";

import { useState } from "react";
import { Question } from "../../types/questions";

type Props = {
  question: Question;
  questionNumber: number;
  selectedValue: string;
  onValueChange: (value: string) => void;
};

export const QuestionAccordion = ({
  question,
  questionNumber,
  selectedValue,
  onValueChange,
}: Props) => {
  const [isOpen, setIsOpen] = useState(questionNumber === 1);

  const handleValueChange = (value: string) => {
    onValueChange(value);
    // 選択後に次の質問を自動で開く
    setTimeout(() => {
      const nextAccordion = document.querySelector(
        `[data-question="${questionNumber + 1}"]`
      );
      if (nextAccordion) {
        const nextInput = nextAccordion.querySelector(
          'input[type="radio"]'
        ) as HTMLInputElement;
        if (nextInput) {
          nextInput.checked = true;
        }
      }
    }, 100);
  };

  return (
    <div
      className="collapse collapse-arrow bg-white border border-gray-300 shadow-sm"
      data-question={questionNumber}
    >
      <input
        type="radio"
        name="accordion"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <div className="collapse-title font-semibold text-gray-800">
        Q{questionNumber}: {question.title}
      </div>
      <div className="collapse-content">
        <div className="flex flex-col gap-y-3 p-4">
          {question.options.map((option, index) => (
            <div key={option.value} className="flex items-center gap-x-3">
              <input
                type="radio"
                name={question.id}
                id={`${question.id}-${option.value}`}
                className="radio radio-primary"
                value={option.value}
                checked={selectedValue === option.value}
                onChange={() => handleValueChange(option.value)}
              />
              <label
                htmlFor={`${question.id}-${option.value}`}
                className="text-sm text-gray-700 cursor-pointer flex-1"
              >
                {option.text}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
