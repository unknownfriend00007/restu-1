"use client";

import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-mysteria-cream">
      <div className="h-20"></div>

      <header className="py-24 bg-gradient-to-b from-white to-mysteria-cream">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-display text-mysteria-navy mb-4">Get in Touch</h1>
          <p className="text-mysteria-textSecondary text-xl font-light">Pre-order your meal or send us a message</p>
        </div>
      </header>

      <section className="py-20 pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl shadow-mysteria-navy/5 border border-gray-100">
            <h2 className="text-4xl font-display text-mysteria-navy mb-12">Place Your Order</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;