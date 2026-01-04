interface TechBadgeProps {
    name: string
  }
  
  export function TechBadge({ name }: TechBadgeProps) {
    return (
      <div className="bg-black text-white p-6 rounded-xl font-semibold text-lg hover:scale-110 transition-transform cursor-default">
        {name}
      </div>
    )
  }