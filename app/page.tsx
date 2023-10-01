"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative bg-white w-full h-[100dvh] overflow-hidden text-left text-[1rem] text-lightslategray-100">
      <>
        <div className="absolute top-[4.5rem] left-[46.75rem] font-semibold">
          Back
        </div>
        <img
          className="absolute top-[4.63rem] left-[44.94rem] w-[1.25rem] h-[1.25rem]"
          alt=""
          src="/iconnavigationarrow-back-ios-24px.svg"
        />
      </>

      <div className="">
        <b className="absolute top-[12.13rem] left-[52.75rem] text-[1.88rem] text-black">
          Login to your Account
        </b>
        <div className="absolute top-[15.06rem] left-[52.75rem] text-[1.13rem] leading-[1.75rem] flex items-center w-[25.69rem]">
          with your registered Email Address
        </div>

        <div className="absolute top-[22.81rem] left-[52.75rem] rounded-11xl bg-white shadow-[0px_15px_40px_5px_#ededed] w-[26.63rem] h-[4rem]" />
        <div className="absolute top-[30.38rem] left-[52.75rem] rounded-11xl bg-white shadow-[0px_15px_40px_5px_#ededed] w-[26.63rem] h-[4rem]" />

        {/* login */}
        <Button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="absolute flex items-center justify-center top-[39.5rem] left-[52.75rem] rounded-11xl bg-lightslategray-100 w-[26.63rem] h-[4rem] text-xl text-white"
        >
          Login
        </Button>

        {/* login google */}
        <div className="absolute top-[47.56rem] left-[52.75rem] rounded-11xl bg-white shadow-[0px_15px_40px_5px_#ededed] w-[26.63rem] h-[4rem]" />

        <div className="absolute top-[24.13rem] left-[54.88rem] text-[0.88rem] font-medium">
          Enter email address
        </div>

        <div className="absolute top-[31.69rem] left-[55.06rem] text-[0.88rem] font-medium">
          Password
        </div>

        <div className="absolute top-[48.88rem] left-[60.94rem] text-[1.19rem] font-medium text-black text-center">
          Login with Google
        </div>

        <div className="absolute top-[31.69rem] left-[75.06rem] text-[0.75rem] text-black text-right">
          Show
        </div>

        <div className="absolute top-[45.06rem] left-[65.56rem] text-[0.75rem] text-silver text-center">
          Or
        </div>

        <div className="absolute top-[20.56rem] left-[52.75rem] font-medium text-dimgray">
          Email address*
        </div>

        <div className="absolute top-[28.13rem] left-[52.75rem] font-medium text-dimgray">
          Enter password*
        </div>

        <div className="absolute top-[35.69rem] left-[54.88rem] font-medium text-dimgray">
          Remember my password
        </div>

        <div className="absolute top-[18.72rem] left-[52.66rem] box-border w-[26.75rem] h-[0.06rem] border-t-[1px] border-solid border-whitesmoke-100" />
        <div className="absolute top-[45.53rem] left-[68.59rem] box-border w-[10.81rem] h-[0.06rem] border-t-[1px] border-solid border-whitesmoke-100" />
        <div className="absolute top-[45.53rem] left-[52.72rem] box-border w-[10.81rem] h-[0.06rem] border-t-[1px] border-solid border-whitesmoke-100" />

        <img
          className="absolute top-[35.88rem] left-[52.75rem] w-[1.25rem] h-[1.25rem] overflow-hidden"
          alt=""
          src="/square-checkbox-solid1.svg"
        />
        <img
          className="absolute top-[48.88rem] left-[55.44rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
          alt=""
          src="/flatcoloriconsgoogle.svg"
        />
        <img
          className="absolute top-[0rem] left-[0rem] w-[41.25rem] h-[64rem] object-cover"
          alt=""
          src="/rectangle-29@2x.png"
        />
      </div>

      <div className="absolute top-[0rem] left-[0rem] bg-lightslategray-200 [backdrop-filter:blur(1px)] w-[41.25rem] h-[64rem]" />

      <div className="absolute top-[16.81rem] left-[15.81rem] w-[20.22rem] h-[28.19rem] text-[1.13rem] text-white">
        <div className="absolute top-[2.44rem] left-[0.88rem] leading-[2.38rem] flex items-center w-[18.56rem] pt-8">
          Those people who develop the ability to continuously acquire new and
          better forms of knowledge that they can apply to their work and to
          their lives will be the movers and shakers in our society for the
          indefinite future
        </div>
        <div className="absolute top-[22.31rem] left-[0.88rem] font-medium">
          Brian Tracy
        </div>
        <img
          className="absolute top-[26.13rem] left-[18.13rem] w-[2.09rem] h-[2.06rem]"
          alt=""
          src="/vector-1.svg"
        />
        <b className="absolute top-[0rem] left-[0rem] text-[6rem] font-gayathri text-darkturquoise">
          “
        </b>
      </div>
    </main>
  );
}
