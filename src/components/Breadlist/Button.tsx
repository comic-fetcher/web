import clsx from "clsx";
import React from "react";
import styled from "styled-components";

export type Props = ContainerProps;
export const Component: React.FC<Props> = ({ className, children }) => (
  <div
    className={clsx(
      className,
      "w-8",
      "h-8",
      "flex",
      "justify-center",
      "items-center",
      "rounded-full",
      "select-none",
      "text-gray-800",
      "text-sm",
    )}
  >
    {children}
  </div>
);
export const StyledComponent: typeof Component = styled(Component)``;

export type ContainerProps = {
  className?: string;
};
export const Container: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default Container;
