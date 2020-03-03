import React from "react";

import Foot from '../assets/foot.png';
import Def from '../assets/def.png';
import Reduce from '../assets/reduce.jpeg';


const About  = () => {
    return (
    <section className = "page-about">
         <div className = "col-full">
             <div className = "container">
                 <div className = "page-about-img">
                     <img id = "about" src = {Foot} alt = "foot" />
                 </div>
                 
                 <div className = "page-about-def">
                     <p className = "page-about-question">What is a carbon footprint?</p>
                     <div className = "page-about-row">
                        <p className = "page-about-answer">A carbon footprint is the amount of greenhouse gases—primarily carbon dioxide—released into 
                        the atmosphere by a particular human activity. A carbon footprint can be a broad meaasure 
                        or be applied to the actions of an individual, a family, an event, an organization, or even 
                        an entire nation. It is usually measured as tons of CO2 emitted per year, a number that can 
                        be supplemented by tons of CO2-equivalent gases, including methane, nitrous oxide, and other 
                        greenhouse gases.</p>
                        <img src = {Def} alt = "def"/>
                     </div>
                     
                 </div>

                 <div className = "page-about-calc">
                     <p className = "page-about-question">How can I calculate my carbon footprint?</p>
                     <div className = "page-about-row">
                     <div className = "page-about-quote">
                 <p>You can't control everything, but being conscious of your carbon footprint helps.</p>
                 </div>
                     <p className = "page-about-answer">Although adding up one’s individual carbon footprint can be difficult, online 
                        calculators can do some of the work for you, giving a rough estimate of your carbon footprint 
                        based on the size of your household, the efficiency of your appliances, how much you drive or fly, 
                        what you eat.
                        Fossil fuel use and electricity consumption play a major role in your carbon footprint.
                        This isn't perfect, but it is a good way to measure your activities so you can understand roughly 
                        how much CO2 they generate and take steps to reduce your carbon footprint.</p>
                    </div>
                 </div>

                 <div className = "page-about-reduce">
                     <p className = "page-about-question">How can I reduce my carbon footprint?</p>
                     <div className = "page-about-row">
                        <p className = "page-about-answer">Methods of reducing your carbon footprint include driving more-efficient vehicles (or making sure that
                        your current vehicles are properly maintained), taking public transportation, using energy-efficient
                        appliances, insulating your home to reduce heating and air conditioning costs, consuming food that
                        doesn't require as much transportation, and eating less meat, which has a higher carbon footprint
                        than fruits and vegetables.</p>
                        <img src = {Reduce} alt = "reduce"/>
                     </div>
                     
                 </div>
                 
             </div>
         </div>
    </section>
    )
}
export default About;