import rocketIcon from "../assets/rocket.svg";

export function Header() {
  return (
    <header>
      <img src={rocketIcon} alt="Rocket" />
      <p>
        <span>to</span>
        <span>do</span>
      </p>
    </header>
  );
}
