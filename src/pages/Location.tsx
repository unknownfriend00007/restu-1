"use client";

import React from 'react';
import { Phone, Navigation, Clock, Car } from 'lucide-react';
import { siteContent } from '@/config/siteContent';

const Location = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Visit Us</h1>
          <p className="text-xl mb-8 text-orange-100">
            Find us in the heart of Narnaund for an unforgettable dining experience
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={siteContent.contact.address.embedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location Map"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Address & Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Address Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      {siteContent.contact.address.street}<br />
                      {siteContent.contact.address.city}, {siteContent.contact.address.state} {siteContent.contact.address.zip}
                    </p>
                    <a 
                      href={siteContent.contact.address.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-orange-600 hover:text-orange-700 font-medium mt-2"
                    >
                      <Navigation size={16} />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Phone</h3>
                    <a 
                      href={`tel:${siteContent.contact.phone}`}
                      className="text-gray-600 hover:text-orange-600"
                    >
                      {siteContent.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Business Hours</h3>
                    <div className="space-y-1">
                      {siteContent.hours.map((item, index) => (
                        <div key={index}>
                          <p className="font-medium text-gray-900">{item.day}</p>
                          <p className="text-gray-600">{item.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Visit Information</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start space-x-3">
                    <Car className="text-orange-600 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Parking</h3>
                      <p className="text-gray-600">
                        Free parking available for our customers. We have a dedicated parking area with space for over 50 vehicles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🏛️</span>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Nearby Landmarks</h3>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 500m from Narnaund Bus Stand</li>
                        <li>• 1km from Government College</li>
                        <li>• 2km from Railway Station</li>
                        <li>• Located on Main Market Road</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">♿</span>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Accessibility</h3>
                      <p className="text-gray-600">
                        Wheelchair accessible entrance and seating available. We strive to accommodate all our guests' needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Visit?</h2>
          <p className="text-xl mb-8 text-orange-100">
            We're excited to welcome you to our restaurant
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={siteContent.contact.address.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Directions
            </a>
            <a 
              href={`tel:${siteContent.contact.phone}`}
              className="bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-800 transition-colors text-lg"
            >
              Call for Reservation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;