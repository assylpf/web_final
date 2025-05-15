// practiceTexts.js
const practiceData = {
  '1.1': {
    title: "About the Course",
    description: `<p>Welcome to the JavaScript practice course. This first exercise will help you get familiar with the practice environment.</p>
                  <p><strong>Task:</strong> Write a simple JavaScript statement that outputs "Hello, ProgHUB!" to the console.</p>`,
    hint: `<p>Use the <code>console.log()</code> function to output text to the console.</p>
          <p>Remember to put your text in quotes (either single or double).</p>`,
    solution: 'console.log("Hello, ProgHUB!");',
    test: (code) => {
      const output = captureOutput(code);
      return output.includes("Hello, ProgHUB!");
    }
  },

  '1.2': {
    title: "Output Data",
    description: `<p>Print the phrase "The journey is mastered by the walking" using console.log()</p>
                  <p><strong>Sample Input:</strong> <br>None</p>
                  <p><strong>Sample Output:</strong> <br>The journey is mastered by the walking</p>`,
    hint: `Use console.log() with text in quotes`,
    solution: 'console.log("The journey is mastered by the walking");',
    test: (code) => {
      const output = captureOutput(code);
      return output.includes("The journey is mastered by the walking");
    }
  },

  '2.1': {
    title: "Multi-line Output",
    description: `<p>Print the word "Java". Then print the word "Script" on a new line. Add a multi-line comment explaining your code.</p>
                  <p><strong>Sample Input:</strong> <br></p>
                  <p><strong>Sample Output:</strong><br>Java<br>Script</p>`,
    hint: `Use two console.log() statements and /* */ for comments`,
    solution: `/* Print technology names */
console.log("Java");
console.log("Script");`,
    test: (code) => {
      const output = captureOutput(code);
      return /\/\*.*\*\//s.test(code) && 
             output.includes("Java") && 
             output.includes("Script");
    }
  },

  '2.2': {
    title: "Variables",
    description: `<p>Print the values of variables num1, num2 and num3 in this order: 100 120 180 with spaces</p>
                  <p><strong>Sample Input:</strong> <br></p>
                  <p><strong>Sample Output:</strong> <br>100 120 180</p>`,
    hint: `Use console.log() with variables separated by commas`,
    solution: `let num1 = 180;
let num2 = 100;
let num3 = 120;
console.log(num2, num3, num1);`,
    test: (code) => {
      const output = captureOutput(code);
      return output.trim() === "100 120 180";
    }
  },

  '2.3': {
    title: "Data Types",
    description: `<p>What type will the variable 'number' have?</p>
                  <p><strong>Code:</strong> let number = "string" * 0;</p>
                  <p><strong>Options:</strong><br>
                  - undefined<br>
                  - NaN<br>
                  - null</p>`,
    hint: `Operations with non-numeric strings return special values`,
    solution: `let number = "string" * 0;
console.log(typeof number); // Will print "number" (value NaN)`,
    test: (code) => {
      return code.includes("NaN") || 
             code.includes("number") ||
             /"string"\s*\*\s*0/.test(code);
    }
  },

  '2.4': {
    title: "Input Data",
    description: `<p>Prompt the user for three numbers and print their sum</p>
                  <p><strong>Sample Input 1:</strong> <br>8, 11, 2</p>
                  <p><strong>Sample Output 1:</strong> <br>21</p>
                  <p><strong>Sample Input 2:</strong> <br>5, 4, 1</p>
                  <p><strong>Sample Output 2:</strong><br>10</p>`,
    hint: `1. Get three numbers using prompt()<br>
           2. First display the inputs<br>
           3. Then display the sum`,
    solution: `let n1 = Number(prompt());
let n2 = Number(prompt());
let n3 = Number(prompt());
console.log(\`Inputs: \${x},\${y},\${z} | Sum: \${x} + \${y} + \${z}\`);`,
    test: (code) => {
      const testCases = [
        { inputs: [8, 11, 2], expected: "Inputs: 8,11,2 | Sum: 21" },
        { inputs: [5, 4, 1], expected: "Inputs: 5,4,1 | Sum: 10" }
      ];
      
      let allPassed = true;
      const originalPrompt = window.prompt;
      
      try {
        for (const testCase of testCases) {
          let callCount = 0;
          window.prompt = () => testCase.inputs[callCount++];
          
          const output = captureOutput(code);
          if (output !== testCase.expected) {
            allPassed = false;
            break;
          }
        }
      } finally {
        window.prompt = originalPrompt;
      }
      
      return allPassed;
    }
  },

  '2.5': {
    title: "Math Operations",
    description: `<p>Calculate chest volume (height * width * length) from user input</p>
                  <p><strong>Sample Input 1:</strong> <br>2, 5, 5</p>
                  <p><strong>Sample Output 1:</strong> <br>50</p>
                  <p><strong>Sample Input 2:</strong> <br>8, 2, 3</p>
                  <p><strong>Sample Output 2:</strong> <br>48</p>`,
    hint: `Multiply the three variables`,
    solution: `const height = Number(prompt());
const width = Number(prompt());
const length = Number(prompt());
console.log(height * width * length);`,
    test: (code) => {
      window.prompt = () => "2";
      const output = captureOutput(code);
      return output.includes("8"); // 2*2*2
    }
  },

  
  '2.6': {
    title: "Strict Equality Comparison",
    description: `<p>Check if the sum of x+y strictly equals the sum of y+z</p>
                  <p><strong>Sample Input 1:</strong> <br>7, 6, 5</p>
                  <p><strong>Sample Output 1:</strong> <br>false</p>
                  <p><strong>Sample Input 2:</strong> <br>3, 2, 3</p>
                  <p><strong>Sample Output 2:</strong> <br>true</p>`,
    hint: `1. Get three numbers using prompt()<br>
           2. Display inputs and result using console.log()<br>
           3. Use === for strict comparison`,
    solution: `let x = +prompt("Enter x:");
let y = +prompt("Enter y:"); 
let z = +prompt("Enter z:");
console.log(\`Inputs: \${x},\${y},\${z} | Result: \${x + y === y + z}\`);`,
    test: (code) => {
      // Test cases with expected format
      const testCases = [
        { inputs: [7, 6, 5], expected: "Inputs: 7,6,5 | Result: false" },
        { inputs: [3, 2, 3], expected: "Inputs: 3,2,3 | Result: true" }
      ];
      
      let allPassed = true;
      const originalPrompt = window.prompt;
      
      try {
        for (const testCase of testCases) {
          let callCount = 0;
          window.prompt = () => testCase.inputs[callCount++];
          
          const output = captureOutput(code);
          if (output !== testCase.expected) {
            allPassed = false;
            break;
          }
        }
      } finally {
        window.prompt = originalPrompt;
      }
      
      return allPassed;
    }
  },

  '2.7': {
    title: "Logical Operators",
    description: `<p>Use logical operators to get 'true' as result</p>
                  <p><strong>Code:</strong> const logic = false ... 5 > 9 ... 18 == "18";</p>
                  <p><strong>Sample Output:</strong> true</p>`,
    hint: `You need to use && and || operators`,
    solution: `const logic = false && 5 > 9 || 18 == "18";
console.log(logic);`,
    test: (code) => {
      const output = captureOutput(code);
      return output.includes("true") && 
             /false\s*&&\s*5\s*>\s*9\s*\|\|\s*18\s*==\s*"18"/.test(code);
    }
  },

  '3.1': {
    title: "If Statement",
    description: `<p>Write a program that checks if a user-input number is positive.</p>
                  <p><strong>Requirements:</strong></p>
                  <ul>
                    <li>If positive, output "Positive"</li>
                    <li>If not positive, output nothing</li>
                  </ul>
                  <p><strong>Sample Input 1:</strong> <br>1</p>
                  <p><strong>Sample Output 1:</strong> <br>Positive</p>
                  <p><strong>Sample Input 2:</strong> <br>0</p>
                  <p><strong>Sample Output 2:</strong> <br>(no output)</p>`,
    hint: `Use a simple if statement without else`,
    solution: `let num = Number(prompt());
if (num > 0) {
  console.log("Positive");
}else {
  console.log("no output")}`,
    test: (code) => {
      const testCases = [
        { input: "5", expected: "Positive" },
        { input: "0", expected: "" },
        { input: "-3", expected: "" }
      ];
      return runTestCases(code, testCases);
    }
  },

  '3.2': {
    title: "else and else if",
    description: `<p>Create a student grade evaluator program.</p>
                  <p><strong>Grading Scale:</strong></p>
                  <ul>
                    <li>≥ 84: "Excellent"</li>
                    <li>≥ 64: "Good"</li>
                    <li>< 64: "Keep Learning"</li>
                  </ul>
                  <p><strong>Sample Input 1:</strong> <br>84</p>
                  <p><strong>Sample Output 1:</strong> Excellent</p>
                  <p><strong>Sample Input 2:</strong> 6<br>4</p>
                  <p><strong>Sample Output 2:</strong> Good</p>`,
    hint: `Use else if for multiple conditions`,
    solution: `let score = Number(prompt());
if (score >= 84) {
  console.log("Excellent");
} 
else if (score >= 64) {
  console.log("Good");
}
else {
  console.log("Keep Learning");
}`,
    test: (code) => {
      const testCases = [
        { input: "84", expected: "Excellent" },
        { input: "70", expected: "Good" },
        { input: "50", expected: "Keep Learning" }
      ];
      return runTestCases(code, testCases);
    }
  },

  '3.3': {
    title: "Ternary Operator",
    description: `<p>Create an age verification system for website access.</p>
                  <p><strong>Rules:</strong></p>
                  <ul>
                    <li>≥ 18: "Access Granted"</li>
                    <li>< 18: "Access Denied"</li>
                  </ul>
                  <p><strong>Sample Input 1:</strong> 18</p>
                  <p><strong>Sample Output 1:</strong> Access Granted</p>
                  <p><strong>Sample Input 2:</strong> 17</p>
                  <p><strong>Sample Output 2:</strong> Access Denied</p>`,
    hint: `Use the ternary operator (condition ? true : false)`,
    solution: `let age = Number(prompt());
console.log(age >= 18 ? "Access Granted" : "Access Denied");`,
    test: (code) => {
      const testCases = [
        { input: "18", expected: "Access Granted" },
        { input: "17", expected: "Access Denied" }
      ];
      return runTestCases(code, testCases);
    }
  },

  '3.4': {
    title: "Nested Conditions",
    description: `<p>Create a discount calculator based on price and customer status.</p>
                  <p><strong>Discount Rules:</strong></p>
                  <ul>
                    <li>Price > 1000:
                      <ul>
                        <li>VIP: 10% discount</li>
                        <li>Standard: 5% discount</li>
                      </ul>
                    </li>
                    <li>Price ≤ 1000: No discount</li>
                  </ul>
                  <p><strong>Sample Input 1:</strong> 1100, VIP</p>
                  <p><strong>Sample Output 1:</strong> 990</p>
                  <p><strong>Sample Input 2:</strong> 450, VIP</p>
                  <p><strong>Sample Output 2:</strong> 450</p>`,
    hint: `Use nested if statements`,
    solution: `let price = Number(prompt());
let status = prompt();
if (price > 1000) {
  if (status === 'VIP') {
    console.log(price * 0.9);
  } else {
    console.log(price * 0.95);
  }
} else {
  console.log(price);
}`,
'4.1': {
    title: "While Loop - Even Numbers",
    description: `<p>Write a program that outputs every even number from 0 up to a user-input number (inclusive).</p>
                  <p><strong>Requirements:</strong></p>
                  <ul>
                    <li>Use a while loop</li>
                    <li>Do not use conditional statements</li>
                    <li>Each number should be on a new line</li>
                  </ul>
                  <p><strong>Sample Input 1:</strong> 5</p>
                  <p><strong>Sample Output 1:</strong><br>0<br>2<br>4</p>
                  <p><strong>Sample Input 2:</strong> 2</p>
                  <p><strong>Sample Output 2:</strong><br>0<br>2</p>`,
    hint: `Increment by 2 instead of 1 to avoid conditionals`,
    solution: `let limit = +prompt();
let i = 0;
while (i <= limit) {
  console.log(i);
  i += 2;
}`,
    test: (code) => {
      const testCases = [
        { input: "5", expected: "0\n2\n4" },
        { input: "2", expected: "0\n2" },
        { input: "10", expected: "0\n2\n4\n6\n8\n10" }
      ];
      return runTestCases(code, testCases);
    }
  },

  '4.2': {
    title: "For Loop - Sum of Odd Numbers",
    description: `<p>Calculate the sum of all odd numbers from 1 to a user-input number (inclusive).</p>
                  <p><strong>Requirements:</strong></p>
                  <ul>
                    <li>Use a for loop</li>
                    <li>Output should include the full phrase with the sum</li>
                  </ul>
                  <p><strong>Sample Input 1:</strong> 7</p>
                  <p><strong>Sample Output 1:</strong> Sum of odd numbers from 1 to 7 is 16</p>
                  <p><strong>Sample Input 2:</strong> 5</p>
                  <p><strong>Sample Output 2:</strong> Sum of odd numbers from 1 to 5 is 9</p>`,
    hint: `Start your loop from 1 and increment by 2`,
    solution: `let num = +prompt();
let sum = 0;
for (let i = 1; i <= num; i += 2) {
  sum += i;
}
console.log(\`Sum of odd numbers from 1 to \${num} is \${sum}\`);`,
    test: (code) => {
      const testCases = [
        { inputs: ["1100", "VIP"], expected: "990" },
        { inputs: ["2000", "standard"], expected: "1900" },
        { inputs: ["450", "VIP"], expected: "450" }
      ];
      return runNestedTestCases(code, testCases);
    }
    }   
  }
};

