import type { ReactElement } from 'react'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'
import useSWRInfinite from 'swr/infinite'
import {SWRConfig} from "swr";
import {Card} from "~/components/Card";

const fetcher = (url) => fetch(url).then((res) =>  res.json() );

const getKey = (pageIndex, previousPageData) => {
    console.log("the index " + pageIndex + JSON.stringify(previousPageData));
    if (previousPageData && previousPageData.length == 0) return null

    if (pageIndex === 0) return `/api/item?pageSize=30`

    return `/api/item?pageIndex=${previousPageData[previousPageData.length - 1].id}&pageSize=30`
}

function Page() {
    const {data, error, isLoading, isValidating, mutate, size, setSize} = useSWRInfinite(getKey, fetcher);
    if (!data) return 'loading';
    return (
        <div className="flex flex-wrap justify-center w-full" >
            {data.map((items, index) => {
                // `data` is an array of each page's API response.
                return items.map(item => <Card item={item}/>)
            })}
            <button onClick={() => setSize(size + 1)}>Load More</button>
        </div>
    )
}

const Market: NextPageWithLayout = ({ fallback }) => {
    return <SWRConfig value={{ fallback }}>
       <Page/>
    </SWRConfig>
}



export async function getStaticProps() {
    const items =  await fetcher("http://localhost:3000/api/item?pageSize=30");
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
        <Layout>
            {page}
        </Layout>
    )
};

export default Market