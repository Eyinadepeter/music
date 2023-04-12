import { fetchdata, options, url } from "./fetch.js";
import "./style.css";

let add = document.querySelector("#content");
let menu = document.querySelector("#icon");
menu.addEventListener("click", () => {
  add.classList.toggle("hidden");
});

const root = document.querySelector("#music");

const fetchmusic = async () => {
  const musics = await fetchdata(url, options);
  musics.slice(0, 100).forEach((music) => {
    console.log(music);
    const div = document.createElement("div");
    div.classList =
      "flex flex-col  lg:flex lg:flex-row md:flex md:flex-row border-[5px] border-red-900 mb-[20px]  font-mono";

    div.innerHTML = `
    <img loading=lazy class="h-[250px] md:h-auto " src="${
      music.trackMetadata.displayImageUri
    }"/>
    <div  class="lg:px-[25%]">
    <p class="text-[30px]"><span class="text-[30px] font-bold text-red-950">ARTIST :</span> ${music.trackMetadata.artists.map(
      (artist) => artist.name
    )}</p>
    <p class="text-[30px]"><span class="text-[30px] font-bold text-red-950">TRACK :</span>   ${
      music.trackMetadata.trackName
    }
    <p class="text-[30px]"><span class="text-[30px] font-bold text-red-950">LABEL :</span>${music.trackMetadata.labels.map(
      (labels) => labels.name
    )}</p>
    <p class="text-[30px]"><span class="text-[30px] font-bold text-red-950">RELEASE DATE :</span>   ${
      music.trackMetadata.releaseDate
    }</p>
    <p class="text-[30px]"><span class="text-[30px] font-bold text-red-950">CURRENT RANK :</span> "${
      music.chartEntryData.currentRank
    }"</p>
    <p class="text-[30px]"><span class="text-[30px] font-bold text-red-950">RANK STATUS :</span> "${
      music.chartEntryData.entryStatus
    }"</p>

    </div>

    `;

    root.appendChild(div);
  });
};

fetchmusic();
