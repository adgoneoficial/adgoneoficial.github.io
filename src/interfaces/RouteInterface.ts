import { LinkTag, MetaTag } from './LayoutInterface';

interface RouteInterface {
  data: RouteFromJson;
  element: React.ReactElement;
}

interface ColumnContent {
  content: string;
  color?: string;
  lineColor?: string;
  uppercase?: boolean;
  fontWeight?: string;
}

interface PageContent {
  component: string;
  title?: string;
  title2?: string;
  title3?: string;
  title4?: string;
  uppercase?: boolean;
  color?: string;
  color2?: string;
  lineColor?: string;
  body?: string;
  body2?: string;
  body3?: string;
  firstColumn?: ColumnContent[];
  secondColumn?: ColumnContent[];
  thirdColumn?: ColumnContent[];
  firstImage?: string;
  secondImage?: string;
  thirdImage?: string;
  fourthImage?: string;
}

interface RouteFromJson {
  page: number;
  name: string;
  component: string;
  title: string;
  description: string;
  descriptiveSummary: string;
  img?: string;
  img2?: string;
  img3?: string;
  img4?: string;
  img5?: string;
  bgColor?: string;
  bgColor2?: string;
  culture?: string;
  textColor?: string;
  textColor2?: string;
  subtitle?: string;
  content?: PageContent;
  content2?: PageContent;
  content3?: PageContent;
  content4?: PageContent;
  rightIcon?: string;
  topIcon?: string;
  body?: string;
  meta?: MetaTag[];
  link?: LinkTag[];
}

export type { RouteInterface, RouteFromJson, PageContent, ColumnContent };
