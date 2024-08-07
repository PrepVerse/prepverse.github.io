import React, {
    createContext,
    FC,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
// import { useQuery } from "react-query";
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

// const followersAccessKey = process.env.REACT_APP_FOLLOWERS_ACCESS_KEY;
const calculateStreak = (): number => {
    const today = new Date();
    const startDate = new Date(2021, 6, 21); // 0-based month & day, so 6 is July
    const differenceInTime = today.getTime() - startDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
};
const streak = calculateStreak();
const EndPoint = "https://leetcode.com/graphql/";

export const CommunityStatsProvider: FC = ({ children }) => {
    const { siteConfig } = useDocusaurusContext();
    const followersAccessKey = siteConfig.customFields.REACT_APP_FOLLOWERS_ACCESS_KEY;
    const [loading, setLoading] = useState(true);
    const [githubStarCount, setGithubStarCount] = useState(0);
    const [githubFollowersCount, setGithubFollowersCount] = useState(0);
    const [githubAvatarUrl, setGithubAvatarUrl] = useState<String[]>([]);
    const [githubAvatarPageUrl, setGithubAvatarPageUrl] = useState<String[]>([]);
    const [githubAvatarName, setGithubAvatarName] = useState<String[]>([]);
    const [leetcodeBadgeImg, setLeetcodeBadgeImg] = useState<String[]>([]);
    const [leetcodeBadgeCount, setLeetcodeBadgesCount] = useState(79);
    const [totalLCProblem, setTotalLCProblem] = useState(3146);
    const [solvedProblem, setSolvedProblem] = useState(3141);
    const [totalLCEasy, setTotalLCEasy] = useState(817);
    const [easySolved, setEasySolved] = useState(799);
    const [totalLCMedium, setTotalLCMedium] = useState(1703);
    const [mediumSolved, setMediumSolved] = useState(1643);
    const [totalLCHard, setTotalLCHard] = useState(726);
    const [hardSolved, setHardSolved] = useState(699);
    const [lcStreakCount, setLCStreakCount] = useState(streak);

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
                    // headers: {
                    //     Authorization: `token ${followersAccessKey}`,
                    // },
                }),
                fetch(`https://alfa-leetcode-api.onrender.com/akashsingh3031/solved`, {
                    // headers: {
                    //     Authorization: `token ${followersAccessKey}`,
                    // },
                }),
                fetch(`https://alfa-leetcode-api.onrender.com/problems?limit=4000`, {
                    // headers: {
                    //     Authorization: `token ${followersAccessKey}`,
                    // },
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
            const streakCountResponse = await fetch(EndPoint, {
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/json',
                //     Authorization: `token ${followersAccessKey}`,
                // },
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
        const interval = setInterval(() => {
            setLCStreakCount(calculateStreak());
        }, 86400000); // Update every 24 hours
        fetchData();
        return () => clearInterval(interval);
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
