const Plus = ({ color, onClick }: { color: string; onClick: () => void }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    onClick={onClick}
  >
    {" "}
    <path
      stroke={color}
      d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M17,13h-4v4h-2v-4H7v-2h4V7h2v4h4V13z"
    />
  </svg>
);

export default Plus;
