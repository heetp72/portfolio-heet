import React from 'react';

const certifications = [
  {
    title: "HackerRank Certified Software Engineer",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/51e8df30c6fc",
    icon: "fab fa-hackerrank text-emerald-400",
    badge: "Verified Skill",
    skills: "Problem Solving, Data Structures & Algorithms, Clean Code"
  },
  {
    title: "AWS Educate Machine Learning Foundations",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/badges/7a30b631-d16b-4476-a566-aa775c79195b/linked_in_profile",
    icon: "fab fa-aws text-orange-400",
    badge: "Credly Badge",
    skills: "Cloud Computing, AI/ML Architecture, AWS Ecosystem"
  },
  {
    title: "Google Cloud Fundamentals",
    issuer: "Google Cloud",
    link: "https://www.cloudskillsboost.google/public_profiles/b80e7aea-13f6-4ec0-86f1-107bdb82b8bb/badges/15145440",
    icon: "fab fa-google text-blue-400",
    badge: "Google Certified",
    skills: "GCP Infrastructure, Storage, Compute Engine & Cloud IAM"
  }
];

const Certifications = () => (
  <section id="certifications" className="py-20 max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">Credentials</h2>
      <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Certifications & Badges</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {certifications.map((cert, idx) => (
        <a
          key={idx}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group hover:scale-105"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl">
                <i className={cert.icon}></i>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
                {cert.badge}
              </span>
            </div>

            <h4 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
              {cert.title}
            </h4>
            <p className="text-xs font-semibold text-slate-400 mb-3">{cert.issuer}</p>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">{cert.skills}</p>
          </div>

          <div className="flex items-center gap-1 text-xs font-semibold text-emerald-400 group-hover:underline">
            <span>Verify Badge</span>
            <i className="fas fa-arrow-up-right-from-square text-[10px]"></i>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Certifications;
