import './InputSearch.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function InputSearch() {
    return (
      <div className='input-container'>
  
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="¿Qué quieres buscar?"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Button>
        </InputGroup>
  
      </div>
    );
  }
  
  export default InputSearch;