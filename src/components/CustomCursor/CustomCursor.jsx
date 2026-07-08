import { useEffect, useRef } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {

    const cursor = useRef(null);

    useEffect(() => {

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;

        document.addEventListener("mousemove",(e)=>{
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animate = ()=>{

            currentX += (mouseX-currentX)*0.15;
            currentY += (mouseY-currentY)*0.15;

            cursor.current.style.left = currentX+"px";
            cursor.current.style.top = currentY+"px";

            requestAnimationFrame(animate);
        }

        animate();

        const items=document.querySelectorAll(
            "button,a,.magnetic,[data-cursor]"
        );

        items.forEach((item)=>{

            item.addEventListener("mouseenter",()=>{
                cursor.current.classList.add("active");
            });

            item.addEventListener("mouseleave",()=>{
                cursor.current.classList.remove("active");
            });

        });

    },[]);

    return(
        <div ref={cursor} className="custom-cursor">
            <span>VIEW</span>
        </div>
    )

}