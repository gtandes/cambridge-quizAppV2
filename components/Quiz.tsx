"use client";
import { FC, useState, useEffect } from "react";
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.9,
});

console.log(model);

const memory = new BufferMemory();
const chain = new ConversationChain({ llm: model, memory });

const run = async (input: string) => {
  const response = await chain.call({ input });
  return response.response;
};

const categories = [
  { label: "English", value: "English" },
  { label: "Sport", value: "Sport" },
  { label: "Geography", value: "Geography" },
];

type MainProps = {};

const Main: FC<MainProps> = ({}) => {
  const [input, setInput] = useState("");
  const [response, setresponse] = useState("");
  const [category, setcategory] = useState("");

  const askQuestion = async () => {
    const firstQuestion = await run(
      `Ask a trivia question in the ${category} category.`
    );

    setresponse(firstQuestion);
  };

  useEffect(() => {
    if (category !== "") {
      askQuestion();
    }
  }, [category]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const result = await run(
      `AI: ${response}\nYou: ${input}\nAI: Evaluate the answer and ask another trivia question.`
    );

    setresponse(result);
    setInput("");
  };

  return (
    <div className="container mx-auto p-4 w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
      <h1 className="text-2xl font-bold mb-4">Cambridge Quiz App</h1>

      <form onSubmit={handleSubmit} className="space-y-4" action="">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your Answer"
        />

        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select a category</option>

          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}

          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white font-semibold rounded"
          >
            Submit
          </button>
        </select>
      </form>

      {response && (
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Main;
