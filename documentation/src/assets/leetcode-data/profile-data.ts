export const globalDataQuery = `
    query globalData {
        userStatus {
            userId
            isSignedIn
            isMockUser
            isPremium
            isVerified
            username
            avatar
            isAdmin
            isSuperuser
            permissions
            isTranslator
            activeSessionId
            checkedInToday
            notificationStatus {
                lastModified
                numUnread
            }
        }
    }
`;

export const siteAnnouncementsQuery = `
    query siteAnnouncements {
        siteAnnouncements {
            title
            content
            blacklistUrls
            whitelistUrls
            navbarItem
        }
    }
`;

export const userPublicProfileQuery = `
    query userPublicProfile($username: String!) {
        matchedUser(username: $username) {
            contestBadge {
                name
                expired
                hoverText
                icon
            }
            username
            githubUrl
            twitterUrl
            linkedinUrl
            profile {
                ranking
                userAvatar
                realName
                aboutMe
                school
                websites
                countryName
                company
                jobTitle
                skillTags
                postViewCount
                postViewCountDiff
                reputation
                reputationDiff
                solutionCount
                solutionCountDiff
                categoryDiscussCount
                categoryDiscussCountDiff
            }
        }
    }
`;
// {"username": "akashsingh3031"}

export const languageStatsQuery = `
    query languageStats($username: String!) {
        matchedUser(username: $username) {
            languageProblemCount {
                languageName
                problemsSolved
            }
        }
    }
`;
// {"username": "akashsingh3031"}

export const skillStatsQuery = `
    query skillStats($username: String!) {
        matchedUser(username: $username) {
            tagProblemCounts {
                advanced {
                    tagName
                    tagSlug
                    problemsSolved
                }
                intermediate {
                    tagName
                    tagSlug
                    problemsSolved
                }
                fundamental {
                    tagName
                    tagSlug
                    problemsSolved
                }
            }
        }
    }
`;
// {"username": "akashsingh3031"}

export const userContestRankingInfoQuery = `
    query userContestRankingInfo($username: String!) {
        userContestRanking(username: $username) {
            attendedContestsCount
            rating
            globalRanking
            totalParticipants
            topPercentage
            badge {
                name
            }
        }
        userContestRankingHistory(username: $username) {
            attended
            trendDirection
            problemsSolved
            totalProblems
            finishTimeInSeconds
            rating
            ranking
            contest {
                title
                startTime
            }
        }
    }
`;
// {"username": "akashsingh3031"}

export const userProblemsSolvedQuery = `
    query userProblemsSolved($username: String!) {
        allQuestionsCount {
            difficulty
            count
        }
        matchedUser(username: $username) {
            problemsSolvedBeatsStats {
                difficulty
                percentage
            }
            submitStatsGlobal {
                acSubmissionNum {
                    difficulty
                    count
                }
            }
        }
    }
`;
// {"username": "akashsingh3031"}

export const userBadgesQuery = `
    query userBadges($username: String!) {
        matchedUser(username: $username) {
            badges {
                id
                name
                shortName
                displayName
                icon
                hoverText
                medal {
                    slug
                    config {
                        iconGif
                        iconGifBackground
                    }
                }
                creationDate
                category
            }
            upcomingBadges {
                name
                icon
                progress
            }
        }
    }
`;
// {"username": "akashsingh3031"}

export const userProfileCalendarQuery = `
    query userProfileCalendar($username: String!, $year: Int) {
        matchedUser(username: $username) {
            userCalendar(year: $year) {
                activeYears
                streak
                totalActiveDays
                dccBadges {
                    timestamp
                    badge {
                        name
                        icon
                    }
                }
                submissionCalendar
            }
        }
    }
`;
// {"username": "akashsingh3031"}

export const recentAcSubmissionsQuery = `
    query recentAcSubmissions($username: String!, $limit: Int!) {
        recentAcSubmissionList(username: $username, limit: $limit) {
            id
            title
            titleSlug
            timestamp
        }
    }
`;
// {"username": "akashsingh3031", "limit": 15}

export const getStreakCounterQuery = `
    query getStreakCounter {
        streakCounter {
            streakCount
            daysSkipped
            currentDayCompleted
        }
    }
`;

export const currentTimestampQuery = `
    query currentTimestamp {
        currentTimestamp
    }
`;

export const questionOfTodayQuery = `
    query questionOfToday {
        activeDailyCodingChallengeQuestion {
            date
            userStatus
            link
            question {
                acRate
                difficulty
                freqBar
                frontendQuestionId: questionFrontendId
                isFavor
                paidOnly: isPaidOnly
                status
                title
                titleSlug
                hasVideoSolution
                hasSolution
                topicTags {
                    name
                    id
                    slug
                }
            }
        }
    }
`;

export const codingChallengeMedalQuery = `
    query codingChallengeMedal($year: Int!, $month: Int!) {
        dailyChallengeMedal(year: $year, month: $month) {
            name
            config {
                icon
            }
        }
    }
`;
// {"year": 2024, "month": 1}

export const getUserProfileQuery = `
    query getUserProfile($username: String!) {
        matchedUser(username: $username) {
            activeBadge {
                displayName
                icon
            }
        }
    }
`;
// {"username": "akashsingh3031"}
