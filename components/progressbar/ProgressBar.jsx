export default function ProgressBar({ percentage }) {
    return (
      <div className="progress">
        <div className="blue" style={{ width: `${percentage}%` }}>
          {percentage > 0 && <span>{`${percentage}%`}</span>}
        </div>
      </div>
    );
  }
  