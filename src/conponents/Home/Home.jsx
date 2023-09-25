/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';


const Home = () => {

    const [allCourses, setAllCourses] = useState([])
    const [selectedCourse, setSelectedCourse] = useState([])
    const [creditRemaining, setCreditRemaining] = useState(0)
    const [totalCreditHour, setTotalCreditHour] = useState(0)

    useEffect(() => {
        fetch("./../../../course-details.json")
            .then((res) => res.json())
            .then((data) => setAllCourses(data))
    }, [])
    // console.log(allCourses)

    const handleSelectedCourse = (course) => {

        const isExist = selectedCourse.find((item) => item.id == course.id);

        let courseCredit = course.credit;

        if (isExist) {
            return alert("Oppss!!Already booked")
        }
        else {
            selectedCourse.forEach((item) => {
                courseCredit = courseCredit + item.credit

            })
            // console.log(courseCredit)


            const creditRemaining = 20 - courseCredit;

            if (courseCredit > 20) {
                return alert("You can not buy any more")
            }

            else {
                setTotalCreditHour(courseCredit)

                setCreditRemaining(creditRemaining);

                setSelectedCourse([...selectedCourse, course]);


            }
            

        }
    }

    // console.log (course)

    return (
        <div className='container'>
            <div className="home-container">
                <div className="card-container">
                    {
                        allCourses.map(course => (
                            <div key={course.id} className="card">
                                <div className="card-img">
                                    <img className='photo'
                                        src={course.image}
                                        alt="" />
                                </div>
                                <h3>
                                    {course.course_name}
                                </h3>
                                <p><small>{course.details}</small></p>
                                <div className="details">
                                    <p>Price : {course.price}</p>
                                    <p>Credit :{course.credit}hr</p>
                                </div>
                                <button onClick={() => handleSelectedCourse(course)}


                                    className='card-btn'>Select</button>
                            </div>))
                    }

                </div>
                <div className="selected-course">
                    <Cart
                        selectedCourse={selectedCourse}
                        creditRemaining={creditRemaining}
                        totalCreditHour={totalCreditHour}


                    ></Cart>
                </div>
            </div>

        </div>
    );
};


export default Home;