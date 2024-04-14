"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";

type SubTab = {
  title: string;
  description: string;
  href: string;
};
const eventSubTabs: SubTab[] = [
  {
    title: "Weinfest Pillnitz 2024",
    description: "Description",
    href: "#",
  },
  {
    title: "Weinfest Pirna 2024",
    description: "Description",
    href: "#",
  },
  {
    title: "Tag der Kunst 2024",
    description: "Description",
    href: "#",
  },
  {
    title: "Pfiungsten 2024",
    description: "Description",
    href: "#",
  },
];

export default function Header() {
  return (
    <header className="py-4 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">ANJA BORRMEISTER</h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Veranstaltungen</NavigationMenuTrigger>
              <NavigationMenuContent className="right:0 absolute left-auto top-full w-auto bg-white">
                <ul>
                  {eventSubTabs.map((eventSubTab) => (
                    <ListItem
                      key={eventSubTab.title}
                      title={eventSubTab.title}
                      href={eventSubTab.href}
                    >
                      {eventSubTab.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

/*
<NavigationMenuLink asChild>
              <Link className="text-gray-900 hover:text-blue-500" href="#">
                Galerie
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link className="text-gray-900 hover:text-blue-500" href="#">
                Rent Art
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link className="text-gray-900 hover:text-blue-500" href="#">
                Shop
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link className="text-gray-900 hover:text-blue-500" href="#">
                About
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link className="text-gray-900 hover:text-blue-500" href="#">
                More
              </Link>
            </NavigationMenuLink>
            */
