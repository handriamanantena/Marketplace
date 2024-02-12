export default function QuantityButton({ changeCallBack, children } : {changeCallBack : () => void}) {

    let itemQuantityChange = () => {
        changeCallBack();
    };
    return  <div className="flex justify-center items-center rounded-full text-black bg-gray w-6 h-6 bg-slate-300" onClick={itemQuantityChange}>
                {children}
        </div>

}