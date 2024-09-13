import { Component } from "react";
import propTypes from 'prop-types'

export default class ErrorBoundary extends Component{

    constructor(props){
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error){
        return { hasError: true}
    }

    componentDidCatch(error, errorInfo)
    {
        console.log(error, errorInfo)
    }

    render()
    {
        if(this.state.hasError){
            return <p style={{marginTop:'20%',marginLeft:'30%',color:'Red',fontSize:'30px',font:'bold'}}>Something went wrong.</p>
        }
        return this.props.children
    }
}

ErrorBoundary.propTypes={
    children: propTypes.node.isRequired
}