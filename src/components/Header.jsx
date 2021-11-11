import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header id="header">
            <span>
                Created by&nbsp;
                <a href="https://github.com/SyedFasiuddin">Syed Fasiuddin</a>
                &nbsp;with&nbsp;
                <FontAwesomeIcon icon={faMugHot} />
            </span>
        </header>
    );
}
