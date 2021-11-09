import {  Spinner } from 'react-bootstrap'

// Spinner de carga 
const Loading = () => {
  return (
    <div className="mb-2">
      
          <Spinner
            as="span"
            animation="border"
            role="status"
            aria-hidden="true"
            size="lg"
          />
          <h4>Cargando...</h4>
        
    </div>
  )
}

export default Loading