"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const WorksTabs = () => {

  const pathname = usePathname();

  const tabs = [
    {id: 'all', name: 'All', path: '/work'},
    {id: 'brand-identity', name: 'Brand Identity', path: '/work/brand-identity'},
    {id: 'product-design', name: 'Product Design', path: '/work/product-design'},
    {id: 'web-design', name: 'Web Design', path: '/work/web-design'},
    {id: 'motion-design', name: 'Motion Design', path: '/work/motion-design'},
    {id: 'illustration', name: 'Illustration', path: '/work/illustration'},
    {id: '3D-motion', name: '3D Motion', path: '/work/3D-motion'},
    {id: 'campaign-design', name: 'Campaign Design', path: '/work/campaign-design'},
    {id: 'ai-platforms', name: 'AI Platforms', path: '/work/ai-platforms'},
  ]

  return (
    <nav className='works-content__tabs'>
      {
        tabs.map((tab) => <Link className={pathname === tab.path ? "active": ""} scroll={false} href={tab.path} key={tab.id}>{tab.name}</Link>)
      }
    </nav>
  )
}

export default WorksTabs
