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

### 4. Error handeling
When something unexpected happens, the user should not be left in the dark about this. That's why it's good to put some error handeling in place in case something goes wrong. In the screenshot below, the error that shows when the product service is turned of is shown. This is an error component with some generic text, and then the error below that. In this case, the application failed to fetch, because the product service is turned off.
![image](https://user-images.githubusercontent.com/77112006/150022702-0b9bac5b-60c0-46e3-b19d-a81c7ca09eb1.png)




Sources:
- [CodeSTACKr Auth0 react project](https://github.com/codeSTACKr/react-auth0)




## 2. Software quality

_Tooling and methodology: Carry out, monitor and report on unit integration, regression and system tests, with attention for security and performance aspects, as well as applying static code analysis and code reviews._

### 1. Testing
testing is determining whether the software product meets the expected requirements and making sure that it's free of any defects, testing can be done in different manners, the first one I am using is unit testing. Unit testing is testing on the smallets unit of functionality, and should therefore be focused on one function. Below I am testing my CRUD operations of my ProductService by using a localstorage h2 database. which mocks an actual database, but allows me to perform all the JPA methods


<img src ="https://media.discordapp.net/attachments/898556114663252018/910487117635936276/unknown.png?width=1306&height=670" width=900/>
<img src ="https://media.discordapp.net/attachments/898556114663252018/910487489083498516/unknown.png?width=1204&height=669" width=900/>
<img src ="https://media.discordapp.net/attachments/898556114663252018/910487588979212338/unknown.png?width=1242&height=670" width=900/>

I also made some front end tests. The first test checks if the Jewellery page doesn't crash. The second one uses mock data to render a single product card, and then checks if this card actually get's rendered. This ensures that when the real data gets fetched, this data also get's rendered. The third test checks for the phrase that's in the ErrorPage component. If it finds it, it means that that component got rendered(this was a work around, I would have liked it better to just check for a component but this works for now, or until someone changes ErrorPage).

![image](https://user-images.githubusercontent.com/77112006/150025935-2c0b2ffa-6582-49b7-aecb-9cc9390114ae.png)




Sources:
- [What's the difference between unit, functional, acceptance, and integration tests?](https://stackoverflow.com/questions/4904096/whats-the-difference-between-unit-functional-acceptance-and-integration-test)

### 2. Code Reviews

## 3. CI/CD
![image](https://user-images.githubusercontent.com/77112006/144503948-56237b0f-0e89-45d5-ad60-e31a320f2862.png)


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

The next step was to make this process automatic, I did this by using github actions

![image](https://user-images.githubusercontent.com/77112006/143243406-98e8ad58-84e1-429a-8d9f-8174665db1fd.png)
![image](https://user-images.githubusercontent.com/77112006/143243267-69d0c7ed-0d48-4539-bdef-68337b126854.png)

This also automatically pushes the images to Dockerhub. From here I could eventually automatically deploy these images.






Sources:
- [What is Docker and why is it so darn popular?](https://www.zdnet.com/article/what-is-docker-and-why-is-it-so-darn-popular/#:~:text=Docker%20enables%20developers%20to%20easily,which%20can%20run%20virtually%20anywhere.&text=Containers%20do%20this%20by%20enabling,modify%20and%20update%20the%20program.)
- [Build and push Docker images](https://github.com/marketplace/actions/build-and-push-docker-images)


## 4. Professional

_Professional manner:
You actively ask and apply feedback from stakeholders and advise them on the most optimal technical and design (architectural) solutions.
You choose and substantiate solutions for a given problem._

### 1. Contribution
During this project I wanted to see if I could make a contribution to another project. Just like me, my other classmates also have an emphasis on their project being open source. I went and looked at [this]() repository from a classmate, and while reading his portfolio I saw a lot of spelling and grammar mistakes. Wanting to help, I made an issue and forked the project. After fixing some mistakes I made a pull request, which eventually got approved. 


<img src ="https://user-images.githubusercontent.com/77112006/143215834-abf3045d-6466-4cc1-a0de-23a12c7615fb.png" width=900/>
<img src ="https://user-images.githubusercontent.com/77112006/143215645-79201154-d414-4749-8743-e324a3cc4ae8.png" width=900/>

### 2. Getting Contributed To
On the other hand, I made sure that my project would be easy to contribute to. I do this by making a CONTRIBUTING.md to make sure everyone that wants to contribute to this project know what they have to do. I also make sure my issues are always very clear, and are labeled with "good first issue" if possible. That way github can make other people see my issues

![image](https://user-images.githubusercontent.com/77112006/145406290-21db1e9f-fcc0-4304-9c56-431b932620fd.png)

After doing this, I quickly had 2 people comment on one of my issues. One of which even immediately came through with a PR

![image](https://user-images.githubusercontent.com/77112006/145406442-e01dfd7e-524f-4033-baf2-cdc6afe8d210.png)

After reviewing their PR, I wasn't completely satisfied with what they made. So I edited my issue because I saw I wasn't clear enough (deleted the word "preferably" and added resources) and gave them some resources to help them on their way. In their next PR I was satisfied and I merged their branch.

![image](https://user-images.githubusercontent.com/77112006/145406805-b15b32fa-c1ee-4ed5-93af-0b067289fc67.png)

I learned a lot from this interaction. I learned that I should be really clear in writing my issues, and I learned how to communicate with people who want to contribute to my project


### Project Board
In order to more easily work towards completing user stories, I decided to make a [project board](https://github.com/Kibuns/Webshop-ChicnChoc/projects/1). On this KANBAN board it's easier to see what I'm currently working on, and how certain PR's relate to user stories. From now on I'll also be working with the following workflow:
- Make/look at user stories
- Make issue that helps completing that user story's acceptence criteria or pick up an existing one 
- Make branch for that issue
- Work on branch untill issue is fixed
- Make PR
- Repeat

Do try this workflow out, I decided to work on a automatic docker build implementation for my product service. Frist I looked at my user stories, but I wanted to find a way to ease the development process, so it kind of entails all of the user stories, so I just linked it to #4 since I wanted to work on that. Then I made an issue about adding an automatic way to build a docker image on push to master. I worked on this in a branch, made a pull request, linked that request to the issue and the underlying user story, and then merged.
<img src ="https://user-images.githubusercontent.com/77112006/144237669-b6d4cc24-2024-4f04-bcff-97ce2141dc6d.png" width=900/>


Sourches:
- [This project's board](https://github.com/Kibuns/Webshop-ChicnChoc/projects/1)

## Requirements and Design

_Multipletypes of test techniques: You apply user acceptance testing and stakeholder feedback to validate the quality of the requirements. You evaluate the quality of the design (e.g., by testing or prototyping) taking into account the formulated quality properties like security and performance._

Since I'm my own steakholder in this project, there isn't a lot of validating to be done there. Thats why I did some user acceptance testing on some UI mockups I made. This research can be seen [here](https://github.com/Kibuns/Webshop-ChicnChoc/blob/master/UX%20Tests/Dashboard_Tests.md). This was made for the admin dashboard page for this project.

The results from this test changes the design from this: 
![image](https://user-images.githubusercontent.com/77112006/145224513-2ae1ba83-fe16-48f9-a256-100bb3ea8154.png)

To this: 
landing page dashboard:
![image](https://user-images.githubusercontent.com/77112006/146179958-c2eaf65d-5a2a-4cf5-8a6a-3ef13d753ab3.png)

After pressing "Add Product" button:
![image](https://user-images.githubusercontent.com/77112006/146182560-70efc532-b347-447a-9f1d-fe31dbf044d7.png)

After pressing on a edit button:
![image](https://user-images.githubusercontent.com/77112006/146182498-ad3b5aa6-8ed1-408b-979d-6b2f53940267.png)

Eventual look after implementing upload function:
![image](https://user-images.githubusercontent.com/77112006/146182841-70be9ce4-c67e-490f-9516-f62e167bc7e7.png)


