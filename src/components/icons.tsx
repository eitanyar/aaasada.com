import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const PhoneIcon: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.734-1.455L0 24zm6.59-4.846c1.62.962 3.21 1.454 4.816 1.458 5.4 0 9.793-4.394 9.797-9.799.002-2.618-1.01-5.08-2.85-6.923-1.841-1.843-4.29-2.858-6.915-2.859-5.407 0-9.803 4.397-9.807 9.802-.001 1.734.484 3.426 1.446 4.908l-.989 3.61 3.7.971-.2.132zM17.486 14.4c-.3-.15-1.782-.88-2.05-.975-.268-.099-.465-.148-.659.15-.195.297-.753.95-.922 1.14-.17.19-.338.212-.638.062-1.398-.7-2.42-1.24-3.229-2.185-.211-.247-.419-.489-.624-.726-.299-.345.088-.501.383-.799.112-.113.225-.262.338-.374.075-.075.125-.138.175-.2.1-.2.05-.375-.025-.524-.075-.15-.659-1.591-.902-2.176-.237-.57-.497-.487-.68-.497-.19-.01-.408-.012-.625-.012-.218 0-.573.08-8.73 1.05-.33.36-.5.789-.5 1.238 0 2.22 1.6 4.362 1.82 4.66.222.298 3.12 4.764 7.558 6.678 1.055.456 1.88.728 2.525.93.106.033.208.062.308.087 1.02.324 1.95.278 2.68.17.81-.12 1.78-.73 2.03-1.44.25-.7.25-1.3.175-1.44-.075-.15-.27-.225-.57-.375z" />
  </svg>
);

export const StarIcon: React.FC<IconProps & { fillPercent?: number }> = ({
  size = 18,
  fillPercent = 100,
  ...props
}) => {
  const uniqueId = React.useId().replace(/:/g, "");
  const gradientId = `star-grad-${uniqueId}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={`url(#${gradientId})`}
      stroke="var(--primary-gold)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset={`${fillPercent}%`} stopColor="var(--primary-gold)" />
          <stop offset={`${fillPercent}%`} stopColor="transparent" stopOpacity="1" />
        </linearGradient>
      </defs>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

export const CheckIcon: React.FC<IconProps> = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const LocationPinIcon: React.FC<IconProps> = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const KosherStampIcon: React.FC<IconProps> = ({ size = 40, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    {...props}
  >
    {/* Outer Double Gold Ring */}
    <circle cx="50" cy="50" r="46" stroke="var(--primary-gold)" strokeWidth="2" />
    <circle cx="50" cy="50" r="42" stroke="var(--primary-gold)" strokeWidth="1" strokeDasharray="3 3" />
    
    {/* Inner Green Circle */}
    <circle cx="50" cy="50" r="38" fill="var(--secondary-green)" />
    
    {/* Star of David Outline */}
    <polygon
      points="50,22 65,55 35,55"
      stroke="var(--primary-gold)"
      strokeWidth="1.5"
      fill="none"
    />
    <polygon
      points="50,68 65,35 35,35"
      stroke="var(--primary-gold)"
      strokeWidth="1.5"
      fill="none"
    />
    
    {/* Small Center Seal Seal */}
    <circle cx="50" cy="46" r="6" fill="var(--primary-gold)" />
    
    {/* Text-like circular decorations */}
    <path
      id="stamp-text-path-1"
      d="M20,50 A30,30 0 1,1 80,50"
      fill="none"
      stroke="transparent"
    />
  </svg>
);

export const EnvelopeIcon: React.FC<IconProps> = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
