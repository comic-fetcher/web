import { AppProps } from "next/app";
import React from "react";
import styled from "styled-components";
import "~/styles/tailwind.css";

export type Props = AppProps & { className?: string };
export const App: React.FC<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export const AppStyledComponent: typeof App = styled(App)``;

export default AppStyledComponent;
