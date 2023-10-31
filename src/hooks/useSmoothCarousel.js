import isTouchDevice from "@/utils/isTouch";
import { useEffect, useState } from "react";

const useSmoothCarousel = (track, thumb, images, animationDuration) => {
    const [mousePos, setMousePos] = useState(0);
    const [prevMousePos, setPrevMousePos] = useState(0);
    const [nextMousePos, setNextMousePos] = useState(0);

    useEffect(() => {
        // selectors
        const imageTrack = document.querySelector(track);
        const imageContainer = document.querySelector(thumb);
        const imagesArray = [...document.querySelectorAll(images)];
        const isTouch = isTouchDevice();

        // set the current mouse position to the state
        const handleMouseDown = (e) => {
            setMousePos(e.clientX);
            imageContainer.style.cursor = "grabbing";
        }

        // reset the current mouse position and set the next mouse position to previous mouse position
        const handleMouseUp = (e) => {
            setMousePos(0);
            setPrevMousePos(nextMousePos);
            imageContainer.style.cursor = "grab";
        }

        const handleMouseMove = (e) => {
            if (mousePos === 0) return;

            // calculate the mouse delta and maximum delta and then convert them to percentage
            const mouseDt = parseFloat(mousePos) - e.clientX;
            const maxDt = window.innerWidth / 2;
            const percentage = (mouseDt / maxDt) * -100;
            const nextPercentageUnconstrained = parseFloat(prevMousePos) + percentage;
            let nextPercentage = 0;

            // constrain then how much the slider can be scrolled based on device type and width
            if (isTouch && window.innerWidth <= 400) {
                nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -550);
                setNextMousePos(nextPercentage);
            }

            else if (isTouch && window.innerWidth <= 650) {
                nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -300);
                setNextMousePos(nextPercentage);
            }

            else if (isTouch && window.innerWidth <= 900) {
                nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -200);
                setNextMousePos(nextPercentage);

            }

            else {
                nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
                setNextMousePos(nextPercentage);
            }

            // move the image slider based on calculated value
            imageTrack.animate({
                transform: `translate(${nextPercentage}%, 0%)`
            }, { duration: animationDuration, fill: "forwards" });


            // animate all the images to slide in a different rate then the whole track
            for (const image of imagesArray) {

                // animate image based on screen size and device type
                if (isTouch && window.innerWidth <= 400) {

                    image.animate({
                        objectPosition: `${(nextPercentage / 6) + 100}% 50%`
                    }, {
                        duration: animationDuration, fill: "forwards"
                    });

                } 

                else if (isTouch && window.innerWidth <= 650) {
                    image.animate({
                        objectPosition: `${(nextPercentage / 4) + 100}% 50%`
                    }, {
                        duration: animationDuration, fill: "forwards"
                    });
                } 
                
                else if (isTouch && window.innerWidth <= 900) {
                    image.animate({
                        objectPosition: `${(nextPercentage / 2) + 100}% 50%`
                    }, {
                        duration: animationDuration, fill: "forwards"
                    });
                } 
                
                else {

                    image.animate({
                        objectPosition: `${nextPercentage + 100}% 50%`
                    }, {
                        duration: animationDuration, fill: "forwards"
                    });
                }

            }
        }

        imageContainer.onmousedown = (e) => handleMouseDown(e);
        imageContainer.ontouchstart = (e) => handleMouseDown(e.touches[0]);

        imageContainer.onmouseup = (e) => handleMouseUp(e);
        imageContainer.ontouchend = (e) => handleMouseUp(e.touches[0]);

        imageContainer.onmousemove = (e) => handleMouseMove(e);
        imageContainer.ontouchmove = (e) => handleMouseMove(e.touches[0]);

    }, [track, thumb, images, animationDuration, mousePos, prevMousePos, nextMousePos]);

}

export default useSmoothCarousel;