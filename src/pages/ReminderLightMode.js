import React, {useState, useEffect, useRef} from "react"
import {useParams, useNavigate} from "react-router-dom"
import "../styles/LightMode.css"
import ReminderComponent from '../components/ReminderComponent';

const ReminderLightMode = () => {
  const navigate = useNavigate()
  const form = useRef()

  const [showQuestions, setShowQuestions] = useState(false);

  const redirectBack = (e) => {
    e.preventDefault()
    navigate('/')
  }
    return(
        <>
            <ReminderComponent bgColor="white"/>
            <div className = "light-mode">
                <body>
                        <div class="site">
                            <div id="page">
                                <h1>Light Mode With Reminders</h1>
                                <br></br>
                                <p>Please read the following passage. When you have finished reading, please click on the button to reveal three questions; type your answer in the provided boxes.</p>
                                <br></br>
                                <h1>Motivation, Satisfaction, and Performance</h1>
                                <p>Hughes, R., Ginnett, R., & Curphy, G. (2015). Leadership: Enhancing the Lessons of Experience. Chapter 9.</p>
                                <br></br>
                                
                                <h2>Defining Motivation, Satisfaction, and Performance</h2>
                                <p>Motivation, satisfaction, and performance seem clearly related. For example, Colin Powell was the U.S. Army Chief of Staff during the first Gulf War and Secretary of State during the second Gulf War. Powell probably could have pursued a number of different vocations but was <i>motivated</i> to complete ROTC as an undergraduate and join the U.S. Army. He was also motivated to put in extra time, energy, and effort in his various positions while in the U.S. Army and was judged or rated by his superiors as being an exceptional performer. His outstanding <i>performance</i> as an officer was crucial to his promotion as the head of the Joint Chiefs of Staff during the Reagan and George H. W. Bush administrations and his later appointment as Secretary of State. We could also infer that he was happy or <i>satisfied</i> with military life because he was a career officer in the U.S. Army.</p>
                                <p>Most people probably think of motivation as dealing with choices about what we do and how much effort we put into doing it. Most researchers define <b>motivation</b> as anything that provides <i>direction</i>, <i>intensity</i>, and <i>persistence</i> to behavior. Thus motivation comes into play whenever someone chooses an activity or task to engage in, puts forth a certain level of effort toward this activity, and persists with this effort for some time. Like personality traits and types, motivation is not directly observable; it must be inferred from behavior. We would infer that one person is highly motivated to do well in school if she spent a lot of time studying for exams. She could choose to spend her time and energy on socializing, intramurals, or volunteer work, but because she is spending time outlining readings and reviewing class notes, we say she is motivated to do well in school. At work, if one person regularly assembles twice as many iPads as any other person in his work group—assuming all have the same abilities, skills, and resources—then we likely would say this first person is more motivated than the others. We use the concept of motivation to explain differences we see among people in the energy and direction of their behavior. Thus the energy and effort Ang Lee expended creating <i>Life of Pi</i> or the governments of Iran and North Korea spend developing their nuclear capabilities would be examples of the direction, intensity, and persistence components of motivation.</p>
                                <p><b>Performance</b>, on the other hand, concerns behaviors directed toward the organization’s mission or goals or the products and services resulting from those behaviors. At work or school we can choose to perform a wide variety of behaviors, but performance would include only those behaviors related to the production of goods or services or obtaining good grades. Performance differs from <b>effectiveness</b>, which generally involves making judgments about the adequacy of behavior with respect to certain criteria such as work group or organizational goals. Ang Lee spent several years creating the movie <i>Life of Pi</i>. The behaviors he exhibited in getting the film made constitute performance; the revenues generated and Academy Awards won by the movie indicate his effectiveness as a movie director. However, performance is affected by a variety of factors. Intelligence, skill, and the availability of key resources can affect a follower’s behavior in accomplishing organizational goals (that is, performance) indepen dently of that person’s level of motivation. <i>Thus an adequate level of motiva tion may be a necessary but insufficient condition of effective performance</i>.</p>
                                <p><b>Job satisfaction</b> is not how <i>hard</i> one works or how <i>well</i> one works, but rather how much one <i>likes</i> a specific kind of job or work activity. Job satisfaction deals with one’s attitudes or feelings about the job itself, pay, promotion or educational opportunities, supervision, co-workers, workload, and so on. Various polls over the past half-century have consistently shown that a majority of men and women report liking their jobs. Research has also shown that people who are more satisfied with their jobs are more likely to engage in <b>organizational citizenship behaviors</b>— behaviors not directly related to one’s job but helpful to others at work. Organizational citizenship behaviors create a more supportive workplace. Examples might include volunteering to help another employee with a task or project or filling in for another employee when asked. Happier workers tend to be more helpful workers.</p>
                                <p>Although people generally like the work they do, several events have caused a downturn in job satisfaction levels among employees in the United States over the past decade. From roughly 2002 to 2007 the United States enjoyed strong economic growth, and companies rapidly expanded the products and services they provided. Because it took time to hire and train employees to meet increased demand, those already employed had to cope with larger workloads. This period also saw a tremendous amount of consolidation (companies buying one another) and reorganization (restructuring functions, processes, and personnel) to better meet increased demand. Change was an overarching theme from 2002 to 2007, and leaders and followers were constantly devising new ways to deliver products and services to customers. This continuing cycle of consolidation, reorganization, and change made it difficult for employees to develop any loyalty for their organizations—they never knew if their work unit was going to be sold or merged with another work unit. This period, perhaps more than most, broke the implicit contract between employers and employees. Before 2002 many employees felt if they worked hard they could spend their entire careers at a single company. But after all the acquisitions, downsizings, and restructurings many employees developed more of a mercenary attitude toward employers. If they worked for a company that did not treat them well, had a bad boss, or did not get the pay or promotions they felt they deserved, they would find a position with another employer. And with the economy enjoying strong growth, there were plenty of opportunities for people to find other employment.</p>
                                <p>Although people were working longer hours and coping with more change than ever before, most people found 2002 to 2007 to be a cakewalk compared to what they experienced during the economic recession of 2008 to 2010. The global recession caused companies to freeze hiring and training programs and lay off record numbers of employees. The unemployment rate in the United States increased from 5 to over 10 percent, and many people went months or even years without finding meaningful work. Those lucky enough to remain employed wound up doing more than they did before with fewer resources and lower pay. Employees generally felt lucky to have a job and were not apt to complain (for fear of losing their jobs), but many were frustrated with their employers. This increased workload and sense of frustration cut job satisfaction to record lows, and a big question was whether the best and brightest employees were leaving for other opportunities once the economy started picking up. Companies can ill afford to lose their best people just when their fortunes are improving, so many have implemented programs to retain their high-potential talent.</p>
                                <p>Today many leaders face the dual challenges of having to achieve increasingly difficult team goals while having fewer followers available to do the work. The best leaders and organizations understand that one way to meet these challenges is to recruit, develop, and retain top leadership and technical talent. Savvy companies that spend considerably more time and effort attract ing, developing, and retaining the best people often report superior financial results. For example, many of the organizations appearing in <i>Fortune</i> magazine’s “The 100 Best Companies to Work For” also do well when compared to the S&P 500 Index. <i>The best leaders may be those who can motivate work ers to perform at a high level while maintaining an equally high level of job satisfaction</i>. See Highlight 9.1 for a discussion of productivity and job satisfaction.</p>
                                <div class="highlight-box">
                                    <h4>Productivity and Satisfaction across the Globe</h4>
                                    <p><b>HIGHLIGHT 9.1</b></p>
                                    <p>The global recession has caused American and European businesses to downsize considerably, but many have been able to maintain customer satisfaction and revenue levels with fewer employees. In terms of the number of hours worked, the average U.S. employee works 137 hours per year more than the typical Japanese employee, 260 hours more per year compared to the average British employee, and 499 hours more than the average French employee. In other words, over a 40-year work career, U.S. employees will work the equivalent of 10 more years than the average French employee. The work ethic of the French has been mocked by outsiders for years and is seen as a significant barrier to the country’s ability to compete in the global marketplace. American companies are noted for having some of the highest productivity in the world, but might there also be a downside to these high productivity levels? Research has shown that some of the risks associated with longer workweeks include job dissatisfaction, poorer physical and mental health, and distressed family and social relationships. But other research by Chamorro-Premuzic shows that workaholics have higher social status, high achievers live longer, and the ten most workaholic nations produce most of the world’s gross domestic product. Chamorro-Premuzic argues that many employees have become self-indulgent, pampered, and so enthralled with the pursuit of well-being that they have forgotten the value of hard work and achievement. He believes the pursuit of work–life balance is a myth perpetrated by positive psychologists and self-help gurus trying to make people feel good about their failures and inability to achieve things. People who put in long hours and hate their jobs are likely to suffer all the negative effects identified earlier. Those who are engaged, have fun at work, and view their current positions as part of a career path versus a job do not suffer these ill effects and end up being much more successful.</p>
                                </div>
                                <p>Having now defined motivation, performance, and job satisfaction, we can explore their relationships a bit further. We have already noted how motivation does not always ensure good performance. If followers lack the necessary skills or resources to accomplish a group task, then trying to motivate them more could be unproductive and even frustrating. For example, no high school basketball team is likely to defeat the Los Angeles Lakers, however motivated the players may be. The players on the high school team simply lack the abilities and skills of the Lakers players. Higher motivation will usually affect performance only if followers already have the abilities, skills, and resources to get the job done. Motivating others is an important part of leadership, but not all of it; pep talks and rewards are not always enough.</p>
                                <p>The relationships between motivation and job satisfaction are more straightforward; in fact many theories of motivation are also theories of job satisfaction. The implicit link between satisfaction and motivation is that satisfaction increases when people accomplish a task, particularly when the task requires a lot of effort. It might also seem logical that <i>performance</i> must be higher among more satisfied workers, but this is not always so. Although satisfaction and performance are correlated, happy workers are not always the most productive ones; nor are unhappy or dissatisfied workers always the poorest performers. It is possible, for example, for poorly performing workers to be fairly satisfied with their jobs (maybe because they are paid well but do not have to work hard). It is also possible for dissatisfied workers to be relatively high performers (they may have a strong work ethic, have no other employment options, or be trying to improve the chances of getting out of their current job). Despite the intuitive appeal of believing that satisfied workers usually perform better, satisfaction has only an indirect effect on performance. Nevertheless, having both satisfied <i>and</i> high-performing followers is a goal leaders should usually strive to achieve. One example of a high performer is featured in Profiles in Leadership 9.1.</p>
                                <div class="highlight-box">
                                    <h4>Ping Fu</h4>
                                    <p><b>PROFILES IN LEADERSHIP 9.1</b></p>
                                    <p>Ping Fu is the Chinese-born cofounder and CEO of Geomagic, a company that provides 3D imaging used in engineering, art, archeology, metrology, and biomechanical product design. Started in 1997, Geomagic’s technology is used in the creation of customized prosthetic limbs, and if you wore braces growing up they may have been designed with the help of Geomagic technology.</p>
                                    <p>Ping Fu’s journey to becoming a corporate CEO is far from typical. She grew up in Shanghai in the home of two well-educated parents. At the age of eight she was listed as a “black” citizen—someone who had to atone for the greed and corruption committed by her parents and ancestors when Mao’s cultural revolution swept the country. She spent the next years separated from her parents, working 14 hour days in a factory, foraging for scraps, and tending to her little sister between shifts. When the Cultural Revolution ended she enrolled in school and eventually wrote her dissertation on China’s one-child policy, where she found that the government’s use of brutal enforcement techniques was causing shockingly high rates of infanticide. Her dissertation was leaked to the press, and its wide publication was a major embarrassment to the Chinese government. In 1984 China quietly deported Ping Fu to the United States.</p>
                                    <p>Ping Fu learned English and computer programming while working as a babysitter, maid, and waitress. She eventually landed a job with the National Center for Supercomputing Applications (NCSA) where she worked on earthquake prediction modeling and 3D imaging. In 1997 she made a New Year’s resolution to “create something of value” and left the NCSA to start up Geomagic. In early 2013 she sold the company to 3D Systems, a 3D printing company, for $55 million.</p>
                                </div>
                                <h3>Understanding and Influencing Follower Motivation</h3>
                                <p>What do leaders do to motivate followers to accomplish group goals? Are all leaders and followers motivated the same way? Is there a universal theory of motivation? In other words, did Osama bin Laden and General David Petraeus, one time commander of U.S. forces in Afghanistan, use the same or different techniques to motivate their followers? As described in Highlight 9.2, organizations spend billions on motivating employees; but do these interventions actually improve job satisfaction, retention, and performance? Research can answer these questions, and few topics of human behavior have been the subject of so much attention as that of motivation. So much has been written about motivation that a comprehensive review of the subject is beyond the scope of this book. We will, however, survey several major approaches to understanding follower motivation, as well as address the implications of these approaches for follower satisfaction and performance. These motivational theories and approaches give leaders a number of suggestions to get followers to engage in and persist with different behaviors. However, some motivational theories are particularly useful in certain situations but not as applicable in others. Just as a carpenter can build better wooden structures or furniture by having a larger set of tools, so can leaders solve a greater number of motivational problems among followers by becoming familiar with different motivational theories and approaches. People who have only hammers in their toolkits are likely to see every problem as a nail needing hammering, and it is not unusual for less effective leaders to call on a limited number of approaches to any motivational problem. <i>Leaders who know about different motivational theories are more likely to choose the right theory for a particular follower and situation, and often have higher-performing and more satisfied employees as a result</i>.</p>
                                <div class="highlight-box">
                                    <h4>Organizations Spend Billions on Motivational Programs for Employees, and All They Get Are Burned Feet</h4>
                                    <p><b>HIGHLIGHT 9.2</b></p>
                                    <p>Organizations are constantly looking for quick fixes for their performance and effectiveness problems. The barriers to team or organizational performance often include a lack of resources and skills, unclear goals, poor performance or accountability standards, or incompetent leadership. But rather than adopting methods to directly address these issues, many organizations instead have employees listen to motivational speakers or engage in whitewater rafting, bungee jumping, or firewalking events. The motivational speaking circuit includes former professional athletes, astronauts, fighter pilots, and military generals, successful and failed business leaders, politicians, psychologists, and consultants. Motivational speaking engagements can be lucrative—one of the authors worked with a speaker who gave one speech in Las Vegas at lunch and the same speech that evening in Minneapolis and made $150,000 for the day. The author also has worked with a group of ex-fighter pilots who do half-day “Business Is Combat” seminars for $30,000 to $75,000.</p>
                                    <p>Companies think nothing of spending like this to motivate employees. For example, the software consulting firm EMC has spent $625,000 to have 5,000 employees walk over burning coals. But do expensive speakers and extreme activities actually improve organizational performance? Unfortunately exhaustive research has shown virtually no link between motivational spending and company revenues, profitability, or market share. Perhaps the biggest problem is that employees may find it difficult to see the link between walking over a bed of hot coals or participating in a Business Is Combat mission planning event and making another 20 sales calls every week. The problem is that these events do not address the root cause of many organizational woes but instead covertly shift the burden to “underperforming” employees. Other than bankrolling the motivation industry, these programs have another effect: nine U.S. Air Force recruiters had to go to the emergency room after they received second- and third-degree burns on their feet after one of these motivational programs.</p>
                                </div>
                                <p>Most performance problems can be attributed to unclear expectations, skill deficits, resource/equipment shortages, or a lack of motivation. Of these underlying causes, leaders seem to have the most difficulty in recognizing and rectifying motivation problems. An example might help to illustrate this point. A major airline was having serious problems with the customer service of its flight attendants. Passenger complaints were on the rise, and airplane loading (the average number of people per flight) was decreasing. The perceived lack of customer service was beginning to cost the airline market share and revenues; to fix the problem it decided to have all 10,000 flight attendants go through a two-day customer service training program. Unfortunately passenger complaints only got worse after the training. A thorough investigation of the underlying cause of the problem revealed that flight attendants knew what they were supposed to do, had all the skills necessary to perform the behaviors, and usually had the resources and equipment necessary to serve customers. The root cause was a lack of motivation to go the extra mile for customers. When asked what they found to be the most motivating aspect of being a flight attendant, most stated “time off.” In other words, the flight attendants were most motivated when they were not at work. (Because of work schedules, flight attendants typically get two weeks off per month.) Given that a strong union represented the flight attendants, how would you go about solving this dilemma? The next section will give you some ideas on how to resolve this and other motivation problems that you may face as a leader.</p>
                                <p>As stated earlier, leaders can use many different theories and approaches to motivate followers. In this section we will discuss the key aspects of some popular and useful approaches to understanding motivation in work or leadership contexts. Some may wonder why these motivational approaches were included and others excluded from this section, and sound arguments could be made for changing the motivational approaches described. Our intention is to provide a broad view of different motivational approaches and not be so comprehensive as to overwhelm readers. For illustrative purposes we will also discuss how leadership practitioners could apply these approaches to motivate two fictitious followers, Julie and Ling Ling. Julie is a 21-year-old ski lift operator in Banff, Alberta, Canada. Her primary job is to ensure that people get on and off her ski lift safely. She also does periodic equipment safety checks and maintains the lift lines and associated areas. Julie works from 8:30 a.m. to 5:00 p.m. five days a week, is paid a salary, and has a pass that allows her to ski for free whenever she is off work. Ling Ling is a 35-year-old real estate agent in Hong Kong. She works for an agency that locates and rents apartments for people on one- to three-year business assignments for various multinational companies. She works many evenings and weekends showing apartments, and she is paid a salary plus a commission for every apartment she rents. How the approaches could be used to motivate Julie and Ling Ling will be discussed periodically throughout this section.</p>
                                <h3>Maslow’s Hierarchy of Needs: How Does Context Affect Motivation?</h3>
                                <p>One way to get followers to engage in and persist with the behaviors needed to accomplish group goals is to appeal to their needs. <b>Needs</b> refer to internal states of tension or arousal, or uncomfortable states of deficiency people are motivated to change. Hunger would be a good example of a need: people are motivated to eat when they get hungry. Other needs might include the need to live in a safe and secure place, to belong to a group with common interests or social ties, or to do interesting and challenging work. If these needs were not being met, people would choose to engage in and persist with certain behaviors until they were satisfied. According to this motivational approach, leadership practitioners can get followers to engage in and persist with certain behaviors by correctly identifying and appeasing their needs.</p>
                                <p>According to Maslow, people are motivated by five basic types of needs. These include, from lowest in level to highest in level, the need to survive physiologically, the need for security, the need for affiliation with other people (that is, belongingness), the need for self-esteem, and the need for self-actualization. Maslow’s conceptualization of needs is usually represented by a triangle with the five levels of needs arranged in a <b>hierarchy of needs</b>. According to Maslow, any person’s behavior can be understood primarily as the effort directed to satisfy a particular level of need in the hierarchy. Which level happens to be motivating a person’s behavior at any time depends on whether lower needs in the hierarchy have been satisfied. According to Maslow, lower-level needs must be satisfied before the next-higher level becomes salient in motivating behavior.</p>
                                <p>Maslow believed higher-level needs like those for self-esteem or self-actualization would not become salient (even when unfulfilled) until lower needs were satisfied. Thus a practical implication of his theory is that leaders can motivate follower behavior only by taking account of a follower’s or team’s position on the needs hierarchy. Applying Maslow’s hierarchy to Julie, it might be inefficient to try to motivate our ski lift operator by appealing to how much pride she could take in a job well done (that is, to her self-esteem) if she was underdressed for weather conditions. If her boss wanted Julie to do more, she should first make sure that Julie’s physiological needs were met, that she worked and lived in a secure place, and that she had ample opportunities to socialize with other employees. Only after these lower needs had been met should the boss try to increase Julie’s self-esteem. Thus if leadership practitioners want to use Maslow’s hierarchy of needs to motivate employees to work harder, they need to determine where their followers are on the needs hierarchy and ensure that all lower-order needs are satisfied before appealing to their followers’ self-esteem or self-actualization needs. Leadership practitioners should watch for mismatches between their motivational efforts and followers’ <i>lowest</i> (on the hierarchy) unsatisfied needs.</p>
                                <p>How could you determine the needs of flight attendants, and what kind of program would you implement to improve customer service? Although Maslow’s theory provides some useful ideas on how to improve customer service, it has several limitations. For one thing, the theory does not make specific predictions about what an individual will do to satisfy a particular need. For example, if Ling Ling was trying to get her belongingness needs met, she might exert considerable effort to establish new friendships at work, try to make friends outside work, or join several professional or business associations. This lack of specificity and predictive power limits the practical applicability of Maslow’s theory in real-life settings. On the other hand, awareness of the general nature of the various sorts of basic human needs described in this theory seems fundamentally useful to leaders. Leaders will have a difficult time getting followers to maintain various work behaviors by emphasizing good relationships with co-workers or appealing to their sense of pride if the job pays only minimum wage and followers are having a difficult time making ends meet. A person may be reluctant to volunteer for a self-actualizing opportunity in support of a political campaign if such participation may risk that person’s financial security. Perhaps the greatest insight provided by this theory is that leadership practitioners may need to address some basic, fundamental areas before their attempts to get followers and teams to expend more effort on work-related behaviors will be successful.</p>
                                <p>Along these lines, it may be interesting to look at how Maslow’s hierarchy of needs could be applied to U.S. and European workers over the past 10 years. One could argue that during the economic growth years many workers were putting in long hours but operating at the esteem and self-actualization levels. However, during the U.S. and European recessions those who remained employed switched their focus to meeting their security needs. These individuals were working longer hours than ever before, but this was to ensure they had a job versus making a meaningful contribution or being fulfilled. And many of those who were not gainfully employed may have spent much of their time just trying to get food on the table (physiological needs). As the economy in these two regions recovers, it will be interesting to see if leaders will be able to convince followers that their lower-level needs will be met and get them to shift their focus to self-esteem and self-actualization needs.</p>

                                <button 
                                    onClick={() => setShowQuestions(true)}
                                    className="show-questions-btn"
                                    style={{ display: showQuestions ? 'none' : 'block' }}
                                    >
                                    Show Questions
                                </button>
                                {showQuestions && (
                                    <form ref={form} onSubmit={redirectBack}>
                                        <label><strong>Question 1: </strong>Are low-performing workers happy or unhappy?</label><br></br>
                                        <input type="text" name="q1"></input><br></br><br></br>
                                        <label><strong>Question 2: </strong>What is one cause that performance problems can be attributed to?</label><br></br>
                                        <input type="text" name="q2"></input><br></br><br></br>
                                        <label><strong>Question 3: </strong>Which need in Maslow's Hierarchy do you think you are trying to satisfy at your current stage in life?</label><br></br>
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
    )
  };
  
  export default ReminderLightMode;