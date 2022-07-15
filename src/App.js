import Container from "./Components/Container";
import "./styles/Layout.css";
import NavBar from "./Components/NavBar";

const myCard = [
  { name: "Rebaz", position: "CEO & Founder" },
  { name: "Zanyar", position: "Manager" },
  { name: "Yad", position: "Accountant" },
  { name: "Milad", position: "UKH" },
  { name: "Ali", position: "Designer" },
  { name: "Abdullah", position: "Comp" },
  { name: "Suham", position: "Worker" },
  { name: "Hezha", position: "Employee" },
];

function App() {
  return (
    <div>
      <div className=" flex container   gap-16  ">
        <div
          className=" flex flex-wrap justify-around p-10 gap-16  ml-10"
          id="flex"
        >
          {myCard.map((person) => {
            return (
              <div className="w-72">
                <Container name={person.name} position={person.position} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
