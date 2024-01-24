import Button from './button'
import Logo from './logo'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">

            <Logo />
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                  <a href='/'>Home</a>
              </li>
              <li>
                  <a href='/about'>About Us</a>
              </li>
              <li>
                  <a href='/services'>Services</a>
              </li>
              <li>
                  <a href='/contact'>Contacts</a>
              </li>
              <li>
                <Link href={"test"}>Test</Link>
              </li>
            </ul>
            {/* <Button /> */}
          </div>
        </div>
      </div>
    )
    }