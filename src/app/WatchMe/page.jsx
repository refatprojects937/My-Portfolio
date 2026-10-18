import React from 'react';
import Image from 'next/image';
import CardImage from "../../assets/IxI18R8Y_400x400.jpg"


const page = () => {
    return (
        <div className='container mx-auto rounded-2xl bg-gray-800 '>
        <div>
            <h2 className='font-bold text-8xl pt-8 pl-35'>About Me</h2>
            <h2 className='pl-15 pt-4 pb-8 pr-8'>I am a third-year Computer Science and Engineering (CSE) student with a strong passion for Full Stack Web Development and creating modern, responsive, and user-friendly web applications.<br/>I have around 3 months of hands-on experience in full stack web development, working with **HTML, CSS, JavaScript, TypeScript, Tailwind, React.js, and Next.js, node.js, MongoDB**. I enjoy transforming ideas and designs into interactive web experiences while focusing on clean code, responsive layouts, and user experience.<br/><br/>I am continuously learning and improving my skills by building projects, exploring modern web technologies, and solving development challenges. My goal is to grow up as a Full Stack Web Developer, contribute to real-world projects, and collaborate with talented developers to build impactful digital experiences.<br/><br/>I am always open to learning opportunities, collaboration, internships, and projects that help me grow as a developer.

            </h2>
            </div>

        <div>





        
        
        
        </div>
    <section className="pl-15 p-6">
      <div className="max-w-sm rounded-xl border bg-amber-50 p-6 shadow-md">
        <h2 className="mb-6 font-bold text-gray-800 text-2xl">
          🎓 EDUCATION
        </h2>

        <div className="flex items-center gap-4">
       <img
    src="CardImage"
    alt="Programming Hero"
    className="h-14 w-14 rounded-lg object-contain"
  />
          <div>
           
            <h3 className="mt-2 font-semibold text-gray-800">
              Programming Hero Powered by Jhankar Mahbub
            </h3>
            <p className="text-xl text-gray-500">
              Full Stack Web Development
            </p>
             <p className="text-sm tracking-widest text-blue-500">
              2026
            </p>
          </div>
        </div>
      </div>
    </section>
  
         </div>
    );
};

export default page;