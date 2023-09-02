const Smile = ({ color }: { color: string }) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5 9.45312H15.51M9.5 9.45312H9.51M22.5 12.4531C22.5 17.976 18.0228 22.4531 12.5 22.4531C6.97715 22.4531 2.5 17.976 2.5 12.4531C2.5 6.93028 6.97715 2.45312 12.5 2.45312C18.0228 2.45312 22.5 6.93028 22.5 12.4531ZM16 9.45312C16 9.72927 15.7761 9.95312 15.5 9.95312C15.2239 9.95312 15 9.72927 15 9.45312C15 9.17698 15.2239 8.95312 15.5 8.95312C15.7761 8.95312 16 9.17698 16 9.45312ZM10 9.45312C10 9.72927 9.77614 9.95312 9.5 9.95312C9.22386 9.95312 9 9.72927 9 9.45312C9 9.17698 9.22386 8.95312 9.5 8.95312C9.77614 8.95312 10 9.17698 10 9.45312ZM12.5 17.9531C15.0005 17.9531 17 16.1201 17 14.4531H8C8 16.1201 9.9995 17.9531 12.5 17.9531Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Smile;
