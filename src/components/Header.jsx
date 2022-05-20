import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation().pathname;

  return (
    <div className="main-header">
      <h1>Tenzies</h1>
      {(location === `/play` || location === `/`) && (
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      )}
    </div>
  );
};

export default Header;
