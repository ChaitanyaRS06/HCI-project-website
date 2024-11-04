// DarkMode.js
import React, {useState} from "react";
import "./DarkMode.css"; // Import the CSS file with dark styling

const DarkMode = () => {
  const [answer, setAnswer] = useState("");

  const handleChange = (event) =>{
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Your answer: ${answer}');
    setAnswer("");
  };

  return (
    <div className="dark-mode">
      <h1>Welcome to Dark Mode</h1>
      <p>This page is permanently styled in dark mode.</p>

      <p>
        <p>
      To ground I-Test in likely developer needs, we focus our current
implementation on selected kinds of statements from open-source
projects. Based on our own programming experience, these kinds
of statements could benefit from inline testing. We described some
of these kinds of statements in Section 2.2, but we focus our im-
plementation on five of them: regexes, string manipulation, bit
manipulation, stream API usage, and collection handling code.
One challenge is to better understand the API that I-Test should
provide to support statement-level testing for the kinds of state-
ments that we focus on. To address this challenge, we collect ex-
amples of these kinds of statements from open-source, manually
inspect them, and iteratively refine our I-Test API. Specifically, we
first collect Java and Python projects from GitHub. Then, we filter
out projects that do not contain the kinds of statements that we
focus on. Lastly, we find examples from those that remain and we
use them to guide our API design. We next describe our example
collection process, and provide more details on the current API.
3.3.1 Example Collection Process. We are interested in target state-
ments that are in possibly complicated code blocks, such that the
target statement may be difficult to test directly with unit tests. (See
Section 1 for a discussion of the pitfalls of extracting individual
statements into methods or functions for the sole purpose of en-
abling unit testing.) We look for Java and Python statements with
regular expressions, as well as those that manipulate strings and
bits. We also look for statements that use the stream API in Java
and those that manipulate collections in Python.
</p>

We perform keyword search (such as “re.match” and “re.split”
for Python regular expressions) among the 100 top-starred Java and
Python projects on GitHub (a total of 200 projects). All keywords
that we use for each language and the number of matches that we
find are provided in the data package for this paper. We manually
inspect metadata for these projects and remove those that are about
tutorials, e.g., interview questions. We then use the remaining 83
Java projects and 91 Python projects. For each project that remains,
we select examples and manually inspect them for suitability to
help guide our API design.
To make our manual check easier, we make our keyword search
return five lines of leading and trailing context for each match. We
then manually check whether the matched lines are for the kinds
of target statements that we focus on. We filter out cases where
keywords only appear in comments or in which we deem the code
too simple to warrant an inline test, e.g., for keyword “split” we find
String[]errorMessageSplit= e.getMessage().split(” ”);. We
also filter out keyword searches that yield false positives. For exam-
ple, we search for  as the right shift operator in bit manipulation
but sometimes match the closing tag of a parameterized generic
      </p>

      {/*Question and Answer Section */}
      <form onSubmit={handleSubmit} className="questionform">
        <label htmlFor="answer">
          <strong>Question:</strong>how many hava and python project were tested ?
          
        </label>
        <input type="text" 
        id="answer"
        value={answer}
        onChange={handleChange}
        placeholder="Type your answer here"
        required>
        </input>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default DarkMode;
