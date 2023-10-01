"use client";

import { Button } from "@nextui-org/react";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";

const Instruction: NextPage = () => {
  const router = useRouter();
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US");

  return (
    <div className="relative bg-white [backdrop-filter:blur(50px)] w-full h-[100dvh] overflow-hidden text-left text-[1.25rem] text-dimgray">
      <div className="absolute top-[8.31rem] left-[20.56rem] rounded-11xl bg-white shadow-[0px_15px_40px_5px_#ededed] w-[67.5rem] h-[53.81rem]" />
      <b className="absolute top-[9.69rem] left-[23rem] text-[2.06rem]">
        History Quiz
      </b>
      <div className="absolute top-[13.25rem] left-[23rem]">
        Read the following instructions
      </div>
      <div className="absolute top-[16.31rem] left-[57.13rem] text-[1.44rem] font-semibold">{`Date: `}</div>
      <div className="absolute top-[16.56rem] left-[67.5rem]">
        {formattedDate}
      </div>
      <div className="absolute top-[25rem] left-[67.5rem]">Once</div>
      <div className="absolute top-[20.81rem] left-[67.56rem]">30 Mins</div>
      <div className="absolute top-[40.44rem] left-[23.06rem] flex items-center w-[64.5rem] text-[1.06rem]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0 text-[1.19rem]">
            This quiz consists of 5 multiple-choice questions.
          </p>

          <p className="m-0 py-4">
            Answers - You may review your answer-choices and compare them to the
            correct answers after your final attempt.
          </p>

          <p className="m-0">
            <span>
              To start, click the "Start" button. When finished, click the
              "Submit " button
            </span>
            <span className="text-[1.19rem]">.</span>
          </p>
        </span>
      </div>
      <div className="absolute top-[29.25rem] left-[67.5rem]">25 Points</div>
      <div className="absolute top-[20.5rem] left-[57.13rem] text-[1.44rem] font-semibold">{`Time Limit: `}</div>
      <div className="absolute top-[24.69rem] left-[57.13rem] text-[1.44rem] font-semibold">
        Attempts:
      </div>
      <div className="absolute top-[28.88rem] left-[57.13rem] text-[1.44rem] font-semibold">
        Points:
      </div>
      <div className="absolute top-[36.63rem] left-[23.06rem] text-[1.44rem] font-semibold">
        Instructions
      </div>
      <div className="absolute top-[2.06rem] left-[20.56rem] rounded-11xl bg-white shadow-[0px_15px_40px_5px_#ededed] w-[22.25rem] h-[4rem]" />
      <img
        className="absolute top-[14.69rem] left-[20.06rem] rounded-11xl w-[37.06rem] h-[24.13rem] object-cover"
        alt=""
        src="/rectangle-2741@2x.png"
      />
      <Button
        onClick={() => router.push("/quiz")}
        className="absolute top-[54rem] flex items-center justify-center left-[72.88rem] rounded-11xl bg-lightslategray-100 w-[13.25rem] h-[4rem] text-lg text-white"
      >
        Start
      </Button>
      <img
        className="absolute top-[3.38rem] left-[22.25rem] w-[1.56rem] h-[1.56rem] overflow-hidden"
        alt=""
        src="/carbonsearch2.svg"
      />
      <div className="absolute top-[3.13rem] left-[24.63rem] text-[1.19rem]">
        Search..
      </div>
      <div className="absolute top-[2.69rem] left-[3.81rem] text-[1.88rem] font-extrabold">
        Quiz Time
      </div>
      <div className="absolute top-[14.19rem] left-[7.94rem] font-semibold">
        Support
      </div>
      <div className="absolute top-[19rem] left-[7.94rem] font-semibold">
        Notification
      </div>
      <div className="absolute top-[8.31rem] left-[1.94rem] rounded-11xl bg-lightslategray-100 w-[16.94rem] h-[4rem]" />
      <div className="absolute top-[9.38rem] left-[7.88rem] font-semibold text-white">
        Dashboard
      </div>
      <img
        className="absolute top-[9.56rem] left-[4.44rem] w-[1.56rem] h-[1.56rem] overflow-hidden"
        alt=""
        src="/icroundspacedashboard.svg"
      />
      <img
        className="absolute top-[14.44rem] left-[4.63rem] w-[1.56rem] h-[1.56rem] overflow-hidden"
        alt=""
        src="/bxbxsupport1.svg"
      />
      <img
        className="absolute top-[19.25rem] left-[4.56rem] w-[1.56rem] h-[1.56rem] overflow-hidden"
        alt=""
        src="/cinotification.svg"
      />
      <div className="absolute top-[56rem] left-[8.06rem] font-semibold">
        Log Out
      </div>
      <img
        className="absolute top-[56rem] left-[4.69rem] w-[1.56rem] h-[1.56rem] overflow-hidden"
        alt=""
        src="/rilogoutboxfill2.svg"
      />
      <div className="absolute top-[3.19rem] left-[81rem] text-[1.19rem]">
        User
      </div>
      <img
        className="absolute top-[1.75rem] left-[75.69rem] rounded-[50%] w-[4.38rem] h-[4.38rem] object-cover"
        alt=""
        src="/ellipse-6@2x.png"
      />
      {/* <div className="absolute top-[3.13rem] left-[57.56rem] font-semibold text-white">
        Start Quiz
      </div> */}
    </div>
  );
};

export default Instruction;
