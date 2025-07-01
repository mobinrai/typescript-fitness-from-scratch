import { useState, useEffect } from "react";

// const useMediaQuery = (query: string): boolean => {
//     const [matches, setMatches] = useState(false);

//     useEffect(() => {
//         const media = window.matchMedia(query);

//         if (media.matches !== matches) {
//             setMatches(media.matches);
//         }
//         const listener = () => setMatches(media.matches);
//         window.addEventListener("resize", listener);
//         return () => window.removeEventListener("resize", listener);
//     }, [matches, query]);

//     return matches;
// };

const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState<boolean>(() => window.matchMedia(query).matches);

    useEffect(() => {
        const media = window.matchMedia(query);

        const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
};


export default useMediaQuery;