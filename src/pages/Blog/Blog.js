import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-2xl'>1 .What are the different ways to manage a state in a React application?</h1>
            <p>There are four main types of state you need to properly manage in your React apps:1.Local state 2. Global state 3.Server state 4.URL state .Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.</p>
            <h1 className='text-2xl'>2.  How does prototypical inheritance work?</h1>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            <h1 className='text-2xl'>3. What is a unit test? Why should we write unit tests?</h1>
            <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test.They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex."</p>
            <h1 className='text-2xl'>4. React vs. Angular vs. Vue?</h1>
            <p>This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.

                Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js.</p>
        </div>
    );
};

export default Blog;