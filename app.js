const express = require('express');
const data = require('./data.json');
const { projects } = data;

const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { projects });

});

app.get('/about', (req, res) => {
    res.render('about');

});

app.get('/project/:id', (req, res) => {
    const { id } = req.params;
    const title = projects[id]["project_name"];
    const description = projects[id]["description"]; 
    const technologies = projects[id]["technologies"];
    const live_link = projects[id]["live_link"];
    const github_link = projects[id]["github_link"];
    const images = projects[id]["image_urls"];

    const templateData = { id, title, description, technologies, live_link, github_link, images };
    
    res.render('project', templateData );

});

app.listen(3000, () => console.log('The application is running on localhost: 3000!'))