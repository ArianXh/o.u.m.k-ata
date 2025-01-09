import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} О.У Мустафа Кемал Ататурк. All Rights Reserved. 2024</p>
        <div className="mt-2">
          <a href="https://facebook.com" className="mx-2 text-white hover:underline">Facebook</a>
          <a href="https://twitter.com" className="mx-2 text-white hover:underline">Twitter</a>
          <a href="mailto:info@ataschool.edu" className="mx-2 text-white hover:underline">Email Us</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer