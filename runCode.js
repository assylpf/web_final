function runCode() {
  const code = document.getElementById('codeEditor').value;
  const outputElement = document.getElementById('outputContent');
  const practice = practiceData[currentPractice];
  
  try {
    // Clear previous output
    outputElement.textContent = '';
    
    // Capture new output
    const output = captureOutput(code);
    if (output) {
      outputElement.textContent = output;
    } else {
      outputElement.textContent = 'No output (did you forget console.log?)';
    }
    
    // Run validation if this practice has tests
    if (practice && practice.test) {
      const testResult = practice.test(code);
      
      // Display test message
      const messageDiv = document.createElement('div');
      messageDiv.style.marginTop = '10px';
      messageDiv.style.padding = '10px';
      messageDiv.style.borderRadius = '4px';
      messageDiv.style.fontWeight = 'bold';
      
      if (testResult.passed) {
        messageDiv.style.backgroundColor = 'var(--success-color)';
        messageDiv.style.color = 'white';
        
        // Mark as solved if not already
        if (!solvedPractices.includes(currentPractice)) {
          solvedPractices.push(currentPractice);
          updateSolvedIndicators();
          
          const statusIndicator = document.querySelector('.status-indicator');
          statusIndicator.classList.remove('status-unsolved');
          statusIndicator.classList.add('status-solved');
          statusIndicator.textContent = 'Solved';
        }
      } else {
        messageDiv.style.backgroundColor = 'var(--warning-color)';
        messageDiv.style.color = 'black';
      }
      
      messageDiv.textContent = testResult.message;
      outputElement.appendChild(messageDiv);
    }
  } catch (err) {
    outputElement.textContent = `Error: ${err.message}`;
  }
}