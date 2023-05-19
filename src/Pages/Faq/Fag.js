import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { DarkModeContext } from '../../Contexts/AuthProvider/AuthProvider';


const Fag = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div style={{ marginTop: '100px' }} className={`shadow ${darkMode ? 'dark-mode' : ''}`}>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Html</Accordion.Header>
                    <Accordion.Body>
                        Learn how to code HTML & CSS for free at HTML.com. We've HTML tutorials & reference guides on tags, attributes and everything else you need to master HTML.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Css</Accordion.Header>
                    <Accordion.Body>
                        CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML). This language contains coding elements and is composed of these “cascading style sheets” which are equally called CSS files
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Javescript</Accordion.Header>
                    <Accordion.Body>
                        JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>C++</Accordion.Header>
                    <Accordion.Body>
                        C++ is a cross-platform language that can be used to create high-performance applications. C++ was developed by Bjarne Stroustrup, as an extension to the C ...
                        Designed by: Bjarne Stroustrup.These tutorials explain the C++ language from its basics up to the newest features introduced by C++11. Chapters have a practical orientation, with example ...
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Python</Accordion.Header>
                    <Accordion.Body>
                        Python has a simple syntax similar to the English language. Python has syntax that allows developers to write programs with fewer lines than some other programming languages. Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Node js</Accordion.Header>
                    <Accordion.Body>
                        Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Fag;

