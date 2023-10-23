
import { AppInfo, LogoImage } from "ui";

export default function Page(): JSX.Element {
  return (
    <div className="w-full items-center justify-between text-sm">
      <div className="h-screen w-full bg-app-dark-3 flex flex-col items-center justify-center">
        <header className="flex flex-row items-center justify-start text-white gap-4">
          <LogoImage />
          <AppInfo info="Web App Next.js" />
        </header>
      </div>
    </div>
  );
}
