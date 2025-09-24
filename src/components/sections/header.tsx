import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Logo />
        <Button className="font-bold hidden sm:flex">
          EU QUERO AGORA!
        </Button>
      </div>
    </header>
  );
}
