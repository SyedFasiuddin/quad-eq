import React, { Component } from 'react';
import Buttons from './Buttons';

export default class SolvingBlock extends Component {
    constructor() {
        super();
        this.state = {
            a: 0,
            b: 0,
            c: 0,
            firstRoot: 0,
            secondRoot: 0,
            typeOfRoots: '',
        };
    }

    solve = (a, b, c) => {
        let d = b * b - 4 * a * c;
        let firstRoot;
        let secondRoot;
        let typeOfRoots;
        if (d > 0) {
            firstRoot = ((-b + Math.sqrt(d)) / (2 * a)).toFixed(3);
            secondRoot = ((-b - Math.sqrt(d)) / (2 * a)).toFixed(3);
            typeOfRoots = 'Roots are real and different';
        } else if (d === 0) {
            firstRoot = secondRoot = (-b / (2 * a)).toFixed(3);
            typeOfRoots = 'Roots are real and same';
        } else {
            let realPart = (-b / (2 * a)).toFixed(3);
            let imaginaryPart = (Math.sqrt(-d) / (2 * a)).toFixed(3);
            firstRoot = `${realPart}+${imaginaryPart}i`;
            secondRoot = `${realPart}-${imaginaryPart}i`;
            typeOfRoots = 'Roots are complex and different';
        }
        return { firstRoot, secondRoot, typeOfRoots };
    };

    calculateHandler = () => {
        let { firstRoot, secondRoot, typeOfRoots } = this.solve(
            this.state.a,
            this.state.b,
            this.state.c
        );
        this.setState({ firstRoot });
        this.setState({ secondRoot });
        this.setState({ typeOfRoots });
    };

    changeHandler = e => {
        let char = e.target.className;
        if (char === 'a') this.setState({ a: parseFloat(e.target.value) });
        else if (char === 'b') this.setState({ b: parseFloat(e.target.value) });
        else if (char === 'c') this.setState({ c: parseFloat(e.target.value) });
    };

    clearHandler = () => {
        this.setState({
            firstRoot: 0,
            secondRoot: 0,
            typeOfRoots: '',
        });
        document.querySelectorAll('input').forEach(i => {
            i.value = ' ';
        });
    };

    render() {
        return (
            <div id="container">
                <div id="block">
                    <div id="container-head">
                        Quadratic Equation:
                        <span id="equation">
                            &nbsp;ax&#178;&nbsp;+&nbsp;bx&nbsp;+&nbsp;c&nbsp;=&nbsp;0
                        </span>
                    </div>
                    <div id="value-inputs">
                        <span>
                            a:
                            <input
                                type="text"
                                name="input"
                                id="inputs"
                                className="a"
                                onChange={this.changeHandler}
                            />
                        </span>
                        <span>
                            b:
                            <input
                                type="text"
                                name="input"
                                id="inputs"
                                className="b"
                                onChange={this.changeHandler}
                            />
                        </span>
                        <span>
                            c:
                            <input
                                type="text"
                                name="input"
                                id="inputs"
                                className="c"
                                onChange={this.changeHandler}
                            />
                        </span>
                    </div>
                    <div id="btn-div">
                        <Buttons type="Calculate" fun={this.calculateHandler} />
                        <Buttons type="Clear" fun={this.clearHandler} />
                    </div>
                    <div id="output">
                        <span>
                            First Root:&nbsp;
                            <span id="root1">{this.state.firstRoot}</span>
                        </span>
                        <span>
                            Second Root:&nbsp;
                            <span id="root2">{this.state.secondRoot}</span>
                        </span>
                        <span>
                            <span id="root-type">{this.state.typeOfRoots}</span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
