import './styles.css';

class CountdownTimer {
  constructor(arg) {
    this.selector = arg.selector;
    this.targetDate = arg.targetDate;
  }
  
  set domRefs({days, hours, mins, secs}) {
    const timer = document.querySelector(this.selector);
    timer.querySelector('[data-value="days"]').textContent = days;
    timer.querySelector('[data-value="hours"]').textContent = hours;
    timer.querySelector('[data-value="mins"]').textContent = mins;
    timer.querySelector('[data-value="secs"]').textContent = secs;

    return;
  }
  
  get targetTime() {
    const time = this.targetDate.getTime() - Date.now();
    
    if (time < 0) {
      clearInterval(this.intervalId);
    }

    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
    return {days, hours, mins, secs};
  }

  pad(value) {
    return String(value).padStart(2, '0');
  };

  startShow() {
    this.intervalId = setInterval(() => {
      this.domRefs = this.targetTime;
    }, 1000);
  }
};

const letsCountDownOnce = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 19, 2021'),
});

const letsCountDownTwice = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Jul 17, 2021'),
});

letsCountDownOnce.startShow();
letsCountDownTwice.startShow();