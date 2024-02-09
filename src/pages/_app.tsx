import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import "~/styles/globals.css";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import type { AppProps } from 'next/app'



export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const MyApp: AppType<{ session: Session | null }> = ({Component, pageProps: { session, ...pageProps },}: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => page)

    return getLayout(<SessionProvider session={session}>
        <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
