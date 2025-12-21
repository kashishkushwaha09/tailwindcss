import React from 'react'
import Image from "next/image";
const SchoolAura_section = () => {
  const featuresContent = [
    {
      title: "Schoolaura Courses",
      description:
        "Unlock quality education with SchoolAura Courses, a complete online learning platform for schools and students. From interactive lessons to live classes, we help institutions deliver digital learning experiences that are engaging, effective, and easy to manage.",
    },
    {
      title: "ERP Web Software",
      description:
        "Simplify your school operations with our powerful ERP Web Software. Manage attendance, fees, exams, staff, and communication all from a single, secure dashboard. Designed to boost productivity and transparency for schools of every size.",
    },
    {
      title: "ERP Schoolaura App",
      description:
        "Empower parents, teachers, and students with the SchoolAura mobile app. Stay updated with real-time notifications, homework, attendance, results, and school updates anytime, anywhere. Your school’s complete digital companion in one app.",
    },
    {
      title: "Life Time Free Landing School Page",
      description:
        "Get a dedicated landing page for your school absolutely free for life. Showcase achievements, facilities, and updates online with a beautiful, easy-to-manage page powered by SchoolAura. Build your school’s online presence effortlessly.",
    },
  ];

  return (
    <section>
      <div className="schoolAuraSection container relative mx-auto mt-10 min-h-125 bg-white grid 
      grid-cols-3 gap-6 p-5">
        <div className="bg-linear-to-r from-[#252ffd] to-[#06e3ff] rounded-xl p-6 col-span-2 software-card-1 flex gap-4">
          <div className='flex justify-end flex-col text-white w-[60%]'>
            <h4 className='font-medium text-2xl'>{featuresContent[0].title}</h4>
            <span className='text-xs font-thin tracking-wide text-white/80'>{featuresContent[0].description}</span>
          </div>
          <div className="relative img bg-white p-0 overflow-hidden">
            <Image
              src="/images/schoolAuraCourse.png"
              alt="SchoolAura"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="bg-[#f7f7f7] rounded-xl p-6 software-card-2">Item 2</div>
        <div className="bg-[#ffb742] rounded-xl p-6 software-card-3">Item 3</div>
        <div className="bg-linear-to-r from-[#f0e4fa] to-[#fdcc7d] rounded-xl p-6 col-span-2 software-card-4">
          <div className='flex flex-col'></div>
          <div className="relative img">
            <Image
              src="/images/schoolAuraCourse.png"
              alt="SchoolAura"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="relative mt-16 w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="/images/grid.png"
          alt="SchoolAura"
          fill
          priority
          className="object-contain translate-y-8"
        />
      </div>
    </section>
  )
}

export default SchoolAura_section