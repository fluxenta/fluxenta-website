interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="border-l-4 border-white pl-6">
      <div className="text-5xl font-bold mb-2">{value}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  )
}