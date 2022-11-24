import React, { useState } from 'react'
import { Form } from 'react-bootstrap';

const FormTodo = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("");
    };

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label><b>Add Todo</b></Form.Label>
            <Form.Control type="text" className="input" value={value}
            onChange = { e=> setValue(e.target.value)} placeholder="Add new Todo"/>
        </Form.Group>
        <Botton variant="primary mb-3" type="submit">
            Submit
        </Botton>
    </Form>
  );
}

export default FormTodo;
