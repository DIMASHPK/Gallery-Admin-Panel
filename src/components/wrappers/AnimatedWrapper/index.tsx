import React from 'react';
import { ChildrenType } from '~/types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import './styles.css';

type AnimatedWrapperPropsType = ChildrenType;

const AnimatedWrapper: React.FC<AnimatedWrapperPropsType> = ({ children }) => {
  const location = useLocation();

  return (
    <TransitionGroup className="animationWrapper">
      <CSSTransition
        key={location.pathname}
        classNames="routingAnimation"
        timeout={300}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AnimatedWrapper;
