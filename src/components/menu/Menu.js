import React, {Component} from  'react';
import {Media, Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Row, Col} from 'reactstrap';

class Menu extends Component {

    constructor(props){
        super(props);
        this.state = {
          selectedEmp: null
        }

        this.onSelectEmp().bind(this)
    }

    onSelectEmp(emp){
      this.setState({
        selectedEmp: emp
      })
    }
    
    renderEmp(emp){
            if(emp != null){
                return(
                    <Card>
                        <CardImg top width="100%" src={"./static/images/Facade Test Employee square.png"} alt={`${emp.first_name}_${emp.last_name}_${emp.empNumber}`} />
                        <CardBody>
                            <CardTitle tag="h5">{`${emp.first_name} ${emp.last_name}`}</CardTitle>
                            <CardText>
                                <p>{emp.bio}</p>
                            </CardText>
                        </CardBody>
                    </Card>
                )
            }
    }

    render(){
        const {employees} = this.props;

        return(
            <div className="container">
                <div className="row">
                    <Row>
                        {employees ? employees.map(employee => (
                            <Col key={employee.id} xs="6" sm="4" style={{marginBottom: "10mm"}}>
                                <Media>
                                    <Card onClick={() => this.onSelectEmp(employee)}>
                                        <CardImg top width="100%" src={"./static/images/Facade Test Employee square.png"} alt={`${employee.first_name}_${employee.last_name}_${employee.empNumber}`} />
                                        <CardBody>
                                            <CardTitle tag="h5">{employee.role}</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">{`${employee.first_name} ${employee.last_name}`} </CardSubtitle>
                                            <CardText>
                                                <p>{employee.email}</p>
                                                <p>{employee.empNumber}</p>
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Media>
                            </Col>
                        )): null}
                    </Row>
                </div>
            </div>
        );
    }
}

export default Menu;