// Helper functions for testing
function runTestCases(code, testCases) {
  const originalPrompt = window.prompt;
  try {
    for (const testCase of testCases) {
      window.prompt = () => testCase.input || testCase.inputs[0];
      const output = captureOutput(code);
      if (output.trim() !== testCase.expected) return false;
    }
    return true;
  } finally {
    window.prompt = originalPrompt;
  }
}

function runNestedTestCases(code, testCases) {
  const originalPrompt = window.prompt;
  try {
    for (const testCase of testCases) {
      let callCount = 0;
      window.prompt = () => testCase.inputs[callCount++];
      const output = captureOutput(code);
      if (output.trim() !== testCase.expected) return false;
    }
    return true;
  } finally {
    window.prompt = originalPrompt;
  }
}
function captureOutput(code) {
  let output = '';
  const originalLog = console.log;
  console.log = (msg) => output += msg + '\n';
  try {
    new Function(code)();
  } catch (e) {
    output = 'Error: ' + e.message;}}
// Export for both browser and Node.js
function captureOutput(code) {
  let output = '';
  const originalLog = console.log;
  console.log = (...args) => {
    output = args.map(arg => 
      typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
    ).join(' ');
  };
  function captureOutput(code) {
  let output = '';
  const originalLog = console.log;
  console.log = (msg) => output += msg + '\n';
  try {
    new Function(code)();
  } catch (e) {
    output = 'Error: ' + e.message;
  }
  console.log = originalLog;
  return output.trim();
}
  
  try {
    new Function(code)();
  } catch (e) {
    output = 'Error: ' + e.message;
  } finally {
    console.log = originalLog;
  }
  
  return output;
}