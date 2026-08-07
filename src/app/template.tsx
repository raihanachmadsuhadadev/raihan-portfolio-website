import { IntroLoader } from "@/components/ui/IntroLoader";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <IntroLoader />
      {children}
    </>
  );
}