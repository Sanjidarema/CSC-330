const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const profile = {
  name: 'Sanjida Rema',
  headline: 'Computer Science & Information Systems Student',
  summary: 'Computer Science and Information Systems student building practical skills in programming, databases, networking, and web development.',
  keyStrengths: ['Problem Solving', 'Team Leadership', 'Communication', 'Adaptability'],
  contactInfo: { email: 'Available upon request' }
};

const projects = [
  {
    title: 'Employee Pay Stub Program',
    description: 'A Java application that collects employee information and calculates a formatted pay stub.',
    technologies: ['Java', 'OOP'],
    link: '#'
  },
  {
    title: 'Database Classwork',
    description: 'SQL exercises focused on relational data, queries, and database operations.',
    technologies: ['MySQL', 'SQL'],
    link: '#'
  },
  {
    title: 'Multi-Route Resume',
    description: 'A data-driven resume web application with multiple Express routes and reusable EJS partials.',
    technologies: ['Node.js', 'Express', 'EJS', 'CSS'],
    link: '#'
  }
];

const skills = [
  { category: 'Languages', items: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS'] },
  { category: 'Web & Frameworks', items: ['Node.js', 'Express', 'EJS'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'MySQL', 'VS Code'] }
];

const education = {
  institution: 'Southern Connecticut State University',
  location: 'New Haven, Connecticut',
  degree: 'Computer Science & Information Systems',
  expectedGraduation: '2027',
  gpa: '3.08',
  coursework: ['Programming', 'Database Systems', 'Computer Networks', 'Web Development']
};

app.get('/', (req, res) => res.render('home', { profile, currentPath: req.path }));
app.get('/projects', (req, res) => res.render('projects', { projects, currentPath: req.path }));
app.get('/education', (req, res) => res.render('education', { education, currentPath: req.path }));
app.get('/skills', (req, res) => res.render('skills', { skills, currentPath: req.path }));

app.use((req, res) => {
  res.status(404).render('404', { currentPath: req.path });
});

app.listen(PORT, () => console.log(`Resume app running at http://localhost:${PORT}`));
