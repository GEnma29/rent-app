import React from "react";
import Link from "next/link";
import Image from "next/image";

function Index() {
  return (
    <div className="w-screen h-screen ">
      <div className="relative h-screen isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto mt-12 max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Make new friends
            <br />
            Start using our app today.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            start to chat with people with your interest
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Link href="/login" legacyBehavior>
              <a
                href="/#"
                className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start Chat
              </a>
            </Link>
            <a
              href="/#"
              className="text-base font-semibold leading-7 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="flex text-white mt-4">
            <a
              className="flex ml-2"
              href="https://www.freepik.com/free-photo/smartphone-with-speech-bubble-chat-message-social-media-communication-ecommerce-concept-blue-background-3d-illustration_28490072.htm#query=chat%20phone&position=25&from_view=keyword&track=ais"
            >
              Image by mamewmy{" "}
            </a>{" "}
            <span className="flex mr-2"> on Freepik</span>
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          <div>
            <Image
              className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md  "
              src="/phone.png"
              alt="phone app"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
