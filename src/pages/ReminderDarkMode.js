import React, {useState, useEffect, useRef} from "react";
import {useParams, useNavigate} from "react-router-dom";
import "../styles/DarkMode.css";
import ReminderComponent from '../components/ReminderComponent';

const ReminderDarkMode = () => {
    const navigate = useNavigate();
    const form = useRef();
    const [showQuestions, setShowQuestions] = useState(false);

    const redirectBack = (e) => {
        e.preventDefault();
        navigate(`/`);
    }

    return (
        <>
            <ReminderComponent bgColor="black"/>
            <div className="dark-mode">
                <body>
                    <div class="site">
                        <div id="page">
                            <h1>Dark Mode With Reminders</h1>
                            <br></br>
                            <p>Please read the following passage. When you have finished reading, please click on the button to reveal three questions; type your answer in the provided boxes.</p>
                            <br></br>
                            <h1>Leadership and Change</h1>
                            <p>Hughes, R., Ginnett, R., & Curphy, G. (2015). Leadership: Enhancing the Lessons of Experience. Chapter 14.</p>
                            <br></br>

                            <h2>The Emotional Approach to Organizational Change: Charismatic and Transformational Leadership</h2>
                            <p>Although the rational approach provides a straightforward model for organizational change, it seems that many large-scale political, societal, or organizational changes were not this formulaic. For example, it is doubtful that Jesus Christ, Muhammad, Joan of Arc, Vladimir Lenin, Adolf Hitler, Mahatma Gandhi, Mao Zedong, Martin Luther King Jr., the Ayatollah Khomeini, Nelson Mandela, Fidel Castro, Hugo Chávez, or Osama bin Laden followed some change formula or plan, yet these individuals were able to fundamentally change their respective societies. Although these leaders differ in a number of important ways, one distinct characteristic they all share is charisma. Charismatic leaders are passionate, driven individuals who can paint a compelling vision of the future. Through this vision they can generate high levels of excitement among followers and build particularly strong emotional attachments with them. The combination of a compelling vision, heightened emotional levels, and strong personal attachments often compels followers to put forth greater effort to meet organizational or societal challenges. The enthusiasm and passion generated by charismatic leaders seems to be a dual-edged sword, however. Some charismatic movements can result in positive and relatively peaceful organizational or societal changes; Evo Morales and Hugo Chavez have done a great deal to help the poor in Bolivia and Venezuela. On the downside, when this passion is used for selfish or personal gains, history mournfully suggests it can have an equally devastating effect on society. Examples here might include Zimbabwe President Robert Mugabe or Kim Jung-Un of North Korea.</p>
                            <p>What is it about charismatic leadership that causes followers to get so excited about future possibilities that they may willingly give up their lives for a cause? Even though many people conjure up images of charismatic individuals when thinking about leadership, the systematic investigation of charismatic leadership is relatively recent.</p>
                            <div class="highlight-box">
                                <h4>Kleptocracies and Authority Systems</h4>
                                <p><b>HIGHLIGHT 14.6</b></p>
                                <p><i>The difference between a kleptocrat and a wise statesman, between a robber baron and a benefactor, is merely one of degree.</i></p>
                                <p>Jared Diamond, researcher</p>
                                <p>In the book <i>Guns, Germs, and Steel</i> author Jared Diamond describes the historic, geographic, climatic, technologic, demographic, and economic factors that have caused human societies to emerge, thrive, or disappear. One phenomenon that appears across many groups as they grow to 100 or so people is the emergence of some form of government. Sometimes this government is based on the power of a family (traditional authority); other times it is more fomalized (legal–rational authority); and at times it is based on a single leader (charismatic authority). Governments emerge because groups this size begin to recognize that they can solve common problems, such as finding food and shelter and defending against enemies by pooling resources rather than working as individuals. Thus members of the group give up certain liberties and resources but gain services they could ill afford on their own. Some people perceive this exchange to be relatively fair; the services they receive seem to offset their costs in terms of taxes, food, and so on. But at other times these governments appear to be nothing more than kleptocracies—people pay large tributes to a small group of people at the top but get little in return. Kleptocracies can be found in traditional authority systems; what do British citizens get in return for paying taxes to support having a queen? Kleptocracies can also be found in legal–rational systems; the collapse of the financial services and automobile industries in 2008–2009 are examples of executives ripping off customers, employees, and shareholders. Charismatic leaders can also head up kleptocracies. At one time Robert Mugabe was seen as a charismatic leader by many of his citizens, but with his $2 million birthday party, poverty rates at an all-time high, and inflation hovering at 8,000 percent per year, it seems that most citizens of Zimbabwe are not enjoying the same fruits of success.</p>
                                <p>Because charismatic leaders are more likely to emerge in a crisis, they may be more likely to appear when citizens believe their fees, taxes, goods, cattle, or people payments are misaligned with the benefits they are getting by keeping their government in place. This is precisely what happened when Mao, Lenin, and Castro led their communist revolutions in China, Russia, and Cuba. More recently this same phenomenon has allowed charismatic leaders to be elected into the presidential suites in Venezuela and Ecuador. The Arab Spring was a revolt against the corrupt and unfair rule found in many Middle Eastern countries and the (un)fairness of the tax versus service exchange is often used by politicians in the United States to get elected into office.</p>
                                <p>Is your current government a kleptocracy? Why or why not? What information would you use to justify your answer?</p>
                            </div>
                            <h2>Leader Characteristics</h2>
                            <p>Leadership researchers have spent considerably more time and effort trying to identify the unique characteristics of charismatic leaders than they have exploring follower or situational factors. This is partly because some researchers believe that it is possible to drive higher levels of organizational change or performance through the selection or training of charismatic leaders. Although some scholars have argued that the leader’s personal qualities are the key to charismatic or transformational leadership, we do not believe the leader’s qualities alone result in charismatic leadership. We do, however, acknowledge several common threads in the behavior and style of both charismatic and transformational leaders, and these include their vision and values, rhetorical skills, ability to build a particular kind of image in the hearts and minds of their followers, and personalized style of leadership.</p>
                            <div class="highlight-box">
                                <h4>Nelson Mandela</h4>
                                <p><b>PROFILES IN LEADERSHIP 14.2</b></p>
                                <p>South Africa was ruled by a white minority government for much of the past 200 years. Although blacks made up over 75 percent of the populace, whites owned most of the property, ran most of the businesses, and controlled virtually all the country’s resources. Moreover, blacks did not have the right to vote and often worked under horrible conditions for little or no wages. Seeing the frustration of his people, Nelson Mandela spent 50 years working to overturn white minority rule. He started by organizing the African National Congress, a nonviolent organization that protested white rule through work stoppages, strikes, and riots. Several whites were killed in the early riots, and in 1960 the police killed or injured over 250 blacks in Sharpeville. Unrest over the Sharpeville incident caused 95 percent of the black workforce to go on strike for two weeks, and the country declared a state of emergency. Mandela then orchestrated acts of sabotage to further pressure the South African government to change. The organization targeted installations and took special care to ensure that no lives were lost in the bombing campaign. Mandela was arrested in 1962 and spent the next 27 years in prison. While in prison he continued to promote civil unrest and majority rule, and his cause eventually gained international recognition. He was offered but turned down a conditional release from prison in 1985. After enormous international and internal pressure, South African President F. W. de Klerk “unbanned” the ANC and unconditionally released Nelson Mandela from prison. Nonetheless South Africa remained in turmoil, and in 1992, 4 million workers went on strike to protest white rule. Because of this pressure, Mandela forced de Klerk to sign a document outlining multiparty elections. Mandela won the 1994 national election and was the first democratically elected leader of the country.</p>
                                <p>Do you think Nelson Mandela is a charismatic leader? Why or why not?</p>
                            </div>
                            <h3>Vision</h3>
                            <p>Both transformational and charismatic leaders are inherently future-oriented. They involve helping a group move “from here to there.” Charismatic leaders perceive fundamental discrepancies between the way things are and the way things can (or should) be. They recognize the shortcomings of the present order and offer an imaginative <b>vision</b> to overcome them. A charismatic leader’s vision is not limited to grand social movements; leaders can develop a compelling vision for any organization and organizational level. This vision can have both a stimulating and a unifying effect on the efforts of followers, which can help drive greater organizational alignment and change and higher performance levels by followers. Paradoxically, the magic of a leader’s vision is often that the more complicated the problem, the more people may be drawn to simplistic solutions.</p>
                            <div class="highlight-box">
                                <h4>Osama bin Laden</h4>
                                <p><b>PROFILES IN LEADERSHIP 14.3</b></p>
                                <p>Osama bin Laden was a member of the prestigious bin Laden family in Saudi Arabia and the founder of al-Qaeda. Bin Laden was born in Riyadh, Saudi Arabia, and was brought up as a devout Sunni Muslim. He attended the Al-Thager Model School in Jeddah, “the school of the elite,” and was exposed to many teachings of the Muslim Brotherhood while growing up. He attended university after his secondary schooling, but it is uncertain what he majored in or whether he obtained a degree. At the age of 17 he married his first wife and reportedly had up to four wives and fathered anywhere between 12 and 24 children. In person he was said to be soft-spoken, charming, respectful, and polite. He appeared to live a life of discipline, simplicity, and self-sacrifice, preferring that his wealth be used to benefit al- Qaeda rather than improve his personal lifestyle.</p>
                                <p>Bin Laden first engaged in militant activities in the late 1970s, when he moved to Pakistan to help the mujahedeen fight a guerilla war to oust the Soviet Union from Afghanistan. His family connections and wealth helped to fund many of the mujahedeen’s efforts over the next 10 years. Some of his money and arms may have come from the Central Intelligence Agency: the United States also wanted to get the Soviet Union out of Afghanistan.</p>
                                <p>After Iraq invaded Kuwait in 1990, bin Laden offered to protect Saudi Arabia with 12,000 armed men, but his offer was rebuffed by the Saudi royal family. Shortly thereafter bin Laden publicly denounced the presence of coalition troops (“infidels”) on Saudi soil and wanted all U.S. bases on the Arab peninsula to be closed. He eventually left Saudi Arabia to take up residence in Sudan, where he established a new base for mujahedeen operations. The purpose of his African organization was to propagate Islamist philosophy and recruit new members to the cause. In 1996 bin Laden left Sudan and went to Afghanistan to set up a new base of operations, where he forged a close relationship with the leaders of the new Taliban government.</p>
                                <p>Bin Laden issued fatwas in 1996 and 1998 that stated that Muslims should kill civilians and military personnel from the United States and allied countries until they withdrew support for Israel and withdrew military forces from Islamic countries. It is believed he was either directly involved with or funded the 1992 bombing of the Gold Mihor Hotel in Aden, Yemen; the massacre of German tourists in Luxor, Egypt, in 1997; the 1998 bombings of two U.S. embassies in Africa; and the World Trade Center and Pentagon bombings on September 11, 2001. He, al-Qaeda, and its splinter movements were involved with the London subway bombing, the wars in Afghanistan and Iraq, and unrest in the Philippines, Thailand, Indonesia, and Somalia. Bin Laden was formulating a number of new terrorists attacks when he was killed by a U.S. Navy SEALs team during a raid in Abbottabad, Pakistan, in 2012.</p>
                                <p>It is clear that bin Laden had a following, and that following has grown into the tens of thousands over the past 20 years. These followers are very devoted; some are so committed that they volunteer to be suicide bombers. A much larger group may not play active roles in al-Qaeda but are clearly sympathetic to its cause. But as strong as these followers’ feelings were about bin Laden, others were just as intent to see him dead or behind bars.</p>
                                <p>Is Osama bin Laden a charismatic leader or a transformational leader? Would your answer to this question change if you were sympathetic to the al-Qaeda cause? Do you think his death helped or hurt others’ perceptions of bin Laden’s charisma?</p>
                            </div>
                            <h3>Rhetorical Skills</h3>
                            <p>In addition to <i>having</i> vision, charismatic leaders are gifted in <i>sharing</i> their vision. As discussed earlier, charismatic and transformational leaders have superb <b>rhetorical skills</b> that heighten followers’ emotional levels and inspire them to embrace the vision. As it turns out, both the content of a transformational leader’s speeches and the way they are delivered are vitally important. Charismatic leaders make extensive use of metaphors, analogies, and stories rather than abstract and colorless rational discourse to reframe issues and make their points. Often the delivery of the speech is even more important than the content itself—poor delivery can detract from compelling content. Adolf Hitler mastered his delivery techniques so well that his speeches can have hypnotic power even to people who do not understand German. Similarly, many people consider Martin Luther King Jr.’s “I Have a Dream” speech one of the most moving speeches they have ever heard. YouTube videos of Adolph Hitler, Martin Luther King Jr., Ronald Reagan, or Bill Clinton’s speeches show their masterful evocation of patriotic and cultural themes.</p>
                            <h3>Image and Trust Building</h3>
                            <p>As demonstrated in Profiles in Leadership 14.2 and 14.3 , transformational leaders build trust in their leadership and the attainability of their goals through an <b>image</b> of seemingly unshakable self-confidence, strength of moral conviction, personal example and self-sacrifice, and unconventional tactics or behavior. They are perceived to have unusual insight and ability and act in a manner consistent with their vision and values. Whereas transformational leaders <b>build trust</b> by showing commitment to followers’ needs over self-interest, some charismatic leaders are so concerned with their image that they are not beyond taking credit for others’ accomplishments or exaggerating their expertise.</p>
                            <div class="highlight-box">
                                <h4>The Trouble with Superheroes</h4>
                                <p><b>HIGHLIGHT 14.7</b></p>
                                <p>All publicly traded companies have boards of directors, whose primary responsibility is to increase shareholder value. People buy stock in companies such as Amazon or Apple, and their boards ensure top management makes the best use of this money to improve business performance. One of the most important decisions boards can make when it comes to improving shareholder value is succession planning. The board of directors make CEO hiring, compensation, and firing decisions and have a major say on who fills the other C-suite positions. Oftentimes changes in economic conditions, consumer preferences, competitive threats, suppliers, or regulatory policy cause business results to suffer, and when this occurs boards are likely to look for new CEOs who are perceived to be charismatic. There are some interesting research findings regarding CEO succession planning and organizational change that are worth discussing further.</p>
                                <p>One interesting finding is that CEOs only account for 5 percent of a company’s performance. A company’s revenue may increase from $1 billion to $2 billion dollars or its stock price may rise from $50 to $60, but the CEO has little direct impact on these improvements. CEOs will take full credit but economic conditions, globalization, technology, new products, or failed competitors often play more pervasive roles in company performance. CEOs also will claim that they are critical to motivating and inspiring employees, but research shows immediate supervisors have much greater impact on employee engagement. As such, it may be that immediate supervisors and middle managers play bigger roles in company performance than CEOs. A third research finding is that there is a negative correlation between outside CEO pay and company performance. The more boards pay to hire an outside superstar CEO, the more a company’s performance is apt to decline. Other research shows there is very little relationship between CEO compensation, a CEO’s ability to build teams, and company performance. CEOs may talk a good game when it comes to driving change and improving the organization, but the facts show that many are better at managing their careers than leading change.</p>
                                <p>Despite these findings boards are hiring CEOs from the outside more than ever before. Since the 1970s the percentage of outsiders being hired as CEOs increased from 15 to over 33 percent and is even higher in the high-tech industry. Boards can get around the problems associated with hiring out side CEOs by adopting robust <b>succession planning processes</b>. Good succession plans identify the key knowledge, skills, and behaviors needed to be successful in top leadership positions; rigorously evaluate internal talent against these criteria; systematically develop those with the most potential to fill these positions; and conduct regular talent reviews. Companies that do this well, such as General Electric and Proctor & Gamble, have several potential internal candidates who could step into the CEO or CFO role. These organizations do such a good job developing leadership talent that potential successors often get hired away by other companies. Despite the findings that internal candidates tend to make the best CEOs, most companies do not have strong succession planning processes, which is why boards go to the outside to hire “charismatic” or “transformational” CEOs.</p>
                                <p>Hewlett-Packard has hired six outside CEOs since 1999 and the current CEO, Meg Whitman, came from eBay. eBay was faltering when Whitman left and she spent $100M of her own money in a failed campaign to be the governor of California in 2010. How successful do you think Meg Whitman will be as the CEO of HP? What has happened to the company over the past 15 years as a result of all these outside hires?</p>
                            </div>
                            <h3>Personalized Leadership</h3>
                            <p>One of the most important aspects of charismatic and transformational leadership is the personal nature of the leader’s power. These leaders share strong, personal bonds with followers, even when the leader occupies a formal organizational role. It is this <b>personalized leadership</b> style that seems to be responsible for the feelings of empowerment notable among followers of charismatic or transformational leaders. Charismatic leaders seem more adept at picking up social cues and tend to be emotionally expressive, especially through such nonverbal channels as their eye contact, posture, movement, gestures, tone of voice, and facial expressions. Transformational leaders also empower followers by giving them tasks that lead to heightened self-confidence and creating environments of heightened expectations and positive emotions.</p>
                            <h2>Follower Characteristics</h2>
                            <p>If charismatic leadership were defined solely by a leader’s characteristics, it would be relatively easy to identify individuals with good vision, rhetorical, and impression management skills and place them in leadership positions. Over time we would expect that a high percentage of followers would embrace and act on these leaders’ visions. However, a number of leaders appear to possess these attributes yet are not seen as charismatic. They may be good, competent leaders, but they seem unable to evoke strong feelings in followers or to get followers to do more than they thought possible. In reality, charisma is probably more a function of the followers’ reactions to a leader than of the leader’s personal charac teristics. If followers do not accept the leader’s vision or become emotionally attached to the leader, then the leader simply will not be perceived to be either charismatic or transformational. Thus <b>charisma</b> is in the eyes and heart of the beholder; it is a particularly strong emotional reaction to, identification with, and belief in some leaders by some followers. Note that this definition is value-free—leaders seen as charismatic may or may not share the same values as their followers or meet Burns’s criteria for transformational leadership. A recent example of followers’ divergent reactions can be seen with U.S. President Barack Obama. Some followers, particularly those in the Democratic party, perceive President Obama to be a very charismatic leader. Most Republicans think he does not share the same values as the American people and is out to destroy the United States, yet he is clearly the same person. Many of the more popular conceptualizations of charisma and charismatic leadership today also define charisma in terms of followers’ reactions to the leader. Defining charisma as a reaction that followers have toward leaders makes it reasonable to turn our attention to the four unique characteristics of these reactions.</p>
                            <h3>Identification with the Leader and the Vision</h3>
                            <p>Two of the effects associated with charismatic leadership include a strong affection for the leader and a similarity of follower beliefs with those of the leader. These effects describe a sort of bonding or <b>identification with the leader</b> personally and a parallel psychological investment to a goal or activity (a “cause”) bigger than oneself. Followers bond with a leader because they may be intensely dissatisfied with the status quo and see the implementation of the vision as a solution to their problems. Being like the leader, or approved by the leader, also becomes an important part of followers’ self-worth.</p>
                            <h3>Heightened Emotional Levels</h3>
                            <p>Charismatic leaders are able to stir followers’ feelings, and this <b>heightened emotional level</b> results in increased levels of effort and performance. Emotions are often the fuel driving large-scale initiatives for change, and charismatic leaders will often do all they can to maintain them, including getting followers to think about their dissatisfaction with the status quo or making impassioned appeals directly to followers. But charismatic leaders need to keep in mind that some people will become alienated with the vision and movement and can have emotions just as intense as those of the followers of the vision. This polarizing effect of charismatic leaders may be one reason why they tend to have violent deaths: those alienated by a charismatic leader are almost as likely to act on their emotions as followers within the movement.</p>
                            <h3>Willing Subordination to the Leader</h3>
                            <p>Whereas the preceding factor dealt with followers’ emotional and psychological closeness to the leader, <b>willing subordination to the leader</b> involves their deference to his or her authority. Charismatic leaders often seem imbued with superhuman qualities. As a result, followers often naturally and willingly submit to the leader’s apparent authority and superiority. Followers seem to suspend their critical thinking skills; they have few doubts about the intentions or skills of the leader, the correctness of the vision or change initiative, or the actions they need to take in order to achieve the vision.</p>
                            <h3>Feelings of Empowerment</h3>
                            <p>Followers of charismatic leaders are moved to expect more of themselves, and they work harder to achieve these higher goals. Charismatic leaders set high expectations while expressing confidence in their abilities and providing ongoing encouragement and support. Somewhat paradoxically, followers feel stronger and more powerful at the same time they willingly subordinate themselves to the charismatic leader. These <b>feelings of empowerment</b>, when combined with heightened emotional levels and a leader’s vision of the future, often result in increases in organizational, group, or team performance or significant social change.</p>
                            <h2>Situational Characteristics</h2>
                            <p>Many researchers believe that situational factors also play an important role in determining whether a leader will be perceived as charismatic. Perhaps individuals possessing the qualities of charismatic leaders are perceived as charismatic only when confronting certain types of situations. Because the situation may play an important role in the attribution of charisma, it will be useful to review some of the situational factors believed to affect charismatic leadership.</p>
                            <h3>Crises</h3>
                            <p>Perhaps the most important situational factor associated with charismatic leadership is the presence or absence of a <b>crisis</b>. Followers who are content with the status quo are relatively unlikely to perceive a need for a charismatic leader or be willing to devote great effort to fundamentally change an organization or society. On the other hand, a crisis often creates “charisma hungry” followers who are looking for a leader to alleviate or resolve their crisis. Leaders are given considerably more latitude and autonomy and may temporarily (or sometimes permanently) suspend accepted rules, policies, and procedures to pull the organization out of the crisis. Some leaders may even create or manufacture crises to increase followers’ acceptance of their vision, the range of actions they can take, and followers’ level of effort. Although a crisis situation does not necessarily make every leader look charismatic, such a situation may set the stage for particular kinds of leader behaviors to be effective.</p>
                            <h3>Social Networks</h3>
                            <p>Social networks can also affect the attribution of charisma. Attributions of charisma will spread more quickly in organizations having well-established social networks, where everybody tends to know everyone else. And more often than not charismatic leaders have bigger social networks and play a more central role in their networks than leaders seen as less charismatic.</p>
                            <h3>Other Situational Characteristics</h3>
                            <p>Two other situational characteristics may help or hinder the emergence of a charismatic leader. One of these is outsourcing and organizational downsizing. Many people believe that downsizing destroys the implicit contract between employer and employee and leaves many employees disillusioned with corporate life. Because charismatic or transformational leadership is intensely relational in nature, destroying the implicit contract between leaders and followers greatly diminishes the odds of charismatic leadership emergence. But of all the situational variables affecting charismatic leadership, perhaps the most important and overlooked variable is <b>time</b>. Charismatic or transformational leadership does not happen overnight. It takes time for leaders to develop and articulate their vision, heighten followers’ emotional levels, build trusting relationships with followers, and direct and empower followers to fulfill the vision. A crisis may compress the amount of time needed for charismatic leadership to emerge, whereas relatively stable situations lengthen this period.</p>
                            <h2>Concluding Thoughts about the Characteristics of Charismatic and Transformational Leadership</h2>
                            <p>Several final points about the characteristics of charismatic leadership need to be made. First, although we defined charisma as a quality attributed to certain leaders based on the relationships they share with followers, charismatic leadership is most fully understood when we also consider how leader and situational factors affect this attribution process. The special relationships charismatic leaders share with followers do not happen by accident; rather, they are often the result of interaction between the leader’s qualities, the degree to which a leader’s vision fulfills followers’ needs, and the presence of certain situational factors. Second, it seems unlikely that all the characteristics of charismatic leadership need to be present before charisma is attributed to a leader. The bottom line for charisma seems to be the relationships certain leaders share with followers, and there may be a variety of ways in which these relationships can develop. This also implies that charisma may be more of a continuum than an all-or-nothing phenomenon. Some leaders may be able to form particularly strong bonds with a majority, others with a few—and still others may not get along well with any followers. Third, it seems that charismatic leadership can happen anywhere—schools, churches, communities, businesses, government organizations, and nations—and does not happen only on the world stage.</p>
                            <p>Fourth, given that there are a number of ways to develop strong emotional attachments with followers, one important question is whether it is possible to attribute charisma to an individual based solely on his or her position or celebrity status. Some individuals in positions of high public visibility and esteem (film stars, musicians, athletes, television evangelists, or politicians) can develop (even cultivate) charismatic images among their fans and admirers. In these cases it is helpful to recognize that charismatic leadership is a two-way street. Not only do followers develop strong emotional bonds with leaders, but leaders also develop strong emotional bonds with followers and are concerned with follower development. It is difficult to see how the one-way communication channels of radio and television can foster these two-way relationships or enhance follower growth. Thus, although we sometimes view certain individuals as charismatic based on media manipulation and hype, this is not transformational leadership.</p>

                            <button 
                                onClick={() => setShowQuestions(true)}
                                className="show-questions-btn"
                                style={{ display: showQuestions ? 'none' : 'block' }}
                                >
                                Show Questions
                            </button>
                            {showQuestions && (
                                <form ref={form} onSubmit={redirectBack}>
                                    <label><strong>Question 1: </strong>Out of the four leader characteristics, which one do you think you have the most of?</label><br></br>
                                    <input type="text" name="q1"></input><br></br><br></br>
                                    <label><strong>Question 2: </strong>Do you think a charismatic leader would have compliant, cooperative, or committed followers?</label><br></br>
                                    <input type="text" name="q2"></input><br></br><br></br>
                                    <label><strong>Question 3: </strong>What is arguably the most important yet overlooked situational variable that affects the rise of a charismatic leader?</label><br></br>
                                    <input type="text" name="q3"></input><br></br><br></br>

                                    <input type="submit" value="Submit Answers"/>
                                    <br></br><br></br>
                                </form>
                            )}
                        </div>
                    </div>
                </body>
            </div>
        </>
    );
};

export default ReminderDarkMode;
