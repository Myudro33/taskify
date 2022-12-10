import * as React from "react";
import '../App.css'
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";

export interface IInputProps {
  todo:string
  setTodo:React.Dispatch<React.SetStateAction<string>>
  handleAdd:(e:React.FormEvent)=>void
}

export function Input({todo,setTodo,handleAdd}: IInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  return (
    <div style={{ marginTop: "50px" }}>
      <Container>
        <Form onSubmit={(e)=>{
          handleAdd(e)
          inputRef.current?.blur()
        }}>
          <Row style={{display:'flex',justifyContent:'center'}} >
            <Col xs={8} md={10}>
              <Form.Control ref={inputRef} value={todo} onChange={(e)=>setTodo(e.target.value)} className="form_input" type="text" placeholder="Enter Task..." />
            </Col>
            <Col xs={1} md={1}>
              <Button type="submit" className="submit_button" variant="success">Add</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
