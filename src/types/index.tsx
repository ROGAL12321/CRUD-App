import { RouteComponentProps } from "react-router-dom";

export interface PageProps<T> extends RouteComponentProps<T> {
  title: string;
}

export interface Recipe {
  id?: string;
  icon?: string;
  title?: string;
  description?: string;
}
