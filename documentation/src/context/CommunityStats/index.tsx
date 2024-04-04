import React, {
    createContext,
    FC,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

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
    totalLCEasy: number;
    totalLCMedium: number;
    totalLCHard: number;
    lcStreakCount: number;
    loading: boolean;
    refetch: () => Promise<void>;
}

export const CommunityStatsContext = createContext<
    ICommunityStatsContext | undefined
>(undefined);

export const CommunityStatsProvider: FC = ({ children }) => {
    // const { siteConfig } = useDocusaurusContext();
    // const followersAccessKey = siteConfig.customFields.REACT_APP_FOLLOWERS_ACCESS_KEY;
    const followersAccessKey = process.env.REACT_APP_FOLLOWERS_ACCESS_KEY;
    console.log(followersAccessKey);
    const [loading, setLoading] = useState(true);
    const [githubStarCount, setGithubStarCount] = useState(0);
    const [githubFollowersCount, setGithubFollowersCount] = useState(0);
    const [githubAvatarUrl, setGithubAvatarUrl] = useState<String[]>([]);
    const [githubAvatarPageUrl, setGithubAvatarPageUrl] = useState<String[]>([]);
    const [githubAvatarName, setGithubAvatarName] = useState<String[]>([]);
    const [leetcodeBadgeImg, setLeetcodeBadgeImg] = useState<String[]>([]);
    const [leetcodeBadgeCount, setLeetcodeBadgesCount] = useState(73);
    const [solvedProblem, setSolvedProblem] = useState(3031);
    const [easySolved, setEasySolved] = useState(772);
    const [mediumSolved, setMediumSolved] = useState(1589);
    const [hardSolved, setHardSolved] = useState(670);
    const [totalLCProblem, setTotalLCProblem] = useState(3103);
    const [totalLCEasy, setTotalLCEasy] = useState(785);
    const [totalLCMedium, setTotalLCMedium] = useState(1628);
    const [totalLCHard, setTotalLCHard] = useState(690);
    const [lcStreakCount, setLCStreakCount] = useState(1000);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);

            // Fetch Github data
            const [starCountsResponse, followerCountsResponse] = await Promise.all([
                fetch(`https://api.github.com/repos/AkashSingh3031/The-Complete-FAANG-Preparation`, {
                    headers: {
                        Authorization: `token ${followersAccessKey}`,
                    },
                }),
                fetch(`https://api.github.com/users/AkashSingh3031`, {
                    headers: {
                        Authorization: `token ${followersAccessKey}`,
                    },
                }),
            ]);

            const [starCounts, followerCounts] = await Promise.all([
                starCountsResponse.json(),
                followerCountsResponse.json(),
            ]);

            setGithubStarCount(starCounts.stargazers_count);
            setGithubFollowersCount(followerCounts.followers);

            // Fetch Github followers
            const fetchFollowers = async () => {
                const allFollowers = [];
                let page = 1;
                let totalPages = 1;

                while (page <= totalPages) {
                    const response = await fetch(`https://api.github.com/users/AkashSingh3031/followers?per_page=100&page=${page}`, {
                        headers: {
                            Authorization: `token ${followersAccessKey}`,
                        },
                    });
                    const followers = await response.json();
                    allFollowers.push(...followers);
                    // Check if there are more pages
                    const linkHeader = response.headers.get("Link");
                    const hasNextPage = linkHeader && linkHeader.includes('rel="next"');
                    if (hasNextPage) {
                        totalPages++;
                    }
                    page++;
                }
                return allFollowers;
            };

            const followersWithFullNames = await Promise.all(
                (await fetchFollowers()).map(async (follower: any) => {
                    const response = await fetch(follower.url, {
                        headers: {
                            Authorization: `token ${followersAccessKey}`,
                        },
                    });
                    const followerDetails = await response.json();
                    return {
                        name: followerDetails.name || follower.login, // Use login if name is not available
                        avatarUrl: follower.avatar_url,
                        pageUrl: follower.html_url,
                    };
                })
            );

            followersWithFullNames.sort((a, b) => a.name.localeCompare(b.name));
            const sortedAvatarNames = followersWithFullNames.map((follower) => follower.name);
            const sortedAvatarUrls = followersWithFullNames.map((follower) => follower.avatarUrl);
            const sortedAvatarPageUrls = followersWithFullNames.map((follower) => follower.pageUrl);
            setGithubAvatarName(sortedAvatarNames);
            setGithubAvatarUrl(sortedAvatarUrls);
            setGithubAvatarPageUrl(sortedAvatarPageUrls);

            // Fetch LeetCode data
            const [badgeDetailsResponse, solvedProblemsResponse, totalLCProblemResponse] = await Promise.all([
                fetch(`https://alfa-leetcode-api.onrender.com/akashsingh3031/badges`, {
                    headers: {
                        Authorization: `token ${followersAccessKey}`,
                    },
                }),
                fetch(`https://alfa-leetcode-api.onrender.com/akashsingh3031/solved`, {
                    headers: {
                        Authorization: `token ${followersAccessKey}`,
                    },
                }),
                fetch(`https://alfa-leetcode-api.onrender.com/problems?limit=4000`, {
                    headers: {
                        Authorization: `token ${followersAccessKey}`,
                    },
                }),
            ]);

            const [badgeDetails, solvedProblems, totalLCProblem] = await Promise.all([
                badgeDetailsResponse.json(),
                solvedProblemsResponse.json(),
                totalLCProblemResponse.json(),
            ]);

            const badgesCount = badgeDetails.badgesCount;
            const badges = badgeDetails.badges.map(badge => {
                const iconUrl = badge.icon.startsWith('https://') ? badge.icon : `https://leetcode.com${badge.icon}`;
                return {
                    id: badge.id,
                    displayName: badge.displayName,
                    icon: iconUrl,
                    creationDate: badge.creationDate,
                };
            });
            setLeetcodeBadgesCount(badgesCount);
            setLeetcodeBadgeImg(badges);

            setSolvedProblem(solvedProblems.solvedProblem);
            setEasySolved(solvedProblems.easySolved);
            setMediumSolved(solvedProblems.mediumSolved);
            setHardSolved(solvedProblems.hardSolved);

            setTotalLCProblem(totalLCProblem.totalQuestions);
            // Count easy, medium, and hard problems
            let easyCount = 0;
            let mediumCount = 0;
            let hardCount = 0;
            totalLCProblem.problemsetQuestionList.forEach((problem: any) => {
                if (problem.difficulty === 'Easy') {
                    easyCount++;
                } else if (problem.difficulty === 'Medium') {
                    mediumCount++;
                } else if (problem.difficulty === 'Hard') {
                    hardCount++;
                }
            });
            setTotalLCEasy(easyCount);
            setTotalLCMedium(mediumCount);
            setTotalLCHard(hardCount);
            
            // Fetch LeetCode streak count
            const streakCountResponse = await fetch('https://leetcode.com/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `token ${followersAccessKey}`,
                },
                body: JSON.stringify({
                    query: `
                        query getStreakCounter {
                            streakCounter {
                                streakCount
                                daysSkipped
                                currentDayCompleted
                            }
                        }
                    `,
                }),
            });

            const responseData = await streakCountResponse.json();
            const streakCount = responseData.data.streakCounter.streakCount;
            setLCStreakCount(streakCount);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }, [followersAccessKey]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

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
        totalLCEasy,
        totalLCMedium,
        totalLCHard,
        lcStreakCount,
        loading,
        refetch: fetchData,
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
