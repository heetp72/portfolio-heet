const Certifications = () => (
  <section id="certifications" className="py-20 text-center bg-gray-800 bg-opacity-70 slide-up">
    <h2 className="text-3xl font-bold mb-10 text-yellow-300">Certifications</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
      <a href="https://www.credly.com/badges/7a30b631-d16b-4476-a566-aa775c79195b/linked_in_profile" 
         target="_blank" rel="noopener noreferrer"
         className="p-6 bg-gray-900 rounded-2xl hover:scale-105 transition duration-300">
        <h3 className="text-lg font-semibold text-green-400 mb-2">AWS Educate Machine Learning Foundations</h3>
      </a>
      <a href="https://www.cloudskillsboost.google/public_profiles/b80e7aea-13f6-4ec0-86f1-107bdb82b8bb/badges/15145440" 
         target="_blank" rel="noopener noreferrer"
         className="p-6 bg-gray-900 rounded-2xl hover:scale-105 transition duration-300">
        <h3 className="text-lg font-semibold text-green-400 mb-2">Google Cloud Fundamentals</h3>
      </a>
      <a href="https://www.hackerrank.com/certificates/iframe/51e8df30c6fc" 
         target="_blank" rel="noopener noreferrer"
         className="p-6 bg-gray-900 rounded-2xl hover:scale-105 transition duration-300">
        <h3 className="text-lg font-semibold text-green-400 mb-2">HackerRank Software Engineer</h3>
      </a>
    </div>
  </section>
);

export default Certifications;
