import React, {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import parser from 'html-react-parser'

const passage2 = () => {
  
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
                        <h2>Charles Joughin</h2>
                        <p>Courtesy of Wikipedia: <a href="https://en.wikipedia.org/wiki/Charles_Joughin">Charles Joughin</a></p>
                        <br></br>
                        <p>Charles John Joughin (3 August 1878 – 9 December 1956) was a British-American chef, known as being the chief baker aboard the RMS Titanic. He survived the ship's sinking, and became notable for having survived in the frigid water for an exceptionally long time before being pulled onto the overturned Collapsible B lifeboat with virtually no ill effects.</p>
                        <p>Charles Joughin was born in Patten Street, next to the West Float in Birkenhead, England, on 3 August 1878 to John Edwin (1846–1886), a licensed victualler, and Ellen (Crombleholme) Joughin (1850–1938). He first went to sea in 1889 aged 11, and later became chief baker on various White Star Line steamships, notably the RMS Olympic, Titanic's sister ship.</p>
                        <p>On 17 November 1906, in Liverpool, he married Louise Woodward (born 11 July 1879), a native of Douglas, Isle of Man. They had a daughter, Agnes Lillian, in 1907, and a son, Roland Ernest, in 1909. Louise is believed to have died from complications in childbirth around 1919, and her new son, Richard, was also lost.</p>
                        <p>Joughin was part of the victualling crew of the RMS Titanic during its maiden and final trip in April 1912. He was on board the ship during its delivery trip from Belfast to Southampton. He signed on again in Southampton on 4 April 1912. In the capacity of Chief Baker, Joughin received monthly wages of £12, which is equivalent to £1880 today when adjusted for inflation, and had a staff of thirteen bakers under him.</p>
                        <p>When the ship hit an iceberg on the evening of 14 April, at 23:40, Joughin was off-duty and in his bunk. According to his testimony, he felt the shock of the collision and immediately got up. Word was being passed down from the upper decks that officers were getting the lifeboats ready for launching, and Joughin sent his thirteen men up to the boat deck with provisions to the lifeboats: four loaves of bread apiece, about forty pounds of bread each. Joughin stayed behind for a time, but then followed them, reaching the Boat Deck at around 00:30.</p>
                        <p>Joughin joined Chief Officer Henry Tingle Wilde by Lifeboat 10. Joughin helped, with stewards and other seamen, the ladies and children through to the lifeboat, although, after a while, the women on deck ran away from the boat saying they were safer aboard the Titanic. The Chief Baker then went on to A Deck and forcibly brought up women and children, throwing them into the lifeboat.</p>
                        <p>Although he was assigned as captain of Lifeboat 10, Joughin did not board; it was already being crewed by two sailors and a steward. He went below after Lifeboat 10 had gone, and "had a drop of liqueur" (a tumbler half-full of liqueur, as he went on to specify) in his quarters. He then came upstairs again after meeting "the old doctor" (possibly William O'Loughlin, quite possibly the last time anyone ever saw him). When he arrived at the Boat Deck, all the boats had been lowered, so he went down into the A Deck promenade and threw about fifty deck chairs overboard so that they could be used as flotation devices.</p>
                        <p>Joughin then went into the deck pantry on A Deck to get a drink of water and, whilst there, he heard a loud crash, "as if part of the ship had buckled". He left the pantry, and joined the crowd running aft toward the poop deck. As he was crossing the well deck, the ship suddenly gave a list over to port and, according to him, threw everyone in the well in a bunch except for him. Joughin climbed to the starboard side of the poop deck, getting hold of the safety rail so that he was on the outside of the ship as it went down by the head. As the ship finally sank, Joughin rode it down as if it were an elevator, not getting his head under the water (in his words, his head "may have been wetted, but no more"). He was, therefore, the last survivor to leave the Titanic.</p>
                        <p>According to his own testimony, Joughin kept paddling and treading water for about two hours. He also admitted to hardly feeling the cold, most likely thanks to the alcohol he had imbibed. When daylight broke, he spotted the upturned Collapsible B lifeboat, with Second Officer Charles Lightoller and around 30 men standing on the side of the boat. Joughin slowly swam towards it, but there was no room for him. A man, however, cook Isaac Maynard, recognized him and held his hand as the Chief Baker held onto the side of the boat, with his feet and legs still in the water. Another lifeboat then appeared and Joughin swam to it and was taken in, where he stayed until he boarded the RMS Carpathia that had come to their rescue. He was rescued from the sea with only swollen feet.</p>
                        <p>After surviving the Titanic disaster, Joughin returned to England, and was one of the crew members who reported to testify at the British Wreck Commissioner's inquiry into the sinking headed by Lord Mersey. In 1920, Joughin moved permanently to the United States to Paterson, New Jersey. He also served on ships operated by American Export Lines, as well as on World War II troop transports before retiring in 1944.</p>
                        <p>After moving back to New Jersey, he remarried to Mrs. Annie Eleanor (Ripley) Howarth Coll (born 29 December 1870), a native of Leeds, who had first come to the United States in 1888. Annie was a widow twice over and had a daughter, Rose (born 1891), who later married Henry Stoehr.</p>
                        <p>Annie's death in 1943 was a great loss from which he never recovered. Twelve years later, Joughin was invited to describe his experiences in a chapter of Walter Lord's book, A Night to Remember.</p>
                        <p>Soon afterwards, his health rapidly declined. He died in a Paterson hospital on 9 December 1956 at the age of 78, after two weeks with pneumonia, and was buried alongside his wife in the Cedar Lawn Cemetery, in Paterson, New Jersey.</p>

                        <form ref={form} onSubmit={redirectBack}>
                            <label><strong>Question 1: </strong>What was Charles Joughin's job on the Titanic?</label><br></br>
                            <input type="text" name="q1"></input><br></br><br></br>
                            <label><strong>Question 2: </strong>About how many deck chairs did Joughin throw overboard as flotation devices?</label><br></br>
                            <input type="text" name="q2"></input><br></br><br></br>
                            <label><strong>Question 3: </strong>Take a wild guess at how many drinks you think Joughin actually ingested to survive this insane situation.</label><br></br>
                            <input type="text" name="q3"></input><br></br><br></br>

                            <input type="submit" value="Submit Answers"/>
                            <br></br><br></br>
                        </form>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default passage2