import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="#about-us">
            <a>About Us</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Experience RB Construction\'s Expertise\n'}
            <span className="text-primary-500">Building your vision, brick by brick</span>
          </>
        }
        description="From concept to completion"
        button={
          <Link href="#about-us">
            <a>
              <Button xl>Learn More</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
