export default function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="m-1 w-12 h-12 border-2 leading-9 border-black bg-slate-50 outline-0 text-2xl"
    >
      {value}
    </button>
  );
}
