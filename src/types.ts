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
