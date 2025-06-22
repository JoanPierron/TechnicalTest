'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './Sidebar.css'

export default function Sidebar() {
  const pathname = usePathname()

  const links = [
    { label: 'Accueil', href: '/' },
    { label: 'Liste', href: '/liste' },
    { label: 'Ajouter', href: '/ajouter' },
  ]

  return (
    <nav className="sidebar">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={pathname === href ? 'active' : ''}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
