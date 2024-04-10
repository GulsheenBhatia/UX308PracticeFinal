import {hello, squareFeetToAcres, mowingTime} from './functions.js';

function Question1(){
    return <section>
// Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}   

function Question2() {
    return <section>
// There are 43,560 square feet per acre. Write a program that converts square feet to acres. Test at least 3 conversions
            <h2>results</h2>
            <p>{squareFeetToAcres(43560)} square feet = {squareFeetToAcres(43560)} acres</p>
            <p>{squareFeetToAcres(100000)} square feet = {squareFeetToAcres(100000)} acres</p>
            <p>{squareFeetToAcres(200000)} square feet = {squareFeetToAcres(200000)} acres</p>
        </section>
}

function Question3() {
    return <section>
// Given the&nbsp; width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes\

            <h2>Question 3</h2>
            <p>Given the width of a lawn in meters, length of a lawn in meters, and the square meters cut per minute, calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes.</p>
            <h2>Results</h2>
            <p>Width: 10m, Length: 20m, Square meters cut per minute: 5 = Time: {time1} minutes</p>
            <p>Width: 15m, Length: 30m, Square meters cut per minute: 8 = Time: {time2} minutes</p>
            <p>Width: 20m, Length: 40m, Square meters cut per minute: 10 = Time: {time3} minutes</p>
        </section>
}








export {Question1, Question2, Question3}