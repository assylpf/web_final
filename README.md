# ProgHUB – JavaScript Learning Platform

ProgHUB is a beginner-friendly web-based educational platform designed to teach JavaScript interactively. It features structured **lectures**, **practice exercises**, **theme toggling**, and **user progress tracking**—all using only **HTML**, **CSS**, and **JavaScript** (no backend).

---

## 🌟 Features

- 📚 **Lecture Pages:** Theoretical content for each topic from basics to arrays.
- 🧠 **Practice Pages:** Hands-on tasks with a live JavaScript code editor and console output.
- 💡 **Hints & Solutions:** Each practice task includes hint and solution buttons for guided learning.
- 🌙 **Dark/Light Mode:** Toggleable theme with localStorage memory.
- 🧭 **Navigation Sidebar:** Mirrors Stepik-style navigation with progress bars and topic groups.
- ✅ **Progress Tracking:** Completed tasks are visually marked.
- ➡️ **Next/Previous:** Navigate exercises smoothly.

---

## 📁 Project Structure

| File / Folder              | Description |
|---------------------------|-------------|
| `mainPageProject.html`     | Main hub or landing page for the course |
| `lecture.html`             | Displays lecture content dynamically using `lectureTexts.js` |
| `practice.html`            | Interactive practice editor and compiler interface |
| `lectureTexts.js`          | JSON-style JavaScript file storing all lecture contents |
| `practiceTexts.js`         | JSON-style JavaScript file storing practice problems, hints, and solutions |
| `runCode.js`               | Logic to evaluate and test user code input in the iframe console |
| `theme.js`                 | Handles dark/light mode toggling and state memory |
| `practice10.html`          | Latest iteration combining improved styles and unified layout |
| `README.md`                | This documentation file |

---

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/proghub.git
   cd proghub
