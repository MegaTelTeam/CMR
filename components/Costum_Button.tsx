import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CustomButtonProps {
  inside: boolean;
  link: string;
  rel?: string;
  displayIcon1?: boolean;
  displayIcon2?: boolean;
  text: string;
  text_className?: string;
  width?: number;
  height?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  inside,
  link,
  rel,
  displayIcon1 = true,
  displayIcon2 = true,
  text,
  text_className,
  width = 450,
  height = 70,
}) => {
  const LinkOrA = (
    link: string,
    rel: string | undefined,
    inside: boolean,
    children: React.ReactNode
  ) => {
    return inside ? (
      <Link href={link}>{children}</Link>
    ) : (
      <a rel={rel} href={/^https?:\/\//.test(link) ? link : "https://" + link} target="_blank">
        {children}
      </a>
    );
  };

  return LinkOrA(
    link,
    rel,
    inside,
    <div
      className={`bg-[#9415301A] flex flex-row items-center justify-center shadow-md py-2.5 px-8 gap-[10px] rounded-md`}
      style={{ maxWidth: `${width}px`, minWidth: '50px', minHeight: `${height}px` }}
    >
      <p className={`${text_className} font-medium group-hover:text-white`}>
        {text}
      </p>
      {displayIcon1 && (
        <Image
          src="/images/pdf.svg"
          width={24}
          height={24}
          alt="pdf"
        />
      )}
      {displayIcon2 && (
        <Image
          src="/images/right_arrow.svg"
          width={8}
          height={11}
          alt="download"
        />
      )}
    </div>
  );
};

export default CustomButton;
