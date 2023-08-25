import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-solid border-2 border-slate-300 m-4 bg-slate-300 hover:bg-slate-400 hover:border-slate-400 hover:cursor-pointer">
      <img src={item.image} alt={item.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
