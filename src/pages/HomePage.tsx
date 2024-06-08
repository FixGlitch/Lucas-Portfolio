import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function HomePage() {
  return (
    <div className="flex flex-col gap-10 geist-regular text-white">
      <p className="text-left text-2xl">Hey, I’m Lucas ✌🏻</p>
      <p className="text-left text-[#d4d4d4]">
        I am a software developer who loves creating useful, scalable and
        accessible software. I currently work as a full stack software developer
        in DevLabs, where I develop new functionalities for a Sama.life project
        in patient automation for an insemination center.
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex w-[100%] justify-between gap-5">
          <img
            src="/images/horizontal-1.png" 
            alt=""
            className="w-[65%] rounded-md"
          />
          <img
            src="/images/vertical-1.png"
            alt=""
            className="w-[35%] rounde-md"
          />
        </div>
      </div>
      <p className="text-left text-[#d4d4d4]">
        I've always liked meeting new people with whom I can share knowledge,
        experiences, or just anecdotes.
      </p>

      <div className="grid md:grid-cols-[1fr_1fr] gap-5 text-[14px]">
        <a href="https://www.instagram.com/fixglitchdev/" target="_blank">
          <div className="flex items-center p-3 justify-between bg-[#262626] border-2 border-[#404040] rounded-md">
            <img className="w-12 h-12" src="/images/instagram.png" alt="" />
            <div className="flex flex-column items-center justify-center text-left">
              <img className="w-4 h-12" src="/public/instagram.svg" alt="" />
              <p>@fixglitchdev</p>
            </div>
            <FaArrowUpRightFromSquare />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/lucasdblanco/" target="_blank">
          <div className="flex items-center p-3 justify-between bg-[#262626] border-2 border-[#404040] rounded-md">
            <img className="w-12 h-12" src="/images/linkedin.png" alt="" />
            <div className="flex flex-row items-center justify-center text-left">
              <img className="w-4 h-12" src="/public/linkedin.svg" alt="" />
              <p>@Lucas Blanco</p>
            </div>
            <FaArrowUpRightFromSquare />
          </div>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
