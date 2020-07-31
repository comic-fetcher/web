import { useQuery } from "@apollo/react-hooks";
import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation, initReactI18next } from "react-i18next";

import BreadList from "~/components/Breadlist/index";
import * as QueryType from "~/generated/graphql";
import { GET_COMICS } from "~/queries/getComics";

export type Props = {
  className?: string;
  userAgent?: string;
};

function getI18nTextObject({
  totalItems,
  itemsPerPage,
  pageIndex,
}: {
  totalItems: number;
  itemsPerPage: number;
  pageIndex: number;
}) {
  return {
    total: totalItems,
    from: itemsPerPage * (pageIndex - 1) + 1,
    to: Math.min(itemsPerPage * pageIndex, totalItems),
  };
}

export const Page: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  const router = useRouter();

  const { page } = router.query;

  if (Array.isArray(page)) throw new Error("");
  const pageIndex = parseInt(page, 10);
  const { loading, error, data } = useQuery<
    QueryType.GetComicsQuery,
    QueryType.GetComicsQueryVariables
  >(GET_COMICS, {
    variables: {
      page: pageIndex,
    },
  });

  if (loading)
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  if (data.comics.meta.totalPages < pageIndex) {
    router.push("/comics/[id]", `/comics/${data.comics.meta.totalPages}`);
    return (
      <div>
        <p>Redirecting...</p>
      </div>
    );
  }
  return (
    <main>
      <ul>
        {data.comics.items.map(({ id: releaseId, title, link }) => (
          <li key={releaseId}>
            <span>{releaseId}</span>
            <a href={link}>{title}</a>
          </li>
        ))}
      </ul>
      <div className={clsx("flex", "flex-col", "items-center")}>
        <BreadList
          className={clsx("mt-2")}
          currentPage={pageIndex}
          {...data.comics.meta}
          route={(i) => ({ href: `/comics/[id]`, as: `/comics/${i}` })}
        />
        <p className={clsx("text-gray-600", "text-sm", "mt-2")}>
          {t(
            "breadlist.items",
            getI18nTextObject({ ...data.comics.meta, pageIndex }),
          )}
        </p>
      </div>
    </main>
  );
};

export default Page;
