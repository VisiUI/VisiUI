import { ImageResponse } from "next/og";
import { NextResponse } from 'next/server'; 
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  try {
    // Carica il font personalizzato
    const fontPath = path.resolve('./src/app/api/og/Colvetica.ttf');
    const fontData = await fs.promises.readFile(fontPath);

    return new ImageResponse(
      (
        <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
          <div tw="bg-gray-50 flex w-full">
            <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
              <img 
                src="https://raw.githubusercontent.com/VisiUI/VisiUI/main/public/visiui3.png" 
                alt="Custom Image" 
                tw="w-32 h-32 rounded-full mb-4" 
              />
              <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
                <span style={{ fontFamily: "Colvetica" }}>Ready to dive in?</span>
                <span tw="text-indigo-600">Start using VisiUI today</span>
              </h2>
              <div tw="mt-8 flex md:mt-0">
                <div tw="flex rounded-md shadow">
                  <a tw="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white" href="/">
                    Get started 👋🏻
                  </a>
                </div>
                <div tw="ml-3 flex rounded-md shadow">
                  <a tw="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        emoji: "twemoji",
        fonts: [
          {
            name: "Colvetica",
            data: fontData,
            weight: 400, 
            style: "normal", 
          },
        ],
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return NextResponse.error(); 
  }
}
