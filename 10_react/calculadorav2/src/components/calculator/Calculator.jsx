import React, { Component } from 'react'

import './Calculator.css'

import Button from './Button/Button'
import Display from './Display/Display'

const defaultState = {
    displayValue: '0',
    operationToCalculate: '',
    
    clearDisplay: false
}

export default class Calculator extends Component {

    constructor(props) {
        super(props)

        this.state = { ...defaultState }

        this.addNumber = this.addNumber.bind(this)
        this.clearDisplay = this.clearDisplay.bind(this)
        this.addOperation = this.addOperation.bind(this)
    }

    clearDisplay() {
        this.setState({ ...defaultState })
    }

    addNumber(digit) {

        if (this.state.displayValue.includes('.') && digit === '.') return

        if (parseFloat(this.state.displayValue) === 0 && digit === '0') return

        let displayValue = (this.state.clearDisplay ? '' : this.state.displayValue) + digit

        if (displayValue[0] === '0') displayValue = displayValue.substring(1)

        this.setState({ displayValue, clearDisplay: false })
    }

    addOperation(operation) {

        if (operation === '=') {
            if (this.state.operationToCalculate === '') return;

            let firstValueToCalculate = eval(`${this.state.firstValueToCalculate} ${this.state.operationToCalculate} ${parseFloat(this.state.displayValue)}`)
            let displayValue = firstValueToCalculate.toString()

            this.setState({
                displayValue,
                firstValueToCalculate: 0,
                operationToCalculate: ''
            })
        } else {
            let firstValueToCalculate = parseFloat(this.state.displayValue)

            this.setState({
                firstValueToCalculate,
                operationToCalculate: operation,
                clearDisplay: true
            })
        }
    }

    render() {
        return (
            <div className='calculator'>
                <h1 className='calculator__title'>Calculator</h1>
                <div className='calculator__content'>
                    <Display value={this.state.displayValue} otherClasses='calculator__span4' />
                    <Button value='AC' click={this.clearDisplay} otherClasses='calculator__span3' />
                    <Button value='/' click={this.addOperation} otherClasses='calculator__button--operation' />
                    <Button value='7' click={this.addNumber} />
                    <Button value='8' click={this.addNumber} />
                    <Button value='9' click={this.addNumber} />
                    <Button value='*' click={this.addOperation} otherClasses='calculator__button--operation' />
                    <Button value='4' click={this.addNumber} />
                    <Button value='5' click={this.addNumber} />
                    <Button value='6' click={this.addNumber} />
                    <Button value='-' click={this.addOperation} otherClasses='calculator__button--operation' />
                    <Button value='1' click={this.addNumber} />
                    <Button value='2' click={this.addNumber} />
                    <Button value='3' click={this.addNumber} />
                    <Button value='+' click={this.addOperation} otherClasses='calculator__button--operation' />
                    <Button value='0' otherClasses='calculator__span2' click={this.addNumber} />
                    <Button value='.' click={this.addNumber} />
                    <Button value='=' click={this.addOperation} otherClasses='calculator__button--operation' />
                </div>
            </div>
        )
    }
}