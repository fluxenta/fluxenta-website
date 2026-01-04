import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-black text-white p-8 rounded-2xl hover:scale-105 transition-transform cursor-pointer group">
      <Icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}