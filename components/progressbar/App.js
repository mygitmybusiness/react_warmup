import ProgressBar from "./ProgressBar";

export default function App() {
  return (
    <div>
      <ProgressBar percentage={25} />
      <ProgressBar percentage={50} />
      <ProgressBar percentage={75} />
      <ProgressBar percentage={100} />
    </div>
  );
}