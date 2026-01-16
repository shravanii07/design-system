import { cn } from "@/lib/utils"

export function EverleapLogo({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center", className)}>
            <img
                src="/Logo.svg"
                alt="Everleap Logo"
                className="h-7 w-auto block dark:brightness-0 dark:invert"
            />
        </div>
    )
}
