import * as React from "react";

export function LogoImage(): JSX.Element {
    return (
        <div className="bg-white bg-opacity-5 rounded-full flex-shrink-0 object-cover p-10">
            <img src="logo.png" className="w-36 h-36" alt="logo" />
        </div>
    );
}