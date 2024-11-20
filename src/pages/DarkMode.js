import React, {useState, useEffect, useRef} from "react";
import {useParams, useNavigate} from "react-router-dom";
import "../styles/DarkMode.css";


const DarkMode = () => {
    const navigate = useNavigate();
    const form = useRef();
    const [showQuestions, setShowQuestions] = useState(false);

    const redirectBack = (e) => {
        e.preventDefault();
        navigate(`/`);
    }

    return (
      <div className="dark-mode">
          <body>
              <div class="site">
                  <div id="page">
                      <h1>Dark Mode </h1>
                      <br></br>
                      <p>Please read the following passage. When you have finished reading, please click on the button to reveal three questions; type your answer in the provided boxes.</p>
                      <br></br>
                      <h1>Power and Influence</h1>
                      <p>Hughes, R., Ginnett, R., & Curphy, G. (2015). Leadership: Enhancing the Lessons of Experience. Chapter 4.</p>
                      <br></br>

                      <h2>Influence Tactics</h2>
                      <p>Whereas power is the capacity or potential to influence others, influence tactics are the actual behaviors used by an agent to change the attitudes, opinions, or behaviors of a target person. Kipnis and his associates accomplished much of the early work on the types of influence tactics one person uses to influence another. Various instruments have been developed to study influence tactics, but the Influence Behavior Questionnaire, or IBQ, seems to be the most promising. Here is a detailed discussion of the different influence tactics assessed by the IBQ.</p>
                      <h3>Types of Influence Tactics</h3>
                      <p>The IBQ is designed to assess nine types of influence tactics, and its scales give us a convenient overview of various methods of influencing others. <b>Rational persuasion</b> occurs when an agent uses logical arguments or factual evidence to influence others. An example of rational persuasion would be when a politician’s adviser explains how demographic changes in the politician’s district make it important for the politician to spend relatively more time in the district seeing constituents than she has in the recent past. Agents make <b>inspirational appeals</b> when they make a request or proposal designed to arouse enthusiasm or emotions in targets. An example here might be a minister’s impassioned plea to members of a congregation about the good works that could be accomplished if a proposed addition to the church were built. <b>Consultation</b> occurs when agents ask targets to participate in planning an activity. An example of consultation would be if a minister established a committee of church members to help plan the layout and use of a new church addition. In this case the consul tative work might not only lead to a better building plan but also <i>strengthen member commitment</i> to the idea of a new addition. <b>Ingratiation</b> occurs when an agent attempts to get you in a good mood before making a request. A familiar example here would be a salesperson’s good-natured or flattering banter with you before you make a decision about purchasing a product. Agents use <b>personal appeals</b> when they ask another to do a favor out of friendship. A sentence that opens with, “Bill, we’ve known each other a long time and I’ve never asked anything of you before” represents the beginning of a personal appeal, whereas influencing a target through the exchange of favors is labeled <b>exchange</b>. If two politicians agree to vote for each other’s pet legislation despite minor misgivings about each other’s bills, that is exchange.</p>
                      <p><b>Coalition tactics</b> differ from consultation in that they are used when agents seek the aid or support of others to influence the target. A dramatic example of coalition tactics occurs when several significant people in an alcoholic’s life (such as spouse, children, employer, or neighbor) agree to confront the alcoholic in unison about the many dimensions of his or her problem. Threats or persistent reminders used to influence targets are known as <b>pressure tactics</b>. A judge who gives a convicted prisoner a suspended sentence but tells him to consider the suspension a “sword hanging over his head” if he breaks the law again is using pressure tactics. Finally, <b>legitimizing tactics</b> occur when agents make requests based on their position or authority. A principal may ask a teacher to be on the school’s curriculum committee, and the teacher may accede to the request despite reservations because it is the principal’s prerogative to appoint any teacher to that role. In practice, of course, actual tactics often combine these approaches. Rarely, for example, is an effective appeal purely inspirational without any rational elements.</p>
                      <h3>Influence Tactics and Power</h3>
                      <p>As alluded to throughout this chapter, a strong relationship exists between the relative power of agents and targets and the types of influence tactics used. Because leaders with high amounts of referent power have built close relationships with followers, they may be more able to use a wide variety of influence tactics to modify the attitudes and behaviors of their followers. For example, leaders with referent power could use inspirational appeals, consultations, ingratiation, personal appeals, exchanges, and even coalition tactics to increase the amount of time a particular follower spends doing work-related activities. Note, however, that leaders with high referent power generally do not use legitimizing or pressure tactics to influence followers because, by threatening followers, leaders risk some loss of referent power. Leaders who have only coercive or legitimate power may be able to use only coalition, legitimizing, or pressure tactics to influence followers. In fact, influence tactics can be so effective, Cialdini53 refers to them as “Weapons of Influence.”</p>
                      <p>Other factors also can affect the choice of influence tactics. People typically use hard tactics (that is, legitimizing or pressure tactics) when an influ encer has the upper hand, when they anticipate resistance, or when the other person’s behavior violates important norms. People typically use soft tactics (such as ingratiation) when they are at a disadvantage (see Highlight 4.4 comparing football and judo for an example of using a disadvantage to your advantage), when they expect resistance, or when they will personally benefit if the attempt is successful. People tend to use rational tactics (the exchange and rational appeals) when parties are relatively equal in power, when resistance is not anticipated, and when the benefits are organizational as well as personal. Studies have shown that influence attempts based on factual, logical analyses are the most frequently reported method by which middle managers exert lateral influence and upward influence. Other important components of successful influence of one’s superiors include thor oughly preparing beforehand, involving others for support (coalition tactics), and persisting through a combination of approaches.</p>
                      <div class="highlight-box">
                          <h4>Power and Influence (or Football and Judo)</h4>
                          <p><b>HIGHLIGHT 4.4</b></p>
                          <p>While great leaders use both power and influence effectively (see Highlight 4.7 for perhaps the quintessential example of using both techniques effectively), it can also be instructive to compare and contrast the two at their most obvious polarities. At least for one of your authors, football and judo are cases in point.</p>
                          <p>Football, and by that I mean what is known in Europe as “American football,” is a game about power. Of course, influence can also be used and often is quite effectively. But overwhelmingly, football is a game about size, strength, and speed. If one combines those three concepts and then searches for a single word to describe then, I would submit that “power” might work. If you have ever been around professional football players, you will discover this for yourself. They are a powerful group of men. Quite a while back, my brother-in-law was a professional football player. He played as an offensive end in college but was converted to a linebacker as a pro. I remember back in college that I thought he was about the largest human being I had ever known; if he was in a room with normal-sized, non-football-playing people, he readily stood out, and above, everyone else. As a result of these experiences, the first time I attended a game in which he was playing as a pro, I expected to be able to pick him out easily. But on the field with other powerful pro football players, he was indistinguishable except for his jersey number.</p>
                          <p>This notion of the importance of power to the game of football was summed up once by one of my coaches who repeatedly informed us that “a good big man is always better than a good small man.”</p>
                          <p>Contrast this with judo, or its cousin, jujitsu (see Robert Cialdini’s excellent book entitled Influence: Science and Practice* for more details on using ju jitsu as “a weapon”). Again, your author’s experience is cited as but one example. After a not-so-great experience as an undersized high school football player, I tended to blame my lack of power (size, strength, and speed) for my results. That notion changed later in life. Having been selected to be part of a covert operations group during the Vietnam War, I was sent to a number of preparatory courses, and one of these was a course in judo. I remember quite vividly my first day in the <i>dojo</i>, as we stood around in our ill-fitting <i>gis</i>. I had the sense that most of us were engaged in the same mental activity; we were sizing up our classmates hoping to avoid the most “powerful” of our peers. In this search for the most powerful among us, there was one small person meekly sitting over against the wall who received no consideration as a threat and for whom I almost felt sorry. He appeared more timid than the rest of us and was not even prone to make eye contact with anyone. Clearly possessing the smallest and “least powerful” body in the room, he just sat quietly, thumbing through some sort of notebook.</p>
                          <p>As the minute hand moved to the top of the clock, we all kept an eye on the door watched for our instructor to enter the room at any moment. We didn’t even notice when the small fellow put down his notebook and stood quietly against the wall. Then he spoke, saying that his name was Tze Lang Chen, and he would be our <i>sensei</i>. Really? This was the instructor? I was sure he was going to be crushed, especially by some of our larger classmates. Let me assure you, that notion was rapidly and completely dispelled.</p>
                          <p>In judo, the power of your opponent is a weapon to be used against him. In fact, the word <i>judo</i> means “the gentle way,” which is somewhat antithetical to the football word <i>power</i>. According to our <i>sensei</i> Tze Lang Chen, the founder of judo, Jigoro Kano, was quoted as saying that “resisting a more powerful opponent will result in your defeat, while adjusting to and evading your opponent’s attack will cause him to lose his balance, his power will be reduced, and you will defeat him. This can apply whatever the relative values of power, thus making it possible for weaker opponents to beat significantly stronger ones.” I believe a paraphrase of the profound statement might well be “the bigger they are, the harder they fall.”</p>
                          <p>We quickly learned that the more we resisted the force of our sensei, the sooner we would find ourselves flat on our backs looking up at this rather small man hovering over us. Such is the nature of power versus influence. Power can be used to force movement while influence may be hardly felt at all.</p>
                      </div>
                      <p>Findings about who uses different tactics, and when, provide interesting insights into the influence process. It is clear that one’s influence tactic of choice depends on many factors, including intended outcomes and one’s power relative to the target person. Although it may not be surprising that people select influence tactics as a function of their power relationship with another person, it is striking that this relationship holds true so universally across different social domains—for business executives, for parents and children, and for spouses. There is a strong tendency for people to resort to hard tactics whenever they have an advantage in clout if other tactics fail to get results. As the bank robber Willie Sutton once said, “You can get more with a kind word and a gun than you can get with just a kind word.” This sentiment is apparently familiar to bank managers, too. The latter reported greater satisfaction in handling subordinates’ poor performance when they were relatively more punishing. Highlight 4.5 offers thoughts on how men and women managers sometimes use different influence techniques.</p>
                      <div class="highlight-box">
                          <h4>Gender Differences in Managing Upward: How Male and Female Managers Get Their Way</h4>
                          <p><b>HIGHLIGHT 4.5</b></p>
                          <p>Both male and female managers in a <i>Fortune</i> 100 company were interviewed and completed surveys about how they influence upward—that is, how they influence their own bosses. The results gener ally supported the idea that female managers’ influence attempts showed greater concern for others, whereas male managers’ influence attempts showed greater concern for self. Female managers were more likely to act with the organization’s broad interests in mind, consider how others felt about the influence attempt, involve others in planning, and focus on both the task and interpersonal aspects of the situation. Male managers, on the other hand, were more likely to act out of self-interest, show less consideration for how others might feel about the influence attempt, work alone in developing their strategy, and focus primarily on the task.</p>
                          <p>One of the most surprising findings of the study was that, contrary to prediction, female managers were less likely than male managers to compromise or negotiate during their influence attempts. The female managers were actually more likely to persist in trying to persuade their superiors, even to the point of open opposition. At first this may seem inconsistent with the idea that the female managers’ influence style involved greater concern for their relatedness to others. However, it seems consistent with the higher value placed by the women managers on involvement. Perhaps female managers demonstrate more commitment to their issues, and greater self-confidence that they are doing the “right thing,” precisely because they have already interacted more with others in the organization and know they have others’ support.</p>
                          <p>While male and female managers emphasized different influence techniques, it is important to note that neither group overall was more effective than the other. Nonetheless, there may be significant implications of the various techniques for a manager’s career advancement. At increasingly higher management levels in an organization, effectiveness may be defined primarily by its fit with the organization’s own norms and values. Managers whose style most closely matches that of their superior may have an advantage in evaluations and promotion decisions. This may be a significant factor for women, given the highly skewed representation of males in the most senior executive ranks.</p>
                      </div>
                      <p>Although hard tactics can be effective, relying on them can change the way we see others. This was demonstrated in an experiment wherein leaders’ perceptions and evaluations of subordinates were assessed after they exercised different sorts of authority over the subordinates. Several hundred business students acted as managers of small work groups assembling model cars. Some of the students were told to act in an authoritarian manner, exercising complete control over the group’s work; others were told to act as democratic leaders, letting group members participate fully in decisions about the work. As expected, authoritarian leaders used more hard tactics, whereas democratic leaders influenced subordinates more through rational methods. More interesting was the finding that subordinates were evaluated by the two types of leaders in dramatically different ways even though the subordinates of both types did equally good work. Authoritarian leaders judged their subordinates as less motivated, less skilled, and less suited for promotion. Apparently, bosses who use hard tactics to control others’ behavior tend not to attribute any resultant good performance to the subordinates them selves. Ironically, the act of using hard tactics leads to negative attributions about others, which, in turn, tend to corroborate the use of hard tactics in the first place.</p>
                      <p>Finally, we should remember that using influence tactics can be thought of as a social skill. Choosing the right tactic may not always be enough to ensure good results; the behavior must be <i>skillfully executed</i>. We are not encouraging deviousness or a manipulative attitude toward others (although that has certainly been done by some as illustrated in Highlight 4.6, and will be discussed more in the next chapter on eth ics), merely recognizing the obvious fact that clumsy influence attempts often come across as phony and may be counterproductive. See Highlight 4.7 for a perspective of a political leader who used power appropriately but was arguably the quintessential master of using in fluence effectively.</p>
                      <div class="highlight-box">
                          <h4>The Clout of Influence and the Big Con</h4>
                          <p><b>HIGHLIGHT 4.6</b></p>
                          <p>The confidence game, or “con game” is certainly nothing new, although some might argue it has been taken to new heights by the likes of Bernie Madoff. The term <i>confidence man</i> was first used by the New York press during the trial of William Thompson in 1849. What remains unchanged over the years is that the con game is not about violence or power but much more about the illicit use of influence. It is about the nefarious manipulation of trust.</p>
                          <p>Amy Reading has written a detailed history of “The Big Con” while wrapping it around a fascinat ing story of one of the largest swindles in America. Reading describes the preparations and staging necessary to win over the “mark” as if it were a form of theater. The mark in her historical account is one J. Frank Norfleet, a man who by his own description is as straight as they come. “I don’t drink, chew tobacco, smoke, cuss, or tell lies,” he would say. And he trusted others, which led to his involvement in the Big Con. Here is how Reading sets the stage.</p>
                          <ul class="ul-block">
                              <li>When Norfleet stepped into the St. George Hotel, he entered a tightly scripted drama with nine acts, each with its own distinct function in conveying the mark toward the climax when his money will be whisked away. Even the mark has his lines, and just because he doesn’t know them does not mean he won’t say them at exactly the right moment. He will, because the dialogue is designed so that his responses are the most predictable things he <i>would</i> say in such a situation. The play hinges on three psychological moments, when the mark must make a decision that will propel him further inside. Any objections he might muster have already been taken into account and rejoinders to them devised. Norfleet’s role called for him to play himself, a part at which he excelled, but in a context designed so that his own earnest words would betray him. Confidence men took inordinate pride in the structured nature of their profession. Instead of the violence and mayhem of other kinds of theft, they relied solely on a perfectly constructed piece of theater . . . The big con works because it makes use of a time-honored technique from stage magic, the one-ahead, in which the trick begins before the performer formally introduces it to the audience.</li>
                          </ul>
                          <p>While not intending to glamorize the swindlers, or “grifters” as they are often called, their use of psychological influence is quite remarkable and instructive. Perhaps most telling are psychological traps one and two in the series of three.</p>
                          <p>In the prelude to the first psychological moment, Norfleet has graciously refused a $100 reward for returning a wallet he found in the hotel lobby—a wallet planted, of course, by the grifters. The swindlers then announced they had to go conclude a business deal involving the use of what we would today refer to as “insider trading.” Since Norfleet had refused the reward, would he mind if they took that same money and “invest it along with their own.” Twenty minutes later, the swindlers return and proudly offer Norfleet the $800 return on his declined $100 reward money. As Reading then notes:</p>
                          <ul class="ul-block">
                              <li>Who could resist the <i>convincer</i>? [The swindler] was standing before Norfleet, holding out money with absolutely no strings attached, money that Norfleet had no reason to refuse because in no way did it violate his code of honor. The mark had reached the fifth act and the first psychological moment. Would he reach out and take the money? . . . It is a con man’s truism that no mark in history has ever walked away from the big con once the <i>convincer</i> has had its effect.</li>
                          </ul>
                          <p>And speaking of convincing, perhaps no aspect of the big con is more so than the second psychological moment. This is also the most telling difference between street crime, where the engine is power, and the confidence game, where the engine is influence. Again, we turn to Reading’s description:</p>
                          <ul class="ul-block">
                              <li>Norfleet stood poised at the second psychological moment of the big con, the moment that has received the greatest amount of attention in the literature of confidence artistry: the moment when the mark is invited into a shady deal. To the swindlers themselves, the analysis of this moment couldn’t be simpler. You may not be able to cheat an honest man, but a dishonest man has it coming to him. The big con works because so many legitimate businessmen will so readily discard legality and morality if the money is easy enough . . .The key is to structure the secret so that it is worthless unless the grifter can share it with someone trustworthy. The con man alone cannot realize the profit just beyond his reach, but he will let the mark in on the deal and split the pot if the mark contributes his own particular value. And so the con man extends generosity to the mark, but not in the way that you might expect. He grants the mark the opportunity to give the con man something he needs. The swindler has created a gratifying paradox, a situation in which the mark can act in the highest fulfillment of his own self-interest only by helping someone else.</li>
                          </ul>
                          <p>The big con succeeds not because it <i>forces</i> the mark to hand over his valuables. It succeeds because it influences the mark to believe that he is not only acting in his own self-interest but is also helping others, even if it is acknowledged to be with a wink and a smile. Those interested in how this plays out, both in a theatrical sense and in the big con, would find Reading’s book informative.</p>
                      </div>
                      <h3>A Concluding Thought about Influence Tactics</h3>
                      <p>In our discussion here, an implicit lesson for leaders is the value of being conscious of what influence tactics one uses and what effects are typically associated with each tactic. Knowledge of such effects can help a leader make better decisions about her or his manner of influencing others. It might also be helpful for leaders to think carefully about why they believe a particular influence tactic will be effective. Research indicates that some reasons for selecting among various possible influence tactics lead to successful outcomes more frequently than others. Specifically, thinking an act would improve an employee’s self-esteem or morale was frequently associated with successful influence attempts. On the other hand, choosing an influence tactic because it followed company policy and choosing one because it was a way to put a subordinate in his place were frequently mentioned as reasons for unsuccessful influence attempts. In a nutshell, these results suggest that leaders should pay attention not only to the actual influence tactics they use—to <i>how</i> they are influencing others—but also to <i>why</i> they believe such methods are called for. It is perhaps obvious that influence efforts intended to build others up more frequently lead to positive outcomes than influence efforts intended to put others down. By carefully considering the rationale behind different influence tactics, leaders may be able to avoid using pressure and legitimizing tactics and find better ways to influence followers. Being able to use influence tactics that modify followers’ attitudes and behaviors in the desired direction while they build up followers’ self- esteem and self-confidence is a skill all leaders should strive to master.</p>
                      <div class="highlight-box">
                          <h4>Nelson Mandela: The Master of Political Influence</h4>
                          <p><b>HIGHLIGHT 4.7</b></p>
                          <p><i>Invictus</i> is both the title of the cited poem that provided inspiration to Nelson Mandela during his 27-year imprisonment for fighting apartheid and also became the title of the 2009 Clint Eastwood movie. This film takes us from Mandela’s 1994 election through South Africa’s World Cup journey the following year. The poem becomes the central inspirational gift from Mandela (played by Morgan Freeman) to Springbok rugby team captain François Pienaar (played by Matt Damon).</p>
                          <p><b>Invictus</b></p>
                          <p><b>William Ernest Henley</b></p>
                          <ul class="ul-block">
                              <li>Out of the night that covers me,<br></br>Black as the pit from pole to pole,<br></br>I thank whatever gods may be<br></br>For my unconquerable soul.</li>
                              <br></br>
                              <li>In the fell clutch of circumstance<br></br>I have not winced nor cried aloud.<br></br>Under the bludgeonings of chance<br></br>My head is bloody, but unbowed.</li>
                              <br></br>
                              <li>Beyond this place of wrath and tears<br></br>Looms but the Horror of the shade,<br></br>And yet the menace of the years<br></br>Finds and shall find me unafraid</li>
                              <br></br>
                              <li>It matters not how strait the gate,<br></br>How charged with punishments the scroll,<br></br>I am the master of my fate:<br></br>I am the captain of my soul.</li>
                          </ul>
                          <p>Rugby was more than just a game in South Africa; it was a preoccupation. Mandela had won the election as the African National Congress’s (ANC) first black president. With that position came power, but Mandela knew that his political victory was tenuous. Even though the ANC dominated Parliament, whites still controlled the economy. And it was the country’s history of white- dominated apartheid that had resulted in the national rugby team’s exclusion from international sports competitions.</p>
                          <p>Against the advice of his supporters among the ANC, Mandela fought to retain the Springbok name and their beloved green and gold jerseys. Mandela recognized that this was a reminder of decades of oppression to the now black majority, but he also knew that white extremist Afrikaners posed a continuing threat. Their ongoing resistance to a black-dominated government could plunge the fragile government into anarchy and insurrection. Power would not work—but influence might.</p>
                          <p>The movie, based upon John Carlin’s book <i>Playing the Enemy: Nelson Mandela and the Game That Made a Nation</i>, takes us through a moving scene where Mandela exhibits his dramatic ability to influence the struggling rugby team. Taking the team to visit Robben Island where he had been imprisoned for 17 years, Mandela recites <i>Invictus</i> as Pienaar and the team imagines the struggles of Mandela and his fellow prisoners. The underdog Springboks rallied to win the Rugby World Cup, hosted by South Africa in 1995. But, as noted by Arlene Getz, “[I]t was South Africa’s good fortune that Mandela opted for reconciliation over retribution.” It was also South Africa’s good fortune that Nelson Mandela was a master of influence.</p>
                      </div>                        

                      <button 
                          onClick={() => setShowQuestions(true)}
                          className="show-questions-btn"
                          style={{ display: showQuestions ? 'none' : 'block' }}
                          >
                          Show Questions
                          </button>
                      {showQuestions && (
                          <form ref={form} onSubmit={redirectBack}>
                              <label><strong>Question 1: </strong>Name one of the nine influence tactics mentioned in this passage.</label><br></br>
                              <input type="text" name="q1"></input><br></br><br></br>
                              <label><strong>Question 2: </strong>Are female managers more likely than male managers to compromise or negotiate during influence attempts?</label><br></br>
                              <input type="text" name="q2"></input><br></br><br></br>
                              <label><strong>Question 3: </strong>What else is needed to produce good results other than choosing the right influence tactic?</label><br></br>
                              <input type="text" name="q3"></input><br></br><br></br>

                              <input type="submit" value="Submit Answers"/>
                              <br></br><br></br>
                          </form>
                      )}
                  </div>
              </div>
          </body>
      </div>
    );
};

export default DarkMode;
