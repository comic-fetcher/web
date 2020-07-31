import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import React from "react";

import * as QueryType from "~/generated/graphql";
import { GET_COMIC } from "~/queries/getComic";

export type Props = {
  className?: string;
  userAgent?: string;
};

export const Page: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const { id: comicId } = router.query;

  if (Array.isArray(comicId)) throw new Error("");

  const { loading, error, data } = useQuery<
    QueryType.GetComicQuery,
    QueryType.GetComicQueryVariables
  >(GET_COMIC, {
    variables: { comic: comicId },
  });

  if (loading)
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  return (
    <main>
      <p>{data.comic.id}</p>
      <a href={data.comic.link}>{data.comic.title}</a>
      <ul>
        {data.comic.releases.map(({ date, id: releaseId }) => (
          <li key={releaseId}>
            <span>{date}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Page;
