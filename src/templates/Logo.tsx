import Image from 'next/image';
// import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  // const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center logo-container ${fontStyle}`}>
      <Image src="/assets/images/logo.png" width="876" height="285" />
      
    </span>
  );
};

export { Logo };
