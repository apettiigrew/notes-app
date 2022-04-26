<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Twitter][twitter-shield]][twitter-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/notepad.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">React-Redux Notes Application</h3>

  <p align="center">
    A simple react app that utilize core concepts in reactjs to build a note application.
    <br />
    ·
    <a href="https://github.com/apettiigrew/notes-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/apettiigrew/notes-app/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][product-screenshot]

This project is a simple note application that I plan to build out to mimic Google Keep. 
This project was simply created to help me on my journey in learning reactjs core concepts. When learning new frameworks, I try to focus more on the framework features rather than an interesting and exciting concept. A note app as basic as it is provides me with enough of every day web dev task i.e Create something, read/list something, edit something and delete something, that I could use to build and focus on react.


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With
* [React.js](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Bootstrap](https://getbootstrap.com)
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [MongoDB](https://www.mongodb.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Below you can find instructions on how to launch the application using Docker or manually setup each service. To get a local copy up and running follow these simple example steps.

### Docker Prerequisites

You will need to have docker installed on your machine. Please revert to the offical docker guide to help you setup Docker for your specfic OS. Once you have docker installed, you can follow the steps below.

### Docker Setup Installation
Before getting started ensure you do not have any services running on the ports, 3000, 8081 and 27017 as these ports will need to be utilized the docker containers.

2. Clone the repo
   ```sh
   git clone https://github.com/apettiigrew/notes-app.git
   ```
3. Navigate to the root folder
   ```sh
   cd notes-app
   ```
4. Run the following command
   ```js
   docker-compose up
   ```
5. Once all services are up, navigate to http://localhost:3000 to start playing with the app.


### Manual Prerequisites
Perhaps, you're not huge fan of Docker and would like to launch the apps manually, you can find instructions below. Before getting started You will need have node.js and mongodb installed on your machine.

### Manual Setup
Before getting started ensure you do not have any services running on the ports, 3000, 8081 and 27017 as these ports will need to be utilized by the different services.

2. Clone the repo
   ```sh
   git clone https://github.com/apettiigrew/notes-app.git
   ```
3. Navigate to the root folder
   ```sh
   cd notes-app
   ```

### Mongodb Setup
4. The application utilize a very barebones mongodb installed, no authentication is required, just ensure mongodb is up and running on the default port.


### Node.js Setup

5. Naviate to the node-backend folder
   ```sh
   cd node-backend
   ```
4. Run the following commands
   ```sh
   npm install
   npm run dev
   ```

### React.js Setup
5. Naviate to the react-frontend folder
   ```sh
   cd react-frontend
   ```

4. Run the following commands
   ```sh
   npm install
   npm run start:dev
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap
- [] Add the pin notes
- [] Add labels on notes
- [] Add make a copy feature
- [] Add search notes feature
- [] Add multiselect notes feature

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing
If you want to practice your react knowledge feel free to add any features you think might make this application become awesome. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Andrew Pettigrew - [@apettiigrew](https://twitter.com/apettiigrew) - pettigrewhere@gmail.com

Project Link: [https://github.com/apettiigrew/notes-app](https://github.com/apettiigrew/notes-app)

<p align="right">(<a href="#top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[twitter-shield]: https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/andrewpettigrewofficial/
[twitter-url]: https://twitter.com/apettiigrew
[product-screenshot]: images/screenshot.png