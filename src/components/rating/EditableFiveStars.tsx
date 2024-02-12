import {StarSVG} from "@components/rating/StarSvG";
import {useState} from "react";

export const EditableFiveStars = ({setRating} : {setRating: (value: number) => void}) => {

    const [firstStar, setFirstStar] = useState('text-gray-300');
    const [secondStar, setSecondStar] = useState('text-gray-300');
    const [thirdStar, setThirdStar] = useState('text-gray-300');
    const [forthStar, setForthStar] = useState('text-gray-300');
    const [fifthStar, setFifthStar] = useState('text-gray-300');


    const highLightStar = (selectedStar: 0 | 2 | 1 | 3 | 4 | 5) => {

        const coloredIn = 'text-yellow-300';
        const blank = 'text-gray-300';

        setRating(selectedStar);

        setFirstStar(blank);
        setSecondStar(blank)
        setThirdStar(blank)
        setForthStar(blank)
        setFifthStar(blank)

        if(selectedStar > 0) {
            setFirstStar(coloredIn);
        }
        if(selectedStar > 1) {
            setSecondStar(coloredIn)
        }
        if(selectedStar > 2) {
            setThirdStar(coloredIn)
        }
        if(selectedStar > 3) {
            setForthStar(coloredIn)
        }
        if(selectedStar > 4) {
            setFifthStar(coloredIn)
        }
    };




    return <div className="flex">
        <div onClick={() => {highLightStar(1)}} className={firstStar}>
            <StarSVG/>
        </div>
        <div onClick={() => {highLightStar(2)}} className={secondStar}>
            <StarSVG/>
        </div>
        <div onClick={() => {highLightStar(3)}} className={thirdStar}>
            <StarSVG/>
        </div>
        <div onClick={() => {highLightStar(4)}} className={forthStar}>
            <StarSVG/>
        </div>
        <div onClick={() => {highLightStar(5)}} className={fifthStar}>
            <StarSVG/>
        </div>
    </div>
}