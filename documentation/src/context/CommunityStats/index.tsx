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
    leetcodeBadgeImg: string;
    leetcodeBadgeCount: number;
    solvedProblem: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
    totalLCProblem: number;
    loading: boolean;
    refetch: () => Promise<void>;
}

export const CommunityStatsContext = createContext<
    ICommunityStatsContext | undefined
>(undefined);

const ACCESS_TOKEN = process.env.REACT_APP_FOLLOWERS_ACCESS_KEY;

export const CommunityStatsProvider: FC = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [githubStarCount, setGithubStarCount] = useState(0);
    const [githubFollowersCount, setGithubFollowersCount] = useState(0);
    const [githubAvatarUrl, setGithubAvatarUrl] = useState<String[]>([]);
    const [githubAvatarPageUrl, setGithubAvatarPageUrl] = useState<String[]>([]);
    const [githubAvatarName, setGithubAvatarName] = useState<String[]>([]);
    const [leetcodeBadgeImg, setLeetcodeBadgeImg] = useState<String[]>([]);
    const [leetcodeBadgeCount, setLeetcodeBadgesCount] = useState(0);
    const [solvedProblem, setSolvedProblem] = useState(0);
    const [easySolved, setEasySolved] = useState(0);
    const [mediumSolved, setMediumSolved] = useState(0);
    const [hardSolved, setHardSolved] = useState(0);
    const [totalLCProblem, setTotalLCProblem] = useState(0);

    const fetchGithubCount = useCallback(async (signal: AbortSignal) => {
        try {
            setLoading(true);

            const fetchStarCounts = await fetch(
                `https://api.github.com/repos/AkashSingh3031/The-Complete-FAANG-Preparation`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        // "Authorization": `token ${ACCESS_TOKEN}`,
                    },
                    signal,
                },
            );

            const fetchFollowerCounts = await fetch(
                `https://api.github.com/users/AkashSingh3031`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        // "Authorization": `token ${ACCESS_TOKEN}`,
                    },
                    signal,
                },
            );
            
            let allFollowers = [];
            let page = 1;
            let totalPages = 1;
            while (page <= totalPages) {
                const fetchFollowerDetails = await fetch(
                    `https://api.github.com/users/AkashSingh3031/followers?per_page=100&page=${page}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `token ${ACCESS_TOKEN}`,
                        },
                        signal,
                    },
                );
                const followers = await fetchFollowerDetails.json();
                allFollowers = [...allFollowers, ...followers];
                // Check if there are more pages
                const linkHeader = fetchFollowerDetails.headers.get("Link");
                const hasNextPage = linkHeader && linkHeader.includes('rel="next"');
                if (hasNextPage) {
                    totalPages++;
                }
                page++;
            }

            const followersWithFullNames = await Promise.all(
                allFollowers.map(async (follower) => {
                    const fetchFollowersFullDetails = await fetch(follower.url, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            // "Authorization": `token ${ACCESS_TOKEN}`,
                        },
                    });
                    const FollowersFullDetails = await fetchFollowersFullDetails.json();
                    return {
                        name: FollowersFullDetails.name || follower.login, // Use login if name is not available
                        avatarUrl: follower.avatar_url,
                        pageUrl: follower.html_url,
                    };
                })
            );
            
            let allBadges = [];
            const fetchBadgeDetails = await fetch(
                `https://alfa-leetcode-api.onrender.com/akashsingh3031/badges`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        // "Authorization": `token ${ACCESS_TOKEN}`,
                    },
                    signal,
                },
            );
            
            const fetchSolvedProblemsDetails = await fetch(
                `https://alfa-leetcode-api.onrender.com/akashsingh3031/solved`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        // "Authorization": `token ${ACCESS_TOKEN}`,
                    },
                    signal,
                },
            );
            
            const fetchTotalLCProblem = await fetch(
                `https://alfa-leetcode-api.onrender.com/problems`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        // "Authorization": `token ${ACCESS_TOKEN}`,
                    },
                    signal,
                },
            );

            const starCount = await fetchStarCounts.json();
            setGithubStarCount(starCount.stargazers_count);

            const followersCount = await fetchFollowerCounts.json();
            setGithubFollowersCount(followersCount.followers);
            
            followersWithFullNames.sort((a, b) => a.name.localeCompare(b.name));
            const sortedAvatarNames = followersWithFullNames.map((follower) => follower.name);
            const sortedAvatarUrls = followersWithFullNames.map((follower) => follower.avatarUrl);
            const sortedAvatarPageUrls = followersWithFullNames.map((follower) => follower.pageUrl);
            setGithubAvatarName(sortedAvatarNames);
            setGithubAvatarUrl(sortedAvatarUrls);
            setGithubAvatarPageUrl(sortedAvatarPageUrls);

            const badgeDetails = await fetchBadgeDetails.json();
            const badgesCount = badgeDetails.badgesCount;
            const badges = badgeDetails.badges.map(badge => {
                const iconUrl = badge.icon.startsWith('https://') ? badge.icon : `https://leetcode.com${badge.icon}`;
                return {
                    id: badge.id,
                    displayName: badge.displayName,
                    icon: iconUrl,
                    creationDate: badge.creationDate
                };
            });
            allBadges = [...allBadges, ...badges];
            setLeetcodeBadgeImg(allBadges);
            setLeetcodeBadgesCount(badgesCount);
            
            const solvedProblemsDetails = await fetchSolvedProblemsDetails.json();
            setSolvedProblem(solvedProblemsDetails.solvedProblem);
            setEasySolved(solvedProblemsDetails.easySolved);
            setMediumSolved(solvedProblemsDetails.mediumSolved);
            setHardSolved(solvedProblemsDetails.hardSolved);

            const totalLCProblem = await fetchTotalLCProblem.json();
            setTotalLCProblem(totalLCProblem.totalQuestions);
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
        leetcodeBadgeImg,
        leetcodeBadgeCount,
        solvedProblem,
        easySolved,
        mediumSolved,
        hardSolved,
        totalLCProblem,
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
