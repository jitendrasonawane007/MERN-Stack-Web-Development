/*
Created By Jitendras On 01 - 02 - 2020
*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Container, Card, Col, Button, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddMentor from "./AddMentor";

function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let result = await axios("http://localhost:8080/getUser");
    setUserData({ userData: result.data });
  };

  let DeleteUser = async userId => {
    let postParam = {};
    postParam.userId = userId;
    await axios.post("http://localhost:8080/deletUser", postParam);
    useEffect();
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card style={{ width: "60rem" }}>
            {/* Router start */}
            <Router>
              {/* Card- body start */}
              <Card.Body>
                <Card.Title>Admin Console</Card.Title>
                <ListGroup>
                  {Object.keys(userData).length != 0 ? (
                    userData.userData.map(userDetls => {
                      return (
                        <ListGroup.Item>
                          {" "}
                          {userDetls.firstName}
                          <Row>
                            <Col>
                              <Button
                                size="sm"
                                onClick={() => {
                                  DeleteUser(userDetls.empId);
                                }}
                                className="float-right"
                              >
                                Delete
                              </Button>
                            </Col>
                            <Col>
                              <Button size="sm" className="flaot-right">
                                Edit
                              </Button>
                            </Col>
                            <Col>
                              <Button size="sm" className="flaot-right">
                                Update
                              </Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      );
                    })
                  ) : (
                    <div></div>
                  )}
                  {/* < ListGroup.Item defaultValue=""> Cras justo odio </ListGroup.Item> */}
                </ListGroup>
                <Card.Text>
                  <Link to="/addMentor">
                    <Button>Add</Button>
                  </Link>
                </Card.Text>
                <Switch>
                  <Route exact path="/"></Route>
                  <Route exact path="/addMentor" component={AddMentor}></Route>
                </Switch>
              </Card.Body>
              {/* card-body End */}
            </Router>
            {/* Router End */}
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
export default App;
