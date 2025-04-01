import { cn } from "@/lib/utils"

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
}

export function SectionContainer({ children, className }: SectionContainerProps) {
  return (
    <section className={cn("w-full py-16 md:py-24", className)}>
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  )
}
