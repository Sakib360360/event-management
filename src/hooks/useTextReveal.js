import gsap from "gsap";
import { useEffect } from "react";

const useTextReveal = (selectors)=>{
    useEffect(()=>{
        // elements selector
        const elements = document.querySelectorAll(selectors);

        // animate text reveal
        gsap.to(elements, {
            y: 0,
            stagger: 0.2,
            duration: 0.5,
            ease: "circ.out"
        });
    }, [selectors]);

    return null;
}

export default useTextReveal;