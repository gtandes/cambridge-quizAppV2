"use client";

import React, { useState } from "react";
import { quiz } from "../../api/data";
import { Button, ButtonGroup } from "@nextui-org/react";

type ResultState = {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
};

const page: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [checked, setChecked] = useState<boolean>(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useState<ResultState>({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  //   Select and check answer
  const onAnswerSelected = (answer: string, idx: number) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      // console.log("true");
    } else {
      setSelectedAnswer(false);
      // console.log("false");
    }
  };

  // Calculate score and increment to the next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <main className="flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 to-sky-200 w-[100vw] h-full">
      <div>
        <h2>
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>

      <div>
        {!showResult ? (
          <div className="quiz-container">
            <h3>{questions[activeQuestion].question}</h3>
            {/* <ButtonGroup className="flex flex-col"> */}
            {answers.map((answer: string, idx: number) => (
              <Button
                size="lg"
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={`self-stretch min-w-[2rem] ${
                  selectedAnswerIndex === idx ? "li-selected" : "li-hover"
                }`}
              >
                {answer}
              </Button>
            ))}
            {/* </ButtonGroup> */}

            {checked ? (
              <Button color="primary" onClick={nextQuestion} className="btn">
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </Button>
            ) : (
              <Button
                color="primary"
                onClick={nextQuestion}
                disabled
                className="btn-disabled"
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </Button>
            )}
          </div>
        ) : (
          <div className="quiz-container">
            <h3>Results</h3>
            <h3>Overall {(result.score / 25) * 100}%</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <Button color="primary" onClick={() => window.location.reload()}>
              Restart
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default page;
