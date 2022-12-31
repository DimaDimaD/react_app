import {useState} from "react";

export const useFetch = (callback) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState('');

    const fetching = async (...props) => {
        try {
            setIsLoading(true);
            await callback(...props)
        } catch (e) {
            setIsError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, isError];
}