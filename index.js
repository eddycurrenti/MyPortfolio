<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tejas Patil - Portfolio</title>
  <link rel="icon" href="https://avatars.githubusercontent.com/u/125597558?v=4" type="image/png">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background-color: #f7f7f7;
      color: #333;
      transition: background-color 0.3s, color 0.3s;
    }
    header {
      background-color: #111;
      color: white;
      padding: 2rem;
      text-align: center;
    }
    nav a {
      margin: 0 1rem;
      color: #fff;
      text-decoration: none;
      font-weight: 300;
    }
    .container {
      padding: 2rem;
      max-width: 1000px;
      margin: auto;
    }
    h2 {
      color: #111;
      margin-top: 2rem;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin-bottom: 0.5rem;
    }
    .project {
      margin-bottom: 1.5rem;
      background: #fff;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 0 5px rgba(0,0,0,0.1);
    }
    .footer {
      text-align: center;
      margin: 3rem 0;
      color: #555;
    }
    a.button {
      display: inline-block;
      background: #111;
      color: #fff;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      text-decoration: none;
      margin: 0.3rem 0.5rem 0 0;
    }
    .theme-toggle {
      float: right;
      margin-right: 1rem;
      cursor: pointer;
      background: #fff;
      border: none;
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      font-weight: bold;
    }
    .dark-mode {
      background-color: #111;
      color: #f7f7f7;
    }
    .dark-mode .project, .dark-mode header {
      background-color: #222;
    }
  </style>
</head>
<body>
  <button class="theme-toggle" onclick="toggleTheme()">Toggle Theme</button>
  <header>
    <img src="https://avatars.githubusercontent.com/u/125597558?v=4" alt="Tejas Patil" width="100" style="border-radius: 50%;">
    <h1>Tejas Patil</h1>
    <p><span id="typed"></span></p>
    <nav>
      <a href="https://github.com/eddycurrenti" target="_blank">GitHub</a>
      <a href="https://www.linkedin.com/in/tejas-patil-91802728b/" target="_blank">LinkedIn</a>
      <a href="https://www.codechef.com/users/tejascs" target="_blank">CodeChef</a>
    </nav>
  </header>

  <div class="container">
    <h2>About Me</h2>
    <p>
      Enthusiastic and technically skilled Computer Science undergraduate with a strong foundation in programming, electronics,
      and web technologies. Always eager to explore real-world challenges and innovation opportunities.
    </p>
    <a class="button" href="https://drive.google.com/file/d/11PAuQpWE0kTKKdf33DloWO1EpTh0LYqP/view?usp=sharing" download>Download Resume</a>

    <h2>Skills</h2>
    <ul>
      <li>C, Java, Python, JavaScript, HTML, CSS, Node.js</li>
      <li>SQL, MongoDB</li>
      <li>Data Structures & Algorithms, OOP, Java Swing</li>
      <li>Arduino, ESP32, GSM, IR, Moisture & Ultrasonic Sensors</li>
      <li>Soft Skills: Teamwork, Leadership, Time Management, Creativity</li>
    </ul>

    <h2>Projects</h2>
    <div class="project">
      <h3>Hostel Chat Web App</h3>
      <p>Real-time public chat for hostel students with simple UI.</p>
      
      <a class="button" href="https://hostelchatfrontend.onrender.com" target="_blank">Live Site</a>
      <a class="button" href="https://github.com/eddycurrenti/HostelChatFrontend.git" target="_blank">GitHub</a>
    </div>

    <div class="project">
      <h3>Data Transmission Through Light</h3>
      <p>Used light-based data communication for smart traffic. Presented at IIT Delhi.</p>
    </div>

    <div class="project">
      <h3>Smart Dustbin with GSM</h3>
      <p>SMS alerts for waste capacity and location using GSM and sensors.</p>
    </div>

    <div class="project">
      <h3>Wireless Camera Car</h3>
      <p>ESP32 controlled car with live camera and object detection.</p>
    </div>

    <div class="project">
      <h3>Digital Student Marketplace</h3>
      <p>Under development: Buy/sell goods with integrated student tools.</p>
    </div>

    <h2>Education</h2>
    <ul>
      <li><strong>B.Tech, CSE, VIT Vellore</strong> – 2023-27, CGPA: 8.65</li>
      <li><strong>HSC</strong> – 2022, 86.47%</li>
      <li><strong>SSC</strong> – 2020, 92.40%</li>
    </ul>

    <h2>Achievements</h2>
    <ul>
      <li>INSPIRE Award – Twice State Level Winner</li>
      <li>Represented Maharashtra at IIT Delhi</li>
      <li>Development Head – STANDARDS Club VIT</li>
      <li>Design Head – VIT Cycling Club</li>
    </ul>

    <h2>Contact Me</h2>
    <form action="https://formspree.io/f/yourID" method="POST">
      <input type="text" name="name" placeholder="Your Name" required><br>
      <input type="email" name="email" placeholder="Your Email" required><br>
      <textarea name="message" placeholder="Your Message" rows="4"></textarea><br>
      <button type="submit" class="button">Send</button>
    </form>
    <p>Email: <a href="mailto:patiltejas.ashok2023@vitstudent.ac.in">patiltejas.ashok2023@vitstudent.ac.in</a></p>
    <p>Phone: 9579347774 | Urun Islampur, Maharashtra – 415409</p>
  </div>

  <div class="footer">
    <p>&copy; 2025 Tejas Patil. All rights reserved.</p>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
  <script>
    new Typed("#typed", {
      strings: ["Web Developer", "ESP32 Enthusiast", "Problem Solver", "Creative Thinker"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
    });

    function toggleTheme() {
      document.body.classList.toggle("dark-mode");
    }
  </script>
</body>
</html>
