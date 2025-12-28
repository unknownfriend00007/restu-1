"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Star } from 'lucide-react';
import { siteContent } from '@/config/siteContent';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={siteContent.homepage.heroImage}
            alt="Restaurant Hero"
            className="w-full h-full object-cover"
            // Replace with actual hero image
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {siteContent.restaurant.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            {siteContent.restaurant.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link 
              to="/menu"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-lg"
            >
              View Menu
            </Link>
            <Link 
              to="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Make Reservation
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {siteContent.homepage.aboutText}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Featured Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.homepage.featuredDishes.map((dish, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    // Replace with actual dish images
                    onError={(e) => {
                      e.currentTarget.src = `https://images.unsplash.com/photo-${1546069901-ba9599a7e63c?w=400&h=300&fit=crop`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">{dish.price}</span>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Business Hours</h3>
              <div className="space-y-2">
                {siteContent.hours.map((item, index) => (
                  <div key={index}>
                    <p className="font-medium text-gray-900">{item.day}</p>
                    <p className="text-gray-600">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Location</h3>
              <p className="text-gray-600 mb-4">
                {siteContent.contact.address.street}<br />
                {siteContent.contact.address.city}, {siteContent.contact.address.state}
              </p>
              <Link 
                to="/location"
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                Get Directions →
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Contact</h3>
              <p className="text-gray-600 mb-4">
                Call us for reservations<br />
                or special events
              </p>
              <a 
                href={`tel:${siteContent.contact.phone}`}
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                {siteContent.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Experience Authentic Flavors?</h2>
          <p className="text-xl mb-8 text-orange-100">Visit us today or make a reservation for your special occasion</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Make Reservation
            </Link>
            <a 
              href={`tel:${siteContent.contact.phone}`}
              className="bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-800 transition-colors text-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;