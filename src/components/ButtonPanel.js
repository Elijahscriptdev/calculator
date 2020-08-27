import React from 'react';
import Button from './Button';
import '../styles/ButtonPanel.css';

const ButtonPanel = () => (
  <div className="button-panel">
    <div className="group">
      <Button name="AC" color="orange" />
      <Button name="+/-" color="orange" />
      <Button name="%" color="orange" />
      <Button name="÷" color="orange" />
    </div>
    <div className="group">
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="X" color="orange" />
    </div>
    <div className="group">
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" color="orange" />
    </div>
    <div className="group">
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" color="orange" />
    </div>
    <div className="group">
      <Button name="0" wide />
      <Button name="." />
      <Button name="=" color="orange" />
    </div>
  </div>
);

export default ButtonPanel;
