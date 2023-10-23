import * as React from "react";

export interface AppInfoProps {
    info: string
}

export function AppInfo({ info }: AppInfoProps): JSX.Element {
    return (
        <h1 className="flex flex-col gap-2">
            <span className="text-2xl opacity-20">{info}</span>
            <div className="flex flex-col">
                <span className="Turbo">TURBO</span>
                <span className="CoolStack">CoolStack</span>

            </div>

        </h1>
    );
}