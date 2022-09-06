import React, { useState } from 'react';
import { Header, Container, ModalContainer, Footer, Body, LeftSection, RightSection } from './styled';
const Modal = (isOpen = true, handleSubmit) => {

    const [field, setField] = useState([])

    const handleCheckbox = (e) => {
        if (field.includes(e.target.value)) {
            const temp = field.filter(el => el !== e.target.value)
            setField(temp)
        } else {
            setField([...field, e.target.value])
        }
    }

    return isOpen &&
        <Container>
            <ModalContainer>
                <Header>
                    {`Authentication ${field.length}`}
                </Header>
                <Body>
                    <LeftSection>
                        <h2>Telus</h2>
                        <h3> mobility</h3>
                        <p>
                            Arun Chaudhary
                        </p>
                        <p>
                            BAN 123456789
                            BAN 123456789
                            BAN 123456789
                        </p>
                    </LeftSection>
                    <RightSection>
                        <label>
                            <input type="checkbox" value='field1'
                                defaultChecked={false}
                                onClick={handleCheckbox}
                            />
                            field2
                        </label>
                        <label>
                            <input type="checkbox" value='field2'
                                defaultChecked={false}
                                onClick={handleCheckbox}
                            />
                            field3
                        </label>
                        <label>
                            <input type="checkbox" value='field3'
                                defaultChecked={false}
                                onClick={handleCheckbox}
                            />
                            field4
                        </label>
                        <label>
                            <input type="checkbox" value='field4'
                                defaultChecked={false}
                                onClick={handleCheckbox}
                            />
                            field5
                        </label>
                        <label>
                            <input type="checkbox" value='field5'
                                defaultChecked={false}
                                onClick={handleCheckbox}
                            />
                            field6
                        </label>
                        <label>
                            <input type="checkbox" value='field6'
                                defaultChecked={false}
                                onClick={handleCheckbox}
                            />
                            field7
                        </label>
                    </RightSection>
                </Body>
                <Footer>
                    <button
                        disabled={field.length < 3}
                        onclick={handleSubmit && handleSubmit}>
                        Submit
                    </button>
                </Footer>
            </ModalContainer>
        </Container>
}

export default Modal;