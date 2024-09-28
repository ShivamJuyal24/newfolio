const Projects = () => {
  return (
    <div className="space-y-5 pt-10" id="projects">
      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center">
        <span className="text-white-600">My Projects</span>
      </h1>

      <h3 className="font-semibold text-gray-500 text-xl text-center">
        I've built everything from simple websites to advanced web applications. Here are some of the projects.
      </h3>

      <div className="flex flex-col items-center justify-center space-y-5">
        <div className="sm:flex gap-5 space-y-5 sm:space-y-0">
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] bg-gray-800 text-white border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <h3 className="text-lg font-bold">Chat With Multiple PDF</h3>
            <span className="text-sm text-gray-400 font-semibold">Jan 2024 - Feb 2024</span>
            <p className="text-xs text-gray-300 font-medium max-w-64">
              Developed a Streamlit-based web application enabling users to upload PDFs and ask questions based on their content. Utilized Google Generative AI and Langchain to extract, process, and chunk text, storing embeddings in a FAISS vector database for efficient similarity search. The application generates accurate, context-aware answers using a conversational AI model, facilitating interactive document analysis.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm">
                <a href="https://github.com/ShivamJuyal24/Chat-With-Multiple-PDF-s" target="_blank" rel="noopener noreferrer">GitHub</a>
              </button>
              <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm">
                <a href="your-project-link" target="_blank" rel="noopener noreferrer">Link</a>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] bg-gray-800 text-white border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <h3 className="text-lg font-bold">Blog Generation</h3>
            <span className="text-sm text-gray-400 font-semibold">Nov 2023 - Dec 2023</span>
            <p className="text-xs text-gray-300 font-medium max-w-64">
              Developed a Streamlit-based web application that generates tailored blog content using the LLaMA 2 model. The app allows users to input a blog topic, select a target audience (e.g., researchers, data scientists, or common people), and specify the desired word count. It dynamically generates context-aware blog posts using a prompt-driven approach and LLaMA 2, delivering personalized content efficiently.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm">
                <a href="https://github.com/ShivamJuyal24" target="_blank" rel="noopener noreferrer">GitHub</a>
              </button>
              <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm">
                <a href="your-project-link" target="_blank" rel="noopener noreferrer">Link</a>
              </button>
            </div>
          </div>
        </div>

        <div className="sm:flex gap-5 space-y-5 sm:space-y-0">
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] bg-gray-800 text-white border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <h3 className="text-lg font-bold">E-Commerce Shopping Cart</h3>
            <span className="text-sm text-gray-400 font-semibold">April 2023 - May 2023</span>
            <p className="text-xs text-gray-300 font-medium max-w-64">
              Developed a full-featured e-commerce shopping cart website using React and Redux, allowing users to browse a wide range of products, add items to their cart, remove them, and complete the checkout process seamlessly. Leveraged Redux for efficient state management, ensuring a smooth and intuitive user experience throughout product selection and transaction handling.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm">
                <a href="https://github.com/ShivamJuyal24" target="_blank" rel="noopener noreferrer">GitHub</a>
              </button>
              <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm">
                <a href="your-project-link" target="_blank" rel="noopener noreferrer">Link</a>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] bg-gray-800 text-white border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <h3 className="text-lg font-bold">Speed Typing Test</h3>
            <span className="text-sm text-gray-400 font-semibold">Sept 2022 - Oct 2022</span>
            <p className="text-xs text-gray-300 font-medium max-w-64">
              Developed a responsive website using HTML, CSS, and JavaScript that allows users to test their typing speed by inputting predefined paragraphs. The site calculates and displays the user's typing speed in words per minute (WPM) and characters per second (CPS), providing real-time feedback for an engaging and interactive user experience.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm">
                <a href="https://github.com/ShivamJuyal24/speed-typing-test" target="_blank" rel="noopener noreferrer">GitHub</a>
              </button>
              <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm">
                <a href="your-project-link" target="_blank" rel="noopener noreferrer">Link</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
