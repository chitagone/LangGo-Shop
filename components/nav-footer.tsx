"use client";
import React from "react";
import { Home, Heart, ShoppingCart, User } from "lucide-react";
import { usePathname } from "next/navigation";

const NavFooter = () => {
  const pathname = usePathname();

  // Define the links for each navigation item
  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/liked", label: "Liked", icon: Heart },
    { href: "/cart", label: "Orders", icon: ShoppingCart },
    { href: "/user", label: "Users", icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg sm:hidden border-t-2 border-gray-300 rounded-xl h-20">
      <div className="w-full max-w-md mx-auto">
        <div className="px-7">
          <div className="flex justify-between">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href; // Determine if the route is active

              return (
                <div className="flex-1 group" key={link.href}>
                  <a
                    href={link.href}
                    className={`flex items-end justify-center text-center mx-auto px-4 pt-2 w-full ${
                      isActive ? "text-orange-500" : "text-gray-400"
                    } group-hover:text-orange-500`}
                  >
                    <span className="block px-1 pt-1 pb-1">
                      <Icon className="text-2xl pt-1 mb-1 block" />
                      <span className="block text-xs pb-2">{link.label}</span>
                      <span
                        className={`block w-5 mx-auto h-1 rounded-full ${
                          isActive ? "bg-orange-500" : ""
                        }`}
                      ></span>
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavFooter;
