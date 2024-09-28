import image1 from "../../public/dis.png"
import image2 from "../../public/children.png"
import image3 from "../../public/gehu.png"

const Education = () => {
  return (
    
    <div className="space-y-3">
      <h2 className="text-xl font-bold">Education</h2>

      <div className="flex items-center gap-5">
        <img src={image1} alt="" className="w-14 border rounded-full"/>
        
        <div className="flex items-center justify-between flex-1">
          <div className="flex flex-col">
            <h3 className="font-semibold">Doon International School</h3>
            <span className="font-medium text-gray-500 text-sm">Student</span>
          </div>

          <div className="text-gray-400">2018-2019</div>

        </div>
      </div>

      <div className="flex items-center gap-5">
        <img src={image2} alt="" className="w-14 border rounded-full"/>
        
        <div className="flex items-center justify-between flex-1" id="education">
          <div className="flex flex-col">
            <h3 className="font-semibold">Children Academy</h3>
            <span className="font-medium text-gray-500 text-sm">Science</span>
          </div>

          <div className="text-gray-400">2020-2021</div>

        </div>
      </div>

      <div className="flex items-center gap-5">
        <img src={image3} alt="" className="w-14 border rounded-full"/>
        
        <div className="flex items-center justify-between flex-1">
          <div className="flex flex-col">
            <h3 className="font-semibold">Graphic Era Hill University</h3>
            <span className="font-medium text-gray-500 text-sm">Computer Science Engineering</span>
          </div>

          <div className="text-gray-400">2021-2025</div>

        </div>
      </div>

      
    </div>
    
  )
}

export default Education
