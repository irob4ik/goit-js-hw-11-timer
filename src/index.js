import './styles.css';

// const refs = {
// }

class CountdownTimer {
  constructor(arg) {
    this.selector = arg.selector;
    this.targetDate = arg.targetDate;
  }
  
  get refs() {
    const timer = document.querySelector(this.selector);
    const refs = {
      daysField: timer.querySelector('[data-value="days"]'),
      hoursField: timer.querySelector('[data-value="hours"]'),
      minsField: timer.querySelector('[data-value="mins"]'),
      secsField: timer.querySelector('[data-value="secs"]'),
    }

    return refs;
  }
  
  get target() {
    const time = this.targetDate.getTime() - Date.now();
    const startTimer = {
      days: Math.floor(time / (1000 * 60 * 60 * 24)),
      hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mins: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      secs: Math.floor((time % (1000 * 60)) / 1000),
    }
    
    return startTimer;
  }

  startShow() {
    
    console.log(this.target);

  }
};

const letsCountDown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 19, 2021'),
});

letsCountDown.startShow();