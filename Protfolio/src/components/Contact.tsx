import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await fetch('https://portfolio-n54y.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <Mail className="text-yellow-400" size={24} />
                <span>prasaddeepak896@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Phone className="text-yellow-400" size={24} />
                <span>7005209700</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <MapPin className="text-yellow-400" size={24} />
                <span>Rajpura,punjab</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-yellow-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black border border-yellow-400/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-yellow-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black border border-yellow-400/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-yellow-400 mb-2">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-black border border-yellow-400/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status.loading}
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
            >
              {status.loading ? (
                <>
                  <Loader className="animate-spin mr-2" size={20} />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
            {status.success && (
              <p className="text-green-400">Message sent successfully!</p>
            )}
            {status.error && (
              <p className="text-red-400">{status.error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;