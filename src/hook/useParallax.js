import { useEffect } from "react";
import { useMotionValue, useTransform } from "framer-motion";

const useParallax = (distance) => {
    const y = useMotionValue(0);
    const yTransform = useTransform(y, [0, 500], [0, distance]);

    const handleScroll = () => {
        y.set(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [y]);

    return yTransform;
};

export default useParallax;
