import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function addCourseAction(payload) {
    return { type: 'ADD_COURSE', payload };
}

function CourseList() {
  const qty = 4; // O useSelector vai monitorar qualquer alteração nessa variável

  const courses = useSelector(state => state.data.slice(0, qty), [qty]);
  const dispatch = useDispatch();

  function addCourse() {
      dispatch(addCourseAction('Redux'));
  }

  return (
      <>
        <ul>
            {courses.map(course => <li key={course}>{course}</li>)}
            
        </ul>

        <button type="button" onClick={addCourse}>Adicionar curso</button>
      </>
  );
}

export default CourseList;