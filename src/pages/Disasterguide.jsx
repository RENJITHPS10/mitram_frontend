import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Disasterguide() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
        <section>
          <h2 className="text-3xl font-semibold text-gray-100">Safety Guidelines</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Guideline Card 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
            <iframe  src="https://www.youtube.com/embed/BLEPakj1YTY" title="How to Protect Yourself During an Earthquake | Disasters" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='h-60 w-full'></iframe>
              <h3 className="text-2xl font-semibold text-teal-400 mt-4">Earthquake Preparedness</h3>
              <p className="mt-2 text-gray-300">
                Drop, Cover, and Hold On. Stay indoors away from windows. If you are outside, find an open area and avoid tall structures.
              </p>
              <p className="mt-2 text-gray-300">
                Keep a kit with essentials like water, food, flashlight, and first-aid supplies.
              </p>
            </div>
            {/* Guideline Card 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
            <iframe width="937" height="527" src="https://www.youtube.com/embed/Xgc90CoJbDI" title="How To Survive A House Fire ? | Fire Safety Education for Kids | The Dr Binocs Show | Peekaboo Kidz" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full h-60'></iframe>
              <h3 className="text-2xl font-semibold text-teal-400 mt-4">Fire Safety</h3>
              <p className="mt-2 text-gray-300">
                Ensure fire exits are clear. In case of fire, leave the building quickly, avoiding elevators. Stop, Drop, and Roll if your clothes catch fire.
              </p>
              <p className="mt-2 text-gray-300">
                Install smoke detectors in every room and regularly check their batteries.
              </p>
            </div>
            {/* Guideline Card 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
            <iframe  src="https://www.youtube.com/embed/43M5mZuzHF8" title="How to Prepare for a Flood | Disasters" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full h-60'></iframe>
              <h3 className="text-2xl font-semibold text-teal-400 mt-4">Flood Response</h3>
              <p className="mt-2 text-gray-300">
                Avoid walking or driving through flooded areas. Seek higher ground, and keep emergency kits with you.
              </p>
              <p className="mt-2 text-gray-300">
                Be prepared to evacuate if necessary, and always listen to emergency alerts.
              </p>
            </div>
            {/* Guideline Card 4 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
            <iframe  src="https://www.youtube.com/embed/9bQ8VSf068M" title="Hurricane Safety - During the Storm" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full h-60'></iframe>
              <h3 className="text-2xl font-semibold text-teal-400 mt-4">Hurricane Evacuation</h3>
              <p className="mt-2 text-gray-300">
                Stay updated with weather forecasts, and evacuate immediately if instructed. Protect windows and doors, and seek shelter in a sturdy building.
              </p>
              <p className="mt-2 text-gray-300">
                Stock up on essentials like water, non-perishable food, medications, and a flashlight.
              </p>
            </div>
            {/* Guideline Card 5 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
            <iframe width="937" height="527" src="https://www.youtube.com/embed/wcTdLnrxznM" title="How to Survive a Tornado And Recognize It" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full h-60' ></iframe>
              <h3 className="text-2xl font-semibold text-teal-400 mt-4">Tornado Safety</h3>
              <p className="mt-2 text-gray-300">
                If you are in a tornado warning, seek shelter in a basement or an interior room away from windows.
              </p>
              <p className="mt-2 text-gray-300">
                Keep a weather radio on hand to stay updated, and ensure your emergency kit is ready.
              </p>
           
            </div>
            {/* Guideline Card 6 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
            <iframe width="937" height="527" src="https://www.youtube.com/embed/Z-w_z9yobpE" title="How to Prepare for a Volcanic Eruption | Disasters" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full h-60' ></iframe>
              <h3 className="text-2xl font-semibold text-teal-400 mt-4">Volcano Eruption Response</h3>
              <p className="mt-2 text-gray-300">
                Stay indoors, away from ash clouds. Wear a mask to avoid inhaling ash, and cover your skin to protect against burns.
              </p>
              <p className="mt-2 text-gray-300">
                Listen to authorities for evacuation instructions, and have an emergency kit prepared.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Disasterguide;
