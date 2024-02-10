import {Fragment, useState} from "react";
import React from "react";
import {Star} from "~/components/rating/EditableStar";
import {EditableFiveStars} from "~/components/rating/EditableFiveStars";
import { useRouter } from 'next/router'



export const AddReview = ({showPopup, setShowPop, itemId} : {showPopup: boolean, setShowPop: (value: boolean) => {}, itemId: number}) => {

    let [rating, setRating] = useState<0|1|2|3|4|5>(0);
    const router = useRouter();

    let hidePopUp = (e) => {
        e.preventDefault();
        setShowPop(false);
    };

    let onSubmit = async (e): void => {
        e.preventDefault();
        let body = JSON.stringify({
            comment: e.target.comment.value,
            email: e.target.email.value,
            rating: rating,
        });
        let response = await fetch(`http://localhost:3000/api/item/${itemId}/review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : body
        });
        // TODO add loading
        console.log("the response is" + response);
        setShowPop(false);
        await router.reload();
    };


    return (
        <Fragment>
            {showPopup ?
                <div className="fixed flex inset-0 backdrop-blur-sm items-center justify-center z-[1999]">
                    <div className="relative flex flex-col h-full w-full shadow-slate-600 shadow-md md:h-auto md:max-w-md lg:max-w-lg bg-white">
                        <button onClick={hidePopUp}>Hide</button>
                        <form className="relative flex flex-col space-y-1 h-full w-full md:max-w-md lg:max-w-lg mt-1 p-10" onSubmit={onSubmit}>
                            <h1>Add Review</h1>
                            <EditableFiveStars setRating={setRating}/>
                            <input type="email" id="email" name="email" required className="flex-1 bg-transparent focus:outline-none"/>
                            <div className="flex flex-grow space-y-1 w-full p-0.5 bg-white border shadow-sm border-slate-300 focus:outline-none focus-within:border-sky-500 focus-within:ring-sky-500 focus-within:ring-1 rounded-md sm:text-sm">
                                <label htmlFor="comment">Comment</label>
                                <textarea id="comment" name="comment" className="md:min-h-[174px] p-2.5 w-full bg-transparent focus:outline-none" maxLength={5000}/>
                            </div>
                            <button type="submit">Add Review</button>
                        </form>
                    </div>
                </div> : <Fragment/>}
        </Fragment>
    );

}