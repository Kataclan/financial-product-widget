Financial Product Widget
============================

A Sequra widget to get the financial products of an item

## Explanation

For the solution of the test, I wanted to show how a complete widget development system would be so that it can be easily integrated into any page.

First, under app folder, I developed a React app in Typescript. Around the code there are comments about the behaviour of the methods, as well as parts that are missing from code for not having enough time, or it is understood that I know how to develop them after having written some similar ones. In the README of the directory, the scripts that can be executed are detailed, as well as the current operation of the app.

On the other hand, we would have the 'sequra-fp-widget' directory, in which we would find our app already compiled under the app folder, and two files that would serve to "talk" with our app. After some investigation about the subject, since I have always worked on pages or complete apps and not widgets, I learned that this was done something like:

 - First by designing an IIFE (snippet) that will load the script in the head of our page. 
 - Then we have a 'shim' with which the user can operate with our React App. This ’shim’ will be responsible for rendering our app within an iframe, and will also contain methods that will call events to which our app is registered to act accordingly. 
 
For the integration part, I have not been able to make it work, but I have left you with an idea of ​​shim and snippet and how it would be integrated into the client's page in comments within the merchant_site index. To make it all wonderful, I would develop a gulp task when building the react app that also build our widget distributable files.

You can clearly see that I have not developed this in 3 hours, but I wanted to show you my vision of a complete system, how I program, how I order the code, the nomenclature that I use in functions and variables, and testing of both redux and Isolated components and methods. Also the libraries that I like to use and as I order the code according to them.

I couldn't be able to make the popup, but, by this point, I would use this repository to create a develop branch from the master branch, where I create another branch called maybe 'feature/sequra-info-popup', and develop in it a component, include in the state a variable to know if we the popup is opened or not, and writting it's style files. Then, I'll create a PR to develop branch with one single commit which stages all my commits during the development, and merge it when it passes the review. Then, I'll push it to master after testing all is OK. That would be my steps in order to develop a feature.

I hope you like it!


Alejandro Camps Guerrero