import React from "react"
import { SiLinkedin} from "react-icons/si";
import { SiGithub} from "react-icons/si";


const navigation = [
    
    
    {
      name: 'GitHub',
      href: 'https://github.com/sami-alaloosi',
      icon: <SiGithub className="h-6 w-6" aria-hidden="true" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sami-alaloosi/',
      icon: <SiLinkedin className="h-6 w-6" aria-hidden="true" />,
    },
  ]
  
  export default function Example() {
    return (
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} target="_blank" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                {item.icon}
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">&copy; 2021 Sami Al Aloosi, All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  