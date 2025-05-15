const lectures = {
  "1.1": {
    title: "About the Course",
    html: `
      <div class="lecture-intro">
        <p>Welcome to the <code>"JavaScript for beginners"</code> course on ProgHUB. This comprehensive program is designed to take you from JavaScript basics to intermediate concepts through practical examples and hands-on exercises.</p>
        
        <div class="important-note">
          <h3>Course Guidelines</h3>
          <ul>
            <li><strong>Output precision:</strong> Your program's output must exactly match the sample output (including spaces, punctuation, and capitalization)</li>
            <li><strong>Attempts:</strong> After 5 unsuccessful tries, the solution forum will be unlocked</li>
            <li><strong>Scoring:</strong> Each programming task is worth 2 points, test questions are 1 point each</li>
          </ul>
        </div>
        
        <h3>What You'll Learn</h3>
        <ol>
          <li><strong>Fundamentals:</strong> Variables, data types, operators, and basic syntax</li>
          <li><strong>Control Structures:</strong> Conditionals and loops to control program flow</li>
          <li><strong>Functions:</strong> Reusable code blocks and parameter passing</li>
          <li><strong>Objects & Arrays:</strong> Working with complex data structures</li>
        </ol>
        
        <div class="next-button-container">
          <button class="next-step-btn" onclick="location.href='practice.html?topic=1.1'">Start Practice</button>
        </div>
      </div>
    `
  },
  "1.2": {
    title: "About JavaScript",
    html: `
      <div class="lecture-content">
        <h2>What is a Programming Language</h2>
        <p>Computers perform all operations using electrical signals that are converted into machine code - numbers in the binary system where 1 represents a signal and 0 represents its absence. Working with machine code is inconvenient and complex for humans, as even a single command requires writing hundreds of zeros and ones. This is why programming languages with intuitive commands were created.</p>
        
        <div class="key-points">
          <ul>
            <li><strong>A programming language</strong> is a way to communicate with computers.</li>
            <li>Each programming language has its own <strong>syntax</strong> - rules for writing commands. For example, the semicolon at the end of a line is a syntax feature.</li>
          </ul>
        </div>
        
        <h2>High-level and Low-level Programming Languages</h2>
        <div class="two-column">
          <div class="column">
            <h3>Low-level Languages</h3>
            <p>(e.g., assembly or machine code) provide more direct and complete control over computer hardware resources like memory, processor, and registers. These languages may be less convenient for programmers but offer more precise control over hardware.</p>
          </div>
          <div class="column">
            <h3>High-level Languages</h3>
            <p>(e.g., JavaScript, Java, Python) provide a more abstract and convenient way to write programs, hiding hardware details from programmers. This makes them easier to learn and use compared to low-level languages.</p>
          </div>
        </div>
        
        <h2>How Computers Read Code</h2>
        <p>For a command written in a high-level language to execute, it must be translated into computer-understandable language. This is done by <strong>compilers and interpreters</strong>, which work differently:</p>
        
        <div class="code-example">
          <h3>Interpreted Languages (JavaScript, Python)</h3>
          <p>Code is read line by line by an interpreter, which translates each line into machine code and executes it immediately.</p>
          
          <h3>Compiled Languages (C++, Go)</h3>
          <p>All code is first compiled into machine code before program execution, creating an executable file that the computer runs.</p>
        </div>
        
        <h1>How to Run JavaScript Code</h1>
        
        <h2>Using a Web Page</h2>
        <p>To run JavaScript in a web page, create an HTML file with &lt;script&gt; tags containing your JavaScript code.</p>
        
        <h2>Browser Console</h2>
        <p>The developer console is a browser tool for testing code:</p>
        <ol>
          <li>Open a browser (Chrome, Firefox, Edge)</li>
          <li>Open any webpage</li>
          <li>Press F12 (Cmd+Opt+J on Mac)</li>
          <li>Type JavaScript code at the <code>=&gt;</code> prompt and press Enter</li>
        </ol>
        <pre><code>console.log('Hello');  // Outputs: Hello</code></pre>
        
        <h2>Online Interpreters</h2>
        <p>Services that let you execute code online without local setup:</p>
        <ul>
          <li><a href="https://codepen.io/trending" target="_blank" style="color: #10b981">codepen.io</a></li>
          <li><a href="https://www.programiz.com/javascript/online-compiler/" target="_blank" style="color: #10b981">programiz</a></li>
          <li><a href="https://playcode.io/" target="_blank" style="color: #10b981">playcode</a></li>
        </ul>
        
        <h2>Using Node.js</h2>
        <p>Node.js is a JavaScript runtime that enables server-side development. Install it from <a href="https://nodejs.org" target="_blank "style="color: #10b981">nodejs.org</a>.</p>
        
        <div class="next-button-container">
          <button class="next-step-btn" onclick="location.href='practice.html?topic=1.2'">
            Practice JavaScript Basics
          </button>
        </div>
      </div>
    `
  },
  "2.1": {
    title: "Statements and Comments",
    html: `
      <div class="lecture-content">
        <h1>Statements</h1>
        <p>Statements are syntactic constructs or commands that perform specific actions.</p>
        
        <div class="code-example">
          <p><code>console.log("Hello")</code> → A familiar statement from previous modules that outputs "Hello".</p>
          <pre><code>// Each statement typically appears on a new line
console.log("to do:");
console.log("Learn JS");</code></pre>
          <p class="output">to do:<br>learn JS</p>
        </div>
        
        <div class="important-note">
          <h3>Semicolon Usage</h3>
          <p>While most modern browsers and JavaScript interpreters can automatically insert semicolons, it's recommended to include them explicitly to avoid ambiguity in your code.</p>
        </div>
        
        <h3>Multiple Values in console.log()</h3>
        <p>To output values separated by spaces, include them as comma-separated arguments:</p>
        <pre><code>console.log('to do:', 'learn JS');</code></pre>
        <p class="output">to do: learn JS</p>
        
        <p>You can also output results of mathematical operations:</p>
        <pre><code>console.log(4 + 6);</code></pre>
        <p class="output">10</p>
        
        <h1>Comments</h1>
        <p>Comments are not executed by the JavaScript interpreter and don't affect program execution. They're useful for explaining code logic or marking temporary solutions.</p>
        
        <div class="two-column">
          <div class="column">
            <h3>Single-line Comments</h3>
            <p>Begin with <code>//</code> and continue to the end of the line:</p>
            <pre><code>// This is a single-line comment
console.log("Hello"); // Outputs greeting</code></pre>
            <p>Commented code won't execute:</p>
            <pre><code>// console.log("This won't run");</code></pre>
          </div>
          <div class="column">
            <h3>Multi-line Comments</h3>
            <p>Begin with <code>/*</code> and end with <code>*/</code>:</p>
            <pre><code>/*
This is a multi-line comment.
It can span several lines.
Useful for documentation.
*/</code></pre>
            <p>Example from your image:</p>
            <pre><code>/*
This is a multi-line comment.

It can span multiple code lines.
*/</code></pre>
          </div>
        </div>
        
        <div class="next-button-container">
          <button class="next-step-btn" onclick="location.href='practice.html?topic=2.1'">
            Practice Statements and Comments
          </button>
        </div>
      </div>
    `
  },
  // Continue with other topics in similar format...
  "2.2": {
    title: "Variables",
    html: `
      <div class="lecture-content">
        <h2>Creating Variables</h2>
        <p>A variable is a named container that stores data in memory.</p>
        
        <div class="code-example">
          <h3>Declaration</h3>
          <pre><code>let age;      // Creates empty variable "age"
let name = "John"; // Declares + assigns value</code></pre>
          
          <div class="important-note">
            <p><strong>Note:</strong> <code>var</code> is deprecated (use <code>let</code> or <code>const</code>)</p>
          </div>
        </div>
        
        <h2>Assignment</h2>
        <p>The <code>=</code> operator assigns values (not the same as mathematical equality):</p>
        <pre><code>let score = 100; // Initial assignment
score = 200;    // Reassignment</code></pre>
        
        <div class="key-points">
          <h3>Key Rules:</h3>
          <ul>
            <li><strong>Cannot redeclare</strong> the same variable:
              <pre><code>let x = 5;<br>let x = 10; <span class="red-comment"><code>// Error!</code></span></code></pre>
            </li>
            <li><strong>Can reassign</strong> without <code>let</code>:
              <pre><code>let y = 5;<br>y = 10; // Works</code></pre>
            </li>
          </ul>
        </div>
        
        <h2>Working with Variables</h2>
        <pre><code>let a = 80;
let b = 100;
console.log(a, b); // Output: 80 100
console.log(a + b); // Output: 180</code></pre>
        
        <div class="important-note warning">
          <h3>Case Sensitivity</h3>
          <p><code>Name</code> and <code>name</code> are different variables!</p>
          <pre><code>let user = "Alice";
console.log(User); <span class="red-comment"><code>// Error</code></span>: Undefined</code></pre>
        </div>
        
        <h2>Copying Values</h2>
        <pre><code>let firstName = "John";
let lastName;
lastName = firstName; // Copies value
console.log(lastName); // Output: John</code></pre>
      </div>
      <div class="next-button-container">
          <button class="next-step-btn" onclick="location.href='practice.html?topic=2.2'">
            Practice Variables
          </button>
        </div>
      </div>
    `
  },
  "2.3": {
    title: "Data Types",
    html: `
      <div class="lecture-content">
        <p>Data types classify different kinds of information that computers can process and store. They determine what operations can be performed and how the computer should interpret the data.</p>
        
        <div class="two-column">
          <div class="column">
            <h2>Primitive Types</h2>
            <ul>
              <li><strong>String</strong> - Text values</li>
              <li><strong>Number</strong> - Numeric values</li>
              <li><strong>Boolean</strong> - true/false</li>
              <li><strong>null</strong> - Intentional empty value</li>
              <li><strong>undefined</strong> - Uninitialized value</li>
            </ul>
          </div>
          <div class="column">
            <h2>Composite Types</h2>
            <ul>
              <li>Objects</li>
              <li>Arrays</li>
              <li>(Will be covered later)</li>
            </ul>
          </div>
        </div>
        
        <h2>Core Primitive Types</h2>
        
        <h3>String</h3>
        <p>Represents text in quotes (single or double):</p>
        <pre><code>"Hello"  // String
'5'     // Also string (not a number)</code></pre>
        
        <h3>Number</h3>
        <p>Represents numeric values (integers and decimals):</p>
        <pre><code>10, 3.14, -5  // Numbers
"10" * 2   // Returns 20 (automatic conversion)
"xxx" * 2  // Returns NaN (Not a Number error)</code></pre>
        
        <div class="important-note">
          <h4>NaN Special Value</h4>
          <p>Represents computational errors from invalid math operations.</p>
        </div>
        
        <h3>Boolean</h3>
        <p>Only two values: <code>true</code> or <code>false</code></p>
        <pre><code>console.log(2 > 1);<span class="green-comment"><code>// true</code></span>
console.log(9 < 3);<span class="red-comment"><code>// false</code></span></code></pre>
        
        <h3>Undefined</h3>
        <p>Default value for uninitialized variables:</p>
        <pre><code>let num;
console.log(num);  // undefined</code></pre>
        
        <h3>Null</h3>
        <p>Explicit empty value assignment:</p>
        <pre><code>let age = null;  // Intentional empty value</code></pre>
        
        <h2>Dynamic Typing</h2>
        <div class="key-points">
          <p>JavaScript is <strong>dynamically typed</strong> - variables can be reassigned to different types:</p>
          <pre><code>let variable = "hello";  // String
variable = 155;        // Now a number (no error)</code></pre>
        </div>
      </div>
      <div class="next-button-container">
          <button class="next-step-btn" onclick="location.href='practice.html?topic=2.3'">
            Practice Data Types
          </button>
        </div>
      </div>
    `
  },
 
  "2.4": {
    title: "User Input",
    html: `
      <div class="lecture-content">
        <h2>Browser Environment</h2>
        <p>To request user input in this course, we'll use the <code>prompt()</code> function:</p>
        
        <div class="important-note">
          <p><strong>Important:</strong> All data from <code>prompt()</code> is initially <strong>String</strong> type.</p>
        </div>
        
        <h3>Basic Usage</h3>
        <pre><code>let username = prompt("What's your name?");</code></pre>
        <p>Shows a dialog asking "What's your name?". The entered value is stored in <code>username</code>.</p>
        
        <h3>Multiple Inputs</h3>
        <pre><code>const name = prompt("Your name:");
const age = prompt("Your age:");</code></pre>
        
        <h2>Numeric Input</h2>
        <p>Use <code>Number(prompt())</code> to convert input to a number:</p>
        <pre><code>const num = Number(prompt("Enter a number:"));</code></pre>
        
        <div class="warning-note">
          <h4>Critical Reminder</h4>
          <p>Always use <code>Number()</code> when you need numeric input!</p>
        </div>
        
        <h3>Multiple Numbers</h3>
        <pre><code>const x = Number(prompt("First number:"));
const y = Number(prompt("Second number:"));</code></pre>
        
        <h2>Node.js Environment</h2>
        <p>For Node.js, use the <code>readline</code> module:</p>
        <pre><code>const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Your name: ', name => {
  console.log(\`Hello \${name}\`);
  readline.close();
});</code></pre>
        
        <div class="next-button-container">
          <button class="next-step-btn" onclick="location.href='practice.html?topic=2.4'">
            Practice Input
          </button>
        </div>
      </div>
    `
  },

  "2.5": {
    title: "Mathematical Operations",
    html: `
      <div class="lecture-content">
        <p>Numbers can be manipulated using <strong>operators</strong> - symbols that perform operations on <strong>operands</strong> (the values being operated on).</p>
        
        <div class="example">
          <p>In <code>3 + 5</code>:</p>
          <ul>
            <li><code>3</code> and <code>5</code> are operands</li>
            <li><code>+</code> is the operator</li>
            <li>The expression <strong>returns</strong> the result (8)</li>
          </ul>
        </div>
        
        <h2>Core Mathematical Operators</h2>
        
        <div class="operator-grid">
          <div class="operator-card">
            <h3>Addition (+)</h3>
            <pre><code>console.log(2 + 3); // 5</code></pre>
          </div>
          <div class="operator-card">
            <h3>Subtraction (-)</h3>
            <pre><code>console.log(5 - 2); // 3</code></pre>
          </div>
          <div class="operator-card">
            <h3>Multiplication (*)</h3>
            <pre><code>console.log(3 * 4); // 12</code></pre>
          </div>
          <div class="operator-card">
            <h3>Division (/)</h3>
            <pre><code>console.log(10 / 2); // 5</code></pre>
          </div>
          <div class="operator-card">
            <h3>Exponentiation (**)</h3>
            <pre><code>let x = 2 ** 3; // 8
console.log(x);</code></pre>
          </div>
          <div class="operator-card">
            <h3>Modulus (%)</h3>
            <pre><code>console.log(19 % 5); // 4 (remainder)
console.log(10 % 3); // 1
console.log(2 % 3);  // 2</code></pre>
            <p>Returns division remainder</p>
          </div>
        </div>
        
        <div class="important-note">
          <h3>Order of Operations</h3>
          <p>JavaScript follows standard math precedence:</p>
          <ol>
            <li>Parentheses <code>()</code></li>
            <li>Exponents <code>**</code></li>
            <li>Multiplication/Division <code>* / %</code></li>
            <li>Addition/Subtraction <code>+ -</code></li>
          </ol>
          <pre><code>console.log(2 + 3 * 4);   // 14 (not 20)
console.log((2 + 3) * 4); // 20</code></pre>
        </div>
        
        <div class="next-button-container">
          <button class="next-step-btn" onclick="location.href='practice.html?topic=2.5'">
            Practice Math Operations
          </button>
        </div>
      </div>
    `
  }, 

  "2.6": {
    title: "Comparison Operators",
    html: `
      <div class="lecture-content">      
        <p>Comparison operators compare values and <em>return a boolean</em> (<code>true</code> or <code>false</code>):</p>
        
        <div class="operator-table">
          <table>
            <tr>
              <th>Operator</th>
              <th>Name</th>
              <th>Example</th>
              <th>Result</th>
            </tr>
            <tr>
              <td><code>></code></td>
              <td>Greater than</td>
              <td><code>5 > 3</code></td>
              <td><code>true</code></td>
            </tr>
            <tr>
              <td><code><</code></td>
              <td>Less than</td>
              <td><code>5 < 3</code></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td><code>>=</code></td>
              <td>Greater than or equal</td>
              <td><code>5 >= 5</code></td>
              <td><code>true</code></td>
            </tr>
            <tr>
              <td><code><=</code></td>
              <td>Less than or equal</td>
              <td><code>5 <= 3</code></td>
              <td><code>false</code></td>
            </tr>
          </table>
        </div>

        <h2>Storing Comparison Results</h2>
        <p>You can store comparison results in variables:</p>
        <pre><code>let x = 5;
let y = 10;
let isGreater = x > y; 
console.log(isGreater); <span class="red-comment"><code>// false</code></span></code></pre>

        <div class="important-note">
          <h3>Type Conversion in Comparisons</h3>
          <p>When comparing different types, JavaScript converts values to numbers:</p>
          <pre><code>console.log('10' > 5); <span class="green-comment"><code>// true</code></span> ('10' becomes 10)
console.log(true == 1); <span class="green-comment"><code>// true</code></span> (true becomes 1)</code></pre>
        </div>

        <h2>Operator Precedence</h2>
        <p>Comparison operators have <strong>lower precedence</strong> than arithmetic operators:</p>
        <pre><code>let result = 8 - 2 < 5 + 10;
// 1. 8 - 2 → 6
// 2. 5 + 10 → 15
// 3. 6 < 15 → true
console.log(result); <span class="green-comment"><code><span class="green-comment"><code>// true</code></span></code></span></code></pre>


        <div class="warning-note">
          <h3>Best Practice</h3>
          <p>Use parentheses for clarity in complex expressions:</p>
          <pre><code>let clearExample = (8 - 2) < (5 + 10); // Better readability</code></pre>
        </div>

         <h2>Type Conversion Rules</h2>
        <div class="type-conversion-examples">
          <pre><code>console.log(5 == "5");   <span class="green-comment"><code>// true</code></span> (string converted to number)
console.log(5 === "5");  <span class="red-comment"><code>// false</code></span></code> (different types)
console.log(true == 1);  <span class="green-comment"><code>// true</code></span> (boolean converted)
console.log(false === 0); <span class="red-comment"><code>// false</code></span></code> (different types)</code></pre>
        </div>

        <div class="important-note warning">
          <h3>Critical Difference</h3>
          <p><strong>==</strong> performs type coercion<br>
          <strong>===</strong> checks value AND type</p>
        </div>

        <h2>Operator Precedence</h2>
        <div class="precedence-example">
          <p>Comparison operators have lower priority than arithmetic:</p>
          <pre><code>let result = 5 + 4 === 7 <= 9;
// 1. 5 + 4 → 9
// 2. 7 <= 9 → true
// 3. 9 === true → false
console.log(result); <span class="red-comment"><code>// false</code></span></code></pre>
        </div>

        <div class="best-practice">
          <h3>Professional Recommendation</h3>
          <p>Always use <strong>===</strong> and <strong>!==</strong> to avoid unexpected type coercion:</p>
          <pre><code>// Recommended
if (age === 18) {...}

// Not recommended
if (age == 18) {...}</code></pre>
        </div>

        <div class="next-button-container">
          <button class="next-step-btn" onclick="location.href='practice.html?topic=2.6'">
            Practice Comparisons
          </button>
        </div>
      </div>
    `
  },
  "2.7": {
    title: "Logical Operators",
    html: `
      <div class="lecture-content">
        <div class="three-column">
          <div class="column">
            <h3>AND (<code>&&</code>)</h3>
            <p>True if both operands are true</p>
            <pre><code>true && true <span class="green-comment"><code>// true</code></span>
true && false <span class="red-comment"><code>// false</code></span></code></pre>
          </div>
          <div class="column">
            <h3>OR (<code>||</code>)</h3>
            <p>True if at least one operand is true</p>
            <pre><code>false || true <span class="green-comment"><code>// true</code></span>
false || false <span class="red-comment"><code>// false</code></span></code></pre>
          </div>
          <div class="column">
            <h3>NOT (<code>!</code>)</h3>
            <p>Inverts the boolean value</p>
            <pre><code>!true <span class="red-comment"><code>// false</code></span>
!false <span class="green-comment"><code>// true</code></span></code></pre>
          </div>
        </div>
        
        <h2>Practical Examples</h2>
        <pre><code>let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("Can drive");
}</code></pre>
      </div>
      <div class="next-button-container">
          <button class="next-step-btn" onclick="location.href='practice.html?topic=2.7'">
            Practice Logical Operators
          </button>
        </div>
      </div>
    `
  },

  "3.1": {
    title: "Conditional Statements - If",
    html: `
      <div class="lecture-content">
        <p>Imagine you need to grant website access <em>only if</em> users enter correct credentials, 
        or navigate to a section <em>only if</em> they click its title. This is where <strong>conditional statements</strong> come in.</p>
        
        <div class="definition-box">
          <p>Conditionals provide branching logic that executes code based on specified conditions.</p>
        </div>
        
        <h2>The <code>if</code> Statement</h2>
        
        <p>Executes a code block <em>only if</em> a specified condition is true (<code>true</code>):</p>
        
        <div class="syntax-block">
          <pre><code>if (condition) {
  // Code to execute if condition is true
}</code></pre>
        </div>
        
        <div class="important-note">
          <h3>How It Works</h3>
          <ol>
            <li>Evaluates the expression in parentheses</li>
            <li>Converts result to boolean (<code>true</code>/<code>false</code>)</li>
            <li>Executes code block <em>only</em> if <code>true</code></li>
          </ol>
        </div>
        
        <h3>Practical Examples</h3>
        
        <div class="example">
          <h4>Positive Number Check</h4>
          <pre><code>let number = 10;
if (number > 0) {
  console.log("Number is positive.");
}</code></pre>
          <p class="output">Number is positive.</p>
        </div>
        
        <div class="example">
          <h4>Age Verification</h4>
          <pre><code>let age = 17;
if (age >= 18) {
  console.log("You are an adult.");
}
console.log("Program complete.");</code></pre>
          <p class="output">Program complete.</p>
          <p class="explanation">(The <code>if</code> block doesn't execute because 17 >= 18 is <code>false</code>)</p>
        </div>
        
        <div class="key-points">
          <h3>Critical Details</h3>
          <ul>
            <li>Code <em>inside</em> curly braces <code>{}</code> is conditionally executed</li>
            <li>Code <em>after</em> the block always runs</li>
            <li>Conditions typically use comparison operators (<code>></code>, <code><</code>, <code>===</code>, etc.)</li>
          </ul>
        </div>
        
        <div class="next-button-container">
          <button class="next-step-btn" onclick="location.href='practice.html?topic=3.1'">
            Practice If Statements
          </button>
        </div>
      </div>
    `
  },

  "3.2": {
    title: "Conditional Statements - else and else if",
    html: `
      <div class="lecture-content">
        <div class="two-column">
          <div class="column">
            <h2>The <code>else</code> Statement</h2>
            <p>Provides an alternative code block that executes when the <code>if</code> condition is <code>false</code>:</p>
            
            <div class="syntax-block">
              <pre><code>if (condition) {
  // Executes if true
} else {
  // Executes if false
}</code></pre>
            </div>
            
            <h3>Age Check Example</h3>
            <pre><code>let age = 15;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Child");
}</code></pre>
            <p class="output">Child</p>
          </div>
          
          <div class="column">
            <h2>The <code>else if</code> Ladder</h2>
            <p>Tests multiple conditions sequentially:</p>
            
            <div class="syntax-block">
              <pre><code>if (condition1) {
  // Case 1
} else if (condition2) {
  // Case 2
} else {
  // Default case
}</code></pre>
            </div>
            
            <h3>Price Tier Example</h3>
            <pre><code>let price = 70;

if (price < 50) {
  console.log("Cheap");
} else if (price < 100) {
  console.log("Mid-range");
} else if (price < 200) {
  console.log("Expensive");
} else {
  console.log("Luxury");
}</code></pre>
            <p class="output">Mid-range</p>
          </div>
        </div>
        
        <div class="critical-warning">
          <h3>Common Mistake: Separate <code>if</code> Statements</h3>
          <pre><code>let price = 70;

if (price < 50) {
  console.log("Cheap");
}
if (price < 100) {  // Will ALSO check this
  console.log("Mid-range");
}
if (price < 200) {  // Will ALSO check this
  console.log("Expensive");
} else {
  console.log("Luxury");
}</code></pre>
          <p class="output">Mid-range<br>Expensive</p>
          <p>Unlike <code>else if</code>, separate <code>if</code> statements don't form an exclusive chain!</p>
        </div>
        
        <div class="key-points">
          <h3>Key Behavior</h3>
          <ul>
            <li><code>else</code> must follow an <code>if</code></li>
            <li><code>else if</code> checks are sequential - first match wins</li>
            <li>Only one block executes in an if-else-if chain</li>
            <li>The <code>else</code> block is optional</li>
          </ul>
        </div>
        
        <div class="next-button-container">
          <button class="next-step-btn" onclick="location.href='practice.html?topic=3.2'">
            Practice Conditional Logic
          </button>
        </div>
      </div>
    `
  },

  "3.3": {
    title: "Ternary Operator",
    html: `
      <div class="lecture-content">
        
        <p>A compact conditional expression that returns one of two values based on a condition:</p>
        
        <div class="syntax-block">
          <pre><code>condition ? valueIfTrue : valueIfFalse</code></pre>
        </div>
        
        <div class="definition-box">
          <h3>Why "Ternary"?</h3>
          <p>It's the only JavaScript operator that takes <strong>three operands</strong>:
          <ol>
            <li>Condition to test</li>
            <li>Value returned if true</li>
            <li>Value returned if false</li>
          </ol>
          </p>
        </div>
        
        <h2>Basic Example</h2>
        <div class="example">
          <pre><code>let totalRevenue = 100000;
let status = (totalRevenue > 0) ? "Profit" : "Loss";
console.log(status);</code></pre>
          <p class="output">Profit</p>
        </div>
        
        <div class="comparison">
          <div class="two-column">
            <div class="column">
              <h3>Ternary Version</h3>
              <pre><code>let access = (age >= 18) 
  ? "Granted" 
  : "Denied";</code></pre>
            </div>
            <div class="column">
              <h3>Equivalent If-Else</h3>
              <pre><code>let access;
if (age >= 18) {
  access = "Granted";
} else {
  access = "Denied";
}</code></pre>
            </div>
          </div>
        </div>
        
        <div class="best-practices">
          <h3>Professional Tips</h3>
          <ul>
            <li><strong>Parentheses</strong>: Wrap conditions for clarity <code>(x > y)</code></li>
            <li><strong>Line breaks</strong>: Use for long expressions (as shown above)</li>
            <li><strong>Simple cases only</strong>: Avoid complex logic in ternaries</li>
          </ul>
        </div>
        
        <div class="warning-note">
          <h3>When NOT to Use</h3>
          <p>Ternary isn't ideal when:
          <ul>
            <li>You need to execute multiple statements</li>
            <li>The logic becomes hard to read</li>
            <li>You need <code>else if</code> conditions</li>
          </ul>
          </p>
        </div>
        
        <div class="next-button-container">
          <button class="next-step-btn" onclick="location.href='practice.html?topic=3.3'">
            Practice Ternary Operator
          </button>
        </div>
      </div>
    `
  },

  "3.4": {
    title: "Nested Conditions",
    html: `
      <div class="lecture-content">
        <div class="definition-box">
          <p>Nesting means placing one construct inside another. In programming, this allows creating complex logical checks where each condition may have its own sub-conditions.</p>
        </div>
        
        <h2>Basic Example</h2>
        <div class="example">
          <pre><code>let age = 25;
let hasLicense = true;

// Outer condition
if (age >= 18) {
  console.log("You are an adult.");
  
  // Nested condition
  if (hasLicense === true) {
    console.log("You have a driver's license.");
  } else {
    console.log("You don't have a license.");
  }
  
} else {
  console.log("You are a minor.");
}</code></pre>
          <p class="output">You are an adult.<br>You have a driver's license.</p>
        </div>
        
        <div class="visual-guide">
          <h3>Execution Flow</h3>
          <div class="flowchart">
            <div class="flow-step">Start</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-condition">age >= 18?</div>
            <div class="flow-branches">
              <div class="flow-branch">
                <div class="flow-true">True</div>
                <div class="flow-arrow">↓</div>
                <div class="flow-action">Print "Adult"</div>
                <div class="flow-arrow">↓</div>
                <div class="flow-condition">hasLicense?</div>
                <div class="flow-branches">
                  <div class="flow-branch">
                    <div class="flow-true">True</div>
                    <div class="flow-arrow">↓</div>
                    <div class="flow-action">Print "Has license"</div>
                  </div>
                  <div class="flow-branch">
                    <div class="flow-false">False</div>
                    <div class="flow-arrow">↓</div>
                    <div class="flow-action">Print "No license"</div>
                  </div>
                </div>
              </div>
              <div class="flow-branch">
                <div class="flow-false">False</div>
                <div class="flow-arrow">↓</div>
                <div class="flow-action">Print "Minor"</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="best-practices">
          <h3>Professional Recommendations</h3>
          <ul>
            <li><strong>Limit nesting depth</strong> - Avoid more than 2-3 levels</li>
            <li><strong>Use logical operators</strong> when possible:
              <pre><code>if (age >= 18 && hasLicense) {...}</code></pre>
            </li>
            <li><strong>Consider switch statements</strong> for multiple conditions</li>
            <li><strong>Proper indentation</strong> is crucial for readability</li>
          </ul>
        </div>
        
        <div class="warning-note">
          <h3>Code Smell Warning</h3>
          <p>Deep nesting often indicates:</p>
          <ul>
            <li>Overly complex logic</li>
            <li>Need for function extraction</li>
            <li>Potential simplification opportunities</li>
          </ul>
        </div>
        
        <div class="next-button-container">
          <button class="next-step-btn" onclick="location.href='practice.html?topic=3.4'">
            Practice Nested Conditions
          </button>
        </div>
      </div>
    `
  }
};
