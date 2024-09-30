/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IPrimaryLanguage {
  __typename: string;
  id: string;
  name: string;
}
export interface IOwner {
  __typename: string;
  id: string;
  login: string;
}
export interface IStargazers {
  __typename: string;
  totalCount: number;
}
export interface IResponseNode {
  forkCount: number;
  id: string;
  name: string;
  owner: IOwner;
  primaryLanguage: IPrimaryLanguage;
  stargazers: IStargazers;
  updatedAt: string;
  __typename: string;
}
export interface IResponse {
  search: {
    __typename: string;
    repositoryCount: number;
    nodes: IResponseNode[];
  };
}
export type TSearchItem = Omit<IResponseNode, "__typename" | "id">;




export interface Root {
  __typename: string
  name: string
  stargazers: Stargazers
  licenseInfo: LicenseInfo
  languages: Languages
  primaryLanguage: PrimaryLanguage
}

export interface Stargazers {
  __typename: string
  totalCount: number
}

export interface LicenseInfo {
  __typename: string
  name: string
  nickname: any
}

export interface Languages {
  __typename: string
  edges: Edge[]
}

export interface Edge {
  __typename: string
  node: Node
}

export interface Node {
  __typename: string
  id: string
  name: string
}

export interface PrimaryLanguage {
  __typename: string
  id: string
  name: string
}
