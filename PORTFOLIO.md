<img src="https://static.wixstatic.com/media/809fa5_c02c7069a7f246ed986e103ade08b3d1~mv2.gif"/>

# Vision of the project

## C4 Models

The C4 models below will explain the application architecture in different scope, getting less abstract the further you go. Below I displayed all the interations with design process, But if you want to skip to the most recent iteration, click [here](#mostrecent)




<img src ="https://media.discordapp.net/attachments/898556114663252018/908004015994986546/unknown.png" />
<img src ="https://media.discordapp.net/attachments/898556114663252018/908004114976366664/unknown.png" />
After making the design above, I started working on the application. When building it, I found out there was an easy way for me the implement a remote login service. I was also told that implementing an email system with the tools provided by fontys is rather difficult. After that I made some adjustments to the previous two levels of C4:
<img src ="https://media.discordapp.net/attachments/898556114663252018/908004239467499581/unknown.png" />
<img src ="https://media.discordapp.net/attachments/898556114663252018/908004308530913350/unknown.png" />
Seeing as I’m constantly refactoring the design of my application, it seemed a good idea to make use of an API gateway. This gateway acts as an abstraction layer, making it easier for the front-end to make calls and making it possible to check for authentication in one central point. I also added a discovery service, which will make it easier to scale if I ever want to do so. Though this is totally optional, since I was not planning on scaling/load balancing in the first place.


### mostrecent

<img src ="https://media.discordapp.net/attachments/898556114663252018/908005823043735642/Untitled_Diagram.drawio.png?width=661&height=671" />

# Learning Outcomes
Below are the learning outcomes that I will cover in this project. I also desribe how I accomplished this.

## 1. Web application
_User friendly: You apply basic User experience testing and development techniques._

_Full-stack: You design and build a full stack application using commonly accepted front end (Javascript-based framework) and back end techniques (e.g. Object Relational Mapping) choosing and implementing relevant communication protocols and addressing asynchronous communication issues._
## 2. Software quality
_Tooling and methodology: Carry out, monitor and report on unit integration, regression and system tests, with attention for security and performance aspects, as well as applying static code analysis and code reviews._
## 3. CI/CD
_Design and implement: You design a release process and implement a continuous integration and deployment solution (using e.g. Gitlab CI and Docker)._
## 4. Professional
_Professional manner:
You actively ask and apply feedback from stakeholders and advise them on the most optimal technical and design (architectural) solutions.
You choose and substantiate solutions for a given problem._
