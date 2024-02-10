import Image from 'next/image'
import {Rating} from "~/components/rating/Rating";
import {AddReview} from "~/components/AddReview";
import {useState} from "react";
import * as React from "react";

export const Card =  ({item}) => {

    let [showPopup, setShowPop] = useState(false);


    return <div>
        <AddReview showPopup={showPopup} setShowPop={ setShowPop } itemId={item.id}/>
        <Image className="md:rounded-lg w-80 h-80 mx-5 my-5" key={item.id}
               width={1000}
               height={1000}
               src="https://thumbnail.r2pictures.uk/monkey"/>
        <div className="flex flex-col">
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.avg_rating}</p>
            <Rating rating={item.avg_rating} totalRatings={item.total_ratings}></Rating>
            <button onClick={setShowPop}>Add Review</button>
        </div>
    </div>


}