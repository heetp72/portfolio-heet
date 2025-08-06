const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();
    alert(result.message || "Message sent!");
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 text-center bg-gray-900 bg-opacity-90 slide-up">
      <h2 className="text-3xl font-bold mb-6 text-green-400">Let's Connect</h2>
      <p className="mb-6 text-gray-300">Companies can directly reach me using this form.</p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col space-y-4">
        <input type="text" name="name" placeholder="Your Name" className="p-3 rounded-lg text-black" required/>
        <input type="email" name="email" placeholder="Your Email" className="p-3 rounded-lg text-black" required/>
        <textarea name="message" placeholder="Your Message" rows="4" className="p-3 rounded-lg text-black" required></textarea>
        <button type="submit" className="px-6 py-3 bg-green-500 rounded-xl text-black font-bold hover:bg-green-400 hover:scale-105 transition duration-300">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
