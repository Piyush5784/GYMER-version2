import React from "react";

const PageText = ({ text }) => {

    const formattedText = text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            {index !== text.length - 1 && <br />}
        </React.Fragment>
    ));

    return <>
        <p style={{ textAlign: "center", fontFamily: "Inter", fontWeight: "300" }}>{formattedText}</p>
    </>;
};

export default PageText;
