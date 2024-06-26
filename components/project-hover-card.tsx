"use client"

import React from "react";

import { Separator } from "@/components/ui/separator"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

import TechIcon from "@/components/tech-icon";
import { Chip } from "@/components/chips";


interface ProjectCardHoverProps {
  title: string;
  description: string;
  tech?: string[];
  status: "Archived" | "Unknown" | "InProgress" | "Completed" | "Planning" | "Abandoned" | "Repo" | "OnHold";
  sitelink?: string;
  repolink?: string;
  docslink?: string;
  children: React.ReactNode;
}
export const ProjectHoverCard: React.FC<ProjectCardHoverProps> = ({children, title, description, status, sitelink, repolink, docslink, tech }) => {
    return (
        <>
            <HoverCard>
                <HoverCardTrigger asChild>
                  {children}
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div className="size-full space-y-1">
                      <div className="flex justify-between">
                        {sitelink ? (
                          <a href={sitelink} target="_blank" rel="noopener noreferrer">
                            <h4 className="text-sm font-semibold">
                              {title}
                            </h4>
                          </a>
                        ): repolink ?(
                          <a href={repolink} target="_blank" rel="noopener noreferrer">
                            <h4 className="text-sm font-semibold">
                              {title}
                            </h4>
                          </a>
                        ): (
                          <h4 className="text-sm font-semibold">
                            {title}
                          </h4>
                        )}
                        <Chip status={status} />
                      </div>
                      <p className="text-sm">
                        {description}
                      </p>
                      {/* <Separator className="my-4" />
                      <div className="flex gap-1 my-4">
                        <p className="text-sm">
                          built with:
                        </p>
                        {tech && tech.map((item, index) => (
                          <TechIcon key={index} name={item} />
                        ))}
                      </div> */}
                      <Separator className="my-4" />
                      {!sitelink && !repolink && !docslink && <p className="text-sm">{"no links available :("}</p>}
                      <div className="flex gap-2">
                        {sitelink && <a target="_blank" className="cursor-pointer text-sm underline" href={sitelink} rel="noreferrer">site</a>}
                        {repolink && <a target="_blank" className="cursor-pointer text-sm underline" href={repolink} rel="noreferrer">source</a>}
                        {docslink && <a target="_blank" className="cursor-pointer text-sm underline" href={docslink} rel="noreferrer">docs</a>}
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
            </HoverCard>
        </>
    )
}