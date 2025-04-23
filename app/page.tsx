"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import RatingStars from './components/RatingStars';
import LoveCalculator from './components/LoveCalculator';
import ZodiacChatbot from './components/ZodiacChatbot';

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const router = useRouter();

  const nama = "Wahyudin Sapari";
  const deskripsi = "Seorang Web Developer dengan minat pada UI/UX dan teknologi web modern.";

  const keahlian = ["HTML", "CSS", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS"];
  const pengalaman = [
    {
      title: "Frontend Developer Intern",
      company: "ABC Tech",
      year: "2023",
      description: "Mengembangkan UI dengan React dan Next.js...",
      detailLink: "/portfolio/frontend-developer-intern"
    },
    {
      title: "Freelance Web Designer",
      company: "Freelance",
      year: "2022",
      description: "Mendesain website untuk beberapa klien...",
      detailLink: "/portfolio/web-designer"
    },
    {
      title: "Project Management Intern",
      company: "XYZ Corp",
      year: "2021",
      description: "Bertanggung jawab untuk manajemen proyek...",
      detailLink: "/portfolio/project-management-intern"
    },
  ];

  const kontak = [
    { label: "Email", value: "wahyudin@example.com" },
    { label: "GitHub", value: "https://github.com/wahyds" },
    { label: "LinkedIn", value: "https://linkedin.com" },
  ];

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.classList.remove('light', 'dark');
      html.classList.add(theme);
    }
  }, [theme]);

  const handleExperienceClick = (link: string) => {
    router.push(link);
  };

  return (
    <>
      <div className="min-h-screen py-10 px-4 sm:px-6 md:px-10 flex justify-center items-start transition-all duration-500 bg-white dark:bg-gray-900">
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-10 border border-blue-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <img
              src="profile.jpg"
              alt="Foto Profil"
              className="w-32 h-32 rounded-full mx-auto object-cover shadow-md border-4 border-blue-300 dark:border-gray-600"
            />
            <h1 className="text-4xl font-bold text-blue-800 dark:text-white mt-4">{nama}</h1>
            <p className="text-blue-600 dark:text-gray-300 mt-2">{deskripsi}</p>
          </div>

          {/* About */}
          <section className="mb-6 p-6 bg-blue-100 dark:bg-gray-700 rounded-xl shadow-lg text-center transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-white mb-2 cursor-pointer" onClick={() => setShowAbout(!showAbout)}>
              About
            </h2>
            {showAbout && (
              <p className="text-gray-700 dark:text-gray-300">
                Saya adalah seorang pengembang web yang antusias membangun antarmuka modern menggunakan teknologi seperti React dan Next.js. Saya juga memiliki ketertarikan dalam desain UI/UX dan terus belajar untuk meningkatkan keterampilan saya.
              </p>
            )}
          </section>

          {/* Skills */}
          <section className="mb-6 p-6 bg-blue-100 dark:bg-gray-700 rounded-xl shadow-lg text-center transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-white mb-2 cursor-pointer" onClick={() => setShowSkills(!showSkills)}>
              Skills
            </h2>
            {showSkills && (
              <div className="flex justify-center flex-wrap gap-2">
                {keahlian.map((skill, idx) => (
                  <span key={idx} className="bg-blue-200 dark:bg-gray-600 text-blue-800 dark:text-white px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </section>

          {/* Experience */}
          <section className="mb-6 p-6 bg-blue-100 dark:bg-gray-700 rounded-xl shadow-lg text-center transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-white mb-2 cursor-pointer" onClick={() => setShowExperience(!showExperience)}>
              Experience
            </h2>
            {showExperience && (
              <div className="relative">
                <div className="absolute inset-0 border-l-4 border-dashed border-blue-300 dark:border-gray-600"></div>
                <ul className="space-y-6">
                  {pengalaman.map((item, idx) => (
                    <li
                      key={idx}
                      onClick={() => handleExperienceClick(item.detailLink)}
                      className="relative cursor-pointer p-4 bg-blue-200 dark:bg-gray-600 hover:bg-blue-300 dark:hover:bg-gray-500 rounded-xl transition-all duration-300 ease-in-out shadow-md"
                    >
                      <div className="absolute top-0 left-[-8px] w-4 h-4 bg-blue-500 dark:bg-white rounded-full border-2 border-white"></div>
                      <div className="ml-6">
                        <h3 className="font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.company} - {item.year}</p>
                        <p className="text-gray-700 dark:text-gray-200 mt-2">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Contact */}
          <section className="p-6 bg-blue-100 dark:bg-gray-700 rounded-xl shadow-lg text-center transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-white mb-2 cursor-pointer" onClick={() => setShowContact(!showContact)}>
              Contact
            </h2>
            {showContact && (
              <div className="space-y-4">
                {kontak.map((item, idx) => (
                  <div key={idx} className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">{item.label}: </span>
                    <a
                      href={item.label === 'Email' ? `mailto:${item.value}` : item.value}
                      className="text-blue-500 hover:underline"
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Rating */}
          <section className="p-6 bg-yellow-100 dark:bg-yellow-600 rounded-xl shadow-lg text-center mt-6 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-yellow-600 dark:text-white mb-4">Beri Rating Website Ini</h2>
            <RatingStars />
          </section>

          {/* Komentar */}
          <section className="p-6 bg-blue-100 dark:bg-gray-700 rounded-xl shadow-lg mt-6 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-white mb-4">Komentar</h2>
            <CommentForm />
            <CommentList />
          </section>

          {/* Love Calculator Game */}
          <section className="p-6 bg-pink-100 dark:bg-pink-600 rounded-xl shadow-lg mt-6 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-pink-600 dark:text-white mb-4">Love Percentage Calculator</h2>
            <LoveCalculator />
          </section>

          {/* Zodiac Chatbot */}
          <section className="p-6 bg-purple-100 dark:bg-purple-700 rounded-xl shadow-lg mt-6 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-purple-600 dark:text-white mb-4">Zodiac Chatbot</h2>
            <ZodiacChatbot />
          </section>
        </div>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 left-4 z-50 px-4 py-2 bg-blue-600 dark:bg-yellow-500 text-white dark:text-black rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-yellow-400 transition-all duration-300 text-xl"
        aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      >
        {theme === 'light' ? '🌙' : '🌞'}
      </button>
    </>
  );
}
