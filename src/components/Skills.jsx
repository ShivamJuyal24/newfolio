const Skills = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-bold text-xl">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center">
        {/* Row 1 */}
        <div className="flex items-center justify-center py-1 px-2 w-full h-8 border-none text-black font-semibold rounded-xl bg-gray-400 text-center">
          HTML
        </div>
        <div className="flex items-center justify-center py-1 px-2 w-full h-8 border-none text-black font-semibold rounded-xl bg-gray-400  text-center">
          CSS
        </div>
        <div className="flex items-center justify-center py-1 px-2 w-full h-8 border-none text-black font-semibold rounded-xl bg-gray-400  text-center">
          JavaScript
        </div>
        <div className="flex items-center justify-center py-1 px-2 w-full h-8 border-none text-black font-semibold rounded-xl bg-gray-400  text-center">
          React
        </div>

        {/* Row 2 */}
        <div className="flex items-center justify-center py-1 px-2 w-full h-8 border-none text-black font-semibold rounded-xl bg-gray-400  text-center">
          Tailwind CSS
        </div>
        <div className="flex items-center justify-center py-1 px-2 w-full h-8 border-none text-black font-semibold rounded-xl bg-gray-400  text-center">
          NodeJs
        </div>
        <div className="flex items-center justify-center py-1 px-2 w-full h-8 border-none text-black font-semibold rounded-xl bg-gray-400  text-center">
          Python
        </div>
        <div className="flex items-center justify-center py-1 px-2 w-full h-8 border-none text-black font-semibold rounded-xl bg-gray-400  text-center">
          Machine Learning
        </div>

        {/* Row 3 */}
        <div className="flex items-center justify-center py-1 px-2 w-full h-8 border-none text-black font-semibold rounded-xl bg-gray-400  text-center">
          Docker
        </div>
        <div className="flex items-center justify-center py-1 px-2 w-full h-8 border-none text-black font-semibold rounded-xl bg-gray-400  text-center">
          AWS
        </div>
        <div className="flex items-center justify-center py-1 px-2 w-full h-8 border-none text-black font-semibold rounded-xl bg-gray-400 text-center">
          C++
        </div>
        <div className="flex items-center justify-center py-1 px-2 w-full h-8 border-none text-black font-semibold rounded-xl bg-gray-400 text-center">
          MySQL
        </div>
      </div>
    </div>
  )
}

export default Skills;
