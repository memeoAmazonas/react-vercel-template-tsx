import { Navbar } from '~/components';
import { LayoutContainer } from '~/styled-components';

export type LayoutProps = {
  children: JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
}
