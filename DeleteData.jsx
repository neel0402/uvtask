import { BadgeX } from "lucide-react";
import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function DeleteData() {
    let [email, setEmail] = useState("");
    let [userArr, setUserArr] = useState([]);


    // add data to array
    const addDataToArr = () => {
        setUserArr([...userArr, email]);
        setEmail("");
    };

    const deleteControl = (index) => {

        let filterData = userArr.filter((e, i) => i !== index)        
        // console.log(" filterData:", filterData);
        setUserArr(filterData)
    }
    return (
        <>
            {/* <h1>Email is {email}</h1> */}
            <Form className="border p-3 border-dark rounded-3">
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        value={email}
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </FormGroup>
                <Button onClick={() => addDataToArr()} color="danger" className="w-100">
                    Submit
                </Button>
            </Form>
            <Table className="w-75"
            >
                <thead>
                    <tr>
                        <th>
                            SR no.
                        </th>
                        <th>
                            Name
                        </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userArr.map((e, i) => {
                        return (
                        <tr key={i}>
                            <th scope="row">{i + 1}
                            </th>
                            <td>
                                {e}
                            </td>
                            <td color="red"><BadgeX color="#f11e1e" role="button"
                            onClick={()=>deleteControl(i)}
                            /></td>
                        </tr>
                        )
                    })}

                </tbody>
            </Table>

        </>
    );
}