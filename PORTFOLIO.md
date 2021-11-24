<img src="https://static.wixstatic.com/media/809fa5_c02c7069a7f246ed986e103ade08b3d1~mv2.gif"/>
 


# Learning Outcomes
Below are the learning outcomes that I will cover in this project. I also desribe how I accomplished this.

## 1. Web application

_User friendly: You apply basic User experience testing and development techniques._

_Full-stack: You design and build a full stack application using commonly accepted front end (Javascript-based framework) and back end techniques (e.g. Object Relational Mapping) choosing and implementing relevant communication protocols and addressing asynchronous communication issues._

### 1. Product page

I made a product page where the application calls the GetAllProducts() method and then proceeds to map all of the products into cards. As seen below.
<img src ="https://user-images.githubusercontent.com/77112006/142210324-b95fcea5-318b-47d4-b726-c1ffc34b1b26.png" width=900/>

### 2. API Gateway
The reasons for using an API Gateway can be found [here](#c4-models). this gateway should be using the discovery service, but I couldn't get that working yet. So I used a direct link to localhost:8080. Seeing as I may not even use the discovery service anyways.
<img src ="https://user-images.githubusercontent.com/77112006/142210484-5a992404-d707-4022-b4d1-2718180b6ace.png" width=900/>



### 3. Login

I made a login button that redirect to Auth0, if you then log in, Auth0 will return a JWT token which the application can then use.
<img src ="https://user-images.githubusercontent.com/77112006/142210599-0a4c6a0a-083c-4e63-a0ae-b1153eace27d.png" width=900/>
<img src ="https://user-images.githubusercontent.com/77112006/142210776-e09485b3-8d9e-4566-92b1-2e9d29e1f777.png" width=900/>

Sources:
- [CodeSTACKr Auth0 react project](https://github.com/codeSTACKr/react-auth0)




## 2. Software quality

_Tooling and methodology: Carry out, monitor and report on unit integration, regression and system tests, with attention for security and performance aspects, as well as applying static code analysis and code reviews._

### 1. Testing
testing is determining whether the software product meets the expected requirements and making sure that it's free of any defects, testing can be done in different manners, the first one I am using is unit testing. Unit testing is testing on the smallets unit of functionality, and should therefore be focused on one function. Below I am testing my CRUD operations of my ProductService by using a localstorage h2 database. which mocks an actual database, but allows me to perform all the JPA methods


<img src ="https://media.discordapp.net/attachments/898556114663252018/910487117635936276/unknown.png?width=1306&height=670" width=900/>
<img src ="https://media.discordapp.net/attachments/898556114663252018/910487489083498516/unknown.png?width=1204&height=669" width=900/>
<img src ="https://media.discordapp.net/attachments/898556114663252018/910487588979212338/unknown.png?width=1242&height=670" width=900/>

Sources:
- [What's the difference between unit, functional, acceptance, and integration tests?](https://stackoverflow.com/questions/4904096/whats-the-difference-between-unit-functional-acceptance-and-integration-test)

### 2. Code Reviews

## 3. CI/CD

_Design and implement: You design a release process and implement a continuous integration and deployment solution (using e.g. Gitlab CI and Docker)._

### 1. Automatic testing
By making [tests](#Testing) you can check if everything works as it's supposed to, Therefore it might be a good idea to run those test everytime you make a change, as in a push. The code below ensures that with every push to the master branch, every test gets run.

#### frontend test.yml
<img src ="https://media.discordapp.net/attachments/898556114663252018/910516319173115924/unknown.png" width=900/>

#### backend test.yml
<img src ="https://media.discordapp.net/attachments/898556114663252018/910516463289401394/unknown.png" width=900/>

the only thing left to do is to ensure the commit doesn't get pushed to master if there are any tests that fail. A way to get around this would be to have a development branch where you can push anything (working or not), and making it so that you can only merge the development branch into the master branch if all tests succeeded. (still WIP)

### 2. Docker
Docker allows developers to make lightweight containers of their application that can be run virtually anywhere. I use it because I want to eventually be able to automatically build and deploy my application on push to master. This may be a rather big endeavor to begin with, so I started with just trying to build and run an application in a docker container, for this I used my ProductService and the Dockerfile below:

<img src ="https://user-images.githubusercontent.com/77112006/142207381-a763b7b8-6176-4148-b64f-2ba00a58331c.png" width=600/>

After building this, I ran the container with Docker Desktop and everything worked fine!


<img src ="https://user-images.githubusercontent.com/77112006/142208528-141e763c-7154-47c5-90fb-3512620d25c4.png" width=600/>
<img src ="https://user-images.githubusercontent.com/77112006/142208704-7e35f132-9bbf-44dc-bf87-9f0ea0abcdec.png" width=600/>



Sources:
- [What is Docker and why is it so darn popular?](https://www.zdnet.com/article/what-is-docker-and-why-is-it-so-darn-popular/#:~:text=Docker%20enables%20developers%20to%20easily,which%20can%20run%20virtually%20anywhere.&text=Containers%20do%20this%20by%20enabling,modify%20and%20update%20the%20program.
)


## 4. Professional

_Professional manner:
You actively ask and apply feedback from stakeholders and advise them on the most optimal technical and design (architectural) solutions.
You choose and substantiate solutions for a given problem._

### Contribution
During this project I wanted to see if I could make a contribution to another project. Just like me, my other classmates also have an emphasis on their project being open source. I went and looked at [this]() repository from a classmate, and while reading his portfolio I saw a lot of spelling and grammar mistakes. Wanting to help, I made an issue and forked the project. After fixing some mistakes I made a pull request, which eventually got approved. 


<img src ="https://user-images.githubusercontent.com/77112006/143215834-abf3045d-6466-4cc1-a0de-23a12c7615fb.png" width=900/>
<img src ="https://user-images.githubusercontent.com/77112006/143215645-79201154-d414-4749-8743-e324a3cc4ae8.png" width=900/>


