import React from 'react';

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Cards */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white text-black mx-2  absolute bottom-4 bg-white">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>

      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white text-black mx-2  absolute bottom-4 bg-white">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>

      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">We Deliver Deserts Too</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white text-black mx-2  absolute bottom-4 bg-white">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/14705141/pexels-photo-14705141.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
}

export default HeadlineCards;
