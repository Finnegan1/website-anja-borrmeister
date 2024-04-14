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
import Logo from "./logo";
import {
  EventsResponse,
  GalerieProductsCategoriesResponse,
} from "@/lib/pocketbase-types";

type SubTab = {
  title: string;
  description: string;
  href: string;
};

const shopSubTabs: SubTab[] = [
  {
    title: "mit & ohen Rahmen",
    description: "",
    href: "/mach-es-dir-bunt",
  },
  {
    title: "KunsVollerGruß",
    description: "",
    href: "/schreib-mal-wieder",
  },
];

const moreSubTabs: SubTab[] = [
  {
    title: "Kontakt",
    description: "",
    href: "/kontakt",
  },
  {
    title: "AGB",
    description: "",
    href: "/agb",
  },
  {
    title: "Wiederrufsbelehrung",
    description: "",
    href: "/widerruf",
  },
  {
    title: "DSGVO",
    description: "",
    href: "/datenschutz",
  },
  {
    title: "Impressum",
    description: "",
    href: "/impressum",
  },
];

export default function Header(props: {
  galerieProductCategories: GalerieProductsCategoriesResponse[];
  events: EventsResponse[];
}) {
  const galerieSubTabs: SubTab[] = props.galerieProductCategories.map(
    (categorie) => {
      return {
        title: categorie.name,
        description: "",
        href: `/galerie/${categorie.name}`,
      };
    }
  );

  const eventSubTabs: SubTab[] = props.events.map((event) => {
    return {
      title: event.nameShort,
      description: "",
      href: `/veranstaltungen/${event.nameShort.replaceAll(" ", "_")}`,
    };
  })

  return (
    <header className="py-4 bg-white shadow">
      <div className="w-full px-4 flex justify-between items-center">
        <div className="flex flex-row items-center gap-6">
          <Logo className="h-10 w-10" />
          <h1 className="text-xl font-bold">ANJA BORRMEISTER</h1>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Veranstaltungen</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul>
                  {eventSubTabs.map((tab) => (
                    <ListItem key={tab.title} title={tab.title} href={tab.href}>
                      {tab.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Galerie</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul>
                  {galerieSubTabs.map((tab) => (
                    <ListItem key={tab.title} title={tab.title} href={tab.href}>
                      {tab.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/rentart" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Rent Art
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul>
                  {shopSubTabs.map((tab) => (
                    <ListItem key={tab.title} title={tab.title} href={tab.href}>
                      {tab.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="">
              <NavigationMenuTrigger>More</NavigationMenuTrigger>
              <NavigationMenuContent className="right-0">
                <ul>
                  {moreSubTabs.map((tab) => (
                    <ListItem key={tab.title} title={tab.title} href={tab.href}>
                      {tab.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
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
ListItem.displayName = "ListItem";
