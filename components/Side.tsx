'use client'

import Link from 'next/link'

const links = [{ route: '/server-actions', name: 'Server Actions' }]

const Side = () => {
  return (
    <div className="w-full h-full px-3">
      <div className="mb-20">logo</div>
      <div>
        {links.map((link) => (
          <div className="w-full" key={link.route}>
            <Link href={link.route}>
              <div className="w-full h-full py-2 px-2 hover:bg-primary rounded-lg ">
                {link.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Side