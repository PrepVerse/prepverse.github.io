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
                        "Authorization": "token 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",
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
                        "Authorization": "token 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",
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
                            "Authorization": "token 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",
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

            const followersWithFullNames = await Promise.all(
                allFollowers.map(async (follower) => {
                    const profileResponse = await fetch(follower.url, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "token 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",
                        },
                    });
                    const profileData = await profileResponse.json();
                    return {
                        name: profileData.name || follower.login, // Use login if name is not available
                        avatarUrl: follower.avatar_url,
                        pageUrl: follower.html_url,
                    };
                })
            );

            const starCount = await response.json();
            setGithubStarCount(starCount.stargazers_count);

            const followersCount = await response2.json();
            setGithubFollowersCount(followersCount.followers);
            
            followersWithFullNames.sort((a, b) => a.name.localeCompare(b.name));
            const sortedAvatarNames = followersWithFullNames.map((follower) => follower.name);
            const sortedAvatarUrls = followersWithFullNames.map((follower) => follower.avatarUrl);
            const sortedAvatarPageUrls = followersWithFullNames.map((follower) => follower.pageUrl);
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
