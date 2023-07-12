import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

import 'status-indicator/styles.css';

import { inject } from '@vercel/analytics';
 
inject();

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
