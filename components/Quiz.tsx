
import React, { useState, useMemo } from 'react';
import { quizData } from '../constants/quiz';
import { QuizQuestion } from '../types';

interface Answers {
  [key: number]: string;
}

export const Quiz: React.FC = () => {
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (questionIndex: number, option: string) => {
    if (submitted) return;
    setAnswers({
      ...answers,
      [questionIndex]: option,
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };
  
  const handleRetake = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const score = useMemo(() => {
    if (!submitted) return 0;
    return quizData.reduce((acc, question, index) => {
      return acc + (answers[index] === question.answer ? 1 : 0);
    }, 0);
  }, [submitted, answers]);

  const getOptionClasses = (question: QuizQuestion, option: string, questionIndex: number): string => {
    let classes = "p-3 border rounded-lg mb-2 transition-colors duration-200";
    if (submitted) {
      const isCorrect = option === question.answer;
      const isSelected = answers[questionIndex] === option;
      if (isCorrect) {
        classes += " bg-green-100 border-green-500 font-semibold";
        if (isSelected) classes += " ring-2 ring-green-500";
      } else if (isSelected) {
        classes += " bg-red-100 border-red-500 text-gray-500 line-through";
      }
    } else {
        classes += " cursor-pointer hover:bg-blue-50 border-gray-300";
    }
    return classes;
  };

  return (
    <div>
      {quizData.map((question, qIndex) => (
        <div key={qIndex} className="mb-8">
          <p className="text-lg font-semibold text-gray-800 mb-4">{qIndex + 1}. {question.question}</p>
          <ul>
            {question.options.map((option, oIndex) => (
              <li key={oIndex} className={getOptionClasses(question, option, qIndex)}>
                <label className="flex items-center w-full cursor-pointer">
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    value={option}
                    checked={answers[qIndex] === option}
                    onChange={() => handleOptionChange(qIndex, option)}
                    className="mr-3 h-4 w-4"
                    disabled={submitted}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={submitted ? handleRetake : handleSubmit}
          className="bg-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors w-full sm:w-auto"
        >
          {submitted ? 'Retake Quiz' : 'Submit Answers'}
        </button>
        {submitted && (
          <div className="text-xl font-bold text-gray-800 bg-gray-100 p-3 rounded-lg">
            Your Score: {score} out of {quizData.length}
          </div>
        )}
      </div>
    </div>
  );
};
