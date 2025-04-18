import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';

SwiperCore.use([Navigation]);

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const offerRes = await fetch('/api/listing/get?offer=true&limit=4');
        const offerData = await offerRes.json();
        setOfferListings(offerData);

        const rentRes = await fetch('/api/listing/get?type=rent&limit=4');
        const rentData = await rentRes.json();
        setRentListings(rentData);

        const saleRes = await fetch('/api/listing/get?type=sale&limit=4');
        const saleData = await saleRes.json();
        setSaleListings(saleData);
      } catch (error) {
        console.log('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
      {/* Top Section */}
      <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
        Find your next <span className="text-slate-500">perfect</span>
        <br /> place with ease
      </h1>
      <div className="text-gray-400 text-xs sm:text-sm">
        Amber Estate is the best place to find your next perfect place to live.
        <br />
        We have a wide range of properties for you to choose from.
      </div>
      <Link
        className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        to="/search"
      >
        Let's get started...
      </Link>

      {/* Offer Listings Swiper */}
      {offerListings.length > 0 && (
        <Swiper navigation>
          {offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                className="h-[500px]"
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* You can render rent and sale listings in similar way */}
    </div>
  );
}
