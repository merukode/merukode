import Hero from "./Hero/Hero"
import Navbar from "./Navbar/Navbar"
import Social from "./Social/Social"

export default function Home() {
  return (
    <div className="w-screen bg-cover bg-center bg-no-repeat h-screen bg-[url('https://raw.githubusercontent.com/ulrmdhn/me.portoflio/master/src/img/bg-color-grid.png')]">
      <Navbar/>
      <Hero/>
      <Social/>
    </div>
  )
}
