import { DEFAULT_DESCRIPTION, DEFAULT_IMAGE, DEFAULT_OG_TYPE, DEFAULT_ROBOTS, DEFAULT_TITLE, DEFAULT_TWITTER_CARD, DEFAULT_URL } from '../Constant';
import { TagsLayoutProps } from '../interfaces/LayoutInterface';

function TagsLayout({ route, children }: TagsLayoutProps) {
    return (
      <>
        {route && <>
          <title>{route.title ?? DEFAULT_TITLE}</title>
          <meta name="description" content={route.description ?? DEFAULT_DESCRIPTION} />
          <meta name="og:url" content={DEFAULT_URL} />
          <meta name="og:title" content={route.title ?? DEFAULT_TITLE} />
          <meta name="og:description" content={route.description ?? DEFAULT_DESCRIPTION} />
          <meta name="og:image" content={DEFAULT_IMAGE} />
          <meta name="og:type" content={DEFAULT_OG_TYPE} />
          <meta name="twitter:title" content={route.title ?? DEFAULT_TITLE} />
          <meta name="twitter:description" content={route.description ?? DEFAULT_DESCRIPTION} />
          <meta name="twitter:image" content={DEFAULT_IMAGE} />
          <meta name="twitter:card" content={DEFAULT_TWITTER_CARD} />
          <meta name="robots" content={DEFAULT_ROBOTS} />
          {route.meta && route.meta.map((tag, index) =>
            tag.name ? (
              <meta key={index} name={tag.name} content={tag.content} />
            ) : tag.property ? (
              <meta key={index} property={tag.property} content={tag.content} />
            ) : null
          )}
          <link rel="canonical" href={DEFAULT_URL} />
          {route.link && route.link.map((tag, index) => (
            <link key={index} rel={tag.rel} href={tag.href} />
          ))}
        </>}
        <div id={route?.name} className='relative w-full h-full max-h-screen overflow-x-hidden overflow-y-auto max-w-screen'>{children}</div>
      </>
    );
  };
  
  export default TagsLayout;