import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Home, Settings, Users } from "lucide-react";
import { EverleapLogo } from "@/components/everleap-logo";

type NavItem = {
    href: string;
    label: string;
    icon: React.ReactNode;
};

const navItems: NavItem[] = [
    { href: "/dashboard", label: "Dashboard", icon: <Home className="h-5 w-5" /> },
    { href: "/admin", label: "Admin", icon: <Settings className="h-5 w-5" /> },
    { href: "/team", label: "Team", icon: <Users className="h-5 w-5" /> },
];

export function Sidebar() {
    return (
        <aside className="flex flex-col w-64 h-full bg-card border-r border-t/20 p-4">
            <div className="mb-8 flex justify-center">
                <EverleapLogo className="h-8 w-auto" />
            </div>
            <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 rounded-md p-2 text-sm font-medium hover:bg-muted/30",
                        )}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
