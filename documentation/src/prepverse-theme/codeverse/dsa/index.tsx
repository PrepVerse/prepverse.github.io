import React from "react";
import clsx from "clsx";

export const ProblemsTable: React.FC = () => {
    return (
        <div
            className={clsx(
                "flex flex-wrap",
                // "border dark:border-gray-700 border-gray-200",
                "w-full",
                "rounded-2xl landing-sm:rounded-[32px]",
            )}
        >
            {/* <table
                className={clsx(
                    "rounded-[32px]",
                )}
            >
                <thead>
                    <tr>
                        <th className="px-4 py-2">Problem</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Priority</th>
                        <th className="px-4 py-2">Assigned To</th>
                    </tr>
                </thead>
                <tbody>
                    {problems.map((problem) => (
                        <tr key={problem.id} className="border-t">
                            <td className="px-4 py-2">{problem.problem}</td>
                            <td className="px-4 py-2">{problem.status}</td>
                            <td className="px-4 py-2">{problem.priority}</td>
                            <td className="px-4 py-2">{problem.assignedTo}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    );
};

const problems = [
    {
        id: 1,
        problem: "Two Sum",
        status: "Solved",
        priority: "Easy",
        assignedTo: "Leetcode",
    },
    {
        id: 2,
        problem: "Three Sum",
        status: "Solved",
        priority: "Medium",
        assignedTo: "Leetcode",
    },
    {
        id: 3,
        problem: "Four Sum",
        status: "Solved",
        priority: "Hard",
        assignedTo: "Leetcode",
    },
];