import { Link } from "react-router-dom"
import background from '../assets/HomeBackgroundImage.jpg'
import CountUp from "react-countup"

function Home() {
    return (
      <main className={`w-full h-full inset-x-0 mx-auto font-montserrat `}>
        {/* Section 1 */}
          <div className="w-full h-[492px] bg-cover bg-no-repeat flex flex-row justify-center items-center shadow-2xl bg-opacity-40 gap-72 text-5xl  text-white" style={{backgroundImage: `url(${background})`}}>
            <div className="text-center">
              <h1><CountUp end={100} /></h1>
              <hr className="mt-10 mb-10"/>
              <p className="text-2xl">Projects</p>
            </div>
            <div className="text-center">
              <h1><CountUp end={100} /></h1>
              <hr className="mt-10 mb-10"/>
              <p className="text-2xl">Projects</p>
            </div>
            <div className="text-center">
              <h1><CountUp end={100} /></h1>
              <hr className="mt-10 mb-10"/>
              <p className="text-2xl">Projects</p>
            </div>
          </div>
        {/* Section 2 */}
          <div className="w-full h-[492px] flex flex-col justify-center items-center text-6xl">
            <div className="font-extrabold text-transparent text-center text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              <h1>Phuripat Sunopak</h1>
              <hr className="m-5" />
              <h4 className="text-4xl">React.js | Next.js | TypeScript | Firebase | MongoDb | Node.js</h4>
            </div>
            <div className="relative p-2 mt-32">
              <div className="transition-all duration-500 absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg blur-xl -z-10 "></div>
              <button className="z-10 px-16 py-4 bg-black rounded-lg leading-none flex items-center text-2xl">About me</button>
            </div>
          </div>
        {/* Section 3 */}
          <div className="w-full h-[600px] grid grid-rows-3 grid-flow-col gap-4 text-6xl">
            <div className="row-span-3">0</div>
            <div className="col-span-2">1</div>
            <div className="row-span-2 col-span-2">2</div>
          </div>

      </main>
      )
  }

export default Home