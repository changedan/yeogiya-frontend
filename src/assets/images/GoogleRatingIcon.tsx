import { SVGProps } from "@/types/assets";

const GoogleRatingIcon = ({ css }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <circle cx="6" cy="6" r="6" fill="#3177FF" />
      <circle cx="6" cy="6" r="3" fill="white" />
    </svg>
  );
};

export default GoogleRatingIcon;
