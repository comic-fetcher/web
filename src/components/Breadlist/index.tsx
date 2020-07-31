import {
  faAngleLeft,
  faAngleRight,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

import Button from "./Button";
import { getPattern } from "./pattern";

export const LeftMostButton = (props: { href: string; as: string }) => (
  <Link {...props} passHref>
    <a>
      <Button className={clsx("hover:bg-gray-300")}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </Button>
    </a>
  </Link>
);
export const RightMostButton = (props: { href: string; as: string }) => (
  <Link {...props} passHref>
    <a>
      <Button className={clsx("hover:bg-gray-300")}>
        <FontAwesomeIcon icon={faAngleRight} />
      </Button>
    </a>
  </Link>
);
export const DotsButton = () => (
  <Button>
    <FontAwesomeIcon icon={faEllipsisH} className={clsx("text-gray-400")} />
  </Button>
);
export const NumberButton = ({
  href,
  as,
  page,
  current,
}: {
  href: string;
  as: string;
  page: number;
  current: number;
}) =>
  page === current ? (
    <Button className={clsx("bg-gray-800")}>
      <span className={clsx("text-gray-200", "font-bold")}>{page}</span>
    </Button>
  ) : (
    <Link href={href} as={as} passHref>
      <a>
        <Button className={clsx("hover:bg-gray-300")}>
          <span>{page}</span>
        </Button>
      </a>
    </Link>
  );

export type Props = ContainerProps & {
  pattern: ReturnType<typeof getPattern>;
};
export const Component: React.FC<Props> = ({
  className,
  currentPage,
  pattern,
  route: link,
}) => (
  <div className={clsx(className, "flex", "space-x-2")}>
    {pattern.map((p, i) => {
      if (p === "<")
        return <LeftMostButton {...link(currentPage - 1)} key={i} />;
      if (p === ">")
        return <RightMostButton {...link(currentPage + 1)} key={i} />;
      if (p === "dots") return <DotsButton key={i} />;
      return (
        <NumberButton {...link(p)} page={p} current={currentPage} key={i} />
      );
    })}
  </div>
);
export const StyledComponent: typeof Component = styled(Component)``;

export type ContainerProps = {
  className?: string;
  currentPage: number;
  totalItems: number;
  totalPages: number;
  itemsPerPage: number;
  itemCount: number;
  route: (i: number) => { href: string; as: string };
};

export const Container: React.FC<ContainerProps> = (props) => {
  const { currentPage, totalPages } = props;
  const pattern: Props["pattern"] = getPattern(currentPage, totalPages);

  return <StyledComponent {...props} pattern={pattern} />;
};

export default Container;
