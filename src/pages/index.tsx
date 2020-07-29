import React from "react";

export type Props = {
  className?: string;
  userAgent?: string;
};

export const Component: React.FC<Props> = ({ className }) => {
  return <main />;
};

export default Component;
