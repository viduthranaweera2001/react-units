const Student = () => {
    return React.createElement("div", {}, [
        React.createElement("h3", {}, "Amal"),
        React.createElement("h3", {}, 20),
        React.createElement("h3", {}, "Gampaha")
    ]);
};

const StudentCard = () => {
    return React.createElement("div", {},
        [React.createElement("img",
            {
                src: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "Student Image",
                    className: "student-image"

            }),

            React.createElement(Student)]
    )
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [React.createElement("h1", {}, "My React App"),
            React.createElement(StudentCard),
            React.createElement(StudentCard)
        ]
    );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));