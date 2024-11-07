"use client"

import { useEffect, useState } from "react"
import { VideoPlayer } from "./components/VideoPlayer";

const Page = () => {

  // 1.Definiçao da funçao que vai rodar
  // 2.definiçao de quando vai rodar
  // 3.definiçao do que fazer quando o componente SuffixPathnameNormalizer/unload

  const [playing, setPlaying] = useState(false);

  return (
    <div className="">
      <div className="border border-white p-3 mb-4">
        <p className="text-2xl text-blue-400 mb-3">{playing ? 'Rodando' : "Pausado"}</p>
        <button className="bg-green-600 rounded-md p-3" onClick={() => setPlaying(!playing)}>play/pause</button>
      </div>

      <VideoPlayer
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      isPlaying={playing}
      />
    </div>
  );
}

export default Page;
