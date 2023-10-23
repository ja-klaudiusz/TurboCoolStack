
import { LogoImage } from "ui";

export default function Page(): JSX.Element {
  return (
    <div className="w-full items-center justify-between text-sm">
      <div className="h-screen w-full bg-app-dark-3 flex flex-col items-center justify-center">
        <header className="flex flex-row items-center justify-start text-white gap-4">
          <LogoImage />
          <h1 className="flex flex-col gap-2">
            <span className="text-2xl opacity-20">Web App Next.js</span>
            <div className="flex flex-col">
              <span className="Turbo">TURBO</span>
              <span className="CoolStack">CoolStack</span>
            </div>
          </h1>
        </header>
      </div>
    </div>
  );
}
