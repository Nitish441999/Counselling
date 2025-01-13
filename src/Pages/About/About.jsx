import React from "react";

function About() {
  return (
    <div className=" p-5">
      <h1 className="text-center text-[#214fc6] text-5xl font-bold max-sm:text-3xl tracking-widest">
        ABOUT US
      </h1>
      <div className="w-full min-h-[60vh] flex justify-center items-center max-md:flex-wrap gap-12 mt-10 overflow-hidden">
        <div className="w-[600px] min-h-[20vh]">
          <img
            className="w-full  object-contain rounded-md"
            src="https://fps.cdnpk.net/images/ai/image-generator/gallery/resource-tti-15.webp?w=1920&h=1920&q=90"
            alt="About Image"
            loading="lazy"
          />
        </div>
        <div className="w-[550px] min-h-[60vh]">
          <p className=" text-justify  leading-7 custom-paragraph mx-4">
            Student Counseling Corner is a trusted and experienced admission
            consultancy with over 15 years of expertise in guiding students
            through the complex admission process. We specialize in providing
            admission assistance for a wide range of courses across India and
            abroad. Our services cater to various academic fields, including
            Management, Engineering, Medical, Nursing, Hotel Management, and
            Paramedical disciplines. We are committed to helping students secure
            placements in top colleges and universities, offering expert
            counseling and support for programs such as B.Tech, M.Tech, MBBS,
            BHMS, BAMS, MD, GNM, B.Sc Nursing, M.Sc Nursing, BBA, MBA, BCA, and
            Diploma courses. With a deep understanding of the education
            landscape and a network of prestigious institutions, we aim to make
            the admission process seamless and stress-free for students. Whether
            you're looking to pursue undergraduate or postgraduate studies,
            Student Counseling Corner is dedicated to guiding you every step of
            the way toward achieving your academic and career goals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
