/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Cart.css"

const Cart = ({ selectedCourse, creditRemaining, totalCreditHour }) => {
    // console.log(selectedCourse)
    return (
        <div className='selected-cart'>
            <h3>Credit Hour Remaining:{creditRemaining}hr</h3>

            <hr></hr>

            <h2> Course Name</h2>

            {selectedCourse.map((course) => (
                <li>{course.course_name}</li>

            ))}
              <hr></hr>

            <h3>Total Credit Hour : {totalCreditHour}</h3>
        </div>
    );
};

export default Cart;