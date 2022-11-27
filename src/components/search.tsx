import React, {useRef} from "react";

export default function Search({setCity}) {
    const countryRef = useRef<HTMLInputElement>(null);

    const action = (e) => {
        if (e.key === "Enter") {
            if (!countryRef.current) throw Error("countryRef is not assigned");
            setCity(countryRef.current.value);
            countryRef.current.value = "";
        }
    };
    return (
        <div className="flex justify-center">
            <input
                type="text"
                placeholder="Search City"
                className="input input-bordered input-accent w-full max-w-xs"
                onKeyDown={action}
                ref={countryRef}
            />
        </div>
    );
}
