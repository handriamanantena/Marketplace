export default function QuantityButton({ changeCallBack, text } : {changeCallBack : () => void, text: string}) {

    let itemQuantityChange = () => {
        changeCallBack();
    };
    return  <button className="flex justify-center items-center rounded-full text-black bg-gray w-6 h-6 bg-slate-300" onClick={itemQuantityChange}>
                {text}
        </button>

}