import { useEffect, useState } from "react";

export default function useDebounce(initializeValue = "", delay = 1000) {
    const [denounceValue, setDebounceValue] = useState(initializeValue);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(initializeValue);
        }, delay);
        return () => {
            clearTimeout(timer);
        };
    }, [initializeValue, delay]);

    return denounceValue;
}
