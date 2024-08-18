import React from "react";

function Card({ element }) {
  return (
    <div className="bg-white rounded-lg w-[300px] mx-auto my-2 shadow-lg overflow-hidden">
      <div className="relative aspect-w-1 aspect-h-1 bg-gray-200">
        <img
          src={element.album.images[0].url}
          className="object-cover w-full h-full"
          alt={element.name}
        />
      </div>

      <div className="p-4">
        <h5 className="text-lg font-semibold flex justify-between items-center">
          {element.name}
        </h5>
        <p className="text-sm text-gray-700">Artist: {element.album.artists[0].name}</p>
        <p className="text-sm text-gray-700">Release date: {element.album.release_date}</p>
        <audio
          src={element.preview_url}
          controls
          className="w-full mt-2"
        ></audio>
      </div>
    </div>
  );
}

export default Card;
