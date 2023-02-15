export default function PlayButton({ audio }: { audio: any }) {
  const sound = new Audio(audio);
  console.log(audio);

  return (
    <button className="group" type="button" onClick={() => sound.play()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 75 75"
        className=""
      >
        <g fill="#A445ED" fill-rule="evenodd">
          <circle
            cx="37.5"
            cy="37.5"
            r="37.5"
            opacity=".25"
            className="group-hover:fill-[#A445ED] group-hover:opacity-100 "
          />
          <path d="M29 27v21l21-10.5z" className="group-hover:fill-white" />
        </g>
      </svg>
    </button>
  );
}
