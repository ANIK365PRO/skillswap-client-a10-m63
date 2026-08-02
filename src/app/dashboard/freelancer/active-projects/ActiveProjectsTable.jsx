"use client";

import { useState } from "react";
import Link from "next/link";

import { Button, Chip, Table } from "@heroui/react";

import {
  BadgeDollarSign,
  CalendarDays,
  FolderOpen,
  Link2,
  UserRound,
} from "lucide-react";

import DeliverableModal from "./DeliverableModal";





const statusMap = {
  "in-progress": {
    label: "In Progress",
    color: "warning",
  },
  completed: {
    label: "Completed",
    color: "success",
  },
};

const ActiveProjectsTable = ({ projects }) => {
    
  const [selectedProject, setSelectedProject] = useState(null);
    
  const [open, setOpen] = useState(false);



  if (!projects?.length) {
    return (
      <div className="rounded-3xl border border-border bg-surface p-16 text-center shadow-md">
        <FolderOpen
          size={60}
          className="mx-auto text-muted"
        />

        <h3 className="mt-5 text-2xl font-bold text-foreground">
          No Active Projects
        </h3>

        <p className="mt-2 text-muted">
          Your accepted projects will appear here.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* ---------------- Desktop Table ---------------- */}

      <div className="hidden rounded-3xl border border-border bg-surface p-6 shadow-md lg:block">
        <Table>
          <Table.ScrollContainer>
            <Table.Content className="min-w-[900px]">
              <Table.Header>
                <Table.Column  isRowHeader>PROJECT</Table.Column>
                <Table.Column>CLIENT</Table.Column>
                <Table.Column>BUDGET</Table.Column>
                <Table.Column>DEADLINE</Table.Column>
                <Table.Column>STATUS</Table.Column>
                <Table.Column className="text-end">
                  ACTION
                </Table.Column>
              </Table.Header>

              <Table.Body>
                {projects.map((project) => (
                  <Table.Row key={project._id}>
                    {/* Project */}

                    <Table.Cell>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {project.title}
                        </h3>

                        <p className="mt-1 text-sm text-muted">
                          #{project._id}
                        </p>
                      </div>
                    </Table.Cell>

                    {/* Client */}

                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <UserRound
                          size={16}
                          className="text-primary"
                        />

                        {project.clientName}
                      </div>
                    </Table.Cell>

                    {/* Budget */}

                    <Table.Cell>
                      <div className="flex items-center gap-2 font-semibold text-secondary">
                        <BadgeDollarSign size={17} />

                        ${project.budget}
                      </div>
                    </Table.Cell>

                    {/* Deadline */}

                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <CalendarDays size={16} />

                        {project.deadline}
                      </div>
                    </Table.Cell>

                    {/* Status */}

                    <Table.Cell>
                      <Chip
                        color={
                          statusMap[project.status].color
                        }
                        variant="soft"
                      >
                        {
                          statusMap[project.status]
                            .label
                        }
                      </Chip>
                    </Table.Cell>

                    {/* Action */}

                    <Table.Cell>
                      <div className="flex justify-end">
                        {project.status ===
                        "in-progress" ? (

                            <DeliverableModal project={project} />
                            
                        ) : (
                          <Link
                            href={
                              project.deliverableUrl
                            }
                            target="_blank"
                          >
                            <Button
                              size="sm"
                              className="bg-success text-white max-w-full"
                            >
                              <Link2
                                size={16}
                              />
                              View Link
                            </Button>
                          </Link>
                        )}
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>

      {/* ---------------- Mobile Cards ---------------- */}


      <div className="grid gap-5 lg:hidden">
        {projects.map((project) => (
          <div
            key={project._id}
            className="rounded-3xl border border-border bg-surface p-5 shadow-md"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-bold text-foreground">
                {project.title}
              </h3>

              <Chip
                color={
                  statusMap[project.status].color
                }
                variant="soft"
              >
                {statusMap[project.status].label}
              </Chip>
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">
                  Client
                </span>

                <span className="font-medium">
                  {project.clientName}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted">
                  Budget
                </span>

                <span className="font-semibold text-secondary">
                  ${project.budget}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted">
                  Deadline
                </span>

                <span>{project.deadline}</span>
              </div>
            </div>

            <div className="mt-6">
              {project.status ===
              "in-progress" ? (

                <DeliverableModal project={project} />

              ) : (
                <Link
                  href={project.deliverableUrl}
                  target="_blank"
                >
                  <Button
                    fullWidth
                    className="bg-success text-white"
                  >
                    <Link2 size={18} />

                    View Deliverable
                  </Button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

    
    </>
  );
};

export default ActiveProjectsTable;