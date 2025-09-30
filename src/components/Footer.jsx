import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Morta Gym — Síguenos: Instagram · Facebook</p>
      </div>
    </footer>
  )
}
