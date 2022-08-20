import React from 'react'

function App() {
  return <>
    <Child name="Tigran" />
    <Child name="Armen" surname="Marjinyan" />
  </>
}


// Exmaple 1 with default props value

// function Child({name, surname="Hovhannisyan"}){
//     return<>
//         <p>Hello <b>{String(name)} {String(surname)}</b></p>
//     </>
// }




// Exmaple 2 with defaultProps property

// function Child({name, surname}){
//     return<>
//         <p>Hello <b>{String(name)} {String(surname)}</b></p>
//     </>
// }

// Child.defaultProps = {surname: "Hovhannisyan"}




// Exmaple 3 with defaultProps static field for class components

class Child extends React.Component {
    static defaultProps = {surname: "Hovhannisyan"}

    render() {
        const {name, surname} = this.props;
        return<>
            <p>Hello <b>{String(name)} {String(surname)}</b></p>
        </>
    }
}

export default App
