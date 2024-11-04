import React, {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import parser from 'html-react-parser'

const passage3 = () => {
  
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
                        <h2>White Horse Dialogue</h2>
                        <p>Courtesy of Wikipedia: <a href="https://en.wikipedia.org/wiki/White_Horse_Dialogue">White Horse Dialogue</a></p>
                        <br></br>
                        <p>The White Horse Dialogue in Chinese philosophy is a debate between two unnamed speakers on a proposition often translated as 'a white horse is not a horse'. It appears in the Warring States period text Gongsun Longzi attributed to Gongsun Long, grouped under the philosophical School of Names in later taxonomies.</p>
                        <p>The dialogue constitutes a chapter of the eponymous Gongsun Longzi. The purported author, also known as "Master Gongsun Long" (fl. 284–259 BCE), was counted by later scholars among the School of Names in the Hundred Schools of Thought. Most of Gongsun's writings have been lost; the received Gongsun Longzi text contains only six of the recorded fourteen original chapters. Parts of the dialogue are dislocated and a small number of words are theorized to have been lost early in the text's transmission history. Thus, some commentators and translators rearrange some sentences for clarity. The dialogue is between two unnamed speakers:</p>
                        <ul style="list-style: none;">
                            <li>Is "a white horse is not a horse" assertible?</li>
                            <li>Advocate: It is.</li>
                            <li>Objector: How?</li>
                            <li>Advocate: "Horse" is that by means of which one names the shape. "White" is that by means of which one names the color. What names the color is not what names the shape. Hence, one may say "white horse is not horse."</li>
                            <li>Objector: If there are white horses, one cannot say that there are no horses. If one cannot say that there are no horses, doesn't that mean that there are horses? For there to be white horses is for there to be horses. How could it be that the white ones are not horses?</li>
                            <li>Advocate: If one wants horses, that extends to yellow or black horses. But if one wants white horses, that does not extend to yellow or black horses. Suppose that white horses were horses. Then what one wants [in the two cases] would be the same. If what one wants were the same, then 'white' would not differ from 'horse.' If what one wants does not differ, then how is it that yellow or black horses are acceptable in one case and unacceptable in the other case? It is clear that acceptable and unacceptable are mutually contrary. Hence, yellow and black horses are the same, one can respond that there are horses, but one cannot respond that there are white horses. Thus, it is evident that white horses are not horses.</li>
                        </ul>
                        <p>This dialogue continues with deliberations over colored and colorless horses and whether white and horse can be separated from white horse.</p>
                        <p>Other Gongsun Longzi chapters discuss "white horse"-related concepts of: jian 'hard; hardness', and bai 'white; whiteness', ming 'name; term', shi 'solid; true, actual; fact, reality', the abstract zhi 'finger; pointing; designation; universal' (like "whiteness"), and the concrete wu 'thing; object; particular' (like "a white horse").</p>
                        <p>A common misunderstanding is that this paradox arises due to the lack of articles in the Chinese language. However, it is not exclusively associated with Chinese and can emerge in other languages as well. While the absence of articles in Chinese can make the interpretation of phrases more challenging, this paradox serves as an entry point for more profound philosophical explorations rather than being a straightforward result of Chinese grammar. Essentially, this paradox explores the ways in which human categorize and conceptualize "things" in minds and through language. The fact that all white horses are indeed horses does not imply that the term "horses" refers exclusively to white horses (it also includes horses of other colors, such as brown and black.). This paradox emphasizes the importance of the precision required in the language use and reveals how the complexity of language can lead to unexpected confusions.</p>
                        <p>According to A. C. Graham,[4] this "A white horse is not a horse" paradox plays upon the ambiguity of whether the 'is' in the statement means:</p>
                        <ol>
                            <li>"Is a member of the class x"; or</li>
                            <li>"Is identical to x".</li>
                        </ol>
                        <p>In other words, the expression "white horse is not horse" is ambiguous between "white horse is not synonymous with horse" (true because white horse is more specific than horse), versus "a white horse is not a member of the set of horses" (obviously false). The Advocate in the dialogue is asserting a lack of identity between horses and white horses, while the Objector is interpreting the Advocate's statement as a claim that the category of horses does not include white ones.</p>
                        <p>Beyond the inherent semantic ambiguities of "A white horse is not a horse," the first line of the White Horse Dialogue obscurely asks 'Can it be that ...?'. This dialogue could be an attempted proof that a white horse is not a horse, or a question if such a statement is possible, or both. Bryan W. Van Norden suggests that "the Advocate is only arguing that 'a white horse is not a horse' could be true, given a certain interpretation. He might acknowledge that, in another interpretation, 'a white horse is a horse.'"</p>
                        <p>An alternative interpretation is offered in Feng Youlan's A History of Chinese Philosophy:</p>
                        <ul style="list-style: none;">
                            <li>Strictly speaking, names or terms are divided into those that are abstract and those that are concrete. The abstract term denotes the universal, the concrete term the particular. The particular is the denotation, and the universal the connotation, of the term. In western inflected languages there is no difficulty in distinguishing between the particular ('white' or 'horse') and the abstract ('whiteness' or 'horseness'). In Chinese, however, as the written characters are ideographic and pictorial and lack all inflection, there is no possible way, as far as the form of individual words is concerned, of distinguishing between abstract and concrete terms. Thus in Chinese the word designating a particular horse and that designating the universal, 'horseness,' are written and pronounced in the same way. Similarly with other terms, so that such words as 'horse' and 'white', being used to designate both the concrete particular and the abstract universal, thus hold two values.</li>
                        </ul>
                        <p>However, there are recent histories of Chinese philosophy that do not subscribe to Feng's interpretation. Other contemporary philosophers and sinologists who have analyzed the dialogue include A. C. Graham, Chad Hansen, Cristoph Harbsmeier, Kirill Ole Thompson, and Bryan W. Van Norden.</p>

                        <form ref={form} onSubmit={redirectBack}>
                            <label><strong>Question 1: </strong>What is commonly misunderstood as the cause of this paradox?</label><br></br>
                            <input type="text" name="q1"></input><br></br><br></br>
                            <label><strong>Question 2: </strong>Are abstract terms easily differentiable from concrete terms in Western languages or in Chinese?</label><br></br>
                            <input type="text" name="q2"></input><br></br><br></br>
                            <label><strong>Question 3: </strong>Do you think a white horse is a horse?</label><br></br>
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

export default passage3