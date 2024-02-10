import {StarSVG} from "~/components/rating/StarSvG";

export const Star = ({isStyled}: { isStyled: boolean }) => {

    return isStyled ? <div className="text-yellow-300">
        <StarSVG/>
    </div> : <div className="text-gray-300">
        <StarSVG/>
    </div>

}