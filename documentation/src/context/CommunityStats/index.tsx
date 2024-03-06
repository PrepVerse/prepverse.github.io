import React, {
    createContext,
    FC,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

interface ICommunityStatsContext {
    githubStarCount: number;
    githubStarCountText: string;
    githubFollowersCount: number;
    githubFollowersCountText: string;
    githubAvatarUrl: string;
    githubAvatarPageUrl: string;
    githubAvatarName: string;
    githubCommitCount: number;
    discordMemberCount: number;
    discordMemberCountText: string;
    loading: boolean;
    refetch: () => Promise<void>;
}

export const CommunityStatsContext = createContext<
    ICommunityStatsContext | undefined
>(undefined);

export const CommunityStatsProvider: FC = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [githubStarCount, setGithubStarCount] = useState(0);
    const [githubFollowersCount, setGithubFollowersCount] = useState(0);
    const [githubAvatarUrl, setGithubAvatarUrl] = useState<String[]>([]);
    const [githubAvatarPageUrl, setGithubAvatarPageUrl] = useState<String[]>([]);
    const [githubAvatarName, setGithubAvatarName] = useState<String[]>([]);

    const fetchGithubCount = useCallback(async (signal: AbortSignal) => {
        try {
            setLoading(true);

            const response = await fetch(
                `https://api.github.com/repos/AkashSingh3031/The-Complete-FAANG-Preparation`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    signal,
                },
            );

            const response2 = await fetch(
                `https://api.github.com/users/AkashSingh3031`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    signal,
                },
            );
            
            let allFollowers = [];
            let page = 1;
            let totalPages = 1;

            while (page <= totalPages) {
                const response3 = await fetch(
                    `https://api.github.com/users/AkashSingh3031/followers?per_page=100&page=${page}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        signal,
                    },
                );

                const followers = await response3.json();
                allFollowers = [...allFollowers, ...followers];

                // Check if there are more pages
                const linkHeader = response3.headers.get("Link");
                const hasNextPage = linkHeader && linkHeader.includes('rel="next"');
                if (hasNextPage) {
                    totalPages++;
                }

                page++;
            }

            const starCount = await response.json();
            const followersCount = await response2.json();

            setGithubStarCount(starCount.stargazers_count);
            setGithubFollowersCount(followersCount.followers);
            
            const avatarNames = allFollowers.map(follower => follower.login);
            const avatarUrls = allFollowers.map(follower => follower.avatar_url);
            const avatarPageUrls = allFollowers.map(follower => follower.html_url);

            // Create an array of objects where each object represents a follower
            const followers = avatarNames.map((name, index) => ({
                name,
                avatarUrl: avatarUrls[index],
                pageUrl: avatarPageUrls[index],
            }));
            
            // Sort the followers array by name
            followers.sort((a, b) => a.name.localeCompare(b.name));
            
            // Separate the sorted data back into individual arrays
            const sortedAvatarNames = followers.map((follower) => follower.name);
            const sortedAvatarUrls = followers.map((follower) => follower.avatarUrl);
            const sortedAvatarPageUrls = followers.map((follower) => follower.pageUrl);
            
            // Set the sorted arrays to state
            setGithubAvatarName(sortedAvatarNames);
            setGithubAvatarUrl(sortedAvatarUrls);
            setGithubAvatarPageUrl(sortedAvatarPageUrls);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const abortController = new AbortController();
        fetchGithubCount(abortController.signal);

        return () => {
            abortController.abort();
        };
    }, [fetchGithubCount]);

    const githubStarCountText = useMemo(() => {
        return convertStatToText(githubStarCount);
    }, [githubStarCount]);

    const githubFollowersCountText = useMemo(() => {
        return convertStatToText(githubFollowersCount);
    }, [githubFollowersCount]);

    const value = {
        githubStarCount,
        githubStarCountText,
        githubFollowersCount,
        githubFollowersCountText,
        githubAvatarUrl,
        githubAvatarPageUrl,
        githubAvatarName,
        loading,
        refetch: fetchGithubCount,
    };

    return (
        <CommunityStatsContext.Provider value={value}>
            {children}
        </CommunityStatsContext.Provider>
    );
};

export const useCommunityStatsContext = () => {
    const context = useContext(CommunityStatsContext);
    if (context === undefined) {
        throw new Error(
            "useGithubProvider must be used within a GithubProvider",
        );
    }
    return context;
};

export const convertStatToText = (num: number) => {
    const hasIntlSupport =
        typeof Intl == "object" &&
        Intl &&
        typeof Intl.NumberFormat == "function";

    if (!hasIntlSupport) {
        return `${(num / 1000).toFixed(1)}k`;
    }

    const formatter = new Intl.NumberFormat("en-US", {
        notation: "compact",
        compactDisplay: "short",
        maximumSignificantDigits: 3,
    });
    return formatter.format(num);
};
