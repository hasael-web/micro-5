import { Component, ReactNode } from "react";

interface PropsI {
  dataTime?: string | number;
  resetCountDown: boolean;
  checkConditon: (b: boolean) => void;
}

interface ICountDown {
  timeRemaining: number;
}

export default class ResultTime extends Component<PropsI, ICountDown> {
  private timerInterval: NodeJS.Timeout | null = null;

  constructor(props: PropsI) {
    super(props);
    this.state = {
      timeRemaining: 0,
    };
  }

  componentDidMount(): void {
    this.startCountdown();
  }

  componentDidUpdate(prevProps: PropsI): void {
    if (
      this.props.dataTime !== prevProps.dataTime ||
      this.props.resetCountDown !== prevProps.resetCountDown
    ) {
      this.stopCountdown();
      this.startCountdown();
    }
  }

  componentWillUnmount(): void {
    this.stopCountdown();
  }

  startCountdown(): void {
    if (this.props.dataTime !== undefined) {
      const targetTime =
        this.props.resetCountDown === true
          ? new Date(this.props.dataTime).getTime()
          : 0;
      console.log("target time : ", targetTime);

      if (targetTime > 0) {
        this.timerInterval = setInterval(() => {
          const currentTime = new Date().getTime();
          const timeRemaining = Math.max(targetTime - currentTime, 0) / 1000;
          this.setState({ timeRemaining });
          if (timeRemaining <= 0) {
            this.stopCountdown(); // Hentikan interval jika timeRemaining <= 0
            const check = true;
            this.props.checkConditon(check);
          }
        }, 500);
      }
    }
  }

  stopCountdown(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.timerInterval = null;
    this.setState({ timeRemaining: 0 });
  }

  render(): ReactNode {
    const { timeRemaining } = this.state;
    // console.log(timeRemaining);

    let days;
    let hours;
    let minutes;
    let seconds;

    if (!Number.isNaN(timeRemaining)) {
      days = Math.floor(timeRemaining / (3600 * 24));
      hours = Math.floor((timeRemaining % (3600 * 24)) / 3600);
      minutes = Math.floor((timeRemaining % 3600) / 60);
      seconds = Math.floor(timeRemaining % 60);
    }

    // console.log(day);

    return (
      <>
        <section className="flex gap-7">
          <span>{Number(days) > 0 ? days : "0"} days</span>
          <span>{hours} hours</span>
          <span>{minutes} min</span>
          <span>{seconds} sec</span>
        </section>
      </>
    );
  }
}
