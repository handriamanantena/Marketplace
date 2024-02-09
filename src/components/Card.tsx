import Image from 'next/image'
import {Rating} from "~/components/rating";

export const Card =  ({item}) => {

    return <div>
        <Image className="md:rounded-lg w-80 h-80 mx-5 my-5" key={item.id}
               width={1000}
               height={1000}
               src="https://thumbnail.r2pictures.uk/monkey"/>
        <div className="flex flex-col">
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.avg_rating}</p>
            <Rating rating={item.avg_rating}></Rating>
        </div>
    </div>


}