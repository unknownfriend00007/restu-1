"use client";

import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Facebook, Instagram, Send } from 'lucide-react';
import { siteContent } from '@/config/siteContent';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl mb-8 text-orange-100">
            We'd love to hear from you. Get in touch with us for reservations, feedback, or any questions.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Phone</h3>
              <a 
                href={`tel:${siteContent.contact.phone}`}
                className="text-gray-600 hover:text-orange-600 text-lg font-medium"
              >
                {siteContent.contact.phone}
              </a>
              <p className="text-sm text-gray-500 mt-2">Call for reservations</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">WhatsApp</h3>
              <a 
                href={`https://wa.me/${siteContent.contact.whatsapp.replace(/[^\d]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 text-lg font-medium"
              >
                {siteContent.contact.whatsapp}
              </a>
              <p className="text-sm text-gray-500 mt-2">Chat with us</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Email</h3>
              <a 
                href={`mailto:${siteContent.contact.email}`}
                className="text-gray-600 hover:text-blue-600 text-lg font-medium"
              >
                {siteContent.contact.email}
              </a>
              <p className="text-sm text-gray-500 mt-2">Send us a message</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Send us a Message</h2>
              <ContactForm />
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Visit Us</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-orange-600 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      {siteContent.contact.address.street}<br />
                      {siteContent.contact.address.city}, {siteContent.contact.address.state} {siteContent.contact.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-orange-600 mt-1" size={24} />
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

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href={siteContent.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                    >
                      <Instagram size={24} className="text-white" />
                    </a>
                    <a 
                      href={siteContent.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <Facebook size={24} className="text-white" />
                    </a>
                    <a 
                      href={siteContent.social.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      <Send size={24} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Do I need a reservation?</h3>
              <p className="text-gray-600">
                While walk-ins are welcome, we highly recommend making a reservation, especially for weekend dining and large groups.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Do you offer catering services?</h3>
              <p className="text-gray-600">
                Yes! We offer catering for events of all sizes. Please contact us at least 48 hours in advance to discuss your requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Do you have vegetarian options?</h3>
              <p className="text-gray-600">
                Absolutely! We have an extensive vegetarian menu with delicious options that cater to various dietary preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;