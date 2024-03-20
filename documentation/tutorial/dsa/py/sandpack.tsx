import React from "react";
import clsx from "clsx";
import { useSandpack } from "@codesandbox/sandpack-react";
import { TutorialSandpack } from "@site/src/prepverse-theme/tutorial-sandpack";
import { TutorialUpdateFileButton } from "@site/src/prepverse-theme/tutorial-update-file-button";
import { removeActiveFromFiles } from "@site/src/utils/remove-active-from-files";

export const Sandpack = ({ children }: { children: React.ReactNode }) => {
    return (
        <TutorialSandpack
            files={files}
            finalFiles={finalFiles}
        >
            {children}
        </TutorialSandpack>
    );
};

const AppTsxCode = /* jsx */ `
export default function App() {
    return <h1>Sum = </h1>
}  
`.trim();

const UpdatedAppTsxCode = /* tsx */ `
export default function App() {
    return <h1>Sum = 7</h1>
}
`.trim();

const BaseAppTsxCode = /* tsx */ `
import App from "./src/App";
export default App;
`.trim();

const PyCode = /* ts */ `
def Sum(a, b):
    print(a+b)
Sum(2, 5)
`.trim();

export const FocusOnDataProviderFile = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { sandpack } = useSandpack();

    return (
        <span
            onClick={() => {
                sandpack.openFile("/Code/Python/Sum.py");
            }}
            className={clsx(
                "cursor-pointer",
                "text-refine-link-light dark:text-refine-link-dark",
                "[&>code]:!text-refine-link-light dark:[&>code]:!text-refine-link-dark",
                "hover:underline",
            )}
        >
            {children}
        </span>
    );
};

export const AddDataProviderToRefine = () => {
    const { sandpack } = useSandpack();

    return (
        <TutorialUpdateFileButton
            onClick={() => {
                sandpack.updateFile("/src/App.tsx", UpdatedAppTsxCode);
                sandpack.setActiveFile("/src/App.tsx");
            }}
        />
    );
};

export const initialFiles = {
    "src/App.tsx": {
        code: AppTsxCode,
        // active: true,
        hidden: true,
    },
    "App.tsx": {
        code: BaseAppTsxCode,
        hidden: true,
    },
};

export const files = {
    ...initialFiles,
    "Code/Python/Sum.py": {
        code: PyCode,
    },
};

export const finalFiles = {
    ...removeActiveFromFiles(files),
    "src/App.tsx": {
        code: UpdatedAppTsxCode,
        // active: true,
        hidden: true,
    },
    "Code/Python/Sum.py": {
        code: PyCode,
    },
};