"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
    image: route.imageUrl, // Ensure this is the correct property for image URLs
  }));

  return (
    <nav className="flex overflow-x-auto p-4 space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex flex-col items-center space-y-2 text-sm font-medium transition-colors hover:text-black",
            route.active ? "text-black" : "text-gray-500"
          )}
        >
          {route.image && (
            <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gray-300">
              <Image
                src={route.image}
                alt={route.label}
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
          )}
          <span className="text-xs font-medium">{route.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
