import type { ReactElement } from 'react'
import Layout from '@components/Layout'
import type { NextPageWithLayout } from '@pages/_app'
import useSWRInfinite from 'swr/infinite'
import {SWRConfig} from "swr";
import {Card} from "@components/Card";
import {StoreProvider} from "@lib/provider/StoreProvider";
import {Item} from "@customTypes/Item";
import {getItems} from "@server/prisma/item";

const fetcher = (url: string) => fetch(url).then((res) =>  res.json() );

const getKey = (pageIndex: number, previousPageData : Item[]) : string | undefined => {


    if (previousPageData && previousPageData.length == 0) {
        return null;
    }

    if (pageIndex === 0) return `/api/item?pageSize=30`;

    if(previousPageData == undefined) {
        return null;
    }
    return `/api/item?pageIndex=${previousPageData[previousPageData!.length - 1]!.id}&pageSize=30`
};

function Page() {
    const {data, size, setSize} = useSWRInfinite(getKey, fetcher);
    if (!data) return 'loading';
    return (
        <div className="flex flex-col">
            <div className="flex flex-wrap justify-center w-full">
                {data.map((items, index) => {
                    return items.map((item: Item) => <Card item={item}/>)
                })}
            </div>
            <button className="grow h-20 bg-slate-200" onClick={() => setSize(size + 1)}>Load More ▼</button>
        </div>
    )
}

const Market: NextPageWithLayout = ({ fallback } : { [key: string]: any; }) => {
    return <SWRConfig value={{ fallback }}>
       <Page/>
    </SWRConfig>
}



export async function getStaticProps() {
    let items = await getItems(undefined, undefined, 30, undefined);
    return {
        props: {
            fallback : {
                '/api/item' : items
            },
        }
    }
}

Market.getLayout = function getLayout(page: ReactElement) {
    return (
        <StoreProvider>
        <Layout>
            {page}
        </Layout>
        </StoreProvider>
    )
};

export default Market