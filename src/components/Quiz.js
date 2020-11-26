import React from 'react';
import { useState } from 'react';

const Quiz = () => {
  const [state, setState] = useState({
    date: '',
    select: '',
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });
  console.log(state)

  function handleChange(e) {

    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setState({
      ...state,
      [name]: value,
    });
  }


  return (
    <div className="m-3">
      <form className="" action="">

        {/* DATE */}
        <div className="form-group d-flex flex-column">
          <label>
            <h4>Date:</h4>
          </label>
          <input
            onChange={handleChange}
            type="date"
            name="date"
            value={state.date}
          />
        </div>

        {/* SELECT */}
        <div className="form-group d-flex flex-column">
          <label>
            <h4>Select:</h4>
          </label>
          <select
            onChange={handleChange}
            name="select" //o nome da propriedade no state é select
            value={state.select}
          >
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
          </select>
        </div>

        {/* CHECKBOX */}
        {/* needs fixing */}
        <div className="form-group d-flex flex-column">
          <h4>Checkbox:</h4>
          <div>
            <input
              type="checkbox"
              name="checkbox1"
              checked= {state.checkbox1}
              onChange={handleChange}
              id='checkbox1'
            />
            <label htmlFor="checkbox1">checkbox one</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="checkbox2"
              checked= {state.checkbox2}
              onChange={handleChange}
              id='checkbox2'

            />
            <label htmlFor="checkbox2">checkbox two</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="checkbox3"
              checked= {state.checkbox3}
              onChange={handleChange}
              id='checkbox3'
            />
            <label htmlFor="checkbox3">checkbox three</label>
          </div>
        </div>
      </form>

      <div className="container">
        <h3>See results here:</h3>
        <p>Date: {state.date}</p>
        <p>Select: {state.select}</p>
        <p>Checkbox: {state.checkbox1 ? 'one' : state.checkbox2 ? 'two' : 'three'}</p>
      </div>
    </div>
  );
};

export default Quiz;
