import { ReactNode } from 'react';
import { PageContent, RouteFromJson } from './RouteInterface';

interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

interface LinkTag {
  rel: string;
  href: string;
}

interface TagsLayoutProps {
  route?: RouteFromJson;
  metaTag?: boolean;
  children?: ReactNode;
}

interface BaseLayoutProps {
  route?: RouteFromJson;
  content?: PageContent;
}

export type { BaseLayoutProps, TagsLayoutProps, MetaTag, LinkTag };
