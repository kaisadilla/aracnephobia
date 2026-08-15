import { Text } from '@mantine/core';
import SiteImage from 'components/SiteImage';
import { FrontMatterResult } from 'front-matter';
import en_US from 'localization/en_US';
import MdxRenderer from 'MdxRenderer';
import { useState } from 'react';
import { BLOG_AUTHORS, BlogEntryAttributes } from './blog-entry';
import styles from './BlogEntry.module.scss';

export type BlogEntryData = FrontMatterResult<BlogEntryAttributes>;

export interface BlogEntryProps {
  entry: BlogEntryData;
}

function BlogEntry ({
  entry
}: BlogEntryProps) {
  const [loc, setLoc] = useState(en_US);

  const author = BLOG_AUTHORS[entry.attributes.author] ?? {
    name: "<unknown author>",
    pic: "?",
  };

  return (
    <div className={styles.entry}>
      <div className={styles.header}>
        <SiteImage className={styles.pic} image={author.pic} />
        <div className={styles.data}>
          <Text className={styles.title}>
            {entry.attributes.title ?? "<untitled>"}
          </Text>
          <span className={styles.date}>
            {author.name} — {loc.date(entry.attributes.created)}
          </span>
        </div>
      </div>
      
      <div className={styles.body}>
        <MdxRenderer content={entry.body} />
      </div>
    </div>
  );
}

export default BlogEntry;
