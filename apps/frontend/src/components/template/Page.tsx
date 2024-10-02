import Header from "./Header";
import Footer from "./Footer";

export interface PageProps {
  children: any;
  className?: string;
  noHeader?: boolean;
  noFooter?: boolean;
}

const Page = ({ children, className, noHeader, noFooter }: PageProps) => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #2d0064 0%, #0d001c 100%)",
      }}
    >
      <div
        className="flex-1 flex flex-col w-screen"
        style={{ background: 'url("/background.png")' }}
      >
        {!noHeader && <Header />}
        <main className={`flex-1 flex flex-col ${className ?? ""}`}>
          {children}
        </main>
        {!noFooter && <Footer />}
      </div>
    </div>
  );
};

export default Page;
