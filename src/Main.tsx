import * as React from 'react';
import * as fs from "fs";

const Main = () => {

    const [text, setText] = React.useState("Loading");

    fs.readFile("foo.txt", 'utf-8', (err, data) => {
        if(err){
            alert("An error ocurred reading the file :" + err.message);
            return;
        }

        // Change how to handle the file content
        setText("The file content is : " + data);
    });

    return <div>
        {text}
    </div>
}

export default Main;