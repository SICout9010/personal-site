import { Link } from "react-router-dom"
import background from '../assets/HomeBackgroundImage.jpg'
import CountUp from "react-countup"
import { useState } from "react"

function Home() {
  // const [selectedTitle, setSelectedTitle] = useState('')
  const [selectedText, setSelectedText] = useState({title: "", msg: ""})

  const onSelectedSubmit = (selected: string) => {
    switch (selected) {
      case 'description':
        setSelectedText(
          {
            title: "Description",
            msg: "Phuripat is great guy."
          }
        )
        break;
      case 'education':
        setSelectedText(
          {
            title: "Education",
            msg: "BuriramPhittayakom"
          }
        )
        break;
      case 'exprerience':
        setSelectedText(
          {
            title: "Expreience",
            msg: "BRP-BLOG"
          }
        )
        break;
      default:
        break;
    }
  }
  

    return (
      <main className={`w-full h-full inset-x-0 mx-auto font-montserrat `}>
        {/* Section 1 */}
          <div className="w-full h-[492px] bg-cover bg-no-repeat flex flex-row justify-center items-center shadow-2xl bg-opacity-40 gap-72 text-5xl  text-white" style={{backgroundImage: `url(${background})`}}>
            <div className="text-center">
              <h1><CountUp end={56} /></h1>
              <hr className="mt-10 mb-10"/>
              <p className="text-2xl">Users</p>
            </div>
            <div className="text-center">
              <h1><CountUp end={121} /></h1>
              <hr className="mt-10 mb-10"/>
              <p className="text-2xl">Visits</p>
            </div>
            <div className="text-center">
              <h1><CountUp end={7} /></h1>
              <hr className="mt-10 mb-10"/>
              <p className="text-2xl">Skills</p>
            </div>
          </div>
        {/* Section 2 */}
          <div className="w-full h-[492px] flex flex-col justify-center items-center text-6xl">
            <div className="font-extrabold text-transparent text-center text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              <h1>Phuripat Sunopak</h1>
              <hr className="m-5" />
              <h4 className="text-4xl">React.js | Next.js | TypeScript | Firebase | MongoDB | Node.js</h4>
            </div>
            <div className="relative p-2 mt-32">
              <div className="transition-all duration-500 absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg blur-xl -z-10 "></div>
              <button className="z-10 px-16 py-4 bg-black rounded-lg leading-none flex items-center text-2xl">About me</button>
            </div>
          </div>
        {/* Section 3 */}
          <div className="mt-10 w-full h-[400px] grid grid-rows-3 grid-flow-col gap-4 text-3xl">
            <div className=" row-span-3 flex justify-start">
              <div className="mx-10 w-1 h-[250px] bg-green-500 rounded-lg bg-opacity-20">

              </div>
              <ul className="mx-20 absolute flex flex-col gap-16">
                <li onClick={() => onSelectedSubmit('description')} className="transition-all duration-500 text-green-500 text-opacity-30 hover:pl-9 hover:text-opacity-80 cursor-pointer">⟹ Description</li>
                <li onClick={() => onSelectedSubmit('education')} className="transition-all duration-500 text-green-500 text-opacity-30 hover:pl-9 hover:text-opacity-80 cursor-pointer">⟹ Education</li>
                <li onClick={() => onSelectedSubmit('exprerience')} className="transition-all duration-500 text-green-500 text-opacity-30 hover:pl-9 hover:text-opacity-80 cursor-pointer">⟹ Exprerience</li>
              </ul>
            </div>
            <div className="static col-span-2 flex justify-center">
              {selectedText.title}
            </div>
            <div className="ml-20 sticky row-span-2 col-span-2">
              {selectedText.msg}
            </div>
          </div>
        {/* Section 4 Comments */}
          <div className="w-full h-[492px] flex flex-col items-center text-6xl">
            <div className="font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
                <h1>Comments</h1>
            </div>
            <ul className="mt-20 flex justify-center items-center gap-10 text-4xl">
              <li>
                <div className="bg-gray-900">
                  <img src="" alt="" />
                  <h1>This WEbsite is great</h1>
                  <p>- Micheal</p>
                </div>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
      </main>
      )
  }

export default Home