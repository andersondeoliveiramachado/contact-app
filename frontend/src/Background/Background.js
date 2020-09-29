import vector1 from './assets/vector-1.svg';
import vector2 from './assets/vector-2.svg';
import ellipse1 from './assets/ellipse-1.svg';
import ellipse2 from './assets/ellipse-2.svg';
import ellipse3 from './assets/ellipse-3.svg';
import ellipse4 from './assets/ellipse-4.svg';
import ellipse5 from './assets/ellipse-5.svg';
import ellipse6 from './assets/ellipse-6.svg';
import React from "react";

import './Background.css';

export default function Background() {
    return (
        <div>
            <img src={vector1} className="image1" alt="image1"/>
            <img src={vector2} className="image2" alt="image2"/>
            <img src={ellipse1} className="ellipse1" alt="ellipse1"/>
            <img src={ellipse2} className="ellipse2" alt="ellipse2"/>
            <img src={ellipse3} className="ellipse3" alt="ellipse3"/>
            <img src={ellipse4} className="ellipse4" alt="ellipse4"/>
            <img src={ellipse5} className="ellipse5" alt="ellipse5"/>
            <img src={ellipse6} className="ellipse6" alt="ellipse6"/>
        </div>
    )
}
