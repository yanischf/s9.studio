
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="pt-24 bg-surface dark:bg-black">
      {/* HERO SECTION */}
      <section className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-4">
            <span className="px-4 py-1.5 border border-gray-200 dark:border-neutral-700 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-muted block w-fit">
              Contacts
            </span>
          </div>
          <div className="md:col-span-8 text-right">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance mb-8">
              Parlons de votre prochain <span className="italic">défi</span>.
            </h1>
          </div>
        </div>
      </section>

      {/* CONTACT GRID (01) */}
      <section className="container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Studio</span>
              <h2 className="text-4xl font-bold tracking-tighter">Informations</h2>
              <div className="text-[10px] font-bold text-muted uppercase tracking-widest">(01)</div>
            </div>

            <div className="space-y-10">
              {[
                { icon: <Mail size={20} />, label: "Email", value: "hello@studio-s9.com", link: "mailto:hello@studio-s9.com" },
                { icon: <Phone size={20} />, label: "Téléphone", value: "+33 (0)1 23 45 67 89", link: "tel:+33123456789" },
                { icon: <MapPin size={20} />, label: "Adresse", value: "123 Avenue du Design, 75011 Paris", link: "#" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-neutral-800 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted">{item.label}</span>
                    <a href={item.link} className="text-xl font-bold block hover:underline underline-offset-8 decoration-accent transition-all">{item.value}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-10 bg-white dark:bg-neutral-900 rounded-[2.5rem] border border-gray-100 dark:border-neutral-800 space-y-6">
               <h3 className="text-xl font-bold flex items-center gap-3 italic">
                  <MessageSquare size={20} /> Discussion directe ?
               </h3>
               <p className="text-muted text-sm leading-relaxed">Passez nous voir pour un café et une démo de nos environnements. Notre équipe vous accueille du lundi au vendredi.</p>
               <button className="text-[11px] font-bold uppercase tracking-widest underline underline-offset-8">Prendre rendez-vous</button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-neutral-950 rounded-[3rem] p-10 md:p-20 shadow-2xl border border-gray-100 dark:border-neutral-900 relative">
              <span className="absolute top-10 right-10 text-[10px] font-bold text-muted uppercase tracking-widest">(02)</span>
              {submitted ? (
                <div className="py-20 text-center space-y-8 animate-in zoom-in-95">
                  <div className="w-20 h-20 bg-black dark:bg-white text-white dark:text-black rounded-full mx-auto flex items-center justify-center">
                    <Send size={32} />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tighter italic">Message Envoyé !</h2>
                  <button onClick={() => setSubmitted(false)} className="text-[11px] font-bold uppercase underline">Renvoyer un message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-2 group">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Nom Complet</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-gray-200 dark:border-neutral-800 py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Email Professionnel</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-gray-200 dark:border-neutral-800 py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                        placeholder="jean@entreprise.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Sujet de discussion</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-200 dark:border-neutral-800 py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                    >
                      <option value="" className="bg-white dark:bg-black">Sélectionnez une option</option>
                      <option value="Environments" className="bg-white dark:bg-black">Design Environments</option>
                      <option value="Global" className="bg-white dark:bg-black">S9 Studio Global</option>
                      <option value="Other" className="bg-white dark:bg-black">Autre demande</option>
                    </select>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Votre Projet</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-200 dark:border-neutral-800 py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                      placeholder="Comment pouvons-nous transformer vos idées ?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-6 w-full py-6 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform"
                  >
                    Envoyer ma demande <div className="w-8 h-8 rounded-full bg-white dark:bg-black text-black dark:text-white flex items-center justify-center"><ArrowRight size={16} /></div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
