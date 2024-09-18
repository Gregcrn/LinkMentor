"use client";
import React from "react";
import { HoverBorderGradient } from "./hover-border-gradient";

export function NavBarBtn({ title, icon }: { title: string, icon: React.ReactNode }) {
  return (
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        {icon}
        <span>{title}</span>
      </HoverBorderGradient>
  );
}
