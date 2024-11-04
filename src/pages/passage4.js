import React, {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import parser from 'html-react-parser'

const passage4 = () => {
  
    const redirectBack = (e) => {
        e.preventDefault()
        navigate(`/`)
    }

    return (
        <div>
            <body>
                <div class="site">
                    <div id="page">
                        <h1>Page Mode</h1>
                        <br></br>
                        <p>Please read the following passage. When you have finished reading, please click on the button to reveal three questions; type your answer in the provided boxes.</p>
                        <br></br>
                        <h2>La Tomatina</h2>
                        <p>Courtesy of Wikipedia: <a href="https://en.wikipedia.org/wiki/La_Tomatina">La Tomatina</a></p>
                        <br></br>
                        <p>La Tomatina is a Spanish festival in Buñol, Spain where participants throw tomatoes at each other. It is said to be the biggest food fight in the world. From the festival's origin as a food fight between friends in the 1940s, it has become a famous tourist attraction. Until 2013 there was no limit to the number of participants; in 2013 the festival became a ticketed event for no more than 20,000, so as not to overwhelm Buñol's population of about 9,000 people.</p>
                        <p>La Tomatina Festival started the last Wednesday of August in 1945 when some young people spent time in the town square to attend the Giants and Big-Heads figures parade. One participant's Big-head fell off, as a result of the festivities. The participant flew into a fit of rage, and began hitting everything in their path. There was a market stall of vegetables that fell victim to the fury of the crowd, as people started to pelt each other with tomatoes until the local forces ended the fruit battle.</p>
                        <p>The following year, some young people engaged in a pre-planned quarrel and brought their own tomatoes from home. Although the local forces broke it up, this began the yearly tradition. In the following years, the boys' example was followed by thousands of people.</p>
                        <p>La Tomatina was banned in the early 1950s by Francisco Franco due to the festival's lack of religious significance, however, this did not stop the participants, who were later then arrested. The people protested against the prohibition and the festival was again allowed with more participants. The festivity was again canceled until 1957 when, as a sign of defiance, a tomato funeral was held: a demonstration in which the residents carried a coffin with a large tomato inside. The parade was accompanied by a music band that played funeral marches. The protest was successful, and La Tomatina Festival was finally permitted and became an official festival.</p>
                        <p>As a result of the report of Javier Basilio, a broadcaster from the Spanish television program called Informe Semanal, the festival started to be known throughout the rest of Spain. Since then, the number of participants increased year after year as well as the excitement about La Tomatina Festival. In 2002, La Tomatina of Buñol was declared a Fiesta of International Tourist Interest by the Secretary Department of Tourism due to its popularity.</p>
                        <p>The 2020 event, which was to be its 75th anniversary, was cancelled in April 2020 due to the COVID-19 pandemic in Spain. It had only been cancelled once before, in 1957, for political reasons. Due to COVID-19, the 2021 event was also cancelled. In the last edition, on August 28, 2024, more than 23,000 people from 51 countries participated.</p>
                        <p>Events during the days before the fight include a paella contest near the town's square, tomato fireworks, and different music bands and parades around the medieval city centre. On Wednesday morning, the first event before the tomato battle is the "Palo Jabón", centred on a long greased pole with a piece of ham at its top. The goal is for participants to climb the pole and make the ham drop, which requires them to climb on each other. During this effort, other celebrants sing and dance in circles, and all participants are doused with water from hoses. Once the ham falls, the tomato battle commences.</p>
                        <p>Usually, the fight lasts for about one hour, after which the town square is covered with tomato debris.[10] Fire trucks then hose down the streets and participants often use hoses that locals provide to remove the tomatoes from their bodies. Some participants go to the Los Peñones pool to wash. The citric acid in the tomatoes leads to the washed surfaces in the town becoming very clean.</p>
                        <p>Since 2002 participation in the event has been restricted to the 20,000 holders of paid tickets. In 2015, it was estimated that almost 145,000 kg (320,000 lb) of tomatoes were thrown.</p>
                        <p>The city council prescribes a short list of instructions for the safety of the participants and the festival:</p>
                        <ol>
                            <li>Do not throw anything but tomatoes</li>
                            <li>Do not tear clothes</li>
                            <li>Squash tomatoes before throwing them to avoid hurting others</li>
                            <li>Keep a safe distance from trucks</li>
                            <li>Stop throwing tomatoes after the second starter pistol shot</li>
                            <li>Follow the directions of security staff</li>
                            <li>Only throw tomatoes at targets you can see, to avoid hurting others</li>
                            <li>Do not throw tomatoes directly at buildings</li>
                            <li>Have a great, fun time!</li>
                        </ol>
                        <p>La Tomatina Buñol has inspired similar celebrations in other parts of the world:</p>
                        <ul>
                            <li>Since 1982, the town of Twin Lakes, Colorado has held a tomato fight called the "Colorado-Texas Tomato War," in which Texans and Coloradans square off. The Coloradans also attempt to overtake the Texans' straw Alamo effigy, generally succeeding.</li>
                            <li>Since 2004 the Colombian town of Sutamarchán holds a similar event on 15 June when a surplus of tomatoes is harvested.</li>
                            <li>In Costa Rica the town of San José de Trojas in the San Pedro district of Sarchí canton (Alajuela Province) celebrates a Tomatina during the local Tomato Fair.</li>
                            <li>In the town of Dongguan in southern Guangdong in China, a tomato fight is held on 19 October, during which they use up to 15 tonnes of tomatoes.</li>
                            <li>The City of Reno, Nevada in the United States also has an annual hour-long tomato fight that started in 2009. The event seems to take place on the last Sunday of August and is organized by the American Cancer Society. Organizers named the festival La Tomatina, and give full credit for the idea to the Spanish festival.</li>
                            <li>In the Indian state of Karnataka, the Karnataka Government banned the hosting of such a Tomatina event in Bangalore and Mysore, after private organizers tried to organize one. Chief Minister D.V. Sadananda Gowda is quoted as saying: "In the name of 'La Tomatina' festival, permission should not be granted to waste tomatoes". A similar plan in Delhi was cancelled after received negative response from the public.</li>
                            <li>Funtasia Island, Patna hosted a similar La tomatina Holi event on 26 March 2013 at Funtasia Water Park in Patna, India.</li>
                        </ul>

                        <form ref={form} onSubmit={redirectBack}>
                            <label><strong>Question 1: </strong>What is the name of the event that must happen before the tomato battle can start?</label><br></br>
                            <input type="text" name="q1"></input><br></br><br></br>
                            <label><strong>Question 2: </strong>How many other countries have hosted a similar event?</label><br></br>
                            <input type="text" name="q2"></input><br></br><br></br>
                            <label><strong>Question 3: </strong>Would you ever go to this festival?</label><br></br>
                            <textarea name="message" rows="3" cols="70"></textarea><br></br><br></br>

                            <input type="submit" value="Submit Answers"/>
                            <br></br><br></br>
                        </form>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default passage4