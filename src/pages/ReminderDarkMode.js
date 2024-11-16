// ReminderDarkMode.js
import React, {useState, useEffect, useRef} from "react"
import {useParams, useNavigate} from "react-router-dom"
import "./DarkMode.css" // Import the CSS file with dark styling

const ReminderDarkMode = () => {
    
    const navigate = useNavigate()
    const form = useRef()

    const [showQuestions, setShowQuestions] = useState(false);

    const redirectBack = (e) => {
        e.preventDefault()
        navigate(`/`)
    }

    return (
        <div className="dark-mode">
            <body>
                <div class="site">
                    <div id="page">
                        <h1>Dark Mode With Reminders</h1>
                        <br></br>
                        <p>Please read the following passage. When you have finished reading, please click on the button to reveal three questions; type your answer in the provided boxes.</p>
                        <br></br>
                        <h2>Athletics at the 1904 Summer Olympics – Men's marathon</h2>
                        <p>Courtesy of Wikipedia: <a href="https://en.wikipedia.org/wiki/Athletics_at_the_1904_Summer_Olympics_%E2%80%93_Men%27s_marathon">Athletics at the 1904 Summer Olympics – Men's marathon</a></p>
                        <br></br>
                        <p>The men's marathon at the 1904 Summer Olympics in St. Louis, United States, took place on August 30 of that year, over a distance of 24 miles 1500 yards (40 km).</p>
                        <p>The race was run during the hottest part of the day on dusty country roads with minimal water supply; while 32 athletes representing seven nations (the United States, France, Cuba, Greece, South Africa, Great Britain, and Canada) competed, only 14 managed to complete the race, which was a bizarre affair due to poor organization and officiating. While Frederick Lorz was greeted as the apparent winner, he was later disqualified as he had hitched a ride in a car for part of the race. The actual winner, Thomas Hicks, was near collapse and hallucinating by the end of the race, a side effect of being administered brandy, raw eggs, and strychnine by his trainers. The fourth-place finisher, Andarín Carvajal, took a nap during the race after eating spoiled apples.</p>
                        <p>The marathon distance had not yet been standardized; in St. Louis, the course was 24 miles and 1500 yards (40 km). The St. Louis organizers started the marathon at 3:00 pm, whereas most modern marathons start in the early morning to take advantage of cooler times of day.</p>
                        <p>The start included five laps, or 12/3 miles (2.68 km), around the stadium track. The remainder of the course was on dusty country roads, with race officials riding in vehicles ahead of, and behind, the runners: this created dust clouds that exacerbated the severely hot and humid conditions, with a temperature of around 90 degrees Fahrenheit (32 degrees Celsius) at starting time. The course had to be altered at the last minute after roads in the Creve Coeur area were washed out by rain.</p>
                        <p>The course was also not cleared of obstacles for the marathon, with the runners having to constantly dodge cross-town traffic, delivery wagons, railroad trains, trolley cars and even people walking their dogs.</p>
                        <p>During the race, John Lordan, who had won the 1903 Boston Marathon, was violently ill after 10 miles (16 km) and retired, while Sam Mellor, who had won the 1902 Boston Marathon, was also overcome by the dust; despite leading the field at the halfway mark, Mellor became disoriented and ultimately dropped out of the race after 14.5 miles (23.3 km). Another near-fatality during the event was William Garcia of the United States. He was found lying on the road along the marathon course unconscious, with severe internal injuries that had been caused by breathing the clouds of dust kicked up by the race officials' cars.</p>
                        <p>The first to arrive at the finish line, after three hours and 13 minutes – more than 13 minutes slower than the winning time in 1900 – was Frederick Lorz. After being hailed as the winner, he had his photograph taken with Alice Roosevelt, daughter of then-U.S. President Theodore Roosevelt: she placed a wreath upon Lorz's head, and was about to award him the gold medal when spectators claimed Lorz had not run the entire race. Lorz, suffering cramps, had actually dropped out of the race after nine miles and hitched a ride back to the stadium in a car, waving at spectators and runners alike during the ride. When the car broke down at the 19th mile, he re-entered the race and jogged across the finish line.</p>
                        <p>Upon being confronted by furious race officials with these allegations, Lorz immediately admitted his deception. Despite his claim that he was playing a practical joke, the AAU responded by banning Lorz for life; this was commuted to six months on February 19, 1905, after Lorz formally apologized and it was found that he had not intended to defraud. Lorz later won the 1905 Boston Marathon.</p>
                        <p>Thomas Hicks ended up as the winner of the event, although he was aided by various measures that would not have been permitted in later years. 10 miles (16 km) from the finish, Hicks led the race by 1.5 miles (2.4 km), but he had to be restrained from stopping and lying down by his trainers. From then until the end of the race, Hicks received several doses of strychnine – a common rat poison, which stimulates the nervous system in small doses – mixed with brandy and egg white. He continued to battle onwards, hallucinating, and was barely able to walk for most of the course. When he reached the stadium, his support team carried him over the line, holding him in the air while he shuffled his feet as if still running. Hicks had to be carried off the track on a stretcher, and might have died in the stadium had he not been treated by four doctors. He lost 8 pounds (3.6 kg) during the course of the marathon.</p>
                        <p>Cuban postman Andarín Carvajal had also joined the marathon, arriving at the last minute. After losing all of his money gambling in New Orleans, Louisiana, he hitchhiked to St. Louis and had to run the event in street clothes that he cut around the legs to make them into shorts. Not having eaten in 40 hours, he saw a spectator eating two peaches. He asked if he could have the peaches, and the spectator declined. He then stole both peaches and ran away. Later, he stopped off in an orchard en route to eat some apples, which turned out to be rotten. The rotten apples caused him to have strong stomach cramps, and he had to lie down and take a nap. Despite his discomfort and the pause, Carvajal still managed to finish in fourth place.</p>
                        <p>Arriving without correct documents, Albert Corey, a French immigrant to the United States, is inconsistently listed as participating in a mixed team in the four mile team race (with four undisputed Americans) and competing for the United States in the marathon. The South African entrants, Len Taunyane and Jan Mashiani, finished ninth and twelfth, respectively; this was a disappointment, as many observers were sure Taunyane could have done better if he had not been chased nearly a mile off course by wild dogs.</p>
                        <p>The only two sources of water for the competitors were a water tower at 6 miles (9.7 km), and a well at about the halfway (12 miles 750 yards (19.998 km)) mark. James Edward Sullivan was a chief organizer of the Olympics, and set up no other water sources along the 24 miles and 1500 yards course of the marathon even though it was conducted in 32 °C (90 °F) heat over unpaved roads that were choked with dust. His ostensible reason was to conduct research on "purposeful dehydration": this, combined with poor officiating, saw the marathon end with the worst ratio of finishers to starters (14 out of 32), and the slowest winning time, 3:28:53, which was exactly 29 minutes slower than the second-slowest winning time.</p>


                        <button 
              onClick={() => setShowQuestions(true)}
              className="show-questions-btn"
              style={{ display: showQuestions ? 'none' : 'block' }}
            >
              Show Questions
            </button>
            {showQuestions && (
                        <form ref={form} onSubmit={redirectBack}>
                            <label><strong>Question 1: </strong>Where did the marathon take place?</label><br></br>
                            <input type="text" name="q1"></input><br></br><br></br>
                            <label><strong>Question 2: </strong>Who did Frederick Lorz take a picture with?</label><br></br>
                            <input type="text" name="q2"></input><br></br><br></br>
                            <label><strong>Question 3: </strong>Briefly in one to three sentences, what are your thoughts on the concept of "purposeful dehydration"?</label><br></br>
                            <textarea name="message" rows="3" cols="70"></textarea><br></br><br></br>

                            <input type="submit" value="Submit Answers"/>
                            <br></br><br></br>
                        </form>
                        )}
                    </div>
                </div>
            </body>
        </div>
    )
}

export default ReminderDarkMode
