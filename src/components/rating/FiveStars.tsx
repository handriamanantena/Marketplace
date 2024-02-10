import {Star} from "~/components/rating/Star";
import {useEffect} from "react";

export const FiveStars = ({rating} : {rating : number}) => {

    useEffect(() => {

    });

    return <div className="flex">
        <Star isStyled={rating > 0}/>
        <Star isStyled={rating > 1}/>
        <Star isStyled={rating > 2}/>
        <Star isStyled={rating > 3}/>
        <Star isStyled={rating > 4}/>
    </div>
}