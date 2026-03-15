import type { StatusWork, RepoOrigin } from "@core/types";

export interface Work {
  title: string;
  status: StatusWork;
  technologies: string[];
  description: string;
  repoOrigin: RepoOrigin;
  repo: string;
  repoIsPrivate: boolean;
  url: string;
  urlIsAvailable: boolean;
  image: string;
}
